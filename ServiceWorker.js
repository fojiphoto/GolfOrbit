const cacheName = "PinpinTeam-Golf Orbit-1.25.39";
const contentToCache = [
    "Build/9853637125e801e9aae48e78dbbdcfca.loader.js",
    "Build/afdd5818e534a95bb786783c2dc9ac5d.framework.js.unityweb",
    "Build/49213902b789e2308ed80070f00fe08c.data.unityweb",
    "Build/bdaba365781bf16dfcfc79ceb3a5f183.wasm.unityweb",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
