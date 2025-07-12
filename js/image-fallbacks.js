// Image Fallback Handler
(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Image fallback handler initializing...');
        setupImageFallbacks();
    });

    function setupImageFallbacks() {
        // Get all images on the page
        const images = document.querySelectorAll('img[src*="images.unsplash.com"], img[src*="images.pexels.com"]');
        console.log('Found', images.length, 'external images to monitor');
        
        images.forEach(function(img, index) {
            console.log(`Setting up fallback for image ${index + 1}:`, img.src, 'alt:', img.alt);
            
            // Add error event listener
            img.addEventListener('error', function() {
                console.log('Image error detected for:', this.src);
                handleImageError(this);
            });

            // Add load event listener
            img.addEventListener('load', function() {
                console.log('Image loaded successfully:', this.src);
                this.classList.remove('img-error');
            });

            // Set a shorter timeout to check if image loads
            setTimeout(function() {
                if (!img.complete || img.naturalHeight === 0) {
                    console.log('Image timeout or failed to load:', img.src);
                    handleImageError(img);
                }
            }, 2000); // Reduced to 2 second timeout
        });
        
        // Also immediately replace images if CSP is blocking them
        setTimeout(function() {
            images.forEach(function(img) {
                if (!img.complete || img.naturalHeight === 0) {
                    console.log('Force replacing image due to CSP or loading issues:', img.src);
                    handleImageError(img);
                }
            });
        }, 100); // Check very quickly
    }

    function handleImageError(img) {
        img.classList.add('img-error');
        img.style.display = 'none';
        
        // Create or show fallback div
        let fallback = img.nextElementSibling;
        if (!fallback || !fallback.classList.contains('img-fallback')) {
            fallback = createFallback(img);
            img.parentNode.insertBefore(fallback, img.nextSibling);
        }
        
        fallback.style.display = 'flex';
    }

    function createFallback(img) {
        const fallback = document.createElement('div');
        fallback.className = 'img-fallback';
        
        // Determine fallback type based on alt text or class
        const alt = img.alt.toLowerCase();
        const src = img.src.toLowerCase();
        
        if (alt.includes('template') || src.includes('template')) {
            fallback.className += ' placeholder-template';
            fallback.innerHTML = '<i class="fas fa-file-alt" style="margin-right: 8px;"></i>Template Preview';
        } else if (alt.includes('feature') || alt.includes('ai') || alt.includes('parsing')) {
            fallback.className += ' placeholder-feature';
            fallback.innerHTML = '<i class="fas fa-magic" style="margin-right: 8px;"></i>Feature Image';
        } else if (alt.includes('testimonial') || alt.includes('author') || alt.includes('engineer') || alt.includes('manager')) {
            fallback.className += ' placeholder-testimonial';
            fallback.innerHTML = '<i class="fas fa-user" style="margin-right: 8px;"></i>User Photo';
        } else if (alt.includes('step') || alt.includes('how it works')) {
            fallback.className += ' placeholder-step';
            fallback.innerHTML = '<i class="fas fa-cog" style="margin-right: 8px;"></i>Step Image';
        } else if (alt.includes('about') || alt.includes('team')) {
            fallback.className += ' placeholder-about';
            fallback.innerHTML = '<i class="fas fa-users" style="margin-right: 8px;"></i>About Image';
        } else {
            fallback.className += ' placeholder-hero';
            fallback.innerHTML = '<i class="fas fa-image" style="margin-right: 8px;"></i>Professional Image';
        }
        
        // Copy some styles from original image
        if (img.classList.contains('img-fluid')) {
            fallback.style.width = '100%';
        }
        if (img.classList.contains('rounded')) {
            fallback.style.borderRadius = '8px';
        }
        if (img.classList.contains('shadow-lg')) {
            fallback.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
        }
        
        return fallback;
    }

    // Also handle CSS background images
    function handleBackgroundImages() {
        const elements = document.querySelectorAll('[style*="images.unsplash.com"], [style*="images.pexels.com"]');
        
        elements.forEach(function(element) {
            // Create a test image to check if background image loads
            const testImg = new Image();
            const bgImageMatch = element.style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
            
            if (bgImageMatch) {
                testImg.onload = function() {
                    // Image loaded successfully
                };
                
                testImg.onerror = function() {
                    // Replace with gradient background
                    element.style.backgroundImage = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                };
                
                testImg.src = bgImageMatch[1];
            }
        });
    }

    // Run background image handler after a short delay
    setTimeout(handleBackgroundImages, 1000);

})();
