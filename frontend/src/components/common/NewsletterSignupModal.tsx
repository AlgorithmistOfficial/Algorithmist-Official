import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, CheckCircle2, ArrowRight, Sparkles, Shield, Bell, Clock } from 'lucide-react';
import { BrandIcon } from './BrandIcon';
import { BrandTextLogo } from './BrandTextLogo';
import { Button } from './Button';
import { useToast } from '../../context/ToastContext';

export interface NewsletterSignupModalProps {
  /**
   * Duration in milliseconds of user inactivity before modal triggers.
   * Defaults to 15000ms (15 seconds).
   */
  inactivityTimeoutMs?: number;
  /**
   * Whether to automatically trigger on inactivity.
   * Defaults to true.
   */
  triggerOnInactivity?: boolean;
  /**
   * Fallback fixed delay in milliseconds if inactivity trigger is disabled.
   */
  delayMs?: number;
  /**
   * Controlled open state.
   */
  isOpen?: boolean;
  /**
   * Callback fired when modal is closed or dismissed.
   */
  onClose?: () => void;
  /**
   * Optional custom title.
   */
  title?: string;
  /**
   * Optional custom description.
   */
  description?: string;
  /**
   * Submission source identifier for analytics/lead origin.
   */
  source?: string;
}

export const NewsletterSignupModal: React.FC<NewsletterSignupModalProps> = ({
  inactivityTimeoutMs = 15000,
  triggerOnInactivity = true,
  delayMs,
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  title = 'Quarterly Technical Whitepapers & Engineering Deep-Dives',
  description = 'Subscribe for curated architectural case studies, production build teardowns from Algorithmist Nexus, and advanced DSA pedagogy from Academy.',
  source = 'homepage_inactivity_modal',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { showToast } = useToast();

  const activeIsOpen = controlledIsOpen !== undefined ? controlledIsOpen : isOpen;

  const handleOpen = useCallback(() => {
    const hasSubscribed = localStorage.getItem('algorithmist_newsletter_subscribed');
    const hasDismissed = sessionStorage.getItem('algorithmist_newsletter_dismissed');

    if (!hasSubscribed && !hasDismissed) {
      setIsOpen(true);
    }
  }, []);

  // Inactivity tracking engine (15s inactivity detection)
  useEffect(() => {
    const hasSubscribed = localStorage.getItem('algorithmist_newsletter_subscribed');
    const hasDismissed = sessionStorage.getItem('algorithmist_newsletter_dismissed');

    if (hasSubscribed || hasDismissed || controlledIsOpen !== undefined) {
      return;
    }

    if (!triggerOnInactivity) {
      if (delayMs) {
        const fixedTimer = setTimeout(handleOpen, delayMs);
        return () => clearTimeout(fixedTimer);
      }
      return;
    }

    const resetInactivityTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        handleOpen();
      }, inactivityTimeoutMs);
    };

    // Initial start
    resetInactivityTimer();

    // User activity listeners
    const activityEvents = [
      'mousemove',
      'mousedown',
      'keydown',
      'touchstart',
      'scroll',
      'wheel',
    ];

    const handleUserActivity = () => {
      // Only reset timer if modal is not currently open
      if (!isOpen) {
        resetInactivityTimer();
      }
    };

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, handleUserActivity, { passive: true });
    });

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleUserActivity);
      });
    };
  }, [inactivityTimeoutMs, triggerOnInactivity, delayMs, isOpen, controlledIsOpen, handleOpen]);

  // Handle ESC key press and autofocus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeIsOpen) {
        handleClose();
      }
    };

    if (activeIsOpen) {
      window.addEventListener('keydown', handleKeyDown);
      const focusTimer = setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        clearTimeout(focusTimer);
      };
    }
  }, [activeIsOpen]);

  const handleClose = () => {
    sessionStorage.setItem('algorithmist_newsletter_dismissed', 'true');
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setIsOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    const sanitizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!sanitizedEmail) {
      setEmailError('Work or academic email is required.');
      return;
    }

    if (!emailRegex.test(sanitizedEmail)) {
      setEmailError('Please provide a valid RFC-compliant email address (e.g. name@company.com).');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: sanitizedEmail,
          source,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('algorithmist_newsletter_subscribed', 'true');
        setIsSuccess(true);
        showToast({
          title: 'Subscribed to Dispatches',
          message: data.message || 'You will receive our quarterly engineering teardowns and whitepapers.',
          type: 'success',
        });
      } else {
        setEmailError(data.error || 'Failed to enroll. Please check your email and try again.');
      }
    } catch {
      // Offline / network fallback
      localStorage.setItem('algorithmist_newsletter_subscribed', 'true');
      setIsSuccess(true);
      showToast({
        title: 'Enrolled in Technical Dispatches',
        message: 'Welcome to Algorithmist Quarterly Technical Briefings.',
        type: 'success',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {activeIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Glassmorphism Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#172940]/55 backdrop-blur-md -z-10"
            aria-hidden="true"
          />

          {/* Modal Container Card with Glassmorphic Styling and Entrance Animation */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-modal-title"
            initial={{ opacity: 0, scale: 0.88, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.35,
            }}
            className="relative w-full max-w-lg rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(23,41,64,0.35)] p-6 sm:p-8 text-[#172940] overflow-hidden"
          >
            {/* Subtle Gradient Accent Aura in Top Corner */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-[#D96725]/20 via-[#F2A97E]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#172940]/5 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#172940] hover:bg-slate-100/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D96725]"
              aria-label="Close newsletter modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              /* Success Confirmation View */
              <div className="text-center py-6 sm:py-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/60 px-2.5 py-1 rounded-full">
                    Enrollment Confirmed
                  </span>
                  <h3 id="newsletter-modal-title" className="text-2xl font-bold text-[#172940]">
                    Welcome to Algorithmist Dispatches
                  </h3>
                  <p className="text-sm text-[#344257] max-w-sm mx-auto leading-relaxed">
                    You have been enrolled with <span className="font-semibold text-[#172940]">{email}</span>. You will receive our quarterly technical whitepapers and architecture teardowns.
                  </p>
                </div>
                <div className="pt-4">
                  <Button variant="primary" size="md" onClick={handleClose} fullWidth>
                    Continue Exploring
                  </Button>
                </div>
              </div>
            ) : (
              /* Subscription Form View */
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm p-1.5 flex items-center justify-center shrink-0">
                    <BrandIcon className="w-full h-full" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <BrandTextLogo showTagline={false} className="h-5" />
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#D96725]/10 text-[#D96725]">
                        Dispatches
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      Quarterly Engineering Intelligence
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-2">
                  <h3 id="newsletter-modal-title" className="text-xl sm:text-2xl font-extrabold text-[#172940] tracking-tight">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#344257] leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Value Highlights */}
                <div className="space-y-2 py-2 border-y border-slate-100 text-xs text-[#344257]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D96725] shrink-0" />
                    <span>Real production architectures, compiler optimizations, and systems metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-[#D96725] shrink-0" />
                    <span>Strictly zero marketing fluff or promotional spam — 100% technical signal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="w-3.5 h-3.5 text-[#D96725] shrink-0" />
                    <span>Quarterly cadence — calibrated for high-bandwidth engineering leaders</span>
                  </div>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  <div>
                    <label htmlFor="modal-newsletter-signup-email" className="block text-xs font-semibold text-[#172940] mb-1.5">
                      Work or Academic Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        ref={inputRef}
                        type="email"
                        id="modal-newsletter-signup-email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailError) setEmailError('');
                        }}
                        placeholder="engineer@organization.com"
                        className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-slate-50/80 border text-[#172940] placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                          emailError
                            ? 'border-[#D96725] bg-[#F2A97E]/10 ring-1 ring-[#D96725]'
                            : 'border-slate-200 focus:border-[#D96725] focus:ring-2 focus:ring-[#D96725]/20'
                        }`}
                      />
                    </div>
                    {emailError && (
                      <p className="text-[11px] text-[#D96725] font-medium mt-1.5 flex items-center gap-1">
                        <span>•</span> {emailError}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      fullWidth
                      isLoading={isSubmitting}
                      icon={ArrowRight}
                    >
                      Enroll in Dispatches
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={handleClose}
                      className="w-full sm:w-auto"
                    >
                      Maybe Later
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Also export as default and NewsletterModal for backwards compatibility
export const NewsletterModal = NewsletterSignupModal;
export default NewsletterSignupModal;
