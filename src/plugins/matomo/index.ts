/* eslint-disable no-underscore-dangle */

declare global {
    interface Window {
        _paq: Array<unknown>;
    }
}


/**
 * Matomo
 */
const _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['setDocumentTitle', `${document.domain}/${document.title}`]);
_paq.push(['setCookieDomain', '*.sharewifi.cool']);
_paq.push(['setDomains', ['*.sharewifi.cool', '*.sharewifi.cool']]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function initAnalytics(): void {
  const u = '//analytics.utomic.media/';
  _paq.push(['setTrackerUrl', `${u}matomo.php`]);
  _paq.push(['setSiteId', '3']);
  const d = document;
  const g = d.createElement('script');
  const s = d.getElementsByTagName('script')[0];
  g.type = 'text/javascript';
  g.async = true;
  g.src = `${u}matomo.js`;
  s.parentNode?.insertBefore(g, s);
}

export default initAnalytics;
