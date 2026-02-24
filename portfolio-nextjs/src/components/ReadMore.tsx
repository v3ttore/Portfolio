'use client';

import { useState, useEffect } from 'react';

interface ReadMoreProps {
    children: React.ReactNode;
    maxLength: number;
}

export default function ReadMore({ children, maxLength }: ReadMoreProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const text = typeof children === 'string' ? children : '';
    const shouldTruncate = text.length > maxLength;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Check initial
        checkMobile();

        // Add listener
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isMobile || !shouldTruncate || !text) {
        return <p className="experience-description">{children}</p>;
    }

    return (
        <div className="read-more-container">
            <p className="experience-description">
                {isExpanded ? text : `${text.substring(0, maxLength)}...`}
            </p>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="read-more-btn"
                aria-expanded={isExpanded}
            >
                {isExpanded ? 'Leggi meno ▲' : 'Leggi di più ▼'}
            </button>
        </div>
    );
}
