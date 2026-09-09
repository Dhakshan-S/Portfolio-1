import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Globe,
  Terminal,
  Bug,
  Database,
  Briefcase,
  RotateCw,
  Cpu,
  Crown,
} from 'lucide-react';

// Authentic Vector Icons for Tools & Technologies
function ToolIcon({ type, className = "w-3.5 h-3.5" }) {
  switch (type) {
    case 'jira':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11.53 2c0 5.26 4.26 9.53 9.53H22V2h-10.47z" fill="#0052CC" />
          <path d="M2 11.53c5.26 0 9.53 4.26 9.53 9.53V22H2v-10.47z" fill="#2684FF" />
        </svg>
      );
    case 'excel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#107C41" />
          <path d="M7 6.5h3.2l2.3 4.2 2.3-4.2H18l-3.8 6 3.9 6.5h-3.2l-2.4-4.5-2.4 4.5H7l4-6.5L7 6.5z" fill="white" />
        </svg>
      );
    case 'postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <path d="M7.5 12a4.5 4.5 0 017.5-3.35l1.65-1.65A6.8 6.8 0 0012 5.2a6.8 6.8 0 00-6.8 6.8c0 2.2.9 4.2 2.3 5.6l1.6-1.6A4.5 4.5 0 017.5 12z" fill="white" />
          <circle cx="14.5" cy="12.5" r="2.5" fill="white" />
        </svg>
      );
    case 'swagger':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#85EA2D" />
          <path d="M9 8c-1.5 0-2 1-2 2.5v1c0 1-.5 1.5-1.5 1.5 1 0 1.5.5 1.5 1.5v1c0 1.5.5 2.5 2 2.5m6-10c1.5 0 2 1 2 2.5v1c0 1 .5 1.5 1.5 1.5-1 0-1.5.5-1.5 1.5v1c0 1.5-.5 2.5-2 2.5" stroke="#173647" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'playwright':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M7 5c-2.5 0-4.5 2-4.5 4.5v4c0 3.5 2.8 6.5 6.5 6.5h1a5 5 0 005-5V9.5C15 7 13 5 10.5 5H7z" fill="#2EAD33" />
          <path d="M17 5c2.5 0 4.5 2 4.5 4.5v4c0 3.5-2.8 6.5-6.5 6.5h-1a5 5 0 01-5-5V9.5C9 7 11 5 13.5 5H17z" fill="#E23237" fillOpacity="0.9" />
          <circle cx="7" cy="11" r="1.5" fill="white" />
          <circle cx="17" cy="11" r="1.5" fill="white" />
        </svg>
      );
    case 'selenium':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#00B400" />
          <text x="12" y="16.5" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="system-ui, sans-serif">Se</text>
        </svg>
      );
    case 'testng':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#1E2229" stroke="#EF233C" strokeWidth="1.5" />
          <path d="M6.5 7.5h11v3.2h-3.8v7h-3.4v-7H6.5V7.5z" fill="#EF233C" />
        </svg>
      );
    case 'xpath':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#6366F1" />
          <path d="M7.5 15l-3-3 3-3M16.5 9l3 3-3 3M13.5 6.5l-3 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'oracle':
    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#EA1B22" />
          <path d="M7 12a5 5 0 0110 0 5 5 0 01-10 0z" stroke="white" strokeWidth="2.5" />
        </svg>
      );
    case 'postgresql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#336791" />
          <path d="M8 8c3-2 6-1 8 1 2 2 2 5-1 7-1 1-3 1-5 0l-2-2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="11" cy="9.5" r="1.2" fill="#F39C12" />
        </svg>
      );
    case 'java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#EA2D2E" />
          <path d="M8 15.5s1 1.5 4 1.5 4-1.5 4-1.5M9 13s1 1 3 1 3-1 3-1M11 6c0 1.5-1.5 2.5-1.5 4M13.5 5.5c0 1.5-1.5 2.5-1.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

// Exactly 8 QA Skill Slides ordered as requested:
// Left: [1. Automation Testing, 2. AI Tools, 3. SQL Database]
// Center (4th Slide): [4. Manual Testing] (Default active on load)
// Right: [5. API Testing, 6. Business Analysis, 7. Agile, 8. Defect Management]
const skillCards = [
    {
    id: 'sql-database',
    title: 'SQL Database',
    level: 'Intermediate',
    levelBadge: 'bg-[#F59E0B] text-slate-950 font-bold',
    icon: Database,
    theme: {
      circleBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
      activeBorder: 'border-amber-500/80',
      activeGlow: 'shadow-[0_0_35px_-5px_rgba(245,158,11,0.4)]',
      cardBg: 'from-amber-950/25 to-slate-900/95',
    },
    subtitles:
      'Joins, Sub Query, Normalization, DDL/DML, TCL, DCL, DQL.',
    tools: [
      { name: 'Oracle SQL', icon: 'oracle' },
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    level: 'Advanced',
    levelBadge: 'bg-[#14B8A6] text-slate-950 font-bold',
    icon: Cpu,
    theme: {
      circleBg: 'bg-gradient-to-br from-teal-400 to-cyan-600',
      activeBorder: 'border-teal-500/80',
      activeGlow: 'shadow-[0_0_35px_-5px_rgba(20,184,166,0.4)]',
      cardBg: 'from-teal-950/25 to-slate-900/95',
    },
    subtitles:
      'AI-assisted Test Case Generation, Prompt-based Test Automation, Test Scenario Generation.',
    tools: [
      { name: 'AI Prompts', icon: 'cpu' },
    ],
  },
  {
    id: 'automation-testing',
    title: 'Automation Testing',
    level: 'Intermediate',
    levelBadge: 'bg-[#8B5CF6] text-white',
    icon: Terminal,
    theme: {
      circleBg: 'bg-gradient-to-br from-purple-500 via-indigo-500 to-violet-600',
      activeBorder: 'border-purple-500/80',
      activeGlow: 'shadow-[0_0_35px_-5px_rgba(168,85,247,0.4)]',
      cardBg: 'from-purple-950/25 to-slate-900/95',
    },
    subtitles:
      'Playwright (AI-assisted), Selenium WebDriver, TestNG, XPath, Page Object Model, Core Java (Fundamentals).',
    tools: [
      { name: 'Playwright', icon: 'playwright' },
      { name: 'Selenium', icon: 'selenium' },
      { name: 'TestNG', icon: 'testng' },
      { name: 'XPath', icon: 'xpath' },
      { name: 'Java', icon: 'java' },
    ],
  },
  {
    id: 'manual-testing',
    title: 'Manual Testing',
    level: 'Advanced',
    levelBadge: 'bg-[#10B981] text-white',
    icon: ShieldCheck,
    theme: {
      circleBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
      activeBorder: 'border-emerald-500/80',
      activeGlow: 'shadow-[0_0_35px_-5px_rgba(16,185,129,0.4)]',
      cardBg: 'from-emerald-950/25 to-slate-900/95',
    },
    subtitles:
      'SDLC, STLC, Functional, Integration, System, Regression, Smoke, Adhoc, Bug Life Cycle, Test Cases, Test Scenarios, Severity, Priority.',
    tools: [
      { name: 'JIRA', icon: 'jira' },
      { name: 'Excel', icon: 'excel' },
    ],
  },
  {
    id: 'api-testing',
    title: 'API Testing',
    level: 'Intermediate',
    levelBadge: 'bg-[#38BDF8] text-slate-950 font-bold',
    icon: Globe,
    theme: {
      circleBg: 'bg-gradient-to-br from-sky-400 to-blue-600',
      activeBorder: 'border-sky-500/80',
      activeGlow: 'shadow-[0_0_35px_-5px_rgba(14,165,233,0.4)]',
      cardBg: 'from-sky-950/25 to-slate-900/95',
    },
    subtitles:
      'Postman, API Validation, Request & Response Testing, Status Code Validation.',
    tools: [
      { name: 'Postman', icon: 'postman' },
      { name: 'Swagger', icon: 'swagger' },
    ],
  },
  {
    id: 'business-analysis',
    title: 'Business Analysis',
    level: 'Advanced',
    levelBadge: 'bg-[#3B82F6] text-white',
    icon: Briefcase,
    theme: {
      circleBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      activeBorder: 'border-blue-500/80',
      activeGlow: 'shadow-[0_0_35px_-5px_rgba(59,130,246,0.4)]',
      cardBg: 'from-blue-950/25 to-slate-900/95',
    },
    subtitles:
      'Requirement Gathering, Requirement Analysis, Client Communication, User Story Understanding.',
    tools: [
      { name: 'JIRA', icon: 'jira' },
    ],
  },
  {
    id: 'agile',
    title: 'Agile',
    level: 'Intermediate',
    levelBadge: 'bg-[#C084FC] text-slate-950 font-bold',
    icon: RotateCw,
    theme: {
      circleBg: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      activeBorder: 'border-fuchsia-500/80',
      activeGlow: 'shadow-[0_0_35px_-5px_rgba(217,70,239,0.4)]',
      cardBg: 'from-fuchsia-950/25 to-slate-900/95',
    },
    subtitles:
      'Sprint Planning, Daily Scrum, Sprint Review, Retrospective.',
    tools: [
      { name: 'JIRA', icon: 'jira' },
    ],
  },
  {
    id: 'defect-management',
    title: 'Defect Management',
    level: 'Advanced',
    levelBadge: 'bg-[#F43F5E] text-white',
    icon: Bug,
    theme: {
      circleBg: 'bg-gradient-to-br from-rose-500 to-red-600',
      activeBorder: 'border-rose-500/80',
      activeGlow: 'shadow-[0_0_35px_-5px_rgba(244,63,94,0.4)]',
      cardBg: 'from-rose-950/25 to-slate-900/95',
    },
    subtitles:
      'Bug Reporting, Bug Tracking using Excel, Defect Analysis, Retesting.',
    tools: [
      { name: 'JIRA', icon: 'jira' },
      { name: 'Excel', icon: 'excel' },
    ],
  },
];

// All Tools for the bottom horizontal dock
const allDockTools = [
  { name: 'JIRA', icon: 'jira' },
  { name: 'Excel', icon: 'excel' },
  { name: 'Postman', icon: 'postman' },
  { name: 'Swagger', icon: 'swagger' },
  { name: 'Playwright', icon: 'playwright' },
  { name: 'Selenium', icon: 'selenium' },
  { name: 'TestNG', icon: 'testng' },
  { name: 'XPath', icon: 'xpath' },
  { name: 'Oracle SQL', icon: 'oracle' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Java', icon: 'java' },
];

export default function Skills() {
  // 4th slide is Manual Testing (index 3). Default active on load so it sits dead-center!
  const [activeIndex, setActiveIndex] = useState(3);
  const [cardWidth, setCardWidth] = useState(290);
  const cardGap = 16;

  // Dragging & gesture states for mouse and touch
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const startTimeRef = useRef(0);
  const isDraggingRef = useRef(false);
  const hasMovedRef = useRef(false);
  const isHorizontalScrollRef = useRef(null);
  const dragOffsetRef = useRef(0);
  const lastWheelTime = useRef(0);

  // Responsive card width calculation with uniform dimensions across all slides
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 360) {
        setCardWidth(Math.max(240, w - 36));
      } else if (w < 640) {
        setCardWidth(Math.min(w - 48, 275));
      } else if (w < 1024) {
        setCardWidth(285);
      } else {
        setCardWidth(295);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite looping prev / next handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : skillCards.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % skillCards.length);
  };

  // Unified Drag Start (Mouse & Touch)
  const handleDragStart = (clientX, clientY) => {
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    isHorizontalScrollRef.current = null;
    startXRef.current = clientX;
    startYRef.current = clientY;
    startTimeRef.current = Date.now();
    dragOffsetRef.current = 0;
    setIsDragging(true);
    setDragOffset(0);
  };

  // Unified Drag Move
  const handleDragMove = (clientX, clientY, e) => {
    if (!isDraggingRef.current) return;

    const diffX = clientX - startXRef.current;
    const diffY = clientY - startYRef.current;

    // Detect gesture axis on mobile touch
    if (isHorizontalScrollRef.current === null) {
      if (Math.abs(diffX) > 6 || Math.abs(diffY) > 6) {
        isHorizontalScrollRef.current = Math.abs(diffX) >= Math.abs(diffY);
      }
    }

    // If clearly vertical scrolling on touch, allow native page scroll
    if (isHorizontalScrollRef.current === false) {
      return;
    }

    if (Math.abs(diffX) > 6) {
      hasMovedRef.current = true;
    }

    // Prevent default touch scrolling when dragging horizontally
    if (e && e.cancelable && isHorizontalScrollRef.current) {
      e.preventDefault();
    }

    dragOffsetRef.current = diffX;
    setDragOffset(diffX);
  };

  // Unified Drag End
  const handleDragEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    const finalOffset = dragOffsetRef.current;
    const elapsedTime = Date.now() - startTimeRef.current;
    const velocity = Math.abs(finalOffset) / (elapsedTime || 1);

    // Trigger slide change if moved > 40px OR rapid flick gesture
    const isSwipe = Math.abs(finalOffset) > 40 || (velocity > 0.35 && Math.abs(finalOffset) > 15);

    if (isSwipe) {
      if (finalOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }

    dragOffsetRef.current = 0;
    setDragOffset(0);
    isHorizontalScrollRef.current = null;
    setTimeout(() => {
      hasMovedRef.current = false;
    }, 50);
  };

  // Window listeners for mouse drag so moving cursor outside bounds still tracks smoothly
  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      handleDragMove(e.clientX, e.clientY, e);
    };

    const onMouseUp = () => {
      if (isDraggingRef.current) {
        handleDragEnd();
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Mouse handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only primary mouse button
    handleDragStart(e.clientX, e.clientY);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    handleDragMove(e.touches[0].clientX, e.touches[0].clientY, e);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Wheel / Trackpad horizontal scroll support
  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 350) return;
    if (Math.abs(e.deltaX) > 25 || (e.shiftKey && Math.abs(e.deltaY) > 25)) {
      if (e.deltaX > 25 || e.deltaY > 25) {
        handleNext();
        lastWheelTime.current = now;
      } else if (e.deltaX < -25 || e.deltaY < -25) {
        handlePrev();
        lastWheelTime.current = now;
      }
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="relative text-center max-w-3xl mx-auto mb-10">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="h-px w-8 bg-slate-700" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">
              MY TECHNICAL SKILLS
            </span>
            <span className="h-px w-8 bg-slate-700" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-2">
            QA Engineer{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Skill Set
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-400 text-xs sm:text-sm font-medium tracking-wide">
            Quality &nbsp;•&nbsp; Automation &nbsp;•&nbsp; Better Software
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 8-CARD SLIDER: UNIFORM HEIGHT & WIDTH, MANUAL TESTING IN CENTER           */}
        {/* ========================================================================= */}
        <div className="relative w-full py-2 mb-6">
          
          {/* Left Arrow Button (Infinite loop) */}
          <button
            onClick={handlePrev}
            aria-label="Previous skill"
            className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-slate-800 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Arrow Button (Infinite loop) */}
          <button
            onClick={handleNext}
            aria-label="Next skill"
            className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-slate-800 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slider Viewport */}
          <div 
            className={`w-full overflow-hidden py-4 px-2 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ touchAction: 'pan-y' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            onWheel={handleWheel}
            onDragStart={(e) => e.preventDefault()}
          >
            {/* Sliding Track: Centers active card (Manual Testing centered by default at index 3) */}
            <div
              className={`flex items-center ${
                isDragging ? 'transition-none' : 'transition-transform duration-500 ease-out'
              }`}
              style={{
                gap: `${cardGap}px`,
                transform: `translateX(calc(50% - ${cardWidth / 2}px - ${activeIndex * (cardWidth + cardGap)}px + ${dragOffset}px))`,
              }}
            >
              {skillCards.map((card, idx) => {
                const isActive = idx === activeIndex;
                const IconComponent = card.icon;

                return (
                  <div
                    key={card.id}
                    onClick={() => {
                      if (hasMovedRef.current) return;
                      setActiveIndex(idx);
                    }}
                    style={{ width: `${cardWidth}px` }}
                    className={`shrink-0 rounded-3xl p-5 sm:p-5.5 transition-all duration-500 relative select-none flex flex-col justify-between min-h-[365px] sm:min-h-[375px] ${
                      isDragging ? 'cursor-grabbing' : 'cursor-grab'
                    } ${
                      isActive
                        ? `bg-gradient-to-b ${card.theme.cardBg} border-2 ${card.theme.activeBorder} ${card.theme.activeGlow} scale-100 sm:scale-[1.03] z-20 opacity-100`
                        : 'bg-slate-900/70 border border-slate-800/80 backdrop-blur-md scale-95 opacity-55 hover:opacity-85 z-10'
                    }`}
                  >
                    {/* Top Right "👑 My Strongest Skill" badge (Automation card) */}
                    {card.badge && (
                      <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-400/60 backdrop-blur-md text-purple-200 text-[10px] font-bold flex items-center gap-1 shadow-md shadow-purple-500/20">
                        <Crown className="w-3 h-3 text-amber-300 fill-amber-300" />
                        <span>{card.badge}</span>
                      </div>
                    )}

                    {/* TOP SECTION: 1. Centered Icon -> 2. Title -> 3. Level Badge */}
                    <div className="flex flex-col items-center text-center">
                      
                      {/* 1. Circular Icon Medallion */}
                      <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full ${card.theme.circleBg} p-0.5 shadow-lg flex items-center justify-center mb-2.5`}>
                        <div className="w-full h-full rounded-full flex items-center justify-center bg-black/15">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* 2. Title */}
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight mb-1.5 truncate w-full">
                        {card.title}
                      </h3>

                      {/* 3. Level Badge */}
                      <span className={`inline-block px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide shadow-sm mb-2.5 ${card.levelBadge}`}>
                        {card.level}
                      </span>

                      {/* 4. Subtitles (Full text clearly visible across all screen sizes without truncation) */}
                      <p className="text-[11.5px] sm:text-xs text-slate-300 leading-relaxed font-normal text-center min-h-[64px] sm:min-h-[68px] flex items-center justify-center px-1">
                        {card.subtitles}
                      </p>

                    </div>

                    {/* BOTTOM SECTION: 5. Tools Container (Uniform height & structure across all 8 slides) */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 bg-slate-950/40 rounded-2xl p-2.5 sm:p-3 h-[78px] flex flex-col justify-center">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-1.5 text-left">
                        Tools
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {card.tools.map((tool, tIdx) => (
                          <div
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-slate-700/80 text-[11px] font-medium text-slate-200 shadow-sm"
                          >
                            <ToolIcon type={tool.icon} className="w-3.5 h-3.5 shrink-0" />
                            <span>{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* Carousel Pagination Dots (8 dots with smooth indicator) */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {skillCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? 'w-6 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 shadow-sm'
                    : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM DOCK: KEY TOOLS & TECHNOLOGIES                                    */}
        {/* ========================================================================= */}
        <div className="mt-8 mb-4">
          {/* Header Divider */}
          <div className="flex items-center justify-center gap-4 mb-3.5">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-purple-500/50" />
            <span className="text-xs font-semibold text-slate-300 tracking-wider">
              Key Tools &amp; Technologies
            </span>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>

          {/* Floating Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-xl backdrop-blur-xl max-w-4xl mx-auto">
            {allDockTools.map((tool, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-600 transition-all text-xs font-medium text-slate-200 shadow-sm"
              >
                <ToolIcon type={tool.icon} className="w-3.5 h-3.5 shrink-0" />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 mt-4 text-[10.5px] xs:text-[11px] sm:text-xs text-slate-400 font-medium italic select-none whitespace-nowrap px-1">
          <span className="hidden xs:inline-block h-px w-4 sm:w-8 bg-slate-800 shrink-0" />
          <span>
            Better Tests <span className="text-purple-400 font-bold not-italic mx-1">→</span> Better Products <span className="text-purple-400 font-bold not-italic mx-1">→</span> Happier Users 💜
          </span>
          <span className="hidden xs:inline-block h-px w-4 sm:w-8 bg-slate-800 shrink-0" />
        </div>

      </div>
    </section>
  );
}
