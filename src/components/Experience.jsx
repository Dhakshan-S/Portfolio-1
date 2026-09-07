import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ onOpenTestRunner }) {
  const sdlcSteps = [
    { title: '1. Requirement Gathering', desc: 'Analyzing specs & defining scope with clients' },
    { title: '2. Test Case Design', desc: 'Positive & negative scenario planning' },
    { title: '3. Test Execution', desc: 'Manual, API (Postman) & UI validation' },
    { title: '4. Defect Reporting', desc: 'Structured Excel bug tracking & dev sync' },
    { title: '5. Retesting & Sign-Off', desc: 'Fix verification & deployment readiness' }
  ];

  return (
    <section id="experience" className="py-20 relative bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-800/80 text-teal-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hands-on Quality Analyst & Business Analyst handling multi-project QA deliverables and client demonstrations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10 text-left group">
              
              {/* Timeline Connector Line */}
              <div className="absolute left-3 md:left-4 top-10 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-slate-800" />
              
              {/* Node Icon */}
              <div className="absolute left-0 top-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#0B0F17] border-2 border-teal-400 flex items-center justify-center text-teal-300 shadow-md shadow-teal-500/30 group-hover:scale-110 transition-transform">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800 space-y-6 hover:border-teal-500/40 transition-all shadow-xl">
                
                {/* Role Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div>
                    <div className="inline-block px-2.5 py-1 rounded bg-teal-950/80 text-teal-300 text-[11px] font-mono border border-teal-800/80 mb-2">
                      {exp.badge}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-lg font-semibold text-cyan-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1.5 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-teal-400" />
                      <span className="text-slate-200">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                    Key Accomplishments & Responsibilities:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & QA Tool Chips */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">Tools & Practices:</span>
                    {exp.techTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/90 text-teal-300 border border-slate-800 hover:border-teal-500/40 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Owned SDLC QA Process Visualizer */}
        <div className="mt-16 glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                End-to-End QA Workflow Owned (5 Projects)
              </h3>
              <p className="text-xs text-slate-400">
                Standard operating methodology applied from requirement intake to QA sign-off.
              </p>
            </div>
            <button
              onClick={onOpenTestRunner}
              className="px-4 py-2 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800 hover:border-cyan-500 transition-all flex items-center gap-2"
            >
              <span>Test Interactive Runner</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            {sdlcSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-1 relative group hover:border-teal-500/40 transition-all">
                <div className="text-xs font-bold text-teal-400 font-mono">{step.title}</div>
                <div className="text-[11px] text-slate-400 leading-normal">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
