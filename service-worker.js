
const CACHE_NAME = 'TN-Golf-Orbit-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/Build/9a59c6ddf85bd267b132ea041079005e.data.unityweb',
    '/Build/b455f114538e8b2e739fedea6d5e35cb.wasm.unityweb',
    '/Build/bdf9373a9ebf9452b80abcf61f567afa.framework.js.unityweb',
    '/Build/9853637125e801e9aae48e78dbbdcfca.loader.js',
    '/TemplateData/style.css',
    '/icon-1920x1080.png',
    '/icon-512x512.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
