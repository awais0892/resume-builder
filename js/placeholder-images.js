// Placeholder Image Generator
class PlaceholderGenerator {
    static generateTemplatePreview(width = 400, height = 300, text = 'Template Preview', color = '#4a6bff') {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        
        // Gradient background
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, '#f8f9fa');
        gradient.addColorStop(1, '#e9ecef');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Border
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.strokeRect(0, 0, width, height);
        
        // Decorative elements
        ctx.fillStyle = color + '20';
        ctx.fillRect(20, 20, width - 40, height - 40);
        
        // Text
        ctx.fillStyle = color;
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(text, width/2, height/2 - 10);
        
        ctx.font = '14px Arial';
        ctx.fillStyle = '#6c757d';
        ctx.fillText('Professional Design', width/2, height/2 + 15);
        
        return canvas.toDataURL();
    }
    
    static generateTeamMember(width = 200, height = 200, name = 'Team Member') {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        
        // Circle background
        ctx.fillStyle = '#4a6bff';
        ctx.beginPath();
        ctx.arc(width/2, height/2, width/2 - 10, 0, 2 * Math.PI);
        ctx.fill();
        
        // Initials
        ctx.fillStyle = 'white';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(name.charAt(0).toUpperCase(), width/2, height/2);
        
        return canvas.toDataURL();
    }
}

// Replace external images with placeholders (DISABLED - using real images now)
// document.addEventListener('DOMContentLoaded', function() {
//     // Template preview images
//     const templateImages = document.querySelectorAll('.template-card img');
//     templateImages.forEach((img, index) => {
//         const templates = ['Modern Template', 'Professional Template', 'Creative Template', 
//                          'Europass Template', 'Minimalist Template', 'Executive Template'];
//         const placeholder = PlaceholderGenerator.generateTemplatePreview(400, 300, templates[index] || 'Template Preview');
//         img.src = placeholder;
//     });
//     
//     // Team member images
//     const teamImages = document.querySelectorAll('.team-member img');
//     const teamNames = ['John Doe', 'Jane Smith', 'Mike Johnson'];
//     teamImages.forEach((img, index) => {
//         const placeholder = PlaceholderGenerator.generateTeamMember(200, 200, teamNames[index] || 'Team Member');
//         img.src = placeholder;
//     });
// }); 