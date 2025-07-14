
const CACHE_NAME = 'Golf-Orbit-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/Build/',
    '/Build/',
    '/Build/',
    '/Build/bb0d9ecdb05db3e84da20bd14a4f84dc.loader.js',
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
