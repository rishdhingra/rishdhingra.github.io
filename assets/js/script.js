// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const href = this.getAttribute('href');
            
            // Special handling for About and Featured Projects sections - stop at the section start
            if (href === '#about' || href === '#featured-project') {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const offset = navbarHeight + 20; // Account for navbar height + padding
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: Math.max(0, targetPosition), // Ensure we don't scroll to negative position
                    behavior: 'smooth'
                });
            } else {
                // Default smooth scroll for other sections
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// ===== Hero Title Typing Animation =====
const heroTypingElement = document.getElementById('typing-text');
const heroTypingTexts = ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
let heroTypingIndex = 0;
let heroCharIndex = 0;
let heroIsDeleting = false;

function typeHeroText() {
    if (!heroTypingElement) return;
    
    const currentText = heroTypingTexts[heroTypingIndex];
    
    if (heroIsDeleting) {
        heroTypingElement.textContent = currentText.substring(0, heroCharIndex - 1);
        heroCharIndex--;
    } else {
        heroTypingElement.textContent = currentText.substring(0, heroCharIndex + 1);
        heroCharIndex++;
    }
    
    if (!heroIsDeleting && heroCharIndex === currentText.length) {
        heroIsDeleting = true;
        setTimeout(typeHeroText, 2000);
    } else if (heroIsDeleting && heroCharIndex === 0) {
        heroIsDeleting = false;
        heroTypingIndex = (heroTypingIndex + 1) % heroTypingTexts.length;
        setTimeout(typeHeroText, 500);
    } else {
        const speed = heroIsDeleting ? 50 : 100;
        setTimeout(typeHeroText, speed);
    }
}

if (heroTypingElement) {
    setTimeout(typeHeroText, 1000);
}

// ===== Terminal Typing Animation =====
const typingElement = document.getElementById('typing-code');
const typingTexts = ['git status', 'npm run dev', 'git push origin main', 'npm install', 'git commit -m "Update"'];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    if (!typingElement) return;
    
    const currentText = typingTexts[typingIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % typingTexts.length;
        setTimeout(typeText, 500);
    } else {
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeText, speed);
    }
}

if (typingElement) {
    setTimeout(typeText, 1000);
}


// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('.project-card, .about-content > *').forEach(el => {
    observer.observe(el);
});

// ===== Active Navigation Highlighting =====
const updateActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const scrollPos = window.pageYOffset + 200;
    
    // Find the active section
    let activeSectionId = null;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            activeSectionId = sectionId;
        }
    });
    
    // Update nav links
    if (activeSectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href').substring(1); // Remove #
            
            // Highlight "Featured Projects" for both featured-project and projects sections
            if (linkHref === 'featured-project' && (activeSectionId === 'featured-project' || activeSectionId === 'projects')) {
                link.classList.add('active');
            } else if (linkHref === activeSectionId) {
                link.classList.add('active');
            }
        });
    }
};

// Throttle scroll events
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveNav();
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Initial call
updateActiveNav();

// ===== Coffee Stats Animation - Horizontal Bars =====
const initCoffeeStats = () => {
    const statsWrapper = document.querySelector('.coffee-stats-wrapper');
    if (!statsWrapper) return;
    
    const statItems = document.querySelectorAll('.coffee-stat-item');
    if (statItems.length === 0) return;
    
    // Check if already animated
    if (statsWrapper.classList.contains('animated')) return;
    
    const maxValue = 20;
    
    // Initialize bars to 0
    statItems.forEach((item) => {
        const value = parseInt(item.getAttribute('data-value')) || 0;
        const percentage = (value / maxValue) * 100;
        
        const barFill = item.querySelector('.stat-bar-fill');
        const valueElement = item.querySelector('.stat-value');
        
        if (barFill) {
            barFill.style.setProperty('--bar-width', '0%');
            barFill.style.height = '0%'; // Start at 0 height
        }
        if (valueElement) {
            valueElement.textContent = '0';
        }
        
        item.setAttribute('data-percentage', percentage);
    });
    
    // Animation function
    const animateStats = () => {
        if (statsWrapper.classList.contains('animated')) return;
        
        statsWrapper.classList.add('animated');
        
        // Animate each item
        statItems.forEach((item, index) => {
            const value = parseInt(item.getAttribute('data-value')) || 0;
            const percentage = parseFloat(item.getAttribute('data-percentage')) || 0;
            const barFill = item.querySelector('.stat-bar-fill');
            const valueElement = item.querySelector('.stat-value');
            
            setTimeout(() => {
                item.classList.add('animated');
                
                if (barFill) {
                    barFill.style.setProperty('--bar-width', `${percentage}%`);
                    barFill.style.height = `${percentage}%`; // Animate height
                }
                
                // Animate counter
                if (valueElement) {
                    let current = 0;
                    const increment = value / 30;
                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= value) {
                            valueElement.textContent = value;
                            clearInterval(counter);
                        } else {
                            valueElement.textContent = Math.floor(current);
                        }
                    }, 50);
                }
            }, index * 100);
        });
    };
    
    // Create intersection observer with stricter settings
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Only animate when the wrapper is actually visible in the viewport
            if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                animateStats();
                statsObserver.disconnect();
            }
        });
    }, {
        threshold: 0.2, // Require at least 20% visible
        rootMargin: '0px' // No extra margin - only trigger when actually in view
    });
    
    statsObserver.observe(statsWrapper);
};

// Initialize coffee stats when DOM is ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initCoffeeStats, 500);
    });
} else {
    setTimeout(initCoffeeStats, 500);
}

window.addEventListener('load', () => {
    setTimeout(initCoffeeStats, 300);
});

// ===== Console Message =====
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
