import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION, prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-driven reveals for [data-reveal] and staggered [data-reveal-stagger] groups.
 *
 * data-reveal            — animate this element
 * data-reveal-y          — translateY start (default 28)
 * data-reveal-delay      — seconds
 * data-reveal-scale      — start scale (e.g. 1.04 → 1)
 * data-reveal-duration   — override duration
 * data-reveal-stagger    — on a parent: stagger children matching [data-reveal-child]
 */
export default function useScrollReveal(rootRef, options = {}) {
  useEffect(() => {
    const root = rootRef?.current;
    if (!root) return undefined;
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const singles = root.querySelectorAll('[data-reveal]:not([data-reveal-stagger])');
      singles.forEach((item) => {
        if (item.closest('[data-reveal-stagger]')) return;

        const delay = Number(item.dataset.revealDelay || 0);
        const y = Number(item.dataset.revealY || 28);
        const scale = item.dataset.revealScale ? Number(item.dataset.revealScale) : null;
        const duration = Number(item.dataset.revealDuration || options.duration || MOTION.section);

        const from = { autoAlpha: 0, y };
        const to = {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: MOTION.ease,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: item,
            start: options.start || 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        };

        if (scale != null && !Number.isNaN(scale)) {
          from.scale = scale;
          to.scale = 1;
        }

        gsap.fromTo(item, from, to);
      });

      const groups = root.querySelectorAll('[data-reveal-stagger]');
      groups.forEach((group) => {
        const children = group.querySelectorAll('[data-reveal-child]');
        if (!children.length) return;

        const y = Number(group.dataset.revealY || 28);
        const staggerRaw = group.dataset.revealStagger;
        const stagger =
          staggerRaw === '' || staggerRaw == null || Number.isNaN(Number(staggerRaw))
            ? MOTION.stagger
            : Number(staggerRaw);
        const duration = Number(group.dataset.revealDuration || MOTION.card);
        const scale = group.dataset.revealScale ? Number(group.dataset.revealScale) : null;

        const from = { autoAlpha: 0, y };
        const to = {
          autoAlpha: 1,
          y: 0,
          duration,
          stagger,
          ease: MOTION.ease,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: group,
            start: options.start || 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        };

        if (scale != null && !Number.isNaN(scale)) {
          from.scale = scale;
          to.scale = 1;
        }

        gsap.fromTo(children, from, to);
      });

      // Nested image scale inside revealed cards
      root.querySelectorAll('[data-reveal-img]').forEach((img) => {
        const scale = Number(img.dataset.revealImg || 1.06);
        gsap.fromTo(
          img,
          { scale },
          {
            scale: 1,
            duration: MOTION.image,
            ease: MOTION.easeSoft,
            scrollTrigger: {
              trigger: img.closest('[data-reveal], [data-reveal-child], [data-reveal-stagger]') || img,
              start: options.start || 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, [rootRef, options.duration, options.selector, options.start]);
}
