// Initialize all modules when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initFormElements();
    initResumePreview();
    initExportOptions();
    initTemplateSelector();
    initLocalStorage();
    initAnimations();
    initRatingStars();
});

// Initialize animations
function initAnimations() {
    // Add animation to elements when they come into view
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize rating stars
function initRatingStars() {
    const stars = document.querySelectorAll('.rating-stars i');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            
            // Set active class to all stars up to the clicked one
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        // Hover effect
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.dataset.rating);
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.style.transform = 'scale(1.2)';
                }
            });
        });
        
        star.addEventListener('mouseout', function() {
            stars.forEach(s => {
                s.style.transform = 'scale(1)';
            });
        });
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const icon = themeToggleBtn.querySelector('i');
    
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            themeToggleBtn.textContent = '';
            themeToggleBtn.appendChild(icon);
            themeToggleBtn.appendChild(document.createTextNode(' Light Mode'));
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            themeToggleBtn.textContent = '';
            themeToggleBtn.appendChild(icon);
            themeToggleBtn.appendChild(document.createTextNode(' Dark Mode'));
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggleBtn.textContent = '';
        themeToggleBtn.appendChild(icon);
        themeToggleBtn.appendChild(document.createTextNode(' Light Mode'));
    }
}

// Initialize form elements
function initFormElements() {
    // Add initial experience item
    addExperienceItem();
    
    // Add initial education item
    addEducationItem();
    
    // Personal info real-time updates
    const personalInfoInputs = document.querySelectorAll('#personalInfo input, #personalInfo textarea');
    personalInfoInputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });
    
    // Add experience button
    document.getElementById('addExperience').addEventListener('click', function() {
        addExperienceItem();
    });
    
    // Add education button
    document.getElementById('addEducation').addEventListener('click', function() {
        addEducationItem();
    });
    
    // Add project button
    document.getElementById('addProject').addEventListener('click', function() {
        addProjectItem();
    });
    
    // Add skill button
    document.getElementById('addSkill').addEventListener('click', function() {
        addSkillsFromInput();
    });
    
    // Allow Enter key to add skills
    document.getElementById('skillInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkillsFromInput();
        }
    });
    
    // Set up event delegation for dynamic elements
    document.addEventListener('click', function(e) {
        // Remove experience item
        if (e.target.closest('.remove-item')) {
            const item = e.target.closest('.experience-item, .education-item, .project-item');
            if (item) {
                item.classList.add('animate__animated', 'animate__fadeOut');
                setTimeout(() => {
                    item.remove();
                    updatePreview();
                }, 300);
            }
        }
        
        // Add responsibility to experience item
        if (e.target.closest('.add-responsibility')) {
            const btn = e.target.closest('.add-responsibility');
            const container = btn.nextElementSibling;
            
            const responsibilityDiv = document.createElement('div');
            responsibilityDiv.className = 'responsibility-item input-group mt-2 animate__animated animate__fadeIn';
            responsibilityDiv.innerHTML = `
                <input type="text" class="form-control resp-text" placeholder="Achieved X by doing Y, resulting in Z...">
                <button class="btn btn-outline-danger remove-resp">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            container.appendChild(responsibilityDiv);
            
            // Focus the new input
            setTimeout(() => {
                responsibilityDiv.querySelector('input').focus();
            }, 100);
            
            // Set up event listener for the remove button
            responsibilityDiv.querySelector('.remove-resp').addEventListener('click', function() {
                responsibilityDiv.classList.add('animate__animated', 'animate__fadeOut');
                setTimeout(() => {
                    responsibilityDiv.remove();
                    updatePreview();
                }, 300);
            });
            
            // Set up event listener for input changes
            responsibilityDiv.querySelector('input').addEventListener('input', updatePreview);
        }
    });
    
    // Refresh preview button
    document.getElementById('refreshPreview').addEventListener('click', function() {
        updatePreview();
        this.classList.add('animate__animated', 'animate__rotateIn');
        setTimeout(() => {
            this.classList.remove('animate__animated', 'animate__rotateIn');
        }, 1000);
    });
}

// Add a new experience item
function addExperienceItem() {
    const container = document.getElementById('experienceContainer');
    const itemCount = container.querySelectorAll('.experience-item').length + 1;
    
    const experienceItem = document.createElement('div');
    experienceItem.className = 'experience-item card mb-3 animate__animated animate__fadeIn';
    experienceItem.innerHTML = `
        <div class="card-body">
            <div class="mb-2 d-flex justify-content-between">
                <h5 class="card-title">Experience #${itemCount}</h5>
                <button class="btn btn-sm btn-outline-danger remove-item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="mb-2">
                <label class="form-label">Job Title</label>
                <input type="text" class="form-control exp-title" placeholder="Senior Developer">
            </div>
            <div class="mb-2">
                <label class="form-label">Company</label>
                <input type="text" class="form-control exp-company" placeholder="Tech Company Inc.">
            </div>
            <div class="row mb-2">
                <div class="col-md-6">
                    <label class="form-label">Start Date</label>
                    <input type="month" class="form-control exp-start">
                </div>
                <div class="col-md-6">
                    <label class="form-label">End Date</label>
                    <input type="month" class="form-control exp-end">
                    <div class="form-check mt-2">
                        <input class="form-check-input current-job" type="checkbox" id="currentJob${itemCount}">
                        <label class="form-check-label" for="currentJob${itemCount}">
                            Current Job
                        </label>
                    </div>
                </div>
            </div>
            <div class="mb-2">
                <label class="form-label">Description</label>
                <textarea class="form-control exp-description" rows="3" placeholder="Describe your responsibilities and achievements..."></textarea>
            </div>
            <button type="button" class="btn btn-sm btn-outline-primary add-responsibility">
                <i class="fas fa-plus me-1"></i>Add Key Responsibility
            </button>
            <div class="responsibilities-container mt-2">
                <!-- Responsibilities will be added here -->
            </div>
        </div>
    `;
    
    container.appendChild(experienceItem);
    
    // Set up event listeners for the new elements
    const newInputs = experienceItem.querySelectorAll('input, textarea');
    newInputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });
    
    // Set up current job checkbox
    const currentJobCheckbox = experienceItem.querySelector('.current-job');
    const endDateInput = experienceItem.querySelector('.exp-end');
    
    currentJobCheckbox.addEventListener('change', function() {
        if (this.checked) {
            endDateInput.disabled = true;
            endDateInput.value = '';
        } else {
            endDateInput.disabled = false;
        }
        updatePreview();
    });
    
    updatePreview();
}

// Add a new education item
function addEducationItem() {
    const container = document.getElementById('educationContainer');
    const itemCount = container.querySelectorAll('.education-item').length + 1;
    
    const educationItem = document.createElement('div');
    educationItem.className = 'education-item card mb-3 animate__animated animate__fadeIn';
    educationItem.innerHTML = `
        <div class="card-body">
            <div class="mb-2 d-flex justify-content-between">
                <h5 class="card-title">Education #${itemCount}</h5>
                <button class="btn btn-sm btn-outline-danger remove-item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="mb-2">
                <label class="form-label">Degree</label>
                <input type="text" class="form-control edu-degree" placeholder="Bachelor of Science in Computer Science">
            </div>
            <div class="mb-2">
                <label class="form-label">Institution</label>
                <input type="text" class="form-control edu-institution" placeholder="University Name">
            </div>
            <div class="row mb-2">
                <div class="col-md-6">
                    <label class="form-label">Start Date</label>
                    <input type="month" class="form-control edu-start">
                </div>
                <div class="col-md-6">
                    <label class="form-label">End Date</label>
                    <input type="month" class="form-control edu-end">
                    <div class="form-check mt-2">
                        <input class="form-check-input current-edu" type="checkbox" id="currentEdu${itemCount}">
                        <label class="form-check-label" for="currentEdu${itemCount}">
                            Currently Studying
                        </label>
                    </div>
                </div>
            </div>
            <div class="mb-2">
                <label class="form-label">Description (Optional)</label>
                <textarea class="form-control edu-description" rows="2" placeholder="Relevant coursework, achievements, etc."></textarea>
            </div>
        </div>
    `;
    
    container.appendChild(educationItem);
    
    // Set up event listeners for the new elements
    const newInputs = educationItem.querySelectorAll('input, textarea');
    newInputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });
    
    // Set up current education checkbox
    const currentEduCheckbox = educationItem.querySelector('.current-edu');
    const endDateInput = educationItem.querySelector('.edu-end');
    
    currentEduCheckbox.addEventListener('change', function() {
        if (this.checked) {
            endDateInput.disabled = true;
            endDateInput.value = '';
        } else {
            endDateInput.disabled = false;
        }
        updatePreview();
    });
    
    updatePreview();
}

// Add a new project item
function addProjectItem() {
    const container = document.getElementById('projectsContainer');
    const itemCount = container.querySelectorAll('.project-item').length + 1;
    
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item card mb-3 animate__animated animate__fadeIn';
    projectItem.innerHTML = `
        <div class="card-body">
            <div class="mb-2 d-flex justify-content-between">
                <h5 class="card-title">Project #${itemCount}</h5>
                <button class="btn btn-sm btn-outline-danger remove-item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="mb-2">
                <label class="form-label">Project Name</label>
                <input type="text" class="form-control proj-name" placeholder="E-commerce Platform">
            </div>
            <div class="mb-2">
                <label class="form-label">Technologies Used</label>
                <input type="text" class="form-control proj-tech" placeholder="React, Node.js, MongoDB">
            </div>
            <div class="mb-2">
                <label class="form-label">Project URL (Optional)</label>
                <input type="url" class="form-control proj-url" placeholder="https://example.com/project">
            </div>
            <div class="mb-2">
                <label class="form-label">Description</label>
                <textarea class="form-control proj-description" rows="3" placeholder="Describe the project, your role, and achievements..."></textarea>
            </div>
        </div>
    `;
    
    container.appendChild(projectItem);
    
    // Set up event listeners for the new elements
    const newInputs = projectItem.querySelectorAll('input, textarea');
    newInputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });
    
    updatePreview();
}

// Add skills from input
function addSkillsFromInput() {
    const skillInput = document.getElementById('skillInput');
    const skillTags = document.getElementById('skillTags');
    const skills = skillInput.value.split(',').map(skill => skill.trim()).filter(skill => skill);
    
    skills.forEach(skill => {
        if (skill) {
            const skillTag = document.createElement('div');
            skillTag.className = 'skill-tag animate__animated animate__fadeIn';
            skillTag.innerHTML = `
                ${skill}
                <span class="remove-skill">
                    <i class="fas fa-times"></i>
                </span>
            `;
            
            skillTags.appendChild(skillTag);
            
            // Set up event listener for remove button
            skillTag.querySelector('.remove-skill').addEventListener('click', function() {
                skillTag.classList.add('animate__animated', 'animate__fadeOut');
                setTimeout(() => {
                    skillTag.remove();
                    updatePreview();
                }, 300);
            });
        }
    });
    
    skillInput.value = '';
    updatePreview();
}

// Initialize resume preview with real-time updates
// In the initResumePreview() function, make sure all form elements are properly connected
function initResumePreview() {
    // Initial update
    updatePreview();
    
    // Listen for changes in all form inputs
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('input', updatePreview);
        input.addEventListener('change', updatePreview);
    });
    
    // Also listen for changes in skill tags and dynamic elements
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-skill') || 
            e.target.classList.contains('remove-resp') ||
            e.target.closest('.remove-item')) {
            updatePreview();
        }
    });
}

// Update the resume preview based on form data
function updatePreview() {
    const template = document.getElementById('template-selector').value;
    const preview = document.getElementById('resumePreview');
    
    // Clear existing preview
    preview.innerHTML = '';
    
    // Add template-specific structure
    if (template === 'professional') {
        updateProfessionalTemplate();
    } else if (template === 'europass') {
        updateEuropassTemplate();
    } else if (template === 'minimalist') {
        updateMinimalistTemplate();
    } else {
        updateModernTemplate(); // Default to modern template
    }
}

// Update modern template preview
function updateModernTemplate() {
    const preview = document.getElementById('resumePreview');
    preview.className = 'resume-preview modern-template';
    
    // Update personal info
    const name = document.getElementById('fullName').value || 'Your Name';
    const title = document.getElementById('jobTitle').value || 'Your Job Title';
    const email = document.getElementById('email').value || 'email@example.com';
    const phone = document.getElementById('phone').value || '(555) 123-4567';
    const location = document.getElementById('location').value || 'City, Country';
    const summary = document.getElementById('summary').value || 'Your professional summary will appear here...';
    
    // Update social links
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const website = document.getElementById('website').value;
    
    let socialHTML = '';
    if (linkedin) {
        socialHTML += `<a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>`;
    }
    if (github) {
        socialHTML += `<a href="${github}" target="_blank"><i class="fab fa-github"></i></a>`;
    }
    if (website) {
        socialHTML += `<a href="${website}" target="_blank"><i class="fas fa-globe"></i></a>`;
    }
    
    // Update experience section
    const experienceItems = document.querySelectorAll('.experience-item');
    let experienceHTML = '';
    
    experienceItems.forEach(item => {
        const title = item.querySelector('.exp-title').value || 'Job Title';
        const company = item.querySelector('.exp-company').value || 'Company Name';
        const startDate = formatDate(item.querySelector('.exp-start').value);
        
        let endDate = 'Present';
        const isCurrentJob = item.querySelector('.current-job').checked;
        if (!isCurrentJob) {
            endDate = formatDate(item.querySelector('.exp-end').value) || 'End Date';
        }
        
        const description = item.querySelector('.exp-description').value || '';
        
        // Get responsibilities
        const responsibilities = item.querySelectorAll('.responsibility-item input');
        let respListHTML = '';
        
        if (responsibilities.length > 0) {
            respListHTML = '<ul class="mt-2">';
            responsibilities.forEach(resp => {
                const respText = resp.value.trim();
                if (respText) {
                    respListHTML += `<li class="mb-1">${respText}</li>`;
                }
            });
            respListHTML += '</ul>';
        }
        
        experienceHTML += `
            <div class="experience-item mb-4">
                <div class="d-flex justify-content-between">
                    <div>
                        <p class="job-title mb-1"><strong>${title}</strong></p>
                        <p class="company-name mb-1">${company}</p>
                    </div>
                    <p class="date-range text-muted">${startDate} - ${endDate}</p>
                </div>
                ${description ? `<p class="mt-2">${description}</p>` : ''}
                ${respListHTML}
            </div>
        `;
    });
    
    // Update education section
    const educationItems = document.querySelectorAll('.education-item');
    let educationHTML = '';
    
    educationItems.forEach(item => {
        const degree = item.querySelector('.edu-degree').value || 'Degree';
        const institution = item.querySelector('.edu-institution').value || 'Institution Name';
        const startDate = formatDate(item.querySelector('.edu-start').value);
        
        let endDate = 'Present';
        const isCurrentEdu = item.querySelector('.current-edu').checked;
        if (!isCurrentEdu) {
            endDate = formatDate(item.querySelector('.edu-end').value) || 'End Date';
        }
        
        const description = item.querySelector('.edu-description').value || '';
        
        educationHTML += `
            <div class="education-item mb-4">
                <div class="d-flex justify-content-between">
                    <div>
                        <p class="degree mb-1"><strong>${degree}</strong></p>
                        <p class="institution-name mb-1">${institution}</p>
                    </div>
                    <p class="date-range text-muted">${startDate} - ${endDate}</p>
                </div>
                ${description ? `<p class="mt-2">${description}</p>` : ''}
            </div>
        `;
    });
    
    // Update skills section
    const skillTags = document.querySelectorAll('#skillTags .skill-tag');
    let skillsHTML = '';
    
    skillTags.forEach(tag => {
        const skillText = tag.textContent.trim();
        skillsHTML += `<div class="skill-item">${skillText}</div>`;
    });
    
    // Update projects section
    const projectItems = document.querySelectorAll('.project-item');
    let projectsHTML = '';
    
    projectItems.forEach(item => {
        const name = item.querySelector('.proj-name').value || 'Project Name';
        const tech = item.querySelector('.proj-tech').value || 'Technologies Used';
        const url = item.querySelector('.proj-url').value;
        const description = item.querySelector('.proj-description').value || '';
        
        projectsHTML += `
            <div class="project-item mb-4">
                <p class="project-name mb-1">
                    <strong>${url ? `<a href="${url}" target="_blank">${name}</a>` : name}</strong>
                </p>
                <p class="project-tech text-muted mb-2"><small>${tech}</small></p>
                <p>${description}</p>
            </div>
        `;
    });
    
    // Construct the full preview
    preview.innerHTML = `
        <div class="resume-header">
            <h1>${name}</h1>
            <p>${title}</p>
            <div class="contact-info">
                <span><i class="fas fa-envelope"></i> ${email}</span>
                <span><i class="fas fa-phone"></i> ${phone}</span>
                <span><i class="fas fa-map-marker-alt"></i> ${location}</span>
            </div>
            ${socialHTML ? `<div class="social-links">${socialHTML}</div>` : ''}
        </div>
        
        <div class="resume-summary">
            <h2>Professional Summary</h2>
            <p>${summary}</p>
        </div>
        
        <div class="resume-experience">
            <h2>Work Experience</h2>
            ${experienceHTML || '<p class="text-muted">No experience added yet.</p>'}
        </div>
        
        <div class="resume-education">
            <h2>Education</h2>
            ${educationHTML || '<p class="text-muted">No education added yet.</p>'}
        </div>
        
        ${skillsHTML ? `
        <div class="resume-skills">
            <h2>Skills</h2>
            <div class="skills-container">${skillsHTML}</div>
        </div>
        ` : ''}
        
        ${projectsHTML ? `
        <div class="resume-projects">
            <h2>Projects</h2>
            ${projectsHTML}
        </div>
        ` : ''}
    `;
}

// Update professional template preview
function updateProfessionalTemplate() {
    const preview = document.getElementById('resumePreview');
    preview.className = 'resume-preview professional-template';
    
    // Similar structure to updateModernTemplate but with professional styling
    // Implementation would follow the same pattern with different HTML structure
    // Omitted for brevity but would be similar to the modern template with different styling
}

// Update Europass template preview
function updateEuropassTemplate() {
    const preview = document.getElementById('resumePreview');
    preview.className = 'resume-preview europass-template';
    
    // Similar structure to updateModernTemplate but with Europass styling
    // Implementation would follow the same pattern with different HTML structure
    // Omitted for brevity but would be similar to the modern template with Europass styling
}

// Update minimalist template preview
function updateMinimalistTemplate() {
    const preview = document.getElementById('resumePreview');
    preview.className = 'resume-preview minimalist-template';
    
    // Similar structure to updateModernTemplate but with minimalist styling
    // Implementation would follow the same pattern with different HTML structure
    // Omitted for brevity but would be similar to the modern template with minimalist styling
}

// Format date YYYY-MM to Month Year
function formatDate(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString(undefined, options);
}

// Initialize export options
function initExportOptions() {
    // Download PDF
    document.getElementById('downloadPDF').addEventListener('click', function() {
        // Show loading indication
        const button = this;
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
        button.disabled = true;
        
        // Allow UI to update before starting PDF generation
        setTimeout(() => {
            generatePDF().then(() => {
                // Restore button state
                button.innerHTML = originalText;
                button.disabled = false;
            }).catch(error => {
                console.error('Error generating PDF:', error);
                alert('There was an error generating your PDF. Please try again.');
                button.innerHTML = originalText;
                button.disabled = false;
            });
        }, 100);
    });
    
    // Export as JSON
    document.getElementById('exportJSON').addEventListener('click', exportAsJSON);
    
    // Export as DOCX - Placeholder
    document.getElementById('exportDOCX').addEventListener('click', function() {
        alert('DOCX export functionality will be implemented in the future.');
    });
    
    // Generate QR Code - Placeholder
    document.getElementById('generateQR').addEventListener('click', function() {
        alert('QR code generation will be implemented in the future.');
    });
    
    // Save resume to localStorage
    document.getElementById('saveResume').addEventListener('click', function() {
        saveResumeToLocalStorage();
        
        // Show a success message
        const button = this;
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Saved!';
        button.disabled = true;
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    });
}

// Generate PDF from resume preview
async function generatePDF() {
    try {
        const { jsPDF } = window.jspdf;
        const resumePreview = document.getElementById('resumePreview');
        
        // Create a clone of the preview to avoid affecting the live preview
        const clone = resumePreview.cloneNode(true);
        clone.style.position = 'absolute';
        clone.style.left = '-9999px';
        document.body.appendChild(clone);
        
        // Generate canvas with better quality settings
        const canvas = await html2canvas(clone, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            letterRendering: true
        });
        
        document.body.removeChild(clone);
        
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;
        
        pdf.addImage(canvas, 'PNG', 0, 0, imgWidth, imgHeight);
        
        // Handle multi-page resumes
        let heightLeft = imgHeight;
        let position = 0;
        
        while (heightLeft > pdfHeight) {
            position = heightLeft - pdfHeight;
            pdf.addPage();
            pdf.addImage(canvas, 'PNG', 0, -position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
        }
        
        const name = document.getElementById('fullName').value || 'resume';
        const fileName = `${name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`;
        pdf.save(fileName);
    } catch (error) {
        console.error('PDF generation error:', error);
        alert('Error generating PDF. Please try again.');
    }
}

// Export resume data as JSON
function exportAsJSON() {
    // Collect all form data
    const resumeData = {
        personalInfo: {
            fullName: document.getElementById('fullName').value,
            jobTitle: document.getElementById('jobTitle').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            summary: document.getElementById('summary').value,
            linkedin: document.getElementById('linkedin').value,
            github: document.getElementById('github').value,
            website: document.getElementById('website').value
        },
        experience: [],
        education: [],
        skills: [],
        projects: []
    };
    
    // Collect experience data
    document.querySelectorAll('.experience-item').forEach(item => {
        const experienceItem = {
            title: item.querySelector('.exp-title').value,
            company: item.querySelector('.exp-company').value,
            startDate: item.querySelector('.exp-start').value,
            endDate: item.querySelector('.current-job').checked ? 'Present' : item.querySelector('.exp-end').value,
            isCurrentJob: item.querySelector('.current-job').checked,
            description: item.querySelector('.exp-description').value,
            responsibilities: []
        };
        
        // Get responsibilities
        item.querySelectorAll('.responsibility-item input').forEach(input => {
            if (input.value.trim()) {
                experienceItem.responsibilities.push(input.value.trim());
            }
        });
        
        resumeData.experience.push(experienceItem);
    });
    
    // Collect education data
    document.querySelectorAll('.education-item').forEach(item => {
        resumeData.education.push({
            degree: item.querySelector('.edu-degree').value,
            institution: item.querySelector('.edu-institution').value,
            startDate: item.querySelector('.edu-start').value,
            endDate: item.querySelector('.current-edu').checked ? 'Present' : item.querySelector('.edu-end').value,
            isCurrentEdu: item.querySelector('.current-edu').checked,
            description: item.querySelector('.edu-description').value
        });
    });
    
    // Collect skills
    document.querySelectorAll('#skillTags .skill-tag').forEach(tag => {
        resumeData.skills.push(tag.textContent.trim());
    });
    
    // Collect projects
    document.querySelectorAll('.project-item').forEach(item => {
        resumeData.projects.push({
            name: item.querySelector('.proj-name').value,
            technologies: item.querySelector('.proj-tech').value,
            url: item.querySelector('.proj-url').value,
            description: item.querySelector('.proj-description').value
        });
    });
    
    // Convert to JSON string
    const jsonString = JSON.stringify(resumeData, null, 2);
    
    // Create and download file
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resumeData.personalInfo.fullName.toLowerCase().replace(/\s+/g, '_')}_resume.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Initialize template selector
function initTemplateSelector() {
    const templateSelector = document.getElementById('template-selector');
    
    templateSelector.addEventListener('change', function() {
        const selectedTemplate = this.value;
        updatePreview();
        
        // Save template preference
        localStorage.setItem('selectedTemplate', selectedTemplate);
        
        // Show template change animation
        const preview = document.getElementById('resumePreview');
        preview.classList.add('animate__animated', 'animate__flipInX');
        setTimeout(() => {
            preview.classList.remove('animate__animated', 'animate__flipInX');
        }, 1000);
    });
    
    // Load saved template preference
    const savedTemplate = localStorage.getItem('selectedTemplate');
    if (savedTemplate) {
        templateSelector.value = savedTemplate;
    }
}

// Initialize localStorage functionality
function initLocalStorage() {
    // Check for saved resumes and update UI
    updateSavedResumesList();
}

// Save resume data to localStorage
function saveResumeToLocalStorage() {
    // Generate a unique resume ID if one doesn't exist yet
    let resumeId = localStorage.getItem('currentResumeId');
    if (!resumeId) {
        resumeId = 'resume_' + Date.now();
        localStorage.setItem('currentResumeId', resumeId);
    }
    
    // Get existing saved resumes or initialize empty array
    const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
    
    // Create resume data object
    const resumeData = {
        id: resumeId,
        template: document.getElementById('template-selector').value,
        lastModified: new Date().toISOString(),
        personalInfo: {
            fullName: document.getElementById('fullName').value || 'Untitled Resume',
            jobTitle: document.getElementById('jobTitle').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            summary: document.getElementById('summary').value,
            linkedin: document.getElementById('linkedin').value,
            github: document.getElementById('github').value,
            website: document.getElementById('website').value
        },
        experience: [],
        education: [],
        skills: [],
        projects: []
    };
    
    // Collect experience data
    document.querySelectorAll('.experience-item').forEach(item => {
        const experienceItem = {
            title: item.querySelector('.exp-title').value,
            company: item.querySelector('.exp-company').value,
            startDate: item.querySelector('.exp-start').value,
            endDate: item.querySelector('.current-job').checked ? 'Present' : item.querySelector('.exp-end').value,
            isCurrentJob: item.querySelector('.current-job').checked,
            description: item.querySelector('.exp-description').value,
            responsibilities: []
        };
        
        // Get responsibilities
        item.querySelectorAll('.responsibility-item input').forEach(input => {
            if (input.value.trim()) {
                experienceItem.responsibilities.push(input.value.trim());
            }
        });
        
        resumeData.experience.push(experienceItem);
    });
    
    // Collect education data
    document.querySelectorAll('.education-item').forEach(item => {
        resumeData.education.push({
            degree: item.querySelector('.edu-degree').value,
            institution: item.querySelector('.edu-institution').value,
            startDate: item.querySelector('.edu-start').value,
            endDate: item.querySelector('.current-edu').checked ? 'Present' : item.querySelector('.edu-end').value,
            isCurrentEdu: item.querySelector('.current-edu').checked,
            description: item.querySelector('.edu-description').value
        });
    });
    
    // Collect skills
    document.querySelectorAll('#skillTags .skill-tag').forEach(tag => {
        resumeData.skills.push(tag.textContent.trim());
    });
    
    // Collect projects
    document.querySelectorAll('.project-item').forEach(item => {
        resumeData.projects.push({
            name: item.querySelector('.proj-name').value,
            technologies: item.querySelector('.proj-tech').value,
            url: item.querySelector('.proj-url').value,
            description: item.querySelector('.proj-description').value
        });
    });
    
    // Check if this resume already exists in saved resumes
    const existingIndex = savedResumes.findIndex(resume => resume.id === resumeId);
    if (existingIndex !== -1) {
        // Update existing resume
        savedResumes[existingIndex] = resumeData;
    } else {
        // Add new resume
        savedResumes.push(resumeData);
    }
    
    // Save to localStorage
    localStorage.setItem('savedResumes', JSON.stringify(savedResumes));
    
    // Update the saved resumes list
    updateSavedResumesList();
}

// Update the saved resumes list in the UI
function updateSavedResumesList() {
    const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
    const savedResumesList = document.getElementById('savedResumesList');
    
    if (!savedResumesList) return;
    
    if (savedResumes.length === 0) {
        savedResumesList.innerHTML = '<p class="text-muted">No saved resumes yet.</p>';
        return;
    }
    
    let html = '<div class="list-group">';
    
    savedResumes.forEach(resume => {
        const lastModified = new Date(resume.lastModified).toLocaleString();
        html += `
            <div class="list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn">
                <div>
                    <h6 class="mb-1">${resume.personalInfo.fullName || 'Untitled Resume'}</h6>
                    <small class="text-muted">Last modified: ${lastModified}</small>
                </div>
                <div>
                    <button class="btn btn-sm btn-outline-primary load-resume" data-resume-id="${resume.id}">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-outline-danger delete-resume" data-resume-id="${resume.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    savedResumesList.innerHTML = html;
    
    // Set up event listeners for the buttons
    document.querySelectorAll('.load-resume').forEach(btn => {
        btn.addEventListener('click', function() {
            const resumeId = this.dataset.resumeId;
            loadResumeFromLocalStorage(resumeId);
        });
    });
    
    document.querySelectorAll('.delete-resume').forEach(btn => {
        btn.addEventListener('click', function() {
            const resumeId = this.dataset.resumeId;
            deleteResumeFromLocalStorage(resumeId);
        });
    });
}

// Load resume data from localStorage
function loadResumeFromLocalStorage(resumeId) {
    const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
    const resumeData = savedResumes.find(resume => resume.id === resumeId);
    
    if (!resumeData) {
        console.error('Resume not found in localStorage');
        alert('Resume not found in your saved resumes.');
        return;
    }
    
    // Set current resume ID
    localStorage.setItem('currentResumeId', resumeId);
    
    // Load template
    document.getElementById('template-selector').value = resumeData.template;
    
    // Load personal info
    const personalInfo = resumeData.personalInfo || {};
    document.getElementById('fullName').value = personalInfo.fullName || '';
    document.getElementById('jobTitle').value = personalInfo.jobTitle || '';
    document.getElementById('email').value = personalInfo.email || '';
    document.getElementById('phone').value = personalInfo.phone || '';
    document.getElementById('location').value = personalInfo.location || '';
    document.getElementById('summary').value = personalInfo.summary || '';
    document.getElementById('linkedin').value = personalInfo.linkedin || '';
    document.getElementById('github').value = personalInfo.github || '';
    document.getElementById('website').value = personalInfo.website || '';
    
    // Clear existing sections
    document.getElementById('experienceContainer').innerHTML = '';
    document.getElementById('educationContainer').innerHTML = '';
    document.getElementById('skillTags').innerHTML = '';
    document.getElementById('projectsContainer').innerHTML = '';
    
    // Load experience items
    (resumeData.experience || []).forEach(exp => {
        addExperienceItem();
        const lastItem = document.querySelector('.experience-item:last-child');
        
        lastItem.querySelector('.exp-title').value = exp.title || '';
        lastItem.querySelector('.exp-company').value = exp.company || '';
        lastItem.querySelector('.exp-start').value = exp.startDate || '';
        if (!exp.isCurrentJob) {
            lastItem.querySelector('.exp-end').value = exp.endDate === 'Present' ? '' : exp.endDate || '';
        }
        lastItem.querySelector('.current-job').checked = exp.isCurrentJob || false;
        lastItem.querySelector('.exp-description').value = exp.description || '';
        
        // Add responsibilities
        (exp.responsibilities || []).forEach(resp => {
            const btn = lastItem.querySelector('.add-responsibility');
            const container = btn.nextElementSibling;
            
            const responsibilityDiv = document.createElement('div');
            responsibilityDiv.className = 'responsibility-item input-group mt-2 animate__animated animate__fadeIn';
            responsibilityDiv.innerHTML = `
                <input type="text" class="form-control resp-text" value="${resp.replace(/"/g, '&quot;')}">
                <button class="btn btn-outline-danger remove-resp">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            container.appendChild(responsibilityDiv);
            
            // Set up event listeners
            responsibilityDiv.querySelector('.remove-resp').addEventListener('click', function() {
                responsibilityDiv.classList.add('animate__animated', 'animate__fadeOut');
                setTimeout(() => {
                    responsibilityDiv.remove();
                    updatePreview();
                }, 300);
            });
            
            responsibilityDiv.querySelector('input').addEventListener('input', updatePreview);
        });
    });
    
    // Load education items
    (resumeData.education || []).forEach(edu => {
        addEducationItem();
        const lastItem = document.querySelector('.education-item:last-child');
        
        lastItem.querySelector('.edu-degree').value = edu.degree || '';
        lastItem.querySelector('.edu-institution').value = edu.institution || '';
        lastItem.querySelector('.edu-start').value = edu.startDate || '';
        if (!edu.isCurrentEdu) {
            lastItem.querySelector('.edu-end').value = edu.endDate === 'Present' ? '' : edu.endDate || '';
        }
        lastItem.querySelector('.current-edu').checked = edu.isCurrentEdu || false;
        lastItem.querySelector('.edu-description').value = edu.description || '';
    });
    
    // Load skills
    (resumeData.skills || []).forEach(skill => {
        const skillTags = document.getElementById('skillTags');
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag animate__animated animate__fadeIn';
        skillTag.innerHTML = `
            ${skill}
            <span class="remove-skill">
                <i class="fas fa-times"></i>
            </span>
        `;
        
        skillTags.appendChild(skillTag);
        
        // Set up event listener for remove button
        skillTag.querySelector('.remove-skill').addEventListener('click', function() {
            skillTag.classList.add('animate__animated', 'animate__fadeOut');
            setTimeout(() => {
                skillTag.remove();
                updatePreview();
            }, 300);
        });
    });
    
    // Load projects
    (resumeData.projects || []).forEach(proj => {
        addProjectItem();
        const lastItem = document.querySelector('.project-item:last-child');
        
        lastItem.querySelector('.proj-name').value = proj.name || '';
        lastItem.querySelector('.proj-tech').value = proj.technologies || '';
        lastItem.querySelector('.proj-url').value = proj.url || '';
        lastItem.querySelector('.proj-description').value = proj.description || '';
    });
    
    // Update preview
    updatePreview();
    
    // Show success message
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3 animate__animated animate__fadeIn';
    alertDiv.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        Resume loaded successfully!
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const formPanel = document.querySelector('.form-panel');
    formPanel.insertBefore(alertDiv, formPanel.firstChild);
    
    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        const bsAlert = new bootstrap.Alert(alertDiv);
        bsAlert.close();
    }, 3000);
}

// Delete resume from localStorage
function deleteResumeFromLocalStorage(resumeId) {
    if (!confirm('Are you sure you want to delete this resume? This action cannot be undone.')) {
        return;
    }
    
    const savedResumes = JSON.parse(localStorage.getItem('savedResumes')) || [];
    const updatedResumes = savedResumes.filter(resume => resume.id !== resumeId);
    
    localStorage.setItem('savedResumes', JSON.stringify(updatedResumes));
    
    // If the deleted resume was the current one, clear the current resume ID
    const currentResumeId = localStorage.getItem('currentResumeId');
    if (currentResumeId === resumeId) {
        localStorage.removeItem('currentResumeId');
    }
    
    // Update the saved resumes list
    updateSavedResumesList();
    
    // Show success message
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger alert-dismissible fade show mt-3 animate__animated animate__fadeIn';
    alertDiv.innerHTML = `
        <i class="fas fa-trash-alt me-2"></i>
        Resume deleted successfully!
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const formPanel = document.querySelector('.form-panel');
    formPanel.insertBefore(alertDiv, formPanel.firstChild);
    
    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        const bsAlert = new bootstrap.Alert(alertDiv);
        bsAlert.close();
    }, 3000);
}