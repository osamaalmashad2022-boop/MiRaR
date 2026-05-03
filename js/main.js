import { renderHome } from './views/home.js';
import { renderCourseGeo } from './views/course-geo.js';
import { renderCourseArabic } from './views/course-arabic.js';
import { renderCourseEnglish } from './views/course-english.js';
import { renderLogin } from './views/login.js';
import { renderTimeline } from './views/timeline.js';

const routes = {
    'home': renderHome,
    'course-geo': renderCourseGeo,
    'course-arabic': renderCourseArabic,
    'course-english': renderCourseEnglish,
    'login': renderLogin,
    'timeline': renderTimeline,
};

function navigateTo(route) {
    const appRoot = document.getElementById('app-root');
    const viewRoute = route === 'courses' ? 'home' : route;
    const renderFunction = routes[viewRoute] || routes['home'];
    
    // Check if we are already on the home page and just navigating to #courses
    const isAlreadyOnHome = document.querySelector('.hero') !== null;
    
    if (viewRoute === 'home' && isAlreadyOnHome && route !== 'home') {
        const coursesSection = document.getElementById('courses');
        if (coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
        updateActiveNav(route);
        return;
    }

    // Add brief fade out effect
    appRoot.style.opacity = '0';
    appRoot.style.transition = 'opacity 0.2s ease-in-out';
    
    setTimeout(() => {
        appRoot.innerHTML = '';
        renderFunction(appRoot);
        appRoot.style.opacity = '1';

        // Update active nav link
        updateActiveNav(route);
        
        // Scroll to appropriate section
        if (route === 'courses') {
            const coursesSection = document.getElementById('courses');
            if (coursesSection) {
                coursesSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, 200);
}

function updateActiveNav(route) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        if(link.dataset.route === route) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Global click listener for internal routing
document.addEventListener('click', (e) => {
    // Check if clicked element or its parent has data-route
    const target = e.target.closest('[data-route]');
    if (target) {
        e.preventDefault();
        const route = target.dataset.route;
        window.history.pushState({}, '', `#${route}`);
        navigateTo(route);
    }
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
    const route = window.location.hash.replace('#', '') || 'login';
    navigateTo(route);
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    const initialRoute = window.location.hash.replace('#', '') || 'login';
    navigateTo(initialRoute);

    // Mobile menu toggle logic
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
});
