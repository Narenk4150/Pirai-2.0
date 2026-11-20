import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CAREER_GROWTH } from '../../data/careers';
import { prefersReducedMotion } from '../../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const GROWTH_VIDEO = '/images/careers/growth-hero.mp4';

/** Final portrait card in the three-column layout */
const FINAL_CARD = { width: 456, height: 598, radius: 40 };

/** Initial hero — 1200 wide; height fits the visible viewport under the nav */
const INITIAL_CARD = { width: 1200, radius: 36 };
const NAV_OFFSET = 64;
/** Vertical inset so the hero sits inside the viewport (not edge-to-edge) */
const VIEWPORT_INSET = 48;

/**
 * Sticky scroll: wide video holds static → smooth morph to portrait + content reveals.
 */
export const GROWTH_MOTION = {
  pinVhPerStep: 1.05,
  scrub: 1.1,
  holdStart: 0.75,
  morphDuration: 2.1,
  morphAt: 0.75,
  morphEase: 'none',
  copyAt: 2.55,
  copyDuration: 0.45,
  itemY: 20,
  itemDuration: 0.45,
  itemDelay: 0.4,
  itemEase: 'power2.out',
  itemStartAt: 2.65,
  holdEnd: 0.3,
};

export default function CareersGrowth() {
  const sceneRef = useRef(null);
  const pinRef = useRef(null);
  const stageRef = useRef(null);
  const slotRef = useRef(null);
  const stackRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    const pin = pinRef.current;
    const stage = stageRef.current;
    const slot = slotRef.current;
    const stack = stackRef.current;
    const video = videoRef.current;
    if (!scene || !pin || !stage || !slot || !stack) return undefined;

    const items = gsap.utils.toArray('[data-growth-item]', pin);
    const copy = pin.querySelector('[data-growth="copy"]');
    const cfg = GROWTH_MOTION;

    const playVideo = () => {
      if (!video) return;
      video.muted = true;
      const play = video.play();
      if (play?.catch) play.catch(() => {});
    };

    const measure = () => {
      const stageRect = stage.getBoundingClientRect();
      const slotRect = slot.getBoundingClientRect();
      const pinW = stageRect.width;

      const initW = Math.min(INITIAL_CARD.width, Math.max(320, pinW - 48));
      const availableH = Math.max(420, window.innerHeight - NAV_OFFSET);
      const initH = Math.max(400, availableH - VIEWPORT_INSET * 2);

      const start = {
        width: initW,
        height: initH,
        left: (pinW - initW) / 2,
        top: VIEWPORT_INSET,
        borderRadius: INITIAL_CARD.radius,
      };

      const final = {
        width: slotRect.width || FINAL_CARD.width,
        height: Math.max(slotRect.height, FINAL_CARD.height * 0.85),
        left: slotRect.left - stageRect.left,
        top: slotRect.top - stageRect.top,
        borderRadius: FINAL_CARD.radius,
      };

      return { start, final };
    };

    const showComplete = () => {
      const { final } = measure();
      gsap.set(stack, {
        position: 'relative',
        left: 'auto',
        top: 'auto',
        width: '100%',
        height: '100%',
        borderRadius: final.borderRadius,
        clearProps: 'transform',
      });
      gsap.set(items, { clearProps: 'transform,opacity,visibility', autoAlpha: 1, y: 0 });
      if (copy) gsap.set(copy, { clearProps: 'transform,opacity,visibility', autoAlpha: 1, y: 0 });
      playVideo();
    };

    if (prefersReducedMotion()) {
      showComplete();
      return undefined;
    }

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: '(min-width: 981px)',
        mobile: '(max-width: 980px)',
      },
      (context) => {
        const { desktop } = context.conditions;

        if (!desktop) {
          gsap.set(stack, { clearProps: 'all', autoAlpha: 0, y: 28 });
          if (copy) gsap.set(copy, { autoAlpha: 0, y: 20 });
          gsap.set(items, { autoAlpha: 0, y: 18 });

          const tl = gsap.timeline({
            defaults: { ease: cfg.itemEase },
            scrollTrigger: {
              id: 'careers-growth-mobile',
              trigger: scene,
              start: 'top 78%',
              once: true,
              onEnter: playVideo,
            },
          });

          if (copy) tl.to(copy, { autoAlpha: 1, y: 0, duration: 0.45 }, 0);
          tl.to(stack, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.06).to(
            items,
            { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.1 },
            0.2
          );

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        }

        const placeStart = () => {
          const { start } = measure();
          gsap.set(stack, {
            position: 'absolute',
            left: start.left,
            top: start.top,
            width: start.width,
            height: start.height,
            borderRadius: start.borderRadius,
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            zIndex: 3,
            force3D: true,
          });
        };

        placeStart();
        playVideo();

        // Initial: video only. Side content stays hidden until scroll continues.
        if (copy) gsap.set(copy, { autoAlpha: 0, y: 28, force3D: true });
        gsap.set(items, { autoAlpha: 0, y: cfg.itemY, force3D: true });

        const stepCount = Math.max(items.length, 3);
        const scrollEnd = () =>
          Math.max(
            1600,
            Math.round(
              window.innerHeight * cfg.pinVhPerStep * (stepCount + cfg.holdStart)
            )
          );

        const tl = gsap.timeline({
          defaults: { ease: 'none', overwrite: 'auto' },
          scrollTrigger: {
            id: 'careers-growth-scrub',
            trigger: scene,
            pin,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: cfg.scrub,
            start: `top top+=${NAV_OFFSET}`,
            end: () => `+=${scrollEnd()}`,
            invalidateOnRefresh: true,
            onEnter: playVideo,
            onEnterBack: playVideo,
            onRefreshInit: (self) => {
              if (!self || self.progress < 0.01) placeStart();
            },
          },
        });

        // 1) Static hold — video only
        tl.to({}, { duration: cfg.holdStart }, 0);

        // 2) Morph into portrait slot
        tl.fromTo(
          stack,
          {
            left: () => measure().start.left,
            top: () => measure().start.top,
            width: () => measure().start.width,
            height: () => measure().start.height,
            borderRadius: () => measure().start.borderRadius,
          },
          {
            left: () => measure().final.left,
            top: () => measure().final.top,
            width: () => measure().final.width,
            height: () => measure().final.height,
            borderRadius: FINAL_CARD.radius,
            duration: cfg.morphDuration,
            ease: cfg.morphEase,
            immediateRender: false,
          },
          cfg.morphAt
        );

        // 3) Left heading — after video has shrunk into the portrait slot
        if (copy) {
          tl.to(
            copy,
            {
              autoAlpha: 1,
              y: 0,
              duration: cfg.copyDuration,
              ease: cfg.itemEase,
            },
            cfg.copyAt
          );
        }

        // 4) Right items — after the video phase, as scroll continues
        items.forEach((item, i) => {
          const at = cfg.itemStartAt + i * 0.8;
          tl.to(
            item,
            {
              autoAlpha: 1,
              y: 0,
              duration: cfg.itemDuration,
              ease: cfg.itemEase,
            },
            at + cfg.itemDelay
          );
        });

        tl.to({}, { duration: cfg.holdEnd });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
          gsap.set(stack, { clearProps: 'all' });
          gsap.set(items, { clearProps: 'transform,opacity,visibility' });
          if (copy) gsap.set(copy, { clearProps: 'transform,opacity,visibility' });
        };
      }
    );

    ScrollTrigger.refresh();
    const timers = [120, 400, 900].map((ms) =>
      window.setTimeout(() => ScrollTrigger.refresh(), ms)
    );

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      mm.revert();
    };
  }, []);

  return (
    <section className="careers-growth" ref={sceneRef}>
      <div className="careers-growth-pin" ref={pinRef}>
        <div className="container growth-stage" ref={stageRef}>
          <div className="growth-grid">
            <div className="growth-copy" data-growth="copy">
              <div className="section-pill">
                <span className="dot" />
                <span>Your Growth</span>
              </div>
              <h2>
                Grow through
                <span className="growth-title-line">the</span>
                <span className="growth-title-line">work you do.</span>
              </h2>
            </div>

            <div
              className="growth-card-slot"
              ref={slotRef}
              aria-hidden="true"
            />

            <div className="growth-list">
              {CAREER_GROWTH.map((item, index) => (
                <div key={item.title} className="growth-item" data-growth-item>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {index < CAREER_GROWTH.length - 1 ? (
                    <span className="growth-item-rule" aria-hidden="true" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div
            className="growth-card-stack"
            ref={stackRef}
            aria-label="Pirai growth film"
          >
            <video
              ref={videoRef}
              className="growth-video"
              src={GROWTH_VIDEO}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
            />
          </div>
        </div>
      </div>

      <style>{`
        .careers-growth {
          position: relative;
          z-index: 2;
          background: #FFFFFF;
          margin-top: 0;
          overflow: clip;
        }
        .careers-growth-pin {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 0 0 56px;
          min-height: calc(100vh - ${NAV_OFFSET}px);
          display: flex;
          align-items: stretch;
          box-sizing: border-box;
          overflow: hidden;
          background: #FFFFFF;
        }
        .growth-stage {
          position: relative;
          width: 100%;
          flex: 1;
          min-height: calc(100vh - ${NAV_OFFSET}px);
          display: flex;
          align-items: center;
          padding-top: 0;
        }
        .growth-grid {
          display: grid;
          grid-template-columns: minmax(200px, 1fr) ${FINAL_CARD.width}px minmax(220px, 1fr);
          gap: 48px;
          align-items: center;
          width: 100%;
          align-self: center;
        }
        .section-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 24px;
          padding: 0 10px;
          border: 1px solid #DCE3ED;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          color: #5B6B7C;
          margin-bottom: 20px;
        }
        .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .growth-copy {
          position: relative;
          z-index: 5;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .growth-copy h2 {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: #0F2744;
          max-width: 280px;
        }
        .growth-title-line {
          display: block;
        }
        .growth-card-slot {
          width: 100%;
          height: ${FINAL_CARD.height}px;
          visibility: hidden;
          pointer-events: none;
        }
        .growth-card-stack {
          position: relative;
          width: ${FINAL_CARD.width}px;
          height: ${FINAL_CARD.height}px;
          border-radius: ${FINAL_CARD.radius}px;
          overflow: hidden;
          background: #0B1220;
          will-change: width, height, left, top, border-radius;
          backface-visibility: hidden;
        }
        @media (min-width: 981px) {
          .growth-card-stack {
            position: absolute;
            width: min(100%, ${INITIAL_CARD.width}px);
            height: calc(100vh - ${NAV_OFFSET + VIEWPORT_INSET * 2}px);
            max-width: ${INITIAL_CARD.width}px;
            z-index: 3;
          }
        }
        .growth-video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          pointer-events: none;
        }
        .growth-list {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 320px;
        }
        .growth-item {
          position: relative;
          padding: 28px 0;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .growth-item:first-child {
          padding-top: 0;
        }
        .growth-item:last-child {
          padding-bottom: 0;
        }
        .growth-item-rule {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: #DCE3ED;
          display: block;
        }
        .growth-item h3 {
          margin: 0 0 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          line-height: 28px;
          font-weight: 600;
          color: #0F2744;
        }
        .growth-item p {
          margin: 0;
          font-size: 15px;
          line-height: 24px;
          color: #5B6B7C;
        }
        @media (max-width: 1100px) and (min-width: 981px) {
          .growth-grid {
            grid-template-columns: minmax(180px, 1fr) minmax(340px, 400px) minmax(200px, 1fr);
            gap: 32px;
          }
          .growth-card-slot {
            height: auto;
            aspect-ratio: ${FINAL_CARD.width} / ${FINAL_CARD.height};
          }
        }
        @media (max-width: 980px) {
          .careers-growth-pin {
            min-height: 0;
            padding: 40px 0 72px;
          }
          .growth-stage {
            display: flex;
            flex-direction: column;
            gap: 28px;
            min-height: 0;
          }
          .growth-grid {
            display: contents;
          }
          .growth-copy { order: 1; }
          .growth-card-slot { display: none; }
          .growth-card-stack {
            order: 2;
            position: relative !important;
            left: auto !important;
            top: auto !important;
            width: min(100%, ${FINAL_CARD.width}px) !important;
            height: auto !important;
            aspect-ratio: ${FINAL_CARD.width} / ${FINAL_CARD.height};
            margin: 0 auto;
          }
          .growth-list {
            order: 3;
            max-width: none;
          }
          .growth-copy h2 {
            max-width: none;
            font-size: 30px;
            line-height: 40px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .growth-copy,
          .growth-item {
            opacity: 1 !important;
            transform: none !important;
            visibility: visible !important;
          }
        }
      `}</style>
    </section>
  );
}
