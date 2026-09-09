import React from 'react';
import { ShieldCheck, ChevronUp, Mail, MapPin } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80 text-left">
          {/* Left Brand & Tagline matching reference */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {/* Cyan Glowing Squircle Badge */}
              <div className="w-14 h-14 rounded-2xl bg-[#080E1A] border-2 border-cyan-400/90 shadow-[0_0_25px_rgba(6,182,212,0.45)] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-cyan-400" />
              </div>

              {/* Title & Info */}
              <div className="space-y-0.5 text-left">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Dhakshan S
                </h3>
                <p className="text-sm font-medium text-slate-300">
                  Software Tester | QA Engineer
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Chennai, TN</span>
                </div>
              </div>
            </div>

            {/* Cyan Accent Bar with Motto */}
            <div className="flex items-center gap-3 pl-1 text-left">
              <div className="w-1 h-5 bg-cyan-400 rounded-full shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
              <p className="text-sm text-slate-300 font-normal">
                Ensuring quality. Building better digital experiences.
              </p>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-teal-400 border border-slate-800 hover:border-teal-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-teal-950 text-teal-300 border border-teal-800 hover:bg-teal-900 transition-all flex items-center gap-1.5 text-xs font-mono"
              title="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 text-xs text-slate-400 font-medium text-center sm:text-left pt-1 sm:pt-0">
          <div>
            © {new Date().getFullYear()} Dhakshan S. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 font-mono text-[12px] text-slate-500 text-center">
            <span>Precision QA &amp; Software Testing</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-teal-400 font-bold">✓ 100% Quality Assurance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
