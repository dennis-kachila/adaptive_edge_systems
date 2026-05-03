// Main JavaScript entry point
console.log("AdaptiveEdge Systems loaded.");

document.addEventListener("DOMContentLoaded", () => {
    // Advanced Intersection Observer for premium modern animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view', 'visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 1. Fade-in for full sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // 2. Staggered animations for cards, stats, and list items
    const staggerSelectors = ['.card', '.stat-item', '.feature-list li', '.pricing-card'];
    
    staggerSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.classList.add('animate-element');
            
            // Add staggered delay classes based on their index (0, 100ms, 200ms)
            if (index % 3 === 1) el.classList.add('delay-100');
            if (index % 3 === 2) el.classList.add('delay-200');

            observer.observe(el);
        });
    });

    // 3. Floating header effect on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)';
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            } else {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.02)';
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
            }
        });
    }

    // 4. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 5. Active Nav Highlight — match current page path
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPath = new URL(link.href).pathname;
        // Exact match for homepage, prefix match for subpages
        const isHome = linkPath === '/' && currentPath === '/';
        const isActive = linkPath !== '/' && currentPath.startsWith(linkPath);
        if (isHome || isActive) {
            link.classList.add('nav-active');
        }
    });
});
