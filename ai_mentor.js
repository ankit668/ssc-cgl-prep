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
    const SYSTEM_INSTRUCTION = `You are "Maestro AI", an elite SSC CGL Tier-1 & Tier-2 mentor and topper tutor, following Vishesh Shukla's Maths Maestro methodology.
Your mission is to help SSC aspirants clear tricky doubts with maximum speed and clarity.
Guidelines:
1. Tone: Encouraging, analytical, concise, and focused on exam speed.
2. Short-Tricks: Whenever relevant, highlight 5-10 second topper shortcuts (unit digit, digital sum, option elimination, symmetry, triplets).
3. Math Typography: Use clean textbook typography (e.g. x² + 1/x², √3, 30°, πr²h) instead of raw LaTeX markup like \\frac or \\left.
4. Explanations: Break down complex algebraic or geometric transitions step-by-step so anyone can understand.
5. Traps: Point out common pitfalls where aspirants lose negative marks.`;

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
    let isGenerating = false;

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
                <span>AI Mentor</span>
            </button>

            <!-- Chat Drawer -->
            <div class="aim-drawer" id="aim-drawer">
                <!-- Header -->
                <div class="aim-header">
                    <div class="aim-header-left">
                        <div class="aim-avatar">📐</div>
                        <div class="aim-title-group">
                            <h3>Maestro AI Mentor</h3>
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
                    <button class="aim-chip" data-prompt="Explain this question step-by-step with clear logic.">💡 Step-by-Step</button>
                    <button class="aim-chip" data-prompt="What is the 5-second topper trick or option elimination shortcut for this?">⚡ 5-Sec Shortcut</button>
                    <button class="aim-chip" data-prompt="Why would a student make a mistake here? What is the trap?">⚠️ Common Traps</button>
                    <button class="aim-chip" data-prompt="Give me another similar practice question with options and solution based on this concept.">🔄 Similar Question</button>
                    <button class="aim-chip" data-prompt="Provide a quick formula & identities cheat-sheet for this topic.">📝 Formula Recap</button>
                </div>

                <!-- Messages -->
                <div class="aim-messages" id="aim-messages"></div>

                <!-- Input Area -->
                <div class="aim-input-area">
                    <textarea class="aim-textarea" id="aim-input" placeholder="Ask a math doubt or tap a chip..." rows="1"></textarea>
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
            addMessage("assistant", `👋 **Namaste Aspirant!** I am your **Maestro AI Mentor**.\n\nYou can ask me:\n- 📐 How to solve any tricky geometry or algebra problem\n- ⚡ 5-second topper shortcuts & unit-digit tricks\n- 🎯 Tap **"✨ Ask AI"** on any question card for instant step-by-step doubt clearing!\n\n${!apiKey ? '👉 *Click ⚙️ in the top bar to paste your free Gemini API key to get started!*' : ''}`);
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
        if (!userText || isGenerating) return;

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
        addMessage("user", userText);

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

            // Include last 6 turns for conversational context
            const recentHistory = chatHistory.slice(-6);
            recentHistory.forEach(item => {
                if (item.role === "user") {
                    contents.push({ role: "user", parts: [{ text: item.text }] });
                } else if (item.role === "assistant") {
                    contents.push({ role: "model", parts: [{ text: item.text }] });
                }
            });

            // If question context was attached, make sure latest prompt carries it
            if (contents.length > 0 && contents[contents.length - 1].role === "user") {
                contents[contents.length - 1].parts[0].text = queryPrompt;
            } else {
                contents.push({ role: "user", parts: [{ text: queryPrompt }] });
            }

            await executeGenerateContent(queryPrompt, contents, typingNode, 0);

        } catch (err) {
            removeTypingIndicator(typingNode);
            addMessage("assistant", `⚠️ Network connection error: ${err.message}`);
        } finally {
            isGenerating = false;
            setSendButtonState(false);
        }
    }

    const MODEL_CASCADE = [
        "gemini-3.8-flash",
        "gemini-3.5-flash",
        "gemini-3.1-flash-lite",
        "gemini-2.5-flash"
    ];

    async function executeGenerateContent(queryPrompt, contents, typingNode, cascadeAttempt = 0) {
        const requestBody = {
            systemInstruction: {
                parts: [{ text: SYSTEM_INSTRUCTION }]
            },
            contents: contents,
            generationConfig: {
                temperature: 0.35,
                maxOutputTokens: 1200
            }
        };

        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${apiKey}`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

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

    function formatMarkdown(text) {
        if (!text) return "";
        let html = escapeHtml(text);

        // Code blocks: ```...```
        html = html.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");

        // Inline code: `...`
        html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

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
