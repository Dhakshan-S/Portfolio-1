import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  ShieldCheck,
  Loader2,
  AlertCircle
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { personalDetails } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (field, value) => {
    const val = value ? value.trim() : '';
    switch (field) {
      case 'name':
        if (!val) return 'Your Name is required';
        if (val.length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!val) return 'Your Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          return 'Please enter a valid email address';
        }
        return '';
      case 'subject':
        if (!val) return 'Subject is required';
        if (val.length < 3) return 'Subject must be at least 3 characters';
        return '';
      case 'message':
        if (!val) return 'Message is required';
        if (val.length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    // Mark all mandatory fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));
    setErrors(newErrors);

    if (hasErrors) {
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service configuration missing. Please check your environment variables.');
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey: publicKey,
        }
      );

      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
      if (formRef.current) formRef.current.reset();

      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS sendForm failed:', error);
      setErrorMessage(
        error?.text || error?.message || 'Failed to send message. Please try again or contact directly via email.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-8 pb-16 sm:pt-12 sm:pb-20 md:py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-800/80 text-teal-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect & <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Looking for a meticulous Software Tester and QA Analyst to strengthen your software testing? Drop me a message or reach out directly.
          </p>
        </div>

        {/* Grid Layout: Equal Height Stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-card rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-800 flex flex-col justify-between h-full space-y-6 text-left">
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                  <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Direct Contact Channel</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I am actively interviewing for QA Analyst, Software Tester, and Quality Analyst roles. Feel free to contact me via email, phone, or LinkedIn.
                </p>

                {/* Email Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-teal-500/40 transition-all">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-teal-950/80 text-teal-400 border border-teal-800/80 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Email Address</div>
                      <a href={`mailto:${personalDetails.email}`} className="text-xs font-semibold text-white hover:text-teal-300 truncate block">
                        {personalDetails.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalDetails.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white shrink-0 transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/80 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Phone Number</div>
                      <a href={`tel:${personalDetails.phone}`} className="text-xs font-semibold text-white hover:text-cyan-300">
                        {personalDetails.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalDetails.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white shrink-0 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-xs font-semibold text-white">
                      {personalDetails.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* LinkedIn CTA */}
              <div className="pt-4 mt-auto">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all hover:scale-[1.01]"
                >
                  <LinkedinIcon className="w-4 h-4 fill-slate-950" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-card rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-800 flex flex-col justify-between h-full space-y-6 text-left">
              <div className="flex items-center justify-center sm:justify-start border-b border-slate-800 pb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                  <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Send a Direct Message</span>
                </h3>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-teal-950/60 border border-teal-500/40 text-center space-y-3 animate-in fade-in flex-1 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Dhakshan will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col justify-between flex-1 space-y-4">
                  <div className="flex flex-col flex-1 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-300 font-medium">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          className={`w-full rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${touched.name && errors.name
                              ? 'bg-rose-950/20 border border-rose-500/80 focus:border-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.15)]'
                              : 'bg-slate-900/90 border border-slate-800 focus:border-teal-500'
                            }`}
                        />
                        {touched.name && errors.name && (
                          <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1 animate-in fade-in">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-300 font-medium">Your Email *</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="rahul@company.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          className={`w-full rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${touched.email && errors.email
                              ? 'bg-rose-950/20 border border-rose-500/80 focus:border-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.15)]'
                              : 'bg-slate-900/90 border border-slate-800 focus:border-teal-500'
                            }`}
                        />
                        {touched.email && errors.email && (
                          <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1 animate-in fade-in">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject (Mandatory) */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-medium">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="e.g. QA Opportunity / Project Requirement"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        onBlur={() => handleBlur('subject')}
                        className={`w-full rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${touched.subject && errors.subject
                            ? 'bg-rose-950/20 border border-rose-500/80 focus:border-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.15)]'
                            : 'bg-slate-900/90 border border-slate-800 focus:border-teal-500'
                          }`}
                      />
                      {touched.subject && errors.subject && (
                        <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1 animate-in fade-in">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message (Mandatory) - Naturally flexes to fill space */}
                    <div className="space-y-1.5 flex-1 flex flex-col">
                      <label className="text-xs font-mono text-slate-300 font-medium">Message *</label>
                      <textarea
                        name="message"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        className={`w-full rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-all resize-none flex-1 min-h-[140px] ${touched.message && errors.message
                            ? 'bg-rose-950/20 border border-rose-500/80 focus:border-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.15)]'
                            : 'bg-slate-900/90 border border-slate-800 focus:border-teal-500'
                          }`}
                      ></textarea>
                      {touched.message && errors.message && (
                        <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1 animate-in fade-in">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 mt-auto">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-3 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all ${isLoading
                          ? 'opacity-70 cursor-not-allowed'
                          : 'hover:bg-teal-400 cursor-pointer'
                        }`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
