
const CACHE_NAME = 'Golf-Orbit-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/Build/f2c407f58cf27b843f6672d563d2654f.data.unityweb',
    '/Build/070841f5bb2a2672093800b5fd1f2313.wasm.unityweb',
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
