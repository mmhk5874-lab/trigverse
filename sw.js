const CACHE_NAME = "trigverse-mobile-v35";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=35",
  "./app.js?v=35",
  "./visualizers.js?v=35",
  "./mcq-generator.js?v=35",
  "./curriculum-ch1-5.js?v=35",
  "./curriculum-ch6-10.js?v=35",
  "./curriculum-ultra7.js?v=35",
  "./curriculum-class11a.js?v=35",
  "./curriculum-class11b-12.js?v=35",
  "./curriculum-class12-inverse-eq.js?v=35",
  "./curriculum-part2.js?v=35",
  "./formulas-complete.js?v=35",
  "./curriculum-master-summary.js?v=35",
  "./lectures-bilingual.js?v=35",
  "./youtube-200-library.js?v=35",
  "./favicon.png",
  "./logo.png",
  "./manifest.json",
  "./animals/ant.png",
  "./animals/fox.png",
  "./animals/panda.png",
  "./animals/eagle.png",
  "./animals/tiger.png",
  "./animals/wolf.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      const staleKeys = keys.filter((k) => k !== CACHE_NAME);
      await Promise.all(staleKeys.map((k) => caches.delete(k)));
      await self.clients.claim();
      if (staleKeys.length > 0) {
        const windowClients = await self.clients.matchAll({ type: "window" });
        for (const client of windowClients) {
          try {
            await client.navigate(client.url);
          } catch (_) {
            /* ignore cross-origin or closed tabs */
          }
        }
      }
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Only handle http/https requests; bypass YouTube embeds/thumbnails live so streaming works normally
  if (!url.protocol.startsWith("http")) return;
  if (url.hostname.includes("youtube") || url.hostname.includes("ytimg")) return;

  // Network-first for same-origin HTML/CSS/JS so mobile updates appear immediately, falling back to cache offline
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkRes;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Cache-first with background refresh for external CDN fonts/KaTeX
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          if (
            networkRes &&
            networkRes.status === 200 &&
            (url.hostname.includes("jsdelivr") ||
              url.hostname.includes("googleapis") ||
              url.hostname.includes("gstatic"))
          ) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkRes;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
