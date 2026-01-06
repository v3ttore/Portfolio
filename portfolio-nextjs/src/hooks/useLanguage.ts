'use client';

import { useState, useEffect } from 'react';
import { Language, translations, Translations } from '@/i18n/translations';

export function useLanguage() {
    const [currentLang, setCurrentLang] = useState<Language>('it');

    useEffect(() => {
        // Load saved language from localStorage
        const saved = localStorage.getItem('selectedLanguage') as Language;
        if (saved && translations[saved]) {
            setCurrentLang(saved);
        }
    }, []);

    const changeLanguage = (lang: Language) => {
        setCurrentLang(lang);
        localStorage.setItem('selectedLanguage', lang);
    };

    const t = translations[currentLang];

    return { currentLang, changeLanguage, t };
}
