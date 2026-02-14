/**
 * Wedding Website JavaScript
 * Password protection and interactive features
 */

// Configuration - Edit these values
const CONFIG = {
    // Default password - Change this to your desired password
    password: 'ourwedding',
    
    // Session storage key
    storageKey: 'wedding_auth',
    
    // Password attempts before showing hint
    maxAttempts: 3
};

// Track password attempts
let attemptCount = 0;

/**
 * Initialize the website
 */
function init() {
    // Check if user is already authenticated
    if (sessionStorage.getItem(CONFIG.storageKey) === 'true') {
        showMainContent();
    } else {
        // Set up password input listener
        const passwordInput = document.getElementById('password-input');
        if (passwordInput) {
            passwordInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    checkPassword();
                }
            });
        }
    }
    
    // Add smooth scroll behavior for navigation
    addSmoothScroll();
}

/**
 * Check if entered password is correct
 */
function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === CONFIG.password) {
        // Correct password
        sessionStorage.setItem(CONFIG.storageKey, 'true');
        
        // Add fade out animation to overlay
        const overlay = document.getElementById('password-overlay');
        overlay.style.animation = 'fadeOut 0.5s ease';
        
        setTimeout(() => {
            showMainContent();
        }, 500);
        
        errorMessage.textContent = '';
    } else {
        // Incorrect password
        attemptCount++;
        
        if (attemptCount >= CONFIG.maxAttempts) {
            errorMessage.textContent = `Incorrect password. Hint: It's all lowercase, one word.`;
        } else {
            errorMessage.textContent = 'Incorrect password. Please try again.';
        }
        
        // Shake animation for password container
        const container = document.querySelector('.password-container');
        container.style.animation = 'shake 0.5s ease';
        
        setTimeout(() => {
            container.style.animation = 'slideUp 0.6s ease';
        }, 500);
        
        // Clear input
        passwordInput.value = '';
        passwordInput.focus();
    }
}

/**
 * Show main content and hide password overlay
 */
function showMainContent() {
    const overlay = document.getElementById('password-overlay');
    const mainContent = document.getElementById('main-content');
    
    overlay.classList.add('hidden');
    mainContent.classList.remove('hidden');
    
    // Trigger animations for sections as they come into view
    observeSections();
}

/**
 * Add smooth scrolling for anchor links
 */
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Observe sections for fade-in animations on scroll
 */
function observeSections() {
    const sections = document.querySelectorAll('.info-section');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
}

/**
 * Add shake animation to CSS dynamically
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
