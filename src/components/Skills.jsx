import React, { useState } from 'react';
import {
  ShieldCheck,
  Globe,
  Terminal,
  Bug,
  Briefcase,
  Cpu,
  Search,
  CheckCircle2,
  SlidersHorizontal,
  Code
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Globe': return Globe;
      case 'Terminal': return Terminal;
      case 'Bug': return Bug;
      case 'Briefcase': return Briefcase;
      case 'Cpu': return Cpu;
      default: return Code;
    }
  };

  const filteredCategories = skillCategories.map(cat => {
    if (activeTab !== 'all' && cat.id !== activeTab) {
      return null;
    }
    const matchingSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchingSkills.length === 0) return null;
    return { ...cat, skills: matchingSkills };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>TESTING & QA TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Competencies & <span className="text-gradient">QA Toolkit</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Grouped into functional testing domains, automated tooling, database validation, and business analysis.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                  activeTab === cat.id
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>

        </div>

        {/* Skill Category Cards Display */}
        {filteredCategories.length === 0 ? (
          <div className="glass-card p-12 text-center rounded-2xl border border-slate-800 space-y-3">
            <SlidersHorizontal className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}". Try clearing search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {filteredCategories.map((category) => {
              const IconComp = getIcon(category.icon);
              return (
                <div
                  key={category.id}
                  className="glass-card rounded-2xl p-6 border border-slate-800 text-left space-y-5 hover:border-teal-500/30 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-teal-950/60 border border-teal-800/60 text-teal-400">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white tracking-wide">
                            {category.label}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400">
                            {category.skills.length} verified competencies
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                        [READY]
                      </span>
                    </div>

                    {/* Skill Chips List */}
                    <div className="pt-4 space-y-3">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-teal-500/40 hover:bg-slate-900 transition-all group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                              <span className="text-xs font-semibold text-white group-hover:text-teal-300 transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-teal-400 border border-slate-700">
                              {skill.passTag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-tight pl-5">
                            {skill.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Tag */}
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>STATUS: VALIDATED</span>
                    <span className="text-teal-400 font-semibold">100% COVERAGE</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
