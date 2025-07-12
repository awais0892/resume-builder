// Immediate Image Replacer - Replace external images with placeholders instantly
(function() {
    'use strict';

    console.log('Immediate image replacer starting...');

    // Function to replace an image with a placeholder
    function replaceWithPlaceholder(img) {
        const alt = img.alt.toLowerCase();
        const src = img.src.toLowerCase();
        
        // Create placeholder div
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
            width: 100%;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1rem;
            text-align: center;
            border-radius: 8px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;

        // Set specific style and content based on image type
        if (alt.includes('template')) {
            placeholder.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
            placeholder.innerHTML = '<i class="fas fa-file-alt" style="margin-right: 8px;"></i>Template Preview';
        } else if (alt.includes('feature') || alt.includes('ai') || alt.includes('parsing')) {
            placeholder.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
            placeholder.innerHTML = '<i class="fas fa-magic" style="margin-right: 8px;"></i>Feature Image';
        } else if (alt.includes('testimonial') || alt.includes('author') || alt.includes('engineer') || alt.includes('manager')) {
            placeholder.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
            placeholder.innerHTML = '<i class="fas fa-user" style="margin-right: 8px;"></i>User Photo';
            placeholder.style.height = '250px';
        } else if (alt.includes('step')) {
            placeholder.style.background = 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
            placeholder.innerHTML = '<i class="fas fa-cog" style="margin-right: 8px;"></i>Step Image';
            placeholder.style.height = '180px';
        } else if (alt.includes('about') || alt.includes('team')) {
            placeholder.style.background = 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)';
            placeholder.style.color = '#333';
            placeholder.innerHTML = '<i class="fas fa-users" style="margin-right: 8px;"></i>About Image';
        } else {
            placeholder.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            placeholder.innerHTML = '<i class="fas fa-image" style="margin-right: 8px;"></i>Professional Image';
            placeholder.style.height = '300px';
        }

        // Copy Bootstrap classes styling
        if (img.classList.contains('img-fluid')) {
            placeholder.style.width = '100%';
        }
        if (img.classList.contains('rounded')) {
            placeholder.style.borderRadius = '8px';
        }
        if (img.classList.contains('shadow-lg')) {
            placeholder.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
        }
        if (img.classList.contains('card-img-top')) {
            placeholder.style.height = '200px';
            placeholder.style.borderTopLeftRadius = '8px';
            placeholder.style.borderTopRightRadius = '8px';
            placeholder.style.borderBottomLeftRadius = '0';
            placeholder.style.borderBottomRightRadius = '0';
        }

        // Replace the image
        img.style.display = 'none';
        img.parentNode.insertBefore(placeholder, img.nextSibling);
        
        console.log('Replaced image:', img.src, 'with placeholder for:', alt);
    }

    // Function to process all external images
    function processImages() {
        const images = document.querySelectorAll('img[src*="images.unsplash.com"], img[src*="images.pexels.com"]');
        console.log('Found', images.length, 'external images to replace');
        
        images.forEach(function(img, index) {
            console.log(`Processing image ${index + 1}:`, img.src);
            replaceWithPlaceholder(img);
        });

        // Handle background images too
        const bgElements = document.querySelectorAll('[style*="images.unsplash.com"], [style*="images.pexels.com"]');
        bgElements.forEach(function(element) {
            console.log('Replacing background image for element');
            element.style.backgroundImage = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        });
    }

    // Run immediately if DOM is ready, otherwise wait
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', processImages);
    } else {
        processImages();
    }

    // Also run after a small delay to catch dynamically added images
    setTimeout(processImages, 500);

})();
