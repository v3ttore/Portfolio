'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

export default function YouTubePage() {
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

      <div className="youtube-container">
        <header className="page-header">
          <div className="youtube-logo">
            <svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000" />
            </svg>
          </div>
          <h1>{t.youtubePage.title}</h1>
        </header>
        <p className="page-description">{t.youtubePage.description}</p>

        <section className="youtube-section">
          <div className="channels-grid">
            <a href="https://www.youtube.com/@marcelloascani" className="channel-card" target="_blank" rel="noopener noreferrer">
              <div className="channel-image-wrapper">
                <img src="https://unavatar.io/youtube/marcelloascani" alt="Marcello Ascani" className="channel-image" />
              </div>
              <div className="channel-content">
                <div className="channel-name">Marcello Ascani</div>
                <p className="channel-description">
                  {t.youtubePage.channels.marcelloAscani}
                </p>
              </div>
            </a>

            <a href="https://www.youtube.com/@Caff%C3%A8Design" className="channel-card" target="_blank" rel="noopener noreferrer">
              <div className="channel-image-wrapper">
                <img src="https://unavatar.io/youtube/caffedesign" alt="Caffè Design" className="channel-image" />
              </div>
              <div className="channel-content">
                <div className="channel-name">Caffè Design</div>
                <p className="channel-description">
                  {t.youtubePage.channels.caffeDesign}
                </p>
              </div>
            </a>

            <a href="https://www.youtube.com/@NovaLectio" className="channel-card" target="_blank" rel="noopener noreferrer">
              <div className="channel-image-wrapper">
                <img src="https://unavatar.io/youtube/novalectio" alt="Nova Lectio" className="channel-image" />
              </div>
              <div className="channel-content">
                <div className="channel-name">Nova Lectio</div>
                <p className="channel-description">
                  {t.youtubePage.channels.novaLectio}
                </p>
              </div>
            </a>

            <a href="https://www.youtube.com/@MatArmstrongbmx" className="channel-card" target="_blank" rel="noopener noreferrer">
              <div className="channel-image-wrapper">
                <img src="https://unavatar.io/youtube/MatArmstrongbmx" alt="Mat Armstrong" className="channel-image" />
              </div>
              <div className="channel-content">
                <div className="channel-name">Mat Armstrong</div>
                <p className="channel-description">
                  {t.youtubePage.channels.matArmstrong}
                </p>
              </div>
            </a>

            <a href="https://www.youtube.com/@jakidale" className="channel-card" target="_blank" rel="noopener noreferrer">
              <div className="channel-image-wrapper">
                <img src="https://unavatar.io/youtube/jakidale" alt="Jaki Dale" className="channel-image" />
              </div>
              <div className="channel-content">
                <div className="channel-name">Jaki Dale</div>
                <p className="channel-description">
                  {t.youtubePage.channels.jakiDale}
                </p>
              </div>
            </a>

            <a href="https://www.youtube.com/@mkbhd" className="channel-card" target="_blank" rel="noopener noreferrer">
              <div className="channel-image-wrapper">
                <img src="https://unavatar.io/youtube/mkbhd" alt="MKBHD" className="channel-image" />
              </div>
              <div className="channel-content">
                <div className="channel-name">MKBHD</div>
                <p className="channel-description">
                  {t.youtubePage.channels.mkbhd}
                </p>
              </div>
            </a>

            <a href="https://www.youtube.com/@enricotartarotti" className="channel-card" target="_blank" rel="noopener noreferrer">
              <div className="channel-image-wrapper">
                <img src="https://unavatar.io/youtube/enricotartarotti" alt="Enrico Tartarotti" className="channel-image" />
              </div>
              <div className="channel-content">
                <div className="channel-name">Enrico Tartarotti</div>
                <p className="channel-description">
                  {t.youtubePage.channels.enricoTartarotti}
                </p>
              </div>
            </a>
            <a href="https://www.youtube.com/@GioPizzi" className="channel-card" target="_blank" rel="noopener noreferrer">
              <div className="channel-image-wrapper">
                <img src="https://unavatar.io/youtube/GioPizzi" alt="GioPizzi" className="channel-image" />
              </div>
              <div className="channel-content">
                <div className="channel-name">GioPizzi</div>
                <p className="channel-description">
                  {t.youtubePage.channels.gioPizzi}
                </p>
              </div>
            </a>

            <a href="https://www.youtube.com/@safariumano" className="channel-card" target="_blank" rel="noopener noreferrer">
              <div className="channel-image-wrapper">
                <img src="https://unavatar.io/youtube/safariumano" alt="Safari Umano" className="channel-image" />
              </div>
              <div className="channel-content">
                <div className="channel-name">Safari Umano</div>
                <p className="channel-description">
                  {t.youtubePage.channels.safariUmano}
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
