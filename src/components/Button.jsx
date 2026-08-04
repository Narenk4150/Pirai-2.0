import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

export default function Button({ 
  children, 
  variant, // 'type1' | 'type2' | 'type3'
  size = 'standard', // 'hero' (80px) | 'standard' (48px)
  fullWidth = false,
  showArrow = true, // default true, set to false to remove arrow icon while keeping scroll animation
  className = '', 
  onClick,
  style = {},
  ...props 
}) {
  const btnRef = useRef(null);
  const coverRef = useRef(null);
  const textPrimaryRef = useRef(null);
  const textDuplicateRef = useRef(null);
  const iconRef = useRef(null);

  // Auto-detect type from label if variant is not explicitly passed
  let resolvedType = variant;
  if (!resolvedType) {
    const label = typeof children === 'string' ? children.trim() : '';
    if (label === 'View Details') {
      resolvedType = 'type1';
    } else if (
      label === 'View all' || 
      label === 'View all case study' || 
      label === 'View all case studies' || 
      label === 'View Case Study' || 
      label === 'Explore Solutions' || 
      label === 'Explore Product' ||
      label === 'Explore Now'
    ) {
      resolvedType = 'type2';
    } else {
      resolvedType = 'type3'; // "Discuss Your Challenge", "Request a Demo", "Enquire Now", "About Us", "View All Products"
    }
  }

  const isStandardSize = size === 'standard';
  const slideDistance = isStandardSize ? -20 : -24;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!btnRef.current || !coverRef.current) return;

      const btn = btnRef.current;
      const cover = coverRef.current;
      const primaryText = textPrimaryRef.current;
      const duplicateText = textDuplicateRef.current;
      const icon = iconRef.current;

      const chipSize = isStandardSize ? 32 : 36;
      const insetTop = isStandardSize ? 6 : 8;
      const insetRight = isStandardSize ? 6 : 8;
      const chipRadius = isStandardSize ? 8 : 8;
      const btnRadius = isStandardSize ? 10 : 12;

      const tl = gsap.timeline({ paused: true });

      if (resolvedType === 'type1') {
        tl.to(btn, {
          backgroundColor: '#FFFFFF',
          borderColor: '#E2E8F0',
          duration: 0.22,
          ease: "power2.out"
        }, 0)
        .to(cover, { 
          width: showArrow ? chipSize : '100%', 
          height: showArrow ? chipSize : '100%', 
          top: showArrow ? insetTop : 0, 
          right: showArrow ? insetRight : 0, 
          borderRadius: showArrow ? chipRadius : btnRadius, 
          backgroundColor: '#3488FF', 
          duration: 0.22, 
          ease: "power2.out" 
        }, 0)
        .to([primaryText, duplicateText], {
          y: slideDistance,
          color: '#0F172A',
          duration: 0.22,
          ease: "power2.out"
        }, 0);

        if (icon) {
          tl.to(icon, { 
            color: '#FFFFFF', 
            duration: 0.22, 
            ease: "power2.out" 
          }, 0);
        }
      } else if (resolvedType === 'type2') {
        tl.to(btn, {
          backgroundColor: '#FFFFFF',
          borderColor: '#E2E8F0',
          duration: 0.22,
          ease: "power2.out"
        }, 0)
        .to(cover, { 
          width: showArrow ? chipSize : '100%', 
          height: showArrow ? chipSize : '100%', 
          top: showArrow ? insetTop : 0, 
          right: showArrow ? insetRight : 0, 
          borderRadius: showArrow ? chipRadius : btnRadius, 
          backgroundColor: '#EEF0F4', 
          duration: 0.22, 
          ease: "power2.out" 
        }, 0)
        .to([primaryText, duplicateText], {
          y: slideDistance,
          duration: 0.22,
          ease: "power2.out"
        }, 0);

        if (icon) {
          tl.to(icon, { 
            color: '#0F172A', 
            duration: 0.22, 
            ease: "power2.out" 
          }, 0);
        }
      } else {
        // TYPE 3 Primary Hero / Navbar Buttons ("Discuss Your Challenge", "Enquire Now")
        tl.to(btn, {
          borderColor: '#3488FF',
          duration: 0.22,
          ease: "power2.out"
        }, 0)
        .to(cover, { 
          width: showArrow ? chipSize : '100%', 
          height: showArrow ? chipSize : '100%', 
          top: showArrow ? insetTop : 0, 
          right: showArrow ? insetRight : 0, 
          borderRadius: showArrow ? chipRadius : btnRadius, 
          backgroundColor: '#3488FF', 
          duration: 0.22, 
          ease: "power2.out" 
        }, 0)
        .to([primaryText, duplicateText], {
          y: slideDistance,
          color: '#FFFFFF',
          duration: 0.22,
          ease: "power2.out"
        }, 0);

        if (icon) {
          tl.to(icon, { 
            color: '#FFFFFF', 
            duration: 0.22, 
            ease: "power2.out" 
          }, 0);
        }
      }

      const onEnter = () => tl.play();
      const onLeave = () => tl.reverse();

      btn.addEventListener("mouseenter", onEnter);
      btn.addEventListener("mouseleave", onLeave);
      btn.addEventListener("focus", onEnter);
      btn.addEventListener("blur", onLeave);
    });

    return () => ctx.revert();
  }, [resolvedType, size, showArrow, isStandardSize, slideDistance]);

  return (
    <button
      ref={btnRef}
      className={`figma-btn-master btn-${resolvedType} size-${size} ${fullWidth ? 'btn-full-width' : ''} ${!showArrow ? 'btn-no-arrow' : ''} ${className}`}
      onClick={onClick}
      style={style}
      {...props}
    >
      <div ref={coverRef} className="cover" />
      
      {/* Clipped Text Mask for Text Swap-Slide Animation */}
      <span className="button-text-mask">
        <span ref={textPrimaryRef} className="text-inner text-primary-copy">{children}</span>
        <span ref={textDuplicateRef} className="text-inner text-duplicate-copy">{children}</span>
      </span>

      {/* Centered Icon Container (Only rendered if showArrow is true) */}
      {showArrow && (
        <div ref={iconRef} className="icon">
          <ArrowUpRight size={isStandardSize ? 18 : 20} />
        </div>
      )}

      <style>{`
        /* EXACT FIGMA MASTER BUTTON ARCHITECTURE */
        .figma-btn-master {
          position: relative;
          outline: none;
          cursor: pointer;
          overflow: hidden;
          padding: 0;
          margin: 0;
          border: 1.5px solid transparent;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
          transition: transform 0.22s ease-out;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* 80PX HERO BUTTON SIZE */
        .figma-btn-master.size-hero {
          height: 80px;
          border-radius: 12px;
          align-items: flex-end;
          padding-left: 20px;
          padding-bottom: 12px;
          padding-right: 52px;
        }

        .figma-btn-master.size-hero.btn-no-arrow {
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 0;
        }

        /* 48PX STANDARD / NAVBAR BUTTON SIZE */
        .figma-btn-master.size-standard {
          height: 48px;                      /* Exact height 48px */
          border-radius: 10px;
          align-items: center;
          padding-left: 20px;
          padding-right: 46px;
        }

        .figma-btn-master.size-standard.btn-no-arrow {
          padding-left: 24px;
          padding-right: 24px;
        }

        .figma-btn-master.btn-full-width {
          width: 100%;
        }

        /* Cover Layer: absolutely positioned color block */
        .figma-btn-master .cover {
          position: absolute;
          z-index: 1;
          pointer-events: none;
        }

        .btn-type1 {
          background-color: #3488FF;
        }
        .btn-type1 .cover {
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          border-radius: 12px;
          background-color: #3488FF;
        }
        .btn-type1 .text-inner {
          color: #FFFFFF;
        }
        .btn-type1 .icon {
          color: #FFFFFF;
        }

        .btn-type2 {
          background-color: #EEF0F4;
        }

        .btn-type2 .cover {
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          border-radius: 12px;
          background-color: #EEF0F4;
        }

        .btn-type3 {
          background-color: #EEF0F4;
        }

        .btn-type3 .cover {
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          border-radius: 12px;
          background-color: #3488FF;
        }

        /* TEXT SWAP-SLIDE MASK ARCHITECTURE */
        .figma-btn-master.size-hero .button-text-mask {
          position: relative;
          z-index: 2;
          height: 24px;
          margin-right: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          pointer-events: none;
        }

        .figma-btn-master.size-standard .button-text-mask {
          position: relative;
          z-index: 2;
          height: 20px;
          margin-right: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          pointer-events: none;
        }

        .figma-btn-master.btn-no-arrow .button-text-mask {
          margin-right: 0;   /* No right margin when arrow is omitted */
        }

        .figma-btn-master.size-hero .text-inner {
          height: 24px;
          line-height: 24px;
          display: block;
          white-space: nowrap;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 500;
          will-change: transform;
        }

        .figma-btn-master.size-standard .text-inner {
          height: 20px;
          line-height: 20px;
          display: block;
          white-space: nowrap;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 500;
          will-change: transform;
        }

        .btn-type2 .text-inner {
          color: #0F172A;
        }

        .btn-type3 .text-inner {
          color: #FFFFFF;
        }

        /* ICON LAYER: ALIGNED IN 32PX (OR 36PX) BOX AT TOP & RIGHT */
        .figma-btn-master.size-hero .icon {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 36px;
          height: 36px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          line-height: 0;
          padding: 0;
          margin: 0;
        }

        .figma-btn-master.size-standard .icon {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 32px;
          height: 32px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          line-height: 0;
          padding: 0;
          margin: 0;
        }

        .figma-btn-master .icon svg {
          display: block;
          margin: 0 auto;
        }

        .btn-type2 .icon {
          color: #0F172A;
        }

        .btn-type3 .icon {
          color: #FFFFFF;
        }
      `}</style>
    </button>
  );
}
