'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import Image from 'next/image';

const tools = [
    { name: 'figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'antigravity', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
    { name: 'lovable', logo: 'https://avatars.githubusercontent.com/u/173535935?s=200&v=4' },
    { name: 'notion', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg' },
    { name: 'excel', logo: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png' },
    { name: 'office', logo: 'https://img.icons8.com/color/96/microsoft-office-2019.png' },
    { name: 'python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
];

export default function ToolsPage() {
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

            <div className="container" style={{ paddingTop: '120px' }}>
                <header className="page-header" style={{ textAlign: 'center' }}>
                    <h1>🛠️ {t.interests.creativeTools}</h1>
                    <p>{t.interests.creativeToolsDesc}</p>
                </header>

                <div className="tools-grid-page">
                    {tools.map((tool) => (
                        <div key={tool.name} className="tool-card-page">
                            <div className="tool-logo-container">
                                <Image
                                    src={tool.logo}
                                    alt={t.interests.tools[tool.name as keyof typeof t.interests.tools].name}
                                    width={80}
                                    height={80}
                                    className="tool-logo-img"
                                    unoptimized
                                />
                            </div>
                            <h3>{t.interests.tools[tool.name as keyof typeof t.interests.tools].name}</h3>
                            <p>{t.interests.tools[tool.name as keyof typeof t.interests.tools].description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
