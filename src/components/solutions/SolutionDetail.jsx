import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../Button';
import { getCaseStudyById } from '../../data/caseStudies';
import { scrollToElement } from '../../utils/scroll';
import { prefersReducedMotion } from '../../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const ARCH_STACK_SVG =
  '/images/Services/AI%20Automation/AI%20Enterprise.svg';

// Scroll stages: build top → down. Each plate rises from below into place.
// Layer 5 = topmost SVG plate … layer 0 = bottommost.
const ARCH_REVEAL_STAGES = [
  { layer: 5, side: 'right', index: 0, label: 'Inputs' },
  { layer: 4, side: 'left', index: 0, label: 'Context' },
  { layer: 3, side: 'right', index: 1, label: 'Intelligence' },
  { layer: 2, side: 'left', index: 1, label: 'Workflow' },
  { layer: 1, side: 'right', index: 2, label: 'Systems' },
  { layer: 0, side: 'left', index: 2, label: 'Outcomes' },
];

const ARCH_STAGE_COUNT = ARCH_REVEAL_STAGES.length;

// Fallback vertical centres (top → bottom) as % of stack frame — refined via getBBox after SVG loads
const ARCH_LAYER_ALIGN_PCT = [18.46, 30.83, 43.21, 55.59, 67.96, 80.34];

function measureLayerAlignPcts(stackHost) {
  const svg = stackHost?.querySelector?.('svg');
  if (!svg?.viewBox?.baseVal) return null;
  const vb = svg.viewBox.baseVal;
  const height = vb.height || 1;
  const originY = vb.y || 0;
  const pcts = [5, 4, 3, 2, 1, 0].map((id) => {
    const layer = svg.querySelector(`#arch-layer-${id}`);
    if (!layer?.getBBox) return null;
    try {
      const box = layer.getBBox();
      return Number(((((box.y + box.height / 2) - originY) / height) * 100).toFixed(2));
    } catch {
      return null;
    }
  });
  return pcts.every((v) => v != null && !Number.isNaN(Number(v)))
    ? pcts.map(Number)
    : null;
}

const ARCH_LAYER_PURPLE = new Set([
  '#735AA0',
  '#6D539C',
  '#664B97',
  '#604393',
  '#593B8E',
  '#52338A',
  '#4C2B85',
  '#452481',
  '#3E1C7C',
  '#381478',
  '#310C73',
  '#360D7D',
  '#352D9E',
  '#423BA4',
  '#3C34A1',
]);

/** Build six independently animatable layer groups from the Enterprise SVG. */
function prepareArchStackSvg(raw) {
  if (!raw) return '';

  // Already structured for animation
  if (raw.includes('id="arch-layer-0"') || raw.includes("id='arch-layer-0'")) {
    return raw.replace(/<svg\b([^>]*)>/, (match, attrs) =>
      /\boverflow\s*=/.test(attrs) ? match : `<svg${attrs} overflow="visible">`
    );
  }

  const defsMatch = raw.match(/<defs>[\s\S]*?<\/defs>/);
  const defs = defsMatch ? defsMatch[0] : '<defs></defs>';
  const pathMatches = raw.match(/<path\b[^>]*?\/?>/g) || [];

  const pathMeta = (path) => {
    const fill = (path.match(/fill="([^"]+)"/) || [])[1] || '?';
    const d = (path.match(/\bd="([^"]+)"/) || [])[1] || '';
    const nums = (d.match(/[-+]?\d*\.?\d+(?:e[-+]?\d+)?/gi) || []).map(Number);
    const pairs = [];
    for (let i = 0; i + 1 < nums.length; i += 2) pairs.push([nums[i], nums[i + 1]]);
    if (pairs.length < 2) return null;
    const xs = pairs.map(([x]) => x);
    const ys = pairs.map(([, y]) => y);
    const minx = Math.min(...xs);
    const maxx = Math.max(...xs);
    const miny = Math.min(...ys);
    const maxy = Math.max(...ys);
    return {
      raw: path,
      fill,
      cx: (minx + maxx) / 2,
      cy: (miny + maxy) / 2,
      w: maxx - minx,
      h: maxy - miny,
    };
  };

  const classify = (m) => {
    const { fill: f, cy, w, cx } = m;
    if (!(cx >= 420 && cx <= 785 && cy >= -20 && cy <= 530 && w < 500)) return null;
    if (f.includes('paint5') || (f === '#3488FF' && w > 200 && cy < 160)) return 5;
    if (f.includes('paint4') || (f === '#4894FF' && w > 200)) return 4;
    if (f.includes('paint3') || (f === '#71ACFF' && w > 200)) return 3;
    if (f.includes('paint2') || (f === '#99C3FF' && w > 200)) return 2;
    if (f.includes('paint1') || (f === '#C2DBFF' && w > 200)) return 1;
    if (f.includes('paint0') || (f === '#EBF3FF' && w > 200)) return 0;
    if (ARCH_LAYER_PURPLE.has(f)) return cy > 180 && cy < 330 && w < 280 ? 3 : 0;
    if (w > 200) {
      if (cy < 150) return 5;
      if (cy < 210) return 4;
      if (cy < 280) return 3;
      if (cy < 350) return 2;
      if (cy < 420) return 1;
      return 0;
    }
    if (cx > 430 && cx < 780 && w > 40) {
      if (cy > 180 && cy < 330) return 3;
      if (cy > 300) return 0;
    }
    return null;
  };

  const layers = Array.from({ length: 6 }, () => []);
  pathMatches.forEach((path) => {
    const meta = pathMeta(path);
    if (!meta) return;
    const id = classify(meta);
    if (id == null) return;
    layers[id].push(meta.raw);
  });

  if (layers.some((layer) => layer.length === 0)) {
    // Fallback: show original SVG cropped to the stack region
    return raw
      .replace(/<svg\b([^>]*)>/, (match, attrs) => {
        let next = attrs;
        if (/\bviewBox\s*=/.test(next)) {
          next = next.replace(/\bviewBox="[^"]*"/, 'viewBox="420 0 370 520"');
        } else {
          next += ' viewBox="420 0 370 520"';
        }
        if (!/\boverflow\s*=/.test(next)) next += ' overflow="visible"';
        if (!/\bpreserveAspectRatio\s*=/.test(next)) {
          next += ' preserveAspectRatio="xMidYMid meet"';
        }
        return `<svg${next}>`;
      });
  }

  const body = layers
    .map(
      (paths, i) =>
        `  <g id="arch-layer-${i}" class="arch-layer" data-layer="${i}">\n${paths
          .map((p) => `    ${p}`)
          .join('\n')}\n  </g>`
    )
    .join('\n');

  return [
    '<svg width="100%" height="100%" viewBox="420 0 370 520" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" overflow="visible">',
    defs,
    '<g id="architecture-stack">',
    body,
    '</g>',
    '</svg>',
  ].join('\n');
}

function ArchCallout({ item, side, stageIndex, alignPct }) {
  if (!item) return null;
  const copy = (
    <div className="sol-arch-callout-copy">
      <strong className="sol-arch-callout-title">{item.title}</strong>
      {item.body ? (
        <em className="sol-arch-callout-body">
          {item.body.split('\n').map((line, i) => (
            <span key={`${item.title}-line-${i}`} className="sol-arch-callout-line">
              {line}
            </span>
          ))}
        </em>
      ) : null}
    </div>
  );
  const connector = (
    <span className="sol-arch-callout-connector" aria-hidden="true">
      {side === 'right' ? <span className="sol-arch-node" /> : null}
      <span className="sol-arch-line" />
      {side === 'left' ? <span className="sol-arch-node" /> : null}
    </span>
  );
  return (
    <div
      className={`sol-arch-callout sol-arch-callout-${side}`}
      data-arch-callout={`${side}-${stageIndex}`}
      style={
        alignPct != null
          ? { top: `${alignPct}%`, '--arch-align': `${alignPct}%` }
          : undefined
      }
    >
      {side === 'right' ? (
        <>
          {connector}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {connector}
        </>
      )}
    </div>
  );
}

/** Isolated so parent re-renders (callout tops, etc.) never rewrite the SVG DOM GSAP owns. */
const ArchStackFrame = React.memo(
  React.forwardRef(function ArchStackFrame({ svgMarkup }, ref) {
    return (
      <div
        className="sol-arch-stack-frame"
        ref={ref}
        dangerouslySetInnerHTML={svgMarkup ? { __html: svgMarkup } : undefined}
        role="img"
        aria-label="Enterprise architecture stack with six layers"
      />
    );
  })
);

function ArchitectureDiagram({
  left = [],
  right = [],
  illustration = ARCH_STACK_SVG,
  header = null,
}) {
  const sceneRef = useRef(null);
  const pinRef = useRef(null);
  const rootRef = useRef(null);
  const stackRef = useRef(null);
  const [svgMarkup, setSvgMarkup] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetch(illustration)
      .then((res) => res.text())
      .then((text) => {
        if (cancelled) return;
        setSvgMarkup(prepareArchStackSvg(text));
      })
      .catch(() => {
        if (!cancelled) setSvgMarkup('');
      });
    return () => {
      cancelled = true;
    };
  }, [illustration]);

  // Align callouts to plate midpoints via DOM only — never setState here.
  // setState re-renders replace dangerouslySetInnerHTML SVG nodes and detach GSAP layer tweens.
  useEffect(() => {
    if (!svgMarkup) return undefined;
    const sync = () => {
      const root = rootRef.current;
      const stackHost = stackRef.current;
      if (!root || !stackHost) return;
      const measured = measureLayerAlignPcts(stackHost);
      const pcts = measured || ARCH_LAYER_ALIGN_PCT;
      ARCH_REVEAL_STAGES.forEach(({ side, index }, i) => {
        const el = root.querySelector(`[data-arch-callout="${side}-${index}"]`);
        if (el) el.style.top = `${pcts[i]}%`;
      });
    };
    sync();
    const frame = stackRef.current;
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sync) : null;
    if (ro && frame) ro.observe(frame);
    window.addEventListener('resize', sync);
    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, [svgMarkup]);

  useEffect(() => {
    const scene = sceneRef.current;
    const pin = pinRef.current;
    const root = rootRef.current;
    const stackHost = stackRef.current;
    if (!scene || !pin || !root || !stackHost || !svgMarkup) return undefined;

    const showComplete = () => {
      root.querySelectorAll('.arch-layer').forEach((el) => {
        el.setAttribute('transform', 'translate(0 0)');
        el.style.opacity = '1';
      });
      root.querySelectorAll('[data-arch-callout]').forEach((el) => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      });
      root.querySelectorAll('.sol-arch-callout-title').forEach((el) => {
        el.style.color = '#3488FF';
      });
      root.querySelectorAll('.sol-arch-line').forEach((el) => {
        el.style.transform = 'scaleX(1)';
      });
      root.querySelectorAll('.sol-arch-node').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    };

    if (prefersReducedMotion()) {
      showComplete();
      return undefined;
    }

    const layers = ARCH_REVEAL_STAGES.map(({ layer }) =>
      stackHost.querySelector(`#arch-layer-${layer}`)
    );
    const callouts = ARCH_REVEAL_STAGES.map(({ side, index }) =>
      root.querySelector(`[data-arch-callout="${side}-${index}"]`)
    );

    if (layers.some((layer) => !layer)) return undefined;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: '(min-width: 721px)',
        mobile: '(max-width: 720px)',
      },
      (context) => {
        const { desktop } = context.conditions;

        // Enter from below the illustration, then settle into each stack slot
        const layerMotion = layers.map((layer, i) => {
          const startY = 320 + i * 24;
          const motion = { y: startY };
          layer.setAttribute('transform', `translate(0 ${startY})`);
          gsap.set(layer, { opacity: 0 });
          return motion;
        });

        callouts.forEach((callout, i) => {
          if (!callout) return;
          const title = callout.querySelector('.sol-arch-callout-title');
          const body = callout.querySelector('.sol-arch-callout-body');
          const line = callout.querySelector('.sol-arch-line');
          const node = callout.querySelector('.sol-arch-node');
          const origin =
            ARCH_REVEAL_STAGES[i].side === 'left' ? 'right center' : 'left center';

          gsap.set(callout, { autoAlpha: 1 });
          if (title) gsap.set(title, { autoAlpha: 0, y: 20, color: '#94A3B8' });
          if (body) gsap.set(body, { autoAlpha: 0, y: 16 });
          if (line) gsap.set(line, { scaleX: 0, transformOrigin: origin });
          if (node) gsap.set(node, { scale: 0, autoAlpha: 0 });
        });

        // Enough scroll runway per stage while pinned, then release
        const scrollPerStage = () =>
          Math.max(780, Math.round(window.innerHeight * 1.05));

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            id: 'arch-stack-scrub',
            trigger: scene,
            pin: desktop ? pin : false,
            pinSpacing: desktop,
            anticipatePin: desktop ? 1 : 0,
            scrub: desktop ? 0.7 : 0.45,
            start: desktop ? 'top top+=88' : 'top 80%',
            end: () =>
              desktop
                ? `+=${scrollPerStage() * ARCH_STAGE_COUNT}`
                : `+=${Math.max(2000, Math.round(window.innerHeight * 2.8))}`,
            invalidateOnRefresh: true,
          },
        });

        ARCH_REVEAL_STAGES.forEach((stage, i) => {
          const layer = layers[i];
          const motion = layerMotion[i];
          const callout = callouts[i];
          const title = callout?.querySelector('.sol-arch-callout-title');
          const body = callout?.querySelector('.sol-arch-callout-body');
          const line = callout?.querySelector('.sol-arch-line');
          const node = callout?.querySelector('.sol-arch-node');
          // One exclusive scroll band per stage
          const at = i;

          // Plate rises from below into its final stacked position
          tl.to(
            motion,
            {
              y: 0,
              duration: 0.82,
              ease: 'power2.out',
              onUpdate: () => {
                layer.setAttribute('transform', `translate(0 ${motion.y})`);
              },
            },
            at
          );
          tl.to(
            layer,
            {
              opacity: 1,
              duration: 0.5,
              ease: 'power1.out',
            },
            at + 0.05
          );

          if (title) {
            tl.to(
              title,
              {
                autoAlpha: 1,
                y: 0,
                color: '#3488FF',
                duration: 0.38,
                ease: 'power2.out',
              },
              at + 0.4
            );
          }
          if (body) {
            tl.to(
              body,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.36,
                ease: 'power2.out',
              },
              at + 0.52
            );
          }
          if (line) {
            tl.to(
              line,
              {
                scaleX: 1,
                duration: 0.42,
                ease: 'power2.out',
              },
              at + 0.44
            );
          }
          if (node) {
            tl.to(
              node,
              {
                scale: 1,
                autoAlpha: 1,
                duration: 0.3,
                ease: 'power2.out',
              },
              at + 0.54
            );
          }

          // Hold the completed stage before the next plate enters
          if (i < ARCH_STAGE_COUNT - 1) {
            tl.to({}, { duration: 0.18 }, at + 0.82);
          }
        });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      }
    );

    ScrollTrigger.refresh();
    const refreshTimers = [120, 400].map((ms) =>
      window.setTimeout(() => ScrollTrigger.refresh(), ms)
    );

    return () => {
      refreshTimers.forEach((id) => window.clearTimeout(id));
      mm.revert();
    };
  }, [svgMarkup]);

  return (
    <div className="sol-arch-scene" ref={sceneRef}>
      <div className="sol-arch-pin" ref={pinRef}>
        {header}
        <div className="sol-arch-diagram" ref={rootRef}>
          <div className="sol-arch-side sol-arch-left" aria-label="Architecture layers on the left">
            {/* Align to plates 2nd / 4th / 6th (Context, Workflow, Outcomes) */}
            {left.map((item, index) => (
              <ArchCallout
                key={item.title || index}
                item={item}
                side="left"
                stageIndex={index}
                alignPct={ARCH_LAYER_ALIGN_PCT[index * 2 + 1]}
              />
            ))}
          </div>

          <div className="sol-arch-stack">
            <ArchStackFrame ref={stackRef} svgMarkup={svgMarkup} />
          </div>

          <div className="sol-arch-side sol-arch-right" aria-label="Architecture layers on the right">
            {/* Align to plates 1st / 3rd / 5th (Inputs, Intelligence, Systems) */}
            {right.map((item, index) => (
              <ArchCallout
                key={item.title || index}
                item={item}
                side="right"
                stageIndex={index}
                alignPct={ARCH_LAYER_ALIGN_PCT[index * 2]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CapCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill="#3488FF" />
      <path
        d="M6.5 11.2L9.6 14.2L15.5 7.8"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SolutionDetail({
  solution,
  onDiscussChallenge,
  onExploreCapabilities,
}) {
  const navigate = useNavigate();
  const [activeCapIndex, setActiveCapIndex] = useState(null);
  const studies = (solution.caseStudyIds || [])
    .map((id) => getCaseStudyById(id))
    .filter(Boolean);

  const primaryCta = solution.primaryCta || 'Discuss Your Challenge';
  const secondaryCta = solution.secondaryCta || 'Explore Capabilities';

  const handleSecondary = () => {
    if (solution.secondaryCtaTarget === 'cases') {
      const el = document.querySelector('.sol-cases');
      if (el) {
        scrollToElement(el, { offset: -90 });
        return;
      }
    }
    if (onExploreCapabilities) onExploreCapabilities();
  };

  return (
    <div className="solution-detail">
      <section className="sol-hero">
        <div className="sol-hero-inner">
          <div className="section-pill light">
            <span className="dot" />
            <span>{solution.pill}</span>
          </div>
          <h1>
            <span className="sol-hero-line">{solution.heroTitle}</span>
            <span className="accent-italic">{solution.heroAccent}</span>
          </h1>
          <p>{solution.lead}</p>
          <div className="sol-hero-actions">
            <Button variant="type1" size="hero" onClick={onDiscussChallenge}>
              {primaryCta}
            </Button>
            <Button variant="type2" size="hero" onClick={handleSecondary}>
              {secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      {solution.problem && (
        <section className="sol-problem">
          <div className="container">
            <div className="sol-problem-heading" data-reveal data-reveal-y="24">
              {solution.problem.pill ? (
                <div className="section-pill">
                  <span className="dot" />
                  <span>{solution.problem.pill}</span>
                </div>
              ) : null}
              <h2>
                <span className="blue-accent">{solution.problem.titleBefore}</span>
                {solution.problem.titleAfter}
              </h2>
              {solution.problem.lead ? (
                <p className="sol-lead">{solution.problem.lead}</p>
              ) : null}
            </div>

            <div
              className="sol-problem-shell"
              data-reveal
              data-reveal-delay="0.08"
              data-reveal-y="32"
              data-reveal-duration="0.65"
            >
              <div className="sol-problem-media">
                <img src={solution.problem.image} alt="" />
              </div>
              <div className="sol-problem-panel">
                <ol className="sol-problem-list">
                  {solution.problem.items.map((item) => (
                    <li key={item.number}>
                      <div className="sol-problem-copy">
                        <strong>{item.title}</strong>
                        <p>{item.body}</p>
                      </div>
                      <span className="num" aria-hidden="true">
                        {item.number}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}

      {solution.methodology && (
        <section className="sol-methodology">
          <div className="container">
            <div className="sol-methodology-header" data-reveal data-reveal-y="24">
              {solution.methodology.pill ? (
                <div className="section-pill">
                  <span className="dot" />
                  <span>{solution.methodology.pill}</span>
                </div>
              ) : null}
              <h2>
                <span className="sol-method-title-line">{solution.methodology.titleBefore}</span>
                <span className="blue-accent">{solution.methodology.titleAccent}</span>
              </h2>
              {solution.methodology.lead ? (
                <p className="sol-lead">{solution.methodology.lead}</p>
              ) : null}
            </div>
            <div
              className="sol-method-grid"
              data-reveal-stagger="0.08"
              data-reveal-y="28"
              data-reveal-duration="0.55"
            >
              {solution.methodology.stages.map((stage) => (
                <article key={stage.number} className="sol-method-card" data-reveal-child>
                  <span className="num">{stage.number}</span>
                  <div className="sol-method-body">
                    <h3>{stage.title}</h3>
                    <p>{stage.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {solution.challenges && (
        <section className="sol-challenges">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.challenges.pill}</span>
            </div>
            <h2>
              <span className="blue-accent">{solution.challenges.titleBefore}</span>
              {solution.challenges.titleAfter}
            </h2>
            <p className="sol-lead">{solution.challenges.lead}</p>
            <div className="sol-challenge-grid">
              {solution.challenges.items.map((item) => (
                <article key={item.number} className="sol-challenge-card">
                  <span className="num">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {solution.whyMatters && (
        <section className="sol-why">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.whyMatters.pill}</span>
            </div>
            <h2 className="center">
              {solution.whyMatters.titleBefore}{' '}
              <span className="blue-accent">{solution.whyMatters.titleAccent}</span>
            </h2>
            <div className="sol-why-grid">
              {solution.whyMatters.cards.map((card) => (
                <article key={card.title} className="sol-why-card">
                  <div className="icon-dot" />
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {solution.painCards && (
        <section className="sol-pain">
          <div className="container">
            {solution.pain && (
              <div className="sol-pain-heading" data-reveal data-reveal-y="24">
                {solution.pain.pill ? (
                  <div className="section-pill">
                    <span className="dot" />
                    <span>{solution.pain.pill}</span>
                  </div>
                ) : null}
                <h2 className="sol-pain-title">
                  <span className="sol-pain-title-line">{solution.pain.titleBefore}</span>
                  <span className="blue-accent">{solution.pain.titleAccent}</span>
                </h2>
                {solution.pain.lead ? (
                  <p className="sol-lead">{solution.pain.lead}</p>
                ) : null}
              </div>
            )}
            <div
              className="sol-pain-grid"
              data-reveal-stagger="0.1"
              data-reveal-y="28"
              data-reveal-duration="0.6"
            >
              <div className="sol-pain-col">
                {solution.painCards.slice(0, 2).map((card) => (
                  <article key={card.title} className="sol-pain-card" data-reveal-child>
                    {card.icon ? (
                      <img className="sol-pain-icon" src={card.icon} alt="" width={40} height={40} />
                    ) : (
                      <div className="icon-dot" />
                    )}
                    <p>{card.title}</p>
                  </article>
                ))}
              </div>
              <div className="sol-pain-col">
                {solution.painCards.slice(2, 4).map((card) => (
                  <article key={card.title} className="sol-pain-card" data-reveal-child>
                    {card.icon ? (
                      <img className="sol-pain-icon" src={card.icon} alt="" width={40} height={40} />
                    ) : (
                      <div className="icon-dot" />
                    )}
                    <p>{card.title}</p>
                  </article>
                ))}
              </div>
              {solution.highlightCard && (
                <article className="sol-highlight-card" data-reveal-child>
                  <div className="sol-highlight-copy">
                    <div className="brand">{solution.highlightCard.brand}</div>
                    <p>{solution.highlightCard.body}</p>
                  </div>
                  <Button
                    variant="type2"
                    size="hero"
                    className="sol-highlight-cta"
                    onClick={onDiscussChallenge}
                  >
                    {solution.highlightCard.cta}
                  </Button>
                </article>
              )}
            </div>
          </div>
        </section>
      )}

      {solution.approach && (
        <section className="sol-approach">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.approach.pill}</span>
            </div>
            <h2 className={solution.approach.steps ? 'center' : ''}>
              <span className="blue-accent">{solution.approach.titleBefore}</span>{' '}
              {solution.approach.titleAccent}
            </h2>
            <p className={`sol-lead ${solution.approach.steps ? 'center' : ''}`}>
              {solution.approach.lead}
            </p>
            {solution.approach.cards && (
              <div className="sol-approach-cards">
                {solution.approach.cards.map((card) => (
                  <article key={card.title}>
                    <div className="icon-dot" />
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            )}
            {solution.approach.steps && (
              <ol className="sol-approach-steps">
                {solution.approach.steps.map((step) => (
                  <li key={step.number}>
                    <span className="num">{step.number}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>
      )}

      {solution.capabilities && (
        <section className="sol-capabilities">
          <div className="container">
            <div className="sol-cap-intro" data-reveal data-reveal-y="24">
              {solution.capabilities.pill ? (
                <div className="section-pill">
                  <span className="dot" />
                  <span>{solution.capabilities.pill}</span>
                </div>
              ) : null}
              <h2>
                <span className="sol-cap-title-line">{solution.capabilities.titleBefore}</span>
                <span className="blue-accent">{solution.capabilities.titleAccent}</span>
              </h2>
              {solution.capabilities.lead ? (
                <p className="sol-lead">{solution.capabilities.lead}</p>
              ) : null}
            </div>
            <div
              className="sol-cap-panel"
              data-reveal
              data-reveal-delay="0.1"
              data-reveal-y="28"
              data-reveal-duration="0.65"
            >
              <div
                className={`sol-cap-list${solution.capabilities.interactive ? ' is-interactive' : ''}`}
              >
                {solution.capabilities.items.map((item, index) => {
                  const title = typeof item === 'string' ? item : item.title;
                  const body = typeof item === 'string' ? null : item.body;
                  const href = typeof item === 'string' ? null : item.href;
                  const isActive = activeCapIndex === index;
                  const interactive = Boolean(solution.capabilities.interactive);

                  if (!interactive) {
                    return (
                      <div key={title} className="sol-cap-row">
                        {solution.capabilities.numbered ? (
                          <span className="num">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        ) : (
                          <CapCheckIcon />
                        )}
                        <strong>{title}</strong>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={title}
                      className={`sol-cap-row is-interactive${isActive ? ' is-active' : ''}`}
                      tabIndex={0}
                      role="button"
                      aria-expanded={isActive}
                      onMouseEnter={() => setActiveCapIndex(index)}
                      onMouseLeave={() => setActiveCapIndex(null)}
                      onFocus={() => setActiveCapIndex(index)}
                      onBlur={() => setActiveCapIndex(null)}
                      onClick={() => {
                        const isCoarse = window.matchMedia('(hover: none)').matches;
                        if (isCoarse) {
                          setActiveCapIndex((prev) => (prev === index ? null : index));
                        }
                        if (href) navigate(href);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          if (href) navigate(href);
                          else setActiveCapIndex((prev) => (prev === index ? null : index));
                        }
                      }}
                    >
                      <span className="num">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <strong className="sol-cap-name">{title}</strong>
                      <p className="sol-cap-desc">{body}</p>
                      <span className="sol-cap-arrow" aria-hidden="true">
                        <ArrowUpRight size={18} strokeWidth={2} />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {solution.showcase && (
        <section className="sol-showcase" id="architecture">
          <div className="container">
            {solution.showcase.diagram ? (
              <ArchitectureDiagram
                left={solution.showcase.diagram.left}
                right={solution.showcase.diagram.right}
                illustration={solution.showcase.diagram.illustration}
                header={
                  <div data-reveal data-reveal-y="24">
                    {solution.showcase.pill ? (
                      <div className="section-pill sol-showcase-pill">
                        <span className="dot" />
                        <span>{solution.showcase.pill}</span>
                      </div>
                    ) : null}
                    <h2 className="center sol-showcase-title">
                      <span className="sol-showcase-title-line">
                        {solution.showcase.titleBefore}
                      </span>
                      <span className="sol-showcase-title-line">
                        {solution.showcase.titleYour ? (
                          <span className="sol-showcase-title-your">
                            {solution.showcase.titleYour}{' '}
                          </span>
                        ) : null}
                        <span className="blue-accent sol-showcase-title-accent">
                          {solution.showcase.titleAccent}
                        </span>
                      </span>
                    </h2>
                  </div>
                }
              />
            ) : null}
          </div>
        </section>
      )}

      {studies.length > 0 && (
        <section className="sol-cases">
          <div className="container">
            {solution.cases && (
              <div className="sol-cases-header" data-reveal data-reveal-y="24">
                <div className="sol-cases-heading">
                  {solution.cases.pill ? (
                    <div className="eyetray-badge">
                      <span className="dot" />
                      <span>{solution.cases.pill}</span>
                    </div>
                  ) : null}
                  <h2 className="sol-cases-title">
                    {solution.cases.titleBefore}{' '}
                    <span className="blue-accent">{solution.cases.titleAccent}</span>
                  </h2>
                  {solution.cases.lead ? (
                    <p className="sol-cases-lead">{solution.cases.lead}</p>
                  ) : null}
                </div>
                <div className="sol-cases-header-action">
                  <Button
                    variant="type2"
                    size="hero"
                    onClick={() => navigate('/case-studies')}
                  >
                    {solution.cases.cta || 'View all case study'}
                  </Button>
                </div>
              </div>
            )}

            {(() => {
              const featured = studies[0];
              const rest = studies.slice(1);
              const useMirrored = rest.length >= 3;
              const mirrored = useMirrored ? rest[0] : null;
              const gridItems = useMirrored ? rest.slice(1) : rest;

              const renderMeta = (study, logoClass = 'client-logo-dark') => (
                <div className="sol-case-top-meta">
                  <span className={logoClass}>{study.client || 'LOGO'}</span>
                  <span className="sol-case-category">
                    {study.metaLabel || `${study.industry} • ${study.capability}`}
                  </span>
                </div>
              );

              const renderTags = (study) => (
                <div className="sol-case-tags">
                  {(study.tags || []).slice(0, 2).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              );

              const renderCta = (study) => (
                <div className="sol-case-btn-wrap">
                  <Button
                    variant="type2"
                    size="hero"
                    className="sol-case-btn"
                    onClick={() => navigate(`/case-studies/${study.id}`)}
                  >
                    View Case Study
                  </Button>
                </div>
              );

              return (
                <div className="sol-cases-shell">
                  <div
                    className="sol-cases-stack"
                    data-reveal-stagger="0.1"
                    data-reveal-y="28"
                    data-reveal-duration="0.55"
                  >
                    {featured ? (
                      <article
                        className="sol-case-row sol-case-row-featured"
                        data-reveal-child
                      >
                        <div className="sol-case-content">
                          {renderMeta(featured, 'client-logo-blue')}
                          <h3>{featured.cardTitle || featured.title}</h3>
                          {featured.summary ? <p>{featured.summary}</p> : null}
                          {renderTags(featured)}
                          {renderCta(featured)}
                        </div>
                        <div className="sol-case-media-panel">
                          {featured.image ? (
                            <img
                              src={featured.image}
                              alt={featured.client || featured.title}
                            />
                          ) : (
                            <div className="sol-case-placeholder">{featured.client}</div>
                          )}
                        </div>
                      </article>
                    ) : null}

                    {mirrored ? (
                      <article
                        className="sol-case-row sol-case-row-mirrored"
                        data-reveal-child
                      >
                        <div className="sol-case-media-panel">
                          {mirrored.image ? (
                            <img
                              src={mirrored.image}
                              alt={mirrored.client || mirrored.title}
                            />
                          ) : (
                            <div className="sol-case-placeholder">{mirrored.client}</div>
                          )}
                        </div>
                        <div className="sol-case-content">
                          {renderMeta(mirrored)}
                          <h3>{mirrored.cardTitle || mirrored.title}</h3>
                          {mirrored.summary ? <p>{mirrored.summary}</p> : null}
                          {renderTags(mirrored)}
                          {renderCta(mirrored)}
                        </div>
                      </article>
                    ) : null}

                    {gridItems.length > 0 ? (
                      <div className="sol-cases-half-grid">
                        {gridItems.map((study) => (
                          <article
                            key={study.id}
                            className="sol-case-row sol-case-vertical"
                            data-reveal-child
                          >
                            <div className="sol-case-media-panel sol-case-media-top">
                              {study.image ? (
                                <img
                                  src={study.image}
                                  alt={study.client || study.title}
                                />
                              ) : (
                                <div className="sol-case-placeholder">{study.client}</div>
                              )}
                            </div>
                            <div className="sol-case-vertical-body">
                              {renderMeta(study)}
                              <h3>{study.cardTitle || study.title}</h3>
                              {renderTags(study)}
                              {renderCta(study)}
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {solution.architecture && (
        <section className="sol-architecture">
          <div className="container">
            <div className="sol-architecture-header" data-reveal data-reveal-y="24">
              {solution.architecture.pill ? (
                <div className="section-pill">
                  <span className="dot" />
                  <span>{solution.architecture.pill}</span>
                </div>
              ) : null}
              <h2>
                <span className="sol-arch-title-line">{solution.architecture.titleBefore}</span>
                <span className="blue-accent">{solution.architecture.titleAccent}</span>
              </h2>
              {solution.architecture.lead ? (
                <p className="sol-lead">{solution.architecture.lead}</p>
              ) : null}
            </div>
            <div
              className="sol-layers"
              data-reveal-stagger="0.08"
              data-reveal-y="28"
              data-reveal-duration="0.55"
            >
              {solution.architecture.layers.map((layer) => (
                <article className="sol-layer-card" key={layer.title} data-reveal-child>
                  {layer.icon ? (
                    <img className="sol-layer-icon" src={layer.icon} alt="" width={40} height={40} />
                  ) : (
                    <div className="icon-dot" />
                  )}
                  <h3>{layer.title}</h3>
                  <ul>
                    {layer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {solution.process && (
        <section className="sol-process">
          <div className="container">
            <div className="section-pill">
              <span className="dot" />
              <span>{solution.process.pill}</span>
            </div>
            <h2>
              {solution.process.titleBefore}{' '}
              <span className="blue-accent">{solution.process.titleAccent}</span>
            </h2>
            <p className="sol-lead">{solution.process.lead}</p>
            <div className="sol-process-grid">
              {solution.process.steps.map((step) => (
                <article key={step.number}>
                  <span className="num">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .solution-detail { background:#fff; }
        .solution-detail .section-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 24px;
          padding: 0 10px;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          color: var(--body);
          margin-bottom: 20px;
          width: fit-content;
        }
        .solution-detail .section-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }

        .sol-hero {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 720px;
          padding: 168px 24px 128px;
          overflow-x: clip;
          background: linear-gradient(
            180deg,
            #3488FF 0%,
            #4F96FF 14%,
            #74ADFF 32%,
            #A9CBFF 52%,
            #D7E8FF 74%,
            #F5F9FF 90%,
            #FFFFFF 100%
          );
          text-align: center;
        }
        .sol-hero-inner {
          box-sizing: border-box;
          width: min(920px, 100%);
          max-width: 920px;
          min-width: 0;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .sol-hero .section-pill.light {
          margin: 0 auto 32px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.95);
          color: #FFFFFF;
        }
        .sol-hero .section-pill.light .dot {
          background: #FFFFFF;
        }
        .sol-hero h1 {
          margin: 0 auto 28px;
          width: 100%;
          max-width: 920px;
          font-size: 64px;
          line-height: 76px;
          font-weight: 600;
          color: #FFFFFF;
          letter-spacing: -1px;
          text-align: center;
        }
        .sol-hero-line {
          display: block;
          color: #FFFFFF;
          font-weight: 600;
          font-style: normal;
          white-space: nowrap;
        }
        .sol-hero .accent-italic {
          display: block;
          color: #3488FF;
          font-style: italic;
          font-weight: 500;
          white-space: nowrap;
        }
        .sol-hero p {
          margin: 0 auto 40px;
          width: 100%;
          max-width: 680px;
          color: #334155;
          font-size: 18px;
          line-height: 30px;
          text-align: center;
        }
        .sol-hero-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          width: 100%;
        }
        .sol-hero-actions .figma-btn-master.size-hero {
          height: 88px;
          min-width: 268px;
          border-radius: 14px;
          padding-left: 24px;
          padding-right: 58px;
          padding-bottom: 16px;
        }

        .sol-problem,
        .sol-methodology,
        .sol-challenges,
        .sol-why,
        .sol-pain,
        .sol-approach,
        .sol-capabilities,
        .sol-showcase,
        .sol-cases,
        .sol-architecture,
        .sol-process {
          padding: 96px 0;
        }

        .sol-lead {
          margin: 14px 0 0;
          max-width: 720px;
          color: var(--body);
          font-size: 16px;
          line-height: 26px;
        }
        .sol-lead.center,
        h2.center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .solution-detail h2 {
          margin: 0;
          max-width: 860px;
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          color: var(--heading);
        }
        .solution-detail .blue-accent { color: var(--primary); }
        .solution-detail .num {
          color: var(--primary);
          font-style: italic;
          font-weight: 500;
          font-size: 18px;
          line-height: 1;
        }
        .icon-dot {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #EAF2FF;
          margin-bottom: 16px;
          position: relative;
          flex-shrink: 0;
        }
        .icon-dot::after {
          content: '';
          position: absolute;
          inset: 12px;
          border-radius: 999px;
          background: var(--primary);
        }

        .sol-problem {
          padding: 72px 0 96px;
        }
        .sol-problem-heading {
          margin: 0 0 40px;
          width: 100%;
          text-align: left;
        }
        .sol-problem-heading .section-pill {
          display: inline-flex;
          margin: 0 auto 24px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
        .sol-problem-heading h2 {
          max-width: 760px;
          font-size: 44px;
          line-height: 56px;
        }
        .sol-problem-heading .sol-lead {
          margin-top: 16px;
          max-width: 640px;
          font-size: 16px;
          line-height: 26px;
        }
        .sol-problem-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: 28px;
          align-items: stretch;
          padding: 28px;
          border-radius: 36px;
          background: #EEF0F4;
        }
        .sol-problem-media {
          border-radius: 28px;
          overflow: hidden;
          min-height: 520px;
          height: 100%;
          background: #E2E8F0;
        }
        .sol-problem-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .sol-problem-panel {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          padding: 28px 32px;
          border-radius: 28px;
          background: #FFFFFF;
        }
        .sol-problem-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          height: 100%;
        }
        .sol-problem-list li {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          padding: 22px 0;
          border-bottom: 1px solid #E8ECF2;
        }
        .sol-problem-list li:first-child { padding-top: 4px; }
        .sol-problem-list li:last-child {
          border-bottom: none;
          padding-bottom: 4px;
        }
        .sol-problem-copy {
          min-width: 0;
          flex: 1;
        }
        .sol-problem-list strong {
          display: block;
          margin-bottom: 6px;
          color: var(--heading);
          font-size: 18px;
          font-weight: 600;
          line-height: 26px;
        }
        .sol-problem-list p {
          margin: 0;
          color: var(--body);
          font-size: 14px;
          line-height: 22px;
        }
        .sol-problem-list .num {
          flex-shrink: 0;
          padding-top: 2px;
          color: #3488FF;
          font-size: 18px;
          font-style: italic;
          font-weight: 500;
          line-height: 26px;
        }

        .sol-methodology {
          background: #FFFFFF;
        }
        .sol-methodology > .container {
          max-width: 1440px;
          padding-left: 32px;
          padding-right: 32px;
        }
        .sol-methodology-header {
          margin: 0 0 40px;
          max-width: 760px;
          text-align: left;
        }
        .sol-methodology-header .section-pill {
          margin: 0 0 18px;
        }
        .sol-methodology-header h2 {
          max-width: 720px;
          font-size: 52px;
          line-height: 64px;
          letter-spacing: -0.5px;
        }
        .sol-method-title-line {
          display: block;
          color: var(--heading);
        }
        .sol-methodology-header .blue-accent {
          display: block;
          color: #3488FF;
        }
        .sol-methodology-header .sol-lead {
          margin-top: 18px;
          max-width: 680px;
          color: #475569;
          font-size: 18px;
          line-height: 30px;
        }
        .sol-method-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 0;
          align-items: stretch;
          width: 100%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 28px;
          overflow: hidden;
        }
        .sol-method-card {
          position: relative;
          background: transparent;
          border-radius: 0;
          border-right: 1px solid #E2E8F0;
          box-shadow: none;
          padding: 22px 20px 24px;
          min-height: 210px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }
        .sol-method-card:last-child {
          border-right: none;
        }
        .sol-method-card .num {
          font-size: 18px;
          line-height: 1;
          color: #3488FF;
          font-style: italic;
          font-weight: 500;
        }
        .sol-method-body {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          width: 100%;
        }
        .sol-method-card h3 {
          margin: 0;
          font-size: 18px;
          line-height: 26px;
          font-weight: 600;
          color: var(--heading);
        }
        .sol-method-card p {
          margin: 0;
          font-size: 14px;
          line-height: 22px;
          color: #64748B;
        }

        .sol-challenge-grid,
        .sol-why-grid,
        .sol-approach-cards,
        .sol-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 28px;
        }
        .sol-approach-cards { grid-template-columns: repeat(3, 1fr); }
        .sol-challenge-card,
        .sol-why-card,
        .sol-approach-cards article,
        .sol-process-grid article {
          background: #F5F7FA;
          border-radius: 24px;
          padding: 24px;
        }
        .sol-challenge-card h3,
        .sol-why-card h3,
        .sol-approach-cards h3,
        .sol-process-grid h3 {
          margin: 10px 0 8px;
          font-size: 18px;
          color: var(--heading);
        }
        .sol-challenge-card p,
        .sol-why-card p,
        .sol-approach-cards p,
        .sol-process-grid p {
          margin: 0;
          color: var(--body);
          font-size: 14px;
          line-height: 22px;
        }

        .sol-pain > .container {
          max-width: 1440px;
          padding-left: 32px;
          padding-right: 32px;
        }
        .sol-pain-heading {
          margin-bottom: 40px;
          max-width: 900px;
        }
        .sol-pain-heading .section-pill {
          margin: 0 0 18px;
        }
        .solution-detail .sol-pain-title {
          max-width: 900px;
          margin: 0;
          font-size: 48px;
          line-height: 60px;
          letter-spacing: -0.5px;
        }
        .sol-pain-title-line {
          display: block;
          color: var(--heading);
        }
        .sol-pain-heading .blue-accent {
          display: block;
          color: #3488FF;
        }
        .sol-pain-heading .sol-lead {
          margin-top: 18px;
          max-width: 720px;
          font-size: 18px;
          line-height: 30px;
          color: #475569;
        }
        .sol-pain-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, 1.08fr) minmax(280px, 0.92fr);
          gap: 18px;
          align-items: stretch;
        }
        .sol-pain-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-height: 0;
        }
        .sol-pain-card {
          flex: 1 1 0;
          background: #F5F7FA;
          border-radius: 24px;
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-height: 148px;
        }
        .sol-pain-icon {
          width: 40px;
          height: 40px;
          display: block;
          object-fit: contain;
          flex-shrink: 0;
        }
        .sol-pain-card p {
          margin: 0;
          margin-top: auto;
          padding-top: 28px;
          font-size: 18px;
          line-height: 26px;
          color: var(--heading);
          font-weight: 500;
        }
        .sol-highlight-card {
          background: #3488FF;
          color: #fff;
          border-radius: 28px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100%;
          height: 100%;
        }
        .sol-highlight-copy {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .sol-highlight-card .brand {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.2;
        }
        .sol-highlight-card p {
          margin: 0;
          font-size: 28px;
          line-height: 36px;
          font-weight: 500;
          max-width: 16ch;
        }
        .sol-highlight-card .sol-highlight-cta.figma-btn-master.size-hero {
          width: 100%;
          align-self: stretch;
          min-width: 0;
          height: 80px;
          border-radius: 14px;
          margin-top: 28px;
        }

        .sol-approach-steps {
          list-style: none;
          margin: 28px auto 0;
          padding: 0;
          max-width: 820px;
        }
        .sol-approach-steps li {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #E8ECF2;
        }
        .sol-approach-steps strong {
          display: block;
          margin-bottom: 6px;
          color: var(--heading);
        }
        .sol-approach-steps p {
          margin: 0;
          color: var(--body);
          font-size: 15px;
          line-height: 24px;
        }

        .sol-capabilities > .container {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 5vw, 64px);
          max-width: 1440px;
          padding-left: 32px;
          padding-right: 32px;
        }
        .sol-cap-intro {
          max-width: 840px;
        }
        .sol-cap-intro .section-pill {
          margin: 0 0 18px;
        }
        .solution-detail .sol-cap-intro h2 {
          margin: 0;
          max-width: 720px;
          font-size: clamp(40px, 3.6vw, 52px);
          line-height: 1.18;
          font-weight: 600;
          letter-spacing: -0.5px;
          font-family: 'Poppins', sans-serif;
        }
        .sol-cap-title-line {
          display: block;
          color: var(--heading);
        }
        .sol-cap-intro .blue-accent {
          display: block;
          color: #3488FF;
        }
        .sol-cap-intro .sol-lead {
          margin-top: 18px;
          max-width: min(820px, 100%);
          font-size: clamp(16px, 1.2vw, 18px);
          line-height: 1.65;
          color: #475569;
        }
        .sol-cap-panel {
          background: #F5F7FA;
          border-radius: 36px;
          padding: 0 clamp(36px, 4vw, 56px);
        }
        .sol-cap-list {
          margin-top: 0;
        }
        .sol-cap-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: clamp(28px, 3vw, 48px);
          min-height: clamp(104px, 8.75vw, 126px);
          height: clamp(104px, 8.75vw, 126px);
          padding: 0;
          border-bottom: none;
          box-sizing: border-box;
        }
        .sol-cap-row:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: rgba(226, 232, 240, 0.95);
        }
        .sol-cap-row .num {
          flex-shrink: 0;
          min-width: clamp(28px, 2.4vw, 36px);
          color: #3488FF;
          font-size: clamp(20px, 1.7vw, 24px);
          line-height: 1;
          font-style: italic;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
        }
        .sol-cap-row strong,
        .sol-cap-row .sol-cap-name {
          font-size: clamp(30px, 2.5vw, 38px);
          line-height: 1.2;
          color: var(--heading);
          font-weight: 500;
          letter-spacing: -0.3px;
          white-space: nowrap;
          font-family: 'Poppins', sans-serif;
        }

        .sol-cap-row.is-interactive {
          display: grid;
          grid-template-columns: clamp(36px, 3vw, 48px) auto minmax(0, 1fr) 44px;
          align-items: center;
          column-gap: clamp(28px, 3vw, 48px);
          cursor: pointer;
          outline: none;
        }
        .sol-cap-row.is-interactive .sol-cap-name {
          transition: color 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sol-cap-desc {
          margin: 0;
          max-width: 420px;
          justify-self: end;
          text-align: left;
          color: #64748B;
          font-size: 15px;
          line-height: 24px;
          opacity: 0;
          transform: translateX(14px);
          pointer-events: none;
          transition:
            opacity 360ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sol-cap-arrow {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: 1px solid rgba(52, 136, 255, 0.35);
          color: #3488FF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          justify-self: end;
          opacity: 0;
          transform: scale(0.92);
          pointer-events: none;
          transition:
            opacity 280ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 280ms cubic-bezier(0.22, 1, 0.36, 1),
            background-color 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sol-cap-row.is-interactive:hover .sol-cap-name,
        .sol-cap-row.is-interactive:focus-visible .sol-cap-name,
        .sol-cap-row.is-interactive.is-active .sol-cap-name {
          color: #3488FF;
        }
        .sol-cap-row.is-interactive:hover .sol-cap-desc,
        .sol-cap-row.is-interactive:focus-visible .sol-cap-desc,
        .sol-cap-row.is-interactive.is-active .sol-cap-desc {
          opacity: 1;
          transform: translateX(0);
        }
        .sol-cap-row.is-interactive:hover .sol-cap-arrow,
        .sol-cap-row.is-interactive:focus-visible .sol-cap-arrow,
        .sol-cap-row.is-interactive.is-active .sol-cap-arrow {
          opacity: 1;
          transform: scale(1);
          border-color: rgba(52, 136, 255, 0.55);
          background: rgba(52, 136, 255, 0.06);
        }
        @media (hover: hover) and (pointer: fine) {
          .sol-cap-row.is-interactive.is-active:not(:hover):not(:focus-visible) .sol-cap-name {
            color: var(--heading);
          }
          .sol-cap-row.is-interactive.is-active:not(:hover):not(:focus-visible) .sol-cap-desc,
          .sol-cap-row.is-interactive.is-active:not(:hover):not(:focus-visible) .sol-cap-arrow {
            opacity: 0;
          }
          .sol-cap-row.is-interactive.is-active:not(:hover):not(:focus-visible) .sol-cap-desc {
            transform: translateX(14px);
          }
          .sol-cap-row.is-interactive.is-active:not(:hover):not(:focus-visible) .sol-cap-arrow {
            transform: scale(0.92);
          }
        }

        @media (max-width: 900px) {
          .sol-capabilities > .container {
            padding-left: 24px;
            padding-right: 24px;
          }
          .sol-cap-panel {
            padding: 0 20px;
            border-radius: 28px;
          }
          .sol-cap-row {
            height: auto;
            min-height: 88px;
            padding: 28px 0;
          }
          .sol-cap-row strong,
          .sol-cap-row .sol-cap-name {
            white-space: normal;
          }
          .sol-cap-row.is-interactive {
            grid-template-columns: 32px minmax(0, 1fr) 40px;
            column-gap: 16px;
            row-gap: 0;
          }
          .sol-cap-row.is-interactive .sol-cap-name {
            font-size: clamp(22px, 5.5vw, 28px);
            line-height: 1.25;
          }
          .sol-cap-desc {
            grid-column: 2 / 3;
            justify-self: start;
            max-width: none;
            max-height: 0;
            overflow: hidden;
            transform: translateY(8px);
          }
          .sol-cap-row.is-interactive.is-active .sol-cap-desc,
          .sol-cap-row.is-interactive:focus-visible .sol-cap-desc {
            max-height: 96px;
            margin-top: 8px;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sol-cap-row.is-interactive .sol-cap-name,
          .sol-cap-desc,
          .sol-cap-arrow {
            transition: none !important;
          }
        }

        .sol-showcase {
          padding-top: clamp(72px, 8vw, 112px);
          padding-bottom: clamp(56px, 6vw, 88px);
        }
        .sol-showcase > .container {
          max-width: 1440px;
          padding-left: 32px;
          padding-right: 32px;
        }
        .sol-arch-scene {
          position: relative;
          width: 100%;
          overflow: visible;
        }
        .sol-arch-pin {
          position: relative;
          width: 100%;
          min-height: min(100vh, 920px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 12px;
          padding-bottom: 32px;
          background: #ffffff;
          overflow: visible;
        }
        .solution-detail .sol-showcase-pill {
          display: flex;
          width: fit-content;
          margin: 0 auto 20px;
        }
        .solution-detail .sol-showcase-title {
          margin: 0 auto clamp(36px, 4vw, 56px);
          max-width: 860px;
          text-align: center;
          font-size: clamp(36px, 3.4vw, 52px);
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: -0.5px;
          color: var(--heading);
          font-family: 'Poppins', sans-serif;
        }
        .sol-showcase-title-line {
          display: block;
          color: var(--heading);
        }
        .sol-showcase-title-your {
          color: var(--heading);
        }
        .sol-showcase-title-accent,
        .sol-showcase-title .blue-accent {
          color: #3488FF;
        }
        .sol-architecture-header {
          margin-bottom: clamp(40px, 5vw, 64px);
          max-width: 820px;
        }
        .sol-architecture-header .section-pill {
          margin: 0 0 20px;
        }
        .sol-arch-title-line {
          display: block;
          color: var(--heading);
        }
        .sol-architecture-header .blue-accent {
          display: block;
          color: #3488FF;
        }
        .sol-architecture-header .sol-lead {
          margin-top: 16px;
          max-width: 680px;
        }
        .sol-arch-diagram {
          display: grid;
          grid-template-columns: minmax(180px, 1fr) minmax(240px, 380px) minmax(180px, 1fr);
          align-items: center;
          column-gap: clamp(12px, 2vw, 28px);
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          min-height: clamp(380px, 44vw, 520px);
          overflow: visible;
        }
        .sol-arch-side {
          position: relative;
          /* Match stack-frame height: width clamp × aspect-ratio 370/480 */
          height: calc(clamp(240px, 28vw, 360px) * 480 / 370);
          padding: 0;
          align-self: center;
        }
        .sol-arch-left {
          justify-items: end;
        }
        .sol-arch-right {
          justify-items: start;
        }
        .sol-arch-callout {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: clamp(10px, 1.2vw, 16px);
          max-width: 260px;
          translate: 0 -50%;
          will-change: opacity;
        }
        .sol-arch-callout-left {
          right: 0;
          flex-direction: row;
          text-align: right;
        }
        .sol-arch-callout-right {
          left: 0;
          flex-direction: row;
          text-align: left;
        }
        .sol-arch-callout-copy {
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-width: 240px;
        }
        .sol-arch-callout-left .sol-arch-callout-copy {
          align-items: flex-end;
        }
        .sol-arch-callout-right .sol-arch-callout-copy {
          align-items: flex-start;
        }
        .sol-arch-callout-title,
        .sol-arch-callout-copy strong {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(16px, 1.2vw, 18px);
          line-height: 1.35;
          font-weight: 600;
          color: #3488FF;
          white-space: nowrap;
        }
        .sol-arch-callout-body,
        .sol-arch-callout-copy em {
          display: flex;
          flex-direction: column;
          font-style: normal;
          font-family: 'Poppins', sans-serif;
          font-size: clamp(13px, 1vw, 14px);
          line-height: 1.45;
          color: #64748B;
          max-width: 240px;
        }
        .sol-arch-callout-line {
          display: block;
          white-space: nowrap;
        }
        .sol-arch-callout-connector {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          min-width: clamp(48px, 6vw, 88px);
        }
        .sol-arch-line {
          display: block;
          flex: 1 1 auto;
          height: 0;
          border-top: 1.5px dotted rgba(148, 163, 184, 0.95);
          min-width: clamp(36px, 4vw, 64px);
          transform-origin: center;
        }
        .sol-arch-node {
          position: relative;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(52, 136, 255, 0.18);
          flex-shrink: 0;
        }
        .sol-arch-node::after {
          content: '';
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: #3488FF;
        }
        .sol-arch-stack {
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(clamp(240px, 28vw, 360px) * 480 / 370);
          min-height: 0;
          overflow: visible;
        }
        .sol-arch-stack-frame {
          position: relative;
          width: clamp(240px, 28vw, 360px);
          aspect-ratio: 370 / 480;
          overflow: visible;
        }
        .sol-arch-stack-frame svg {
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .sol-arch-stack-frame .arch-layer {
          /* GSAP drives SVG group transforms for physical rise */
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .sol-arch-stack-frame .arch-layer {
            opacity: 1 !important;
            transform: none !important;
          }
          .sol-arch-callout {
            opacity: 1 !important;
          }
        }

        .sol-cases {
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .sol-cases-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 40px;
        }
        .sol-cases-heading {
          max-width: 657px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .sol-cases-title {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 50px;
          color: #0F172A;
        }
        .sol-cases-title .blue-accent {
          color: #3488FF;
        }
        .sol-cases-lead {
          margin: 0;
          max-width: 657px;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: #475569;
        }
        .sol-cases-header-action {
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
        }
        .sol-cases-shell {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          background: #EEF0F4;
          border: 1px solid #E2E8F0;
          border-radius: 32px;
          padding: 20px;
          box-sizing: border-box;
        }
        .sol-cases-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .sol-case-row {
          background: #FFFFFF;
          border-radius: 24px;
          border: 1px solid #E2E8F0;
          overflow: hidden;
          box-sizing: border-box;
        }
        .sol-case-row-featured,
        .sol-case-row-mirrored {
          display: flex;
          align-items: stretch;
          height: 500px;
          gap: 20px;
        }
        .sol-case-row-featured {
          padding: 20px 20px 20px 24px;
        }
        .sol-case-row-mirrored {
          padding: 20px 24px 20px 20px;
        }
        .sol-case-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
        }
        .sol-case-media-panel {
          width: 550px;
          height: 460px;
          background: #EEF0F4;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          align-self: center;
        }
        .sol-case-media-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }
        .sol-case-top-meta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }
        .sol-case-top-meta .client-logo-blue {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #3488FF;
          letter-spacing: 0.5px;
        }
        .sol-case-top-meta .client-logo-dark {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: 0.5px;
        }
        .sol-case-category {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #64748B;
          text-align: right;
        }
        .sol-case-content h3,
        .sol-case-vertical-body h3 {
          margin: 0 0 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 34px;
          color: #0F172A;
        }
        .sol-case-content p {
          margin: 0 0 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: #475569;
        }
        .sol-case-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0;
        }
        .sol-case-tags span {
          background: #EAF2FF;
          color: #3488FF;
          border-radius: 9999px;
          padding: 6px 14px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .sol-case-btn-wrap {
          margin-top: auto;
          padding-top: 24px;
        }
        .sol-case-btn {
          width: auto;
          min-width: 220px;
        }
        .sol-cases-half-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .sol-case-vertical {
          display: flex;
          flex-direction: column;
          height: 640px;
          padding: 20px;
          align-items: stretch;
        }
        .sol-case-media-top {
          width: 100%;
          height: 236px;
          align-self: stretch;
        }
        .sol-case-vertical-body {
          padding-top: 24px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
          min-height: 0;
        }
        .sol-case-placeholder {
          width: 100%;
          height: 100%;
          min-height: 180px;
          display: grid;
          place-items: center;
          color: #64748B;
          font-weight: 600;
        }

        .sol-architecture h2 {
          max-width: 900px;
        }
        .sol-layers {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(14px, 1.6vw, 20px);
          margin-top: 0;
          padding: 0;
          background: none;
          border-radius: 0;
          align-items: stretch;
        }
        .sol-layer-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
          min-height: 100%;
          padding: clamp(28px, 2.2vw, 32px);
          background: #F4F6FA;
          border: 1px solid #E6EAF1;
          border-radius: 20px;
          box-sizing: border-box;
        }
        .sol-layer-icon {
          width: 38px;
          height: 38px;
          object-fit: contain;
          display: block;
          margin-bottom: 18px;
          color: #3488FF;
        }
        .sol-layer-card h3 {
          margin: 0 0 14px;
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 600;
          color: #0F172A;
        }
        .sol-layer-card ul {
          margin: 0;
          padding-left: 18px;
          list-style: disc;
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 1.55;
          color: #475569;
        }
        .sol-layer-card li + li {
          margin-top: 6px;
        }

        @media (max-width: 1100px) {
          .sol-method-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .sol-method-card:nth-child(3n) {
            border-right: none;
          }
          .sol-method-card:nth-child(n + 4) {
            border-top: 1px solid #E2E8F0;
          }
          .sol-methodology > .container {
            padding-left: 24px;
            padding-right: 24px;
          }
          .sol-methodology-header h2 {
            font-size: 40px;
            line-height: 50px;
          }
          .sol-methodology-header .sol-lead {
            font-size: 16px;
            line-height: 26px;
          }
          .sol-method-card {
            min-height: 200px;
            padding: 20px 18px 22px;
          }
          .sol-layers {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .sol-pain > .container {
            padding-left: 24px;
            padding-right: 24px;
          }
          .sol-pain-grid {
            grid-template-columns: 1fr 1fr;
          }
          .sol-highlight-card {
            grid-column: 1 / -1;
            min-height: 280px;
          }
          .solution-detail .sol-pain-title {
            font-size: 40px;
            line-height: 50px;
          }
          .sol-cases-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .sol-case-row-featured,
          .sol-case-row-mirrored {
            height: auto;
            flex-direction: column;
            padding: 24px;
          }
          .sol-case-row-mirrored {
            flex-direction: column-reverse;
          }
          .sol-case-media-panel,
          .sol-case-media-top {
            width: 100%;
            height: 300px;
          }
          .sol-cases-half-grid {
            grid-template-columns: 1fr;
          }
          .sol-case-vertical {
            height: auto;
          }
          .sol-arch-diagram {
            grid-template-columns: minmax(140px, 1fr) minmax(200px, 280px) minmax(140px, 1fr);
            column-gap: 10px;
            min-height: 360px;
          }
          .sol-arch-side,
          .sol-arch-stack {
            height: calc(240px * 480 / 370);
            min-height: 0;
          }
          .sol-arch-stack-frame {
            width: 240px;
          }
          .sol-arch-callout {
            max-width: 220px;
          }
          .sol-arch-callout-copy,
          .sol-arch-callout-body {
            max-width: 200px;
          }
        }

        @media (max-width: 980px) {
          .sol-hero {
            min-height: 640px;
            padding: 148px 0 100px;
          }
          .sol-hero h1 {
            font-size: 44px;
            line-height: 54px;
          }
          .sol-hero-line,
          .sol-hero .accent-italic {
            white-space: normal;
          }
          .sol-hero p {
            font-size: 16px;
            line-height: 26px;
          }
          .sol-hero-actions .figma-btn-master.size-hero {
            height: 72px;
            min-width: 220px;
          }
          .solution-detail h2 { font-size: 30px; line-height: 38px; }
          .sol-problem-shell,
          .sol-pain-grid {
            grid-template-columns: 1fr;
          }
          .sol-pain > .container {
            padding-left: 24px;
            padding-right: 24px;
          }
          .solution-detail .sol-pain-title {
            font-size: 34px;
            line-height: 44px;
          }
          .sol-pain-heading .sol-lead {
            font-size: 16px;
            line-height: 26px;
          }
          .sol-problem-shell {
            gap: 20px;
            padding: 20px;
          }
          .sol-problem-media {
            min-height: 360px;
            aspect-ratio: 16 / 11;
            height: auto;
          }
          .sol-problem-panel {
            padding: 22px 20px;
          }
          .sol-problem-heading h2 {
            font-size: 34px;
            line-height: 44px;
          }
          .sol-highlight-card {
            grid-column: auto;
            grid-row: auto;
            min-height: 240px;
          }
          .sol-challenge-grid,
          .sol-why-grid,
          .sol-approach-cards,
          .sol-process-grid,
          .sol-method-grid {
            grid-template-columns: 1fr;
          }
          .sol-layers {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
          .sol-cases-title {
            font-size: 32px;
            line-height: 42px;
          }
          .sol-cap-panel { padding: 0 20px; }
          .solution-detail .sol-cap-intro h2 {
            font-size: 34px;
            line-height: 1.2;
          }
          .solution-detail .sol-showcase-title {
            font-size: 36px;
            line-height: 1.22;
          }
        }

        @media (max-width: 720px) {
          .sol-arch-scene {
            min-height: 0;
          }
          .sol-arch-pin {
            min-height: 0;
            padding-top: 0;
            padding-bottom: 0;
          }
          .sol-arch-diagram {
            grid-template-columns: 1fr;
            gap: 28px;
            min-height: 0;
          }
          .sol-arch-stack {
            order: -1;
            min-height: 0;
          }
          .sol-arch-stack-frame {
            width: min(280px, 70vw);
            margin: 0 auto;
          }
          .sol-arch-side {
            display: flex;
            flex-direction: column;
            height: auto;
            gap: 22px;
            padding: 0;
            align-items: center;
            justify-items: center;
          }
          .sol-arch-callout {
            position: relative;
            top: auto !important;
            translate: none;
            max-width: 320px;
            justify-content: center;
          }
          .sol-arch-callout-left,
          .sol-arch-callout-right {
            left: auto;
            right: auto;
            text-align: center;
          }
          .sol-arch-callout-left .sol-arch-callout-copy,
          .sol-arch-callout-right .sol-arch-callout-copy {
            align-items: center;
            max-width: 280px;
          }
          .sol-arch-callout-connector {
            display: none;
          }
          .solution-detail .sol-showcase-title {
            font-size: 30px;
            line-height: 1.25;
          }
        }

        @media (max-width: 640px) {
          .sol-hero {
            min-height: 0;
            padding: 132px 16px 88px;
          }
          .sol-problem-shell {
            border-radius: 24px;
            padding: 14px;
          }
          .sol-problem-media,
          .sol-problem-panel {
            border-radius: 20px;
          }
          .sol-problem-list li {
            gap: 16px;
            padding: 18px 0;
          }
          .sol-problem-list strong {
            font-size: 16px;
            line-height: 24px;
          }
          .sol-hero .section-pill.light {
            margin-bottom: 24px;
          }
          .sol-hero h1 {
            font-size: 32px;
            line-height: 40px;
            margin-bottom: 20px;
          }
          .sol-hero p {
            margin-bottom: 28px;
            font-size: 15px;
            line-height: 24px;
          }
          .sol-hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .sol-hero-actions .figma-btn-master.size-hero {
            width: 100%;
            min-width: 0;
            height: 64px;
          }
          .sol-method-grid {
            grid-template-columns: 1fr;
          }
          .sol-layers {
            grid-template-columns: 1fr;
          }
          .sol-method-card {
            min-height: 0;
            padding: 22px 20px;
            border-right: none;
            border-top: none;
            border-bottom: 1px solid #E2E8F0;
          }
          .sol-method-card:last-child {
            border-bottom: none;
          }
          .sol-method-card:nth-child(n + 4) {
            border-top: none;
          }
          .sol-methodology > .container {
            padding-left: 16px;
            padding-right: 16px;
          }
          .sol-methodology-header h2 {
            font-size: 32px;
            line-height: 42px;
          }
          .sol-method-card {
            min-height: 0;
          }
          .sol-method-body {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}
