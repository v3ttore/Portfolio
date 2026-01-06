// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== Language Switcher =====
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');
const languageOptions = document.querySelectorAll('.language-option');
const currentLangSpan = document.querySelector('.current-lang');

// Language data with flag emojis
const languages = {
    'it': { flag: '🇮🇹', code: 'IT', name: 'Italiano' },
    'en': { flag: '🇬🇧', code: 'EN', name: 'English' },
    'de': { flag: '🇩🇪', code: 'DE', name: 'Deutsch' },
    'da': { flag: '🇩🇰', code: 'DA', name: 'Dansk' },
    'fr': { flag: '🇫🇷', code: 'FR', name: 'Français' },
    'es': { flag: '🇪🇸', code: 'ES', name: 'Español' }
};

// Toggle dropdown
languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageBtn.classList.toggle('active');
    languageDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageBtn.classList.remove('active');
        languageDropdown.classList.remove('active');
    }
});

// Handle language selection
languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.dataset.lang;
        const lang = languages[selectedLang];

        // Update current language display
        currentLangSpan.textContent = `${lang.flag} ${lang.code}`;

        // Update active state
        languageOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Close dropdown
        languageBtn.classList.remove('active');
        languageDropdown.classList.remove('active');

        // Store selected language
        localStorage.setItem('selectedLanguage', selectedLang);

        // Load translations
        updatePageContent(selectedLang);
    });
});

// Translation Dictionary
const translations = {
    'it': {
        'nav.projects': 'Progetti',
        'nav.education': 'Formazione',
        'nav.experience': 'Esperienza',
        'nav.skills': 'Competenze',
        'nav.contact': 'Contatti',
        'hero.greeting': 'Ciao, io sono',
        'hero.subtitle': 'Business Analyst & Web Developer',
        'hero.description': 'Trasformo dati complessi in strategie vincenti e idee creative in esperienze digitali coinvolgenti.',
        'section.projects': 'Progetti',
        'section.education': 'Formazione Accademica',
        'section.skills': 'Competenze & Interessi',
        'section.experience': 'Esperienza',
        'section.contact': 'Contattami',
        'contact.intro': 'Sono sempre interessato a nuove opportunità e collaborazioni. Non esitare a contattarmi!',
        'btn.download_cv': 'Download CV',
        'project.ongoing': 'In Corso',
        'project.completed': 'Completato',
        'project.visit': 'Visita il sito'
    },
    'en': {
        'nav.projects': 'Projects',
        'nav.education': 'Education',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'hero.greeting': 'Hi, I am',
        'hero.subtitle': 'Business Analyst & Web Developer',
        'hero.description': 'I transform complex data into winning strategies and creative ideas into engaging digital experiences.',
        'section.projects': 'Projects',
        'section.education': 'Academic Education',
        'section.skills': 'Skills & Interests',
        'section.experience': 'Experience',
        'section.contact': 'Contact Me',
        'contact.intro': 'I am always interested in new opportunities and collaborations. Feel free to contact me!',
        'btn.download_cv': 'Download CV',
        'project.ongoing': 'Ongoing',
        'project.completed': 'Completed',
        'project.visit': 'Visit Website'
    },
    'de': {
        'nav.projects': 'Projekte',
        'nav.education': 'Ausbildung',
        'nav.experience': 'Erfahrung',
        'nav.skills': 'Fähigkeiten',
        'nav.contact': 'Kontakt',
        'hero.greeting': 'Hallo, ich bin',
        'hero.subtitle': 'Business Analyst & Web Developer',
        'hero.description': 'Ich verwandle komplexe Daten in erfolgreiche Strategien und kreative Ideen in ansprechende digitale Erlebnisse.',
        'section.projects': 'Projekte',
        'section.education': 'Akademische Ausbildung',
        'section.skills': 'Fähigkeiten & Interessen',
        'section.experience': 'Erfahrung',
        'section.contact': 'Kontaktieren Sie mich',
        'contact.intro': 'Ich bin immer an neuen Möglichkeiten und Kooperationen interessiert. Zögern Sie nicht, mich zu kontaktieren!',
        'btn.download_cv': 'Lebenslauf herunterladen',
        'project.ongoing': 'Laufend',
        'project.completed': 'Abgeschlossen',
        'project.visit': 'Website besuchen'
    },
    'fr': {
        'nav.projects': 'Projets',
        'nav.education': 'Formation',
        'nav.experience': 'Expérience',
        'nav.skills': 'Compétences',
        'nav.contact': 'Contact',
        'hero.greeting': 'Bonjour, je suis',
        'hero.subtitle': 'Business Analyst & Développeur Web',
        'hero.description': 'Je transforme des données complexes en stratégies gagnantes et des idées créatives en expériences numériques engageantes.',
        'section.projects': 'Projets',
        'section.education': 'Formation Académique',
        'section.skills': 'Compétences & Intérêts',
        'section.experience': 'Expérience',
        'section.contact': 'Contactez-moi',
        'contact.intro': 'Je suis toujours intéressé par de nouvelles opportunités et collaborations. N\'hésitez pas à me contacter !',
        'btn.download_cv': 'Télécharger CV',
        'project.ongoing': 'En cours',
        'project.completed': 'Terminé',
        'project.visit': 'Visiter le site'
    },
    'es': {
        'nav.projects': 'Proyectos',
        'nav.education': 'Educación',
        'nav.experience': 'Experiencia',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contacto',
        'hero.greeting': 'Hola, soy',
        'hero.subtitle': 'Analista de Negocios y Desarrollador Web',
        'hero.description': 'Transformo datos complejos en estrategias ganadoras e ideas creativas en experiencias digitales atractivas.',
        'section.projects': 'Proyectos',
        'section.education': 'Formación Académica',
        'section.skills': 'Habilidades e Intereses',
        'section.experience': 'Experiencia',
        'section.contact': 'Contáctame',
        'contact.intro': 'Siempre estoy interesado en nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!',
        'btn.download_cv': 'Descargar CV',
        'project.ongoing': 'En curso',
        'project.completed': 'Completado',
        'project.visit': 'Visitar sitio web'
    },
    'da': {
        'nav.projects': 'Projekter',
        'nav.education': 'Uddannelse',
        'nav.experience': 'Erfaring',
        'nav.skills': 'Færdigheder',
        'nav.contact': 'Kontakt',
        'hero.greeting': 'Hej, jeg er',
        'hero.subtitle': 'Business Analyst & Web Developer',
        'hero.description': 'Jeg forvandler komplekse data til vindende strategier og kreative ideer til engagerende digitale oplevelser.',
        'section.projects': 'Projekter',
        'section.education': 'Akademisk Uddannelse',
        'section.skills': 'Færdigheder & Interesser',
        'section.experience': 'Erfaring',
        'section.contact': 'Kontakt Mig',
        'contact.intro': 'Jeg er altid interesseret i nye muligheder og samarbejder. Tøv ikke med at kontakte mig!',
        'btn.download_cv': 'Download CV',
        'project.ongoing': 'I gang',
        'project.completed': 'Afsluttet',
        'project.visit': 'Besøg hjemmeside'
    }
};

function updatePageContent(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Handle elements with nested HTML (like spans inside h2)
            if (element.children.length > 0 && element.tagName !== 'A' && element.tagName !== 'BUTTON') {
                // For complex elements, we might need specific handling or just replace text nodes
                // For now, simpler approach: if it has specific structure, handle it manually
                // Or ensure data-i18n is on the text container itself
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Special handling for elements that might need HTML updates or specific targeting
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && translations[lang]['hero.subtitle']) {
        // Preserve the span class if needed, or just update text
        // Current structure: Business Analyst & <span class="text-gradient">Web Developer</span>
        // We can update this manually to keep the gradient
        if (lang === 'it') heroSubtitle.innerHTML = `Business Analyst & <span class="text-gradient">Web Developer</span>`;
        else if (lang === 'en') heroSubtitle.innerHTML = `Business Analyst & <span class="text-gradient">Web Developer</span>`;
        else if (lang === 'de') heroSubtitle.innerHTML = `Business Analyst & <span class="text-gradient">Web Developer</span>`;
        else if (lang === 'fr') heroSubtitle.innerHTML = `Business Analyst & <span class="text-gradient">Développeur Web</span>`;
        else if (lang === 'es') heroSubtitle.innerHTML = `Analista de Negocios y <span class="text-gradient">Desarrollador Web</span>`;
        else if (lang === 'da') heroSubtitle.innerHTML = `Business Analyst & <span class="text-gradient">Web Developer</span>`;
    }
}

// Load saved language on page load
const savedLang = localStorage.getItem('selectedLanguage') || 'it';
const savedLanguage = languages[savedLang];
if (savedLanguage) {
    currentLangSpan.textContent = `${savedLanguage.flag} ${savedLanguage.code}`;
    const activeOption = document.querySelector(`[data-lang="${savedLang}"]`);
    if (activeOption) {
        activeOption.classList.add('active');
    }
}

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Dynamic CV Button Logic (Desktop & Mobile)
    const cvDownloadBtn = document.getElementById('cvDownloadBtn');
    const heroSection = document.querySelector('.hero');

    if (cvDownloadBtn && heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollThreshold = heroHeight - 100; // Trigger near end of hero section

        // Debug: log to console
        console.log('Hero height:', heroHeight, 'Threshold:', scrollThreshold, 'Current scroll:', currentScroll);

        if (currentScroll > scrollThreshold) {
            cvDownloadBtn.classList.add('show-name');
            cvDownloadBtn.setAttribute('href', '#home');
            console.log('Name should be visible now');
        } else {
            cvDownloadBtn.classList.remove('show-name');
            cvDownloadBtn.setAttribute('href', '#');
        }
    }

    lastScroll = currentScroll;
});

// Handle click on dynamic button to scroll top if it's showing name
// Ensure this is run once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const cvDownloadBtn = document.getElementById('cvDownloadBtn');
    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', (e) => {
            if (cvDownloadBtn.classList.contains('show-name')) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// ===== Active Navigation Link Highlight =====
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===== Parallax Effect for Hero Background =====
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (hero) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ===== Card Hover Effects =====
// Removed 3D tilt effect for cleaner interaction

// ===== Typing Effect for Hero Name =====
const heroName = document.querySelector('.hero-name');
if (heroName) {
    const text = heroName.textContent;
    heroName.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroName.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ===== Skill Tags Animation =====
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';

    setTimeout(() => {
        tag.style.transition = 'all 0.3s ease-out';
        tag.style.opacity = '1';
        tag.style.transform = 'scale(1)';
    }, index * 50);
});

// ===== Timeline Animation =====
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
    timelineObserver.observe(item);
});

// ===== Copy Email to Clipboard =====
const emailCard = document.querySelector('.contact-card[href^="mailto"]');

if (emailCard) {
    emailCard.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailCard.querySelector('p').textContent;

        navigator.clipboard.writeText(email).then(() => {
            // Show feedback
            const originalText = emailCard.querySelector('h3').textContent;
            emailCard.querySelector('h3').textContent = 'Email copiata! ✓';

            setTimeout(() => {
                emailCard.querySelector('h3').textContent = originalText;
            }, 2000);
        });
    });
}

// ===== Scroll to Top Button =====
// Removed as per user request


// ===== Performance Optimization: Lazy Loading Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('Portfolio loaded successfully! 🚀');
