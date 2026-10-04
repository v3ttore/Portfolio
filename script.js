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
    'es': { flag: '🇪🇸', code: 'ES', name: 'Español' },
    'zh': { flag: '🇨🇳', code: 'ZH', name: '中文' }
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
        'section.contact': 'Parliamone!',
        'contact.intro': 'Hai un progetto in mente o vuoi solo salutare?',
        'btn.download_cv': 'Download CV',
        'project.ongoing': 'In Corso',
        'project.completed': 'Completato',
        'project.visit': 'Visita il sito',
        'edu.china_future.badge': 'Prossimo Step',
        'edu.china_future.title': 'Scambio Accademico in Cina & Studio del Mandarino',
        'edu.china_future.subtitle': 'Obiettivo Accademico & Linguistico (2026 - 2027)',
        'edu.china_future.desc': 'Partendo dalle basi poste con il YES China Program (China Jiliang University, Hangzhou, 2025), sto approfondendo lo studio del mandarino con l\'obiettivo di realizzare un nuovo scambio accademico o Erasmus in Cina nei prossimi anni per costruire competenze linguistiche ed interculturali altamente competitive nel mercato internazionale.',
        'edu.yes_china.subtitle': 'YES China Program - Academic Exchange',
        'edu.yes_china.desc': 'Programma di scambio accademico e immersione culturale in Cina, prima esperienza fondamentale per lo sviluppo di un profilo internazionale orientato ai contesti e mercati globali.',
        'skill.mandarin': '🇨🇳 Mandarino (In apprendimento)'
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
        'section.contact': 'Let\'s Connect!',
        'contact.intro': 'Have a project in mind or just want to say hi?',
        'btn.download_cv': 'Download CV',
        'project.ongoing': 'Ongoing',
        'project.completed': 'Completed',
        'project.visit': 'Visit Website',
        'edu.china_future.badge': 'Next Step',
        'edu.china_future.title': 'Academic Exchange in China & Mandarin Studies',
        'edu.china_future.subtitle': 'Academic & Language Goal (2026 - 2027)',
        'edu.china_future.desc': 'Building on the experience gained during the YES China Program (China Jiliang University, Hangzhou, 2025), I am actively learning Mandarin to participate in a new academic or Erasmus exchange in China. This goal aims to develop high-level language proficiency and intercultural skills to build a competitive global profile.',
        'edu.yes_china.subtitle': 'YES China Program - Academic Exchange',
        'edu.yes_china.desc': 'Academic exchange and cultural immersion program in China, a fundamental first step towards building an international profile focused on global markets.',
        'skill.mandarin': '🇨🇳 Mandarin (Learning)'
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
        'section.contact': 'Lass uns sprechen!',
        'contact.intro': 'Haben Sie ein Projekt im Sinn oder möchten Sie einfach Hallo sagen?',
        'btn.download_cv': 'Lebenslauf herunterladen',
        'project.ongoing': 'Laufend',
        'project.completed': 'Abgeschlossen',
        'project.visit': 'Website besuchen',
        'edu.china_future.badge': 'Nächster Schritt',
        'edu.china_future.title': 'Akademischer Austausch in China & Chinesischstudium',
        'edu.china_future.subtitle': 'Akademisches & Sprachliches Ziel (2026 - 2027)',
        'edu.china_future.desc': 'Aufbauend auf den Erfahrungen des YES China Programms (China Jiliang University, Hangzhou, 2025) lerne ich aktiv Chinesisch, um in den kommenden Jahren an einem neuen akademischen Austausch in China teilzunehmen.',
        'edu.yes_china.subtitle': 'YES China Program - Akademischer Austausch',
        'edu.yes_china.desc': 'Akademisches Austausch- und Kulturimmersionsprogramm in China.',
        'skill.mandarin': '🇨🇳 Chinesisch (Lernend)'
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
        'section.contact': 'Parlons-en !',
        'contact.intro': 'Vous avez un projet en tête ou souhaitez simplement dire bonjour ?',
        'btn.download_cv': 'Télécharger CV',
        'project.ongoing': 'En cours',
        'project.completed': 'Terminé',
        'project.visit': 'Visiter le site',
        'edu.china_future.badge': 'Prochaine Étape',
        'edu.china_future.title': 'Échange Académique en Chine & Apprentissage du Mandarin',
        'edu.china_future.subtitle': 'Objectif Académique & Linguistique (2026 - 2027)',
        'edu.china_future.desc': 'En me basant sur l\'expérience du YES China Program (China Jiliang University, Hangzhou, 2025), j\'apprends le mandarin pour réaliser un nouvel échange académique en Chine.',
        'edu.yes_china.subtitle': 'YES China Program - Échange Académique',
        'edu.yes_china.desc': 'Programme d\'échange académique et d\'immersion culturelle en Chine.',
        'skill.mandarin': '🇨🇳 Mandarin (En apprentissage)'
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
        'section.contact': '¡Hablemos!',
        'contact.intro': '¿Tienes un proyecto en mente o simplemente quieres saludar?',
        'btn.download_cv': 'Descargar CV',
        'project.ongoing': 'En curso',
        'project.completed': 'Completado',
        'project.visit': 'Visitar sitio web',
        'edu.china_future.badge': 'Próximo Paso',
        'edu.china_future.title': 'Intercambio Académico en China y Estudio de Mandarín',
        'edu.china_future.subtitle': 'Objetivo Académico y Lingüístico (2026 - 2027)',
        'edu.china_future.desc': 'Basándome en la experiencia del YES China Program (China Jiliang University, Hangzhou, 2025), estoy aprendiendo mandarín para realizar un nuevo intercambio académico en China.',
        'edu.yes_china.subtitle': 'YES China Program - Intercambio Académico',
        'edu.yes_china.desc': 'Programa de intercambio académico e inmersión cultural en China.',
        'skill.mandarin': '🇨🇳 Mandarín (En aprendizaje)'
    },
    'da': {
        'nav.projects': 'Projekter',
        'nav.education': 'Uddannelse',
        'nav.experience': 'Erfaring',
        'nav.skills': 'Færdigheder',
        'nav.contact': 'Kontakt',
        'hero.greeting': 'Hej, jeg er',
        'hero.subtitle': 'Business Analyst & Web Developer',
        'hero.description': 'Jeg forvandler komplekse data til vindende strategier og kreative ideer til engagerendinge digitale oplevelser.',
        'section.projects': 'Projekter',
        'section.education': 'Akademisk Uddannelse',
        'section.skills': 'Færdigheder & Interesser',
        'section.experience': 'Erfaring',
        'section.contact': 'Lad os tale sammen!',
        'contact.intro': 'Har du et projekt i tankerne, eller vil du bare sige hej?',
        'btn.download_cv': 'Download CV',
        'project.ongoing': 'I gang',
        'project.completed': 'Afsluttet',
        'project.visit': 'Besøg hjemmeside',
        'edu.china_future.badge': 'Næste Skridt',
        'edu.china_future.title': 'Akademisk Udveksling i Kina & Kinesiskstudier',
        'edu.china_future.subtitle': 'Akademisk & Sprogligt Mål (2026 - 2027)',
        'edu.china_future.desc': 'Bygger videre på YES China Program (China Jiliang University, Hangzhou, 2025) for at gennemføre en ny udveksling i Kina.',
        'edu.yes_china.subtitle': 'YES China Program - Udveksling',
        'edu.yes_china.desc': 'Akademisk udveksling og kulturel fordybelse i Kina.',
        'skill.mandarin': '🇨🇳 Kinesisk (Lærer)'
    },
    'zh': {
        'nav.projects': '个人项目',
        'nav.education': '教育背景',
        'nav.experience': '工作经历',
        'nav.skills': '专业技能',
        'nav.contact': '联系我',
        'hero.greeting': '你好，我是',
        'hero.subtitle': '商务分析师 & 网页开发人员',
        'hero.description': '我将复杂的数据转化为制胜策略，并将创意想法转化为引人入胜的数字化体验。',
        'section.projects': '个人项目',
        'section.education': '教育背景',
        'section.skills': '技能与兴趣',
        'section.experience': '工作经历',
        'section.contact': '保持联系！',
        'contact.intro': '想交流项目或打个招呼吗？随时欢迎与我联系！',
        'btn.download_cv': '下载简历',
        'project.ongoing': '进行中',
        'project.completed': '已完成',
        'project.visit': '访问网站',
        'edu.china_future.badge': '下一步计划',
        'edu.china_future.title': '中国学术交换与中文学习',
        'edu.china_future.subtitle': '学术与语言目标 (2026 - 2027)',
        'edu.china_future.desc': '依托 YES China 项目（中国计量大学，杭州，2025年）的基础，我正在深入学习中文，计划在未来几年赴中国开展新的学术交换或 Erasmus 项目，以培养跨文化沟通能力与国际竞争优势。',
        'edu.yes_china.subtitle': 'YES China 项目 - 学术交换',
        'edu.yes_china.desc': '在中国的学术交换与文化沉浸项目，是迈向国际化视野的重要一步。',
        'skill.mandarin': '🇨🇳 中文 (学习中)'
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
        else if (lang === 'zh') heroSubtitle.innerHTML = `商务分析师 & <span class="text-gradient">网页开发人员</span>`;
    }
}

// Detect user preferred language based on browser configuration
function detectUserLanguage() {
    const supported = ['it', 'en', 'de', 'fr', 'es', 'da', 'zh'];
    const langs = navigator.languages || [navigator.language || navigator.userLanguage];
    
    for (const lang of langs) {
        if (!lang) continue;
        const cleanLang = lang.toLowerCase().split('-')[0];
        if (supported.includes(cleanLang)) {
            return cleanLang;
        }
    }
    return 'en';
}

// Load saved language on page load or detect automatically
let savedLang = localStorage.getItem('selectedLanguage');
if (!savedLang || !languages[savedLang]) {
    savedLang = detectUserLanguage();
    localStorage.setItem('selectedLanguage', savedLang);
}

const savedLanguage = languages[savedLang];
if (savedLanguage) {
    currentLangSpan.textContent = `${savedLanguage.flag} ${savedLanguage.code}`;
    const activeOption = document.querySelector(`[data-lang="${savedLang}"]`);
    if (activeOption) {
        activeOption.classList.add('active');
    }
    // Set page content dynamically to the chosen language immediately on load
    updatePageContent(savedLang);
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
