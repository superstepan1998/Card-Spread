// CardSpread service worker: fresh HTML on every launch, cached assets, offline.
const CACHE = 'cardspread-v1';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;   // never touch API calls etc.

  // HTML — network-first, bypassing the HTTP cache, so new builds land
  // on the very next launch; cached copy is the offline fallback.
  if (req.mode === 'navigate' || url.pathname.endsWith('.html')) {
    e.respondWith((async () => {
      try {
        const fresh = await fetch(req, { cache: 'no-cache' });
        (await caches.open(CACHE)).put(req, fresh.clone());
        return fresh;
      } catch {
        return (await caches.match(req)) || Response.error();
      }
    })());
    return;
  }

  // Card images & other assets — cache-first (they are version-busted via ?v=).
  e.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    const resp = await fetch(req);
    if (resp.ok) (await caches.open(CACHE)).put(req, resp.clone());
    return resp;
  })());
});
