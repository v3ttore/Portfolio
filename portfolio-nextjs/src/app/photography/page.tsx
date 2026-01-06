'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

const photos = [
    { id: 1, src: '/photography/photo-1.jpg', location: 'Hangzhou, China', year: '2025' },
    { id: 2, src: '/photography/photo-2.jpg', location: 'Hangzhou, China', year: '2025' },
    { id: 3, src: '/photography/photo-3.jpg', location: 'Hangzhou, China', year: '2025' },
    { id: 4, src: '/photography/photo-4.jpg', location: 'Hangzhou, China', year: '2025' },
    { id: 5, src: '/photography/photo-5.jpg', location: 'Copenhagen, Denmark', year: '2025' },
    { id: 6, src: '/photography/photo-6.jpg', location: 'Frankfurt, Germany', year: '2025' },
];

export default function PhotographyPage() {
    const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
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
                    <p>{t.photographyPage.description}</p>
                </header>

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
                                alt={photo.location}
                                className="gallery-image"
                            />
                            <div className="photo-overlay">
                                <div className="photo-info">
                                    <span className="photo-location">{photo.location}</span>
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
                        <img src={selectedPhoto.src} alt={selectedPhoto.location} />
                        <div className="lightbox-info">
                            <h3>{selectedPhoto.location}</h3>
                            <p>{selectedPhoto.year}</p>
                        </div>
                    </div>
                    <button className="lightbox-close" onClick={() => setSelectedPhoto(null)}>×</button>
                </div>
            )}


        </>
    );
}
