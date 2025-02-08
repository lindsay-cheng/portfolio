// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.2, // Trigger animations when 20% of the element is visible
    rootMargin: '0px 0px -50px 0px'
};

function animateElement(element, animation) {
    element.style.opacity = '0';
    element.style.transform = animation.initial;
    element.style.transition = `opacity 0.4s ease-out, transform 0.4s ease-out`;

    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = animation.final;
    }, animation.delay || 0);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('tech-grid')) {
                const items = entry.target.querySelectorAll('.tech-item');
                items.forEach((item, index) => {
                    animateElement(item, {
                        initial: 'translateY(15px)',
                        final: 'translateY(0)',
                        delay: index * 50
                    });
                });
            }

            if (entry.target.classList.contains('projects')) {
                const cards = entry.target.querySelectorAll('.project-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }

            if (entry.target.classList.contains('education-grid')) {
                const items = entry.target.querySelectorAll('.education-item');
                items.forEach((item, index) => {
                    animateElement(item, {
                        initial: 'translateY(20px)',
                        final: 'translateY(0)',
                        delay: index * 100
                    });
                });
            }

            if (entry.target.classList.contains('experience-timeline')) {
                const items = entry.target.querySelectorAll('.experience-item');
                items.forEach((item, index) => {
                    animateElement(item, {
                        initial: 'translateY(20px)',
                        final: 'translateY(0)',
                        delay: index * 100
                    });
                });
            }

            if (entry.target.classList.contains('about')) {
                const image = entry.target.querySelector('.about-image');
                const content = entry.target.querySelector('.about-content');

                animateElement(image, {
                    initial: 'translateY(20px)',
                    final: 'translateY(0)',
                    delay: 0
                });

                animateElement(content, {
                    initial: 'translateY(20px)',
                    final: 'translateY(0)',
                    delay: 100
                });
            }
        } else {
            entry.target.querySelectorAll('.tech-item, .project-card, .education-item, .experience-item').forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(15px)';
            });
        }
    });
}, observerOptions);

const sectionsToAnimate = ['.tech-grid', '.education-grid', '.experience-timeline'];
sectionsToAnimate.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        observer.observe(element);
    });
});

// Hero Section Parallax and Fade Effect
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (scroll <= hero.offsetHeight) {
        const opacity = 1 - (scroll / (hero.offsetHeight * 0.8));
        heroContent.style.opacity = Math.max(opacity, 0);
        heroContent.style.transform = `translateY(${scroll * 0.5}px)`;
    }
});

// Navigation Hover Effects
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.transform = 'translateY(-2px)';
    });

    link.addEventListener('mouseout', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Updated JavaScript for smooth menu handling
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.nav-overlay');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
}

// Toggle menu on hamburger click
hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking overlay
navOverlay.addEventListener('click', toggleMenu);

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
    });
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMenu();
    }
});

