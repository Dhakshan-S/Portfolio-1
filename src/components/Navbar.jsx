import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Phone } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { personalDetails } from '../data/portfolioData';
import userPhoto from '../assets/dhakshan-photo.png';

const navLinks = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // ScrollSpy implementation
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Profile Photo from ID Card */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 p-0.5 shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0B0F17] rounded-[10px] overflow-hidden flex items-center justify-center">
              <img
                src={userPhoto}
                alt={personalDetails.name}
                className="w-full h-full object-cover object-center scale-105 pointer-events-none"
                loading="eager"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-teal-300 transition-colors">
              {personalDetails.name}
            </span>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-teal-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-semibold tracking-wider text-emerald-400">[QA :: VERIFIED]</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-slate-800">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-sm shadow-teal-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-lg text-slate-900 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-all shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 hover:scale-[1.02]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Connect Icons & Menu Toggle */}
        <div className="flex md:hidden items-center gap-1.5 xs:gap-2">
          {/* Connect Icons placed immediately to the left of the More Menu icon */}
          <div className="flex items-center gap-1">
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href={`tel:${personalDetails.phone}`}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="Call Phone"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* More Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - One by One Vertical Menu List */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-5 space-y-3 mt-2 animate-in slide-in-from-top-2">
          {/* One by one vertical menu */}
          <div className="flex flex-col gap-1.5 pb-3 border-b border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-1 flex flex-col gap-2">
            <a
              href="/Dhakshan-Resume.pdf"
              download="Dhakshan-Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-900 bg-gradient-to-r from-teal-400 to-cyan-400 cursor-pointer shadow-md shadow-teal-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
