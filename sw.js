const CACHE_NAME = 'resume-builder-v1.3';
const OFFLINE_URL = '/offline.html';

// Whitelist of allowed external domains for caching
const ALLOWED_DOMAINS = [
    'cdn.jsdelivr.net',
    'cdnjs.cloudflare.com',
    'fonts.googleapis.com',
    'fonts.gstatic.com'
];

// Performance-optimized asset lists
const CRITICAL_CACHE = [
    '/',
    '/index.html',
    '/offline.html',
    '/css/styles.css',
    '/js/main.js'
];

const EXTERNAL_RESOURCES = [
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
            caches.open(`${CACHE_NAME}-external`).then(cache => 
                Promise.all(
                    EXTERNAL_RESOURCES.map(url => 
                        fetch(url)
                            .then(response => {
                                if (response.ok) {
                                    return cache.put(url, response);
                                }
                                console.warn(`Could not cache external resource: ${url}`);
                                return null;
                            })
                            .catch(error => {
                                console.error(`Error caching ${url}:`, error);
                            })
                    )
                )
            )
        ]).then(() => self.skipWaiting())
    );
});

// Advanced fetch event handler with CSP and domain validation
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Check if the request is to an allowed domain
    const isAllowedDomain = ALLOWED_DOMAINS.some(domain => 
        url.hostname.includes(domain)
    );

    event.respondWith(
        (async () => {
            try {
                // Prefer network for same-origin and allowed external domains
                if (url.origin === location.origin || isAllowedDomain) {
                    try {
                        const networkResponse = await fetch(event.request);
                        
                        // Cache successful responses
                        if (networkResponse && networkResponse.status === 200) {
                            const cache = await caches.open(`${CACHE_NAME}-dynamic`);
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        }
                    } catch (networkError) {
                        console.warn('Network fetch failed, trying cache:', networkError);
                    }
                }

                // Fallback to cache
                const cachedResponse = await caches.match(event.request);
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Final fallback
                return caches.match(OFFLINE_URL) || 
                    new Response('Offline', { status: 503, statusText: 'Service Unavailable' });

            } catch (error) {
                console.error('Fetch error:', error);
                return caches.match(OFFLINE_URL) || 
                    new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
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
                })
        );
    }
});

async function syncResumeData() {
    // Placeholder for actual sync logic
    console.log('Syncing resume data');
} 