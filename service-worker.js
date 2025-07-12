
const CACHE_NAME = 'Golf-Orbit-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/Build/b43d2a6a95fa276c6846aa2a20f3e215.data.unityweb',
    '/Build/6c3ff0333cb8ef01ed43408bec8e9497.wasm.unityweb',
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
