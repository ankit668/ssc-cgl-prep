/**
 * SSC Prep Daily Study Reminder with Maestro Ma'am
 * Client + Service Worker notification scheduler
 */
(function() {
    'use strict';

    const STORAGE_KEY_TIME = 'ssc_reminder_time_v1';
    const STORAGE_KEY_ENABLED = 'ssc_reminder_enabled_v1';
    const STORAGE_KEY_LAST_SENT = 'ssc_reminder_last_sent_v1';

    let reminderTime = localStorage.getItem(STORAGE_KEY_TIME) || '08:00';
    let isEnabled = localStorage.getItem(STORAGE_KEY_ENABLED) === 'true';

    // Persona-rich messages from Maestro Ma'am
    const MAAM_MESSAGES = [
        "Namaste Beta! 🌸 Aaj ke 10 vocab words revise karne ka time ho gaya hai! Let's build your word power!",
        "Good morning Champ! 🚀 Maestro Ma'am is waiting — 5-minute vocab sprint starts now!",
        "Beta, consistency is key! 🌟 Aaj Phase 14 aur 50-day course ke fresh words practice karo!",
        "Chalo Beta, SSC CGL 2026 door nahi hai! 📚 10 high-frequency words master kar lo aaj!",
        "Ready for today's challenge, Beta? 💪 Maestro Ma'am ke tricks se vocab yaad karo chutkiyon mein!"
    ];

    function getRandomMessage() {
        return MAAM_MESSAGES[Math.floor(Math.random() * MAAM_MESSAGES.length)];
    }

    async function requestPermission() {
        if (!('Notification' in window)) {
            alert('Notifications are not supported by your browser.');
            return false;
        }
        if (Notification.permission === 'granted') {
            return true;
        }
        if (Notification.permission !== 'denied') {
            const perm = await Notification.requestPermission();
            return perm === 'granted';
        }
        alert('Notification permission is blocked. Please enable notifications in your browser settings.');
        return false;
    }

    async function showNotification(title, body, url = 'vocab_maestro.html') {
        const options = {
            body: body,
            icon: 'icon-192.png',
            badge: 'icon-192.png',
            tag: 'ssc-daily-reminder',
            renotify: true,
            data: { url: url }
        };

        if ('serviceWorker' in navigator) {
            try {
                const reg = await navigator.serviceWorker.ready;
                if (reg && reg.showNotification) {
                    await reg.showNotification(title, options);
                    return;
                }
            } catch (e) {
                console.warn('SW notification fallback to Notification API', e);
            }
        }

        if (Notification.permission === 'granted') {
            const notif = new Notification(title, options);
            notif.onclick = () => {
                window.focus();
                window.location.href = url;
            };
        }
    }

    async function sendTestNotification() {
        const granted = await requestPermission();
        if (!granted) return;
        await showNotification(
            "👩‍🏫 Maestro Ma'am: Test Reminder!",
            "Wah Beta! Notifications bilkul sahi kaam kar rahe hain. Har roz subah study reminder milega! 🌸"
        );
    }

    function checkAndTriggerReminder() {
        if (!isEnabled || Notification.permission !== 'granted') return;

        const now = new Date();
        const currentHours = String(now.getHours()).padStart(2, '0');
        const currentMinutes = String(now.getMinutes()).padStart(2, '0');
        const currentTimeStr = `${currentHours}:${currentMinutes}`;

        const todayStr = now.toISOString().slice(0, 10);
        const lastSent = localStorage.getItem(STORAGE_KEY_LAST_SENT);

        if (currentTimeStr === reminderTime && lastSent !== todayStr) {
            localStorage.setItem(STORAGE_KEY_LAST_SENT, todayStr);
            showNotification(
                "👩‍🏫 Maestro Ma'am: Daily Vocab Time!",
                getRandomMessage()
            );
        }
    }

    // Interval check every 30 seconds
    setInterval(checkAndTriggerReminder, 30000);

    // Public API
    window.StudyReminder = {
        getTime: () => reminderTime,
        isEnabled: () => isEnabled,
        setTime: (t) => {
            reminderTime = t;
            localStorage.setItem(STORAGE_KEY_TIME, t);
        },
        setEnabled: async (enable) => {
            if (enable) {
                const granted = await requestPermission();
                if (!granted) {
                    isEnabled = false;
                    localStorage.setItem(STORAGE_KEY_ENABLED, 'false');
                    return false;
                }
            }
            isEnabled = enable;
            localStorage.setItem(STORAGE_KEY_ENABLED, enable ? 'true' : 'false');
            return true;
        },
        sendTest: sendTestNotification,
        requestPermission: requestPermission
    };
})();
