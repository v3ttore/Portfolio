'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Language, languages } from '@/i18n/translations';

interface NavbarProps {
    currentLang: Language;
    onLanguageChange: (lang: Language) => void;
    t: any;
    isSubpage?: boolean;
}

export default function Navbar({ currentLang, onLanguageChange, t, isSubpage = false }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [showName, setShowName] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setScrolled(currentScroll > 100);

            // Dynamic CV button logic
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                const heroHeight = heroSection.clientHeight;
                const scrollThreshold = heroHeight - 100;
                setShowName(currentScroll > scrollThreshold);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCVButtonClick = (e: React.MouseEvent) => {
        if (showName) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleLanguageSelect = (lang: Language) => {
        onLanguageChange(lang);
        setLangDropdownOpen(false);
    };

    if (isSubpage) {
        return (
            <nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                id="navbar"
                style={{
                    zIndex: 9999,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    pointerEvents: 'none' // Allow clicks to pass through wrapper
                }}
            >
                <div
                    className="navbar-wrapper"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        pointerEvents: 'auto', // Re-enable clicks on content
                        width: '100%',
                        padding: '10px 0'
                    }}
                >
                    <div
                        className="nav-glass-section"
                        style={{
                            padding: '0 24px',
                            width: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '60px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(30px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                            borderRadius: '100px',
                            boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.05), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
                            visibility: 'visible',
                            opacity: 1
                        }}
                    >
                        <Link
                            href="/"
                            className="nav-link"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--color-text-primary)',
                                textDecoration: 'none',
                                fontWeight: 500,
                                fontSize: '0.95rem',
                                padding: 0,
                                background: 'transparent',
                                visibility: 'visible',
                                opacity: 1
                            }}
                        >
                            ← {t.nav.home}
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="navbar-wrapper">
                {/* Section 1: Navigation Links */}
                <div className="nav-glass-section nav-links-section">
                    <button
                        className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
                        <li>
                            <a href="#esperienza" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                                {t.nav.experience}
                            </a>
                        </li>

                        <li>
                            <a href="#formazione" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                                {t.nav.education}
                            </a>
                        </li>
                        <li>
                            <a href="#competenze" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                                {t.nav.skills}
                            </a>
                        </li>
                        <li>
                            <a href="#interessi" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                                {t.nav.interests}
                            </a>
                        </li>
                        <li>
                            <a href="#competizioni" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                                {t.nav.competitions}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 2: CV Download Button */}
                <div className="nav-glass-section nav-cv-section">
                    <a
                        href="#"
                        className={`cv-download-btn ${showName ? 'show-name' : ''}`}
                        id="cvDownloadBtn"
                        onClick={handleCVButtonClick}
                    >
                        <span className="cv-text">{t.buttons.downloadCV}</span>
                        <span className="download-icon">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </span>
                        <span className="name-text">Ettore Liotta</span>
                    </a>
                </div>

                {/* Section 3: Language Switcher */}
                <div className="nav-glass-section nav-lang-section">
                    <div className="language-switcher">
                        <button
                            className={`language-btn ${langDropdownOpen ? 'active' : ''}`}
                            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                        >
                            <span className="current-lang" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <img
                                    src={languages[currentLang].flag}
                                    alt={languages[currentLang].name}
                                    width={20}
                                    height={15}
                                    style={{ borderRadius: '2px', objectFit: 'cover' }}
                                />
                                {languages[currentLang].code}
                            </span>
                            <span className="dropdown-arrow">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 1L5 5L9 1" />
                                </svg>
                            </span>
                        </button>
                        <div className={`language-dropdown ${langDropdownOpen ? 'active' : ''}`}>
                            {Object.entries(languages).map(([key, lang]) => (
                                <button
                                    key={key}
                                    className={`language-option ${currentLang === key ? 'active' : ''}`}
                                    onClick={() => handleLanguageSelect(key as Language)}
                                >
                                    <img
                                        src={lang.flag}
                                        alt={lang.name}
                                        width={20}
                                        height={15}
                                        style={{ borderRadius: '2px', objectFit: 'cover' }}
                                    />
                                    {lang.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
