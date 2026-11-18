/** Shared motion tokens for Pirai homepage (Arooth scroll + Synex storytelling). */

export const MOTION = {
  ease: 'power3.out',
  easeSoft: 'power2.out',
  easeInOut: 'power2.inOut',
  text: 0.45,
  card: 0.6,
  image: 0.7,
  section: 0.65,
  stagger: 0.1,
  service: 0.42,
  heroStagger: 0.09,
};

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isFinePointerHover() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}
