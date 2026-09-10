import React, { useState, useRef, useEffect } from 'react';
import { Briefcase, MapPin, Move, RotateCcw } from 'lucide-react';
import userPhoto from '../assets/dhakshan-photo.png';

export default function DraggableIdCard() {
  const cardRef = useRef(null);

  // Position & 3D Tilt state
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Drag tracking ref
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Window-level drag listeners - prevents losing drag or sticking
  useEffect(() => {
    if (!isDragging) return;

    const handleWindowPointerMove = (e) => {
      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;

      // Bound movement comfortably within visible area
      const clampedX = Math.max(Math.min(deltaX, 170), -170);
      const clampedY = Math.max(Math.min(deltaY, 150), -90);

      setPos({ x: clampedX, y: clampedY });
      setRotation({
        x: Math.max(Math.min(-clampedY * 0.14, 25), -25),
        y: Math.max(Math.min(clampedX * 0.14, 25), -25),
        z: Math.max(Math.min(clampedX * 0.04, 12), -12),
      });
    };

    const handleWindowPointerUp = () => {
      // Return immediately to initial position on release
      setIsDragging(false);
      setPos({ x: 0, y: 0 });
      setRotation({ x: 0, y: 0, z: 0 });
    };

    window.addEventListener('pointermove', handleWindowPointerMove);
    window.addEventListener('pointerup', handleWindowPointerUp);
    window.addEventListener('pointercancel', handleWindowPointerUp);

    return () => {
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
      window.removeEventListener('pointercancel', handleWindowPointerUp);
    };
  }, [isDragging]);

  // Pointer Down on Card - Initiate Drag (Desktop Mouse Only)
  const handlePointerDown = (e) => {
    // On mobile touch devices, don't hijack touch gestures so page scrolling is 100% native and fluid
    if (isMobile || e.pointerType === 'touch') return;
    // Only primary mouse button
    if (e.button !== 0) return;

    clearAnimTimeouts();
    setIsAnimating(false);
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  // Subtle 3D tilt on hover when not dragging
  const handleCardMouseMove = (e) => {
    if (isMobile || isDragging || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const normX = (e.clientX - cardCenterX) / (rect.width / 2);
    const normY = (e.clientY - cardCenterY) / (rect.height / 2);

    setRotation({
      x: Math.max(Math.min(-normY * 10, 15), -15),
      y: Math.max(Math.min(normX * 10, 15), -15),
      z: 0,
    });
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animTimeoutsRef = useRef([]);
  const swingDirRef = useRef(1);
  const touchStartPos = useRef({ x: 0, y: 0, time: 0 });

  const clearAnimTimeouts = () => {
    animTimeoutsRef.current.forEach(clearTimeout);
    animTimeoutsRef.current = [];
  };

  useEffect(() => {
    return () => clearAnimTimeouts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger realistic lanyard swing physics animation
  const triggerSwingAnimation = () => {
    clearAnimTimeouts();
    setIsAnimating(true);
    setIsDragging(false);

    const dir = swingDirRef.current;
    swingDirRef.current = -dir; // alternate direction on next trigger

    // Step 1: Swing out dynamically to one side with realistic tilt
    setPos({ x: dir * 75, y: 25 });
    setRotation({
      x: -12,
      y: dir * 18,
      z: dir * 10,
    });

    // Step 2: Swing across past center in opposite direction
    const t1 = setTimeout(() => {
      setPos({ x: -dir * 55, y: 18 });
      setRotation({
        x: 8,
        y: -dir * 14,
        z: -dir * 7,
      });
    }, 450);

    // Step 3: Gentle counter-swing
    const t2 = setTimeout(() => {
      setPos({ x: dir * 20, y: 8 });
      setRotation({
        x: -4,
        y: dir * 5,
        z: dir * 3,
      });
    }, 900);

    // Step 4: Settle smoothly back to center
    const t3 = setTimeout(() => {
      setPos({ x: 0, y: 0 });
      setRotation({ x: 0, y: 0, z: 0 });
      setIsAnimating(false);
    }, 1400);

    animTimeoutsRef.current = [t1, t2, t3];
  };

  const handleMobileClick = (e) => {
    if (!isMobile) return;
    if (e) {
      e.stopPropagation();
    }
    triggerSwingAnimation();
  };

  // Mobile Touch Gestures:
  // - Swiping vertically scrolls the webpage naturally without ANY interruption.
  // - A quick deliberate tap on the card (finger moved < 12px, duration < 300ms) triggers the swing animation.
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    const touch = e.touches[0];
    touchStartPos.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  };

  const handleTouchEnd = (e) => {
    if (!isMobile) return;
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const touch = e.changedTouches[0];
    const dx = Math.abs(touch.clientX - touchStartPos.current.x);
    const dy = Math.abs(touch.clientY - touchStartPos.current.y);
    const dt = Date.now() - touchStartPos.current.time;

    // If moved less than 12px and under 300ms, it's a tap, NOT a scroll!
    if (dx < 12 && dy < 12 && dt < 300) {
      triggerSwingAnimation();
    }
  };

  const handleReset = (e) => {
    e.stopPropagation();
    clearAnimTimeouts();
    setIsAnimating(false);
    setIsDragging(false);
    setPos({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0, z: 0 });
  };

  // Lanyard coordinates - on mobile, anchor starts cleanly below Contact Me button
  const anchorY = isMobile ? 8 : -60;
  const clipAttachX = pos.x;
  const clipAttachY = pos.y + (isMobile ? 75 : 40);

  return (
    <div
      className={`relative w-full flex flex-col items-center select-none ${isMobile ? 'pt-2 pb-5' : 'pt-2 pb-8'}`}
      style={{ perspective: '1200px' }}
    >
      {/* Dynamic Lanyard SVG connecting top frame to the badge clip */}
      <svg
        className={`absolute ${isMobile ? 'top-0' : '-top-12'} pointer-events-none z-10 overflow-visible`}
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          width: '420px',
          height: '280px',
        }}
      >
        <defs>
          {/* Lanyard fabric texture gradient */}
          <linearGradient id="lanyardStrapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d1822" />
            <stop offset="35%" stopColor="#132733" />
            <stop offset="50%" stopColor="#1a3b47" />
            <stop offset="65%" stopColor="#132733" />
            <stop offset="100%" stopColor="#081017" />
          </linearGradient>

          {/* Center stitch highlight (Teal to Cyan) */}
          <linearGradient id="stitchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
          </linearGradient>

          <filter id="dropShadowStrap" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Dynamic Curved Ribbon */}
        {(() => {
          const startX = 210; // center of 420px SVG
          const startY = anchorY;
          const endX = 210 + clipAttachX;
          const endY = clipAttachY;

          // Natural catenary / bezier curve control points
          const ctrlX = 210 + clipAttachX * 0.4;
          const ctrlY = (startY + endY) / 2 + Math.max(10 - Math.abs(clipAttachX) * 0.05, 0);

          return (
            <g
              filter="url(#dropShadowStrap)"
              style={{
                transition: isDragging ? 'none' : 'all 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {/* Main fabric strap width 38px */}
              <path
                d={`M ${startX - 18} ${startY} Q ${ctrlX - 18} ${ctrlY} ${endX - 18} ${endY} L ${endX + 18} ${endY} Q ${ctrlX + 18} ${ctrlY} ${startX + 18} ${startY} Z`}
                fill="url(#lanyardStrapGrad)"
                stroke="#0f172a"
                strokeWidth="1.5"
              />

              {/* Edge stitching left */}
              <path
                d={`M ${startX - 14} ${startY} Q ${ctrlX - 14} ${ctrlY} ${endX - 14} ${endY}`}
                fill="none"
                stroke="#475569"
                strokeWidth="1"
                strokeDasharray="4 3"
                opacity="0.8"
              />

              {/* Edge stitching right */}
              <path
                d={`M ${startX + 14} ${startY} Q ${ctrlX + 14} ${ctrlY} ${endX + 14} ${endY}`}
                fill="none"
                stroke="#475569"
                strokeWidth="1"
                strokeDasharray="4 3"
                opacity="0.8"
              />

              {/* Center subtle glow runner */}
              <path
                d={`M ${startX} ${startY} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`}
                fill="none"
                stroke="url(#stitchGrad)"
                strokeWidth="2"
                opacity={isDragging ? 0.9 : 0.4}
              />
            </g>
          );
        })()}

        {/* Mobile Horizontal Rail & Mount Bracket from which the ID Card hangs */}
        <g className="sm:hidden pointer-events-none">
          {/* Horizontal Rail Line extending across */}
          <line
            x1="-100"
            y1={anchorY}
            x2="520"
            y2={anchorY}
            stroke="url(#stitchGrad)"
            strokeWidth="1.5"
            opacity="0.8"
          />
          {/* Subtle neon glow beam line */}
          <line
            x1="60"
            y1={anchorY}
            x2="360"
            y2={anchorY}
            stroke="#06b6d4"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Central Mounting Bracket */}
          <rect
            x={210 - 24}
            y={anchorY - 5}
            width="48"
            height="10"
            rx="3"
            fill="#0b0f17"
            stroke="#06b6d4"
            strokeWidth="1.5"
          />
          {/* Bracket Inner Glow Pill */}
          <rect
            x={210 - 10}
            y={anchorY - 2}
            width="20"
            height="4"
            rx="2"
            fill="#38bdf8"
            opacity="0.9"
          />
          {/* End cap dots */}
          <circle cx={210 - 80} cy={anchorY} r="2" fill="#06b6d4" opacity="0.7" />
          <circle cx={210 + 80} cy={anchorY} r="2" fill="#06b6d4" opacity="0.7" />
        </g>
      </svg>

      {/* Draggable Card Wrapper with 3D Transform */}
      <div
        ref={cardRef}
        onPointerDown={handlePointerDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseMove={handleCardMouseMove}
        onMouseLeave={() => {
          if (!isDragging) {
            setRotation({ x: 0, y: 0, z: 0 });
          }
        }}
        className={`relative z-20 transition-shadow duration-300 ${
          isMobile
            ? 'mt-10 touch-pan-y cursor-pointer'
            : 'cursor-grab active:cursor-grabbing touch-none'
        } ${isDragging ? 'scale-[1.03]' : 'hover:scale-[1.01]'}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)',
          touchAction: isMobile ? 'pan-y' : 'none',
        }}
      >
        {/* Top Metallic Buckle & Clasp */}
        <div className="relative mx-auto w-16 h-12 flex flex-col items-center justify-end -mb-4 z-30 pointer-events-none">
          {/* Black metallic buckle body */}
          <div className="w-14 h-9 bg-gradient-to-b from-[#2d3748] via-[#1a202c] to-[#0f172a] rounded-lg border border-slate-600/80 shadow-lg flex items-center justify-center relative">
            <div className="w-10 h-5 bg-[#0b0f17] rounded border border-slate-700/80 flex items-center justify-center">
              {/* Metallic center rivet */}
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-slate-400 to-slate-200 shadow-inner"></div>
            </div>
            {/* Clasp side notches */}
            <div className="absolute -left-1 top-2.5 w-1 h-4 bg-slate-500 rounded-l"></div>
            <div className="absolute -right-1 top-2.5 w-1 h-4 bg-slate-500 rounded-r"></div>
          </div>

          {/* Heavy metal clip loop entering the card punch hole */}
          <div className="w-6 h-5 bg-gradient-to-b from-slate-400 via-slate-600 to-slate-900 rounded-t-sm border border-slate-400/80 shadow-md flex justify-center -mt-1">
            <div className="w-3 h-3 bg-slate-950 rounded-full mt-1 border border-slate-700"></div>
          </div>
        </div>

        {/* The ID Card Container */}
        <div
          className="relative w-[280px] xs:w-[320px] sm:w-[350px] max-w-[calc(100vw-2rem)] rounded-[32px] overflow-hidden bg-[#0A0E17] border border-cyan-500/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(6,182,212,0.25),0_0_20px_rgba(20,184,166,0.2)] flex flex-col items-center text-center pt-5 pb-6 px-4 sm:px-6"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 15%, rgba(20, 184, 166, 0.2) 0%, transparent 60%),
              radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.18) 0%, transparent 50%),
              linear-gradient(175deg, #0d1522 0%, #070b12 100%)
            `,
          }}
        >
          {/* Card Top Punch-Hole Slot */}
          <div className="w-16 h-3 bg-black/90 rounded-full border border-slate-600/60 shadow-inner mb-4 flex items-center justify-center">
            <div className="w-12 h-1.5 bg-slate-950 rounded-full"></div>
          </div>

          {/* Geometric Facet Accent 1: Top-Left Teal/Cyan Angular Shard */}
          <div
            className="absolute top-0 left-0 w-36 h-36 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 45%, #042f2e 100%)',
              opacity: 0.9,
            }}
          >
            {/* Subtle gloss highlight on facet */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-300/40 via-cyan-400/25 to-transparent"></div>
          </div>

          {/* Geometric Facet Accent 2: Right Middle to Bottom Angular Wing */}
          <div
            className="absolute right-0 top-36 w-32 h-64 pointer-events-none"
            style={{
              clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
              background: 'linear-gradient(225deg, rgba(6, 182, 212, 0.65) 0%, rgba(13, 148, 136, 0.4) 50%, transparent 100%)',
              filter: 'blur(2px)',
            }}
          />

          {/* Bottom Right Cyan/Teal Facet */}
          <div
            className="absolute bottom-0 right-0 w-36 h-36 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
              background: 'linear-gradient(315deg, #0891b2 0%, #0f766e 50%, #042f2e 100%)',
              opacity: 0.85,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-teal-400/30 to-transparent"></div>
          </div>

          {/* Bottom Curved Wave Accent */}
          <div
            className="absolute -bottom-6 left-0 right-0 h-24 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(13, 148, 136, 0.3) 40%, rgba(6, 182, 212, 0.45) 100%)',
              borderRadius: '50% 50% 0 0 / 25px 25px 0 0',
            }}
          />

          {/* Glossy Diagonal Reflection Sheen */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(${120 + rotation.y * 0.8}deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 60%)`,
            }}
          />

          {/* Central Circular Avatar with Illuminated Teal/Cyan Glow Ring */}
          <div className="relative mt-2 mb-4 z-10">
            {/* Outer Glow Halo */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-teal-400 via-cyan-400 to-sky-400 opacity-80 blur-md animate-pulse-glow"></div>

            {/* Glowing Border Ring */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-tr from-teal-400 via-cyan-400 to-sky-400 shadow-[0_0_25px_rgba(6,182,212,0.6)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-950">
                <img
                  src={userPhoto}
                  alt="Dhakshan S"
                  className="w-full h-full object-cover object-center scale-105 pointer-events-none"
                  loading="eager"
                  draggable={false}
                />
              </div>
            </div>

            {/* QA Verified Mini Badge */}
            <div className="absolute bottom-0 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#0A0E17] flex items-center justify-center text-slate-950 shadow-md">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-1 z-10">
            <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight flex items-center justify-center gap-1.5">
              <span>Dhakshan</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 font-black drop-shadow-[0_0_15px_rgba(6,182,212,0.7)]">S</span>
            </h3>
            <p className="text-xs sm:text-[13px] font-medium text-slate-300 tracking-normal">
              Software Tester &amp; QA Analyst
            </p>
          </div>

          {/* Cyan to Teal Glowing Pill Divider */}
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 my-4 shadow-[0_0_12px_rgba(6,182,212,0.7)] z-10"></div>

          {/* 2-Column QA Details (Experience & Location) */}
          <div className="w-full grid grid-cols-2 gap-3 py-2 px-1 z-10">
            {/* Experience Column */}
            <div className="flex items-center gap-2.5 justify-center text-left">
              <div className="w-8 h-8 rounded-lg bg-teal-950/80 border border-teal-500/50 flex items-center justify-center text-teal-300 shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.25)]">
                <Briefcase className="w-4 h-4 text-teal-300" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold leading-tight">
                  EXPERIENCE
                </div>
                <div className="text-sm font-bold text-white leading-tight">
                  1+ Years
                </div>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-8 w-px bg-slate-700/60 top-[66%] pointer-events-none"></div>

            {/* Location Column */}
            <div className="flex items-center gap-2.5 justify-center text-left">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-300 shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.25)]">
                <MapPin className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold leading-tight">
                  LOCATION
                </div>
                <div className="text-sm font-bold text-white leading-tight">
                  Chennai
                </div>
              </div>
            </div>
          </div>

          {/* Realistic High-Tech Barcode */}
          <div className="mt-5 mb-1 z-10 flex flex-col items-center">
            <div className="flex items-center gap-[2.5px] px-4 py-1.5 rounded-lg bg-black/40 border border-slate-800/80 backdrop-blur-sm">
              {/* Barcode line pattern accurately mimicking image 1 */}
              {[3, 1, 2, 4, 1, 1, 3, 2, 1, 4, 2, 1, 1, 3, 4, 1, 2, 3, 1, 4, 1, 2, 1, 3, 2, 4, 1, 2, 1, 3, 4, 1].map((width, i) => (
                <div
                  key={i}
                  className="bg-slate-300/80 h-6 rounded-[0.5px]"
                  style={{
                    width: `${width * 1.3}px`,
                    opacity: i % 5 === 0 ? 0.95 : 0.75,
                  }}
                />
              ))}
            </div>
            <span className="text-[9px] font-mono text-slate-400 tracking-[0.25em] mt-1 font-semibold">
              QA-DHAKSHAN-2026-CH
            </span>
          </div>

          {/* Border Glow & Outer Stroke */}
          <div className="absolute inset-0 rounded-[32px] border border-cyan-400/20 pointer-events-none"></div>
        </div>

        {/* Floating Controls / Interactive Tooltip */}
        <div className="mt-2.5 sm:mt-4 flex items-center justify-center gap-3">
          {/* Interactive Drag Pill Badge (Becomes interactive button on Mobile) */}
          <button
            type="button"
            onClick={isMobile ? handleMobileClick : undefined}
            onPointerDown={(e) => {
              if (isMobile) e.stopPropagation();
            }}
            onTouchStart={(e) => {
              if (isMobile) e.stopPropagation();
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 transition-all duration-300 shadow-md ${
              isMobile
                ? 'cursor-pointer active:scale-95 touch-manipulation'
                : 'cursor-grab'
            } ${
              isDragging || isAnimating
                ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/40 scale-105'
                : isMobile
                ? 'bg-slate-900/90 text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                : 'bg-slate-900/90 text-cyan-300 border border-slate-700/80 hover:border-cyan-500/50'
            }`}
          >
            <Move className={`w-3.5 h-3.5 ${isDragging || isAnimating ? 'animate-spin' : ''}`} />
            <span>
              {isDragging
                ? 'Dragging ID Badge...'
                : isAnimating
                ? 'Moving ID Card...'
                : isMobile
                ? 'Tap to Move ID Card'
                : 'Click & Drag ID Card'}
            </span>
          </button>

          {/* Reset position button if moved */}
          {(Math.abs(pos.x) > 5 || Math.abs(pos.y) > 5) && (
            <button
              onClick={handleReset}
              className="p-1.5 rounded-full bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700 transition-all hover:scale-110 cursor-pointer"
              title="Reset Position"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
