import React, { useState } from 'react';
import {
  FolderCheck,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onOpenTestRunner }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="pt-14 pb-8 sm:pt-16 sm:pb-12 md:py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-800/80 text-teal-300 text-xs font-mono">
            <FolderCheck className="w-3.5 h-3.5" />
            <span>FEATURED QA CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tested & Verified <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Highlighting core web and mobile application QA projects with payment gateways and multi-tiered business workflows.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {projectsData.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-800 space-y-5 sm:space-y-6 hover:border-teal-500/40 transition-all text-left flex flex-col justify-between h-full group"
              >
                <div className="space-y-4">
                  
                  {/* Category & Status Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-teal-950/80 text-teal-300 border border-teal-800/80 font-semibold truncate">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 bg-emerald-950/50 px-2.5 py-1 rounded border border-emerald-900 shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-xs px-2.5 py-1 rounded-lg font-mono font-medium ${
                          tag.includes('Razorpay') || tag.includes('PhonePe')
                            ? 'bg-amber-950/70 text-amber-300 border border-amber-800/80'
                            : 'bg-slate-900 text-teal-300 border border-slate-800'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Section */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-800 space-y-4 animate-in fade-in duration-300">
                      <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                        {project.fullDesc}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          QA Execution Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                </div>

                {/* Footer Controls */}
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1.5"
                  >
                    <span>{isExpanded ? 'Hide QA Breakdown' : 'View Full QA Details'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
