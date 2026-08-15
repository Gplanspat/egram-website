// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Set current year in footer
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Form submission handling (prevent default for demo)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Add scroll effect to header
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and sections
const animatedElements = document.querySelectorAll('.feature-card, .user-type-card, .learning-item, .flow-step, .process-step, .fees-feature, .id-feature, .game-card, .message-card, .attendance-mockup, .security-mockup, .result-card, .payment-card, .id-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Game option interaction
const gameOptions = document.querySelectorAll('.option');
gameOptions.forEach(option => {
    option.addEventListener('click', function() {
        gameOptions.forEach(opt => opt.classList.remove('correct'));
        this.classList.add('correct');
    });
});

// Sidebar interaction
const sidebarItems = document.querySelectorAll('.sidebar-item');
sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
        sidebarItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});
const slides = [
  "images/hero/slide1.jpg",
  "images/hero/slide2.jpg",
  "images/hero/slide3.jpg",
  "images/hero/slide4.jpg",
  "images/hero/slide5.jpg",
  "images/hero/slide6.jpg",
  "images/hero/slide7.jpg",
  "images/hero/slide8.jpg",
  "images/hero/slide9.jpg",
  "images/hero/slide10.jpg"
];

let currentSlide = 0;
const heroSlide = document.getElementById("heroSlide");

if (heroSlide) {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    heroSlide.src = slides[currentSlide];
  }, 5000);
}

