'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/i18n/translations';

function detectUserLanguage() {
    if (typeof window === 'undefined') return 'en';
    
    const supported = ['it', 'en', 'de', 'fr', 'es', 'da', 'zh'];
    
    // Get languages preferred by the user
    const languages = navigator.languages || [navigator.language || navigator.userLanguage];
    
    for (const lang of languages) {
        if (!lang) continue;
        const cleanLang = lang.toLowerCase().split('-')[0];
        if (supported.includes(cleanLang)) {
            return cleanLang;
        }
    }
    
    return 'en'; // Default fallback
}

export function useLanguage() {
    const [currentLang, setCurrentLang] = useState('it');

    useEffect(() => {
        // Load saved language from localStorage or detect it
        let saved = localStorage.getItem('selectedLanguage');
        if (!saved || !translations[saved]) {
            saved = detectUserLanguage();
            localStorage.setItem('selectedLanguage', saved);
        }

        if (saved && translations[saved]) {
            setTimeout(() => {
                setCurrentLang(saved);
            }, 0);
        }
    }, []);

    const changeLanguage = (lang) => {
        setCurrentLang(lang);
        localStorage.setItem('selectedLanguage', lang);
    };

    const t = translations[currentLang];

    return { currentLang, changeLanguage, t };
}
