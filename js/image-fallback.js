// Image Fallback System
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src*="pexels.com"], img[src*="unsplash.com"], img[src*="canva.com"]');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a fallback image with text
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 400;
            canvas.height = 300;
            
            // Background
            ctx.fillStyle = '#f8f9fa';
            ctx.fillRect(0, 0, 400, 300);
            
            // Border
            ctx.strokeStyle = '#dee2e6';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, 400, 300);
            
            // Text
            ctx.fillStyle = '#6c757d';
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Template Preview', 200, 140);
            ctx.font = '14px Arial';
            ctx.fillText('Image not available', 200, 160);
            
            // Set the fallback image
            img.src = canvas.toDataURL();
            img.style.border = '1px solid #dee2e6';
        });
    });
}); 