// 冷静家长 — Service Worker
const CACHE = 'parent-calm-v1';
const URLS = ['/parent-calm/', '/parent-calm/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
