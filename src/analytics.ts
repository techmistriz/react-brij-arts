export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag('config', 'G-FDEES2QE1M', {
      page_path: url,
    });
  }
};