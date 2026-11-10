const CACHE_NAME = 'ssc-prep-tier2-v42';
const urlsToCache = [
  './cgl26_reasoning.html',
  './cgl26_reasoning_data.js',
  './cgl26_reasoning_data.json',
  './cgl26_english.html',
  './cgl26_english_data.js',
  './cgl26_english_data.json',
  './cgl26_gk.html',
  './cgl26_gk_data.js',
  './cgl26_gk_data.json',
  './',
  './manifest.json',
  './index.html',
  './xmp.html',
  './xmp_data.js',
  './xmp_data.json',
  './vocab_maestro.html',
  './progress.html',
  './phase14_quiz.html',
  './reminder.js',
  './vocab_maestro_data.js',
  './vocab_maestro_data.json',
  './steno_vocab_hub.html',
  './steno_vocab_data.js',
  './steno_vocab_data.json',
  './xmp_set1.html',
  './xmp_set1_data.js',
  './xmp_set1_data.json',
  './xmp_set2.html',
  './xmp_set2_data.js',
  './xmp_set2_data.json',
  './xmp_set3.html',
  './xmp_set3_data.js',
  './xmp_set3_data.json',
  './xmp_set4.html',
  './xmp_set4_data.js',
  './xmp_set4_data.json',
  './maths_obsession_d1.html',
  './maths_obsession_d1_data.js',
  './maths_obsession_d1_data.json',
  './mixture_alligation.html',
  './mixture_alligation_data.js',
  './mixture_alligation_data.json',
  './ai_mentor.js',
  './ai_mentor.js?v=31',
  './ai_mentor.css',
  './geometry.html',
  './geometry_data.js',
  './geometry_data.json',
  './trigonometry.html',
  './trigonometry_data.js',
  './trigonometry_data.json',
  './algebra.html',
  './algebra_data.js',
  './algebra_data.json',
  './mensuration_2d.html',
  './mensuration_2d_data.js',
  './mensuration_2d_data.json',
  './mensuration_3d.html',
  './mensuration_3d_data.js',
  './mensuration_3d_data.json',
  './rrb_cgl_ga_hub.html',
  './rrb_cgl_ga_notes.html',
  './rrb_cgl_ga_data.js',
  './rrb_cgl_ga_data.json',
  './mock_test.html',
  './real_shifts.html',
  './real_shifts_data.json',
  './real_gs_shifts.html',
  './real_gs_shifts_data.json',
  './real_gs_shifts_data.js',
  './gs_practice_sets.html',
  './gs_practice_sets_data.json',
  './gs_practice_sets_data.js',
  './grand_mocks.html',
  './grand_mocks_data.json',
  './grand_mocks_data.js',
  './practice_sets.html',
  './practice_sets_data.json',
  './math_part1.html',
  './math_part1_data.json',
  './math_part2.html',
  './math_part2_data.json',
  './mensuration.html',
                './reasoning_cheat_sheet.html',
  './styles.css',
  './affixes_data.js',
  './affixes_mcqs.js',
  './affixes_ui.js',
  './app.js',
  './cgl2025_questions.js',
  './english_drills.js',
  './enhancements.js',
  './grammar_mcqs.js',
  './grammar_rules.js',
  './grammar_ui.js',
  './ncert_notes.js',
  './ncert_qs.js',
  './ncert_vocab.js',
  './ows_data.js',
  './ows_mcqs.js',
  './ows_ui.js',
  './quant_drills.js',
  './questions.js',
  './reasoning_generator.js',
  './roots_ui.js',
  './root_mcqs.js',
  './root_words.js',
  './fatman_data.js',
  './fatman_ui.js',
  './history_data.js',
  './medieval_data.js',
  './modern_data.js',
  './current_affairs_data.js',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Bypass HTTP cache completely during SW install to prevent PWA caching nightmares
        return Promise.all(
          urlsToCache.map(url => {
            return fetch(new Request(url, { cache: 'no-store' }))
              .then(response => {
                if (!response.ok) {
                    console.log('Failed to fetch ' + url);
                    return;
                }
                return cache.put(url, response);
              }).catch(err => console.error('Fetch err', err));
          })
        );
      })
  );
});

self.addEventListener('fetch', event => {
  const url = event.request.url;
  // Network-First for HTML and dynamic JS/JSON data files so fresh updates appear immediately
  const isDynamic = url.endsWith('.html') || url.includes('_data.') || url.endsWith('.json') || url.endsWith('.js');

  if (isDynamic) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-First with Network fallback for static images, audio and font assets
  event.respondWith(
    caches.match(event.request, {ignoreSearch: false})
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
          return response;
        });
      })
  );
});

self.addEventListener('activate', event => {
  self.clients.claim();
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Notification Click Handler (Maestro Ma'am Daily Reminder)
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : 'vocab_maestro.html';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (let client of windowClients) {
        if (client.url.includes(targetUrl) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
