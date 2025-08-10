const CACHE_VERSION = new Date().toISOString();  // unique for each build

const CACHE_NAME = `chemstenabs-cache-${CACHE_VERSION}`

//  Files to cache (Add your main routes, icons, css/js)

const ASSETS_TO_CACHE = [
    "/",
    "/index.html",
    "/manifest.json",
    "/chemstenabs-192.png",
    "chemstenabs-512.png",
];
// install: cache App shell
self.addEventListener("install", (event) => {
    console.log("[SW] Installing new cache:", CACHE_NAME);
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
    self.skipWaiting() // activate immediately without waiting  old SW to die
});
// activate: clean up old caches
self.addEventListener("activated", (event) => {
    console.log("[SW] cleaning up old cache:", CACHE_NAME);
    event.waitUntil(
        caches.keys().then((name) =>
            Promise.all(name.map((name) => {
                if (name !== CACHE_NAME) {
                    console.log("[SW] Deleting old cache:", name);
                    return caches.delete(name);
                }
            })) 
        )
    );
    // Start controlling page immediately
    self.clients.claim();
});
// Fetch: Serve from fetch fall back to network
self.addEventListener("fetch", (event) => {
    const {request} = event;
    // Api request will not be cache
    if (request.url.includes("/api")) {
        return;     // It will go straight to the network
    };
    event.respondWith(
        caches.match(request).then((cachedResponse) => {
           const fetchPromise = fetch(request)
           .then((networkResponse) => {
                caches.open(CACHE_NAME).then((cache) =>{
                    cache.put(request, networkResponse.clone());
                });
                return networkResponse;
           })
           .catch(() => cachedResponse); // fallback to cache if offline
           return cachedResponse || fetchPromise;
        })
    );
});