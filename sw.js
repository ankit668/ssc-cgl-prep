const CACHE_NAME = 'ssc-prep-cache-v8';
const urlsToCache = [
  './',
  './index.html',
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
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
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
          // If network fails and it's not in cache, fallback
          console.log('Offline and resource not in cache:', event.request.url);
        });
      })
  );
});

// Activate event: cleanup old caches
self.addEventListener('activate', event => {
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
