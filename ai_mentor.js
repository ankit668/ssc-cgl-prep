/**
 * ============================================================================
 * AI MENTOR / DOUBT SOLVER (Client-Side Gemini Engine)
 * Designed for SSC CGL Prep (Maths Maestro & Tier 2 Hub)
 * Zero-server dependency: Runs on GitHub Pages via direct client-side API.
 * ============================================================================
 */

(function () {
    "use strict";

    // Storage Keys
    const STORAGE_KEY = "ssc_gemini_api_key_v1";
    const STORAGE_HISTORY = "ssc_ai_mentor_history_v1";
    const STORAGE_MODEL = "ssc_ai_mentor_model_v1";

    // Defaults
    const DEFAULT_MODEL = "gemini-3.8-flash";
    const SYSTEM_INSTRUCTION = `You are "Maestro Ma'am" 👩‍🏫, an expert, warm, and encouraging female SSC CGL & CHSL teacher and mentor, following Vishesh Shukla's Maths Maestro methodology.
Your personality: You are like a brilliant, caring Didi (elder sister) or teacher — patient, clear, motivating, and always rooting for the student. You address students affectionately ("Beta", "Champ", "Dear Student") and celebrate their progress.
Your mission is to help SSC aspirants clear every doubt with warmth, maximum speed, and crystal clarity.
Guidelines:
1. Tone & Persona: Warm, nurturing, confident, and enthusiastic. Speak like a real teacher — simple Hindi-English mix when helpful, e.g. "Beta, yeh dekho — ek shortcut hai!". Always end answers with an encouraging phrase.
2. Short-Tricks: Highlight 5-10 second topper shortcuts (unit digit, digital sum, option elimination, symmetry, triplets) with ⭐ emoji markers.
3. Math Typography: NEVER output raw LaTeX markup (strictly NO \\frac, \\text, \\mathbf, \\times, \\left, or wrapping dollar signs like $...$). Write clean textbook math: e.g. 60/20, 20 mins, 60 km, 90 km/h, 90 + 90 = 180 km, x² + 1/x², √3, 30°.
4. Step-by-Step: Break every problem into clear, numbered steps. No skipping. Think aloud like you're at a whiteboard.
5. Vocabulary Tips: For English words, give a 5-second memory hook / mnemonic + Hindi meaning + example sentence.
6. Traps & Common Mistakes: Always point out where aspirants lose marks — label them ⚠️ Common Trap.
7. Closing: Always end with an encouraging line like "You've got this, Champ! 💪", "Ek aur practice karo — aap bahut acha kar rahe ho! ⭐", or "Keep going, Beta — SSC tera hai! 🚀".`;

    // State
    let apiKey = localStorage.getItem(STORAGE_KEY) || "";
    let currentModel = localStorage.getItem(STORAGE_MODEL) || DEFAULT_MODEL;

    // Automatically migrate legacy retired models to gemini-3.8-flash
    if (!currentModel || currentModel.includes("1.5") || currentModel.includes("2.0") || currentModel.includes("2.5")) {
        currentModel = DEFAULT_MODEL;
        localStorage.setItem(STORAGE_MODEL, currentModel);
    }

    let chatHistory = [];
    let currentQuestionContext = null;
    try {
        currentQuestionContext = JSON.parse(sessionStorage.getItem("ssc_ai_q_context_v1") || "null");
    } catch (e) {
        currentQuestionContext = null;
    }
    let isGenerating = false;
    let pendingImageData = null; // { mimeType, base64 } for image doubt upload

    // Load History
    try {
        chatHistory = JSON.parse(localStorage.getItem(STORAGE_HISTORY) || "[]");
    } catch (e) {
        chatHistory = [];
    }

    // Initialize UI on DOM Ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initUI);
    } else {
        initUI();
    }

    function initUI() {
        if (document.getElementById("aim-root")) return;

        const root = document.createElement("div");
        root.id = "aim-root";
        root.innerHTML = `
            <!-- Floating Button -->
            <button class="aim-float-btn" id="aim-float-toggle" title="Ask Maestro AI Mentor">
                <span class="aim-sparkle">✨</span>
                <span>Ma'am 👩‍🏫</span>
            </button>

            <!-- Chat Drawer -->
            <div class="aim-drawer" id="aim-drawer">
                <!-- Header -->
                <div class="aim-header">
                    <div class="aim-header-left">
                        <div class="aim-avatar">📐</div>
                        <div class="aim-title-group">
                            <h3>Maestro Ma'am 👩‍🏫</h3>
                            <span class="aim-status-badge" id="aim-model-badge">SSC Doubt Solver • ${escapeHtml(currentModel.replace('gemini-', ''))}</span>
                        </div>
                    </div>
                    <div class="aim-header-actions">
                        <button class="aim-icon-btn" id="aim-btn-settings" title="API Key Settings">⚙️</button>
                        <button class="aim-icon-btn" id="aim-btn-clear" title="Clear Chat History">🗑️</button>
                        <button class="aim-icon-btn" id="aim-btn-close" title="Close Drawer">✕</button>
                    </div>
                </div>

                <!-- Chips Bar -->
                <div class="aim-chips-bar" id="aim-chips-bar">
                    <button class="aim-chip" data-prompt="Ma'am, please explain this step-by-step like teaching a beginner.">💡 Step-by-Step</button>
                    <button class="aim-chip" data-prompt="Ma'am, give me the fastest 5-second topper shortcut for this!">⚡ 5-Sec Shortcut</button>
                    <button class="aim-chip" data-prompt="Ma'am, what is the common mistake students make here? Where do they lose marks?">⚠️ Common Traps</button>
                    <button class="aim-chip" data-prompt="Give me another similar practice question with options and solution based on this concept.">🔄 Similar Question</button>
                    <button class="aim-chip" data-prompt="Provide a quick formula & identities cheat-sheet for this topic.">📝 Formula Recap</button>
                </div>

                <!-- Messages -->
                <div class="aim-messages" id="aim-messages"></div>

                <!-- Input Area -->
                <div class="aim-input-area">
                    <input type="file" id="aim-img-input" accept="image/*" style="display:none;">
                    <button class="aim-img-btn" id="aim-img-btn" title="Upload image doubt 📸" style="background:none;border:none;cursor:pointer;font-size:1.35rem;padding:0 6px;opacity:0.75;flex-shrink:0;" aria-label="Upload image">📸</button>
                    <div id="aim-img-preview" style="display:none;position:relative;flex-shrink:0;">
                        <img id="aim-img-thumb" style="height:36px;width:36px;object-fit:cover;border-radius:6px;border:2px solid var(--aim-cyan,#0ff);" alt="preview">
                        <button id="aim-img-clear" title="Remove image" style="position:absolute;top:-6px;right:-6px;background:#e53935;border:none;border-radius:50%;width:16px;height:16px;font-size:0.6rem;color:#fff;cursor:pointer;line-height:16px;text-align:center;padding:0;">✕</button>
                    </div>
                    <textarea class="aim-textarea" id="aim-input" placeholder="Beta, kya doubt hai? Ask Ma'am anything... 😊" rows="1"></textarea>
                    <button class="aim-send-btn" id="aim-send-btn" title="Send (Enter)">➤</button>
                </div>

                <!-- Settings Overlay (Hidden by default) -->
                <div class="aim-settings-view" id="aim-settings-view" style="display: none;">
                    <div>
                        <h4>⚡ AI Mentor Configuration</h4>
                        <p>To enable the instant AI doubt solver, paste your free Gemini API key below. It runs completely inside your browser and is stored only on your device.</p>

                        <div class="aim-settings-input-group">
                            <label for="aim-key-input">Gemini API Key</label>
                            <input type="password" id="aim-key-input" class="aim-settings-input" placeholder="AIzaSy..." value="${escapeHtml(apiKey)}">
                        </div>

                        <div class="aim-settings-input-group">
                            <label for="aim-model-select">AI Model</label>
                            <select id="aim-model-select" class="aim-settings-input" style="color:#FFF;">
                                <option value="gemini-3.8-flash" ${currentModel === 'gemini-3.8-flash' ? 'selected' : ''}>Gemini 3.8 Flash (Ultra-fast & recommended)</option>
                                <option value="gemini-3.5-flash" ${currentModel === 'gemini-3.5-flash' ? 'selected' : ''}>Gemini 3.5 Flash</option>
                                <option value="gemini-3.1-flash-lite" ${currentModel === 'gemini-3.1-flash-lite' ? 'selected' : ''}>Gemini 3.1 Flash-Lite</option>
                            </select>
                            <div id="aim-model-status" style="font-size:0.75rem; color:var(--aim-cyan); margin-top:4px;"></div>
                        </div>

                        <div class="aim-guide-box">
                            <strong>How to get a 100% free key (Takes 30 seconds):</strong><br>
                            1. Visit <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Google AI Studio (Click here)</a><br>
                            2. Sign in with Google & click <strong>"Create API Key"</strong>.<br>
                            3. Copy & paste it above. Free tier includes 15 requests/min!
                        </div>
                    </div>

                    <div>
                        <button class="aim-save-btn" id="aim-save-settings">Save & Start Asking</button>
                        <button class="aim-mini-btn" id="aim-cancel-settings" style="width:100%; justify-content:center; margin-top:8px;">Back to Chat</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(root);

        // Check for collisions with #fatman-fab or bottom bars
        detectFabCollisions();
        window.addEventListener("load", detectFabCollisions);

        // Bind Events
        bindUIEvents();
        renderHistory();

        // If no API key, show welcome prompt in messages
        if (!apiKey) {
            renderWelcomeMessage();
        } else {
            // Auto-refresh model list in background
            refreshAvailableModels(apiKey);
        }
    }

    function detectFabCollisions() {
        const fatman = document.getElementById("fatman-fab");
        const toggleBtn = document.getElementById("aim-float-toggle");
        if (fatman && toggleBtn) {
            toggleBtn.classList.add("aim-stacked");
        }
    }

    function bindUIEvents() {
        const toggleBtn = document.getElementById("aim-float-toggle");
        const drawer = document.getElementById("aim-drawer");
        const closeBtn = document.getElementById("aim-btn-close");
        const settingsBtn = document.getElementById("aim-btn-settings");
        const clearBtn = document.getElementById("aim-btn-clear");
        const sendBtn = document.getElementById("aim-send-btn");
        const textarea = document.getElementById("aim-input");
        const settingsView = document.getElementById("aim-settings-view");
        const saveSettingsBtn = document.getElementById("aim-save-settings");
        const cancelSettingsBtn = document.getElementById("aim-cancel-settings");
        const chipsBar = document.getElementById("aim-chips-bar");

        toggleBtn.addEventListener("click", () => {
            drawer.classList.toggle("open");
            if (drawer.classList.contains("open")) {
                scrollBottom();
                if (!apiKey) {
                    showSettings(true);
                } else {
                    textarea.focus();
                }
            }
        });

        closeBtn.addEventListener("click", () => {
            drawer.classList.remove("open");
        });

        settingsBtn.addEventListener("click", () => {
            showSettings(settingsView.style.display === "none");
        });

        cancelSettingsBtn.addEventListener("click", () => {
            showSettings(false);
        });

        saveSettingsBtn.addEventListener("click", () => {
            const inputVal = document.getElementById("aim-key-input").value.trim();
            const modelVal = document.getElementById("aim-model-select").value;

            apiKey = inputVal;
            currentModel = modelVal || DEFAULT_MODEL;

            localStorage.setItem(STORAGE_KEY, apiKey);
            localStorage.setItem(STORAGE_MODEL, currentModel);

            updateModelBadge();
            showSettings(false);
            addMessage("system-info", `✅ Configuration saved! Model: ${currentModel}`);
            if (chatHistory.length === 0) {
                renderWelcomeMessage();
            }

            if (apiKey) {
                refreshAvailableModels(apiKey);
            }
        });

        clearBtn.addEventListener("click", () => {
            if (confirm("Clear AI Mentor conversation history?")) {
                chatHistory = [];
                currentQuestionContext = null;
                localStorage.removeItem(STORAGE_HISTORY);
                renderHistory();
                renderWelcomeMessage();
            }
        });

        // Image upload button
        const imgBtn = document.getElementById("aim-img-btn");
        const imgInput = document.getElementById("aim-img-input");
        const imgPreview = document.getElementById("aim-img-preview");
        const imgThumb = document.getElementById("aim-img-thumb");
        const imgClear = document.getElementById("aim-img-clear");

        imgBtn.addEventListener("click", () => imgInput.click());

        imgInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            if (!file.type.startsWith("image/")) {
                addMessage("system-info", "Sirf image file upload karo Beta! (JPG, PNG, etc.)");
                return;
            }
            const reader = new FileReader();
            reader.onload = (ev) => {
                const dataUrl = ev.target.result;
                const base64 = dataUrl.split(",")[1];
                pendingImageData = { mimeType: file.type, base64: base64 };
                imgThumb.src = dataUrl;
                imgPreview.style.display = "block";
                imgBtn.style.opacity = "1";
                textarea.placeholder = "Beta, yeh image ke baare mein kya poochna hai? Ma'am solve kar doongi!";
                textarea.focus();
            };
            reader.readAsDataURL(file);
            imgInput.value = "";
        });

        imgClear.addEventListener("click", () => {
            pendingImageData = null;
            imgPreview.style.display = "none";
            imgBtn.style.opacity = "0.75";
            textarea.placeholder = "Beta, kya doubt hai? Ask Ma'am anything... ";
        });

        // Send message
        sendBtn.addEventListener("click", handleSend);
        textarea.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });

        // Chips click
        chipsBar.addEventListener("click", (e) => {
            const chip = e.target.closest(".aim-chip");
            if (chip) {
                const prompt = chip.getAttribute("data-prompt");
                textarea.value = prompt;
                handleSend();
            }
        });

        // Auto-expand textarea
        textarea.addEventListener("input", function() {
            this.style.height = "auto";
            this.style.height = Math.min(this.scrollHeight, 100) + "px";
        });
    }

    function updateModelBadge() {
        const badge = document.getElementById("aim-model-badge");
        if (badge) {
            badge.textContent = `SSC Doubt Solver • ${currentModel.replace('gemini-', '')}`;
        }
    }

    async function refreshAvailableModels(key) {
        if (!key) return;
        try {
            const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
            if (!resp.ok) return;
            const data = await resp.json();
            const models = data.models || [];

            // Filter models supporting generateContent
            const supported = models.filter(m =>
                m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent")
            );

            if (supported.length > 0) {
                const select = document.getElementById("aim-model-select");
                if (select) {
                    const flashModels = supported.filter(m => m.name.includes("flash"));
                    const otherModels = supported.filter(m => !m.name.includes("flash") && m.name.includes("pro"));
                    const allList = [...flashModels, ...otherModels];

                    let html = "";
                    allList.forEach(m => {
                        const cleanName = m.name.replace("models/", "");
                        const isSel = cleanName === currentModel ? "selected" : "";
                        const displayName = m.displayName || cleanName;
                        html += `<option value="${cleanName}" ${isSel}>${displayName} (${cleanName})</option>`;
                    });

                    select.innerHTML = html;

                    // If currentModel is not supported in the user's account, pick the best one
                    const hasCurrent = allList.some(m => m.name.replace("models/", "") === currentModel);
                    if (!hasCurrent && allList.length > 0) {
                        currentModel = allList[0].name.replace("models/", "");
                        localStorage.setItem(STORAGE_MODEL, currentModel);
                        select.value = currentModel;
                        updateModelBadge();
                    }

                    const status = document.getElementById("aim-model-status");
                    if (status) {
                        status.textContent = `✓ Auto-synced ${allList.length} active models from your account.`;
                    }
                }
            }
        } catch (e) {
            console.warn("Could not auto-sync model list", e);
        }
    }

    function showSettings(show) {
        const settingsView = document.getElementById("aim-settings-view");
        settingsView.style.display = show ? "flex" : "none";
        if (show) {
            document.getElementById("aim-key-input").focus();
            if (apiKey) refreshAvailableModels(apiKey);
        }
    }

    function renderWelcomeMessage() {
        const container = document.getElementById("aim-messages");
        if (container.children.length === 0) {
            addMessage("assistant", `👩‍🏫 **Namaste Beta!** Main hoon aapki **Maestro Ma'am** — aapki SSC CGL & CHSL ki personal mentor! 🌸\n\nAap mujhse kuch bhi pooch sakte ho:\n- 📐 Koi bhi tricky Maths, Reasoning ya Geometry ka sawaal\n- ⚡ 5-second topper shortcuts & speed tricks\n- 📚 English vocabulary mnemonics & Hindi meanings\n- 🎯 Tap **"✨ Ask AI"** on any question card — main turant step-by-step solve kar doongi!\n\n${!apiKey ? '🔑 *Click ⚙️ in the top bar to paste your free Gemini API key to get started!*' : 'Toh batao — aaj kya doubt hai? 😊 Hum milke crack karenge! 💪'}`);
        }
    }

    function renderHistory() {
        const container = document.getElementById("aim-messages");
        container.innerHTML = "";
        chatHistory.forEach(msg => {
            appendMessageNode(msg.role, msg.text, false);
        });
        scrollBottom();
    }

    function addMessage(role, text) {
        chatHistory.push({ role, text, timestamp: Date.now() });
        // Keep last 25 messages
        if (chatHistory.length > 25) {
            chatHistory = chatHistory.slice(-25);
        }
        localStorage.setItem(STORAGE_HISTORY, JSON.stringify(chatHistory));
        appendMessageNode(role, text, true);
    }

    function appendMessageNode(role, text, doScroll) {
        const container = document.getElementById("aim-messages");
        const node = document.createElement("div");
        node.className = `aim-msg ${role}`;

        if (role === "system-info") {
            node.innerHTML = escapeHtml(text);
        } else {
            node.innerHTML = formatMarkdown(text);

            if (role === "assistant") {
                const actions = document.createElement("div");
                actions.className = "aim-msg-actions";

                // Copy button
                const copyBtn = document.createElement("button");
                copyBtn.className = "aim-mini-btn";
                copyBtn.innerHTML = "📋 Copy";
                copyBtn.addEventListener("click", () => {
                    navigator.clipboard.writeText(text);
                    copyBtn.innerHTML = "✓ Copied";
                    setTimeout(() => copyBtn.innerHTML = "📋 Copy", 1500);
                });
                actions.appendChild(copyBtn);

                // Speech TTS button (if supported)
                if ("speechSynthesis" in window) {
                    const speechBtn = document.createElement("button");
                    speechBtn.className = "aim-mini-btn";
                    speechBtn.innerHTML = "🔊 Listen";
                    speechBtn.addEventListener("click", () => {
                        window.speechSynthesis.cancel();
                        const utterance = new SpeechSynthesisUtterance(text.replace(/[*#`_]/g, ''));
                        utterance.rate = 1.05;
                        window.speechSynthesis.speak(utterance);
                    });
                    actions.appendChild(speechBtn);
                }

                node.appendChild(actions);
            }
        }

        container.appendChild(node);
        if (doScroll) scrollBottom();
    }

    async function handleSend() {
        const textarea = document.getElementById("aim-input");
        const userText = textarea.value.trim();
        if ((!userText && !pendingImageData) || isGenerating) return;

        // If user tapped a contextual chip but no question is attached yet, prompt them clearly
        const isContextualChip = userText.includes("this question") || userText.includes("for this?");
        if (isContextualChip && !currentQuestionContext) {
            textarea.value = "";
            addMessage("assistant", "👉 **Which question would you like to solve?**\n\nTap the **\"✨ Ask AI\"** button on any question card (e.g. Q1, Q2) to link it directly, or paste your question text right here!");
            return;
        }

        if (!apiKey) {
            showSettings(true);
            return;
        }

        if (!navigator.onLine) {
            addMessage("system-info", "⚠️ You appear to be offline. Please connect to internet to ask questions.");
            return;
        }

        textarea.value = "";
        textarea.style.height = "auto";
        // Display user message — include image thumbnail if present
        const imgPreviewEl = document.getElementById("aim-img-preview");
        const imgThumbEl = document.getElementById("aim-img-thumb");
        const displayText = userText || "(Image uploaded)";
        if (pendingImageData) {
            const imgPreviewSrc = imgThumbEl ? imgThumbEl.src : "";
            addMessage("user", displayText + (imgPreviewSrc ? `\n\n![image](${imgPreviewSrc})` : ""));
            if (imgPreviewEl) imgPreviewEl.style.display = "none";
            document.getElementById("aim-img-btn").style.opacity = "0.75";
        } else {
            addMessage("user", displayText);
        }

        // Show typing indicator
        isGenerating = true;
        setSendButtonState(true);
        const typingNode = showTypingIndicator();

        try {
            // Build conversation payload
            const contents = [];

            // If we have active question context, inject it into prompt
            let queryPrompt = userText;
            if (currentQuestionContext) {
                queryPrompt = `[Context of Current Question]:\n` +
                              `Question: ${currentQuestionContext.question}\n` +
                              `Options: ${currentQuestionContext.options.join(" | ")}\n` +
                              `Correct Answer: ${currentQuestionContext.answer}\n` +
                              `Verified Solution: ${currentQuestionContext.solution || 'N/A'}\n` +
                              (currentQuestionContext.trick ? `Maths Maestro Trick: ${currentQuestionContext.trick}\n` : '') +
                              (currentQuestionContext.userAttempt ? `Student's selected option: ${currentQuestionContext.userAttempt}\n` : '') +
                              `\nUser Query: ${userText}`;
            }

            // Build strictly alternating conversation turns without past error messages
            const validHistory = chatHistory.slice(0, -1).filter(item => {
                const t = item.text || "";
                return !t.startsWith("⚠️") && !t.startsWith("❌");
            }).slice(-4);

            validHistory.forEach(item => {
                const role = item.role === "user" ? "user" : "model";
                if (contents.length > 0 && contents[contents.length - 1].role === role) {
                    contents[contents.length - 1].parts[0].text += "\n" + item.text;
                } else {
                    contents.push({ role: role, parts: [{ text: item.text }] });
                }
            });

            // Ensure current turn is strictly appended as user role
            // Build user parts — include image if pending
            const userParts = [];
            if (pendingImageData) {
                userParts.push({ inlineData: { mimeType: pendingImageData.mimeType, data: pendingImageData.base64 } });
                if (queryPrompt) userParts.push({ text: "Beta ne yeh image share ki hai — Ma'am please solve karo! " + queryPrompt });
                else userParts.push({ text: "Beta ne yeh image share ki hai — Ma'am please is question/doubt ko solve karo step-by-step!" });
            } else {
                userParts.push({ text: queryPrompt });
            }

            if (contents.length > 0 && contents[contents.length - 1].role === "user") {
                contents[contents.length - 1].parts.push(...userParts);
            } else {
                contents.push({ role: "user", parts: userParts });
            }

            const capturedImage = pendingImageData;
            pendingImageData = null; // Clear after sending

            await executeGenerateContent(queryPrompt || "(image doubt)", contents, typingNode, 0);

        } catch (err) {
            removeTypingIndicator(typingNode);
            addMessage("assistant", `⚠️ Network connection error: ${err.message}`);
        } finally {
            isGenerating = false;
            setSendButtonState(false);
        }
    }

    const MODEL_CASCADE = [
        "gemini-3.7-flash",
        "gemini-3.8-flash",
        "gemini-3.5-flash",
        "gemini-3.1-flash-lite"
    ];

    async function executeGenerateContent(queryPrompt, contents, typingNode, cascadeAttempt = 0) {
        const requestBody = {
            systemInstruction: {
                parts: [{ text: SYSTEM_INSTRUCTION }]
            },
            contents: contents,
            generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 1200,
                thinkingConfig: {
                    thinkingBudget: 0
                }
            }
        };

        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${apiKey}`;
        const abortCtrl = new AbortController();
        const timeoutTimer = setTimeout(() => abortCtrl.abort(), 14000);

        let response;
        try {
            response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody),
                signal: abortCtrl.signal
            });
        } catch (fetchErr) {
            clearTimeout(timeoutTimer);
            if (fetchErr.name === "AbortError" && cascadeAttempt < MODEL_CASCADE.length - 1) {
                const nextModel = MODEL_CASCADE[cascadeAttempt + 1];
                addMessage("system-info", `⚡ Request timed out on ${currentModel.replace('gemini-', '')}. Rerouting to ${nextModel.replace('gemini-', '')}...`);
                currentModel = nextModel;
                localStorage.setItem(STORAGE_MODEL, currentModel);
                updateModelBadge();
                return await executeGenerateContent(queryPrompt, contents, typingNode, cascadeAttempt + 1);
            }
            throw fetchErr;
        }
        clearTimeout(timeoutTimer);

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            const errMsg = errData.error?.message || `HTTP ${response.status} error`;

            // 1. High Demand / 503 Traffic Overload Failover
            const isHighDemand = response.status === 503 ||
                                 errMsg.includes("high demand") ||
                                 errMsg.includes("overloaded") ||
                                 errMsg.includes("Spikes in demand");

            if (isHighDemand && cascadeAttempt < MODEL_CASCADE.length - 1) {
                const nextModel = MODEL_CASCADE[cascadeAttempt + 1];
                addMessage("system-info", `⏳ Model "${currentModel.replace('gemini-', '')}" is at peak capacity. Seamlessly switching to ${nextModel.replace('gemini-', '')}...`);
                currentModel = nextModel;
                localStorage.setItem(STORAGE_MODEL, currentModel);
                updateModelBadge();
                await new Promise(r => setTimeout(r, 700));
                return await executeGenerateContent(queryPrompt, contents, typingNode, cascadeAttempt + 1);
            }

            // 2. Retired / Deprecated Model Auto-Migration
            const isRetired = errMsg.includes("no longer available") ||
                              errMsg.includes("not found") ||
                              errMsg.includes("not supported") ||
                              response.status === 404;

            if (isRetired && cascadeAttempt < MODEL_CASCADE.length - 1) {
                const match = errMsg.match(/use models\/([a-zA-Z0-9.\-_]+)/i);
                let targetModel = MODEL_CASCADE[cascadeAttempt + 1];
                if (match && match[1]) {
                    targetModel = match[1].replace("models/", "");
                }
                currentModel = targetModel;
                localStorage.setItem(STORAGE_MODEL, currentModel);
                updateModelBadge();
                addMessage("system-info", `⚡ Auto-switched to active model: ${currentModel}. Retrying...`);
                return await executeGenerateContent(queryPrompt, contents, typingNode, cascadeAttempt + 1);
            }

            removeTypingIndicator(typingNode);

            if (response.status === 400 || response.status === 403) {
                addMessage("assistant", `❌ **API Key Error**: ${errMsg}\n\nPlease check your key in ⚙️ Settings.`);
            } else if (response.status === 429) {
                addMessage("assistant", `⏳ **Rate Limit**: Free tier limit reached. Please wait 30 seconds and try again.`);
            } else if (isHighDemand) {
                addMessage("assistant", `⏳ **Server Peak Traffic**: Google's servers are currently experiencing global traffic spikes on all free tier Flash models. Please wait 1-2 minutes and tap again!`);
            } else {
                addMessage("assistant", `⚠️ **Error**: ${errMsg}`);
            }
            return;
        }

        removeTypingIndicator(typingNode);

        const data = await response.json();
        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (aiText) {
            addMessage("assistant", aiText);
        } else {
            addMessage("assistant", "No response generated. Please try rephrasing your question.");
        }
    }

    function showTypingIndicator() {
        const container = document.getElementById("aim-messages");
        const node = document.createElement("div");
        node.className = "aim-msg assistant aim-typing-indicator";
        node.id = "aim-typing-active";
        node.innerHTML = `
            <span class="aim-dot"></span>
            <span class="aim-dot"></span>
            <span class="aim-dot"></span>
        `;
        container.appendChild(node);
        scrollBottom();
        return node;
    }

    function removeTypingIndicator(node) {
        if (node && node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }

    function setSendButtonState(disabled) {
        const btn = document.getElementById("aim-send-btn");
        if (btn) btn.disabled = disabled;
    }

    function scrollBottom() {
        const container = document.getElementById("aim-messages");
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }

    function cleanLatex(str) {
        if (!str) return "";
        let s = str;

        // 1. Fractions \frac{a}{b} -> (a / b)
        for (let i = 0; i < 3; i++) {
            s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "($1 / $2)");
        }

        // 2. LaTeX text/font wrappers: \text{...}, \mathbf{...}, \mathrm{...}, \bm{...}
        s = s.replace(/\\text\{([^{}]+)\}/g, "$1");
        s = s.replace(/\\mathbf\{([^{}]+)\}/g, "**$1**");
        s = s.replace(/\\mathrm\{([^{}]+)\}/g, "$1");
        s = s.replace(/\\bm\{([^{}]+)\}/g, "**$1**");
        s = s.replace(/\\underline\{([^{}]+)\}/g, "$1");

        // 3. Operators & math symbols
        s = s.replace(/\\times/g, "×");
        s = s.replace(/\\div/g, "÷");
        s = s.replace(/\\pm/g, "±");
        s = s.replace(/\\cdot/g, "·");
        s = s.replace(/\\sqrt\{([^{}]+)\}/g, "√($1)");
        s = s.replace(/\\sqrt/g, "√");
        s = s.replace(/\\circ/g, "°");
        s = s.replace(/\\degree/g, "°");
        s = s.replace(/\\le(q)?/g, "≤");
        s = s.replace(/\\ge(q)?/g, "≥");
        s = s.replace(/\\ne(q)?/g, "≠");
        s = s.replace(/\\approx/g, "≈");
        s = s.replace(/\\pi/g, "π");
        s = s.replace(/\\theta/g, "θ");
        s = s.replace(/\\alpha/g, "α");
        s = s.replace(/\\beta/g, "β");
        s = s.replace(/\\Rightarrow|\\implies/g, "⟹");

        // 4. Strip surrounding math dollar signs: $...$ and $$...$$
        s = s.replace(/\$\$([^$]+)\$\$/g, "$1");
        s = s.replace(/\$([^$]+)\$/g, "$1");

        // 5. Clean LaTeX parenthesis wrappers: \( \), \[ \]
        s = s.replace(/\\\(/g, "").replace(/\\\)/g, "");
        s = s.replace(/\\\[/g, "").replace(/\\\]/g, "");

        return s;
    }

    function formatMarkdown(text) {
        if (!text) return "";

        // First clean raw LaTeX artifacts
        let raw = cleanLatex(text);

        // Pre-parse code blocks
        const codeBlocks = [];
        raw = raw.replace(/```([\s\S]*?)```/g, (m, code) => {
            codeBlocks.push(code);
            return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
        });

        // Convert Markdown tables into clean HTML tables
        raw = raw.replace(/((?:^|\n)\|[^\n]+\|(?:\n\|[^\n]+\|)+)/g, (match) => {
            const lines = match.trim().split("\n").map(l => l.trim()).filter(l => l.startsWith("|"));
            if (lines.length < 2) return match;

            let tableHtml = `<div style="overflow-x:auto; margin:10px 0;"><table style="width:100%; border-collapse:collapse; font-size:0.8rem; border:1px solid #334155; background:#0B1120; border-radius:8px; overflow:hidden;">`;
            let headerLine = null;
            let dataLines = [];

            if (lines[1] && lines[1].includes("---")) {
                headerLine = lines[0];
                dataLines = lines.slice(2);
            } else {
                dataLines = lines;
            }

            if (headerLine) {
                const ths = headerLine.split("|").slice(1, -1).map(c => c.trim());
                tableHtml += `<thead><tr style="background:#1E293B; border-bottom:1px solid #334155;">`;
                ths.forEach(th => {
                    tableHtml += `<th style="padding:6px 10px; text-align:left; color:#38BDF8; font-weight:700;">${th}</th>`;
                });
                tableHtml += `</tr></thead>`;
            }

            tableHtml += `<tbody>`;
            dataLines.forEach((row, i) => {
                if (row.includes("---")) return;
                const tds = row.split("|").slice(1, -1).map(c => c.trim());
                const bg = i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)";
                tableHtml += `<tr style="border-bottom:1px solid rgba(51,65,85,0.5); background:${bg};">`;
                tds.forEach(td => {
                    tableHtml += `<td style="padding:6px 10px; color:#F8FAFC;">${td}</td>`;
                });
                tableHtml += `</tr>`;
            });

            tableHtml += `</tbody></table></div>`;
            return tableHtml;
        });

        let html = escapeHtml(raw);

        // Restore code blocks safely
        html = html.replace(/__CODE_BLOCK_(\d+)__/g, (m, idx) => {
            return `<pre><code>${escapeHtml(codeBlocks[Number(idx)])}</code></pre>`;
        });

        // Inline code: `...`
        html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

        // Headings
        html = html.replace(/^### (.*$)/gim, '<h4 style="color:#38BDF8; margin:12px 0 4px 0; font-size:0.92rem; font-weight:700;">$1</h4>');
        html = html.replace(/^## (.*$)/gim, '<h3 style="color:#06B6D4; margin:14px 0 6px 0; font-size:1rem; font-weight:700;">$1</h3>');

        // Horizontal rules
        html = html.replace(/^---$/gim, '<hr style="border:none; border-top:1px solid var(--aim-border); margin:10px 0;">');

        // Bold: **...**
        html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

        // Italic: *...*
        html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

        // Paragraphs & newlines
        html = html.replace(/\n\n/g, "</p><p>");
        html = html.replace(/\n/g, "<br>");

        return `<p>${html}</p>`;
    }

    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Public API for integration with question cards
    window.askAIMentorAboutQuestion = function (qData, userAttempt) {
        const drawer = document.getElementById("aim-drawer");
        if (!drawer) return;

        currentQuestionContext = {
            id: qData.id,
            exam: qData.exam,
            question: qData.question,
            options: qData.options || [],
            answer: qData.answer,
            solution: qData.solution,
            trick: qData.trick,
            userAttempt: userAttempt
        };
        try {
            sessionStorage.setItem("ssc_ai_q_context_v1", JSON.stringify(currentQuestionContext));
        } catch (e) {}

        drawer.classList.add("open");
        showSettings(false);

        const qNum = qData.id ? qData.id.replace('xmp1_', 'Q') : 'Selected Question';
        addMessage("system-info", `📌 Context linked: ${qNum} (${qData.exam || 'Maths Maestro'})`);

        const textarea = document.getElementById("aim-input");
        textarea.placeholder = `Ask doubt on ${qNum} or tap a chip above...`;
        textarea.focus();
        scrollBottom();
    };

})();
