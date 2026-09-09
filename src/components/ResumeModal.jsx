import React from 'react';
import {
  X,
  Download,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails, skillCategories, experienceData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-4xl rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900 px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-950 border border-teal-800 flex items-center justify-center text-teal-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Dhakshan S — QA Engineer Resume Preview
              </h3>
              <p className="text-[11px] sm:text-xs font-mono text-slate-400">
                Verified Document • Quality Assurance Profile
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <a
              href="/Dhakshan-Resume.pdf"
              download="Dhakshan-Resume.pdf"
              onClick={handleDownload}
              className="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-md shadow-teal-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Preview */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto bg-[#0A0E17] font-sans">
          
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white">{personalDetails.name}</h1>
              <p className="text-lg font-bold text-teal-400">{personalDetails.title}</p>
              <p className="text-xs text-slate-400 mt-1">{personalDetails.location}</p>
            </div>
            <div className="space-y-1 text-xs font-mono text-slate-300">
              <div>Email: {personalDetails.email}</div>
              <div>Phone: {personalDetails.phone}</div>
              <div>LinkedIn: linkedin.com/in/dhakshan-s-660754286</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono uppercase tracking-wider text-teal-400 font-bold border-b border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {personalDetails.aboutBio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-wider text-teal-400 font-bold border-b border-slate-800 pb-1">
              Work Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2 text-xs">
                <div className="flex justify-between font-bold text-white">
                  <span>{exp.role} — <span className="text-cyan-300">{exp.company}</span></span>
                  <span className="font-mono text-slate-400">{exp.duration}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono uppercase tracking-wider text-teal-400 font-bold border-b border-slate-800 pb-1">
              Technical & QA Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="space-y-1">
                  <div className="font-bold text-slate-200 font-mono text-[11px]">{cat.label}:</div>
                  <div className="text-slate-400 text-[11px]">
                    {cat.skills.map(s => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono uppercase tracking-wider text-teal-400 font-bold border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between text-slate-300">
                  <span><strong>{edu.degree}</strong> — {edu.institution}</span>
                  <span className="font-mono text-teal-400">{edu.grade} ({edu.year})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Status: Verified & Ready for HR Review</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
