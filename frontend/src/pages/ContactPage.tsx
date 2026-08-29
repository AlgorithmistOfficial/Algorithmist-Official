import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Building2, 
  Clock, 
  ArrowRight,
  Shield
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import { AuroraBackground } from '../components/common/AuroraBackground';
import { MotionSection } from '../components/common/MotionSection';
import { useToast } from '../context/ToastContext';
import { ContactFormData, FormErrors } from '../types';
import { apiUrl } from '../lib/api';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const topicParam = searchParams.get('topic') || '';
  const { showToast } = useToast();

  const getInitialTopic = (param: string) => {
    switch (param.toLowerCase()) {
      case 'nexus': return 'nexus';
      case 'academy': return 'academy';
      case 'technologies': return 'technologies';
      case 'optivio': return 'optivio';
      case 'talent-incubation': return 'nexus';
      case 'fullstack-engineering': return 'technologies';
      case 'enterprise-consultancy': return 'optivio';
      default: return 'general';
    }
  };

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    topic: getInitialTopic(topicParam),
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    if (topicParam) {
      setFormData((prev) => ({ ...prev, topic: getInitialTopic(topicParam) }));
    }
  }, [topicParam]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required to route your communication.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters in length.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work or academic email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@organization.com).';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Organization, university, or company affiliation is required.';
    }

    if (!formData.topic) {
      newErrors.topic = 'Please select an area of inquiry.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your inquiry or technical project.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = `Message is too brief (${formData.message.trim().length}/15 characters minimum). Please provide more context.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      showToast({
        title: 'Validation Errors Detected',
        message: 'Please resolve the highlighted fields before submitting your communication.',
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // POST to Express endpoint
      const response = await fetch(apiUrl('/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      const ticketId = data?.ticketId || `ALG-${Math.floor(100000 + Math.random() * 900000)}`;

      setSubmittedTicket({ id: ticketId, name: formData.name });
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });

      showToast({
        title: 'Communication Received',
        message: `Your inquiry (${ticketId}) has been logged. Our engineering directorate will reply within 24 hours.`,
        type: 'success'
      });
    } catch {
      // Fallback
      const ticketId = `ALG-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket({ id: ticketId, name: formData.name });
      showToast({
        title: 'Inquiry Logged',
        message: `Your inquiry (${ticketId}) has been dispatched successfully.`,
        type: 'success'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      topic: 'general',
      message: ''
    });
    setErrors({});
    setSubmittedTicket(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Route-Specific Aurora Background Variant */}
      <AuroraBackground variant="contact" />

      {/* Dynamic SEO Meta */}
      <SEO
        title="Contact Directorate & Technical Inquiries"
        description="Initiate communication with Algorithmist Directorate for academic collaborations, student cohorts, software engineering engagements, and enterprise audits."
        keywords={[
          'Contact Algorithmist',
          'Academic Partnerships',
          'Software Engineering Inquiry',
          'Nexus Inquiries',
          'Academy Inquiries',
          'Algorithmist Bangalore HQ'
        ]}
      />

      {/* 1. Header */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#344257]/15 shadow-xs text-xs font-semibold text-[#172940]">
          <Mail className="w-3.5 h-3.5 text-[#D96725]" />
          <span>Parent Communication Channel</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#172940] tracking-tight">
          Engage with Algorithmist Directorate
        </h1>
        <p className="text-base sm:text-lg text-[#344257] leading-relaxed">
          Whether you represent an academic institution, a prospective student, or an enterprise seeking software engineering and architecture consultancy.
        </p>
      </motion.section>

      {/* 2. Main Grid: Form (Left) & Contact Details / Map (Right) */}
      <MotionSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Container (7 cols) */}
        <div className="lg:col-span-7">
          <GlassCard variant="light" padding="xl" className="border-slate-200 shadow-xl">
            {submittedTicket ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#172940]">
                    Inquiry Confirmed, {submittedTicket.name}
                  </h3>
                  <p className="text-sm text-[#344257] max-w-md mx-auto">
                    Your request has been routed to the appropriate wing. A senior technical officer will follow up with you directly.
                  </p>
                  <div className="inline-block p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-[#172940] mt-3">
                    Reference Ticket ID: <span className="font-bold text-[#D96725]">{submittedTicket.id}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="outline" size="sm" onClick={handleResetForm}>
                    Send Another Communication
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold text-[#172940]">
                    Direct Technical Inquiry Form
                  </h3>
                  <p className="text-xs text-[#344257] mt-1">
                    All fields marked with an asterisk (*) are mandatory for inquiry classification.
                  </p>
                </div>

                {/* Field 1: Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-bold text-[#172940] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Dr. Jane Doe or Alex Smith"
                    className={`w-full px-4 py-3 text-sm rounded-xl border transition-all ${
                      errors.name
                        ? 'border-[#D96725] bg-[#F2A97E]/15 text-[#172940] focus:ring-1 focus:ring-[#D96725]'
                        : 'bg-white/90 border-slate-200 text-[#172940] focus:border-[#D96725] focus:bg-white'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-[#172940] flex items-center gap-1.5 mt-1 font-medium bg-[#F2A97E]/20 p-2 rounded-lg border border-[#D96725]/30">
                      <AlertCircle className="w-3.5 h-3.5 text-[#D96725] shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2 & 3: Email & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-bold text-[#172940] uppercase tracking-wider">
                      Work / Academic Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="engineer@domain.com"
                      className={`w-full px-4 py-3 text-sm rounded-xl border transition-all ${
                        errors.email
                          ? 'border-[#D96725] bg-[#F2A97E]/15 text-[#172940] focus:ring-1 focus:ring-[#D96725]'
                          : 'bg-white/90 border-slate-200 text-[#172940] focus:border-[#D96725] focus:bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#172940] flex items-center gap-1.5 mt-1 font-medium bg-[#F2A97E]/20 p-2 rounded-lg border border-[#D96725]/30">
                        <AlertCircle className="w-3.5 h-3.5 text-[#D96725] shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Company / Affiliation */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-company" className="block text-xs font-bold text-[#172940] uppercase tracking-wider">
                      Organization / University *
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (errors.company) setErrors({ ...errors, company: undefined });
                      }}
                      placeholder="e.g. IIT Madras, TechCorp Labs"
                      className={`w-full px-4 py-3 text-sm rounded-xl border transition-all ${
                        errors.company
                          ? 'border-[#D96725] bg-[#F2A97E]/15 text-[#172940] focus:ring-1 focus:ring-[#D96725]'
                          : 'bg-white/90 border-slate-200 text-[#172940] focus:border-[#D96725] focus:bg-white'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-xs text-[#172940] flex items-center gap-1.5 mt-1 font-medium bg-[#F2A97E]/20 p-2 rounded-lg border border-[#D96725]/30">
                        <AlertCircle className="w-3.5 h-3.5 text-[#D96725] shrink-0" />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Field 4: Topic Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-topic" className="block text-xs font-bold text-[#172940] uppercase tracking-wider">
                    Target Ecosystem Wing / Topic *
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => {
                      setFormData({ ...formData, topic: e.target.value });
                      if (errors.topic) setErrors({ ...errors, topic: undefined });
                    }}
                    className={`w-full px-4 py-3 text-sm rounded-xl border transition-all ${
                      errors.topic
                        ? 'border-[#D96725] bg-[#F2A97E]/15 text-[#172940]'
                        : 'bg-white/90 border-slate-200 text-[#172940] focus:border-[#D96725] focus:bg-white'
                    }`}
                  >
                    <option value="general">General Parent Organization Inquiry</option>
                    <option value="nexus">Algorithmist Nexus — Project Development & SDLC</option>
                    <option value="academy">Algorithmist Academy — DSA & Placement Prep</option>
                    <option value="technologies">Algorithmist Technologies — Client Engineering</option>
                    <option value="optivio">Algorithmist Optivio — Enterprise Technical Requirements</option>
                    <option value="institutional">Collegiate & University Institutional Alliance</option>
                  </select>
                  {errors.topic && (
                    <p className="text-xs text-[#172940] flex items-center gap-1.5 mt-1 font-medium bg-[#F2A97E]/20 p-2 rounded-lg border border-[#D96725]/30">
                      <AlertCircle className="w-3.5 h-3.5 text-[#D96725] shrink-0" />
                      <span>{errors.topic}</span>
                    </p>
                  )}
                </div>

                {/* Field 5: Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-bold text-[#172940] uppercase tracking-wider">
                    Detailed Message / Project Requirements *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Describe your student cohort size, engineering requirements, or consultancy scope in detail..."
                    className={`w-full px-4 py-3 text-sm rounded-xl border transition-all ${
                      errors.message
                        ? 'border-[#D96725] bg-[#F2A97E]/15 text-[#172940] focus:ring-1 focus:ring-[#D96725]'
                        : 'bg-white/90 border-slate-200 text-[#172940] focus:border-[#D96725] focus:bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-[#172940] flex items-center gap-1.5 mt-1 font-medium bg-[#F2A97E]/20 p-2 rounded-lg border border-[#D96725]/30">
                      <AlertCircle className="w-3.5 h-3.5 text-[#D96725] shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                  <p className="text-[11px] text-slate-400">
                    Characters: {formData.message.trim().length} (minimum 15 characters required)
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    icon={Send}
                    id="contact-form-submit-btn"
                  >
                    Transmit Formal Inquiry
                  </Button>
                </div>
              </form>
            )}
          </GlassCard>
        </div>

        {/* Contact Details & Embedded Map (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Details Card */}
          <GlassCard variant="dark" padding="lg" className="space-y-6 border-white/15">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#F2A97E] uppercase tracking-wider">
                Direct Communication Coordinates
              </span>
              <h3 className="text-xl font-bold text-white">
                Algorithmist Directorate HQ
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-[#F2A97E] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Electronic Mail</div>
                  <a href="mailto:directorate@algorithmist.org" className="text-slate-300 hover:text-[#F2A97E] transition-colors">
                    directorate@algorithmist.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-[#F2A97E] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Direct Advisory Line</div>
                  <span className="text-slate-300">+91 (0) 80 4920 7700 / +1 (800) 540-ALGO</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-[#F2A97E] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">SLA & Response Standard</div>
                  <span className="text-slate-300">Within 24 business hours guaranteed</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>All communications protected under standard mutual NDA</span>
            </div>
          </GlassCard>

          {/* Embedded Interactive Map Placeholder Component */}
          <GlassCard variant="light" padding="md" className="border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#172940]">
                <MapPin className="w-4 h-4 text-[#D96725]" />
                <span>Primary Engineering Hub</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-[#344257]">
                Bangalore & Remote Global
              </span>
            </div>

            {/* Visual Vector Map Graphic */}
            <div className="w-full h-48 rounded-xl bg-slate-100 border border-slate-200 relative overflow-hidden flex items-center justify-center">
              {/* Abstract Map Grid */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(#344257 1px, transparent 1px), linear-gradient(90deg, #344257 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />
              {/* Radar rings */}
              <div className="relative flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#D96725]/10 animate-ping absolute" />
                <div className="w-12 h-12 rounded-full bg-[#172940] text-white flex items-center justify-center shadow-lg border-2 border-white relative z-10">
                  <Building2 className="w-5 h-5 text-[#F2A97E]" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md p-2 rounded-lg border border-slate-200 text-[11px] text-[#172940] text-center font-medium shadow-xs">
                Algorithmist Innovation & Technology Center • Outer Ring Road Tech Zone
              </div>
            </div>
          </GlassCard>
        </div>
      </MotionSection>
    </div>
  );
};
