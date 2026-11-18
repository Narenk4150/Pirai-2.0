import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  variant,
  size = 'standard',
  fullWidth = false,
  showArrow = true,
  className = '',
  onClick,
  style = {},
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

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
      label === 'Explore Now' ||
      label === 'See Our Work' ||
      label === 'Enquire Now'
    ) {
      resolvedType = 'type2';
    } else if (label === 'Discuss Your Challenge') {
      resolvedType = 'type1';
    } else {
      resolvedType = 'type3';
    }
  }

  const isStandardSize = size === 'standard';

  return (
    <button
      type="button"
      className={`figma-btn-master btn-${resolvedType} size-${size} ${fullWidth ? 'btn-full-width' : ''} ${!showArrow ? 'btn-no-arrow' : ''} ${isHovered ? 'is-hovered' : ''} ${className}`}
      style={style}
      {...props}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="cover" aria-hidden="true" />

      <span className="button-text-mask">
        <span className="text-inner text-primary-copy">{children}</span>
        <span className="text-inner text-duplicate-copy" aria-hidden="true">
          {children}
        </span>
      </span>

      {showArrow && (
        <div className="icon" aria-hidden="true">
          <ArrowUpRight size={isStandardSize ? 18 : 20} strokeWidth={2} />
        </div>
      )}

      <style>{`
        .figma-btn-master {
          position: relative;
          outline: none;
          cursor: pointer;
          overflow: hidden;
          padding: 0;
          margin: 0;
          border: 1.5px solid transparent;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          transition:
            background-color 0.22s ease-out,
            border-color 0.22s ease-out;
        }

        .figma-btn-master.size-hero {
          height: 80px;
          border-radius: 12px;
          align-items: flex-end;
          padding-left: 20px;
          padding-bottom: 14px;
          padding-right: 52px;
        }

        .figma-btn-master.size-hero.btn-no-arrow {
          align-items: center;
          justify-content: center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 0;
        }

        .figma-btn-master.size-hero.btn-full-width {
          padding-left: 20px;
          padding-right: 52px;
        }

        .figma-btn-master.size-standard {
          height: 48px;
          border-radius: 10px;
          align-items: center;
          padding-left: 16px;
          padding-right: 46px;
        }

        .figma-btn-master.size-standard.btn-no-arrow {
          justify-content: center;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
        }

        .figma-btn-master.btn-enquire-nav {
          width: 180px;
          height: 48px;
          border-radius: 8px;
          box-shadow: none;
          justify-content: center;
          align-items: center;
        }

        .figma-btn-master.btn-enquire-nav .cover {
          border-radius: 8px;
        }

        .figma-btn-master.btn-enquire-nav .button-text-mask {
          margin-right: 0;
        }

        /* Nav Enquire: keep text-slide, fill blue on hover */
        .figma-btn-master.btn-enquire-nav.is-hovered,
        .figma-btn-master.btn-enquire-nav:hover,
        .figma-btn-master.btn-enquire-nav:focus-visible {
          background-color: #3488FF;
          border-color: #3488FF;
        }

        .figma-btn-master.btn-enquire-nav.is-hovered .cover,
        .figma-btn-master.btn-enquire-nav:hover .cover,
        .figma-btn-master.btn-enquire-nav:focus-visible .cover {
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          border-radius: 8px;
          background-color: #3488FF;
        }

        .figma-btn-master.btn-enquire-nav.is-hovered .text-inner,
        .figma-btn-master.btn-enquire-nav:hover .text-inner,
        .figma-btn-master.btn-enquire-nav:focus-visible .text-inner {
          color: #FFFFFF;
        }

        .figma-btn-master.btn-full-width {
          width: 100%;
        }

        .figma-btn-master .cover {
          position: absolute;
          z-index: 1;
          pointer-events: none;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          border-radius: inherit;
          transition:
            width 0.22s ease-out,
            height 0.22s ease-out,
            top 0.22s ease-out,
            right 0.22s ease-out,
            border-radius 0.22s ease-out,
            background-color 0.22s ease-out;
        }

        .btn-type1 {
          background-color: #3488FF;
        }
        .btn-type1 .cover {
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
          background-color: #EEF0F4;
        }
        .btn-type2 .text-inner {
          color: #0F172A;
        }
        .btn-type2 .icon {
          color: #0F172A;
        }

        .btn-type3 {
          background-color: #EEF0F4;
        }
        .btn-type3 .cover {
          background-color: #3488FF;
        }
        .btn-type3 .text-inner {
          color: #FFFFFF;
        }
        .btn-type3 .icon {
          color: #FFFFFF;
        }

        /* Hover / focus: shrink cover to chip, reveal button surface */
        .figma-btn-master.size-hero.is-hovered .cover,
        .figma-btn-master.size-hero:hover .cover,
        .figma-btn-master.size-hero:focus-visible .cover {
          width: 36px;
          height: 36px;
          top: 8px;
          right: 8px;
          border-radius: 4px;
        }

        .figma-btn-master.size-standard.is-hovered .cover,
        .figma-btn-master.size-standard:hover .cover,
        .figma-btn-master.size-standard:focus-visible .cover {
          width: 32px;
          height: 32px;
          top: 6px;
          right: 6px;
          border-radius: 4px;
        }

        .figma-btn-master.btn-no-arrow.is-hovered .cover,
        .figma-btn-master.btn-no-arrow:hover .cover,
        .figma-btn-master.btn-no-arrow:focus-visible .cover {
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          border-radius: inherit;
        }

        .btn-type1.is-hovered,
        .btn-type1:hover,
        .btn-type1:focus-visible {
          background-color: #FFFFFF;
          border-color: #E2E8F0;
        }
        .btn-type1.is-hovered .cover,
        .btn-type1:hover .cover,
        .btn-type1:focus-visible .cover {
          background-color: #3488FF;
        }
        .btn-type1.is-hovered .text-inner,
        .btn-type1:hover .text-inner,
        .btn-type1:focus-visible .text-inner {
          color: #0F172A;
        }
        .btn-type1.is-hovered .icon,
        .btn-type1:hover .icon,
        .btn-type1:focus-visible .icon {
          color: #FFFFFF;
        }

        .btn-type2.is-hovered,
        .btn-type2:hover,
        .btn-type2:focus-visible {
          background-color: #FFFFFF;
          border-color: #E2E8F0;
        }
        .btn-type2.is-hovered .cover,
        .btn-type2:hover .cover,
        .btn-type2:focus-visible .cover {
          background-color: #EEF0F4;
        }

        .btn-type3.is-hovered,
        .btn-type3:hover,
        .btn-type3:focus-visible {
          border-color: #3488FF;
        }
        .btn-type3.is-hovered .cover,
        .btn-type3:hover .cover,
        .btn-type3:focus-visible .cover {
          background-color: #3488FF;
        }
        .btn-type3.is-hovered .text-inner,
        .btn-type3:hover .text-inner,
        .btn-type3:focus-visible .text-inner {
          color: #0F172A;
        }
        .btn-type3.is-hovered .icon,
        .btn-type3:hover .icon,
        .btn-type3:focus-visible .icon {
          color: #FFFFFF;
        }

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
          margin-right: 0;
        }

        .figma-btn-master.size-hero .text-inner {
          height: 24px;
          line-height: 24px;
          display: block;
          white-space: nowrap;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 500;
          transition: transform 0.22s ease-out, color 0.22s ease-out;
        }

        .figma-btn-master.size-standard .text-inner {
          height: 20px;
          line-height: 20px;
          display: block;
          white-space: nowrap;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 500;
          transition: transform 0.22s ease-out, color 0.22s ease-out;
        }

        .figma-btn-master.size-hero.is-hovered .text-inner,
        .figma-btn-master.size-hero:hover .text-inner,
        .figma-btn-master.size-hero:focus-visible .text-inner {
          transform: translateY(-24px);
        }

        .figma-btn-master.size-standard.is-hovered .text-inner,
        .figma-btn-master.size-standard:hover .text-inner,
        .figma-btn-master.size-standard:focus-visible .text-inner {
          transform: translateY(-20px);
        }

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
          transition: color 0.22s ease-out;
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
          transition: color 0.22s ease-out;
        }

        .figma-btn-master .icon svg {
          display: block;
          margin: 0 auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .figma-btn-master,
          .figma-btn-master .cover,
          .figma-btn-master .text-inner,
          .figma-btn-master .icon {
            transition: none;
          }
        }
      `}</style>
    </button>
  );
}
