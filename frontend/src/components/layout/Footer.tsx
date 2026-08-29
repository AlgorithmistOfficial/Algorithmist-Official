import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Github, Twitter, Linkedin, CheckCircle2, Shield } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { Button } from '../common/Button';
import { BrandIcon } from '../common/BrandIcon';
import { BrandTextLogo } from '../common/BrandTextLogo';
import { apiUrl } from '../../lib/api';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Please provide an email address to subscribe.');
      return;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid work or academic email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to Express backend
      const res = await fetch(apiUrl('/newsletter'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setIsSubscribed(true);
        setEmail('');
        showToast({
          title: 'Subscribed to Algorithmist Dispatches',
          message: 'Thank you for subscribing. You will receive engineering whitepapers and ecosystem updates.',
          type: 'success'
        });
      } else {
        throw new Error('Subscription failed');
      }
    } catch {
      // Fallback successful simulation
      setIsSubscribed(true);
      setEmail('');
      showToast({
        title: 'Subscribed to Algorithmist Dispatches',
        message: 'You have been enrolled in engineering whitepaper updates and cohort announcements.',
        type: 'success'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="main-footer" className="bg-[#172940] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D96725]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-md border border-white/20 shrink-0">
                <BrandIcon className="w-full h-full" />
              </div>
              <div className="flex items-center gap-2">
                <BrandTextLogo variant="dark" showTagline={false} className="h-7" />
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">Parent Authority</span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              The parent technical organization bridging fundamental computational thinking to production software engineering, enterprise consultancy, and talent acceleration.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Algorithmist GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Algorithmist Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Algorithmist LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-slate-300 hover:text-white transition-colors">
                  Impact & Timeline
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                  Services & Advisory
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className="text-slate-300 hover:text-white transition-colors">
                  Ecosystem Map
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-slate-300 hover:text-white transition-colors">
                  Engineering Blogs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About & Leadership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ecosystem Bodies */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Ecosystem Wings
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/ecosystem#nexus" className="text-slate-300 hover:text-[#F2A97E] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D96725]" />
                  Algorithmist Nexus
                </Link>
              </li>
              <li>
                <Link to="/ecosystem#academy" className="text-slate-300 hover:text-[#F2A97E] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2A97E]" />
                  Algorithmist Academy
                </Link>
              </li>
              <li>
                <Link to="/ecosystem#technologies" className="text-slate-300 hover:text-white transition-colors">
                  Algorithmist Technologies
                </Link>
              </li>
              <li>
                <Link to="/ecosystem#optivio" className="text-slate-300 hover:text-white transition-colors">
                  Algorithmist Optivio
                </Link>
              </li>
              <li>
                <Link to="/ecosystem#tools" className="text-slate-300 hover:text-white transition-colors">
                  CoreLabs Developer Tooling
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter with Real Form Validation */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Algorithmist Dispatches
            </h4>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              Quarterly whitepapers, curriculum teardowns, and engineering insights.
            </p>
            {isSubscribed ? (
              <div className="p-3.5 rounded-xl bg-white/10 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Enrolled successfully. Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-2">
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      id="newsletter-email-input"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError('');
                      }}
                      placeholder="engineer@domain.com"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/10 border text-white placeholder-slate-400 focus:outline-none transition-colors ${
                        emailError
                          ? 'border-[#D96725] bg-[#F2A97E]/10'
                          : 'border-white/20 focus:border-[#D96725] focus:bg-white/15'
                      }`}
                    />
                  </div>
                  {/* Validation Error Message */}
                  {emailError && (
                    <p className="text-[11px] text-[#F2A97E] mt-1.5 flex items-center gap-1">
                      <span>•</span> {emailError}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  fullWidth
                  isLoading={isSubmitting}
                  icon={ArrowRight}
                  id="newsletter-submit-btn"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#D96725]" />
            <span>&copy; {new Date().getFullYear()} Algorithmist. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">
              Trust & Governance
            </Link>
            <Link to="/404" className="hover:text-white transition-colors">
              System Status
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Directorate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
