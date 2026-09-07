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

  // Pointer Down on Card - Initiate Drag
  const handlePointerDown = (e) => {
    // Only primary mouse button or touch
    if (e.button !== 0) return;

    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  // Subtle 3D tilt on hover when not dragging
  const handleCardMouseMove = (e) => {
    if (isDragging || !cardRef.current) return;
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

  const handleReset = (e) => {
    e.stopPropagation();
    setIsDragging(false);
    setPos({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0, z: 0 });
  };

  // Lanyard coordinates
  const anchorY = -60;
  const clipAttachX = pos.x;
  const clipAttachY = pos.y + 40;

  return (
    <div
      className="relative w-full flex flex-col items-center select-none pt-2 pb-8"
      style={{ perspective: '1200px' }}
    >
      {/* Dynamic Lanyard SVG connecting top frame to the badge clip */}
      <svg
        className="absolute -top-12 pointer-events-none z-10 overflow-visible"
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
            <stop offset="0%" stopColor="#1e2433" />
            <stop offset="35%" stopColor="#2b354b" />
            <stop offset="50%" stopColor="#3d4966" />
            <stop offset="65%" stopColor="#2b354b" />
            <stop offset="100%" stopColor="#151b27" />
          </linearGradient>

          {/* Center stitch highlight */}
          <linearGradient id="stitchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8" />
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
      </svg>

      {/* Draggable Card Wrapper with 3D Transform */}
      <div
        ref={cardRef}
        onPointerDown={handlePointerDown}
        onMouseMove={handleCardMouseMove}
        onMouseLeave={() => {
          if (!isDragging) {
            setRotation({ x: 0, y: 0, z: 0 });
          }
        }}
        className={`relative z-20 cursor-grab active:cursor-grabbing transition-shadow duration-300 touch-none ${
          isDragging ? 'scale-[1.03]' : 'hover:scale-[1.01]'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)',
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
          className="relative w-[320px] sm:w-[350px] rounded-[32px] overflow-hidden bg-[#0A0E17] border border-slate-600/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(37,99,235,0.25)] flex flex-col items-center text-center pt-5 pb-6 px-6"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 15%, rgba(37, 99, 235, 0.18) 0%, transparent 60%),
              radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
              linear-gradient(175deg, #0f1624 0%, #090d15 100%)
            `,
          }}
        >
          {/* Card Top Punch-Hole Slot */}
          <div className="w-16 h-3 bg-black/90 rounded-full border border-slate-600/60 shadow-inner mb-4 flex items-center justify-center">
            <div className="w-12 h-1.5 bg-slate-950 rounded-full"></div>
          </div>

          {/* Geometric Facet Accent 1: Top-Left Electric Blue Angular Shard */}
          <div
            className="absolute top-0 left-0 w-36 h-36 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 40%, #1e1b4b 100%)',
              opacity: 0.9,
            }}
          >
            {/* Subtle gloss highlight on facet */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/40 via-transparent to-transparent"></div>
          </div>

          {/* Geometric Facet Accent 2: Right Middle to Bottom Angular Wing */}
          <div
            className="absolute right-0 top-36 w-32 h-64 pointer-events-none"
            style={{
              clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
              background: 'linear-gradient(225deg, rgba(37, 99, 235, 0.7) 0%, rgba(30, 58, 138, 0.4) 50%, transparent 100%)',
              filter: 'blur(2px)',
            }}
          />

          {/* Bottom Right Electric Blue Facet */}
          <div
            className="absolute bottom-0 right-0 w-36 h-36 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
              background: 'linear-gradient(315deg, #2563eb 0%, #1e40af 50%, #0f172a 100%)',
              opacity: 0.85,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/30 to-transparent"></div>
          </div>

          {/* Bottom Curved Wave Accent */}
          <div
            className="absolute -bottom-6 left-0 right-0 h-24 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(30, 58, 138, 0.3) 40%, rgba(37, 99, 235, 0.45) 100%)',
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

          {/* Central Circular Avatar with Illuminated Cyan/Blue Glow Ring */}
          <div className="relative mt-2 mb-4 z-10">
            {/* Outer Glow Halo */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 opacity-75 blur-md animate-pulse-glow"></div>

            {/* Glowing Border Ring */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
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
              <span className="text-blue-500 font-black drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">S</span>
            </h3>
            <p className="text-xs sm:text-[13px] font-medium text-slate-300 tracking-normal">
              Software Tester & QA Engineer
            </p>
          </div>

          {/* Cyan to Purple Glowing Pill Divider */}
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 my-4 shadow-[0_0_10px_rgba(6,182,212,0.6)] z-10"></div>

          {/* 2-Column QA Details (Experience & Location) */}
          <div className="w-full grid grid-cols-2 gap-3 py-2 px-1 z-10">
            {/* Experience Column */}
            <div className="flex items-center gap-2.5 justify-center text-left">
              <div className="w-8 h-8 rounded-lg bg-blue-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
                <Briefcase className="w-4 h-4 text-cyan-400" />
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
              <div className="w-8 h-8 rounded-lg bg-blue-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
                <MapPin className="w-4 h-4 text-cyan-400" />
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
        <div className="mt-4 flex items-center justify-center gap-3">
          {/* Interactive Drag Pill Badge */}
          <div
            className={`px-3 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 transition-all duration-300 shadow-md ${
              isDragging
                ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/40 scale-105'
                : 'bg-slate-900/90 text-cyan-300 border border-slate-700/80 hover:border-cyan-500/50'
            }`}
          >
            <Move className={`w-3.5 h-3.5 ${isDragging ? 'animate-spin' : ''}`} />
            <span>{isDragging ? 'Dragging ID Badge...' : 'Click & Drag ID Card'}</span>
          </div>

          {/* Reset position button if moved */}
          {(Math.abs(pos.x) > 5 || Math.abs(pos.y) > 5) && (
            <button
              onClick={handleReset}
              className="p-1.5 rounded-full bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700 transition-all hover:scale-110"
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
