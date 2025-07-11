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
            confirmButtonColor: '#3085d6',
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
            confirmButtonColor: '#3085d6',
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
            confirmButtonColor: '#3085d6',
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
            confirmButtonColor: '#3085d6',
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
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#6c757d',
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
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: {
                popup: 'swal2-custom-popup',
                title: 'swal2-custom-title',
                content: 'swal2-custom-content'
            },
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
                popup: 'swal2-custom-popup'
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
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#6c757d',
            background: SweetAlert.config.background,
            backdrop: SweetAlert.config.backdrop,
            customClass: {
                popup: 'swal2-custom-popup',
                confirmButton: 'swal2-custom-confirm',
                cancelButton: 'swal2-custom-cancel',
                title: 'swal2-custom-title',
                content: 'swal2-custom-content'
            },
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
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#6c757d',
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
                popup: 'swal2-custom-popup',
                title: 'swal2-custom-title',
                content: 'swal2-custom-content',
                htmlContainer: 'swal2-progress-container'
            }
        });
    },

    // Custom HTML content
    html: (title, htmlContent, options = {}) => {
        return Swal.fire({
            title: title,
            html: htmlContent,
            confirmButtonColor: '#3085d6',
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
    // Find elements with more flexible selection
    const resumeFileInput = document.querySelector('#resumeFile, [name="resumeFile"]');
    const extractDataBtn = document.querySelector('#extractDataBtn, [data-action="extract-data"]');
    const extractionStatus = document.querySelector('#extractionStatus, [data-status="extraction"]');
    const extractionMessage = document.querySelector('#extractionMessage, [data-message="extraction"]');
    const extractionResults = document.querySelector('#extractionResults, [data-results="extraction"]');

    // Create an object to track element existence
    const elementsFound = {
        resumeFileInput: !!resumeFileInput,
        extractDataBtn: !!extractDataBtn,
        extractionStatus: !!extractionStatus,
        extractionMessage: !!extractionMessage,
        extractionResults: !!extractionResults
    };

    // Log which elements are missing
    const missingElements = Object.entries(elementsFound)
        .filter(([key, value]) => !value)
        .map(([key]) => key);

    if (missingElements.length > 0) {
        console.warn(`Resume file upload elements not found: ${missingElements.join(', ')}`);
        return; // Exit if critical elements are missing
    }

    // Proceed with event listeners only if all elements are found
    resumeFileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            extractionStatus.textContent = 'Processing...';
            extractionStatus.className = 'text-info';
            extractionMessage.textContent = '';
            extractionResults.innerHTML = '';

            // Determine file type and extract text
            let extractedText;
            if (file.type === 'application/pdf') {
                extractedText = await extractPDFText(file);
            } else if (
                file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
                file.type === 'application/msword'
            ) {
                extractedText = await extractWordText(file);
            } else {
                extractedText = await extractTextFromFile(file);
            }

            // Parse resume with AI
            const parsedData = await parseResumeWithAI(extractedText);

            // Show extracted data preview
            showExtractedDataPreview(parsedData);

            extractionStatus.textContent = 'Extraction Successful';
            extractionStatus.className = 'text-success';
            } catch (error) {
            console.error('Resume extraction error:', error);
            extractionStatus.textContent = 'Extraction Failed';
            extractionStatus.className = 'text-danger';
            extractionMessage.textContent = `Error: ${error.message}`;
        }
    });

    // Extract data button event
    extractDataBtn.addEventListener('click', () => {
        const extractedData = formatResumeDataForCanva();
        extractionResults.innerHTML = `<pre>${JSON.stringify(extractedData, null, 2)}</pre>`;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing resume builder...');
    initResumeFileUpload();
    initAutoScroll();
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
        SweetAlert.warning('Offline Mode', 'You are offline. Some features may not work properly.');
    }
}

window.addEventListener('online', () => {
            SweetAlert.success('Back Online', 'You are back online!');
});

window.addEventListener('offline', () => {
            SweetAlert.warning('Offline Mode', 'You are offline. Some features may not work properly.');
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
    // Initialize resumeData if not exists
    if (!resumeData) {
        resumeData = {};
    }
    
    // Ensure personal info structure with default empty strings
    resumeData.personalInfo = resumeData.personalInfo || {};
    const personalInfoFields = [
        'name', 'jobTitle', 'email', 'phone', 'location', 
        'summary', 'github', 'linkedin', 'twitter', 
        'portfolio', 'profileImage'
    ];
    
    personalInfoFields.forEach(field => {
        if (!(field in resumeData.personalInfo)) {
            resumeData.personalInfo[field] = '';
        }
    });
    
    // Ensure arrays exist and are initialized
    const arrayFields = [
        'experience', 'education', 
        'skills', 'projects', 'certifications'
    ];
    
    arrayFields.forEach(field => {
        // If field doesn't exist or is not an array, set to empty array
        if (!Array.isArray(resumeData[field])) {
            resumeData[field] = [];
        }
    });
    
    // Ensure template is set
    resumeData.template = resumeData.template || 'modern';
    
    // Log the final structure for debugging
    console.log('Ensured Resume Data Structure:', resumeData);
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
        
        // Only show success alert if not auto-saving and it's a manual save
        if (!window.isAutoSaving && window.showSaveAlert) {
            SweetAlert.resumeSaved();
            window.showSaveAlert = false; // Reset the flag
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
    console.log('Loading saved resume...');
    try {
        updateSaveStatus('loading');
        const savedData = localStorage.getItem('resumeData');
        
        console.group('Load Saved Resume - Detailed Logging');
        console.log('Raw saved data from localStorage:', savedData);
        
        // Initialize resumeData to a safe default structure
        resumeData = {
            experience: [],
            education: [],
            skills: [],
            projects: [],
            certifications: [],
            personalInfo: {},
            template: null
        };

        if (savedData) {
            try {
                // Safely parse JSON with comprehensive error handling
                const parsedData = JSON.parse(savedData);
                
                console.log('Parsed data:', parsedData);
                
                // Validate and merge parsed data with default structure
                if (typeof parsedData === 'object' && parsedData !== null) {
                    // Merge each section with type and content validation
                    const sections = ['experience', 'education', 'skills', 'projects', 'certifications', 'personalInfo', 'template'];
                    
                    sections.forEach(section => {
                        // Validate each section
                        if (parsedData[section]) {
                            if (Array.isArray(parsedData[section])) {
                                // For array sections, filter out invalid entries
                                resumeData[section] = parsedData[section].filter(entry => 
                                    entry !== null && 
                                    entry !== undefined && 
                                    typeof entry === 'object'
                                );
                            } else if (section === 'personalInfo') {
                                // For personalInfo, merge only valid string/object properties
                                resumeData[section] = {};
                                Object.keys(parsedData[section] || {}).forEach(key => {
                                    const value = parsedData[section][key];
                                    if (value !== null && value !== undefined) {
                                        resumeData[section][key] = value;
                                    }
                                });
                            } else if (section === 'template') {
                                // For template, ensure it's a valid string or null
                                resumeData[section] = typeof parsedData[section] === 'string' 
                                    ? parsedData[section] 
                                    : null;
                            }
                        }
                    });
                }
                
                console.log('Merged resumeData:', resumeData);
            } catch (parseError) {
                console.error('Error parsing saved resume data:', parseError);
                // Keep default resumeData structure
            }
        } else {
            console.log('No saved resume data found, using default structure');
        }
        
        // Ensure data structure is complete and valid
        try {
            ensureDataStructure();
        } catch (structureError) {
            console.error('Error ensuring data structure:', structureError);
        }
        
        console.log('Final resumeData before updates:', resumeData);
        console.groupEnd();
        
        // Update form and preview with additional error handling
        try {
            updateFormWithSavedData();
        } catch (formUpdateError) {
            console.error('Error updating form with saved data:', formUpdateError);
        }
        
        try {
            updatePreview();
        } catch (previewUpdateError) {
            console.error('Error updating preview:', previewUpdateError);
        }
        
        console.log('Resume data loaded successfully');
        updateSaveStatus('saved');
    } catch (error) {
        console.error('Comprehensive error loading saved resume:', error);
        
        // Fallback to default state
        resumeData = {
            experience: [],
            education: [],
            skills: [],
            projects: [],
            certifications: [],
            personalInfo: {},
            template: null
        };
        
        try {
        ensureDataStructure();
        } catch (structureError) {
            console.error('Error in fallback data structure:', structureError);
        }
        
        // Show user-friendly error
        SweetAlert.warning('Load Error', 'Could not load your previous resume. Starting with a fresh form.');
        
        updateSaveStatus('error');
    }
}

// Update form with saved data
function updateFormWithSavedData() {
    console.group('Updating Form with Saved Data');
    console.log('Current resumeData:', resumeData);

    // Ensure resumeForm exists
    const resumeForm = document.getElementById('resumeForm');
    if (!resumeForm) {
        console.warn('Resume form not found');
        console.groupEnd();
        return;
    }
    
    // Update personal info
    try {
        const personalInfoFields = [
            'name', 'jobTitle', 'email', 'phone', 'location', 
            'summary', 'github', 'linkedin', 'twitter', 'portfolio'
        ];

        personalInfoFields.forEach(field => {
            const input = resumeForm.querySelector(`[id="${field}"], [name="${field}"]`);
            if (input) {
                const value = resumeData.personalInfo?.[field] || '';
                input.value = value;
                console.log(`Set ${field} to:`, value);
            } else {
                console.warn(`Input for ${field} not found`);
            }
        });
    } catch (error) {
        console.error('Error updating personal info:', error);
    }
    
    // Update experience
    try {
    const experienceContainer = document.getElementById('experienceContainer');
    if (experienceContainer) {
            experienceContainer.innerHTML = ''; // Clear existing entries
            
            // Ensure experience is an array
            const experiences = Array.isArray(resumeData.experience) 
                ? resumeData.experience 
                : [];
            
            experiences.forEach((exp, index) => {
            console.log(`Adding experience ${index}:`, exp);
            addExperience(exp);
        });
        } else {
            console.warn('Experience container not found');
        }
    } catch (error) {
        console.error('Error updating experience:', error);
    }
    
    // Update education
    try {
    const educationContainer = document.getElementById('educationContainer');
    if (educationContainer) {
            educationContainer.innerHTML = ''; // Clear existing entries
            
            // Ensure education is an array
            const educations = Array.isArray(resumeData.education) 
                ? resumeData.education 
                : [];
            
            educations.forEach((edu, index) => {
            console.log(`Adding education ${index}:`, edu);
            addEducation(edu);
        });
        } else {
            console.warn('Education container not found');
        }
    } catch (error) {
        console.error('Error updating education:', error);
    }
    
    // Update skills
    try {
    updateSkillsDisplay();
    } catch (error) {
        console.error('Error updating skills:', error);
    }
    
    // Update projects
    try {
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer) {
            projectsContainer.innerHTML = ''; // Clear existing entries
            
            // Ensure projects is an array
            const projects = Array.isArray(resumeData.projects) 
                ? resumeData.projects 
                : [];
            
            projects.forEach((proj, index) => {
            console.log(`Adding project ${index}:`, proj);
            addProject(proj);
        });
        } else {
            console.warn('Projects container not found');
        }
    } catch (error) {
        console.error('Error updating projects:', error);
    }
    
    // Update certifications
    try {
        const certificationsContainer = document.getElementById('certificationsContainer');
        if (certificationsContainer) {
            certificationsContainer.innerHTML = ''; // Clear existing entries
            
            // Ensure certifications is an array
            const certifications = Array.isArray(resumeData.certifications) 
                ? resumeData.certifications 
                : [];
            
            certifications.forEach((cert, index) => {
                console.log(`Adding certification ${index}:`, cert);
                addCertification(cert);
            });
        } else {
            console.warn('Certifications container not found');
        }
    } catch (error) {
        console.error('Error updating certifications:', error);
    }
    
    // Update profile image
    try {
    updateProfileImageDisplay();
    } catch (error) {
        console.error('Error updating profile image:', error);
    }
    
    // Update template selection
    try {
    updateTemplateSelection();
    } catch (error) {
        console.error('Error updating template selection:', error);
    }
    
    console.log('Form update completed');
    console.groupEnd();
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

// Update the generatePDF function to use html2pdf.js
async function generatePDF() {
    try {
        SweetAlert.loading('Generating PDF', 'Please wait while we generate your resume PDF...');
        const resumePreview = document.getElementById('resumePreview');
        if (!resumePreview) {
            throw new Error('Resume preview element not found in the document');
        }
        // Set options for html2pdf
        const opt = {
            margin:       0,
            filename:     `resume-${resumeData.template || 'template'}.pdf`,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        // Use html2pdf to generate and save the PDF
        await html2pdf().set(opt).from(resumePreview).save();
        SweetAlert.success('PDF Generated!', 'Your resume PDF has been generated and downloaded successfully.');
    } catch (error) {
        console.error('Error generating PDF:', error);
        SweetAlert.error('PDF Error', 'Failed to generate PDF. Please try again.');
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
        // Silent clear - no alert needed
        console.log('Resume data cleared');
    } catch (error) {
        console.error('Error clearing resume data:', error);
        SweetAlert.error('Clear Error', 'Failed to clear resume data. Please try again.');
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
        SweetAlert.success('Export Successful', 'Resume data has been exported successfully.');
    } catch (error) {
        console.error('Error exporting resume data:', error);
        SweetAlert.error('Export Error', 'Failed to export resume data. Please try again.');
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
                SweetAlert.success('Import Successful', 'Resume data has been imported successfully.');
            } catch (error) {
                SweetAlert.error('Invalid File', 'Please select a valid resume data file.');
            }
        };
        reader.readAsText(file);
    } catch (error) {
        console.error('Error importing resume data:', error);
        SweetAlert.error('Import Error', 'Failed to import resume data. Please try again.');
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
                        SweetAlert.error('File Too Large', 'Image size must be less than 2MB.');
                        return;
                    }

                    // Validate file type
                    if (!file.type.startsWith('image/')) {
                        SweetAlert.error('Invalid File Type', 'Please select a valid image file.');
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
    
    // Ensure resumeData.experience array exists and has the correct length
    if (!resumeData.experience) {
        resumeData.experience = [];
    }
    
    // Create or update the experience entry
    if (!resumeData.experience[index]) {
        resumeData.experience[index] = {};
    }

    // Add event listeners to update resumeData
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const field = input.placeholder.toLowerCase().replace(/\s+/g, '');
        resumeData.experience[index][field] = input.value;
            saveResumeData();
            updatePreview();
        });
    });

    // Remove button listener
    const removeBtn = experienceElement.querySelector('.remove-item');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            // Remove the experience entry from resumeData
            resumeData.experience.splice(index, 1);
        experienceElement.remove();
        saveResumeData();
            updatePreview();
    });
    }
}

function setupEducationListeners(educationElement) {
    const inputs = educationElement.querySelectorAll('input, textarea');
    const index = Array.from(educationElement.parentElement.children).indexOf(educationElement);
    
    // Ensure resumeData.education array exists and has the correct length
    if (!resumeData.education) {
        resumeData.education = [];
    }
    
    // Create or update the education entry
    if (!resumeData.education[index]) {
        resumeData.education[index] = {};
    }

    // Add event listeners to update resumeData
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const field = input.placeholder.toLowerCase().replace(/\s+/g, '');
        resumeData.education[index][field] = input.value;
            saveResumeData();
            updatePreview();
        });
    });

    // Remove button listener
    const removeBtn = educationElement.querySelector('.remove-item');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            // Remove the education entry from resumeData
            resumeData.education.splice(index, 1);
        educationElement.remove();
        saveResumeData();
            updatePreview();
    });
    }
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
    // First, debug the entire resumeData
    debugResumeData();

    const { name, jobTitle, email, phone, location, summary, github, linkedin, twitter, portfolio } = resumeData.personalInfo || {};
    
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
                
                ${safelyGenerateSection('Experience', generateExperienceHTML)}
                ${safelyGenerateSection('Projects', generateProjectsHTML)}
                
                ${resumeData.skills && resumeData.skills.length > 0 ? `
                    <section class="resume-section">
                        <h2>Core Skills</h2>
                        <div class="skills-container">
                            ${resumeData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </section>
                    ` : ''}
                
                ${safelyGenerateSection('Certifications', generateCertificationsHTML)}
                ${safelyGenerateSection('Education', generateEducationHTML)}
            </div>
        `;
    }
    
    return html;
}

// Generate experience HTML
function generateExperienceHTML() {
    // Comprehensive debugging for experience data
    console.group('Generate Experience HTML - Detailed Debug');
    console.log('Full resumeData object:', JSON.parse(JSON.stringify(resumeData)));
    
    // Check if resumeData exists
    if (!resumeData) {
        console.error('resumeData is undefined or null');
        console.groupEnd();
        return '';
    }

    // Ensure experience data exists and is an array
    if (!resumeData.experience || !Array.isArray(resumeData.experience)) {
        console.warn('No experience data found or not an array', {
            resumeData: !!resumeData,
            experience: resumeData.experience,
            experienceType: typeof resumeData.experience,
            experienceIsArray: Array.isArray(resumeData.experience)
        });
        console.groupEnd();
        return '';
    }

    // Log raw experience entries
    console.log('Raw experience entries:', resumeData.experience);

    // Filter out null or invalid entries with extremely defensive validation
    const validExperiences = resumeData.experience.filter((exp, index) => {
        // Extremely detailed validation logging
        console.log(`Validating experience entry ${index}:`, exp);
        
        // Check if exp is a non-null object
        if (exp === null || exp === undefined) {
            console.warn(`Experience entry ${index} is null or undefined`);
            return false;
        }

        // Ensure exp is an object
        if (typeof exp !== 'object') {
            console.warn(`Experience entry ${index} is not an object`, {
                type: typeof exp,
                value: exp
            });
            return false;
        }

        // Check for meaningful fields with type validation
        const hasValidPosition = exp.position && typeof exp.position === 'string';
        const hasValidCompanyName = exp.companyname && typeof exp.companyname === 'string';
        
        const isValid = hasValidPosition || hasValidCompanyName;
        
        if (!isValid) {
            console.warn(`Experience entry ${index} failed validation`, {
                position: exp.position,
                companyName: exp.companyname,
                hasValidPosition,
                hasValidCompanyName
            });
        }
        
        return isValid;
    });

    // Log validation results
    console.log('Validated experience entries:', validExperiences);

    if (validExperiences.length === 0) {
        console.warn('No valid experience entries after filtering', {
            originalEntries: resumeData.experience
        });
        console.groupEnd();
        return '';
    }
    
    // Generate HTML with additional safety checks
    const experienceHTML = `
                    <section class="resume-section">
        <h2>Professional Experience</h2>
        <div class="experience-list">
            ${validExperiences.map((exp, index) => {
                try {
                    // Extremely defensive handling of each field
                    const position = (exp?.position || 'Position Not Specified').toString().trim();
                    const companyName = (exp?.companyname || 'Company Not Specified').toString().trim();
                    const startDate = (exp?.startdate || 'Start Date Not Specified').toString().trim();
                    const endDate = (exp?.enddate || 'Present').toString().trim();
                    const description = (exp?.description || '').toString().trim();
                    
                    return `
                    <div class="experience-item">
                        <h3>${position} at ${companyName}</h3>
                        <p class="date">${startDate} - ${endDate}</p>
                        ${description ? formatDescriptionWithBullets(description) : ''}
            </div>
        `;
                } catch (htmlGenerationError) {
                    console.error(`Error generating HTML for experience entry ${index}:`, htmlGenerationError);
                    return ''; // Skip this entry if HTML generation fails
                }
            }).join('')}
                        </div>
                    </section>
    `;

    console.log('Generated Experience HTML:', experienceHTML);
    console.groupEnd();
    
    return experienceHTML;
}

// Generate education HTML
function generateEducationHTML() {
    // Log the entire resumeData for debugging
    console.log('Resume Data for Education:', resumeData);

    // Ensure education data exists and is an array
    if (!resumeData || !resumeData.education || !Array.isArray(resumeData.education)) {
        console.warn('No education data found', {
            resumeData: !!resumeData,
            education: resumeData?.education,
            isArray: Array.isArray(resumeData?.education)
        });
        return '';
    }
    
    // Filter out null or invalid entries
    const validEducations = resumeData.education.filter(edu => {
        const isValid = edu && typeof edu === 'object' && (edu.degree || edu.institution);
        if (!isValid) {
            console.warn('Invalid education entry:', edu);
        }
        return isValid;
    });

    if (validEducations.length === 0) {
        console.warn('No valid education entries', {
            originalEntries: resumeData.education
        });
        return '';
    }
    
    return `
    <section class="resume-section">
        <h2>Education</h2>
        <div class="education-list">
            ${validEducations.map(edu => {
                // Safely handle missing or undefined fields
                const degree = (edu.degree || 'Degree Not Specified').trim();
                const institution = (edu.institution || 'Institution Not Specified').trim();
                const startDate = (edu.startdate || 'Start Date Not Specified').trim();
                const endDate = (edu.enddate || 'Present').trim();
                const description = (edu.description || '').trim();
                
                return `
        <div class="education-item">
                    <h3>${degree} at ${institution}</h3>
                    <p class="date">${startDate} - ${endDate}</p>
                    ${description ? formatDescriptionWithBullets(description) : ''}
        </div>
                `;
            }).join('')}
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
    const requiredFields = document.querySelectorAll('#resumeForm .required');
    const experienceEntries = document.querySelectorAll('#experienceContainer .experience-entry');
    const educationEntries = document.querySelectorAll('#educationContainer .education-entry');
    const skillTags = document.querySelectorAll('#skillTags .skill-tag');
    const templateSelected = document.querySelector('.template-selection .btn-primary');

    let completedFields = 0;
    const totalFields = 10; // Base fields + sections

    // Check required personal info fields
    requiredFields.forEach(field => {
        if (field.value.trim() !== '') {
            completedFields++;
        }
    });

    // Check experience entries
    if (experienceEntries.length > 0) {
        completedFields++;
    }

    // Check education entries
    if (educationEntries.length > 0) {
        completedFields++;
    }

    // Check skills
    if (skillTags.length >= 3) {
        completedFields++;
    }

    // Check template selection
    if (templateSelected) {
        completedFields++;
    }

    // Calculate progress percentage
    const progressPercentage = Math.min(Math.round((completedFields / totalFields) * 100), 100);

    // Update progress bar
    const progressBar = document.getElementById('formProgress');
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.setAttribute('aria-valuenow', progressPercentage);
        progressBar.textContent = `${progressPercentage}%`;

        // Add color classes based on progress
        progressBar.classList.remove('bg-success', 'bg-warning', 'bg-info');
        if (progressPercentage < 30) {
            progressBar.classList.add('bg-warning');
        } else if (progressPercentage < 70) {
            progressBar.classList.add('bg-info');
        } else {
            progressBar.classList.add('bg-success');
        }
    }

    // Show/hide view resume button
    const viewResumeBtn = document.getElementById('viewResume');
    if (viewResumeBtn) {
        viewResumeBtn.style.display = progressPercentage === 100 ? 'inline-block' : 'none';
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
    
    // Collect validation errors
    const errors = [];
    
    // Validate experience
    if (resumeData.experience.length === 0) {
        errors.push('Please add at least one work experience entry');
        isValid = false;
    }
    
    // Validate education
    if (resumeData.education.length === 0) {
        errors.push('Please add at least one education entry');
        isValid = false;
    }
    
    // Validate skills
    if (resumeData.skills.length < 3) {
        errors.push('Please add at least 3 skills');
        isValid = false;
    }
    
    // Validate template selection
    if (!resumeData.template) {
        errors.push('Please select a resume template');
        isValid = false;
    }
    
    // Show validation errors if any
    if (errors.length > 0) {
        SweetAlert.warning('Form Validation', errors.join('\n'));
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
                        SweetAlert.success('Copied!', 'Resume data has been copied to clipboard.');
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                        SweetAlert.error('Copy Failed', 'Failed to copy text to clipboard.');
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
    
    // Phone extraction - more robust patterns
    const phonePatterns = [
        /(?:Phone|Tel|Mobile|Contact)[:\-\s]*((?:\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/i,
        /(\+\d{1,3}[-.\s]?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4})/,
        /\b(?:\+\d{1,3}[-.\s]?)?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/
    ];
    
    for (const pattern of phonePatterns) {
        const match = text.match(pattern);
        if (match) {
            // Clean up phone number
            personal.phone = match[1].replace(/[^\d+]/g, '');
            break;
        }
    }
    
    // LinkedIn extraction - more comprehensive patterns
    const linkedinPatterns = [
        /LinkedIn[:\-\s]*(?:Profile)?[:\-\s]*(https?:\/\/(?:www\.)?linkedin\.com\/in\/[A-Za-z0-9-_]+)/i,
        /linkedin\.com\/in\/([A-Za-z0-9-_]+)/i,
        /(?:LinkedIn|LI)[:\-\s]*([A-Za-z0-9-_]+)/i
    ];
    
    for (const pattern of linkedinPatterns) {
        const match = text.match(pattern);
        if (match) {
            let linkedin = match[1];
            // Ensure full URL
            if (!linkedin.startsWith('http')) {
                linkedin = `https://linkedin.com/in/${linkedin}`;
            }
            personal.linkedin = linkedin;
            break;
        }
    }
    
    // GitHub extraction - more comprehensive patterns
    const githubPatterns = [
        /GitHub[:\-\s]*(?:Profile)?[:\-\s]*(https?:\/\/(?:www\.)?github\.com\/[A-Za-z0-9-_]+)/i,
        /github\.com\/([A-Za-z0-9-_]+)/i,
        /(?:GitHub|GH)[:\-\s]*([A-Za-z0-9-_]+)/i
    ];
    
    for (const pattern of githubPatterns) {
        const match = text.match(pattern);
        if (match) {
            let github = match[1];
            // Ensure full URL
            if (!github.startsWith('http')) {
                github = `https://github.com/${github}`;
            }
            personal.github = github;
            break;
        }
    }
    
    // Portfolio/Website extraction
    const portfolioPatterns = [
        /(?:Portfolio|Website|Personal Site)[:\-\s]*(https?:\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,})/i,
        /(?:Portfolio|Website)[:\-\s]*([A-Za-z0-9.-]+\.[A-Za-z]{2,})/i
    ];
    
    for (const pattern of portfolioPatterns) {
        const match = text.match(pattern);
        if (match) {
            let portfolio = match[1];
            // Ensure full URL
            if (!portfolio.startsWith('http')) {
                portfolio = `https://${portfolio}`;
            }
            personal.portfolio = portfolio;
            break;
        }
    }
    
    return personal;
}

function extractExperience(doc, text) {
    const experience = [];
    const expSections = text.split(/(?:EXPERIENCE|WORK EXPERIENCE|EMPLOYMENT|WORK HISTORY)/i);
    
    if (expSections.length > 1) {
        const expText = expSections[1];
        
        // Split by job entries - look for patterns like "Software Engineer| Pixako Technologies, Islamabad"
        const jobBlocks = expText.split(/(?=\n[A-Z][A-Za-z\s]+\|\s*[A-Z][A-Za-z\s]+,\s*[A-Z][A-Za-z\s]+|\n[A-Z][A-Za-z\s]+Developer|\n[A-Z][A-Za-z\s]+Engineer|\n[A-Z][A-Za-z\s]+Manager)/);
        
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
        const responsibilityMatch = block.match(/(?:Responsible for|Developed|Created|Implemented|Designed|Managed|Led|Optimized|Improved)[^•\n]*/gi);
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
        
        // More robust education block splitting
        const eduBlocks = eduText.split(/(?=\n[A-Z][A-Za-z\s]+(?:University|College|Institute)|\n[A-Z][A-Za-z\s]+\s*\|\s*[A-Z\s]+)/);
        
        eduBlocks.forEach(block => {
            if (block.trim().length > 30) {
                const edu = parseEducationBlock(block);
                if (edu.university || edu.degree) {
                    education.push(edu);
                }
            }
        });
    }
    
    // Alternative education extraction if no education found
    if (education.length === 0) {
        const educationPatterns = [
            /([A-Z][A-Za-z\s]+(?:University|College|Institute))\s*(?:,\s*([A-Za-z\s]+))?\s*(?:\((\d{4})-(\d{4})\))?/gi,
            /Degree[:\-\s]*([A-Z][A-Za-z\s]+)\s*(?:in\s*([A-Za-z\s]+))?\s*(?:\((\d{4})-(\d{4})\))?/gi
        ];
        
        educationPatterns.forEach(pattern => {
            const matches = text.matchAll(pattern);
            for (const match of matches) {
                if (match[1]) {
                    education.push({
                        university: match[1].trim(),
                        degree: match[2] ? 'BS ' + match[2].trim() : '',
                        field: match[2] ? match[2].trim() : '',
                        startDate: match[3] || '',
                        endDate: match[4] || ''
                    });
                }
            }
        });
    }
    
    return education;
}

function parseEducationBlock(block) {
    const edu = {};
    
    // Extract university with more flexible patterns
    const universityPatterns = [
        /([A-Z][A-Za-z\s]+(?:University|College|Institute))\s*(?:,\s*([A-Za-z\s]+))?/i,
        /^([A-Z][A-Za-z\s]+)\s*(?:,\s*([A-Za-z\s]+))?/
    ];
    
    for (const pattern of universityPatterns) {
        const match = block.match(pattern);
        if (match) {
            edu.university = match[1].trim();
            edu.campus = match[2] ? match[2].trim() : '';
            break;
        }
    }
    
    // Extract degree with multiple strategies
    const degreeStrategies = [
        // BS/MS/BA pattern
        () => {
            const degreeMatch = block.match(/(BS|MS|BA|B\.S\.|M\.S\.|B\.A\.)\s+(?:in\s+)?([A-Za-z\s]+)/i);
            if (degreeMatch) {
                return {
                    degree: degreeMatch[1] + ' ' + degreeMatch[2].trim(),
                    field: degreeMatch[2].trim()
                };
            }
            return null;
        },
        // Field of study pattern
        () => {
            const fieldMatch = block.match(/(?:Major|Field)[:\-\s]+([A-Za-z\s]+)/i);
            if (fieldMatch) {
                return {
                    degree: 'BS ' + fieldMatch[1].trim(),
                    field: fieldMatch[1].trim()
                };
            }
            return null;
        }
    ];
    
    for (const strategy of degreeStrategies) {
        const degreeInfo = strategy();
        if (degreeInfo) {
            edu.degree = degreeInfo.degree;
            edu.field = degreeInfo.field;
            break;
        }
    }
    
    // Extract dates
    const datePatterns = [
        /\((\d{4})\s*[-–]\s*(\d{4}|Present)\)/,
        /(\d{4})\s*[-–]\s*(\d{4}|Present)/,
        /(?:from\s+)?(\d{4})\s*(?:to|[-–])\s*(\d{4}|Present)/i
    ];
    
    for (const pattern of datePatterns) {
        const match = block.match(pattern);
        if (match) {
            edu.startDate = match[1];
            edu.endDate = match[2];
            break;
        }
    }
    
    return edu;
}

function extractSkills(doc, text) {
    const skills = [];
    
    // Find CORE SKILLS section
    const skillsMatch = text.match(/CORE SKILLS[:\-\s]+([\s\S]+?)(?=\n\n|\n[A-Z]{2,}|$)/i);
    if (skillsMatch) {
        const skillsText = skillsMatch[1];
        
        // Extract skills from different categories with better cleaning
        const programmingLanguagesMatch = skillsText.match(/Programming Languages?[:\-\s]+([A-Za-z\s,]+)/i);
        if (programmingLanguagesMatch) {
            const languages = programmingLanguagesMatch[1]
                .split(',')
                .map(s => s.trim())
                .filter(s => s.length > 0 && s.length < 50); // Filter out very long strings
            skills.push(...languages);
        }
        
        const developerToolsMatch = skillsText.match(/Developer Tools?[:\-\s]+([A-Za-z\s,]+)/i);
        if (developerToolsMatch) {
            const tools = developerToolsMatch[1]
                .split(',')
                .map(s => s.trim())
                .filter(s => s.length > 0 && s.length < 50);
            skills.push(...tools);
        }
        
        const frameworksMatch = skillsText.match(/Frameworks?[:\-\s]+([A-Za-z\s,]+)/i);
        if (frameworksMatch) {
            const frameworks = frameworksMatch[1]
                .split(',')
                .map(s => s.trim())
                .filter(s => s.length > 0 && s.length < 50);
            skills.push(...frameworks);
        }
        
        const databasesMatch = skillsText.match(/Databases?[:\-\s]+([A-Za-z\s,]+)/i);
        if (databasesMatch) {
            const databases = databasesMatch[1]
                .split(',')
                .map(s => s.trim())
                .filter(s => s.length > 0 && s.length < 50);
            skills.push(...databases);
        }
        
        // Extract individual skills from the text with better filtering
        const skillList = skillsText
            .split(/[,•\n]/)
            .map(s => s.trim())
            .filter(s => s.length > 2 && s.length < 50 && !s.includes(':')) // Filter out section headers
            .filter(s => !s.match(/^(Programming Languages|Developer Tools|Frameworks|Databases|CORE SKILLS)/i)); // Filter out category headers
        skills.push(...skillList);
    }
    
    // If no skills found in CORE SKILLS section, try alternative patterns
    if (skills.length === 0) {
        // Look for skills in the entire text with better patterns
        const skillPatterns = [
            /(JavaScript|Python|Java|React|Node|Angular|Vue|SQL|MongoDB|AWS|Docker|Kubernetes|Git|HTML|CSS|PHP|C#|C\+\+|Ruby|Go|Rust|Swift|Kotlin|TypeScript|Django|Flask|Express|Spring|Laravel|WordPress|Shopify|SAP|Salesforce|Tableau|PowerBI|Excel|Photoshop|Illustrator|Figma|Sketch|Jira|Confluence|Slack|Zoom|Teams|PostgreSQL|VS-Code|Postman|Bootstrap|Tailwind|Rapid|API|Firebase|Android|MERN|REST|Sequelize|ORM|JWT|Authentication|CRUD|Formic|Yup|React|Routers|Props|State|Effect|Hooks|Express|APIs|Relationships|Operations|Models|Token|Security)/gi
        ];
        
        skillPatterns.forEach(pattern => {
            const matches = text.matchAll(pattern);
            for (const match of matches) {
                if (match[0] && match[0].length > 2 && match[0].length < 50) {
                    skills.push(match[0]);
                }
            }
        });
    }
    
    // Extract technical skills using NLP with better filtering
    const technicalTerms = doc.match('(JavaScript|Python|Java|React|Node|Angular|Vue|SQL|MongoDB|AWS|Docker|Kubernetes|Git|HTML|CSS|PHP|C#|C\+\+|Ruby|Go|Rust|Swift|Kotlin|TypeScript|Django|Flask|Express|Spring|Laravel|WordPress|Shopify|SAP|Salesforce|Tableau|PowerBI|Excel|Photoshop|Illustrator|Figma|Sketch|Jira|Confluence|Slack|Zoom|Teams|PostgreSQL|VS-Code|Postman|Bootstrap|Tailwind|Rapid|API|Firebase|Android|Java|MERN|MongoDB|Express|React|Node|REST|API|Sequelize|ORM|JWT|Authentication|CRUD|MERN|STACK|Knowledge|Stream|FRONT-END|Formic|Yup|React|Routers|Props|State|Effect|Hooks|BACK-END|Node|Express|PostgreSQL|REST|APIs|Sequelize|ORM|Relationships|CRUD|Operations|User|Post|Follower|Following|Models|Authentication|JWT|Token|Security)').out('array');
    
    // Filter out duplicates and very long strings
    const filteredTerms = technicalTerms.filter(term => 
        term && term.length > 2 && term.length < 50 && !term.includes(':')
    );
    skills.push(...filteredTerms);
    
    // Clean up and deduplicate skills
    const cleanedSkills = [...new Set(skills)]
        .filter(skill => skill && skill.trim().length > 0)
        .map(skill => skill.trim())
        .filter(skill => skill.length > 2 && skill.length < 50)
        .filter(skill => !skill.match(/^(Programming Languages|Developer Tools|Frameworks|Databases|CORE SKILLS|TRAINING|CERTIFICATION|EDUCATION|FRONT-END|BACK-END)/i))
        .slice(0, 50); // Limit to 50 skills maximum
    
    return cleanedSkills;
}

function extractProjects(doc, text) {
    const projects = [];
    const projectSections = text.split(/(?:PROJECTS|PORTFOLIO|WORKS)/i);
    
    if (projectSections.length > 1) {
        const projText = projectSections[1];
        
        // More robust project block splitting
        const projBlocks = projText.split(/(?=\n[A-Z][A-Za-z\s]+(?:\([A-Z]+\))?:?|\n[A-Z][A-Za-z\s]+\s*\|\s*(?:SOURCE[-\s]?CODE|PROJECT))/);
        
        projBlocks.forEach((block, index) => {
            if (block.trim().length > 30) {
                const project = parseProjectBlock(block);
                if (project.title) {
                    projects.push(project);
                }
            }
        });
    }
    
    // Alternative project extraction if no projects found
    if (projects.length === 0) {
        const projectPatterns = [
            /([A-Z][A-Za-z\s]+(?:\([A-Z]+\))?)\s*(?::\s*|\|\s*)([A-Za-z\s]+)\s*(?:Technologies?[:\-\s]+([A-Za-z\s,]+))?/gi,
            /Project[:\-\s]*([A-Z][A-Za-z\s]+)(?:\s*\|\s*([A-Za-z\s]+))?(?:\s*Technologies?[:\-\s]+([A-Za-z\s,]+))?/gi
        ];
        
        projectPatterns.forEach(pattern => {
            const matches = text.matchAll(pattern);
            for (const match of matches) {
                if (match[1]) {
                    projects.push({
                        title: match[1].trim(),
                        description: '',
                        technologies: match[3] ? match[3].trim() : ''
                    });
                }
            }
        });
    }
    
    return projects;
}

function parseProjectBlock(block) {
    const project = {};
    
    // Extract project title with more flexible patterns
    const titlePatterns = [
        /^([A-Z][A-Za-z\s]+(?:\([A-Z]+\))?)\s*(?::|[|])/,
        /^([A-Z][A-Za-z\s]+(?:Project|App|Website|Platform))\s*(?::|[|])/i,
        /^([A-Z][A-Za-z\s]+:\s*[A-Z][A-Za-z\s]+)/
    ];
    
    for (const pattern of titlePatterns) {
        const match = block.match(pattern);
        if (match) {
            project.title = match[1].trim();
            break;
        }
    }
    
    // Extract description with multiple strategies
    const descriptionStrategies = [
        // Bullet point description
        () => {
            const bulletMatch = block.match(/(?:•|\*|\-)\s*([^\n]+(?:\n(?:•|\*|\-)\s*[^\n]+)*)/);
            if (bulletMatch) {
                return bulletMatch[1].replace(/\n(?:•|\*|\-)\s*/g, '\n').trim();
            }
            return null;
        },
        // Action verb description
        () => {
            const actionVerbMatch = block.match(/(?:Developed|Created|Built|Implemented|Designed|Managed|Led|Optimized|Improved|Enhanced|Streamlined|Automated|Integrated|Deployed)[^•\n]*/gi);
            if (actionVerbMatch) {
                return actionVerbMatch.join('\n').trim();
            }
            return null;
        },
        // Text between title and technologies
        () => {
            const textMatch = block.match(/(?:[A-Z][A-Za-z\s]+(?:\([A-Z]+\))?)[:\-\s]*\n?([\s\S]+?)(?=\n?Technologies?[:\-\s]|$)/i);
            if (textMatch && textMatch[1].trim().length > 20) {
                return textMatch[1].trim();
            }
            return null;
        }
    ];
    
    for (const strategy of descriptionStrategies) {
        const description = strategy();
        if (description) {
            project.description = description;
            break;
        }
    }
    
    // Extract technologies
    const techPatterns = [
        /Technologies?[:\-\s]+([A-Za-z,\s]+)/i,
        /Tech[:\-\s]+([A-Za-z,\s]+)/i,
        /Stack[:\-\s]+([A-Za-z,\s]+)/i
    ];
    
    for (const pattern of techPatterns) {
        const match = block.match(pattern);
        if (match) {
            project.technologies = match[1].trim();
            break;
        }
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
        if (data.personal.name) {
            const nameField = document.getElementById('name');
            if (nameField) nameField.value = data.personal.name;
        }
        if (data.personal.jobTitle) {
            const jobTitleField = document.getElementById('jobTitle');
            if (jobTitleField) jobTitleField.value = data.personal.jobTitle;
        }
        if (data.personal.email) {
            const emailField = document.getElementById('email');
            if (emailField) emailField.value = data.personal.email;
        }
        if (data.personal.phone) {
            const phoneField = document.getElementById('phone');
            if (phoneField) phoneField.value = data.personal.phone;
        }
        if (data.personal.location) {
            const locationField = document.getElementById('location');
            if (locationField) locationField.value = data.personal.location;
        }
        if (data.personal.summary) {
            const summaryField = document.getElementById('summary');
            if (summaryField) summaryField.value = data.personal.summary;
        }
        if (data.personal.linkedin) {
            const linkedinField = document.getElementById('linkedin');
            if (linkedinField) linkedinField.value = data.personal.linkedin;
        }
        if (data.personal.github) {
            const githubField = document.getElementById('github');
            if (githubField) githubField.value = data.personal.github;
        }
        if (data.personal.twitter) {
            const twitterField = document.getElementById('twitter');
            if (twitterField) twitterField.value = data.personal.twitter;
        }
        if (data.personal.portfolio) {
            const portfolioField = document.getElementById('portfolio');
            if (portfolioField) portfolioField.value = data.personal.portfolio;
        }
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

// Enhanced Dark Mode Functionality
function toggleDarkMode(forceMode = null) {
    const body = document.body;
    const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');
    
    // Determine new mode
    let isDarkMode;
    if (forceMode !== null) {
        isDarkMode = forceMode;
    } else {
        isDarkMode = !body.classList.contains('dark-mode');
    }
    
    // Toggle dark mode class
    body.classList.toggle('dark-mode', isDarkMode);
    
    // Update localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    
    // Update toggle buttons
    darkModeToggles.forEach(toggle => {
        toggle.innerHTML = isDarkMode 
            ? '<i class="fas fa-sun me-2"></i>Light Mode' 
            : '<i class="fas fa-moon me-2"></i>Dark Mode';
    });
    
    // Update theme-related elements
    updateThemeRelatedElements(isDarkMode);
    
    // Dispatch custom event for dark mode change
    const event = new CustomEvent('darkModeChanged', { 
        detail: { isDarkMode: isDarkMode } 
    });
    document.dispatchEvent(event);
}

function updateThemeRelatedElements(isDarkMode) {
    // More comprehensive theme updates
    const themeElements = [
        '.navbar', 
        '.hero-section', 
        '.feature-card', 
        '.form-control', 
        '.modal-content', 
        '.section-title', 
        '.footer'
    ];
    
    themeElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
        el.classList.toggle('dark-theme', isDarkMode);
    });
    });
    
    // Update meta theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', 
            isDarkMode ? '#121212' : '#4a6bff'
        );
    }
}

function initDarkMode() {
    // Check system preference first
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Get saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    
    let isDarkMode;
    if (savedDarkMode === 'enabled') {
        isDarkMode = true;
    } else if (savedDarkMode === 'disabled') {
        isDarkMode = false;
    } else {
        // Use system preference if no saved preference
        isDarkMode = prefersDarkMode.matches;
    }
    
    // Apply dark mode
    toggleDarkMode(isDarkMode);
    
    // Listen for system dark mode changes
    prefersDarkMode.addListener(e => {
        if (localStorage.getItem('darkMode') === null) {
            toggleDarkMode(e.matches);
        }
    });
}

// Initialize dark mode listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to all dark mode toggle buttons
    const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');
    darkModeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => toggleDarkMode());
    });
    
    // Initialize dark mode
    initDarkMode();
});

// Enhanced Animations and SweetAlert Styling
document.addEventListener('DOMContentLoaded', () => {
    // Animate form sections on scroll
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('#resumeForm > div');
        
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.75) {
                section.classList.add('animate__animated', `animate__fadeInUp`);
                section.style.setProperty('--animate-delay', `${index * 0.1}s`);
            }
        });
    };

    // Initial animation
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Custom SweetAlert Configuration
    const customSweetAlertConfig = {
        customClass: {
            popup: 'resume-builder-alert',
            title: 'alert-title',
            content: 'alert-content',
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-secondary'
        },
        buttonsStyling: false,
        background: 'var(--card-background)',
        iconColor: 'var(--neon-blue)',
        showClass: {
            popup: 'animate__animated animate__fadeInUp'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutDown'
        }
    };

    // Enhanced Form Validation Alerts
    const showValidationAlert = (message) => {
        Swal.fire({
            ...customSweetAlertConfig,
            icon: 'warning',
            title: 'Form Validation',
            text: message,
            confirmButtonText: 'Got it!'
        });
    };

    // Confirmation Alerts
    const showConfirmationAlert = (title, message, onConfirm) => {
        Swal.fire({
            ...customSweetAlertConfig,
            icon: 'question',
            title: title,
            text: message,
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed && onConfirm) {
                onConfirm();
            }
        });
    };

    // Success Alerts
    const showSuccessAlert = (title, message) => {
        Swal.fire({
            ...customSweetAlertConfig,
            icon: 'success',
            title: title,
            text: message,
            confirmButtonText: 'Great!'
        });
    };

    // Error Alerts
    const showErrorAlert = (title, message) => {
        Swal.fire({
            ...customSweetAlertConfig,
            icon: 'error',
            title: title,
            text: message,
            confirmButtonText: 'Understood'
        });
    };

    // Attach global alert methods
    window.showValidationAlert = showValidationAlert;
    window.showConfirmationAlert = showConfirmationAlert;
    window.showSuccessAlert = showSuccessAlert;
    window.showErrorAlert = showErrorAlert;

    // Animated Add Buttons
    const animateAddButton = (button) => {
        button.classList.add('animate__animated', 'animate__pulse');
        button.addEventListener('animationend', () => {
            button.classList.remove('animate__animated', 'animate__pulse');
        }, { once: true });
    };

    // Add animation to dynamic add buttons
    const addButtons = [
        'addExperience', 'addEducation', 
        'addCertification', 'addProject', 
        'addSkill'
    ];

    addButtons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => animateAddButton(button));
        }
    });
});

// Dynamic Experience Entry Creation
function createExperienceEntry() {
    const container = document.getElementById('experienceContainer');
    const entryIndex = container.children.length + 1;
    
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('experience-entry', 'mb-3', 'card', 'p-3');
    entryDiv.innerHTML = `
        <div class="row g-3">
            <div class="col-12">
                <input type="text" class="form-control required" placeholder="Job Title (e.g., Senior Software Engineer)" required>
            </div>
            <div class="col-12">
                <input type="text" class="form-control required" placeholder="Company Name" required>
            </div>
            <div class="date-input-group mb-3">
                <input type="date" class="form-control" id="expStartDate${entryIndex}" placeholder="Start Date" required>
                <input type="date" class="form-control" id="expEndDate${entryIndex}" placeholder="End Date">
            </div>
            <div class="col-12">
                <textarea class="form-control" rows="3" placeholder="Key responsibilities and achievements (2-3 bullet points)"></textarea>
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger btn-sm remove-entry">
                    <i class="fas fa-trash me-2"></i>Remove
                </button>
            </div>
        </div>
    `;
    
    // Add remove functionality
    const removeBtn = entryDiv.querySelector('.remove-entry');
    removeBtn.addEventListener('click', () => {
        container.removeChild(entryDiv);
        updateFormProgress();
    });
    
    container.appendChild(entryDiv);
    updateFormProgress();
}

// Dynamic Education Entry Creation
function createEducationEntry() {
    const container = document.getElementById('educationContainer');
    const entryIndex = container.children.length + 1;
    
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('education-entry', 'mb-3', 'card', 'p-3');
    entryDiv.innerHTML = `
        <div class="row g-3">
            <div class="col-12">
                <input type="text" class="form-control required" placeholder="Degree (e.g., Bachelor of Science in Computer Science)" required>
            </div>
            <div class="col-12">
                <input type="text" class="form-control required" placeholder="Institution Name" required>
            </div>
            <div class="date-input-group mb-3">
                <input type="date" class="form-control" id="eduStartDate${entryIndex}" placeholder="Start Date" required>
                <input type="date" class="form-control" id="eduEndDate${entryIndex}" placeholder="Graduation Date">
            </div>
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Additional Details (GPA, Honors, etc.)">
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-danger btn-sm remove-entry">
                    <i class="fas fa-trash me-2"></i>Remove
                </button>
            </div>
        </div>
    `;
    
    // Add remove functionality
    const removeBtn = entryDiv.querySelector('.remove-entry');
    removeBtn.addEventListener('click', () => {
        container.removeChild(entryDiv);
        updateFormProgress();
    });
    
    container.appendChild(entryDiv);
    updateFormProgress();
}

// PWA Initialization and Mobile-Like Features
function initPWA() {
    // Service Worker Registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    }

    // Add to Home Screen Prompt
    let deferredPrompt;
    const addToHomeScreenBtn = document.getElementById('add-to-home-screen');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        if (addToHomeScreenBtn) {
            addToHomeScreenBtn.style.display = 'block';
            
            addToHomeScreenBtn.addEventListener('click', () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the A2HS prompt');
                        } else {
                            console.log('User dismissed the A2HS prompt');
                        }
                        deferredPrompt = null;
                    });
                }
            });
        }
    });

    // Background Sync Example
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready.then(registration => {
            // Example: Sync resume data in background
            registration.sync.register('resume-sync')
                .then(() => {
                    console.log('Background sync registered');
                })
                .catch(err => {
                    console.error('Background sync registration failed:', err);
                });
        });
    }

    // Detect and handle mobile-like interactions
    function detectMobileBehavior() {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        
        if (isMobile) {
            // Implement mobile-specific behaviors
            document.body.classList.add('mobile-view');
            
            // Swipe navigation
            let touchStartX = 0;
            document.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
            });

            document.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].clientX;
                const diffX = touchEndX - touchStartX;

                // Swipe threshold
                if (Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        // Swipe right - go back
                        window.history.length > 1 && window.history.back();
                    } else {
                        // Swipe left - go forward
                        window.history.length > 1 && window.history.forward();
                    }
                }
            });

            // Prevent pull-to-refresh on some mobile browsers
            document.body.addEventListener('touchmove', (e) => {
                if (e.target.closest('.no-pull-refresh')) {
                    e.preventDefault();
                }
            }, { passive: false });
        }
    }

    // Performance and Battery Optimization
    function optimizeMobilePerformance() {
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                if (battery.level < 0.2) {
                    // Low battery mode
                    document.body.classList.add('low-battery-mode');
                    // Disable heavy animations, reduce background processes
                }
            });
        }

        // Reduce motion for accessibility and performance
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (prefersReducedMotion.matches) {
            document.body.classList.add('reduced-motion');
        }
    }

    // Call mobile-specific initializations
    detectMobileBehavior();
    optimizeMobilePerformance();
}

// Call PWA initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initPWA);

// Performance Optimization Techniques

// Lazy Loading and Code Splitting
const lazyLoadModules = {
    analytics: () => import('./analytics.js'),
    imageFallback: () => import('./image-fallback.js'),
    placeholderImages: () => import('./placeholder-images.js')
};

// Performance Monitoring
const PerformanceTracker = {
    marks: {},
    
    start(name) {
        this.marks[name] = performance.now();
    },
    
    end(name) {
        const start = this.marks[name];
        const duration = performance.now() - start;
        console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
        
        // Optional: Send to analytics
        if (window.analytics) {
            window.analytics.trackPerformance(name, duration);
        }
    }
};

// Debounce Utility
function debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Resource Hint Preloading
function addResourceHints() {
    const links = [
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
        { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' },
        { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
        { rel: 'dns-prefetch', href: 'https://cdnjs.cloudflare.com' }
    ];

    links.forEach(link => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = link.rel;
        preloadLink.href = link.href;
        document.head.appendChild(preloadLink);
    });
}

// Advanced Lazy Loading for Images
function initAdvancedLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImage.classList.add('loaded');
                    observer.unobserve(lazyImage);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Performance-Optimized Initialization
function initPerformanceOptimizations() {
    // Removed problematic dynamic imports
    console.log('Performance optimizations initialized');
}

// Existing PWA Initialization (from previous implementation)
function initPWA() {
    // ... (rest of the PWA initialization code remains the same)
}

// Combine Initializations
function initializeApp() {
    initPerformanceOptimizations();
    initPWA();
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Debug function to log and track resume data issues
function debugResumeData() {
    console.group('Resume Data Comprehensive Debug');
    
    try {
        // Check if resumeData exists
        console.log('resumeData exists:', !!resumeData);
        
        if (!resumeData) {
            console.warn('resumeData is null or undefined');
            return;
        }

        // Check each section of resumeData
        const sections = [
            'personalInfo', 
            'experience', 
            'education', 
            'skills', 
            'projects', 
            'certifications', 
            'template'
        ];

        sections.forEach(section => {
            console.group(`Checking ${section}`);
            console.log(`Type of ${section}:`, typeof resumeData[section]);
            console.log(`Value of ${section}:`, resumeData[section]);
            
            // Special handling for arrays
            if (Array.isArray(resumeData[section])) {
                console.log(`Number of ${section} entries:`, resumeData[section].length);
                resumeData[section].forEach((entry, index) => {
                    console.log(`${section} entry ${index}:`, entry);
                });
            }
            
            console.groupEnd();
        });
    } catch (error) {
        console.error('Error in debugResumeData:', error);
    }
    
    console.groupEnd();
}

// Enhanced error handling for resume data generation
function safelyGenerateSection(sectionName, generatorFunction) {
    try {
        console.group(`Generating ${sectionName}`);
        const result = generatorFunction();
        console.log(`${sectionName} generation result:`, result);
        console.groupEnd();
        return result;
    } catch (error) {
        console.error(`Error generating ${sectionName}:`, error);
        console.groupEnd();
        return '';
    }
}

// Comprehensive resume data debugging function
function debugResumeData() {
    console.group('Resume Data Comprehensive Debug');
    
    try {
        // Check if resumeData exists
        if (!resumeData) {
            console.error('resumeData is undefined or null');
            console.groupEnd();
            return;
        }

        // Detailed logging of resumeData structure
        console.log('Full resumeData object:', JSON.parse(JSON.stringify(resumeData)));

        // Check each section
        const sections = ['experience', 'education', 'skills', 'projects', 'certifications', 'personalInfo'];
        
        sections.forEach(section => {
            console.group(`Debugging ${section} section`);
            
            // Check if section exists
            if (!resumeData[section]) {
                console.warn(`${section} section is missing`);
                console.groupEnd();
                return;
            }

            // Handle different types of sections
            if (Array.isArray(resumeData[section])) {
                console.log(`${section} entries count:`, resumeData[section].length);
                
                // Detailed logging for array sections
                resumeData[section].forEach((entry, index) => {
                    console.log(`${section} entry ${index}:`, entry);
                    
                    // Type and structure validation
                    if (entry === null || entry === undefined) {
                        console.warn(`${section} entry ${index} is null or undefined`);
                    } else if (typeof entry !== 'object') {
                        console.warn(`${section} entry ${index} is not an object`, {
                            type: typeof entry,
                            value: entry
                        });
                    }
                });
            } else if (typeof resumeData[section] === 'object') {
                console.log(`${section} object structure:`, resumeData[section]);
            } else {
                console.log(`${section} value:`, resumeData[section]);
            }
            
            console.groupEnd();
        });

    } catch (error) {
        console.error('Error in debugResumeData:', error);
    }

    console.groupEnd();
}

// Add a function to reset and clean resumeData
function resetResumeData() {
    console.warn('Resetting resumeData to a clean state');
    
    resumeData = {
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        personalInfo: {},
        template: null
    };

    // Save the reset data
    try {
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        console.log('ResumeData reset and saved to localStorage');
    } catch (error) {
        console.error('Error saving reset resumeData:', error);
    }

    // Optionally, refresh the page or update the form
    updateFormWithSavedData();
    updatePreview();
}

// Enhanced initialization logging
function initializeApp() {
    console.group('Application Initialization');
    console.log('Starting application initialization...');
    
    try {
        // Log browser and environment details
        console.log('Browser Details:', {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language
        });

        // Check localStorage availability
        try {
            const testKey = '__resumeBuilderStorageTest__';
            localStorage.setItem(testKey, 'test');
            localStorage.removeItem(testKey);
            console.log('localStorage is fully functional');
        } catch (storageError) {
            console.error('localStorage is not available:', storageError);
            SweetAlert.warning('Storage Unavailable', 'Your browser\'s local storage is disabled or unavailable.');
        }

        // Comprehensive localStorage debugging
        function debugLocalStorage() {
            console.group('localStorage Debug');
            try {
                const savedResumeData = localStorage.getItem('resumeData');
                console.log('Saved resumeData:', savedResumeData);

                if (savedResumeData) {
                    try {
                        const parsedData = JSON.parse(savedResumeData);
                        console.log('Parsed resumeData:', parsedData);
                        
                        // Detailed section logging
                        const sections = ['experience', 'education', 'skills', 'projects', 'certifications', 'personalInfo', 'template'];
                        sections.forEach(section => {
                            console.log(`${section} section:`, parsedData[section]);
                        });
                    } catch (parseError) {
                        console.error('Error parsing resumeData:', parseError);
                    }
                } else {
                    console.warn('No resumeData found in localStorage');
                }
            } catch (error) {
                console.error('Error accessing localStorage:', error);
            }
            console.groupEnd();
        }

        // Call localStorage debugging
        debugLocalStorage();

        // Existing initialization steps
        initPerformanceOptimizations();
        initPWA();

        console.log('Application initialization complete');
    } catch (initError) {
        console.error('Comprehensive initialization error:', initError);
        SweetAlert.error('Initialization Error', 'Failed to initialize the application. Please refresh the page.');
    } finally {
        console.groupEnd();
    }
}

// Enhanced error handling for preview initialization
function initResumePreview() {
    console.group('Resume Preview Initialization');
    console.log('Starting resume preview initialization...');
    
    try {
        // Comprehensive resumeData logging before preview
        console.log('Current resumeData before preview:', JSON.parse(JSON.stringify(resumeData)));

        // Validate resumeData before generating preview
        if (!resumeData) {
            console.warn('resumeData is undefined or null');
            resumeData = {
                experience: [],
                education: [],
                skills: [],
                projects: [],
                certifications: [],
                personalInfo: {},
                template: null
            };
        }

        // Ensure experience is an array
        if (!Array.isArray(resumeData.experience)) {
            console.warn('Experience is not an array, converting to empty array');
            resumeData.experience = [];
        }

        // Additional validation for experience entries
        resumeData.experience = resumeData.experience.filter(exp => {
            const isValid = exp && 
                typeof exp === 'object' && 
                ((exp.position && typeof exp.position === 'string') || 
                 (exp.companyname && typeof exp.companyname === 'string'));
            
            if (!isValid) {
                console.warn('Invalid experience entry removed:', exp);
            }
            
            return isValid;
        });

        // Proceed with preview update
        updatePreview();

        console.log('Resume preview initialization complete');
    } catch (previewError) {
        console.error('Error in resume preview initialization:', previewError);
        SweetAlert.warning('Preview Error', 'Could not generate resume preview. Please check your resume data.');
    } finally {
        console.groupEnd();
    }
}

// Enhanced error handling for preview generation
function updatePreview() {
    console.group('Update Preview');
    console.log('Starting preview update...');
    
    try {
        // Validate resumeData before generating HTML
        if (!resumeData) {
            console.warn('resumeData is undefined or null during preview update');
            return;
        }

        // Generate resume HTML with comprehensive error handling
        const previewContainer = document.getElementById('resumePreview');
        if (!previewContainer) {
            console.warn('Preview container not found');
            return;
        }

        // Generate resume HTML
        const resumeHTML = generateResumeHTML();
        
        // Set preview content
        previewContainer.innerHTML = resumeHTML;

        console.log('Preview update completed successfully');
    } catch (updateError) {
        console.error('Error updating preview:', updateError);
        SweetAlert.warning('Preview Update Error', 'Could not update resume preview.');
    } finally {
        console.groupEnd();
    }
}
