'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

const photos = [
    { id: 1, src: '/Portfolio/photography/photo-1.jpg', locationKey: 'hangzhouChina', year: '2025' },
    { id: 2, src: '/Portfolio/photography/photo-2.jpg', locationKey: 'hangzhouChina', year: '2025' },
    { id: 3, src: '/Portfolio/photography/photo-3.jpg', locationKey: 'hangzhouChina', year: '2025' },
    { id: 4, src: '/Portfolio/photography/photo-4.jpg', locationKey: 'hangzhouChina', year: '2025' },
    { id: 5, src: '/Portfolio/photography/photo-5.jpg', locationKey: 'copenhagenDenmark', year: '2025' },
    { id: 6, src: '/Portfolio/photography/photo-6.jpg', locationKey: 'frankfurtGermany', year: '2025' },
    { id: 7, src: '/Portfolio/photography/photo-7.jpg', locationKey: 'munsterGermany', year: '2025' },
    { id: 8, src: '/Portfolio/photography/photo-8.jpg', locationKey: 'munsterGermany', year: '2025' },
    { id: 9, src: '/Portfolio/photography/photo-9.jpg', locationKey: 'hamburgGermany', year: '2025' },
    { id: 10, src: '/Portfolio/photography/photo-10.jpg', locationKey: 'bonnGermany', year: '2025' },
];

export default function PhotographyPage() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const { t } = useLanguage();

    return (
        <>
            <nav className="navbar subpage-navbar" id="navbar">
                <div className="navbar-wrapper">
                    <div className="nav-glass-section subpage-links-section">
                        <ul className="subpage-menu">
                            <li>
                                <Link href="/" className="nav-link">
                                    ← Home
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <header className="page-header">
                    <h1>{t.photographyPage.title}</h1>
                </header>
                <p className="page-description">{t.photographyPage.description}</p>

                <div className="gallery-masonry">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="gallery-item"
                            onClick={() => setSelectedPhoto(photo)}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={photo.src}
                                alt={t.locations[photo.locationKey]}
                                className="gallery-image"
                            />
                            <div className="photo-overlay">
                                <div className="photo-info">
                                    <span className="photo-location">{t.locations[photo.locationKey]}</span>
                                    <span className="photo-date">{photo.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            {selectedPhoto && (
                <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedPhoto.src} alt={t.locations[selectedPhoto.locationKey]} />
                        <div className="lightbox-info">
                            <h3>{t.locations[selectedPhoto.locationKey]}</h3>
                            <p>{selectedPhoto.year}</p>
                        </div>
                    </div>
                    <button className="lightbox-close" onClick={() => setSelectedPhoto(null)}>×</button>
                </div>
            )}
        </>
    );
}
