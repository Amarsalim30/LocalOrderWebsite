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

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.feature-card').forEach((card) => {
    observer.observe(card);
});