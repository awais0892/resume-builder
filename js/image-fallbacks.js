// Image Fallback Handler
(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        setupImageFallbacks();
    });

    function setupImageFallbacks() {
        // Get all images on the page
        const images = document.querySelectorAll('img[src*="images.unsplash.com"], img[src*="images.pexels.com"]');
        
        images.forEach(function(img) {
            // Add error event listener
            img.addEventListener('error', function() {
                handleImageError(this);
            });

            // Add load event listener to handle slow loading
            img.addEventListener('load', function() {
                this.classList.remove('img-error');
            });

            // Set a timeout to check if image loads within reasonable time
            setTimeout(function() {
                if (!img.complete || img.naturalHeight === 0) {
                    handleImageError(img);
                }
            }, 5000); // 5 second timeout
        });
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
