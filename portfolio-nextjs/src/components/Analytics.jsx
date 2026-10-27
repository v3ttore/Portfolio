'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { GOATCOUNTER_CODE, trackEvent } from '@/analytics';

// Conta ogni pagina vista, anche quando si passa da una pagina all'altra senza ricaricare,
// e i clic sui link esterni (LinkedIn, Instagram, aziende, tesi...).
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GOATCOUNTER_CODE) return;
    const count = () => window.goatcounter?.count?.({ path: pathname || '/' });
    if (window.goatcounter?.count) count();
    else window.addEventListener('goatcounter-ready', count, { once: true });
    return () => window.removeEventListener('goatcounter-ready', count);
  }, [pathname]);

  useEffect(() => {
    if (!GOATCOUNTER_CODE) return;
    const onClick = (e) => {
      const a = e.target.closest?.('a[href]');
      if (!a) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) trackEvent(`link: ${url.hostname.replace(/^www\./, '')}${url.pathname === '/' ? '' : url.pathname}`);
      else if (/\.pdf$/i.test(url.pathname) || url.pathname.includes('/thesis/')) trackEvent(`documento: ${url.pathname.replace(/^\/Portfolio/, '')}`);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  if (!GOATCOUNTER_CODE) return null;
  return (
    <Script
      src="https://gc.zgo.at/count.js"
      data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
      data-goatcounter-settings='{"no_onload": true}'
      strategy="afterInteractive"
      onLoad={() => window.dispatchEvent(new Event('goatcounter-ready'))}
    />
  );
}
