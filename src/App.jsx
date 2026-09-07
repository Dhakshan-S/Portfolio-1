import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveTestRunnerModal from './components/LiveTestRunnerModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isTestRunnerOpen, setIsTestRunnerOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Sticky Header Nav */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About />
        <Skills />
        <Experience
          onOpenTestRunner={() => setIsTestRunnerOpen(true)}
        />
        <Projects
          onOpenTestRunner={() => setIsTestRunnerOpen(true)}
        />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <LiveTestRunnerModal
        isOpen={isTestRunnerOpen}
        onClose={() => setIsTestRunnerOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
