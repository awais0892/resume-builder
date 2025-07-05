// Lazy Loading Implementation
class LazyLoader {
    constructor() {
        this.images = [];
        this.init();
    }

    init() {
        // Get all images with data-src attribute
        this.images = document.querySelectorAll('img[data-src]');
        
        if (this.images.length === 0) return;

        // Check if Intersection Observer is supported
        if ('IntersectionObserver' in window) {
            this.setupIntersectionObserver();
        } else {
            // Fallback for older browsers
            this.loadAllImages();
        }
    }

    setupIntersectionObserver() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        this.images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;

        // Create a new image to preload
        const tempImage = new Image();
        
        tempImage.onload = () => {
            img.src = src;
            img.classList.remove('lazy-load');
            img.classList.add('lazy-loaded');
        };

        tempImage.onerror = () => {
            // Handle error - show placeholder or fallback
            img.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f0f0f0"/><text y="50" font-size="12" text-anchor="middle" x="50" fill="%23999">Image not found</text></svg>';
            img.classList.remove('lazy-load');
            img.classList.add('lazy-error');
        };

        tempImage.src = src;
    }

    loadAllImages() {
        // Fallback for browsers without Intersection Observer
        this.images.forEach(img => {
            this.loadImage(img);
        });
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LazyLoader();
});

// Also initialize on window load for any dynamically added content
window.addEventListener('load', () => {
    new LazyLoader();
}); 