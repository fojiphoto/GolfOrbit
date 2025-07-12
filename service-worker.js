
const CACHE_NAME = 'Golf-Orbit-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/Build/8eaeaf15cc677cfa4488865217ab3086.data.unityweb',
    '/Build/05f88f49f5dda7e0c3f186c61fb1b205.wasm.unityweb',
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
