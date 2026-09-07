import React, { useState } from 'react';
import {
  X,
  Play,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  RotateCcw,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sampleTestSuites } from '../data/portfolioData';

export default function LiveTestRunnerModal({ isOpen, onClose }) {
  const [selectedSuite, setSelectedSuite] = useState(sampleTestSuites[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleModalClose = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setCompletedSteps([]);
    setIsFinished(false);
    onClose();
  };

  if (!isOpen) return null;

  const handleRunSuite = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);
    setCompletedSteps([]);
    setIsFinished(false);

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < selectedSuite.steps.length) {
        setCompletedSteps(prev => [...prev, idx]);
        setCurrentStepIndex(idx + 1);
        idx++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setIsFinished(true);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-3xl rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-950 border border-teal-800 flex items-center justify-center text-teal-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Live QA Test Automation Console
              </h3>
              <p className="text-xs font-mono text-teal-400">
                Interactive Test Suite Execution Simulator
              </p>
            </div>
          </div>
          <button
            onClick={handleModalClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Test Suite Selector */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Select Test Suite to Run:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sampleTestSuites.map((suite) => (
                <button
                  key={suite.id}
                  disabled={isRunning}
                  onClick={() => {
                    setSelectedSuite(suite);
                    setCompletedSteps([]);
                    setIsFinished(false);
                    setCurrentStepIndex(-1);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedSuite.id === suite.id
                      ? 'bg-teal-950/70 border-teal-500 text-white shadow-md shadow-teal-950'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold text-teal-300">{suite.name}</div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between mt-1">
                    <span>{suite.project}</span>
                    <span className="text-cyan-400">{suite.steps.length} Scenarios</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Console View */}
          <div className="bg-[#05080E] rounded-xl p-4 border border-slate-800 font-mono text-xs space-y-3 min-h-[220px]">
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/80">
              <span className="text-teal-400 font-semibold">$ npx playwright test {selectedSuite.id}</span>
              <span className="text-[11px] text-slate-500">Engine: Playwright / Postman AI</span>
            </div>

            {currentStepIndex === -1 && completedSteps.length === 0 && (
              <div className="text-slate-500 py-8 text-center space-y-2">
                <Play className="w-6 h-6 mx-auto text-slate-600 animate-bounce" />
                <p>Click "Execute Test Suite" below to initiate real-time scenario validation.</p>
              </div>
            )}

            {/* Test Step Execution Logs */}
            <div className="space-y-2">
              {selectedSuite.steps.map((step, idx) => {
                const isCompleted = completedSteps.includes(idx);
                const isCurrent = currentStepIndex === idx && isRunning;
                return (
                  <div
                    key={idx}
                    className={`p-2.5 rounded border transition-all flex items-center justify-between gap-3 ${
                      isCompleted
                        ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                        : isCurrent
                        ? 'bg-cyan-950/60 border-cyan-500/60 text-cyan-200 animate-pulse'
                        : 'bg-slate-900/40 border-slate-800/60 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : isCurrent ? (
                        <Clock className="w-4 h-4 text-cyan-400 shrink-0 animate-spin" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-700 shrink-0" />
                      )}
                      <div className="truncate">
                        <span className="font-semibold">{step.step}</span>
                        <span className="text-[11px] text-slate-400 block truncate">{step.expected}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] shrink-0 font-mono">
                      <span>{step.duration}</span>
                      <span className={`px-1.5 py-0.5 rounded ${isCompleted ? 'bg-emerald-900/80 text-emerald-300' : 'bg-slate-800 text-slate-500'}`}>
                        {isCompleted ? 'PASS' : isCurrent ? 'RUNNING' : 'PENDING'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Finish Summary Banner */}
            {isFinished && (
              <div className="p-3 rounded-lg bg-teal-950/90 border border-teal-500/80 text-teal-300 flex items-center justify-between text-xs animate-in zoom-in-95">
                <div className="flex items-center gap-2 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>TEST SUITE COMPLETED: 100% PASS RATE • QA SIGN-OFF GRANTED</span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400">0 DEFECTS FOUND</span>
              </div>
            )}

          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => {
              setCompletedSteps([]);
              setCurrentStepIndex(-1);
              setIsFinished(false);
            }}
            disabled={isRunning}
            className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-slate-800 flex items-center gap-2 transition-colors disabled:opacity-50"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Console</span>
          </button>

          <button
            onClick={handleRunSuite}
            disabled={isRunning}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-md shadow-teal-500/20 flex items-center gap-2 transition-all disabled:opacity-50"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>{isRunning ? 'Running Executions...' : 'Execute Test Suite'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
