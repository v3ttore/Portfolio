'use client';

import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';

interface FooterProps {
    t?: any; // Made optional to prevent errors if not passed immediately, using hook internally
}

export default function Footer({ }: FooterProps) {
    const { t } = useLanguage();

    return (
        <footer className="footer-contact" id="contatti">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        {/* Profile Image */}
                        <div className="footer-image-wrapper">
                            <Image
                                src="/Portfolio/profile.jpg"
                                alt="Ettore Liotta"
                                width={100}
                                height={100}
                                className="footer-profile-image"
                            />
                        </div>

                        {/* Name */}
                        <h2 className="footer-name">Ettore Liotta</h2>
                    </div>

                    {/* Social Links Box */}
                    <div className="footer-socials-box">
                        <a
                            href="https://www.linkedin.com/in/ettore-liotta/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link linkedin"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/ettolio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link instagram"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .footer-content {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                    width: calc(100% - 40px); /* 20px margin on each side */
                    max-width: 1800px; /* Even wider footer */
                    margin: 0 auto;
                    padding: 20px 40px;
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(20px) saturate(180%);
                    -webkit-backdrop-filter: blur(20px) saturate(180%);
                    border-radius: 24px;
                    /* Removed box-shadow and border */
                }

                .footer-left {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .footer-image-wrapper {
                    border-radius: 50%; /* Circle */
                    overflow: hidden;
                    width: 90px;
                    height: 90px;
                    flex-shrink: 0;
                    border: 2px solid white;
                }
                
                .footer-profile-image {
                    object-fit: cover;
                }

                .footer-name {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0;
                    color: var(--color-text-primary);
                }

                .footer-socials-box {
                    display: flex;
                    gap: 12px;
                }

                .footer-social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: rgba(0, 0, 0, 0.03); /* Match hero background */
                    border: none; /* Removed border */
                    border-radius: 100px;
                    color: var(--color-text-secondary); /* Match hero text color */
                    font-weight: 500;
                    transition: all 0.2s ease;
                    text-decoration: none;
                    font-size: 0.9rem;
                }

                .footer-social-link:hover {
                    transform: translateY(-2px);
                    background: white;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                /* Specific Hover Colors for Footer Socials */
                /* Use :global or just verify if styled-jsx supports simple targeting.
                   Since we can't easily add class names dynamically here without changing JSX, 
                   we'll target by href or nth-child, OR better, add classes in JSX.
                */
                .footer-social-link.linkedin:hover {
                    color: #0077B5;
                }

                .footer-social-link.instagram:hover {
                    color: #E1306C;
                }

                @media (max-width: 768px) {
                    .footer-content {
                        flex-direction: column;
                        text-align: center;
                        gap: 24px;
                        padding: 30px 20px;
                    }

                    .footer-left {
                        flex-direction: column;
                        gap: 16px;
                    }
                    
                    .footer-socials-box {
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                }
            `}</style>
        </footer>
    );
}
