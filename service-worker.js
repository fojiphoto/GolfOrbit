
const CACHE_NAME = 'Golf-Orbit-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/Build/49213902b789e2308ed80070f00fe08c.data.unityweb',
    '/Build/bdaba365781bf16dfcfc79ceb3a5f183.wasm.unityweb',
    '/Build/afdd5818e534a95bb786783c2dc9ac5d.framework.js.unityweb',
    '/Build/9853637125e801e9aae48e78dbbdcfca.loader.js',
    '/TemplateData/style.css',
    '/icon-192.png',
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
