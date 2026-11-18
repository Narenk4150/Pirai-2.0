export function scrollToElement(target, options = {}) {
  const el = typeof target === 'string' ? document.getElementById(target) : target;
  if (!el) return;
  const offset = options.offset ?? -90;
  if (window.__piraiLenis) {
    window.__piraiLenis.scrollTo(el, { offset, ...options });
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
