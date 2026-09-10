import React from 'react';
import {
  ShieldCheck,
  Download,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import DraggableIdCard from './DraggableIdCard';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {

  return (
    <section id="hero" className="relative pt-24 pb-4 sm:pt-32 sm:pb-10 md:pt-40 md:pb-20 overflow-hidden">
      {/* Glow Effects in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Main Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-[11px] sm:text-xs font-mono shadow-inner shadow-teal-900/50 max-w-full">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide truncate sm:whitespace-normal">AVAILABLE FOR QA & SOFTWARE TESTING ROLES</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-gradient">{personalDetails.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 flex items-center gap-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300">
                  {personalDetails.title}
                </span>
              </p>
            </div>

            {/* Tagline */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              "{personalDetails.tagline}"
            </p>

            {/* Location & Quick Context Badge */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{personalDetails.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>1+ Year Experience</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>25+ Web & Mobile Projects</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="/Dhakshan-Resume.pdf"
                download="Dhakshan-Resume.pdf"
                onClick={() => {
                  try {
                    confetti({
                      particleCount: 50,
                      spread: 60,
                      origin: { y: 0.7 }
                    });
                  } catch {}
                }}
                className="group relative px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 hover:from-teal-300 hover:to-cyan-300 shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5 cursor-pointer w-full sm:w-auto text-center"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-slate-800/80 hover:text-white border border-slate-700/80 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto text-center"
              >
                <Mail className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>

            {/* Social / Contact Links (Desktop & Tablet) */}
            <div className="pt-6 border-t border-slate-800/80 hidden sm:flex items-center gap-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalDetails.phone}`}
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                  aria-label="Call Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Interactive 3D Draggable ID Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="w-full flex justify-center relative">
              <DraggableIdCard />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-4 sm:mt-6 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors group cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-teal-300">
              Scroll to Explore
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-teal-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
