import React from 'react';
import { ShieldCheck, ChevronUp, Mail } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80 text-left">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 p-0.5">
              <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
              </div>
            </div>
            <div>
              <div className="text-base font-extrabold text-white">{personalDetails.name}</div>
              <div className="text-xs text-slate-400">{personalDetails.title} • Chennai, TN</div>
            </div>
          </div>

          {/* System status indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>[SYSTEM STATUS: ALL TEST SUITES PASSED]</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-teal-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-teal-950 text-teal-300 border border-teal-800 hover:bg-teal-900 transition-colors flex items-center gap-1 text-xs font-mono"
              title="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalDetails.name}. Built with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1">
            <span>Precision QA & Software Testing</span>
            <span className="text-teal-400 font-bold">✓ 100% Quality Assurance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
