/* eslint-disable no-restricted-globals */
/* global clients */

self.addEventListener("install", event => {
  self.skipWaiting(); // activate immediately
});

self.addEventListener("activate", event => {
  clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.open("offline-cache").then(cache =>
      cache.match(event.request).then(response => {
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => response);
        return response || fetchPromise;
      })
    )
  );
});
