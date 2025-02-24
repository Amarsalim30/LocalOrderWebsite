// Mobile menu toggle with accessibility
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
});

// Form validation and submission
document.getElementById('leadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!isValidPhone(data.phone)) {
        alert('Please enter a valid phone number');
        return;
    }
    
    // Simulate API call
    submitForm(data);
});

function isValidPhone(phone) {
    return /^[0-9+\s-]{10,}$/.test(phone);
}

async function submitForm(data) {
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Thank you! We will contact you shortly via WhatsApp');
        document.getElementById('leadForm').reset();
    } catch (error) {
        alert('Sorry, there was an error. Please try again.');
    }
}

// Enhanced Intersection Observer with staggered animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '-50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 150}ms`;
            entry.target.classList.add('visible', 'animate__animated', 'animate__fadeInUp');
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.feature-card, .testimonial, .contact-form');
animatedElements.forEach(el => observer.observe(el));

// Smooth scroll with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const startPosition = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top + startPosition;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            window.scrollTo(0, startPosition + distance * easeInOutCubic);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation);
    });
});

// Add pulse animation to icons
document.querySelectorAll('.feature-card i').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.classList.add('pulse');
        setTimeout(() => this.classList.remove('pulse'), 1000);
    });
});

// Smooth hover effect for buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
});