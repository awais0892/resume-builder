// Simple Analytics for Resume Builder
class ResumeAnalytics {
    constructor() {
        this.events = [];
        this.startTime = Date.now();
        this.init();
    }

    init() {
        // Track page views
        this.trackPageView();
        
        // Track user interactions
        this.trackUserInteractions();
        
        // Track performance
        this.trackPerformance();
    }

    trackPageView() {
        const pageData = {
            event: 'page_view',
            page: window.location.pathname,
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
            screenSize: `${screen.width}x${screen.height}`,
            viewport: `${window.innerWidth}x${window.innerHeight}`
        };
        
        this.events.push(pageData);
        this.sendAnalytics(pageData);
    }

    trackUserInteractions() {
        // Track form interactions
        document.addEventListener('click', (e) => {
            const target = e.target;
            
            if (target.matches('button, a, .btn')) {
                this.trackEvent('button_click', {
                    buttonText: target.textContent.trim(),
                    buttonId: target.id,
                    buttonClass: target.className
                });
            }
        });

        // Track form submissions
        document.addEventListener('submit', (e) => {
            this.trackEvent('form_submit', {
                formId: e.target.id,
                formAction: e.target.action
            });
        });

        // Track template selections
        document.addEventListener('change', (e) => {
            if (e.target.name === 'template') {
                this.trackEvent('template_selected', {
                    template: e.target.value
                });
            }
        });
    }

    trackPerformance() {
        // Track page load time
        window.addEventListener('load', () => {
            const loadTime = Date.now() - this.startTime;
            this.trackEvent('page_load', {
                loadTime: loadTime,
                url: window.location.href
            });
        });

        // Track PDF generation
        const originalGeneratePDF = window.generatePDF;
        if (originalGeneratePDF) {
            window.generatePDF = async function() {
                const startTime = Date.now();
                try {
                    const result = await originalGeneratePDF();
                    analytics.trackEvent('pdf_generated', {
                        generationTime: Date.now() - startTime,
                        success: true
                    });
                    return result;
                } catch (error) {
                    analytics.trackEvent('pdf_generated', {
                        generationTime: Date.now() - startTime,
                        success: false,
                        error: error.message
                    });
                    throw error;
                }
            };
        }
    }

    trackEvent(eventName, data = {}) {
        const eventData = {
            event: eventName,
            timestamp: Date.now(),
            ...data
        };
        
        this.events.push(eventData);
        this.sendAnalytics(eventData);
    }

    sendAnalytics(data) {
        // In a real app, you'd send this to your analytics service
        // For now, we'll just log it and store in localStorage
        console.log('Analytics Event:', data);
        
        // Store in localStorage for debugging
        const storedEvents = JSON.parse(localStorage.getItem('resume_analytics') || '[]');
        storedEvents.push(data);
        
        // Keep only last 100 events
        if (storedEvents.length > 100) {
            storedEvents.splice(0, storedEvents.length - 100);
        }
        
        localStorage.setItem('resume_analytics', JSON.stringify(storedEvents));
        
        // Send to external service (example)
        // fetch('/api/analytics', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // }).catch(err => console.error('Analytics error:', err));
    }

    getAnalytics() {
        return this.events;
    }

    clearAnalytics() {
        this.events = [];
        localStorage.removeItem('resume_analytics');
    }
}

// Initialize analytics
const analytics = new ResumeAnalytics();

// Export for use in other files
window.resumeAnalytics = analytics; 