'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PDFModal from '@/components/PDFModal';
import ReadMore from '@/components/ReadMore';
import { useLanguage } from '@/hooks/useLanguage';

export default function Home() {
  const { currentLang, changeLanguage, t } = useLanguage();
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState('');

  const openPdf = (url) => {
    setCurrentPdfUrl(url);
    setPdfModalOpen(true);
  };

  useEffect(() => {
    // Smooth scroll for navigation links
    const handleClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    // Intersection Observer for animations - Modern approach with classes
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Apply animation class to elements instead of entire sections for a staggered feel
    const animatedElements = document.querySelectorAll(
      '.experience-card, .timeline-content, .engineering-card, .interest-card, .competition-card-compact, .hero-content'
    );

    animatedElements.forEach((el) => {
      el.classList.add('animate-slide-up');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar currentLang={currentLang} onLanguageChange={changeLanguage} t={t} />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-greeting">{t.hero.greeting}</p>
            <h1 className="hero-title">Ettore Liotta</h1>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/ettore-liotta/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link linkedin"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/ettolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link instagram"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <Image
                src="/Portfolio/profile-2026.png"
                alt="Ettore Liotta"
                width={400}
                height={400}
                style={{ width: '100%', borderRadius: '50%' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="esperienza" className="section experience">
        <div className="container">
          <h2 className="section-title">{t.sections.experience}</h2>
          <div className="experience-grid">

            {/* UniStudents */}
            <div className="experience-card unistudents-card">
              <div className="experience-logo-container">
                <a href="https://unistudents.app" target="_blank" rel="noopener noreferrer" className="experience-logo-link" title="UniStudents">
                  <Image
                    src="/Portfolio/unistudents-logo.png"
                    alt="UniStudents Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="experience-logo"
                  />
                </a>
              </div>
              <div className="experience-content">
                <div className="experience-top">
                  <div className="experience-title-group">
                    <h3>UniStudents</h3>
                    <span className="experience-role">{t.experience.unistudents.role}</span>
                  </div>
                  <span className="experience-period">{t.experience.unistudents.date}</span>
                </div>
                <ReadMore maxLength={120}>
                  {t.experience.unistudents.description}
                </ReadMore>
                <a href="https://maps.google.com/?q=Bari,Italia" target="_blank" rel="noopener noreferrer" className="location-badge">{t.locations.bariItaly}</a>
              </div>
            </div>

            {/* Ernst & Young */}
            <div className="experience-card ey-card">
              <div className="experience-logo-container">
                <a href="https://www.ey.com/it_it" target="_blank" rel="noopener noreferrer" className="experience-logo-link" title="Ernst & Young">
                  <Image
                    src="/Portfolio/ey-logo.png"
                    alt="EY Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="experience-logo"
                  />
                </a>
              </div>
              <div className="experience-content">
                <div className="experience-top">
                  <div className="experience-title-group">
                    <h3>Ernst & Young (EY)</h3>
                    <span className="experience-role">{t.experience.ey.role}</span>
                  </div>
                  <span className="experience-period">{t.experience.ey.date}</span>
                </div>
                <ReadMore maxLength={120}>
                  {t.experience.ey.description}
                </ReadMore>
                <a href="https://maps.google.com/?q=Bari,Italia" target="_blank" rel="noopener noreferrer" className="location-badge">{t.locations.bariItaly}</a>
              </div>
            </div>

            {/* FlyBag */}
            <div className="experience-card flybag-card">
              <div className="experience-logo-container">
                <a href="https://flybag.it/" target="_blank" rel="noopener noreferrer" className="experience-logo-link" title="FlyBag">
                  <Image
                    src="/Portfolio/flybag-logo.png"
                    alt="FlyBag Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="experience-logo"
                  />
                </a>
              </div>
              <div className="experience-content">
                <div className="experience-top">
                  <div className="experience-title-group">
                    <h3>FlyBag</h3>
                    <span className="experience-role">{t.experience.flybag.role}</span>
                  </div>
                  <span className="experience-period">{t.experience.flybag.date}</span>
                </div>
                <ReadMore maxLength={120}>
                  {t.experience.flybag.description}
                </ReadMore>
                <a href="https://maps.google.com/?q=Bari,Italia" target="_blank" rel="noopener noreferrer" className="location-badge">{t.locations.bariItaly}</a>
              </div>
            </div>

            {/* Impact Hub */}
            <div className="experience-card impacthub-card">
              <div className="experience-logo-container">
                <a href="https://bari.impacthub.net/" target="_blank" rel="noopener noreferrer" className="experience-logo-link" title="Impact Hub Bari">
                  <Image
                    src="/Portfolio/impact-hub-logo.png"
                    alt="Impact Hub Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="experience-logo"
                  />
                </a>
              </div>
              <div className="experience-content">
                <div className="experience-top">
                  <div className="experience-title-group">
                    <h3>Impact Hub Bari</h3>
                    <span className="experience-role">{t.experience.impactHub.role}</span>
                  </div>
                  <span className="experience-period">{t.experience.impactHub.date}</span>
                </div>
                <ReadMore maxLength={120}>
                  {t.experience.impactHub.description}
                </ReadMore>
                <a href="https://maps.google.com/?q=Fiera+del+Levante,Bari,Italia" target="_blank" rel="noopener noreferrer" className="location-badge">{t.locations.fieraLevanteBari}</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formazione" className="section education">
        <div className="container">
          <h2 className="section-title">{t.sections.education}</h2>
          <div className="timeline">

            {/* LUM University */}
            <div className="timeline-item">
              <div className="timeline-date-badge">{t.education.lum.date}</div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <Image
                    src="/Portfolio/lum-logo.png"
                    alt="LUM Logo"
                    width={70}
                    height={70}
                    className="timeline-logo"
                  />
                  <div className="timeline-title-group">
                    <div className="lum-title-row">
                      <h3>LUM – Libera Università Mediterranea</h3>
                      <span className="thesis-cta-wrap">
                        <span className="cta-brand cta-dhl" aria-hidden="true">DHL</span>
                        <span className="cta-brand cta-ups" aria-hidden="true">UPS</span>
                        <span className="cta-brand cta-sf" aria-hidden="true">SF Express</span>
                        <a href="/Portfolio/thesis/index.html" target="_blank" rel="noopener noreferrer" className="thesis-cta">
                          {t.education.thesis.cta}
                        </a>
                      </span>
                    </div>
                    <p className="timeline-subtitle">{t.education.lum.degree}</p>
                  </div>
                </div>
                <div className="timeline-body">
                  <p className="timeline-description">
                    {t.education.lum.description}
                  </p>
                  <a href="https://maps.google.com/?q=Casamassima,Bari,Italia" target="_blank" rel="noopener noreferrer" className="location-badge">{t.locations.casamassimaBari}</a>

                  {/* Sub-experiences */}
                  <div className="timeline-sub-items">
                    {/* Bachelor's Thesis (most recent, shown first) */}
                    <div className="timeline-sub-item thesis-feature" id="tesi">
                      <div className="thesis-stripe"></div>
                      <div className="thesis-top">
                        <div className="thesis-brands" aria-label="DHL, UPS, SF Express">
                          <span className="brand-chip dhl">DHL</span>
                          <span className="brand-chip ups">UPS</span>
                          <span className="brand-chip sf">SF Express</span>
                        </div>
                        <span className="thesis-latest">{t.education.thesis.date}</span>
                      </div>
                      <div>
                        <p className="thesis-title">{t.education.thesis.title}</p>
                        <p className="timeline-sub-description" style={{ marginTop: '0.5rem' }}>
                          {t.education.thesis.description}
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <a href="/Portfolio/thesis/index.html" target="_blank" rel="noopener noreferrer" className="thesis-btn">
                          {t.education.thesis.read}
                          <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                        <span style={{ fontSize: '0.75rem', color: '#666', fontStyle: 'italic' }}>
                          {t.education.thesis.copyright}
                        </span>
                      </div>
                    </div>

                    {/* Erasmus */}
                    <div className="timeline-sub-item">
                      <Image
                        src="/Portfolio/westfalische-logo.png"
                        alt="Westfälische Hochschule Logo"
                        width={50}
                        height={50}
                        className="timeline-sub-logo"
                      />
                      <div className="timeline-sub-content">
                        <div className="timeline-sub-header">
                          <h4>Westfälische Hochschule</h4>
                          <span className="timeline-sub-date">{t.education.westfalische.date}</span>
                        </div>
                        <p className="timeline-sub-subtitle">{t.education.westfalische.degree}</p>
                        <p className="timeline-sub-description">
                          {t.education.westfalische.description}
                        </p>
                        <a href="https://maps.google.com/?q=Gelsenkirchen,Germany" target="_blank" rel="noopener noreferrer" className="location-badge location-badge-small">{t.locations.gelsenkirchenGermany}</a>
                      </div>
                    </div>

                    {/* YES China */}
                    <div className="timeline-sub-item">
                      <Image
                        src="/Portfolio/china-jiliang-logo.png"
                        alt="China Jiliang University Logo"
                        width={50}
                        height={50}
                        className="timeline-sub-logo"
                      />
                      <div className="timeline-sub-content">
                        <div className="timeline-sub-header">
                          <h4>China Jiliang University</h4>
                          <span className="timeline-sub-date">{t.education.yesChina.date}</span>
                        </div>
                        <p className="timeline-sub-subtitle">{t.education.yesChina.title}</p>
                        <p className="timeline-sub-description">
                          {t.education.yesChina.description}
                        </p>
                        <a href="https://maps.google.com/?q=Hangzhou,Zhejiang,China" target="_blank" rel="noopener noreferrer" className="location-badge location-badge-small">{t.locations.hangzhouChina}</a>
                      </div>
                    </div>

                    {/* Excel Course */}
                    <div className="timeline-sub-item">
                      <Image
                        src="/Portfolio/lum-logo.png"
                        alt="LUM Logo"
                        width={50}
                        height={50}
                        className="timeline-sub-logo"
                      />
                      <div className="timeline-sub-content">
                        <div className="timeline-sub-header">
                          <h4>Università LUM</h4>
                          <span className="timeline-sub-date">{t.education.excelCourse.date}</span>
                        </div>
                        <p className="timeline-sub-subtitle">{t.education.excelCourse.title}</p>
                        <p className="timeline-sub-description">
                          {t.education.excelCourse.description}
                        </p>
                        <a href="https://maps.google.com/?q=Casamassima,Bari,Italia" target="_blank" rel="noopener noreferrer" className="location-badge location-badge-small">{t.locations.casamassimaBari}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Liceo Scientifico */}
            <div className="timeline-item">
              <div className="timeline-date-badge">{t.education.liceo.date}</div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <Image
                    src="/Portfolio/salvemini-logo.png"
                    alt="Liceo Salvemini Logo"
                    width={70}
                    height={70}
                    className="timeline-logo"
                  />
                  <div className="timeline-title-group">
                    <h3>Liceo Scientifico Statale &quot;Gaetano Salvemini&quot;</h3>
                    <p className="timeline-subtitle">{t.education.liceo.degree}</p>
                  </div>
                </div>
                <div className="timeline-body">
                  <p className="timeline-description">
                    {t.education.liceo.description}
                  </p>
                  <a href="https://maps.google.com/?q=Bari,Italia" target="_blank" rel="noopener noreferrer" className="location-badge">{t.locations.bariItaly}</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills & Interests Section */}
      <section id="competenze" className="section skills">
        <div className="container">
          <h2 className="section-title">{t.sections.skills}</h2>

          {/* Skills Grid */}
          <div className="skills-grid">
            <div className="skill-category">
              <h3>💼 {t.skills.hard}</h3>
              <div className="skill-tags">
                <span className="skill-tag">UX/UI Design</span>
                <span className="skill-tag">Business Analysis</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Microsoft Office</span>
                <span className="skill-tag">Video Editing</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>🧠 {t.skills.soft}</h3>
              <div className="skill-tags">
                <span className="skill-tag">{t.skills.tags.problemSolving}</span>
                <span className="skill-tag">{t.skills.tags.communication}</span>
                <span className="skill-tag">{t.skills.tags.teamWork}</span>
                <span className="skill-tag">{t.skills.tags.leadership}</span>
                <span className="skill-tag">{t.skills.tags.creativity}</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>🌍 {t.skills.languages}</h3>
              <div className="skill-tags">
                <span className="skill-tag">🇮🇹 {t.languageNames.it} ({t.skills.tags.native})</span>
                <span className="skill-tag">🇬🇧 {t.languageNames.en} ({t.skills.tags.fluent})</span>
                <span className="skill-tag">🇩🇪 {t.languageNames.de} ({t.skills.tags.beginner})</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interessi" className="section interests">
        <div className="container">
          <h2 className="section-title">{t.sections.interests}</h2>
          <div className="interests-grid">
            <Link href="/photography" className="interest-card">
              <div className="interest-icon">📷</div>
              <div className="interest-content">
                <h4>{t.interests.photography}</h4>
                <p>{t.interests.photographyDesc}</p>
              </div>
            </Link>

            <Link href="/youtube" className="interest-card youtube-card">
              <div className="interest-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div className="interest-content">
                <h4>{t.interests.youtube}</h4>
                <p>{t.interests.youtubeDesc}</p>
              </div>
            </Link>

            <a href="https://www.strava.com/athletes/62931725" target="_blank" rel="noopener noreferrer" className="interest-card strava-card">
              <div className="interest-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FC4C02">
                  <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                </svg>
              </div>
              <div className="interest-content">
                <h4>{t.interests.strava}</h4>
                <p>{t.interests.stravaDesc}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competizioni" className="section competitions">
        <div className="container">
          <h2 className="section-title">{t.sections.competitions}</h2>
          <div className="competitions-list">

            {/* Hackathon Binp */}
            <div className="competition-card-compact binp-card">
              <div className="competition-compact-header">
                <Image
                  src="/Portfolio/binp-logo.png"
                  alt="Binp Logo"
                  width={50}
                  height={50}
                  className="competition-compact-logo"
                  style={{ objectFit: 'contain' }}
                />
                <div className="competition-compact-title-group">
                  <h4>{t.competitions.binp.title}</h4>
                  <span className="competition-compact-date">2024</span>
                </div>
              </div>
              <p className="competition-compact-description">
                {t.competitions.binp.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => openPdf('/Portfolio/documents/binp.pdf')}
                  className="pitch-button"
                >
                  {t.competitions.binp.viewProject}
                </button>
                {t.competitions.binp.onlyInItalian && (
                  <span style={{ fontSize: '0.8rem', color: '#666', fontStyle: 'italic' }}>
                    {t.competitions.binp.onlyInItalian}
                  </span>
                )}
              </div>
            </div>

            {/* Make It A Case */}
            <div className="competition-card-compact make-it-a-case-card">
              <div className="competition-compact-header">
                <Image
                  src="/Portfolio/make-it-a-case-logo.png"
                  alt="Make It A Case Logo"
                  width={50}
                  height={50}
                  className="competition-compact-logo"
                  style={{ objectFit: 'contain' }}
                />
                <div className="competition-compact-title-group">
                  <h4>Make It A Case</h4>
                  <span className="competition-compact-date">2024</span>
                </div>
              </div>
              <p className="competition-compact-description">
                {t.competitions.makeItACase.description}
                {' '}
                <a href="https://www.facebook.com/alvearedafavola/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  Alveare da Favola
                </a>
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => openPdf('/Portfolio/documents/make-it-a-case.pdf')}
                  className="pitch-button"
                >
                  {t.competitions.makeItACase.viewProject}
                </button>
                {t.competitions.makeItACase.onlyInItalian && (
                  <span style={{ fontSize: '0.8rem', color: '#666', fontStyle: 'italic' }}>
                    {t.competitions.makeItACase.onlyInItalian}
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <PDFModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        pdfUrl={currentPdfUrl}
      />
    </>
  );
}
