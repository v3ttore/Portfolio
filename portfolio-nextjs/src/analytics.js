// Statistiche delle visite con GoatCounter (gratis, senza cookie: non serve il banner).
// Il codice è la parte prima di .goatcounter.com. Vuoto = nessun conteggio.
// Le visite si leggono nella dashboard DashRino, pagina Portfolio.
export const GOATCOUNTER_CODE = 'ettore';

// Conta un evento (clic su link, apertura di un documento). Non fa nulla se GoatCounter non è caricato.
export function trackEvent(name) {
  if (typeof window === 'undefined' || !window.goatcounter?.count) return;
  window.goatcounter.count({ path: name.slice(0, 200), title: name.slice(0, 200), event: true });
}
