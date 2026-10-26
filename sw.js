const CACHE_NAME = 'ssc-prep-tier2-v2';
const urlsToCache = [
  './',
  './manifest.json',
  './index.html',
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
  './study_notes.js',
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
  event.respondWith(
    caches.match(event.request, {ignoreSearch: false})
      .then(response => {
        if (response) {
          return response; // Return from cache
        }
        // Not in cache, try network
        return fetch(event.request).then(
          function(response) {
            // Check if valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Clone and cache the new response
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        ).catch(() => {
          console.log('Offline and resource not in cache:', event.request.url);
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
