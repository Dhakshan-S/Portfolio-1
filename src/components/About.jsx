import React from 'react';
import {
  CheckCircle,
  FileCheck,
  Users,
  Bug,
  Globe,
  Search,
  MapPin
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: FileCheck,
      title: 'End-to-End QA Lifecycle',
      desc: 'From initial requirement analysis & test planning to execution, defect retesting, and final client sign-off.'
    },
    {
      icon: Globe,
      title: 'Web & Mobile Responsiveness',
      desc: 'Comprehensive cross-browser and multi-platform testing across Android, iOS, tablet, and desktop builds.'
    },
    {
      icon: Search,
      title: 'API & Gateway Validation',
      desc: 'Extensive Postman API testing (JSON/HTTP status codes) and payment gateway scenario testing (Razorpay & PhonePe).'
    },
    {
      icon: Users,
      title: 'Client–Developer Liaison',
      desc: 'Bridging technical requirement gaps between stakeholders, product owners, and developers with clarity.'
    }
  ];

  const stats = [
    { label: 'Projects Tested', value: '25+', sub: 'Web & Mobile Apps' },
    { label: 'Owned Projects', value: '5', sub: 'Requirement → QA Sign-off' },
    { label: 'Payment Gateways', value: '2', sub: 'Razorpay & PhonePe' },
    { label: 'Experience', value: '1+ Yr', sub: 'Quality & Business Analyst' }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-800/80 text-teal-300 text-xs font-mono">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>CAREER OBJECTIVE & QA PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Driven Quality Analyst Crafting <span className="text-gradient">Defect-Free Software</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Delivering precision quality assurance, rigorous test execution, and clear client communication.
          </p>
        </div>

        {/* About Card Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <Bug className="w-40 h-40 text-teal-400" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
                  About Dhakshan S
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white leading-snug">
                Quality Analyst & Business Analyst based in <span className="text-teal-300">Chennai, Tamil Nadu</span>.
              </h3>

              <p className="text-slate-300 leading-relaxed text-base">
                {personalDetails.aboutBio}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                Specialized in combining analytical precision with user-centric testing. Experienced in creating meticulous test cases, executing regression cycles, managing bug life cycles via structured tracking, and conducting live client demonstrations with full confidence.
              </p>
            </div>

            {/* Quick Location & Availability Pill */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Base: Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for QA Engineer & Software Tester roles</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between text-left group hover:border-teal-500/40 transition-all"
              >
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">{item.label}</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-teal-300 transition-colors my-2">
                  {item.value}
                </div>
                <div className="text-xs text-slate-400 font-medium">{item.sub}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Core Strengths Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 text-left hover:border-cyan-500/40 transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-900/60 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
