const CACHE_NAME = 'resume-builder-v1.2';
const OFFLINE_URL = '/offline.html';

// Performance-optimized asset lists
const CRITICAL_CACHE = [
    '/',
    '/index.html',
    '/offline.html',
    '/css/styles.css',
    '/js/main.js'
];

const SECONDARY_CACHE = [
    '/pages/builder.html',
    '/pages/preview.html',
    '/pages/templates.html',
    '/pages/about.html',
    '/favicon.svg',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
];

// Advanced caching strategies
const CACHE_STRATEGIES = {
    CACHE_FIRST: 'cache-first',
    NETWORK_FIRST: 'network-first',
    STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Install event with performance-optimized caching
self.addEventListener('install', event => {
    event.waitUntil(
        Promise.all([
            caches.open(`${CACHE_NAME}-critical`).then(cache => cache.addAll(CRITICAL_CACHE)),
            caches.open(`${CACHE_NAME}-secondary`).then(cache => cache.addAll(SECONDARY_CACHE))
        ]).then(() => self.skipWaiting())
    );
});

// Advanced fetch event handler
self.addEventListener('fetch', event => {
    event.respondWith(
        (async () => {
            const request = event.request;
            const url = new URL(request.url);

            // Determine caching strategy based on request type
            try {
                // CDN and static assets - Cache First
                if (url.origin === location.origin || 
                    url.origin.includes('cdn.jsdelivr.net') || 
                    url.origin.includes('cdnjs.cloudflare.com')) {
                    const cachedResponse = await caches.match(request);
                    if (cachedResponse) return cachedResponse;
                }

                // Network-first for dynamic content
                const networkResponse = await fetch(request).catch(() => null);
                
                if (networkResponse && networkResponse.status === 200) {
                    // Cache successful network responses
                    const cache = await caches.open(`${CACHE_NAME}-dynamic`);
                    cache.put(request, networkResponse.clone());
                    return networkResponse;
                }

                // Fallback to offline page
                return caches.match(OFFLINE_URL) || new Response('Offline', { status: 503 });
            } catch (error) {
                console.error('Fetch error:', error);
                return caches.match(OFFLINE_URL) || new Response('Offline', { status: 503 });
            }
        })()
    );
});

// Optimize cache management during activation
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Delete old caches
                    if (!cacheName.startsWith(CACHE_NAME)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Background sync with improved error handling
self.addEventListener('sync', event => {
    if (event.tag === 'resume-sync') {
        event.waitUntil(
            syncResumeData()
                .then(() => {
                    console.log('Background sync successful');
                })
                .catch(error => {
                    console.error('Background sync failed:', error);
                    // Optionally send error to client or retry mechanism
                })
        );
    }
});

async function syncResumeData() {
    // Implement robust background sync logic
    const syncData = await getSyncData();
    if (syncData) {
        try {
            await sendDataToServer(syncData);
            await clearSyncData();
        } catch (error) {
            // Store failed sync for later retry
            await storeSyncFailure(syncData);
            throw error;
        }
    }
}

// Placeholder functions - to be implemented with actual logic
async function getSyncData() {
    // Retrieve data to sync from IndexedDB or localStorage
    return null;
}

async function sendDataToServer(data) {
    // Send data to server
}

async function clearSyncData() {
    // Clear synced data
}

async function storeSyncFailure(data) {
    // Store failed sync data for later retry
} 