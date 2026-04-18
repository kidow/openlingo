const CACHE_VERSION = "openlingo-pwa-v1";
const PRECACHE_URLS = [
  "/ko",
  "/en",
  "/manifest.webmanifest",
  "/icon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);
      await cache.addAll(PRECACHE_URLS);
      self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_VERSION)
          .map((cacheName) => caches.delete(cacheName)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);

          if (response && response.ok) {
            const cache = await caches.open(CACHE_VERSION);
            await cache.put(request, response.clone());
          }

          return response;
        } catch {
          const cachedResponse = await caches.match(request);

          if (cachedResponse) {
            return cachedResponse;
          }

          const fallbackResponse = await caches.match("/ko");

          if (fallbackResponse) {
            return fallbackResponse;
          }

          throw new Error("No cached response available");
        }
      })(),
    );

    return;
  }

  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(request);

      if (cachedResponse) {
        return cachedResponse;
      }

      const response = await fetch(request);

      if (response && response.ok) {
        const cache = await caches.open(CACHE_VERSION);
        await cache.put(request, response.clone());
      }

      return response;
    })(),
  );
});
