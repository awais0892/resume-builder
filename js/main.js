// SweetAlert2 Configuration and Utilities
const SweetAlert = {
    // Theme configuration
    theme: {
        primary: '#4F46E5',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        dark: '#1F2937',
        light: '#F9FAFB'
    },

    // Default configuration
    config: {
        confirmButtonColor: '#4F46E5',
        cancelButtonColor: '#6B7280',
        background: '#FFFFFF',
        backdrop: 'rgba(0, 0, 0, 0.4)',
        customClass: {
            popup: 'swal2-custom-popup',
            confirmButton: 'swal2-custom-confirm',
            cancelButton: 'swal2-custom-cancel',
            title: 'swal2-custom-title',
            content: 'swal2-custom-content'
        }
    },

    // Success alerts
    success: (title, message = '', options = {}) => {
        return Swal.fire({
            icon: 'success',
            title: title,
            text: message,
            confirmButtonColor: SweetAlert.theme.success,
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: {
                popup: 'swal2-custom-popup',
                confirmButton: 'swal2-custom-confirm',
                title: 'swal2-custom-title',
                content: 'swal2-custom-content'
            },
            ...options
        });
    },

    // Error alerts
    error: (title, message = '', options = {}) => {
        return Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            confirmButtonColor: SweetAlert.theme.error,
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: {
                popup: 'swal2-custom-popup',
                confirmButton: 'swal2-custom-confirm',
                title: 'swal2-custom-title',
                content: 'swal2-custom-content'
            },
            ...options
        });
    },

    // Warning alerts
    warning: (title, message = '', options = {}) => {
        return Swal.fire({
            icon: 'warning',
            title: title,
            text: message,
            confirmButtonColor: SweetAlert.theme.warning,
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: {
                popup: 'swal2-custom-popup',
                confirmButton: 'swal2-custom-confirm',
                title: 'swal2-custom-title',
                content: 'swal2-custom-content'
            },
            ...options
        });
    },

    // Info alerts
    info: (title, message = '', options = {}) => {
        return Swal.fire({
            icon: 'info',
            title: title,
            text: message,
            confirmButtonColor: SweetAlert.theme.info,
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: {
                popup: 'swal2-custom-popup',
                confirmButton: 'swal2-custom-confirm',
                title: 'swal2-custom-title',
                content: 'swal2-custom-content'
            },
            ...options
        });
    },

    // Question/Confirmation alerts
    confirm: (title, message = '', options = {}) => {
        return Swal.fire({
            icon: 'question',
            title: title,
            text: message,
            showCancelButton: true,
            confirmButtonColor: SweetAlert.theme.primary,
            cancelButtonColor: SweetAlert.theme.dark,
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: {
                popup: 'swal2-custom-popup',
                confirmButton: 'swal2-custom-confirm',
                cancelButton: 'swal2-custom-cancel',
                title: 'swal2-custom-title',
                content: 'swal2-custom-content'
            },
            ...options
        });
    },

    // Loading alerts
    loading: (title = 'Loading...', message = 'Please wait while we process your request.') => {
        return Swal.fire({
            title: title,
            text: message,
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    },

    // Toast notifications
    toast: (message, type = 'success', duration = 3000) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: duration,
            timerProgressBar: true,
            background: SweetAlert.config.background,
            customClass: {
                popup: 'swal2-toast-custom'
            }
        });

        return Toast.fire({
            icon: type,
            title: message
        });
    },

    // Form inputs
    input: (title, message = '', inputType = 'text', options = {}) => {
        return Swal.fire({
            title: title,
            text: message,
            input: inputType,
            inputPlaceholder: options.placeholder || '',
            inputValue: options.value || '',
            showCancelButton: true,
            confirmButtonColor: SweetAlert.theme.primary,
            cancelButtonColor: SweetAlert.theme.dark,
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: SweetAlert.config.customClass,
            inputValidator: options.validator,
            ...options
        });
    },

    // File upload
    fileUpload: (title, message = '', accept = '*', options = {}) => {
        return Swal.fire({
            title: title,
            text: message,
            input: 'file',
            inputAttributes: {
                accept: accept
            },
            showCancelButton: true,
            confirmButtonColor: SweetAlert.theme.primary,
            cancelButtonColor: SweetAlert.theme.dark,
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: SweetAlert.config.customClass,
            ...options
        });
    },

    // Progress alerts
    progress: (title, message = '', progress = 0) => {
        return Swal.fire({
            title: title,
            text: message,
            html: `
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <div class="progress-text">${progress}%</div>
                </div>
            `,
            showConfirmButton: false,
            allowOutsideClick: false,
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: {
                ...SweetAlert.config.customClass,
                htmlContainer: 'swal2-progress-container'
            }
        });
    },

    // Custom HTML content
    html: (title, htmlContent, options = {}) => {
        return Swal.fire({
            title: title,
            html: htmlContent,
            confirmButtonColor: SweetAlert.theme.primary,
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: SweetAlert.config.customClass,
            ...options
        });
    },

    // Resume-specific alerts
    resumeSaved: () => {
        return SweetAlert.success(
            'Resume Saved!',
            'Your resume has been successfully saved to your browser.',
            {
                timer: 2000,
                timerProgressBar: true
            }
        );
    },

    resumeExported: () => {
        return SweetAlert.success(
            'Resume Exported!',
            'Your resume data has been exported successfully.',
            {
                timer: 2000,
                timerProgressBar: true
            }
        );
    },

    resumeImported: () => {
        return SweetAlert.success(
            'Resume Imported!',
            'Your resume data has been imported successfully.',
            {
                timer: 2000,
                timerProgressBar: true
            }
        );
    },

    resumeReset: () => {
        console.log('SweetAlert.resumeReset called');
        
        return Swal.fire({
            title: 'Reset Resume',
            text: 'Are you sure you want to reset all resume data? This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, reset it!',
            cancelButtonText: 'Cancel',
            allowOutsideClick: false,
            allowEscapeKey: true,
            focusConfirm: false,
            focusCancel: false,
            customClass: {
                popup: 'swal2-custom-popup',
                confirmButton: 'swal2-custom-confirm',
                cancelButton: 'swal2-custom-cancel',
                title: 'swal2-custom-title',
                content: 'swal2-custom-content'
            }
        }).then((result) => {
            console.log('SweetAlert result:', result);
            return result;
        }).catch((error) => {
            console.error('SweetAlert error:', error);
            throw error;
        });
    },

    pdfGenerated: () => {
        return SweetAlert.success(
            'PDF Generated!',
            'Your resume PDF has been generated and downloaded successfully.',
            {
                timer: 3000,
                timerProgressBar: true
            }
        );
    },

    extractionStarted: () => {
        return SweetAlert.loading(
            'Analyzing Resume',
            'Please wait while we extract data from your resume...'
        );
    },

    extractionComplete: (data) => {
        const extractedInfo = [];
        if (data.personal?.name) extractedInfo.push(`Name: ${data.personal.name}`);
        if (data.personal?.email) extractedInfo.push(`Email: ${data.personal.email}`);
        if (data.experience?.length) extractedInfo.push(`${data.experience.length} work experiences`);
        if (data.education?.length) extractedInfo.push(`${data.education.length} education entries`);
        if (data.skills?.length) extractedInfo.push(`${data.skills.length} skills`);

        return SweetAlert.success(
            'Resume Analyzed!',
            `Successfully extracted: ${extractedInfo.join(', ')}`,
            {
                timer: 4000,
                timerProgressBar: true
            }
        );
    },

    extractionError: (error) => {
        return SweetAlert.error(
            'Extraction Failed',
            `Unable to extract data from your resume: ${error}`,
            {
                confirmButtonText: 'Try Again'
            }
        );
    },

    formValidation: (errors) => {
        const errorList = errors.map(error => `<li>${error}</li>`).join('');
        return SweetAlert.error(
            'Form Validation Error',
            `Please fix the following issues:<ul>${errorList}</ul>`,
            {
                html: true
            }
        );
    },

    templateSelected: (templateName) => {
        return SweetAlert.success(
            'Template Selected!',
            `You've selected the ${templateName} template.`,
            {
                timer: 2000,
                timerProgressBar: true
            }
        );
    },

    canvaIntegration: () => {
        return SweetAlert.info(
            'Canva Integration',
            'Your resume data has been prepared for Canva. Click "Open Canva" to continue.',
            {
                confirmButtonText: 'Open Canva',
                showCancelButton: true,
                cancelButtonText: 'Cancel'
            }
        );
    }
};

// Replace existing toast function with SweetAlert
function showToast(message, type = 'success') {
    SweetAlert.toast(message, type);
}

// Replace existing notification function with SweetAlert
function showNotification(message, type = 'info') {
    switch (type) {
        case 'success':
            SweetAlert.success('Success', message);
            break;
        case 'error':
            SweetAlert.error('Error', message);
            break;
        case 'warning':
            SweetAlert.warning('Warning', message);
            break;
        default:
            SweetAlert.info('Info', message);
    }
}

// DOM Elements
const themeToggleBtn = document.getElementById('themeToggle');
const resumeForm = document.getElementById('resumeForm');
const previewPanel = document.getElementById('resumePreview');
const templateCards = document.querySelectorAll('.template-card');
const templatePreviewModal = document.getElementById('templatePreviewModal');
const templatePreviewImage = document.getElementById('templatePreviewImage');
const useTemplateBtn = document.getElementById('useTemplateBtn');
const refreshPreviewBtn = document.getElementById('refreshPreview');

// AI-Powered Resume Parser
let extractedData = null;

const resumeFileInput = document.getElementById('resumeFile');
const extractDataBtn = document.getElementById('extractDataBtn');
const extractionStatus = document.getElementById('extractionStatus');
const extractionMessage = document.getElementById('extractionMessage');
const extractionResults = document.getElementById('extractionResults');
const applyExtractedData = document.getElementById('applyExtractedData');
const previewExtractedData = document.getElementById('previewExtractedData');

let resumeFile = null;

// Initialize resume file upload functionality
function initResumeFileUpload() {
    const resumeFileInput = document.getElementById('resumeFile');
    const extractDataBtn = document.getElementById('extractDataBtn');
    const extractionStatus = document.getElementById('extractionStatus');
    const extractionMessage = document.getElementById('extractionMessage');
    const extractionResults = document.getElementById('extractionResults');
    const applyExtractedData = document.getElementById('applyExtractedData');
    const previewExtractedData = document.getElementById('previewExtractedData');
    const fileLabel = document.querySelector('label[for="resumeFile"]');

    if (resumeFileInput && extractDataBtn) {
        console.log('Resume file upload elements found, initializing...');
        
        // Remove any existing event listeners to prevent duplicates
        const newResumeFileInput = resumeFileInput.cloneNode(true);
        resumeFileInput.parentNode.replaceChild(newResumeFileInput, resumeFileInput);
        
        const newExtractDataBtn = extractDataBtn.cloneNode(true);
        extractDataBtn.parentNode.replaceChild(newExtractDataBtn, extractDataBtn);
        
        // Get the new elements
        const cleanResumeFileInput = document.getElementById('resumeFile');
        const cleanExtractDataBtn = document.getElementById('extractDataBtn');
        
        // File input change handler
        cleanResumeFileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            resumeFile = file;
            
            console.log('File selected:', file ? file.name : 'No file');
            console.log('File type:', file ? file.type : 'No file');
            console.log('File size:', file ? file.size : 'No file');
            
            // Enable/disable extract button
            cleanExtractDataBtn.disabled = !file;
            
            // Hide previous results
            if (extractionResults) {
                extractionResults.style.display = 'none';
            }
            
            // Show file selected feedback
            if (file && fileLabel) {
                fileLabel.innerHTML = `<i class="fas fa-check me-2"></i>${file.name}`;
                fileLabel.classList.remove('btn-outline-primary');
                fileLabel.classList.add('btn-success');
            }
        });

        // Extract button click handler
        cleanExtractDataBtn.addEventListener('click', async function () {
            if (!resumeFile) {
                console.log('No file selected');
                SweetAlert.warning('No File Selected', 'Please select a resume file to extract data from.');
                return;
            }
            
            console.log('Starting extraction for file:', resumeFile.name);
            
            // Disable button during processing
            cleanExtractDataBtn.disabled = true;
            cleanExtractDataBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
            
            // Show loading alert
            const loadingAlert = SweetAlert.extractionStarted();
            
            // Add timeout to prevent hanging
            const timeout = setTimeout(() => {
                Swal.close();
                SweetAlert.error('Processing Timeout', 'The file processing is taking too long. Please try a smaller file or refresh the page.');
                cleanExtractDataBtn.disabled = false;
                cleanExtractDataBtn.innerHTML = '<i class="fas fa-magic me-2"></i>Instant Extract & Fill';
            }, 30000); // 30 second timeout
            
            try {
                const text = await extractTextFromFile(resumeFile);
                console.log('Text extracted, length:', text.length);
                
                if (!text || text.trim().length === 0) {
                    throw new Error('No text could be extracted from the file. Please try a different file.');
                }
                
                extractedData = await parseResumeWithAI(text);
                console.log('Data parsed:', extractedData);
                
                // Clear timeout
                clearTimeout(timeout);
                
                // Close loading alert
                Swal.close();
                
                // Show success alert
                SweetAlert.extractionComplete(extractedData);
                
                if (extractionResults) {
                    extractionResults.style.display = 'block';
                }
                
                // Remove old event listeners and add new ones
                if (previewExtractedData) {
                    const newPreviewBtn = previewExtractedData.cloneNode(true);
                    previewExtractedData.parentNode.replaceChild(newPreviewBtn, previewExtractedData);
                    newPreviewBtn.addEventListener('click', () => {
                        showExtractedDataPreview(extractedData);
                    });
                }
                
                if (applyExtractedData) {
                    const newApplyBtn = applyExtractedData.cloneNode(true);
                    applyExtractedData.parentNode.replaceChild(newApplyBtn, applyExtractedData);
                    newApplyBtn.addEventListener('click', () => {
                        applyExtractedDataToForm(extractedData);
                    });
                }
                
            } catch (error) {
                console.error('Extraction error:', error);
                
                // Clear timeout
                clearTimeout(timeout);
                
                // Close loading alert
                Swal.close();
                
                // Show error alert
                SweetAlert.extractionError(error.message);
            } finally {
                // Re-enable button
                cleanExtractDataBtn.disabled = false;
                cleanExtractDataBtn.innerHTML = '<i class="fas fa-magic me-2"></i>Instant Extract & Fill';
            }
        });
        
        // Mobile-friendly file input trigger
        if (fileLabel) {
            fileLabel.addEventListener('click', (e) => {
                e.preventDefault();
                cleanResumeFileInput.click();
            });
            
            // Add touch support for mobile
            fileLabel.addEventListener('touchstart', (e) => {
                e.preventDefault();
                cleanResumeFileInput.click();
            }, { passive: false });
        }
        
        // Function to reset file input state
        window.resetFileInput = () => {
            cleanResumeFileInput.value = '';
            resumeFile = null;
            cleanExtractDataBtn.disabled = true;
            if (fileLabel) {
                fileLabel.innerHTML = '<i class="fas fa-upload me-2"></i>Choose Resume File';
                fileLabel.classList.remove('btn-success');
                fileLabel.classList.add('btn-outline-primary');
            }
            if (extractionResults) {
                extractionResults.style.display = 'none';
            }
        };
        
    } else {
        console.log('Resume file upload elements not found:', {
            resumeFileInput: !!resumeFileInput,
            extractDataBtn: !!extractDataBtn
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing resume file upload...');
    initResumeFileUpload();
    initAutoScroll();
    
    // Debug: Check if elements exist
    console.log('Debug - Elements found:', {
        resumeFileInput: !!document.getElementById('resumeFile'),
        extractDataBtn: !!document.getElementById('extractDataBtn'),
        extractionStatus: !!document.getElementById('extractionStatus'),
        extractionMessage: !!document.getElementById('extractionMessage'),
        extractionResults: !!document.getElementById('extractionResults'),
        applyExtractedData: !!document.getElementById('applyExtractedData'),
        previewExtractedData: !!document.getElementById('previewExtractedData')
    });
});

// Toast container
const toastContainer = document.createElement('div');
toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
document.body.appendChild(toastContainer);

// Loading state management
let isLoading = false;

// Error handling utility
function handleError(error, context = '') {
    console.error(`Error in ${context}:`, error);
    showToast(`An error occurred: ${error.message}`, 'danger');
}

// Loading state management
function setLoadingState(loading) {
    isLoading = loading;
    const buttons = document.querySelectorAll('button[type="submit"], .btn-primary');
    buttons.forEach(btn => {
        if (loading) {
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...';
        } else {
            btn.disabled = false;
            // Restore original button text
            if (btn.id === 'themeToggle') {
                const isDarkMode = document.body.classList.contains('dark-mode');
                btn.innerHTML = isDarkMode ? 
                    '<i class="fas fa-sun me-2"></i>Light Mode' : 
                    '<i class="fas fa-moon me-2"></i>Dark Mode';
            }
        }
    });
}

// Network status monitoring
function checkNetworkStatus() {
    if (!navigator.onLine) {
        showToast('You are offline. Some features may not work properly.', 'warning');
    }
}

window.addEventListener('online', () => {
    showToast('You are back online!', 'success');
});

window.addEventListener('offline', () => {
    showToast('You are offline. Some features may not work properly.', 'warning');
});

// Initialize network status check
checkNetworkStatus();

// Template preview images mapping
const templateImages = {
    modern: 'https://d.novoresume.com/images/doc/functional-resume-template.png',
    professional: 'https://d.novoresume.com/images/doc/professional-resume-template.png',
    creative: 'https://d.novoresume.com/images/doc/creative-resume-template.png',
    europass: 'https://d.novoresume.com/images/doc/simple-resume-template.png',
    minimalist: 'https://d.novoresume.com/images/doc/minimalist-resume-template.png',
    executive: 'https://d.novoresume.com/images/doc/executive-resume-template.png'
};

// Initialize resume data
let resumeData = {
    personalInfo: {
        name: '',
        email: '',
        phone: '',
        location: '',
        jobTitle: '',
        summary: '',
        github: '',
        linkedin: '',
        twitter: '',
        portfolio: '',
        profileImage: null
    },
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    template: 'modern'
};

// Auto-save timer
let autoSaveTimer = null;
const AUTO_SAVE_DELAY = 2000; // 2 seconds

// Function to ensure resumeData has all required arrays
function ensureDataStructure() {
    if (!resumeData.projects) resumeData.projects = [];
    if (!resumeData.certifications) resumeData.certifications = [];
    if (!resumeData.skills) resumeData.skills = [];
    if (!resumeData.experience) resumeData.experience = [];
    if (!resumeData.education) resumeData.education = [];
    if (!resumeData.personalInfo) resumeData.personalInfo = {};
    if (!resumeData.personalInfo.profileImage) resumeData.personalInfo.profileImage = null;
}

// Theme Toggle
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggleBtn.innerHTML = isDarkMode ? 
            '<i class="fas fa-sun me-2"></i>Light Mode' : 
            '<i class="fas fa-moon me-2"></i>Dark Mode';
    });
}

// Template Preview
if (templateCards) {
    templateCards.forEach(card => {
        const previewBtns = card.querySelectorAll('[data-template]');
        previewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const template = e.target.closest('[data-template]').dataset.template;
                showTemplatePreview(template);
            });
        });
    });
}

function showTemplatePreview(template) {
    if (templatePreviewImage && templatePreviewModal) {
        templatePreviewImage.src = templateImages[template];
        const modal = new bootstrap.Modal(templatePreviewModal);
        modal.show();
        
        // Update use template button
        if (useTemplateBtn) {
            useTemplateBtn.onclick = () => {
                resumeData.template = template;
                saveResumeData();
                modal.hide();
                window.location.href = 'builder.html';
            };
        }
    }
}

// Save resume data
function saveResumeData() {
    try {
        // Update save status
        updateSaveStatus('saving');
        
        // Ensure data structure exists
        ensureDataStructure();
        
        // Save to localStorage
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        
        // Only show success alert if not auto-saving
        if (!window.isAutoSaving) {
            SweetAlert.resumeSaved();
        }
        
        console.log('Resume data saved:', resumeData);
        
        // Update save status
        updateSaveStatus('saved');
        
        // Track save event
        if (window.resumeAnalytics) {
            window.resumeAnalytics.trackEvent('resume_saved', {
                hasExperience: resumeData.experience.length,
                hasEducation: resumeData.education.length,
                skillsCount: resumeData.skills.length,
                template: resumeData.template
            });
        }
    } catch (error) {
        console.error('Error saving resume:', error);
        SweetAlert.error('Save Error', 'Failed to save resume data. Please try again.');
        updateSaveStatus('error');
    }
}

// Load saved resume data
function loadSavedResume() {
    try {
        updateSaveStatus('loading');
        const savedData = localStorage.getItem('resumeData');
        if (savedData) {
            resumeData = JSON.parse(savedData);
            // Ensure all expected arrays exist
            ensureDataStructure();
            updateFormWithSavedData();
            updatePreview();
            console.log('Resume data loaded successfully:', resumeData);
        } else {
            console.log('No saved resume data found, using default structure');
            ensureDataStructure();
        }
        updateSaveStatus('saved');
    } catch (error) {
        console.error('Error loading saved resume:', error);
        showToast('Error loading saved resume. Starting fresh.', 'warning');
        ensureDataStructure();
        updateSaveStatus('error');
    }
}

// Update form with saved data
function updateFormWithSavedData() {
    if (!resumeForm) return;
    
    console.log('Updating form with saved data:', resumeData);
    
    // Update personal info
    Object.keys(resumeData.personalInfo).forEach(key => {
        const input = resumeForm.querySelector(`#${key}`);
        if (input && key !== 'profileImage') { // Skip file input elements
            input.value = resumeData.personalInfo[key];
            console.log(`Set ${key} to:`, resumeData.personalInfo[key]);
        }
    });
    
    // Update experience
    const experienceContainer = document.getElementById('experienceContainer');
    if (experienceContainer) {
        experienceContainer.innerHTML = '';
        resumeData.experience.forEach((exp, index) => {
            console.log(`Adding experience ${index}:`, exp);
            addExperience(exp);
        });
    }
    
    // Update education
    const educationContainer = document.getElementById('educationContainer');
    if (educationContainer) {
        educationContainer.innerHTML = '';
        resumeData.education.forEach((edu, index) => {
            console.log(`Adding education ${index}:`, edu);
            addEducation(edu);
        });
    }
    
    // Update certifications
    const certificationsContainer = document.getElementById('certificationsContainer');
    if (certificationsContainer) {
        certificationsContainer.innerHTML = '';
        resumeData.certifications.forEach((cert, index) => {
            console.log(`Adding certification ${index}:`, cert);
            addCertification(cert);
        });
    }
    
    // Update skills
    updateSkillsDisplay();
    
    // Update projects
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer) {
        projectsContainer.innerHTML = '';
        resumeData.projects.forEach((proj, index) => {
            console.log(`Adding project ${index}:`, proj);
            addProject(proj);
        });
    }
    
    // Update profile image
    updateProfileImageDisplay();
    
    // Update template selection
    updateTemplateSelection();
    
    console.log('Form update completed');
}

// Update profile image display
function updateProfileImageDisplay() {
    const imagePreview = document.getElementById('imagePreview');
    const removeImageBtn = document.getElementById('removeImageBtn');
    const uploadImageBtn = document.getElementById('uploadImageBtn');
    
    if (imagePreview && resumeData.personalInfo.profileImage) {
        imagePreview.innerHTML = `<img src="${resumeData.personalInfo.profileImage}" alt="Profile Image">`;
        if (removeImageBtn) removeImageBtn.style.display = 'inline-block';
        if (uploadImageBtn) uploadImageBtn.textContent = 'Change Image';
    } else if (imagePreview) {
        imagePreview.innerHTML = '<div class="placeholder">No image uploaded</div>';
        if (removeImageBtn) removeImageBtn.style.display = 'none';
        if (uploadImageBtn) uploadImageBtn.textContent = 'Upload Image';
    }
}

// Update template selection
function updateTemplateSelection() {
    const templateButtons = document.querySelectorAll('[data-template]');
    templateButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.template === resumeData.template) {
            btn.classList.add('active');
        }
    });
}

// Update the generatePDF function
async function generatePDF() {
    try {
        // Display processing notification to the user
        showToast('Starting PDF generation...', 'info');
        
        // Check if jsPDF is available using multiple methods
        let PDF;
        
        // Try different ways to access jsPDF constructor
        if (typeof window.jspdf !== 'undefined' && typeof window.jspdf.jsPDF !== 'undefined') {
            // UMD module loaded via CDN
            PDF = window.jspdf.jsPDF;
        } else if (typeof window.jsPDF !== 'undefined') {
            // Global variable
            PDF = window.jsPDF;
        } else if (typeof jsPDF !== 'undefined') {
            // Direct access
            PDF = jsPDF;
        } else {
            console.error('jsPDF library not found. Attempting to reload the library...');
            
            // Try to use direct import as a last resort
            showToast('Trying alternative PDF generation method...', 'info');
            
            try {
                // Try direct script import from unpkg (as a backup)
                await new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = 'https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js';
                    script.onload = resolve;
                    script.onerror = reject;
                    document.head.appendChild(script);
                });
                
                if (typeof window.jspdf !== 'undefined' && typeof window.jspdf.jsPDF !== 'undefined') {
                    PDF = window.jspdf.jsPDF;
                } else if (typeof window.jsPDF !== 'undefined') {
                    PDF = window.jsPDF;
                } else {
                    throw new Error('Failed to load jsPDF library');
                }
            } catch (err) {
                throw new Error('Unable to load PDF generation library: ' + err.message);
            }
        }
        
        // Notify user that library is loaded
        showToast('PDF library loaded, generating document...', 'info');
        
        const resumePreview = document.getElementById('resumePreview');
        
        if (!resumePreview) {
            throw new Error('Resume preview element not found in the document');
        }
        
        // Create a new PDF with the correct constructor
        const pdf = new PDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true
        });
        
        // Set basic properties (using only well-supported methods)
        pdf.setFontSize(12);
        if (typeof pdf.setDisplayMode === 'function') {
            pdf.setDisplayMode('fullwidth', 'continuous');
        }
        
        // Define common measurements
        const pageWidth = pdf.internal.pageSize.getWidth();
        const margin = 15;
        const contentWidth = pageWidth - (margin * 2);
        
        // Set default colors based on template
        let primaryColor = [44, 62, 80]; // Dark blue-gray
        let secondaryColor = [52, 152, 219]; // Bright blue
        let textColor = [0, 0, 0]; // Black
        
        // Adjust colors based on template
        if (resumeData.template === 'professional') {
            primaryColor = [52, 73, 94]; // Darker blue
            secondaryColor = [44, 62, 80]; // Dark blue-gray
        } else if (resumeData.template === 'creative') {
            primaryColor = [106, 17, 203]; // Purple
            secondaryColor = [37, 117, 252]; // Blue
        } else if (resumeData.template === 'europass') {
            primaryColor = [44, 62, 80]; // Dark blue-gray
            secondaryColor = [52, 152, 219]; // Bright blue
        } else if (resumeData.template === 'minimalist') {
            primaryColor = [51, 51, 51]; // Dark gray
            secondaryColor = [102, 102, 102]; // Medium gray
        } else if (resumeData.template === 'executive') {
            primaryColor = [26, 32, 44]; // Very dark blue
            secondaryColor = [52, 73, 94]; // Dark blue
        } else if (resumeData.template === 'classic') {
            primaryColor = [0, 0, 0]; // Black
            secondaryColor = [51, 51, 51]; // Dark gray
        } else if (resumeData.template === 'elegant') {
            primaryColor = [52, 73, 94]; // Dark blue-gray
            secondaryColor = [149, 165, 166]; // Light gray
        }
        
        // Extract data
        const { name, jobTitle, email, phone, location, summary, github, linkedin, twitter, portfolio } = resumeData.personalInfo;
        
        let yPos = margin;
        
        // Different header based on template
        if (resumeData.template === 'modern') {
            // Modern header (clean, minimal)
            pdf.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.rect(0, 0, pageWidth, 40, 'F');
            
            pdf.setTextColor(255, 255, 255);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(24);
            pdf.text(name || 'Your Name', margin, 25);
            
            pdf.setFontSize(14);
            pdf.setFont('helvetica', 'normal');
            pdf.text(jobTitle || 'Your Job Title', margin, 35);
            
            // Contact info and social links in row
            yPos = 50;
            pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
            pdf.setFontSize(10);
            
            let contactX = margin;
            
            if (email) {
                pdf.text(`Email: ${email}`, contactX, yPos);
                pdf.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
                pdf.textWithLink(`Email: ${email}`, contactX, yPos, {
                    url: `mailto:${email}`
                });
                pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                contactX += 50;
            }
            
            if (phone) {
                pdf.text(`Phone: ${phone}`, contactX, yPos);
                contactX += 45;
            }
            
            if (location) {
                pdf.text(`Location: ${location}`, contactX, yPos);
            }
            
            // Social links row
            yPos += 10;
            contactX = margin;
            
            if (linkedin) {
                pdf.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
                pdf.textWithLink('LinkedIn', contactX, yPos, {
                    url: linkedin
                });
                pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                contactX += 20;
            }
            
            if (github) {
                pdf.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
                pdf.textWithLink('GitHub', contactX, yPos, {
                    url: github
                });
                pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                contactX += 20;
            }
            
            if (portfolio) {
                pdf.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
                pdf.textWithLink('Portfolio', contactX, yPos, {
                    url: portfolio
                });
                pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                contactX += 20;
            }
            
            // Add gray line
            yPos += 5;
            pdf.setDrawColor(220, 220, 220);
            pdf.setLineWidth(0.5);
            pdf.line(margin, yPos, pageWidth - margin, yPos);
            
        } else if (resumeData.template === 'professional') {
            // Professional header (centered, traditional)
            pdf.setFont('times', 'bold');
            pdf.setFontSize(24);
            pdf.text(name || 'Your Name', pageWidth / 2, 25, { align: 'center' });
            
            pdf.setFontSize(14);
            pdf.setFont('times', 'italic');
            pdf.text(jobTitle || 'Your Job Title', pageWidth / 2, 35, { align: 'center' });
            
            // Contact info centered
            yPos = 45;
            let contactInfoText = [];
            
            if (email) contactInfoText.push(email);
            if (phone) contactInfoText.push(phone);
            if (location) contactInfoText.push(location);
            
            pdf.setFontSize(10);
            pdf.setFont('times', 'normal');
            pdf.text(contactInfoText.join(' | '), pageWidth / 2, yPos, { align: 'center' });
            
            // Social links
            yPos += 10;
            let socialLinks = [];
            
            if (linkedin) socialLinks.push('LinkedIn');
            if (github) socialLinks.push('GitHub');
            if (portfolio) socialLinks.push('Portfolio');
            
            if (socialLinks.length > 0) {
                pdf.setFontSize(10);
                pdf.text(socialLinks.join(' | '), pageWidth / 2, yPos, { align: 'center' });
                
                // Add links separately for clickability
                let linkX = pageWidth / 2 - (pdf.getTextWidth(socialLinks.join(' | ')) / 2);
                
                for (let i = 0; i < socialLinks.length; i++) {
                    const link = socialLinks[i];
                    let url = '';
                    
                    if (link === 'LinkedIn') url = linkedin;
                    if (link === 'GitHub') url = github;
                    if (link === 'Portfolio') url = portfolio;
                    
                    pdf.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
                    pdf.textWithLink(link, linkX, yPos, { url });
                    pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                    
                    linkX += pdf.getTextWidth(link);
                    
                    if (i < socialLinks.length - 1) {
                        pdf.text(' | ', linkX, yPos);
                        linkX += pdf.getTextWidth(' | ');
                    }
                }
            }
            
            // Add double line
            yPos += 5;
            pdf.setDrawColor(0, 0, 0);
            pdf.setLineWidth(0.7);
            pdf.line(margin, yPos, pageWidth - margin, yPos);
            yPos += 1.5;
            pdf.setLineWidth(0.3);
            pdf.line(margin, yPos, pageWidth - margin, yPos);
            
        } else if (resumeData.template === 'creative') {
            // Creative header (gradient bar)
            // Simulate gradient with multiple rectangles
            for (let i = 0; i < 40; i++) {
                const r = primaryColor[0] + ((secondaryColor[0] - primaryColor[0]) * (i / 40));
                const g = primaryColor[1] + ((secondaryColor[1] - primaryColor[1]) * (i / 40));
                const b = primaryColor[2] + ((secondaryColor[2] - primaryColor[2]) * (i / 40));
                
                pdf.setFillColor(r, g, b);
                pdf.rect(0, i, pageWidth, 1, 'F');
            }
            
            pdf.setTextColor(255, 255, 255);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(22);
            pdf.text(name || 'Your Name', margin, 25);
            
            pdf.setFontSize(12);
            pdf.setFont('helvetica', 'normal');
            pdf.text(jobTitle || 'Your Job Title', margin, 35);
            
            // Contact info in white on the gradient
            let contactY = 15;
            let contactX = pageWidth - margin - 50;
            pdf.setFontSize(8);
            
            if (email) {
                pdf.text(email, contactX, contactY);
                contactY += 5;
            }
            
            if (phone) {
                pdf.text(phone, contactX, contactY);
                contactY += 5;
            }
            
            if (location) {
                pdf.text(location, contactX, contactY);
            }
            
            // Reset position for next sections
            yPos = 50;
            pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
            
            // Add accent line
            pdf.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.setLineWidth(2);
            pdf.line(margin, yPos - 5, 60, yPos - 5);
        } else if (resumeData.template === 'europass') {
            // Europass header (left-aligned, formal)
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(20);
            pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.text(name || 'Your Name', margin, 25);
            
            pdf.setFontSize(12);
            pdf.setFont('helvetica', 'normal');
            pdf.text(jobTitle || 'Your Job Title', margin, 35);
            
            // Contact info in a structured format
            yPos = 45;
            pdf.setFontSize(10);
            pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
            
            if (email) {
                pdf.text(`Email: ${email}`, margin, yPos);
                yPos += 5;
            }
            
            if (phone) {
                pdf.text(`Phone: ${phone}`, margin, yPos);
                yPos += 5;
            }
            
            if (location) {
                pdf.text(`Location: ${location}`, margin, yPos);
                yPos += 5;
            }
            
            // Add border line
            yPos += 5;
            pdf.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.setLineWidth(1);
            pdf.line(margin, yPos, pageWidth - margin, yPos);
            
        } else if (resumeData.template === 'minimalist') {
            // Minimalist header (clean, centered)
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(24);
            pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
            pdf.text(name || 'Your Name', pageWidth / 2, 25, { align: 'center' });
            
            pdf.setFontSize(14);
            pdf.text(jobTitle || 'Your Job Title', pageWidth / 2, 35, { align: 'center' });
            
            // Contact info centered
            yPos = 45;
            let contactInfo = [];
            if (email) contactInfo.push(email);
            if (phone) contactInfo.push(phone);
            if (location) contactInfo.push(location);
            
            pdf.setFontSize(10);
            pdf.text(contactInfo.join(' • '), pageWidth / 2, yPos, { align: 'center' });
            
            // Add subtle line
            yPos += 8;
            pdf.setDrawColor(200, 200, 200);
            pdf.setLineWidth(0.5);
            pdf.line(margin, yPos, pageWidth - margin, yPos);
            
        } else if (resumeData.template === 'executive') {
            // Executive header (bold, authoritative)
            pdf.setFont('times', 'bold');
            pdf.setFontSize(28);
            pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.text(name || 'Your Name', pageWidth / 2, 25, { align: 'center' });
            
            pdf.setFontSize(16);
            pdf.setFont('times', 'italic');
            pdf.text(jobTitle || 'Your Job Title', pageWidth / 2, 35, { align: 'center' });
            
            // Contact info in two rows
            yPos = 45;
            pdf.setFontSize(10);
            pdf.setFont('times', 'normal');
            pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
            
            let contactRow1 = [];
            let contactRow2 = [];
            
            if (email) contactRow1.push(email);
            if (phone) contactRow1.push(phone);
            if (location) contactRow2.push(location);
            
            if (contactRow1.length > 0) {
                pdf.text(contactRow1.join(' | '), pageWidth / 2, yPos, { align: 'center' });
                yPos += 6;
            }
            
            if (contactRow2.length > 0) {
                pdf.text(contactRow2.join(' | '), pageWidth / 2, yPos, { align: 'center' });
                yPos += 6;
            }
            
            // Add double border
            yPos += 5;
            pdf.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.setLineWidth(1.5);
            pdf.line(margin, yPos, pageWidth - margin, yPos);
            yPos += 2;
            pdf.setLineWidth(0.5);
            pdf.line(margin, yPos, pageWidth - margin, yPos);
            
        } else if (resumeData.template === 'classic') {
            // Classic header (traditional, formal)
            pdf.setFont('times', 'bold');
            pdf.setFontSize(22);
            pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
            pdf.text(name || 'Your Name', pageWidth / 2, 25, { align: 'center' });
            
            pdf.setFontSize(14);
            pdf.setFont('times', 'normal');
            pdf.text(jobTitle || 'Your Job Title', pageWidth / 2, 35, { align: 'center' });
            
            // Contact info
            yPos = 45;
            pdf.setFontSize(10);
            
            if (email) {
                pdf.text(`Email: ${email}`, pageWidth / 2, yPos, { align: 'center' });
                yPos += 5;
            }
            
            if (phone) {
                pdf.text(`Phone: ${phone}`, pageWidth / 2, yPos, { align: 'center' });
                yPos += 5;
            }
            
            if (location) {
                pdf.text(`Address: ${location}`, pageWidth / 2, yPos, { align: 'center' });
                yPos += 5;
            }
            
            // Add underline
            yPos += 3;
            pdf.setDrawColor(textColor[0], textColor[1], textColor[2]);
            pdf.setLineWidth(1);
            pdf.line(margin, yPos, pageWidth - margin, yPos);
            
        } else if (resumeData.template === 'elegant') {
            // Elegant header (refined, sophisticated)
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(26);
            pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.text(name || 'Your Name', pageWidth / 2, 25, { align: 'center' });
            
            pdf.setFontSize(14);
            pdf.setFont('helvetica', 'italic');
            pdf.text(jobTitle || 'Your Job Title', pageWidth / 2, 35, { align: 'center' });
            
            // Contact info in elegant format
            yPos = 45;
            pdf.setFontSize(10);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
            
            let contactInfo = [];
            if (email) contactInfo.push(email);
            if (phone) contactInfo.push(phone);
            if (location) contactInfo.push(location);
            
            pdf.text(contactInfo.join('  •  '), pageWidth / 2, yPos, { align: 'center' });
            
            // Add elegant line
            yPos += 8;
            pdf.setDrawColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
            pdf.setLineWidth(0.8);
            pdf.line(margin, yPos, pageWidth - margin, yPos);
        }
        
        // Add summary
        if (summary) {
            yPos += 10;
            
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(14);
            pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            
            // Template-specific summary titles
            let summaryTitle = 'Professional Summary';
            if (resumeData.template === 'europass') {
                summaryTitle = 'Personal Statement';
            } else if (resumeData.template === 'minimalist') {
                summaryTitle = 'Summary';
            } else if (resumeData.template === 'executive') {
                summaryTitle = 'Executive Summary';
            } else if (resumeData.template === 'classic') {
                summaryTitle = 'Objective';
            } else if (resumeData.template === 'elegant') {
                summaryTitle = 'Professional Profile';
            }
            
            pdf.text(summaryTitle, margin, yPos);
            yPos += 7;
            
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
            
            // Handle wrapping of summary text
            const summaryLines = pdf.splitTextToSize(summary, contentWidth);
            pdf.text(summaryLines, margin, yPos);
            yPos += (summaryLines.length * 5) + 7;
        }
        
        // Add experience section
        if (resumeData.experience.length > 0) {
            // Check if we need to add a new page
            if (yPos > 250) {
                pdf.addPage();
                yPos = margin;
            }
            
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(14);
            pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.text('Professional Experience', margin, yPos);
            yPos += 7;
            
            resumeData.experience.forEach(exp => {
                if (yPos > 250) {
                    pdf.addPage();
                    yPos = margin;
                }
                
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(12);
                pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                pdf.text(exp.position || 'Position', margin, yPos);
                
                // Company and date on the same line, aligned right
                pdf.setFont('helvetica', 'normal');
                pdf.setFontSize(10);
                const dateText = `${exp.startdate || 'Start Date'} - ${exp.enddate || 'End Date'}`;
                pdf.text(dateText, pageWidth - margin, yPos, { align: 'right' });
                
                yPos += 5;
                
                pdf.setFont('helvetica', 'italic');
                pdf.text(exp.companyname || 'Company', margin, yPos);
                yPos += 7;
                
                if (exp.description) {
                    pdf.setFont('helvetica', 'normal');
                    
                    // Process description - split by new lines or periods for bullet points
                    const descriptionLines = exp.description.split(/\n|(?<=\.)\s+/g)
                        .filter(line => line.trim().length > 0);
                    
                    if (descriptionLines.length > 0) {
                        descriptionLines.forEach(line => {
                            // Check if we need to add a new page
                            if (yPos > 270) {
                                pdf.addPage();
                                yPos = margin;
                            }
                            
                            // Format each line as a bullet point
                            const bulletPoint = `• ${line.trim()}`;
                            const wrappedText = pdf.splitTextToSize(bulletPoint, contentWidth - 6);
                            
                            pdf.text(wrappedText, margin, yPos);
                            yPos += (wrappedText.length * 5); // Adjust spacing based on wrapped text
                        });
                        
                        yPos += 3; // Add space after bullet points
                    } else {
                        // If no clear separation, just add the whole description with a bullet
                        const wrappedText = pdf.splitTextToSize(`• ${exp.description}`, contentWidth - 6);
                        pdf.text(wrappedText, margin, yPos);
                        yPos += (wrappedText.length * 5) + 3;
                    }
                }
                
                // Add a small divider between experiences
                pdf.setDrawColor(220, 220, 220);
                pdf.setLineWidth(0.3);
                pdf.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
                
                yPos += 7; // Extra spacing between experience entries
            });
        }
        
        // Add projects section
        if (resumeData.projects.length > 0) {
            // Check if we need to add a new page
            if (yPos > 250) {
            pdf.addPage();
                yPos = margin;
            }
            
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(14);
            pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.text('Projects', margin, yPos);
            yPos += 7;
            
            resumeData.projects.forEach(project => {
                if (yPos > 250) {
                    pdf.addPage();
                    yPos = margin;
                }
                
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(12);
                pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                pdf.text(project.title || 'Project Title', margin, yPos);
                yPos += 5;
                
                if (project.link) {
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(10);
                    pdf.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
                    pdf.textWithLink(`• ${project.link}`, margin, yPos, {
                        url: project.link
                    });
                    pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                    yPos += 5;
                }
                
                if (project.description) {
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(10);
                    
                    // Split description into bullet points
                    const descriptionLines = project.description.split(/\n|(?<=\.)\s+/g)
                        .filter(line => line.trim().length > 0);
                    
                    if (descriptionLines.length > 0) {
                        descriptionLines.forEach(line => {
                            if (yPos > 270) {
                                pdf.addPage();
                                yPos = margin;
                            }
                            
                            const bulletPoint = `• ${line.trim()}`;
                            const wrappedText = pdf.splitTextToSize(bulletPoint, contentWidth - 6);
                            pdf.text(wrappedText, margin, yPos);
                            yPos += (wrappedText.length * 5);
                        });
                    } else {
                        const wrappedText = pdf.splitTextToSize(`• ${project.description}`, contentWidth - 6);
                        pdf.text(wrappedText, margin, yPos);
                        yPos += (wrappedText.length * 5);
                    }
                    
                    yPos += 2;
                }
                
                yPos += 5; // Extra spacing between project entries
            });
        }
        
        // Add skills section
        if (resumeData.skills.length > 0) {
            // Check if we need to add a new page
            if (yPos > 250) {
                pdf.addPage();
                yPos = margin;
            }
            
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(14);
            pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            
            // Template-specific skills titles
            let skillsTitle = 'Core Skills';
            if (resumeData.template === 'europass') {
                skillsTitle = 'Skills and Competences';
            } else if (resumeData.template === 'minimalist') {
                skillsTitle = 'Skills';
            } else if (resumeData.template === 'executive') {
                skillsTitle = 'Core Competencies';
            } else if (resumeData.template === 'classic') {
                skillsTitle = 'Skills';
            } else if (resumeData.template === 'elegant') {
                skillsTitle = 'Areas of Expertise';
            }
            
            pdf.text(skillsTitle, margin, yPos);
            yPos += 10;
            
            // Calculate how many skills to put in each column
            const skills = resumeData.skills;
            const skillsPerColumn = Math.ceil(skills.length / 3); // Up to 3 columns
            const columnsNeeded = Math.min(3, Math.ceil(skills.length / skillsPerColumn));
            const columnWidth = (contentWidth) / columnsNeeded;
            
            // Render skills in columns
            let maxY = yPos;
            
            for (let col = 0; col < columnsNeeded; col++) {
                let colY = yPos;
                const startIdx = col * skillsPerColumn;
                const endIdx = Math.min(startIdx + skillsPerColumn, skills.length);
                
                for (let i = startIdx; i < endIdx; i++) {
                    if (colY > 270) {
                        pdf.addPage();
                        colY = margin;
                    }
                    
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(10);
                    pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                    
                    const skillText = `• ${skills[i]}`;
                    pdf.text(skillText, margin + (col * columnWidth), colY);
                    colY += 5;
                }
                
                maxY = Math.max(maxY, colY);
            }
            
            yPos = maxY + 5; // Set yPos to the bottom of the longest column plus some padding
        }
        
        // Add certifications section
        if (resumeData.certifications && resumeData.certifications.length > 0) {
            // Check if we need to add a new page
            if (yPos > 250) {
                pdf.addPage();
                yPos = margin;
            }
            
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(14);
            pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.text('Courses & Certifications', margin, yPos);
            yPos += 7;
            
            resumeData.certifications.forEach(cert => {
                if (yPos > 250) {
                    pdf.addPage();
                    yPos = margin;
                }
                
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(12);
                pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                pdf.text(cert.title || 'Certification Title', margin, yPos);
                
                // Date aligned right
                if (cert.date) {
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(10);
                    pdf.text(cert.date, pageWidth - margin, yPos, { align: 'right' });
                }
                
                yPos += 5;
                
                pdf.setFont('helvetica', 'italic');
                pdf.text(cert.issuer || 'Issuing Organization', margin, yPos);
                yPos += 5;
                
                // Add bullet points for credential details
                pdf.setFont('helvetica', 'normal');
                pdf.setFontSize(10);
                
                if (cert.credentialId) {
                    pdf.text(`• Credential ID: ${cert.credentialId}`, margin, yPos);
                    yPos += 5;
                }
                
                if (cert.url) {
                    pdf.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
                    pdf.textWithLink(`• View Certificate`, margin, yPos, {
                        url: cert.url
                    });
                    pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                    yPos += 5;
                }
                
                yPos += 6; // Extra spacing between certification entries
            });
        }
        
        // Add education section
        if (resumeData.education.length > 0) {
            // Check if we need to add a new page
            if (yPos > 250) {
                pdf.addPage();
                yPos = margin;
            }
            
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(14);
            pdf.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            pdf.text('Education', margin, yPos);
            yPos += 7;
            
            resumeData.education.forEach(edu => {
                if (yPos > 250) {
                    pdf.addPage();
                    yPos = margin;
                }
                
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(12);
                pdf.setTextColor(textColor[0], textColor[1], textColor[2]);
                pdf.text(edu.degree || 'Degree', margin, yPos);
                
                // Date range aligned right
                pdf.setFont('helvetica', 'normal');
                pdf.setFontSize(10);
                const dateText = `${edu.startdate || 'Start Date'} - ${edu.enddate || 'End Date'}`;
                pdf.text(dateText, pageWidth - margin, yPos, { align: 'right' });
                
                yPos += 5;
                
                pdf.setFont('helvetica', 'italic');
                pdf.text(edu.institution || 'Institution', margin, yPos);
                yPos += 6;
                
                // Add description with bullet points if available
                if (edu.description) {
                    pdf.setFont('helvetica', 'normal');
                    
                    // Process description - split by new lines or periods for bullet points
                    const descriptionLines = edu.description.split(/\n|(?<=\.)\s+/g)
                        .filter(line => line.trim().length > 0);
                    
                    if (descriptionLines.length > 0) {
                        descriptionLines.forEach(line => {
                            // Check if we need to add a new page
                            if (yPos > 270) {
                                pdf.addPage();
                                yPos = margin;
                            }
                            
                            // Format each line as a bullet point
                            const bulletPoint = `• ${line.trim()}`;
                            const wrappedText = pdf.splitTextToSize(bulletPoint, contentWidth - 6);
                            
                            pdf.text(wrappedText, margin, yPos);
                            yPos += (wrappedText.length * 5); // Adjust spacing based on wrapped text
                        });
                    } else {
                        const bulletPoint = `• ${edu.description.trim()}`;
                        const wrappedText = pdf.splitTextToSize(bulletPoint, contentWidth - 6);
                        pdf.text(wrappedText, margin, yPos);
                        yPos += (wrappedText.length * 5);
                    }
                    
                    yPos += 2; // Add space after description
                }
                
                yPos += 6; // Extra spacing between education entries
            });
        }
        
        // Add page numbers if multiple pages
        const totalPages = pdf.internal.getNumberOfPages();
        
        if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                
                // Add footer line
                pdf.setDrawColor(220, 220, 220);
                pdf.setLineWidth(0.5);
                pdf.line(margin, pdf.internal.pageSize.getHeight() - 15, pageWidth - margin, pdf.internal.pageSize.getHeight() - 15);
                
                // Add page numbers
                pdf.setFontSize(8);
                pdf.setTextColor(100, 100, 100);
                pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pdf.internal.pageSize.getHeight() - 10, { align: 'right' });
                
                // Add resume name footer
                const shortName = (name || 'Resume').substring(0, 20);
                pdf.text(`${shortName} - Professional Resume`, margin, pdf.internal.pageSize.getHeight() - 10);
            }
        }
        
        // Save PDF with name from resume
        const fileName = `${name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`;
        pdf.save(fileName);
        
        showToast('PDF generated successfully!');
    } catch (error) {
        console.error('PDF generation error:', error);
        // Show detailed error message to the user
        showToast(`Error generating PDF: ${error.message}. Trying alternative method...`, 'warning');
        
        // Try the fallback method
        try {
            await generatePDFWithHtml2Canvas();
        } catch (fallbackError) {
            console.error('Fallback PDF generation failed:', fallbackError);
            showToast(`Error: ${fallbackError.message}. Please try reloading the page.`, 'danger');
        }
    }
}

// Alternative PDF generation method using html2canvas
async function generatePDFWithHtml2Canvas() {
    // Check if html2canvas is available
    if (typeof html2canvas === 'undefined') {
        throw new Error('html2canvas library not available');
    }
    
    // Check if jsPDF is available
    let PDF;
    if (typeof window.jspdf !== 'undefined' && typeof window.jspdf.jsPDF !== 'undefined') {
        PDF = window.jspdf.jsPDF;
    } else if (typeof window.jsPDF !== 'undefined') {
        PDF = window.jsPDF;
    } else if (typeof jsPDF !== 'undefined') {
        PDF = jsPDF;
    } else {
        throw new Error('jsPDF library not available');
    }
    
    showToast('Generating PDF using alternative method...', 'info');
    
    const resumePreview = document.getElementById('resumePreview');
    if (!resumePreview) {
        throw new Error('Resume preview element not found');
    }
    
    // Make sure all fonts and styles are loaded
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Create a clone of the resume preview with proper styling
    const resumeContainer = document.createElement('div');
    resumeContainer.className = 'resume-container-pdf';
    resumeContainer.innerHTML = resumePreview.innerHTML;
    resumeContainer.style.width = '210mm'; // A4 width
    resumeContainer.style.padding = '15mm';
    resumeContainer.style.backgroundColor = 'white';
    resumeContainer.style.position = 'absolute';
    resumeContainer.style.left = '-9999px';
    document.body.appendChild(resumeContainer);
    
    try {
        // Convert to canvas
        const canvas = await html2canvas(resumeContainer, {
            scale: 2, // Higher quality
            useCORS: true,
            logging: false,
            allowTaint: true
        });
        
        // Get name for the PDF filename
        const { name } = resumeData.personalInfo;
        const fileName = `${name?.toLowerCase().replace(/\s+/g, '_') || 'resume'}_pdf.pdf`;
        
        // Create PDF
        const pdf = new PDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        // Add image to PDF (adjust dimensions to fit A4)
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        let heightLeft = imgHeight;
        let position = 0;
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= 297; // A4 height in mm
        
        // Add pages if needed
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
            heightLeft -= 297;
        }
        
        // Save the PDF
        pdf.save(fileName);
        
        showToast('PDF generated successfully!', 'success');
    } finally {
        // Clean up
        if (resumeContainer && resumeContainer.parentNode) {
            resumeContainer.parentNode.removeChild(resumeContainer);
        }
    }
}

// Initialize lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize everything when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing resume builder...');
    
    // Load saved data first
    loadSavedResume();
    
    // Initialize components after data is loaded
    initResumePreview();
    setupFormListeners();
    initLazyLoading();
    
    // Auto-save functionality
    let autoSaveTimer;
    const autoSaveDelay = 2000; // 2 seconds
    
    if (resumeForm) {
        resumeForm.addEventListener('input', () => {
            clearTimeout(autoSaveTimer);
            autoSaveTimer = setTimeout(() => {
                window.isAutoSaving = true;
                saveResumeData();
                window.isAutoSaving = false;
            }, autoSaveDelay);
        });
    }
    
    console.log('Resume builder initialization completed');
});

// Clear saved resume data
function clearSavedResume() {
    try {
        localStorage.removeItem('resumeData');
        resumeData = {
            personalInfo: {
                name: '',
                jobTitle: '',
                email: '',
                phone: '',
                location: '',
                summary: '',
                github: '',
                linkedin: '',
                twitter: '',
                portfolio: '',
                profileImage: ''
            },
            experience: [],
            education: [],
            skills: [],
            projects: [],
            certifications: [],
            template: 'modern'
        };
        ensureDataStructure();
        updateFormWithSavedData();
        updatePreview();
        showToast('Resume data cleared successfully!', 'success');
        console.log('Resume data cleared');
    } catch (error) {
        console.error('Error clearing resume data:', error);
        showToast('Error clearing resume data.', 'danger');
    }
}

// Update save status indicator
function updateSaveStatus(status) {
    const saveStatus = document.getElementById('saveStatus');
    if (!saveStatus) return;
    
    switch (status) {
        case 'saving':
            saveStatus.innerHTML = '<i class="fas fa-spinner fa-spin text-warning"></i> Saving...';
            break;
        case 'saved':
            saveStatus.innerHTML = '<i class="fas fa-circle text-success"></i> Auto-save enabled';
            break;
        case 'error':
            saveStatus.innerHTML = '<i class="fas fa-exclamation-circle text-danger"></i> Save error';
            break;
        case 'loading':
            saveStatus.innerHTML = '<i class="fas fa-spinner fa-spin text-info"></i> Loading...';
            break;
        default:
            saveStatus.innerHTML = '<i class="fas fa-circle text-success"></i> Auto-save enabled';
    }
}

// Export resume data
function exportResumeData() {
    try {
        const dataStr = JSON.stringify(resumeData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `resume-data-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        showToast('Resume data exported successfully!', 'success');
    } catch (error) {
        console.error('Error exporting resume data:', error);
        showToast('Error exporting resume data.', 'danger');
    }
}

// Import resume data
function importResumeData(file) {
    try {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                resumeData = importedData;
                ensureDataStructure();
                updateFormWithSavedData();
                updatePreview();
                saveResumeData();
                showToast('Resume data imported successfully!', 'success');
            } catch (error) {
                showToast('Invalid resume data file.', 'danger');
            }
        };
        reader.readAsText(file);
    } catch (error) {
        console.error('Error importing resume data:', error);
        showToast('Error importing resume data.', 'danger');
    }
}

// Initialize resume preview
function initResumePreview() {
    // Initial update
    updatePreview();
    
    // Listen for changes in all form inputs
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('input', updatePreview);
        input.addEventListener('change', updatePreview);
    });
    
    // Listen for changes in skill tags and dynamic elements
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-skill') || 
            e.target.classList.contains('remove-resp') ||
            e.target.closest('.remove-item')) {
            updatePreview();
        }
    });
}

// Setup form listeners
function setupFormListeners() {
    if (resumeForm) {
        // Personal Information
        const personalInfoInputs = resumeForm.querySelectorAll('input, textarea');
        personalInfoInputs.forEach(input => {
            // Add input event listener
            input.addEventListener('input', (e) => {
                resumeData.personalInfo[e.target.id] = e.target.value;
                updatePreview();
                saveResumeData();
                updateFormProgress();
            });
        });

        // Experience
        const addExperienceBtn = document.getElementById('addExperience');
        if (addExperienceBtn) {
            addExperienceBtn.addEventListener('click', () => {
                addExperience();
                updateFormProgress();
            });
        }

        // Education
        const addEducationBtn = document.getElementById('addEducation');
        if (addEducationBtn) {
            addEducationBtn.addEventListener('click', () => {
                addEducation();
                updateFormProgress();
            });
        }
        
        // Certifications
        const addCertificationBtn = document.getElementById('addCertification');
        if (addCertificationBtn) {
            addCertificationBtn.addEventListener('click', () => {
                addCertification();
                updateFormProgress();
            });
        }

        // Skills
        const skillsInput = document.getElementById('skillInput');
        const addSkillBtn = document.getElementById('addSkill');
        if (skillsInput && addSkillBtn) {
            addSkillBtn.addEventListener('click', () => {
                const skill = skillsInput.value.trim();
                if (skill && !resumeData.skills.includes(skill)) {
                    resumeData.skills.push(skill);
                    updateSkillsDisplay();
                    updatePreview();
                    skillsInput.value = '';
                    saveResumeData();
                    updateFormProgress();
                }
            });

            skillsInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    addSkillBtn.click();
                }
            });
        }

        // Projects
        const addProjectBtn = document.getElementById('addProject');
        if (addProjectBtn) {
            addProjectBtn.addEventListener('click', () => {
                addProject();
                updateFormProgress();
            });
        }

        // Save Button
        const saveBtn = document.getElementById('saveBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                window.showAutoSaveToasts = true;
                saveResumeData();
                window.showAutoSaveToasts = false;
            });
        }

        // Reset Button
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            // Add both click and touchstart events for better mobile support
            const handleReset = (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Reset button clicked/touched');
                
                // Check if SweetAlert2 is available
                if (typeof Swal === 'undefined') {
                    console.error('SweetAlert2 not loaded');
                    if (confirm('Are you sure you want to reset all resume data? This action cannot be undone.')) {
                        clearSavedResume();
                    }
                    return;
                }
                
                // Add a small delay to ensure the button click is registered
                setTimeout(() => {
                    SweetAlert.resumeReset().then((result) => {
                        if (result.isConfirmed) {
                            console.log('Reset confirmed, clearing data...');
                            clearSavedResume();
                        }
                    }).catch((error) => {
                        console.error('SweetAlert error:', error);
                        // Fallback to regular confirm if SweetAlert fails
                        if (confirm('Are you sure you want to reset all resume data? This action cannot be undone.')) {
                            clearSavedResume();
                        }
                    });
                }, 100);
            };
            
            resetBtn.addEventListener('click', handleReset);
            resetBtn.addEventListener('touchstart', handleReset, { passive: false });
            
            // Ensure button is touch-friendly
            resetBtn.style.minHeight = '44px';
            resetBtn.style.minWidth = '44px';
            
            // Add visual feedback for mobile
            resetBtn.addEventListener('touchstart', () => {
                resetBtn.style.opacity = '0.7';
            });
            
            resetBtn.addEventListener('touchend', () => {
                resetBtn.style.opacity = '1';
            });
        }

        // Export Button
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.addEventListener('click', exportResumeData);
        }

        // Import File
        const importFile = document.getElementById('importFile');
        if (importFile) {
            importFile.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    importResumeData(file);
                    e.target.value = ''; // Reset file input
                }
            });
        }

        // Form Validation and Preview Button
        const validateFormBtn = document.getElementById('validateFormBtn');
        if (validateFormBtn) {
            validateFormBtn.addEventListener('click', validateAndPreview);
        }

        // Template Selection
        const templateButtons = document.querySelectorAll('[data-template]');
        templateButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const template = e.target.closest('[data-template]').dataset.template;
                resumeData.template = template;
                updatePreview();
                saveResumeData();
                
                // Update active state
                templateButtons.forEach(b => b.classList.remove('active'));
                e.target.closest('[data-template]').classList.add('active');
                
                updateFormProgress();
            });
        });

        // Image Upload
        const uploadImageBtn = document.getElementById('uploadImageBtn');
        const removeImageBtn = document.getElementById('removeImageBtn');
        const profileImageInput = document.getElementById('profileImage');
        const imagePreview = document.getElementById('imagePreview');

        if (uploadImageBtn && profileImageInput && imagePreview) {
            uploadImageBtn.addEventListener('click', () => {
                profileImageInput.click();
            });

            profileImageInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    // Validate file size (max 2MB)
                    if (file.size > 2 * 1024 * 1024) {
                        showToast('Image size must be less than 2MB', 'error');
                        return;
                    }

                    // Validate file type
                    if (!file.type.startsWith('image/')) {
                        showToast('Please select a valid image file', 'error');
                        return;
                    }

                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const imageData = event.target.result;
                        resumeData.personalInfo.profileImage = imageData;
                        
                        // Update preview
                        imagePreview.innerHTML = `<img src="${imageData}" alt="Profile Image">`;
                        removeImageBtn.style.display = 'inline-block';
                        uploadImageBtn.textContent = 'Change Image';
                        
                        updatePreview();
                        saveResumeData();
                    };
                    reader.readAsDataURL(file);
                }
            });

            removeImageBtn.addEventListener('click', () => {
                resumeData.personalInfo.profileImage = null;
                imagePreview.innerHTML = `
                    <div class="placeholder-image">
                        <i class="fas fa-user"></i>
                        <p>No image selected</p>
                    </div>
                `;
                removeImageBtn.style.display = 'none';
                uploadImageBtn.textContent = 'Upload Image';
                profileImageInput.value = '';
                
                updatePreview();
                saveResumeData();
            });
        }

        // Load existing data into form
        loadExistingData();
        
        // Initialize form progress
        updateFormProgress();
    }
}

function loadExistingData() {
    // Load experience items
    resumeData.experience.forEach(exp => {
        addExperience(exp);
    });

    // Load education items
    resumeData.education.forEach(edu => {
        addEducation(edu);
    });

    // Load skills
    updateSkillsDisplay();

    // Load projects
    resumeData.projects.forEach(proj => {
        addProject(proj);
    });

    // Load profile image
    const imagePreview = document.getElementById('imagePreview');
    if (imagePreview && resumeData.personalInfo.profileImage) {
        imagePreview.innerHTML = `<img src="${resumeData.personalInfo.profileImage}" alt="Profile Image">`;
        const removeImageBtn = document.getElementById('removeImageBtn');
        const uploadImageBtn = document.getElementById('uploadImageBtn');
        if (removeImageBtn) removeImageBtn.style.display = 'inline-block';
        if (uploadImageBtn) uploadImageBtn.textContent = 'Change Image';
    }
}

function addExperience(data = null) {
    const experienceList = document.getElementById('experienceContainer');
    const newExperience = document.createElement('div');
    newExperience.className = 'experience-item mb-3';
    newExperience.innerHTML = `
        <div class="row g-3">
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Company Name" value="${data?.companyname || ''}">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Position" value="${data?.position || ''}">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Start Date" value="${data?.startdate || ''}">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="End Date" value="${data?.enddate || ''}">
            </div>
            <div class="col-12">
                <textarea class="form-control" placeholder="Description">${data?.description || ''}</textarea>
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger btn-sm remove-item">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        </div>
    `;
    experienceList.appendChild(newExperience);
    setupExperienceListeners(newExperience);
}

function addEducation(data = null) {
    const educationList = document.getElementById('educationContainer');
    const newEducation = document.createElement('div');
    newEducation.className = 'education-item mb-3';
    newEducation.innerHTML = `
        <div class="row g-3">
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Institution" value="${data?.institution || ''}">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Degree" value="${data?.degree || ''}">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Start Date" value="${data?.startdate || ''}">
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="End Date" value="${data?.enddate || ''}">
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger btn-sm remove-item">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        </div>
    `;
    educationList.appendChild(newEducation);
    setupEducationListeners(newEducation);
}

function addProject(data = null) {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    
    const projectId = `project-${Date.now()}`;
    const projectElement = document.createElement('div');
    projectElement.className = 'project-item card mb-3';
    projectElement.dataset.id = projectId;
    
    projectElement.innerHTML = `
        <div class="card-body">
            <div class="d-flex justify-content-between mb-2">
                <h5 class="card-title">Project</h5>
                <button type="button" class="btn-close remove-item" data-id="${projectId}"></button>
            </div>
            <div class="mb-3">
                <input type="text" class="form-control project-title" placeholder="Project Title" value="${data?.title || ''}">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control project-link" placeholder="Project URL" value="${data?.link || ''}">
            </div>
            <div class="mb-3">
                <textarea class="form-control project-description" placeholder="Project Description" rows="2">${data?.description || ''}</textarea>
            </div>
        </div>
    `;
    
    container.appendChild(projectElement);
    
    // Attach the event listeners immediately after adding to DOM
    const removeBtn = projectElement.querySelector('.remove-item');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            const projectId = projectElement.dataset.id;
            resumeData.projects = resumeData.projects.filter(p => p.id !== projectId);
            projectElement.remove();
            updatePreview();
            saveResumeData();
        });
    }
    
    setupProjectListeners(projectElement);
    
    // If this is a new project (not loaded from data), add it to resumeData
    if (!data) {
        resumeData.projects.push({
            id: projectId,
            title: '',
            link: '',
            description: ''
        });
        
        updatePreview();
        saveResumeData();
    } else if (data && !data.id) {
        // If data was provided but doesn't have an ID, set the ID
        data.id = projectId;
    }
}

function addCertification(data = null) {
    const container = document.getElementById('certificationsContainer');
    if (!container) return;
    
    const certId = `cert-${Date.now()}`;
    const certElement = document.createElement('div');
    certElement.className = 'certification-item card mb-3';
    certElement.dataset.id = certId;
    
    certElement.innerHTML = `
        <div class="card-body">
            <div class="d-flex justify-content-between mb-2">
                <h5 class="card-title">Certification</h5>
                <button type="button" class="btn-close remove-item" data-id="${certId}"></button>
            </div>
            <div class="mb-3">
                <input type="text" class="form-control cert-title" placeholder="Certification/Course Title" value="${data?.title || ''}">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control cert-issuer" placeholder="Issuing Organization" value="${data?.issuer || ''}">
            </div>
            <div class="row mb-3">
                <div class="col">
                    <input type="text" class="form-control cert-date" placeholder="Date (e.g., May 2023)" value="${data?.date || ''}">
                </div>
                <div class="col">
                    <input type="text" class="form-control cert-id" placeholder="Credential ID (optional)" value="${data?.credentialId || ''}">
                </div>
            </div>
            <div class="mb-3">
                <input type="url" class="form-control cert-url" placeholder="Credential URL (optional)" value="${data?.url || ''}">
            </div>
        </div>
    `;
    
    container.appendChild(certElement);
    
    // Attach the event listeners immediately after adding to DOM
    const removeBtn = certElement.querySelector('.remove-item');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            const certId = certElement.dataset.id;
            resumeData.certifications = resumeData.certifications.filter(c => c.id !== certId);
            certElement.remove();
            updatePreview();
            saveResumeData();
        });
    }
    
    setupCertificationListeners(certElement);
    
    // If this is a new certification (not loaded from data), add it to resumeData
    if (!data) {
        if (!resumeData.certifications) {
            resumeData.certifications = [];
        }
        
        resumeData.certifications.push({
            id: certId,
            title: '',
            issuer: '',
            date: '',
            credentialId: '',
            url: ''
        });
        
        updatePreview();
        saveResumeData();
    }
}

function setupExperienceListeners(experienceElement) {
    const inputs = experienceElement.querySelectorAll('input, textarea');
    const index = Array.from(experienceElement.parentElement.children).indexOf(experienceElement);
    
    if (!resumeData.experience[index]) {
        resumeData.experience[index] = {};
    }

    inputs.forEach(input => {
        const field = input.placeholder.toLowerCase().replace(' ', '');
        resumeData.experience[index][field] = input.value;

        input.addEventListener('input', (e) => {
            resumeData.experience[index][field] = e.target.value;
            updatePreview();
            saveResumeData();
        });
    });

    const removeBtn = experienceElement.querySelector('.remove-item');
    removeBtn.addEventListener('click', () => {
        const currentIndex = Array.from(experienceElement.parentElement.children).indexOf(experienceElement);
        resumeData.experience.splice(currentIndex, 1);
        experienceElement.remove();
        updatePreview();
        saveResumeData();
    });
}

function setupEducationListeners(educationElement) {
    const inputs = educationElement.querySelectorAll('input');
    const index = Array.from(educationElement.parentElement.children).indexOf(educationElement);
    
    if (!resumeData.education[index]) {
        resumeData.education[index] = {};
    }

    inputs.forEach(input => {
        const field = input.placeholder.toLowerCase().replace(' ', '');
        resumeData.education[index][field] = input.value;

        input.addEventListener('input', (e) => {
            resumeData.education[index][field] = e.target.value;
            updatePreview();
            saveResumeData();
        });
    });

    const removeBtn = educationElement.querySelector('.remove-item');
    removeBtn.addEventListener('click', () => {
        const currentIndex = Array.from(educationElement.parentElement.children).indexOf(educationElement);
        resumeData.education.splice(currentIndex, 1);
        educationElement.remove();
        updatePreview();
        saveResumeData();
    });
}

function setupProjectListeners(projectElement) {
    const titleInput = projectElement.querySelector('.project-title');
    const linkInput = projectElement.querySelector('.project-link');
    const descInput = projectElement.querySelector('.project-description');
    
    // Update project data events
    [titleInput, linkInput, descInput].forEach(input => {
        if (input) {
            input.addEventListener('input', () => {
                const projectId = projectElement.dataset.id;
                
                // Find existing project or create new one
                let project = resumeData.projects.find(p => p.id === projectId);
                if (!project) {
                    project = { id: projectId };
                    resumeData.projects.push(project);
                }
                
                // Update project data
                project.title = titleInput?.value || '';
                project.link = linkInput?.value || '';
                project.description = descInput?.value || '';
                
            updatePreview();
            saveResumeData();
        });
        }
    });
}

function setupCertificationListeners(certElement) {
    const titleInput = certElement.querySelector('.cert-title');
    const issuerInput = certElement.querySelector('.cert-issuer');
    const dateInput = certElement.querySelector('.cert-date');
    const idInput = certElement.querySelector('.cert-id');
    const urlInput = certElement.querySelector('.cert-url');
    
    // Update certification data events
    [titleInput, issuerInput, dateInput, idInput, urlInput].forEach(input => {
        if (input) {
            input.addEventListener('input', () => {
                const certId = certElement.dataset.id;
                
                // Find existing certification or create new one
                let cert = resumeData.certifications.find(c => c.id === certId);
                if (!cert) {
                    cert = { id: certId };
                    resumeData.certifications.push(cert);
                }
                
                // Update certification data
                cert.title = titleInput?.value || '';
                cert.issuer = issuerInput?.value || '';
                cert.date = dateInput?.value || '';
                cert.credentialId = idInput?.value || '';
                cert.url = urlInput?.value || '';
                
        updatePreview();
        saveResumeData();
            });
        }
    });
}

function updateSkillsDisplay() {
    const skillTags = document.getElementById('skillTags');
    if (skillTags) {
        skillTags.innerHTML = resumeData.skills.map(skill => `
            <span class="badge bg-primary me-2 mb-2">
                ${skill}
                <button type="button" class="btn-close btn-close-white ms-2" data-skill="${skill}"></button>
            </span>
        `).join('');

        // Add event listeners to remove buttons
        skillTags.querySelectorAll('.btn-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const skill = e.target.dataset.skill;
                resumeData.skills = resumeData.skills.filter(s => s !== skill);
                updateSkillsDisplay();
                updatePreview();
                saveResumeData();
            });
        });
    }
}

function updatePreview() {
    if (previewPanel) {
        previewPanel.innerHTML = generateResumeHTML();
    }
}

function generateResumeHTML() {
    const { name, jobTitle, email, phone, location, summary, github, linkedin, twitter, portfolio } = resumeData.personalInfo;
    
    // Choose the template
    let template = 'modern';
    if (resumeData.template) {
        template = resumeData.template;
    }
    
    // Generate the HTML based on the template
    let html = '';
    
    if (template === 'modern') {
        html = `
            <div class="resume-template modern-template">
                <header class="resume-header">
                    <h1>${name || 'Your Name'}</h1>
                    <p class="job-title">${jobTitle || 'Your Job Title'}</p>
                    
                    <div class="resume-contact">
                        ${email ? `<div><i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a></div>` : ''}
                        ${phone ? `<div><i class="fas fa-phone"></i> ${phone}</div>` : ''}
                        ${location ? `<div><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ''}
        </div>
                    
                    <div class="resume-social">
                        ${github ? `<a href="${github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                        ${linkedin ? `<a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
                        ${twitter ? `<a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
                </div>
                </header>
                
                ${summary ? `
                <section class="resume-section">
                    <h2>Professional Summary</h2>
                    <p>${summary}</p>
                </section>
                ` : ''}
                
                ${generateExperienceHTML()}
                ${generateProjectsHTML()}
                ${resumeData.skills.length > 0 ? `
                <section class="resume-section">
                    <h2>Core Skills</h2>
                    <div class="skills-container">
                        ${resumeData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
                </section>
                ` : ''}
                ${generateCertificationsHTML()}
                ${generateEducationHTML()}
            </div>
        `;
    } else if (template === 'professional') {
        // Professional template
        html = `
            <div class="resume-template professional-template">
                <!-- Professional template content -->
                <header class="resume-header">
                    <h1>${name || 'Your Name'}</h1>
                    <p class="job-title">${jobTitle || 'Your Job Title'}</p>
                </header>
                
                <div class="resume-sidebar">
                    <div class="resume-contact">
                        ${email ? `<div><i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a></div>` : ''}
                        ${phone ? `<div><i class="fas fa-phone"></i> ${phone}</div>` : ''}
                        ${location ? `<div><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ''}
                        <div class="resume-social">
                            ${github ? `<a href="${github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                            ${linkedin ? `<a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
                            ${twitter ? `<a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
                            ${portfolio ? `<a href="${portfolio}" target="_blank"><i class="fas fa-globe"></i></a>` : ''}
                        </div>
            </div>
            
                    ${resumeData.skills.length > 0 ? `
                    <section class="resume-section">
                        <h2>Core Skills</h2>
                        <div class="skills-container">
                            ${resumeData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </section>
                    ` : ''}
            </div>
            
                <div class="resume-main">
                    ${summary ? `
                    <section class="resume-section">
                        <h2>Summary</h2>
                        <p>${summary}</p>
                    </section>
                    ` : ''}
                    
                    ${generateExperienceHTML()}
                    ${generateProjectsHTML()}
                    ${generateCertificationsHTML()}
                ${generateEducationHTML()}
            </div>
            </div>
        `;
    } else if (template === 'creative') {
        // Creative template
        html = `
            <div class="resume-template creative-template">
                <!-- Creative template content -->
                <div class="creative-header">
                    <h1>${name || 'Your Name'}</h1>
                    <p class="job-title">${jobTitle || 'Your Job Title'}</p>
                    
                    <div class="resume-contact">
                        ${email ? `<div><i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a></div>` : ''}
                        ${phone ? `<div><i class="fas fa-phone"></i> ${phone}</div>` : ''}
                        ${location ? `<div><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ''}
                    </div>
                    
                    <div class="resume-social">
                        ${github ? `<a href="${github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                        ${linkedin ? `<a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
                        ${twitter ? `<a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
                        ${portfolio ? `<a href="${portfolio}" target="_blank"><i class="fas fa-globe"></i></a>` : ''}
                </div>
            </div>
            
                <div class="creative-content">
                    ${summary ? `
                    <section class="resume-section">
                        <h2><i class="fas fa-user-circle"></i> About Me</h2>
                        <p>${summary}</p>
                    </section>
                    ` : ''}
                    
                    ${generateExperienceHTML()}
                ${generateProjectsHTML()}
                    
                    ${resumeData.skills.length > 0 ? `
                    <section class="resume-section">
                        <h2><i class="fas fa-tools"></i> Core Skills</h2>
                        <div class="skills-container creative-skills">
                            ${resumeData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </section>
                    ` : ''}
                    
                    ${generateCertificationsHTML()}
                    ${generateEducationHTML()}
            </div>
        </div>
    `;
    } else if (template === 'europass') {
        // Europass template with circular image
        html = `
            <div class="resume-template europass-template">
                <div class="europass-sidebar">
                    <div class="profile-image">
                        ${resumeData.personalInfo.profileImage ? 
                            `<img src="${resumeData.personalInfo.profileImage}" alt="Profile Image">` : 
                            `<div class="placeholder">
                                <i class="fas fa-user"></i>
                            </div>`
                        }
                    </div>
                    
                    <header class="resume-header">
                        <h1>${name || 'Your Name'}</h1>
                        <p class="job-title">${jobTitle || 'Your Job Title'}</p>
                    </header>
                    
                    <div class="resume-contact">
                        ${email ? `<div><i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a></div>` : ''}
                        ${phone ? `<div><i class="fas fa-phone"></i> ${phone}</div>` : ''}
                        ${location ? `<div><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ''}
                    </div>
                    
                    <div class="resume-social">
                        ${github ? `<a href="${github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                        ${linkedin ? `<a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
                        ${twitter ? `<a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
                        ${portfolio ? `<a href="${portfolio}" target="_blank"><i class="fas fa-globe"></i></a>` : ''}
                    </div>
                    
                    ${resumeData.skills.length > 0 ? `
                    <section class="resume-section">
                        <h2>Skills and Competences</h2>
                        <div class="skills-container">
                            ${resumeData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </section>
                    ` : ''}
                </div>
                
                <div class="europass-main">
                    ${summary ? `
                    <section class="resume-section">
                        <h2>Personal Statement</h2>
                        <p>${summary}</p>
                    </section>
                    ` : ''}
                    
                    ${generateExperienceHTML()}
                    ${generateProjectsHTML()}
                    ${generateCertificationsHTML()}
                    ${generateEducationHTML()}
                </div>
            </div>
        `;
    } else if (template === 'minimalist') {
        // Minimalist template
        html = `
            <div class="resume-template minimalist-template">
                <header class="resume-header">
                    <h1>${name || 'Your Name'}</h1>
                    <p class="job-title">${jobTitle || 'Your Job Title'}</p>
                    
                    <div class="resume-contact">
                        ${email ? `<div><i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a></div>` : ''}
                        ${phone ? `<div><i class="fas fa-phone"></i> ${phone}</div>` : ''}
                        ${location ? `<div><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ''}
                        <div class="resume-social">
                            ${github ? `<a href="${github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                            ${linkedin ? `<a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
                            ${twitter ? `<a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
                            ${portfolio ? `<a href="${portfolio}" target="_blank"><i class="fas fa-globe"></i></a>` : ''}
                        </div>
                    </div>
                </header>
                
                ${summary ? `
                <section class="resume-section">
                    <h2>Summary</h2>
                    <p>${summary}</p>
                </section>
                ` : ''}
                
                ${generateExperienceHTML()}
                ${generateProjectsHTML()}
                ${resumeData.skills.length > 0 ? `
                <section class="resume-section">
                    <h2>Skills</h2>
                    <div class="skills-container">
                        ${resumeData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </section>
                ` : ''}
                ${generateCertificationsHTML()}
                ${generateEducationHTML()}
            </div>
        `;
    } else if (template === 'executive') {
        // Executive template with gradient header
        html = `
            <div class="resume-template executive-template">
                <div class="executive-header">
                    <header class="resume-header">
                        <h1>${name || 'Your Name'}</h1>
                        <p class="job-title">${jobTitle || 'Your Job Title'}</p>
                        
                        <div class="resume-contact">
                            ${email ? `<div><i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a></div>` : ''}
                            ${phone ? `<div><i class="fas fa-phone"></i> ${phone}</div>` : ''}
                            ${location ? `<div><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ''}
                        </div>
                        
                        <div class="resume-social">
                            ${github ? `<a href="${github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                            ${linkedin ? `<a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
                            ${twitter ? `<a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
                            ${portfolio ? `<a href="${portfolio}" target="_blank"><i class="fas fa-globe"></i></a>` : ''}
                        </div>
                    </header>
                </div>
                
                <div class="executive-content">
                    ${summary ? `
                    <section class="resume-section">
                        <h2>Executive Summary</h2>
                        <p>${summary}</p>
                    </section>
                    ` : ''}
                    
                    ${generateExperienceHTML()}
                    ${generateProjectsHTML()}
                    ${resumeData.skills.length > 0 ? `
                    <section class="resume-section">
                        <h2>Core Competencies</h2>
                        <div class="skills-container">
                            ${resumeData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </section>
                    ` : ''}
                    ${generateCertificationsHTML()}
                    ${generateEducationHTML()}
                </div>
            </div>
        `;
    } else if (template === 'classic') {
        // Classic template with dark header
        html = `
            <div class="resume-template classic-template">
                <div class="classic-header">
                    <header class="resume-header">
                        <h1>${name || 'Your Name'}</h1>
                        <p class="job-title">${jobTitle || 'Your Job Title'}</p>
                        
                        <div class="resume-contact">
                            ${email ? `<div><i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a></div>` : ''}
                            ${phone ? `<div><i class="fas fa-phone"></i> ${phone}</div>` : ''}
                            ${location ? `<div><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ''}
                        </div>
                    </header>
                </div>
                
                <div class="classic-content">
                    ${summary ? `
                    <section class="resume-section">
                        <h2>Objective</h2>
                        <p>${summary}</p>
                    </section>
                    ` : ''}
                    
                    ${generateExperienceHTML()}
                    ${generateProjectsHTML()}
                    ${resumeData.skills.length > 0 ? `
                    <section class="resume-section">
                        <h2>Skills</h2>
                        <div class="skills-container">
                            ${resumeData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </section>
                    ` : ''}
                    ${generateCertificationsHTML()}
                    ${generateEducationHTML()}
                </div>
            </div>
        `;
    } else if (template === 'elegant') {
        // Elegant template with gradient header
        html = `
            <div class="resume-template elegant-template">
                <div class="elegant-header">
                    <header class="resume-header">
                        <h1>${name || 'Your Name'}</h1>
                        <p class="job-title">${jobTitle || 'Your Job Title'}</p>
                        
                        <div class="resume-contact">
                            ${email ? `<div><i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a></div>` : ''}
                            ${phone ? `<div><i class="fas fa-phone"></i> ${phone}</div>` : ''}
                            ${location ? `<div><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ''}
                        </div>
                        
                        <div class="resume-social">
                            ${github ? `<a href="${github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                            ${linkedin ? `<a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
                            ${twitter ? `<a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
                            ${portfolio ? `<a href="${portfolio}" target="_blank"><i class="fas fa-globe"></i></a>` : ''}
                        </div>
                    </header>
                </div>
                
                <div class="elegant-content">
                    ${summary ? `
                    <section class="resume-section">
                        <h2>Professional Profile</h2>
                        <p>${summary}</p>
                    </section>
                    ` : ''}
                    
                    ${generateExperienceHTML()}
                    ${generateProjectsHTML()}
                    ${resumeData.skills.length > 0 ? `
                    <section class="resume-section">
                        <h2>Areas of Expertise</h2>
                        <div class="skills-container">
                            ${resumeData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </section>
                    ` : ''}
                    ${generateCertificationsHTML()}
                    ${generateEducationHTML()}
                </div>
            </div>
        `;
    }

    return html;
}

// Generate experience HTML
function generateExperienceHTML() {
    if (!resumeData.experience || resumeData.experience.length === 0) {
        return '';
    }
    
    return `
    <section class="resume-section">
        <h2>Professional Experience</h2>
        <div class="experience-list">
            ${resumeData.experience.map(exp => `
        <div class="experience-item">
            <h3>${exp.position || 'Position'} at ${exp.companyname || 'Company'}</h3>
            <p class="date">${exp.startdate || 'Start Date'} - ${exp.enddate || 'End Date'}</p>
            ${exp.description ? formatDescriptionWithBullets(exp.description) : '<p>Description</p>'}
        </div>
            `).join('')}
        </div>
    </section>
    `;
}

// Generate education HTML
function generateEducationHTML() {
    if (!resumeData.education || resumeData.education.length === 0) {
        return '';
    }
    
    return `
    <section class="resume-section">
        <h2>Education</h2>
        <div class="education-list">
            ${resumeData.education.map(edu => `
        <div class="education-item">
            <h3>${edu.degree || 'Degree'} at ${edu.institution || 'Institution'}</h3>
            <p class="date">${edu.startdate || 'Start Date'} - ${edu.enddate || 'End Date'}</p>
            ${edu.description ? formatDescriptionWithBullets(edu.description) : ''}
        </div>
            `).join('')}
        </div>
    </section>
    `;
}

function generateProjectsHTML() {
    if (!resumeData.projects || resumeData.projects.length === 0) {
        return '';
    }
    
    return `
    <section class="resume-section">
        <h2>Projects</h2>
        <div class="projects-list">
            ${resumeData.projects.map(project => `
        <div class="project-item">
                    <h3>${project.title || 'Project Title'}</h3>
                    ${project.link ? `<p class="project-link"><a href="${project.link}" target="_blank">${project.link}</a></p>` : ''}
                    ${project.description ? formatDescriptionWithBullets(project.description) : '<p>Project description</p>'}
        </div>
            `).join('')}
        </div>
    </section>
    `;
}

// Generate certifications HTML
function generateCertificationsHTML() {
    if (!resumeData.certifications || resumeData.certifications.length === 0) {
        return '';
    }
    
    return `
    <section class="resume-section">
        <h2>Courses & Certifications</h2>
        <div class="certification-list">
            ${resumeData.certifications.map(cert => `
                <div class="certification-item">
                    <h3>${cert.title || 'Certification Title'}</h3>
                    <p class="certification-details">
                        <span>${cert.issuer || 'Issuing Organization'}</span>
                        ${cert.date ? `<span class="cert-date">${cert.date}</span>` : ''}
                    </p>
                    ${cert.credentialId ? `<p class="credential-id">Credential ID: ${cert.credentialId}</p>` : ''}
                    ${cert.url ? `<p class="credential-link"><a href="${cert.url}" target="_blank">View Certificate</a></p>` : ''}
                </div>
            `).join('')}
        </div>
    </section>
    `;
}

// Helper function to format descriptions with bullet points
function formatDescriptionWithBullets(description) {
    if (!description) return '';
    
    // Split by periods and line breaks to create bullet points
    const sentences = description.split(/(?<=\.)\s+|\n/g)
        .filter(sentence => sentence.trim().length > 0)
        .map(sentence => sentence.trim());
    
    if (sentences.length <= 1) {
        // Single sentence, just add a bullet
        return `<p class="bullet-point">${description.trim()}</p>`;
    }
    
    // Multiple sentences, add bullet point for each one
    return `<ul class="description-bullets">
        ${sentences.map(sentence => `<li>${sentence}</li>`).join('')}
    </ul>`;
}

// Function to update form progress bar
function updateFormProgress() {
    const progressBar = document.getElementById('formProgress');
    if (!progressBar) return;
    
    let progress = 0;
    let requiredFields = 0;
    let filledFields = 0;
    
    // Personal Info (6 required fields)
    const personalFields = ['name', 'jobTitle', 'email', 'phone', 'location', 'summary'];
    requiredFields += personalFields.length;
    
    personalFields.forEach(field => {
        if (resumeData.personalInfo[field] && resumeData.personalInfo[field].trim() !== '') {
            filledFields++;
        }
    });
    
    // Experience (at least 1 required)
    requiredFields += 1;
    if (resumeData.experience.length > 0) {
        filledFields += 1;
    }
    
    // Education (at least 1 required)
    requiredFields += 1;
    if (resumeData.education.length > 0) {
        filledFields += 1;
    }
    
    // Skills (at least 3 required)
    requiredFields += 1;
    if (resumeData.skills.length >= 3) {
        filledFields += 1;
    }
    
    // Template (1 required)
    requiredFields += 1;
    if (resumeData.template) {
        filledFields += 1;
    }
    
    // Calculate progress percentage
    progress = Math.min(100, Math.round((filledFields / requiredFields) * 100));
    
    // Update progress bar
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    
    // Update view resume button visibility
    const viewResumeBtn = document.getElementById('viewResume');
    if (viewResumeBtn) {
        if (progress === 100) {
            viewResumeBtn.style.display = 'inline-block';
        } else {
            viewResumeBtn.style.display = 'none';
        }
    }
}

// Validate form and redirect to preview page
function validateAndPreview() {
    // Reset validation
    document.querySelectorAll('.is-invalid').forEach(el => {
        el.classList.remove('is-invalid');
    });
    
    let isValid = true;
    
    // Validate personal info
    const requiredFields = ['name', 'jobTitle', 'email', 'phone', 'location', 'summary'];
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input || !input.value.trim()) {
            input.classList.add('is-invalid');
            isValid = false;
        }
    });
    
    // Validate email format
    const emailInput = document.getElementById('email');
    if (emailInput && emailInput.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        }
    }
    
    // Validate experience
    if (resumeData.experience.length === 0) {
        showToast('Please add at least one work experience entry', 'warning');
        isValid = false;
    }
    
    // Validate education
    if (resumeData.education.length === 0) {
        showToast('Please add at least one education entry', 'warning');
        isValid = false;
    }
    
    // Validate skills
    if (resumeData.skills.length < 3) {
        showToast('Please add at least 3 skills', 'warning');
        isValid = false;
    }
    
    // Validate template selection
    if (!resumeData.template) {
        showToast('Please select a resume template', 'warning');
        isValid = false;
    }
    
    if (isValid) {
        // Save data before redirecting
        saveResumeData();
        
        // Redirect to preview page
        window.location.href = 'preview.html';
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.is-invalid');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Canva integration - Format resume data for export
function formatResumeDataForCanva() {
    if (!resumeData) return '';
    
    const { personalInfo, experience, education, skills, projects, certifications } = resumeData;
    let formattedData = '';
    
    // Personal Information
    formattedData += "=== PERSONAL INFORMATION ===\n";
    formattedData += `Name: ${personalInfo.name || ''}\n`;
    formattedData += `Job Title: ${personalInfo.jobTitle || ''}\n`;
    formattedData += `Email: ${personalInfo.email || ''}\n`;
    formattedData += `Phone: ${personalInfo.phone || ''}\n`;
    formattedData += `Location: ${personalInfo.location || ''}\n\n`;
    
    // Professional Summary
    if (personalInfo.summary) {
        formattedData += "=== PROFESSIONAL SUMMARY ===\n";
        formattedData += `${personalInfo.summary}\n\n`;
    }
    
    // Skills
    if (skills && skills.length > 0) {
        formattedData += "=== SKILLS ===\n";
        formattedData += skills.join(', ') + '\n\n';
    }
    
    // Experience
    if (experience && experience.length > 0) {
        formattedData += "=== EXPERIENCE ===\n";
        experience.forEach(exp => {
            formattedData += `Position: ${exp.position || ''}\n`;
            formattedData += `Company: ${exp.companyname || ''}\n`;
            formattedData += `Duration: ${exp.startdate || ''} - ${exp.enddate || ''}\n`;
            if (exp.description) {
                formattedData += "Description:\n";
                
                // Split by periods and line breaks to create bullet points
                const sentences = exp.description.split(/(?<=\.)\s+|\n/g)
                    .filter(sentence => sentence.trim().length > 0)
                    .map(sentence => sentence.trim());
                
                sentences.forEach(sentence => {
                    formattedData += `• ${sentence}\n`;
                });
            }
            formattedData += '\n';
        });
    }
    
    // Education
    if (education && education.length > 0) {
        formattedData += "=== EDUCATION ===\n";
        education.forEach(edu => {
            formattedData += `Degree: ${edu.degree || ''}\n`;
            formattedData += `Institution: ${edu.institution || ''}\n`;
            formattedData += `Duration: ${edu.startdate || ''} - ${edu.enddate || ''}\n`;
            if (edu.description) {
                formattedData += "Description:\n";
                
                // Split by periods and line breaks to create bullet points
                const sentences = edu.description.split(/(?<=\.)\s+|\n/g)
                    .filter(sentence => sentence.trim().length > 0)
                    .map(sentence => sentence.trim());
                
                sentences.forEach(sentence => {
                    formattedData += `• ${sentence}\n`;
                });
            }
            formattedData += '\n';
        });
    }
    
    // Certifications
    if (certifications && certifications.length > 0) {
        formattedData += "=== CERTIFICATIONS ===\n";
        certifications.forEach(cert => {
            formattedData += `Title: ${cert.title || ''}\n`;
            formattedData += `Issuer: ${cert.issuer || ''}\n`;
            formattedData += `Date: ${cert.date || ''}\n`;
            formattedData += `Credential ID: ${cert.credentialId || ''}\n`;
            formattedData += `URL: ${cert.url || ''}\n\n`;
        });
    }
    
    // Projects
    if (projects && projects.length > 0) {
        formattedData += "=== PROJECTS ===\n";
        projects.forEach(project => {
            formattedData += `Title: ${project.title || ''}\n`;
            formattedData += `Link: ${project.link || ''}\n`;
            if (project.description) {
                formattedData += "Description:\n";
                
                // Split by periods and line breaks to create bullet points
                const sentences = project.description.split(/(?<=\.)\s+|\n/g)
                    .filter(sentence => sentence.trim().length > 0)
                    .map(sentence => sentence.trim());
                
                sentences.forEach(sentence => {
                    formattedData += `• ${sentence}\n`;
                });
            }
            formattedData += '\n';
        });
    }
    
    // Social Links
    formattedData += "=== SOCIAL LINKS ===\n";
    if (personalInfo.linkedin) formattedData += `LinkedIn: ${personalInfo.linkedin}\n`;
    if (personalInfo.github) formattedData += `GitHub: ${personalInfo.github}\n`;
    if (personalInfo.twitter) formattedData += `Twitter: ${personalInfo.twitter}\n`;
    if (personalInfo.portfolio) formattedData += `Portfolio: ${personalInfo.portfolio}\n`;
    
    return formattedData;
}

// Initialize Canva modal functionality
function initCanvaIntegration() {
    const useWithCanvaBtn = document.getElementById('useWithCanva');
    const copyCanvaDataBtn = document.getElementById('copyCanvaData');
    
    if (useWithCanvaBtn) {
        useWithCanvaBtn.addEventListener('click', () => {
            // Format data for Canva
            const formattedData = formatResumeDataForCanva();
            
            // Update modal content
            const canvaExportData = document.getElementById('canvaExportData');
            if (canvaExportData) {
                canvaExportData.textContent = formattedData;
            }
            
            // Show modal
            const canvaModal = new bootstrap.Modal(document.getElementById('canvaModal'));
            canvaModal.show();
        });
    }
    
    if (copyCanvaDataBtn) {
        copyCanvaDataBtn.addEventListener('click', () => {
            const canvaExportData = document.getElementById('canvaExportData');
            if (canvaExportData) {
                // Copy text to clipboard
                navigator.clipboard.writeText(canvaExportData.textContent)
                    .then(() => {
                        showToast('Resume data copied to clipboard!', 'success');
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                        showToast('Failed to copy text to clipboard', 'danger');
                    });
            }
        });
    }
}

// Add initialization for preview page
function initPreviewPage() {
    // Load the resume and update the preview
    updatePreview();
    
    // Template change functionality
    document.querySelectorAll('[data-template]').forEach(button => {
        button.addEventListener('click', function() {
            const template = this.dataset.template;
            resumeData.template = template;
            updatePreview();
            saveResumeData();
        });
    });
    
    // Download PDF button
    const downloadPdfBtn = document.getElementById('downloadPDF');
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', generatePDF);
    }
    
    // Initialize Canva integration
    initCanvaIntegration();
    
    // Calculate ATS score
    calculateATSScore();
}

// Initialize when DOM is loaded on preview page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the preview page
    if (document.getElementById('resumePreview')) {
        initPreviewPage();
    }
});

// Calculate ATS score for the resume
function calculateATSScore() {
    // This is a placeholder for actual ATS score calculation logic
    let score = 70; // Base score
    
    // Add points for having a complete profile
    if (resumeData.personalInfo.name && 
        resumeData.personalInfo.email && 
        resumeData.personalInfo.phone) {
        score += 5;
    }
    
    // Add points for having a substantial summary
    if (resumeData.personalInfo.summary && 
        resumeData.personalInfo.summary.length > 100) {
        score += 5;
    }
    
    // Add points for having experience entries
    if (resumeData.experience.length > 0) {
        score += 5;
    }
    
    // Add points for having education entries
    if (resumeData.education.length > 0) {
        score += 5;
    }
    
    // Add points for having skills
    if (resumeData.skills.length >= 5) {
        score += 5;
    }
    
    // Add points for having certifications
    if (resumeData.certifications && resumeData.certifications.length > 0) {
        score += 3;
    }
    
    // Add points for having projects
    if (resumeData.projects.length > 0) {
        score += 2;
    }
    
    // Set the score
    const atsScoreElement = document.getElementById('atsScore');
    const atsProgressBar = document.getElementById('atsProgressBar');
    
    if (atsScoreElement && atsProgressBar) {
        atsScoreElement.textContent = score + '%';
        atsProgressBar.style.width = score + '%';
        
        // Set color based on score
        if (score >= 90) {
            atsScoreElement.className = 'badge bg-success fs-6';
            atsProgressBar.className = 'progress-bar bg-success';
        } else if (score >= 70) {
            atsScoreElement.className = 'badge bg-info fs-6';
            atsProgressBar.className = 'progress-bar bg-info';
        } else if (score >= 50) {
            atsScoreElement.className = 'badge bg-warning fs-6';
            atsProgressBar.className = 'progress-bar bg-warning';
        } else {
            atsScoreElement.className = 'badge bg-danger fs-6';
            atsProgressBar.className = 'progress-bar bg-danger';
        }
    }
}

// Auto-scroll functionality for image cards
function initAutoScroll() {
    const scrollContainers = document.querySelectorAll('.scroll-container');
    
    scrollContainers.forEach(container => {
        const wrapper = container.querySelector('.scroll-wrapper');
        if (!wrapper) return;
        
        // Clone items for infinite scroll effect
        const items = wrapper.querySelectorAll('.scroll-item');
        items.forEach(item => {
            const clone = item.cloneNode(true);
            wrapper.appendChild(clone);
        });
        
        // Auto-scroll animation
        let scrollPosition = 0;
        const scrollSpeed = 1; // pixels per frame
        
        function autoScroll() {
            scrollPosition += scrollSpeed;
            if (scrollPosition >= wrapper.scrollWidth / 2) {
                scrollPosition = 0;
            }
            wrapper.style.transform = `translateX(-${scrollPosition}px)`;
            requestAnimationFrame(autoScroll);
        }
        
        // Start auto-scroll
        autoScroll();
        
        // Pause on hover
        container.addEventListener('mouseenter', () => {
            wrapper.style.animationPlayState = 'paused';
        });
        
        container.addEventListener('mouseleave', () => {
            wrapper.style.animationPlayState = 'running';
        });
        
        // Touch scroll support
        let isDown = false;
        let startX;
        let scrollLeft;
        
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });
        
        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    });
}



async function extractTextFromFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    
    if (ext === 'pdf') {
        return await extractPDFText(file);
    } else if (ext === 'doc' || ext === 'docx') {
        return await extractWordText(file);
    } else {
        throw new Error('Unsupported file type');
    }
}

async function extractPDFText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function () {
            try {
                const typedarray = new Uint8Array(reader.result);
                
                // Check if pdfjsLib is available
                if (typeof pdfjsLib === 'undefined') {
                    reject(new Error('PDF.js library not loaded. Please refresh the page and try again.'));
                    return;
                }
                
                pdfjsLib.getDocument({ data: typedarray }).promise
                    .then(function (pdf) {
                        const textPromises = [];
                        for (let i = 1; i <= pdf.numPages; i++) {
                            textPromises.push(
                                pdf.getPage(i).then(page => 
                                    page.getTextContent().then(tc => 
                                        tc.items.map(item => item.str).join(' ')
                                    )
                                )
                            );
                        }
                        Promise.all(textPromises)
                            .then(pages => {
                                const text = pages.join('\n');
                                if (!text.trim()) {
                                    reject(new Error('No text could be extracted from the PDF. The file might be image-based or corrupted.'));
                                } else {
                                    resolve(text);
                                }
                            })
                            .catch(error => {
                                console.error('PDF text extraction error:', error);
                                reject(new Error('Failed to extract text from PDF. Please try a different file.'));
                            });
                    })
                    .catch(error => {
                        console.error('PDF loading error:', error);
                        reject(new Error('Failed to load PDF file. Please check if the file is corrupted.'));
                    });
            } catch (error) {
                console.error('PDF processing error:', error);
                reject(new Error('Failed to process PDF file. Please try again.'));
            }
        };
        
        reader.onerror = function () {
            reject(new Error('Failed to read file. Please try again.'));
        };
        
        reader.readAsArrayBuffer(file);
    });
}

async function extractWordText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            try {
                // Check if mammoth is available
                if (typeof mammoth === 'undefined') {
                    reject(new Error('Mammoth.js library not loaded. Please refresh the page and try again.'));
                    return;
                }
                
                mammoth.extractRawText({ arrayBuffer: e.target.result })
                    .then(result => {
                        if (!result.value.trim()) {
                            reject(new Error('No text could be extracted from the Word document. The file might be corrupted or empty.'));
                        } else {
                            resolve(result.value);
                        }
                    })
                    .catch(error => {
                        console.error('Word document extraction error:', error);
                        reject(new Error('Failed to extract text from Word document. Please try a different file.'));
                    });
            } catch (error) {
                console.error('Word document processing error:', error);
                reject(new Error('Failed to process Word document. Please try again.'));
            }
        };
        
        reader.onerror = function () {
            reject(new Error('Failed to read file. Please try again.'));
        };
        
        reader.readAsArrayBuffer(file);
    });
}

async function parseResumeWithAI(text) {
    console.log('Starting AI-powered resume parsing...');
    console.log('Input text length:', text.length);
    
    // Use compromise.js for NLP analysis
    const doc = nlp(text);
    
    // Clean and normalize text
    const cleanText = text.replace(/\s+/g, ' ').trim();
    
    const parsedData = {
        personal: extractPersonalInfo(doc, cleanText),
        experience: extractExperience(doc, cleanText),
        education: extractEducation(doc, cleanText),
        skills: extractSkills(doc, cleanText),
        projects: extractProjects(doc, cleanText),
        certifications: extractCertifications(doc, cleanText)
    };
    
    // Log extracted data for debugging
    console.log('Extracted personal:', parsedData.personal);
    console.log('Extracted experience:', parsedData.experience);
    console.log('Extracted projects:', parsedData.projects);
    console.log('Extracted skills:', parsedData.skills);
    
    // Post-process and validate extracted data
    validateAndEnhanceData(parsedData, cleanText);
    
    console.log('Final parsed data:', parsedData);
    return parsedData;
}

function validateAndEnhanceData(data, text) {
    // If no name found, try more aggressive patterns
    if (!data.personal.name) {
        const aggressiveNamePatterns = [
            /^([A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+)/m,
            /([A-Z][a-z]+ [A-Z][a-z]+)/m,
            /^([A-Z][a-z]+)/m
        ];
        
        for (const pattern of aggressiveNamePatterns) {
            const match = text.match(pattern);
            if (match && match[1]) {
                data.personal.name = match[1].trim();
                break;
            }
        }
    }
    
    // If no email found, try more patterns
    if (!data.personal.email) {
        const emailPatterns = [
            /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g,
            /Email[:\-\s]+([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/i
        ];
        
        for (const pattern of emailPatterns) {
            const match = text.match(pattern);
            if (match) {
                data.personal.email = match[0] || match[1];
                break;
            }
        }
    }
    
    // If no skills found, extract from entire text
    if (!data.skills || data.skills.length === 0) {
        data.skills = extractSkillsFromText(text);
    }
    
    // If no experience found, try alternative patterns
    if (!data.experience || data.experience.length === 0) {
        data.experience = extractExperienceAlternative(text);
    }
}

function extractPersonalInfo(doc, text) {
    const personal = {};
    
    // Name extraction (multiple patterns)
    const namePatterns = [
        /^([A-Z][a-z]+ [A-Z][a-z]+)/m,
        /Name[:\-\s]+([A-Z][a-z]+ [A-Z][a-z]+)/i,
        /([A-Z][a-z]+ [A-Z][a-z]+)/m,
        /^([A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+)/m
    ];
    
    for (const pattern of namePatterns) {
        const match = text.match(pattern);
        if (match && match[1]) {
            personal.name = match[1].trim();
            break;
        }
    }
    
    // If no name found, try to extract from the very first line
    if (!personal.name) {
        const firstLine = text.split('\n')[0];
        const nameMatch = firstLine.match(/^([A-Z][a-z]+ [A-Z][a-z]+)/);
        if (nameMatch) {
            personal.name = nameMatch[1].trim();
        }
    }
    
    // Email extraction - look for "Email:" pattern
    const emailPatterns = [
        /Email[:\-\s]+([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/i,
        /Email[:\-\s]+([A-Z][a-z]+ [A-Z][a-z]+)/i, // For cases like "Email: Awais Ahmad"
        /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
    ];
    
    for (const pattern of emailPatterns) {
        const match = text.match(pattern);
        if (match) {
            personal.email = match[1] || match[0];
            break;
        }
    }
    
    // If no email found, try to extract from the header line
    if (!personal.email) {
        const headerLine = text.split('\n')[0];
        const emailMatch = headerLine.match(/Email[:\-\s]+([A-Z][a-z]+ [A-Z][a-z]+)/i);
        if (emailMatch) {
            personal.email = emailMatch[1].trim();
        }
    }
    
    // Phone extraction - improved patterns
    const phonePatterns = [
        /(\+\d{1,3}[- ]?)?\d{10,}/,
        /Phone[:\-\s]+([\d\-\+\(\)\s]+)/i,
        /Tel[:\-\s]+([\d\-\+\(\)\s]+)/i,
        /Mobile[:\-\s]+([\d\-\+\(\)\s]+)/i,
        /Contact[:\-\s]+([\d\-\+\(\)\s]+)/i
    ];
    
    for (const pattern of phonePatterns) {
        const match = text.match(pattern);
        if (match && match[1]) {
            personal.phone = match[1].trim();
            break;
        }
    }
    
    // If no phone found, try to extract from the beginning of the document
    if (!personal.phone) {
        const firstLines = text.split('\n').slice(0, 10);
        for (const line of firstLines) {
            const phoneMatch = line.match(/(\+\d{1,3}[- ]?)?\d{10,}/);
            if (phoneMatch) {
                personal.phone = phoneMatch[0].trim();
                break;
            }
        }
    }
    
    // Location extraction - improved patterns
    const locationPatterns = [
        /Location[:\-\s]+([A-Za-z0-9, .]+)/i,
        /Address[:\-\s]+([A-Za-z0-9, .]+)/i,
        /([A-Z][a-z]+, [A-Z]{2})/,
        /([A-Z][a-z]+ [A-Z][a-z]+)/m,
        /([A-Z][a-z]+)/m, // For single word locations like "Islamabad"
        /([A-Z][a-z]+,\s*[A-Z][a-z]+)/, // For "City, Country" format
        /([A-Z][a-z]+\s+[A-Z][a-z]+)/ // For "City Country" format
    ];
    
    for (const pattern of locationPatterns) {
        const match = text.match(pattern);
        if (match && match[1]) {
            personal.location = match[1].trim();
            break;
        }
    }
    
    // If no location found, try to extract from the beginning of the document
    if (!personal.location) {
        const firstLines = text.split('\n').slice(0, 5);
        for (const line of firstLines) {
            const locationMatch = line.match(/([A-Z][a-z]+(?:,\s*[A-Z][a-z]+)?)/);
            if (locationMatch && locationMatch[1].length > 3) {
                personal.location = locationMatch[1].trim();
                break;
            }
        }
    }
    
    // Job title extraction - look for "Software Engineer" pattern
    const jobPatterns = [
        /Job Title[:\-\s]+([A-Za-z .]+)/i,
        /Position[:\-\s]+([A-Za-z .]+)/i,
        /Title[:\-\s]+([A-Za-z .]+)/i,
        /([A-Z][a-z]+ (Developer|Engineer|Manager|Designer|Analyst|Consultant|Specialist|Coordinator|Assistant|Director|Lead|Senior|Junior))/i,
        /(Software Engineer|Web Developer|Frontend Developer|Backend Developer|Full Stack Developer|Data Scientist|Product Manager|Project Manager)/i
    ];
    
    for (const pattern of jobPatterns) {
        const match = text.match(pattern);
        if (match && match[1]) {
            personal.jobTitle = match[1].trim();
            break;
        }
    }
    
    // Summary extraction - improved patterns
    const summaryPatterns = [
        /(Summary|Profile|About)[:\-\s]+([\s\S]{30,400})/i,
        /(Objective)[:\-\s]+([\s\S]{30,400})/i,
        /(Professional Summary)[:\-\s]+([\s\S]{30,400})/i,
        /(Career Objective)[:\-\s]+([\s\S]{30,400})/i
    ];
    
    for (const pattern of summaryPatterns) {
        const match = text.match(pattern);
        if (match && match[2]) {
            // Clean up the summary text
            let summary = match[2].split('\n')[0].trim();
            // Remove any trailing punctuation or extra spaces
            summary = summary.replace(/[^\w\s.,!?-]+$/, '').trim();
            personal.summary = summary;
            break;
        }
    }
    
    // If no summary found, try to extract from the beginning of the document
    if (!personal.summary) {
        const firstParagraph = text.split('\n\n')[0];
        if (firstParagraph && firstParagraph.length > 50 && firstParagraph.length < 300) {
            // Check if it looks like a summary (contains keywords like "experienced", "passionate", etc.)
            const summaryKeywords = /(experienced|passionate|dedicated|skilled|professional|developer|engineer|specialist)/i;
            if (summaryKeywords.test(firstParagraph)) {
                personal.summary = firstParagraph.trim();
            }
        }
    }
    
    // Social links - look for "LinkedIn:" and "GitHub:" patterns
    const linkedinPatterns = [
        /LinkedIn[:\-\s]+([A-Za-z0-9\-_/]+)/i,
        /linkedin\.com\/[A-Za-z0-9\-_/]+/i
    ];
    
    for (const pattern of linkedinPatterns) {
        const match = text.match(pattern);
        if (match) {
            personal.linkedin = match[1] || match[0];
            if (!personal.linkedin.startsWith('http')) {
                personal.linkedin = 'https://linkedin.com/in/' + personal.linkedin;
            }
            break;
        }
    }
    
    const githubPatterns = [
        /GitHub[:\-\s]+([A-Za-z0-9\-_/]+)/i,
        /github\.com\/[A-Za-z0-9\-_/]+/i
    ];
    
    for (const pattern of githubPatterns) {
        const match = text.match(pattern);
        if (match) {
            personal.github = match[1] || match[0];
            if (!personal.github.startsWith('http')) {
                personal.github = 'https://github.com/' + personal.github;
            }
            break;
        }
    }
    
    const twitterMatch = text.match(/twitter\.com\/[A-Za-z0-9\-_/]+/i);
    if (twitterMatch) personal.twitter = 'https://' + twitterMatch[0];
    
    const portfolioMatch = text.match(/(Portfolio|Website)[:\-\s]+(https?:\/\/[\w\.-]+)/i);
    if (portfolioMatch) personal.portfolio = portfolioMatch[2];
    
    return personal;
}

function extractExperience(doc, text) {
    const experience = [];
    
    // Look for WORK EXPERIENCE section
    const experienceSections = text.split(/(?:WORK EXPERIENCE|EXPERIENCE|EMPLOYMENT|CAREER)/i);
    
    if (experienceSections.length > 1) {
        const expText = experienceSections[1];
        
        // Split by job entries - look for patterns like "Software Engineer| Company"
        const jobBlocks = expText.split(/(?=\|[A-Za-z\s]+,\s+[A-Za-z\s]+|\([A-Za-z]+\s+\d{4}\s*–\s*[A-Za-z\s]+\))/);
        
        jobBlocks.forEach(block => {
            if (block.trim().length > 30) {
                const job = parseJobBlock(block);
                if (job.title) {
                    experience.push(job);
                }
            }
        });
    }
    
    // If no experience found in sections, try alternative patterns
    if (experience.length === 0) {
        const alternativePatterns = [
            /([A-Za-z\s]+)\|\s*([A-Za-z\s]+),\s*([A-Za-z\s]+)/g,
            /([A-Za-z\s]+Engineer[^|]*)\|\s*([A-Za-z\s]+)/g,
            /([A-Za-z\s]+Developer[^|]*)\|\s*([A-Za-z\s]+)/g,
            /([A-Za-z\s]+Manager[^|]*)\|\s*([A-Za-z\s]+)/g
        ];
        
        alternativePatterns.forEach(pattern => {
            const matches = text.matchAll(pattern);
            for (const match of matches) {
                if (match[1] && match[2]) {
                    experience.push({
                        title: match[1].trim(),
                        company: match[2].trim(),
                        startDate: '',
                        endDate: '',
                        description: ''
                    });
                }
            }
        });
    }
    
    // If still no experience found, try to extract from the entire text
    if (experience.length === 0) {
        // Look for job patterns in the entire text
        const jobPatterns = [
            /([A-Za-z\s]+Engineer)\s*[|@]\s*([A-Za-z\s]+)/gi,
            /([A-Za-z\s]+Developer)\s*[|@]\s*([A-Za-z\s]+)/gi,
            /([A-Za-z\s]+Manager)\s*[|@]\s*([A-Za-z\s]+)/gi
        ];
        
        jobPatterns.forEach(pattern => {
            const matches = text.matchAll(pattern);
            for (const match of matches) {
                if (match[1] && match[2]) {
                    experience.push({
                        title: match[1].trim(),
                        company: match[2].trim(),
                        startDate: '',
                        endDate: '',
                        description: ''
                    });
                }
            }
        });
    }
    
    return experience;
}

function parseJobBlock(block) {
    const job = {};
    
    // Extract job title and company from pattern like "Software Engineer| Pixako Technologies, Islamabad"
    const titleCompanyMatch = block.match(/^([A-Za-z\s]+)\|\s*([A-Za-z\s]+),\s*([A-Za-z\s]+)/);
    if (titleCompanyMatch) {
        job.title = titleCompanyMatch[1].trim();
        job.company = titleCompanyMatch[2].trim();
        job.location = titleCompanyMatch[3].trim();
    } else {
        // Fallback patterns
        const titleMatch = block.match(/^([A-Z][A-Za-z\s]+(?:Developer|Engineer|Manager|Designer|Analyst|Consultant|Specialist|Coordinator|Assistant|Director|Lead|Senior|Junior))/);
        if (titleMatch) job.title = titleMatch[1].trim();
        
        const companyMatch = block.match(/(?:at|with|@|\|)\s+([A-Z][A-Za-z\s&]+)/);
        if (companyMatch) job.company = companyMatch[1].trim();
    }
    
    // Extract dates - look for patterns like "(July 2024 – Present)"
    const dateMatch = block.match(/\(([A-Za-z]+\s+\d{4})\s*[–-]\s*([A-Za-z\s]+)\)/);
    if (dateMatch) {
        job.startDate = dateMatch[1].trim();
        job.endDate = dateMatch[2].trim();
    } else {
        // Alternative date patterns
        const altDateMatch = block.match(/(\d{4})\s*[-–]\s*(\d{4}|Present|Current)/);
        if (altDateMatch) {
            job.startDate = altDateMatch[1];
            job.endDate = altDateMatch[2];
        }
    }
    
    // Extract description - look for bullet points and other patterns
    const descMatch = block.match(/(?:•|\*|\-)\s*([^\n]+)/g);
    if (descMatch) {
        job.description = descMatch.map(d => d.replace(/^[•\*\-]\s*/, '')).join('\n');
    } else {
        // Look for description after job title/company
        const descAfterJob = block.match(/(?:[A-Za-z\s]+\|[A-Za-z\s]+,\s*[A-Za-z\s]+)\s*([\s\S]+?)(?=\n\n|\n[A-Z]|$)/);
        if (descAfterJob && descAfterJob[1].trim().length > 10) {
            job.description = descAfterJob[1].trim();
        }
        
        // Look for description patterns like "Responsible for..." or "Developed..."
        const responsibilityMatch = block.match(/(?:Responsible for|Developed|Created|Implemented|Managed|Led|Designed|Built|Maintained|Optimized|Improved)[^•\n]*/gi);
        if (responsibilityMatch) {
            job.description = responsibilityMatch.join('\n');
        }
        
        // Look for any text after the job title that looks like a description
        const anyDescMatch = block.match(/(?:[A-Za-z\s]+\|[A-Za-z\s]+,\s*[A-Za-z\s]+)\s*([\s\S]+?)(?=\nTechnologies?|$)/);
        if (anyDescMatch && anyDescMatch[1].trim().length > 20) {
            job.description = anyDescMatch[1].trim();
        }
        
        // Look for sentences that start with action verbs
        const actionVerbsMatch = block.match(/(?:Developed|Created|Built|Implemented|Designed|Managed|Led|Optimized|Improved|Maintained|Enhanced|Streamlined|Automated|Integrated|Deployed|Configured|Troubleshot|Resolved|Collaborated|Coordinated|Facilitated|Mentored|Trained|Documented|Analyzed|Researched|Evaluated|Planned|Organized|Supervised|Monitored)[^•\n]*/gi);
        if (actionVerbsMatch) {
            job.description = actionVerbsMatch.join('\n');
        }
    }
    
    // If still no description, try to extract all text after the job info until Technologies
    if (!job.description) {
        const fullDescMatch = block.match(/(?:[A-Za-z\s]+\|[A-Za-z\s]+,\s*[A-Za-z\s]+)\s*([\s\S]+?)(?=\nTechnologies?|$)/);
        if (fullDescMatch && fullDescMatch[1].trim().length > 10) {
            // Clean up the description by removing extra whitespace and newlines
            let desc = fullDescMatch[1].trim();
            desc = desc.replace(/\n+/g, '\n').replace(/\s+/g, ' ');
            job.description = desc;
        }
    }
    
    // Extract technologies if mentioned
    const techMatch = block.match(/Technologies?[:\-\s]+([A-Za-z\s,]+)/i);
    if (techMatch) {
        job.technologies = techMatch[1].trim();
    }
    
    return job;
}

function extractEducation(doc, text) {
    const education = [];
    const eduSections = text.split(/(?:EDUCATION|ACADEMIC|DEGREE)/i);
    
    if (eduSections.length > 1) {
        const eduText = eduSections[1];
        
        // Look for patterns like "COMSATS University Islamabad, Abbottabad Campus"
        const universityMatch = eduText.match(/([A-Z][A-Za-z\s]+University[^,]*),?\s*([A-Za-z\s]*Campus)?/);
        
        if (universityMatch) {
            const edu = {
                university: universityMatch[1].trim(),
                campus: universityMatch[2] ? universityMatch[2].trim() : '',
                degree: '',
                field: '',
                startDate: '',
                endDate: ''
            };
            
            // Extract degree information
            const degreeMatch = eduText.match(/BS\s+([A-Za-z\s]+)/i);
            if (degreeMatch) {
                edu.degree = 'BS ' + degreeMatch[1].trim();
                edu.field = degreeMatch[1].trim();
            }
            
            // Extract dates
            const dateMatch = eduText.match(/\((\d{4})-(\d{4})\)/);
            if (dateMatch) {
                edu.startDate = dateMatch[1];
                edu.endDate = dateMatch[2];
            }
            
            education.push(edu);
        } else {
            // Fallback to original parsing
            const eduBlocks = eduText.split(/(?=\d{4}|\b[A-Z][a-z]+ \d{4}\b)/);
            
            eduBlocks.forEach(block => {
                if (block.trim().length > 30) {
                    const edu = parseEducationBlock(block);
                    if (edu.degree) {
                        education.push(edu);
                    }
                }
            });
        }
    }
    
    return education;
}

function parseEducationBlock(block) {
    const edu = {};
    
    // Extract degree
    const degreeMatch = block.match(/(Bachelor|Master|PhD|BSc|MSc|MBA|Associate|Diploma)[\s\w]*/i);
    if (degreeMatch) edu.degree = degreeMatch[0];
    
    // Extract field
    const fieldMatch = block.match(/(?:in|of)\s+([A-Z][A-Za-z\s]+)/);
    if (fieldMatch) edu.field = fieldMatch[1].trim();
    
    // Extract university
    const uniMatch = block.match(/(?:from|at)\s+([A-Z][A-Za-z\s&]+)/);
    if (uniMatch) edu.university = uniMatch[1].trim();
    
    // Extract dates
    const dateMatch = block.match(/(\d{4})\s*[-–]\s*(\d{4}|Present|Current)/);
    if (dateMatch) {
        edu.startDate = dateMatch[1];
        edu.endDate = dateMatch[2];
    }
    
    return edu;
}

function extractSkills(doc, text) {
    const skills = [];
    
    // Find CORE SKILLS section
    const skillsMatch = text.match(/CORE SKILLS[:\-\s]+([\s\S]+?)(?=\n\n|\n[A-Z]{2,}|$)/i);
    if (skillsMatch) {
        const skillsText = skillsMatch[1];
        
        // Extract skills from different categories
        const programmingLanguagesMatch = skillsText.match(/Programming Languages?[:\-\s]+([A-Za-z\s,]+)/i);
        if (programmingLanguagesMatch) {
            const languages = programmingLanguagesMatch[1].split(',').map(s => s.trim()).filter(s => s.length > 0);
            skills.push(...languages);
        }
        
        const developerToolsMatch = skillsText.match(/Developer Tools?[:\-\s]+([A-Za-z\s,]+)/i);
        if (developerToolsMatch) {
            const tools = developerToolsMatch[1].split(',').map(s => s.trim()).filter(s => s.length > 0);
            skills.push(...tools);
        }
        
        const frameworksMatch = skillsText.match(/Frameworks?[:\-\s]+([A-Za-z\s,]+)/i);
        if (frameworksMatch) {
            const frameworks = frameworksMatch[1].split(',').map(s => s.trim()).filter(s => s.length > 0);
            skills.push(...frameworks);
        }
        
        const databasesMatch = skillsText.match(/Databases?[:\-\s]+([A-Za-z\s,]+)/i);
        if (databasesMatch) {
            const databases = databasesMatch[1].split(',').map(s => s.trim()).filter(s => s.length > 0);
            skills.push(...databases);
        }
        
        // Extract individual skills from the text
        const skillList = skillsText.split(/[,•\n]/).map(s => s.trim()).filter(s => s.length > 2);
        skills.push(...skillList);
    }
    
    // If no skills found in CORE SKILLS section, try alternative patterns
    if (skills.length === 0) {
        // Look for skills in the entire text
        const skillPatterns = [
            /(JavaScript|Python|Java|React|Node|Angular|Vue|SQL|MongoDB|AWS|Docker|Kubernetes|Git|HTML|CSS|PHP|C#|C\+\+|Ruby|Go|Rust|Swift|Kotlin|TypeScript|Django|Flask|Express|Spring|Laravel|WordPress|Shopify|SAP|Salesforce|Tableau|PowerBI|Excel|Photoshop|Illustrator|Figma|Sketch|Jira|Confluence|Slack|Zoom|Teams|PostgreSQL|VS-Code|Postman|Bootstrap|Tailwind|Rapid|API|Firebase|Android|MERN|REST|Sequelize|ORM|JWT|Authentication|CRUD|Formic|Yup|React|Routers|Props|State|Effect|Hooks|Express|APIs|Relationships|Operations|Models|Token|Security)/gi
        ];
        
        skillPatterns.forEach(pattern => {
            const matches = text.matchAll(pattern);
            for (const match of matches) {
                if (match[0] && match[0].length > 2) {
                    skills.push(match[0]);
                }
            }
        });
    }
    
    // Extract technical skills using NLP
    const technicalTerms = doc.match('(JavaScript|Python|Java|React|Node|Angular|Vue|SQL|MongoDB|AWS|Docker|Kubernetes|Git|HTML|CSS|PHP|C#|C\+\+|Ruby|Go|Rust|Swift|Kotlin|TypeScript|Django|Flask|Express|Spring|Laravel|WordPress|Shopify|SAP|Salesforce|Tableau|PowerBI|Excel|Photoshop|Illustrator|Figma|Sketch|Jira|Confluence|Slack|Zoom|Teams|PostgreSQL|VS-Code|Postman|Bootstrap|Tailwind|Rapid|API|Firebase|Android|Java|MERN|MongoDB|Express|React|Node|REST|API|Sequelize|ORM|JWT|Authentication|CRUD|MERN|STACK|Knowledge|Stream|FRONT-END|Formic|Yup|React|Routers|Props|State|Effect|Hooks|BACK-END|Node|Express|PostgreSQL|REST|APIs|Sequelize|ORM|Relationships|CRUD|Operations|User|Post|Follower|Following|Models|Authentication|JWT|Token|Security)').out('array');
    skills.push(...technicalTerms);
    
    return [...new Set(skills)]; // Remove duplicates
}

function extractProjects(doc, text) {
    const projects = [];
    console.log('Extracting projects from text...');
    
    const projectSections = text.split(/(?:PROJECTS|PORTFOLIO|WORKS)/i);
    
    if (projectSections.length > 1) {
        const projText = projectSections[1];
        console.log('Found PROJECTS section:', projText.substring(0, 200) + '...');
        
        // Split by project titles - look for patterns like "Digital Student Diary (FYP)"
        const projBlocks = projText.split(/(?=\n[A-Z][A-Za-z\s]+(?:\([A-Z]+\))?|\n[A-Z][A-Za-z\s]+\s*\|\s*SOURCE-CODE|\n•|\n\*)/);
        
        console.log('Found', projBlocks.length, 'project blocks');
        
        projBlocks.forEach((block, index) => {
            if (block.trim().length > 30) {
                console.log(`Processing project block ${index}:`, block.substring(0, 100) + '...');
                const project = parseProjectBlock(block);
                if (project.title) {
                    console.log('Extracted project:', project);
                    projects.push(project);
                }
            }
        });
    }
    
    // If no projects found in sections, try alternative patterns
    if (projects.length === 0) {
        const alternativePatterns = [
            /([A-Z][A-Za-z\s]+(?:\([A-Z]+\))?)[\s\S]*?Technologies?[:\-\s]+([A-Za-z\s,]+)/gi,
            /([A-Z][A-Za-z\s]+)[\s\S]*?Technologies?[:\-\s]+([A-Za-z\s,]+)/gi
        ];
        
        alternativePatterns.forEach(pattern => {
            const matches = text.matchAll(pattern);
            for (const match of matches) {
                if (match[1] && match[2]) {
                    projects.push({
                        title: match[1].trim(),
                        description: '',
                        technologies: match[2].trim()
                    });
                }
            }
        });
    }
    
    return projects;
}

function parseProjectBlock(block) {
    const project = {};
    console.log('Parsing project block:', block.substring(0, 100) + '...');
    
    // Extract project title - look for patterns like "Digital Student Diary (FYP)" or "Email App: Gmail Clone | SOURCE-CODE"
    const titleMatch = block.match(/^([A-Z][A-Za-z\s]+(?:\([A-Z]+\))?)/);
    if (titleMatch) {
        project.title = titleMatch[1].trim();
        console.log('Found title with pattern 1:', project.title);
    } else {
        // Look for patterns like "Email App: Gmail Clone | SOURCE-CODE"
        const sourceCodeMatch = block.match(/^([A-Z][A-Za-z\s]+:\s*[A-Z][A-Za-z\s]+)/);
        if (sourceCodeMatch) {
            project.title = sourceCodeMatch[1].trim();
            console.log('Found title with pattern 2:', project.title);
        } else {
            // Fallback pattern
            const fallbackTitleMatch = block.match(/^([A-Z][A-Za-z\s]+):/);
            if (fallbackTitleMatch) {
                project.title = fallbackTitleMatch[1].trim();
                console.log('Found title with fallback pattern:', project.title);
            }
        }
    }
    
    // Extract description - look for bullet points and other patterns
    const descMatch = block.match(/(?:•|\*|\-)\s*([^\n]+)/g);
    if (descMatch) {
        project.description = descMatch.map(d => d.replace(/^[•\*\-]\s*/, '')).join('\n');
        console.log('Found description with bullet points:', project.description);
    } else {
        // Look for description after project title
        const descAfterTitle = block.match(/(?:[A-Z][A-Za-z\s]+(?:\([A-Z]+\))?)\s*([\s\S]+?)(?=\nTechnologies?|$)/);
        if (descAfterTitle && descAfterTitle[1].trim().length > 10) {
            project.description = descAfterTitle[1].trim();
            console.log('Found description after title:', project.description);
        }
        
        // Look for description patterns like "Developed..." or "Created..."
        const developmentMatch = block.match(/(?:Developed|Created|Built|Implemented|Designed|Managed|Led|Optimized|Improved|Enhanced|Streamlined|Automated|Integrated|Deployed|Configured|Troubleshot|Resolved|Collaborated|Coordinated|Facilitated|Mentored|Trained|Documented|Analyzed|Researched|Evaluated|Planned|Organized|Supervised|Monitored)[^•\n]*/gi);
        if (developmentMatch) {
            project.description = developmentMatch.join('\n');
            console.log('Found description with action verbs:', project.description);
        }
        
        // Look for any text after the project title that looks like a description
        const anyDescMatch = block.match(/(?:[A-Z][A-Za-z\s]+(?:\([A-Z]+\))?)\s*([\s\S]+?)(?=\n[A-Z]|$)/);
        if (anyDescMatch && anyDescMatch[1].trim().length > 20) {
            project.description = anyDescMatch[1].trim();
            console.log('Found description with any text pattern:', project.description);
        }
    }
    
    // If still no description, try to extract all text after the title until Technologies
    if (!project.description) {
        const fullDescMatch = block.match(/(?:[A-Z][A-Za-z\s]+(?:\([A-Z]+\))?)\s*([\s\S]+?)(?=\nTechnologies?|$)/);
        if (fullDescMatch && fullDescMatch[1].trim().length > 10) {
            // Clean up the description by removing extra whitespace and newlines
            let desc = fullDescMatch[1].trim();
            desc = desc.replace(/\n+/g, '\n').replace(/\s+/g, ' ');
            project.description = desc;
        }
    }
    
    // Extract technologies
    const techMatch = block.match(/Technologies?[:\-\s]+([A-Za-z,\s]+)/i);
    if (techMatch) {
        project.technologies = techMatch[1].trim();
    }
    
    return project;
}

function extractCertifications(doc, text) {
    const certifications = [];
    const certSections = text.split(/(?:TRAINING & CERTIFICATION|CERTIFICATIONS|CERTIFICATES|AWARDS)/i);
    
    if (certSections.length > 1) {
        const certText = certSections[1];
        
        // Look for certification patterns like "MERN STACK Knowledge Stream"
        const certBlocks = certText.split(/(?=\n[A-Z][A-Za-z\s]+(?:Stream|Course|Training|Certification)|\n•|\n\*)/);
        
        certBlocks.forEach(block => {
            if (block.trim().length > 20) {
                const cert = parseCertificationBlock(block);
                if (cert.name) {
                    certifications.push(cert);
                }
            }
        });
    }
    
    // If no certifications found in sections, try alternative patterns
    if (certifications.length === 0) {
        const alternativePatterns = [
            /([A-Z][A-Za-z\s]+(?:Stream|Course|Training|Certification))[\s\S]*?\(([A-Za-z]+\s+\d{4}\s*–\s*[A-Za-z]+\s+\d{4})\)/gi,
            /([A-Z][A-Za-z\s]+(?:Stream|Course|Training|Certification))/gi
        ];
        
        alternativePatterns.forEach(pattern => {
            const matches = text.matchAll(pattern);
            for (const match of matches) {
                if (match[1]) {
                    const cert = {
                        name: match[1].trim(),
                        issuer: 'Training Program',
                        date: match[2] ? match[2].trim() : ''
                    };
                    certifications.push(cert);
                }
            }
        });
    }
    
    return certifications;
}

function parseCertificationBlock(block) {
    const cert = {};
    
    // Extract certification name - look for patterns like "MERN STACK Knowledge Stream"
    const nameMatch = block.match(/^([A-Z][A-Za-z\s]+(?:Stream|Course|Training|Certification))/);
    if (nameMatch) {
        cert.name = nameMatch[1].trim();
    } else {
        // Fallback pattern
        const fallbackNameMatch = block.match(/^([A-Z][A-Za-z\s]+):/);
        if (fallbackNameMatch) cert.name = fallbackNameMatch[1].trim();
    }
    
    // Extract issuer
    const issuerMatch = block.match(/(?:from|by)\s+([A-Z][A-Za-z\s&]+)/);
    if (issuerMatch) cert.issuer = issuerMatch[1].trim();
    
    // Extract date - look for patterns like "(Jan 2024 – April 2024)"
    const dateMatch = block.match(/\(([A-Za-z]+\s+\d{4})\s*[–-]\s*([A-Za-z]+\s+\d{4})\)/);
    if (dateMatch) {
        cert.date = dateMatch[1].trim() + ' - ' + dateMatch[2].trim();
    } else {
        // Alternative date patterns
        const altDateMatch = block.match(/(\d{4})/);
        if (altDateMatch) cert.date = altDateMatch[1];
    }
    
    return cert;
}

function showExtractedDataPreview(data) {
    let preview = 'Extracted Data Preview:\n\n';
    
    if (data.personal) {
        preview += 'Personal Info:\n';
        Object.entries(data.personal).forEach(([key, value]) => {
            if (value) preview += `${key}: ${value}\n`;
        });
        preview += '\n';
    }
    
    if (data.experience && data.experience.length > 0) {
        preview += `Experience (${data.experience.length} entries):\n`;
        data.experience.forEach((exp, i) => {
            preview += `${i + 1}. ${exp.title} at ${exp.company}\n`;
        });
        preview += '\n';
    }
    
    if (data.skills && data.skills.length > 0) {
        preview += `Skills (${data.skills.length}): ${data.skills.join(', ')}\n\n`;
    }
    
    alert(preview);
}

function applyExtractedDataToForm(data) {
    // Helper function to find section by heading text
    function findSectionByHeading(headingText) {
        const headings = document.querySelectorAll('h3, h4, h5');
        for (const heading of headings) {
            if (heading.textContent.includes(headingText)) {
                return heading.closest('.mb-4');
            }
        }
        return null;
    }
    
    // Apply personal information
    if (data.personal) {
        if (data.personal.name) document.getElementById('name').value = data.personal.name;
        if (data.personal.jobTitle) document.getElementById('jobTitle').value = data.personal.jobTitle;
        if (data.personal.email) document.getElementById('email').value = data.personal.email;
        if (data.personal.phone) document.getElementById('phone').value = data.personal.phone;
        if (data.personal.location) document.getElementById('location').value = data.personal.location;
        if (data.personal.summary) document.getElementById('summary').value = data.personal.summary;
        if (data.personal.linkedin) document.getElementById('linkedin').value = data.personal.linkedin;
        if (data.personal.github) document.getElementById('github').value = data.personal.github;
        if (data.personal.twitter) document.getElementById('twitter').value = data.personal.twitter;
        if (data.personal.portfolio) document.getElementById('portfolio').value = data.personal.portfolio;
    }
    
    // Apply skills with automatic section opening
    if (data.skills && data.skills.length > 0) {
        // Scroll to skills section
        const skillsSection = findSectionByHeading('Core Skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add highlight effect
            skillsSection.style.transition = 'all 0.3s ease';
            skillsSection.style.backgroundColor = '#e8f5e8';
            setTimeout(() => {
                skillsSection.style.backgroundColor = '';
            }, 2000);
        }
        
        // Clear existing skills and add new ones
        resumeData.skills = [];
        data.skills.forEach(skill => {
            if (skill && skill.trim()) {
                resumeData.skills.push(skill.trim());
            }
        });
        
        // Update skills display
        updateSkillsDisplay();
    }
    
    // Apply experience with automatic section opening
    if (data.experience && data.experience.length > 0) {
        // Scroll to experience section
        const experienceSection = findSectionByHeading('Work Experience');
        if (experienceSection) {
            experienceSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add highlight effect
            experienceSection.style.transition = 'all 0.3s ease';
            experienceSection.style.backgroundColor = '#e8f5e8';
            setTimeout(() => {
                experienceSection.style.backgroundColor = '';
            }, 2000);
        }
        
        // Clear existing experience and add new ones
        const experienceContainer = document.getElementById('experienceContainer');
        if (experienceContainer) {
            experienceContainer.innerHTML = '';
        }
        
        // Clear resumeData experience array
        resumeData.experience = [];
        
        data.experience.forEach((exp, index) => {
            // Add to resumeData
            resumeData.experience.push({
                companyname: exp.company || '',
                position: exp.title || '',
                startdate: exp.startDate || '',
                enddate: exp.endDate || '',
                description: exp.description || ''
            });
            
            // Add to DOM
            addExperience({
                companyname: exp.company || '',
                position: exp.title || '',
                startdate: exp.startDate || '',
                enddate: exp.endDate || '',
                description: exp.description || ''
            });
        });
    }
    
    // Apply education with automatic section opening
    if (data.education && data.education.length > 0) {
        // Scroll to education section
        const educationSection = findSectionByHeading('Education');
        if (educationSection) {
            educationSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add highlight effect
            educationSection.style.transition = 'all 0.3s ease';
            educationSection.style.backgroundColor = '#e8f5e8';
            setTimeout(() => {
                educationSection.style.backgroundColor = '';
            }, 2000);
        }
        
        // Clear existing education and add new ones
        const educationContainer = document.getElementById('educationContainer');
        if (educationContainer) {
            educationContainer.innerHTML = '';
        }
        
        // Clear resumeData education array
        resumeData.education = [];
        
        data.education.forEach((edu, index) => {
            // Add to resumeData
            resumeData.education.push({
                institution: edu.university || '',
                degree: edu.degree || '',
                field: edu.field || '',
                startdate: edu.startDate || '',
                enddate: edu.endDate || ''
            });
            
            // Add to DOM
            addEducation({
                institution: edu.university || '',
                degree: edu.degree || '',
                field: edu.field || '',
                startdate: edu.startDate || '',
                enddate: edu.endDate || ''
            });
        });
    }
    
    // Apply projects with automatic section opening
    if (data.projects && data.projects.length > 0) {
        // Scroll to projects section
        const projectsSection = findSectionByHeading('Projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add highlight effect
            projectsSection.style.transition = 'all 0.3s ease';
            projectsSection.style.backgroundColor = '#e8f5e8';
            setTimeout(() => {
                projectsSection.style.backgroundColor = '';
            }, 2000);
        }
        
        // Clear existing projects and add new ones
        const projectsContainer = document.getElementById('projectsContainer');
        if (projectsContainer) {
            projectsContainer.innerHTML = '';
        }
        
        // Clear resumeData projects array
        resumeData.projects = [];
        
        data.projects.forEach((proj, index) => {
            // Add to resumeData
            resumeData.projects.push({
                title: proj.title || '',
                description: proj.description || '',
                technologies: proj.technologies || ''
            });
            
            // Add to DOM
            addProject({
                title: proj.title || '',
                description: proj.description || '',
                technologies: proj.technologies || ''
            });
        });
    }
    
    // Apply certifications with automatic section opening
    if (data.certifications && data.certifications.length > 0) {
        // Scroll to certifications section
        const certificationsSection = findSectionByHeading('Courses & Certifications');
        if (certificationsSection) {
            certificationsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add highlight effect
            certificationsSection.style.transition = 'all 0.3s ease';
            certificationsSection.style.backgroundColor = '#e8f5e8';
            setTimeout(() => {
                certificationsSection.style.backgroundColor = '';
            }, 2000);
        }
        
        // Clear existing certifications and add new ones
        const certificationsContainer = document.getElementById('certificationsContainer');
        if (certificationsContainer) {
            certificationsContainer.innerHTML = '';
        }
        
        // Clear resumeData certifications array
        resumeData.certifications = [];
        
        data.certifications.forEach((cert, index) => {
            // Add to resumeData
            resumeData.certifications.push({
                name: cert.name || '',
                issuer: cert.issuer || '',
                date: cert.date || ''
            });
            
            // Add to DOM
            addCertification({
                name: cert.name || '',
                issuer: cert.issuer || '',
                date: cert.date || ''
            });
        });
    }
    
    // Trigger form update and save
    setTimeout(() => {
        updatePreview();
        saveResumeData();
        
        // Create success message showing what was filled
        const filledSections = [];
        if (data.personal) filledSections.push('Personal Information');
        if (data.skills && data.skills.length > 0) filledSections.push('Skills');
        if (data.experience && data.experience.length > 0) filledSections.push('Experience');
        if (data.education && data.education.length > 0) filledSections.push('Education');
        if (data.projects && data.projects.length > 0) filledSections.push('Projects');
        if (data.certifications && data.certifications.length > 0) filledSections.push('Certifications');
        
        const message = `Resume data applied successfully! Filled sections: ${filledSections.join(', ')}. All sections have been automatically scrolled to and highlighted.`;
        showNotification(message, 'success');
    }, 500);
}

function fillExperienceEntry(index, exp) {
    const container = document.getElementById('experienceContainer');
    const entries = container.querySelectorAll('.experience-item');
    if (entries[index]) {
        const entry = entries[index];
        const inputs = entry.querySelectorAll('input, textarea');
        
        // Map the data to the correct form fields
        if (exp.company) inputs[0].value = exp.company; // Company Name
        if (exp.title) inputs[1].value = exp.title; // Position
        if (exp.startDate) inputs[2].value = exp.startDate; // Start Date
        if (exp.endDate) inputs[3].value = exp.endDate; // End Date
        if (exp.description) inputs[4].value = exp.description; // Description
    }
}

function fillEducationEntry(index, edu) {
    const container = document.getElementById('educationContainer');
    const entries = container.querySelectorAll('.education-item');
    if (entries[index]) {
        const entry = entries[index];
        const inputs = entry.querySelectorAll('input');
        
        // Map the data to the correct form fields
        if (edu.university) inputs[0].value = edu.university; // Institution
        if (edu.degree) inputs[1].value = edu.degree; // Degree
        if (edu.startDate) inputs[2].value = edu.startDate; // Start Date
        if (edu.endDate) inputs[3].value = edu.endDate; // End Date
    }
}

function fillProjectEntry(index, proj) {
    const container = document.getElementById('projectsContainer');
    const entries = container.querySelectorAll('.project-item');
    if (entries[index]) {
        const entry = entries[index];
        const inputs = entry.querySelectorAll('input, textarea');
        
        // Map the data to the correct form fields
        if (proj.title) inputs[0].value = proj.title; // Project Title
        if (proj.link) inputs[1].value = proj.link; // Project URL
        if (proj.description) inputs[2].value = proj.description; // Project Description
    }
}

function fillCertificationEntry(index, cert) {
    const container = document.getElementById('certificationsContainer');
    const entries = container.querySelectorAll('.certification-item');
    if (entries[index]) {
        const entry = entries[index];
        const inputs = entry.querySelectorAll('input');
        
        // Map the data to the correct form fields
        if (cert.name) inputs[0].value = cert.name; // Certification Title
        if (cert.issuer) inputs[1].value = cert.issuer; // Issuing Organization
        if (cert.date) inputs[2].value = cert.date; // Date
        if (cert.credentialId) inputs[3].value = cert.credentialId; // Credential ID
        if (cert.url) inputs[4].value = cert.url; // Credential URL
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function extractSkillsFromText(text) {
    const skills = [];
    
    // Technical skills patterns
    const technicalSkills = [
        'JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin',
        'React', 'Angular', 'Vue', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'Laravel',
        'HTML', 'CSS', 'Sass', 'Less', 'TypeScript', 'Bootstrap', 'Tailwind', 'Material-UI',
        'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'AWS', 'Azure', 'GCP',
        'Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab', 'Jenkins', 'Jira', 'Confluence',
        'Photoshop', 'Illustrator', 'Figma', 'Sketch', 'Adobe XD', 'InDesign',
        'Excel', 'PowerPoint', 'Word', 'Google Sheets', 'Tableau', 'Power BI',
        'Salesforce', 'SAP', 'Shopify', 'WordPress', 'Magento', 'WooCommerce'
    ];
    
    technicalSkills.forEach(skill => {
        if (text.toLowerCase().includes(skill.toLowerCase())) {
            skills.push(skill);
        }
    });
    
    // Soft skills patterns
    const softSkills = [
        'Leadership', 'Communication', 'Teamwork', 'Problem Solving', 'Critical Thinking',
        'Time Management', 'Project Management', 'Agile', 'Scrum', 'Kanban',
        'Customer Service', 'Sales', 'Marketing', 'Research', 'Analysis',
        'Creativity', 'Innovation', 'Adaptability', 'Flexibility', 'Organization'
    ];
    
    softSkills.forEach(skill => {
        if (text.toLowerCase().includes(skill.toLowerCase())) {
            skills.push(skill);
        }
    });
    
    return [...new Set(skills)];
}

function extractExperienceAlternative(text) {
    const experience = [];
    
    // Look for job patterns in the entire text
    const jobPatterns = [
        /([A-Z][a-z]+ (Developer|Engineer|Manager|Designer|Analyst|Consultant|Specialist|Coordinator|Assistant|Director|Lead|Senior|Junior))/g,
        /([A-Z][a-z]+ [A-Z][a-z]+ (Developer|Engineer|Manager|Designer|Analyst|Consultant))/g,
        /(Software Engineer|Web Developer|Frontend Developer|Backend Developer|Full Stack Developer|Data Scientist|Product Manager|Project Manager)/g
    ];
    
    jobPatterns.forEach(pattern => {
        const matches = text.match(pattern);
        if (matches) {
            matches.forEach(match => {
                if (match.trim().length > 5) {
                    experience.push({
                        title: match.trim(),
                        company: 'Extracted from resume',
                        startDate: '',
                        endDate: '',
                        description: ''
                    });
                }
            });
        }
    });
    
    return experience;
}

// Test function for SweetAlert2 (can be called from console)
window.testSweetAlert = () => {
    console.log('Testing SweetAlert2...');
    if (typeof Swal === 'undefined') {
        console.error('SweetAlert2 not loaded');
        alert('SweetAlert2 is not loaded');
        return;
    }
    
    SweetAlert.resumeReset().then((result) => {
        console.log('Test result:', result);
        if (result.isConfirmed) {
            console.log('Test confirmed');
        }
    }).catch((error) => {
        console.error('Test error:', error);
    });
};
