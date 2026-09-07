import React from 'react';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-800/80 text-teal-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Strong foundational computer science degree coupled with excellent academic track record.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800 space-y-5 text-left flex flex-col justify-between hover:border-teal-500/40 transition-all group"
            >
              <div className="space-y-3">
                {/* Degree / Level Badge */}
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-800/80 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-teal-950/80 text-teal-300 border border-teal-800/80 font-semibold">
                    {edu.grade}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-cyan-400">
                  {edu.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-400">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    {edu.year}
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {edu.status}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
