'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/i18n/translations';

export function useLanguage() {
    const [currentLang, setCurrentLang] = useState('it');

    useEffect(() => {
        // Load saved language from localStorage
        const saved = localStorage.getItem('selectedLanguage');
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
