import React, { useState } from 'react';
import {
  CheckCircle2,
  FileCheck,
  Layers,
  Globe,
  Activity,
  Smartphone,
  Monitor,
  RefreshCw,
  Users,
  ShieldCheck,
  Terminal,
  Cpu,
  Zap,
  Radio,
  Check,
  Bug,
  Laptop,
  Folder,
  CreditCard,
  Star,
  ArrowRight
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function About() {
  // State for interactive orbit node selection
  const [activeOrbitId, setActiveOrbitId] = useState('functional');

  // Orbit Nodes Configuration (QA Testing Universe)
  const orbitNodes = [
    {
      id: 'functional',
      title: 'Functional Testing',
      short: 'Functional',
      icon: Layers,
      category: 'BUSINESS LOGIC VALIDATION',
      desc: 'Hands-on testing of web applications by validating business rules, user workflows, calculations, validations, boundary conditions, and positive & negative scenarios against functional requirements.',
      telemetry: 'Coverage: 100% Core Flows',
      badge: 'Business Logic',
      tools: [
        'Test Case & Scenario Design',
        'Requirement Analysis',
        'Boundary Value Analysis',
        'Equivalence Partitioning',
        'Positive, Negative & End-to-End Testing'
      ]
    },
    {
      id: 'api',
      title: 'API Testing',
      short: 'API Testing',
      icon: Globe,
      category: 'SERVICE VALIDATION',
      desc: 'Validating REST APIs by inspecting request/response payloads, authentication, headers, status codes, data accuracy, and API-to-UI consistency.',
      telemetry: 'Payload & Status Code Verified',
      badge: 'Service Validation',
      tools: [
        'Postman',
        'REST APIs',
        'JSON',
        'Request/Response Validation',
        'Header Authentication',
        'Status Code Validation',
        'API Collections'
      ]
    },
    {
      id: 'web',
      title: 'Web Application Testing',
      short: 'Web Testing',
      icon: Monitor,
      category: 'UI & COMPATIBILITY',
      desc: 'Testing responsive web applications across different browsers and screen sizes to ensure consistent functionality, usability, layout, and overall user experience.',
      telemetry: 'Multi-Browser Parity',
      badge: 'UI & Compatibility',
      tools: [
        'Chrome',
        'Edge',
        'Firefox',
        'Safari',
        'DevTools',
        'DOM Inspection',
        'Responsive Testing',
        'Console Validation',
        'UI/UX Validation'
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Testing',
      short: 'Mobile Testing',
      icon: Smartphone,
      category: 'DEVICE & RESPONSIVE VALIDATION',
      desc: 'Testing mobile-responsive applications across Android and iOS environments, validating screen responsiveness, touch interactions, orientation changes, navigation, and device-specific behavior.',
      telemetry: 'Responsive & Adaptive',
      badge: 'Device Validation',
      tools: [
        'Android',
        'iOS',
        'Responsive Viewports',
        'Touch Interaction',
        'Orientation Testing',
        'Network Condition Testing',
        'Device Compatibility'
      ]
    },
    {
      id: 'regression',
      title: 'Regression Testing',
      short: 'Regression Testing',
      icon: RefreshCw,
      category: 'RELEASE STABILITY',
      desc: 'Executing regression and retesting cycles after bug fixes, enhancements, and new feature merges to identify unintended side effects and maintain application stability.',
      telemetry: 'Zero Regressions Guarded',
      badge: 'Release Stability',
      tools: [
        'Regression Suites',
        'Smoke Testing',
        'Sanity Testing',
        'Retesting',
        'Impact Analysis',
        'Release Validation',
        'End-to-End Testing'
      ]
    },
    {
      id: 'bug-tracking',
      title: 'Bug Reporting & Tracking',
      short: 'Bug Tracking',
      icon: Bug,
      category: 'ISSUE MANAGEMENT',
      desc: 'Identifying, reproducing, documenting, and tracking defects with clear steps, expected vs actual results, severity, priority, screenshots, and supporting evidence.',
      telemetry: 'Root Cause & Triage',
      badge: 'Issue Management',
      tools: [
        'Bug Life Cycle',
        'Severity & Priority',
        'Root Cause Analysis',
        'Reproduction Steps',
        'Evidence Collection',
        'Defect Tracking'
      ]
    },
    {
      id: 'requirements',
      title: 'Requirement Analysis',
      short: 'Requirement Analysis',
      icon: FileCheck,
      category: 'QUALITY PLANNING',
      desc: 'Reviewing functional requirements and business workflows to identify gaps, ambiguities, missing validations, and potential edge cases before and during development.',
      telemetry: 'Gap & Ambiguity Analysis',
      badge: 'Quality Planning',
      tools: [
        'Requirement Analysis',
        'Acceptance Criteria',
        'Test Scenario Identification',
        'Requirement Traceability',
        'Edge Case Analysis'
      ]
    }
  ];


  // Active Orbit Node Data
  const activeOrbit = orbitNodes.find(n => n.id === activeOrbitId) || orbitNodes[0];

  return (
    <section
      id="about"
      className="py-24 relative bg-[#070B12] text-slate-100 border-y border-slate-800/80 overflow-hidden"
    >
      {/* Ambient Cyber Grid & Glow Backdrop */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-950/20 via-slate-950/60 to-[#070B12] pointer-events-none" />

      {/* Very faint oversized "QA" typography watermark behind main visual */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-cyan-500/[0.035] font-black text-[220px] sm:text-[340px] md:text-[420px] tracking-tighter leading-none z-0"
        aria-hidden="true"
      >
        QA
      </div>

      {/* Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* TOP TELEMETRY STATUS BAR                                                 */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-8 border-b border-slate-800/60 text-xs font-mono">

          {/* Glowing Badge: QA ENGINEER • 1+ YEARS EXPERIENCE */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-950/70 border border-teal-500/40 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.25)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-semibold tracking-wider uppercase">QA ENGINEER • 1+ YEARS EXPERIENCE</span>
          </div>

          {/* Micro Banner: TEST → FIND → FIX → VERIFY → RELEASE */}
          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-400 tracking-wider text-[11px]">
            <span className="text-teal-400 font-semibold">TEST</span>
            <span className="text-slate-600">→</span>
            <span className="text-rose-400 font-semibold">FIND</span>
            <span className="text-slate-600">→</span>
            <span className="text-amber-400 font-semibold">FIX</span>
            <span className="text-slate-600">→</span>
            <span className="text-emerald-400 font-semibold">VERIFY</span>
            <span className="text-slate-600">→</span>
            <span className="text-cyan-300 font-semibold">RELEASE</span>
          </div>

          {/* Professional Status Indicator: AVAILABLE FOR QA OPPORTUNITIES */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="font-semibold tracking-wide uppercase text-[11px]">AVAILABLE FOR QA OPPORTUNITIES</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO AREA: HEADLINE, SUBTITLE, SHORT DESCRIPTION                          */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-16">

          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Quality Analyst &amp; Business Analyst</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Chennai, Tamil Nadu</span>
          </div>

          {/* Large Bold Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            I Turn Complex Software Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
              Confident Releases.
            </span>
          </h2>

          {/* Short Professional Description */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            Quality Analyst with <span className="text-white font-semibold">1+ year of QA experience</span> across{' '}
            <span className="text-teal-300 font-medium">Functional Testing</span>,{' '}
            <span className="text-cyan-300 font-medium">UI Testing</span>,{' '}
            <span className="text-sky-300 font-medium">API Testing</span>,{' '}
            <span className="text-indigo-300 font-medium">Web &amp; Mobile Testing</span>,{' '}
            <span className="text-teal-300 font-medium">Requirement Analysis</span>,{' '}
            <span className="text-cyan-300 font-medium">Client Communication</span>, and{' '}
            <span className="text-rose-300 font-medium">Defect Management</span>. Dedicated to safeguarding software stability through rigorous test cycles, structured bug tracking, and clear stakeholder alignment.
          </p>

          {/* Floating Technical Indicators */}
          {/* <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-slate-400">
              <span className="text-teal-400 font-semibold">[SYS]</span> QA_COMMAND_HUB_v1.4
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-slate-400">
              <span className="text-emerald-400 font-semibold">[CORE]</span> ZERO CRITICAL BUGS
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-slate-400">
              <span className="text-cyan-400 font-semibold">[SUITE]</span> 25+ APPS VALIDATED
            </span>
          </div> */}
        </div>

        {/* ========================================================================= */}
        {/* CENTER VISUAL: QA TESTING UNIVERSE (ORBIT COMMAND CENTER)                  */}
        {/* ========================================================================= */}
        <div className="relative mb-20">

          {/* Header for Universe */}
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-300 tracking-wider uppercase font-semibold">
                QA Testing Universe • Orbit Command
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
              Click or hover any node to inspect telemetry
            </div>
          </div>

          {/* Main Orbit Stage Container */}
          <div className="relative bg-slate-950/70 rounded-3xl border border-slate-800/80 p-6 sm:p-10 backdrop-blur-xl overflow-hidden shadow-2xl">

            {/* Background Radial Glow & Radar Scanner */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-950/30 via-slate-950/40 to-transparent pointer-events-none" />
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Orbit System - Desktop & Tablet Visual */}
            <div className="relative w-full max-w-[940px] mx-auto min-h-[560px] sm:min-h-[620px] flex items-center justify-center">

              {/* Concentric Orbit Rings (SVG Background Lines) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                {/* Outer dashed orbit circle */}
                <div className="w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] rounded-full border border-dashed border-cyan-500/20 animate-orbit-slow" />

                {/* Secondary orbit circle with reverse rotation */}
                <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-slate-700/60 animate-orbit-reverse" />

                {/* Pulsing Core Radar Wave */}
                <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-teal-500/30 animate-radar" />

                {/* Subtle Decorative Star/Particle Nodes on Orbit */}
                <div className="absolute top-[12%] right-[22%] w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping opacity-60" />
                <div className="absolute bottom-[18%] left-[20%] w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping opacity-50" />
                <div className="absolute top-[48%] left-[10%] w-1 h-1 rounded-full bg-white opacity-40" />
                <div className="absolute bottom-[35%] right-[12%] w-1.5 h-1.5 rounded-full bg-sky-400 opacity-60" />
              </div>

              {/* Center Node: "QUALITY ANALYST" */}
              <div className="relative z-20 group">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-slate-900 via-slate-950 to-black border-2 border-teal-500/60 flex flex-col items-center justify-center text-center p-3 shadow-[0_0_50px_rgba(20,184,166,0.35)] cursor-pointer transition-transform duration-300 hover:scale-105">

                  {/* Glowing Core Ring */}
                  <div className="absolute inset-1 rounded-full border border-cyan-400/30 animate-pulse pointer-events-none" />

                  {/* Glowing Center Badge */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-500/20 border border-teal-400/60 flex items-center justify-center mb-1.5 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-semibold">
                    CORE HUB
                  </span>
                  <span className="text-base sm:text-lg font-black text-white tracking-wider leading-tight">
                    QUALITY<br />ANALYST
                  </span>
                  <span className="text-[9px] font-mono text-cyan-300/80 mt-1 uppercase tracking-wider">
                    DHAKSHAN S
                  </span>

                  {/* Micro Live Pulse indicator */}
                  <div className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-teal-950 border border-teal-500/50 text-[9px] font-mono text-teal-300 flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                    <span>ORBIT ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* 7 Connected Orbit Nodes (Positioned Radially on Desktop/Tablet) */}
              {orbitNodes.map((node, index) => {
                const Icon = node.icon;
                const isActive = activeOrbitId === node.id;

                // Radial positions dynamically calculated for all 7 nodes (360 / 7)
                // -90 deg offset so node 0 starts at top
                const angleStep = 360 / orbitNodes.length;
                const angleDeg = index * angleStep - 90;
                const angleRad = (angleDeg * Math.PI) / 180;
                const radiusPercent = 40;
                const xPercent = 50 + radiusPercent * Math.cos(angleRad);
                const yPercent = 50 + radiusPercent * Math.sin(angleRad);

                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveOrbitId(node.id)}
                    onMouseEnter={() => setActiveOrbitId(node.id)}
                    style={{
                      left: `${xPercent}%`,
                      top: `${yPercent}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    className={`absolute z-30 cursor-pointer transition-all duration-300 group ${isActive ? 'scale-110' : 'hover:scale-105'
                      }`}
                  >
                    {/* Node Glass Pill / Button */}
                    <div
                      className={`relative flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-md ${isActive
                        ? 'bg-slate-900/95 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.45)] ring-2 ring-cyan-500/30'
                        : 'bg-slate-950/85 border-slate-800 hover:border-teal-500/60 hover:bg-slate-900/90'
                        }`}
                    >
                      {/* Icon with glowing badge */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-colors ${isActive
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 group-hover:text-teal-300 group-hover:border-teal-500/40'
                          }`}
                      >
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>

                      {/* Text label */}
                      <div className="text-left">
                        <div
                          className={`text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                            }`}
                        >
                          {node.title}
                        </div>
                        <div className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-wider hidden sm:block">
                          {node.category}
                        </div>
                      </div>

                      {/* Active Indicator Pip */}
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Connecting Laser Beams from Center to Active Node (SVG overlay) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="beamGradient" x1="50%" y1="50%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="faintBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#334155" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.15" />
                  </linearGradient>
                </defs>

                {orbitNodes.map((node, index) => {
                  const angleStep = 360 / orbitNodes.length;
                  const angleDeg = index * angleStep - 90;
                  const angleRad = (angleDeg * Math.PI) / 180;
                  const radiusPercent = 40;
                  const x = 50 + radiusPercent * Math.cos(angleRad);
                  const y = 50 + radiusPercent * Math.sin(angleRad);
                  const isActive = activeOrbitId === node.id;

                  return (
                    <g key={`beam-${node.id}`}>
                      {/* Base thin connection line */}
                      <line
                        x1="50"
                        y1="50"
                        x2={x}
                        y2={y}
                        stroke={isActive ? 'url(#beamGradient)' : 'url(#faintBeam)'}
                        strokeWidth={isActive ? '0.6' : '0.25'}
                        strokeDasharray={isActive ? '2 1.5' : '1.5 2'}
                        className={isActive ? 'animate-dash-fast' : ''}
                      />
                    </g>
                  );
                })}
              </svg>

            </div>

            {/* Interactive Telemetry Inspector Readout */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 bg-slate-900/50 rounded-2xl p-5 sm:p-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-cyan-950/80 border-b border-l border-cyan-800/60 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-cyan-400" />
                <span>TELEMETRY INSPECTOR</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 font-semibold">
                      {activeOrbit.badge}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      {activeOrbit.title}
                    </h4>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {activeOrbit.desc}
                  </p>
                </div>

                <div className="md:col-span-4 flex flex-col justify-center space-y-2 md:border-l md:border-slate-800 md:pl-6">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Core Methodologies &amp; Tools:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeOrbit.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded bg-slate-800/90 border border-slate-700/80 text-xs font-mono text-teal-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 pt-1 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>{activeOrbit.telemetry}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* CAPSULE PILL METRICS HUD (MODERN NEON GLASS BUTTONS)                      */}
        {/* ========================================================================= */}
        <div className="relative max-w-6xl mx-auto py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {/* Pill 1: Projects Tested (Blue) */}
            <div className="group relative flex items-center justify-between p-2.5 sm:p-3 pl-3 sm:pl-3.5 pr-3 sm:pr-4 rounded-full bg-gradient-to-r from-blue-950/70 via-blue-900/30 to-blue-950/60 border border-blue-500/40 shadow-[0_0_20px_rgba(37,99,235,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] cursor-default">
              {/* Vibrant Icon Circle */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_12px_rgba(37,99,235,0.6)] group-hover:scale-105 transition-transform">
                <Laptop className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
              </div>

              {/* Number & Label */}
              <div className="flex flex-col text-left pl-3.5 pr-2 flex-grow min-w-0">
                <span className="text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                  25+
                </span>
                <span className="text-xs text-slate-300 font-medium truncate mt-1">
                  Projects Tested
                </span>
              </div>

              {/* Arrow Button Circle */}
              <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-blue-900/60 border border-blue-400/30 flex items-center justify-center text-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Pill 2: Owned Projects (Purple) */}
            <div className="group relative flex items-center justify-between p-2.5 sm:p-3 pl-3 sm:pl-3.5 pr-3 sm:pr-4 rounded-full bg-gradient-to-r from-purple-950/70 via-purple-900/30 to-purple-950/60 border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] cursor-default">
              {/* Vibrant Icon Circle */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_12px_rgba(147,51,234,0.6)] group-hover:scale-105 transition-transform">
                <Folder className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
              </div>

              {/* Number & Label */}
              <div className="flex flex-col text-left pl-3.5 pr-2 flex-grow min-w-0">
                <span className="text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                  5
                </span>
                <span className="text-xs text-slate-300 font-medium truncate mt-1">
                  Owned Projects
                </span>
              </div>

              {/* Arrow Button Circle */}
              <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-purple-900/60 border border-purple-400/30 flex items-center justify-center text-purple-200 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200 flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Pill 3: Payment Gateways (Teal / Emerald) */}
            <div className="group relative flex items-center justify-between p-2.5 sm:p-3 pl-3 sm:pl-3.5 pr-3 sm:pr-4 rounded-full bg-gradient-to-r from-teal-950/70 via-emerald-900/30 to-teal-950/60 border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] cursor-default">
              {/* Vibrant Icon Circle */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-teal-600 flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_12px_rgba(13,148,136,0.6)] group-hover:scale-105 transition-transform">
                <CreditCard className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
              </div>

              {/* Number & Label */}
              <div className="flex flex-col text-left pl-3.5 pr-2 flex-grow min-w-0">
                <span className="text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                  2
                </span>
                <span className="text-xs text-slate-300 font-medium truncate mt-1">
                  Payment Gateways
                </span>
              </div>

              {/* Arrow Button Circle */}
              <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-teal-900/60 border border-teal-400/30 flex items-center justify-center text-teal-200 group-hover:bg-teal-600 group-hover:text-white transition-all duration-200 flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Pill 4: Experience (Amber / Gold) */}
            <div className="group relative flex items-center justify-between p-2.5 sm:p-3 pl-3 sm:pl-3.5 pr-3 sm:pr-4 rounded-full bg-gradient-to-r from-amber-950/70 via-amber-900/30 to-amber-950/60 border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] cursor-default">
              {/* Vibrant Icon Circle */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-amber-600 flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_12px_rgba(217,119,6,0.6)] group-hover:scale-105 transition-transform">
                <Star className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
              </div>

              {/* Number & Label */}
              <div className="flex flex-col text-left pl-3.5 pr-2 flex-grow min-w-0">
                <span className="text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                  1+ Yr
                </span>
                <span className="text-xs text-slate-300 font-medium truncate mt-1">
                  Experience
                </span>
              </div>

              {/* Arrow Button Circle */}
              <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-amber-900/60 border border-amber-400/30 flex items-center justify-center text-amber-200 group-hover:bg-amber-600 group-hover:text-white transition-all duration-200 flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
