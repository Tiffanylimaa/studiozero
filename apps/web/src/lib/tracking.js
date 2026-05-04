const META_PIXEL_ID = '';
const GA_MEASUREMENT_ID = '';

let metaInitialized = false;
let gaInitialized = false;

function canUseBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function loadScript(id, src, attributes = {}) {
  if (!canUseBrowser() || document.getElementById(id)) {
    return;
  }

  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;

  Object.entries(attributes).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });

  document.head.appendChild(script);
}

function initMetaPixel() {
  if (!META_PIXEL_ID || !canUseBrowser() || metaInitialized) {
    return;
  }

  window.fbq = window.fbq || function fbqStub() {
    window.fbq.callMethod
      ? window.fbq.callMethod.apply(window.fbq, arguments)
      : window.fbq.queue.push(arguments);
  };

  if (!window._fbq) {
    window._fbq = window.fbq;
  }

  window.fbq.push = window.fbq.push || window.fbq;
  window.fbq.loaded = true;
  window.fbq.version = '2.0';
  window.fbq.queue = window.fbq.queue || [];

  loadScript('studiozero-meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', META_PIXEL_ID);
  metaInitialized = true;
}

function initGA4() {
  if (!GA_MEASUREMENT_ID || !canUseBrowser() || gaInitialized) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtagStub() {
    window.dataLayer.push(arguments);
  };

  loadScript('studiozero-ga4', `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`);
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
  gaInitialized = true;
}

export function initTracking() {
  initMetaPixel();
  initGA4();
}

export function trackPageView(path) {
  if (!canUseBrowser()) {
    return;
  }

  if (META_PIXEL_ID && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }

  if (GA_MEASUREMENT_ID && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      source: 'studiozero_site',
    });
  }
}

export function trackEvent(eventName, params = {}) {
  if (!canUseBrowser()) {
    return;
  }

  const eventParams = {
    source: 'studiozero_site',
    ...params,
  };

  if (META_PIXEL_ID && typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, eventParams);
  }

  if (GA_MEASUREMENT_ID && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
}

export function trackCheckoutClick(productName, checkoutUrl) {
  trackEvent('checkout_click', {
    product_name: productName,
    checkout_url: checkoutUrl,
    source: 'studiozero_site',
  });
}
