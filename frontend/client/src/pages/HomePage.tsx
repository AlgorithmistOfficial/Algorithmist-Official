import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Layers, 
  GraduationCap, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  GitBranch, 
  TrendingUp, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { TagChip } from '../components/common/TagChip';
import { SEO } from '../components/common/SEO';
import { MotionSection, MotionStagger, MotionStaggerItem } from '../components/common/MotionSection';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { NewsletterSignupModal } from '../components/common/NewsletterSignupModal';
import { AnimatedStatCounter } from '../components/common/AnimatedStatCounter';
import { IMPACT_STATS } from '../data/impactData';
import { BLOG_POSTS } from '../data/blogData';
import { ECOSYSTEM_ENTITIES } from '../data/ecosystemData';

/**
 * A restrained, dimensional ribbon that travels through the page background.
 * The broad translucent strokes create the cape-like volume while the narrow
 * highlights sell the folded, 3D edge without competing with page content.
 */
const DynamicCapeWave: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[68rem] overflow-hidden select-none"
  >
    <motion.div
      initial={{ opacity: 0, x: '-34%', y: '-12%', rotate: -13, scale: 0.68 }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: -7, scale: 1 }}
      transition={{ duration: 2.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="absolute -left-[24%] top-[2rem] h-[50rem] w-[150%] origin-center will-change-transform sm:-left-[14%] sm:w-[132%]"
    >
      <motion.svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="h-full w-full"
        animate={{ x: [0, 18, -8, 0], y: [0, -7, 8, 0], scaleY: [1, 1.015, 0.99, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="cape-volume" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--navy)" stopOpacity="0.02" />
            <stop offset="42%" stopColor="var(--primary)" stopOpacity="0.16" />
            <stop offset="72%" stopColor="var(--navy)" stopOpacity="0.09" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient id="cape-edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.18" />
            <stop offset="62%" stopColor="var(--accent-light)" stopOpacity="0.34" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.13" />
          </linearGradient>
          <filter id="cape-soft-glow" x="-20%" y="-30%" width="140%" height="160%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        {/* Diffused shadow underneath the volume */}
        <path
          d="M-120 180 C210 80 430 315 690 390 C970 470 1180 225 1740 610"
          fill="none"
          stroke="var(--navy)"
          strokeOpacity="0.08"
          strokeWidth="310"
          strokeLinecap="round"
          filter="url(#cape-soft-glow)"
        />
        {/* Main dimensional body: left/rear to right/front */}
        <path
          d="M-120 135 C210 35 430 270 690 345 C970 425 1180 180 1740 565"
          fill="none"
          stroke="url(#cape-volume)"
          strokeWidth="250"
          strokeLinecap="round"
        />
        {/* Fold planes */}
        <path
          d="M-100 105 C215 10 435 245 690 320 C955 400 1195 155 1715 540"
          fill="none"
          stroke="var(--surface)"
          strokeOpacity="0.18"
          strokeWidth="4"
        />
        <path
          d="M-80 188 C220 105 445 345 700 408 C975 478 1190 245 1720 625"
          fill="none"
          stroke="url(#cape-edge)"
          strokeWidth="13"
          strokeLinecap="round"
        />
        <path
          d="M-70 235 C240 165 455 390 710 455 C990 525 1220 300 1715 670"
          fill="none"
          stroke="var(--accent-light)"
          strokeOpacity="0.16"
          strokeWidth="3"
          strokeDasharray="2 20"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  </div>
);

export const HomePage: React.FC = () => {
  const featuredBlog = BLOG_POSTS.find((b) => b.featured) || BLOG_POSTS[0];
  const nexusEntity = ECOSYSTEM_ENTITIES.find((e) => e.id === 'nexus');
  const academyEntity = ECOSYSTEM_ENTITIES.find((e) => e.id === 'academy');
  const [activeTab, setActiveTab] = useState<'pipeline' | 'architecture'>('pipeline');

  return (
    <div className="relative isolate overflow-hidden pb-20">
      {/* Dimensional diagonal cape wave, kept below all homepage content */}
      <DynamicCapeWave />

      {/* Decorative hands artwork: a page-level background layer behind the final content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[6.5625vw] z-0 h-[65.625vw] bg-bottom bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/Hands.png')",
          backgroundSize: '100% 100%',
        }}
      />

      {/* Newsletter Signup Modal (Triggers after 15s of user inactivity on homepage) */}
      <NewsletterSignupModal inactivityTimeoutMs={15000} triggerOnInactivity={true} />

      {/* Dynamic SEO Meta for Home Route */}
      <SEO
        title="Home"
        description="Algorithmist is the parent technical authority bridging fundamental computational education, build-to-ship production engineering with Algorithmist Nexus, placement mastery with Algorithmist Academy, and enterprise technical consultancy."
        keywords={[
          'Algorithmist',
          'Algorithmist Nexus',
          'Algorithmist Academy',
          'Build-to-Ship Pedagogy',
          'Software Engineering Apprenticeship',
          'DSA Mastery',
          'Enterprise Technical Architecture'
        ]}
      />

      <div className="relative z-10 space-y-24 sm:space-y-32">

      {/* 1. Hero Section */}
        <section className="relative pt-8 sm:pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#172940] leading-[1.12]">
                Architecting the Future of{' '}
                <span className="text-[#D96725]">
                  Software Engineering
                </span>{' '}
                and Talent Acceleration.
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-[#344257] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Algorithmist unifies deep algorithmic education, hands-on production project incubation, structured placement preparation with, and enterprise technical consultancy.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/ecosystem" id="hero-primary-cta">
                  <Button variant="primary" size="lg" icon={ArrowRight}>
                    Explore Ecosystem
                  </Button>
                </Link>
                <Link to="/services" id="hero-secondary-cta">
                  <Button variant="outline" size="lg">
                    Technical Services
                  </Button>
                </Link>
              </div>

              {/* Sub-badges summary */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-[#344257]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D96725]" />
                  <span>Build-to-Ship Pedagogy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D96725]" />
                  <span>Production SDLC Mentorship</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D96725]" />
                  <span>Enterprise Software Audits</span>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Glassmorphism Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <GlassCard variant="dark" padding="none" className="hidden border-white/15 shadow-2xl">
                {/* Code / Architecture Terminal Header */}
                <div className="px-5 py-3.5 bg-black/30 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400">algorithmist-orchestrator.ts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab('pipeline')}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        activeTab === 'pipeline' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Pipeline
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('architecture')}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        activeTab === 'architecture' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Engines
                    </button>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-xs text-slate-200 space-y-4">
                  {activeTab === 'pipeline' ? (
                    <div className="space-y-3">
                      <div className="text-[#F2A97E] text-[11px] font-semibold">// ALGORITHMIST SYSTEM PIPELINE FLOW</div>
                      
                      {/* Step 1: Academy */}
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="text-[#F2A97E] font-bold">1. Algorithmist Academy</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">DSA & Rigor</span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-sans">
                          Structured training in data structures, algorithms & technical interview loops.
                        </p>
                      </div>

                      {/* Transition connector */}
                      <div className="flex justify-center -my-1 text-[#D96725]">
                        <span className="text-xs">↓ Compounding Knowledge</span>
                      </div>

                      {/* Step 2: Nexus */}
                      <div className="p-3 rounded-xl bg-white/5 border border-[#D96725]/40 space-y-1">
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="text-[#D96725] font-bold">2. Algorithmist Nexus</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#D96725]/20 text-[#F2A97E]">Build-to-Ship</span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-sans">
                          Ship real end-to-end full-stack projects using industry SDLC, CI/CD & cloud deployment.
                        </p>
                      </div>

                      {/* Transition connector */}
                      <div className="flex justify-center -my-1 text-[#D96725]">
                        <span className="text-xs">↓ Industry Transition</span>
                      </div>

                      {/* Step 3: Enterprise */}
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="text-emerald-400 font-bold">3. Enterprise & Delivery</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Technologies & Optivio</span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-sans">
                          Direct transition to real-world software delivery and high-impact business systems.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="text-[#F2A97E] text-[11px] font-semibold">// ALGORITHMIST ACTIVE ENGINES</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                          <span className="text-white">Nexus Project Engine</span>
                          <span className="text-emerald-400 text-[11px]">ACTIVE (120+ Shipped)</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                          <span className="text-white">Academy DSA Engine</span>
                          <span className="text-emerald-400 text-[11px]">ACTIVE (25k+ Solved)</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                          <span className="text-white">Technologies Delivery</span>
                          <span className="text-amber-400 text-[11px]">INCUBATING</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                          <span className="text-white">Optivio Business Strategy</span>
                          <span className="text-blue-300 text-[11px]">ROADMAP</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5">
                          <span className="text-white">CoreLabs Dev Tooling</span>
                          <span className="text-emerald-400 text-[11px]">OPERATIONAL</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Terminal Footer action */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">Execution: 0 errors • Zero debt</span>
                    <Link to="/ecosystem" className="text-[#F2A97E] hover:underline text-[11px] font-semibold flex items-center gap-1">
                      Explore Map <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-[#172940] shadow-2xl">
                <img
                  src="/homepage.jpg"
                  alt="Algorithmist team collaborating on software products and delivery systems"
                  className="block aspect-[4/3] h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. "Proof / Metrics" Strip (4 Stat Counters with Staggered Viewport Entrance) */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#172940]/90 via-[#1e3450]/85 to-[#344257]/90 backdrop-blur-xl text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D96725]/20 via-[#F2A97E]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#172940]/40 rounded-full blur-2xl pointer-events-none" />
          
          {/* Header Strip for Metrics Section */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-[#F2A97E]">
                <span className="h-px w-8 bg-[#D96725]" />
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span>Verified System Metrics</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                Measurable Impact Across Engineering Cohorts
              </h3>
            </div>
            <Link 
              to="/impact" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F2A97E] hover:text-white transition-colors group self-start sm:self-auto"
            >
              <span>View Full Evolutionary Timeline</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Staggered Framer Motion Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.05,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10"
          >
            {IMPACT_STATS.map((stat, idx) => (
              <AnimatedStatCounter key={idx} stat={stat} index={idx} />
            ))}
          </motion.div>
        </div>
      </ScrollReveal>

      {/* 3. “What We Do” Summary (3 Cards, Glass) */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 relative z-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#172940]/5 text-xs font-semibold text-[#172940]">
            <Layers className="w-3.5 h-3.5 text-[#D96725]" />
            <span>Core Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172940] tracking-tight">
            How Algorithmist Powers the Engineering Continuum?
          </h2>
          <p className="text-base text-[#344257]">
            Operating as an umbrella authority, we bridge the gap between academic theory, practical project execution, and enterprise software demands.
          </p>
          </div>

          <MotionStagger className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-0">
          {/* Card 1: Education & Placement */}
          <MotionStaggerItem className="relative">
            <img
              src="/StandingGirl.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-full left-[15%] z-0 h-[36rem] w-auto -translate-y-px -translate-x-1/2 object-contain object-bottom sm:h-[42rem]"
            />
            <GlassCard variant="light" className="relative z-10 flex flex-col justify-between space-y-6 h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#172940] text-[#F2A97E] hover:bg-[#D96725] hover:text-white transition-colors duration-200 flex items-center justify-center shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#172940]">
                  Rigorous Education & Placement Prep
                </h3>
                <p className="text-sm text-[#344257] leading-relaxed">
                  Through <span className="font-semibold text-[#172940]">Algorithmist Academy</span>, we instill foundational mastery of Data Structures, Algorithms, and analytical problem-solving required for top-tier competitive hiring loops.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-[#172940] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D96725]" />
                    <span>Memory layouts & amortized complexity</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#172940] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D96725]" />
                    <span>Timed mock interview screening loops</span>
                  </div>
                </div>
              </div>
              <Link to="/ecosystem#academy" className="pt-2">
                <span className="text-xs font-bold text-[#D96725] hover:text-[#c2571c] inline-flex items-center gap-1">
                  Explore Academy track <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </GlassCard>
          </MotionStaggerItem>

          {/* Card 2: Hands-on Project Incubation */}
          <MotionStaggerItem>
            <GlassCard variant="light" className="flex flex-col justify-between space-y-6 h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#172940] text-[#F2A97E] hover:bg-[#D96725] hover:text-white transition-colors duration-200 flex items-center justify-center shadow-md">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#172940]">
                  Build-to-Ship Project Incubation
                </h3>
                <p className="text-sm text-[#344257] leading-relaxed">
                  Through <span className="font-semibold text-[#172940]">Algorithmist Nexus</span>, students escape pure theoretical lectures by shipping real, full-scale cloud applications using industrial SDLC, PR reviews, and CI/CD pipelines.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-[#172940] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D96725]" />
                    <span>Demonstrable production portfolios</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#172940] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D96725]" />
                    <span>Microservices, Docker & Cloud deployment</span>
                  </div>
                </div>
              </div>
              <Link to="/ecosystem#nexus" className="pt-2">
                <span className="text-xs font-bold text-[#D96725] hover:text-[#c2571c] inline-flex items-center gap-1">
                  Explore Nexus projects <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </GlassCard>
          </MotionStaggerItem>

          {/* Card 3: Enterprise Consultancy & Delivery */}
          <MotionStaggerItem>
            <GlassCard variant="light" className="flex flex-col justify-between space-y-6 h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#172940] text-[#F2A97E] hover:bg-[#D96725] hover:text-white transition-colors duration-200 flex items-center justify-center shadow-md">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#172940]">
                  Enterprise Software & Consultancy
                </h3>
                <p className="text-sm text-[#344257] leading-relaxed">
                  Through <span className="font-semibold text-[#172940]">Technologies</span> and <span className="font-semibold text-[#172940]">Optivio</span>, we serve modern businesses with custom high-throughput engineering, architecture diagnostics, and technical strategy.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-[#172940] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D96725]" />
                    <span>High-scale web platforms & APIs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#172940] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D96725]" />
                    <span>Cloud cost and latency optimization audits</span>
                  </div>
                </div>
              </div>
              <Link to="/services" className="pt-2">
                <span className="text-xs font-bold text-[#D96725] hover:text-[#c2571c] inline-flex items-center gap-1">
                  Discover enterprise services <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </GlassCard>
          </MotionStaggerItem>
          </MotionStagger>
        </div>
      </ScrollReveal>

      {/* 4. Ecosystem Callout Spotlight: Nexus & Academy */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard variant="light" padding="xl" className="border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172940]/5 text-xs font-semibold text-[#172940]">
                <Sparkles className="w-3.5 h-3.5 text-[#D96725]" />
                <span>The Dual Engine Pipeline</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172940]">
                How Academy and Nexus Work in Compounding Harmony
              </h3>
              <p className="text-sm sm:text-base text-[#344257] leading-relaxed">
                “Academy builds fundamentals and interview confidence → Nexus turns skills into shipped products → graduates can transition into real delivery or partner opportunities.”
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <TagChip label="DSA Rigor" variant="accent" size="sm" />
                <TagChip label="Build-to-Ship" variant="accent" size="sm" />
                <TagChip label="Industry SDLC" variant="accent" size="sm" />
                <TagChip label="Direct Delivery" variant="accent" size="sm" />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              {nexusEntity && (
                <div className="p-4 rounded-xl bg-white/90 border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#172940]">{nexusEntity.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">Active Wing</span>
                  </div>
                  <p className="text-xs text-[#344257] line-clamp-2">{nexusEntity.requiredContext}</p>
                  <Link to="/ecosystem" className="text-xs font-bold text-[#D96725] inline-flex items-center gap-1 hover:underline">
                    {nexusEntity.ctaLabel} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}

              {academyEntity && (
                <div className="p-4 rounded-xl bg-white/90 border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#172940]">{academyEntity.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">Active Wing</span>
                  </div>
                  <p className="text-xs text-[#344257] line-clamp-2">{academyEntity.requiredContext}</p>
                  <Link to="/ecosystem" className="text-xs font-bold text-[#D96725] inline-flex items-center gap-1 hover:underline">
                    {academyEntity.ctaLabel} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* 5. Academy → Nexus → Industry Delivery */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard variant="light" padding="xl" className="border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172940]/5 text-xs font-semibold text-[#172940]">
                <GitBranch className="w-3.5 h-3.5 text-[#D96725]" />
                <span>Learning to Industry Pipeline</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172940]">
                From Academic Foundations to Industry-Ready Delivery
              </h3>
              <p className="text-sm sm:text-base text-[#344257] leading-relaxed">
                Academy builds the algorithms, fundamentals, and problem-solving discipline. Nexus turns that learning into reviewed, deployed products, while Optivio connects those capabilities to real business requirements and industry outcomes.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <TagChip label="Academy Foundations" variant="accent" size="sm" />
                <TagChip label="Nexus Build-to-Ship" variant="accent" size="sm" />
                <TagChip label="Optivio Industry Fit" variant="accent" size="sm" />
              </div>
            </div>
            <div className="lg:col-span-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl bg-[#172940] p-4 text-white shadow-md">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#F2A97E]">01 · Learn</div>
                <p className="mt-1 text-sm font-semibold">Academic rigor and technical confidence</p>
              </div>
              <div className="rounded-2xl bg-[#172940] p-4 text-white shadow-md">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#F2A97E]">02 · Build</div>
                <p className="mt-1 text-sm font-semibold">Nexus projects, reviews, and deployments</p>
              </div>
              <div className="rounded-2xl bg-[#172940] p-4 text-white shadow-md">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#F2A97E]">03 · Deliver</div>
                <p className="mt-1 text-sm font-semibold">Optivio-aligned business and industry outcomes</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* 6. Technologies + Optivio Solution Intelligence */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard variant="light" padding="xl" className="border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#172940]/10 bg-[#172940]/5 p-4">
                <ShieldCheck className="w-5 h-5 text-[#D96725]" />
                <div className="mt-3 text-sm font-bold text-[#172940]">Technologies</div>
                <p className="mt-1 text-xs leading-relaxed text-[#344257]">Builds and operates custom software, APIs, cloud systems, and delivery infrastructure.</p>
              </div>
              <div className="rounded-2xl border border-[#172940]/10 bg-[#172940]/5 p-4">
                <Cpu className="w-5 h-5 text-[#D96725]" />
                <div className="mt-3 text-sm font-bold text-[#172940]">Optivio</div>
                <p className="mt-1 text-xs leading-relaxed text-[#344257]">Analyzes business needs, bottlenecks, and growth priorities to guide the right solution.</p>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172940]/5 text-xs font-semibold text-[#172940]">
                <Layers className="w-3.5 h-3.5 text-[#D96725]" />
                <span>Software Solutions + Business Insight</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172940]">
                Technologies and Optivio Solve the Full Business Problem
              </h3>
              <p className="text-sm sm:text-base text-[#344257] leading-relaxed">
                Together, Technologies and Optivio cover more than self-hosted software development. Technologies delivers the engineering across product, platform, API, cloud, and integration layers; Optivio studies what businesses actually need so each solution improves operations, efficiency, and long-term growth.
              </p>
              <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold text-[#D96725] hover:text-[#c2571c]">
                Discover enterprise services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* 7. Featured Blog Card */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="relative z-10 flex justify-center">
            <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#172940]/5 text-xs font-semibold text-[#172940]">
              <BookOpen className="w-3.5 h-3.5 text-[#D96725]" />
              <span>Engineering Publication</span>
            </div>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172940]">
              Latest from the Algorithmist Directorate
              </h2>
            </div>
            <Link to="/blogs">
              <Button variant="outline" size="sm" icon={ArrowRight}>
                View all blogs
              </Button>
            </Link>
          </div>

        <GlassCard variant="light" padding="lg" className="relative z-10 border-slate-200 hover:border-[#D96725]/40 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D96725]/10 text-[#D96725]">
                  {featuredBlog.category}
                </span>
                <span className="text-xs text-[#344257]">{featuredBlog.date}</span>
                <span className="text-xs text-[#344257] font-mono">• {featuredBlog.readTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#172940] hover:text-[#D96725] transition-colors">
                <Link to={`/blogs/${featuredBlog.slug}`}>
                  {featuredBlog.title}
                </Link>
              </h3>
              <p className="text-sm text-[#344257] leading-relaxed">
                {featuredBlog.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {featuredBlog.tags.map((tag, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-[#344257] font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-[#172940] text-white space-y-4">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#F2A97E] uppercase tracking-wider">Author Dossier</span>
                <div className="font-bold text-sm">{featuredBlog.author.name}</div>
                <div className="text-xs text-slate-300">{featuredBlog.author.role}</div>
                <div className="text-[11px] text-slate-400 font-mono">{featuredBlog.author.affiliation}</div>
              </div>
              <Link to={`/blogs/${featuredBlog.slug}`} className="pt-2">
                <Button variant="primary" size="sm" fullWidth icon={ArrowRight}>
                  Read Technical Blueprint
                </Button>
              </Link>
            </div>
          </div>
        </GlassCard>
        </div>
      </ScrollReveal>

      {/* 6. Ecosystem Partners & Tech Ecosystem Logo Strip */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#344257]">
          Supporting Leading Cloud, Infrastructure & Academic Standards
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70">
          <div className="px-4 py-2 rounded-xl bg-white/70 border border-slate-200 text-xs font-mono font-bold text-[#172940]">
            TypeScript / Node.js
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/70 border border-slate-200 text-xs font-mono font-bold text-[#172940]">
            React / Next.js
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/70 border border-slate-200 text-xs font-mono font-bold text-[#172940]">
            PostgreSQL / Redis
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/70 border border-slate-200 text-xs font-mono font-bold text-[#172940]">
            Docker / Kubernetes
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/70 border border-slate-200 text-xs font-mono font-bold text-[#172940]">
            AWS / Google Cloud
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/70 border border-slate-200 text-xs font-mono font-bold text-[#172940]">
            GitHub CI/CD Standards
          </div>
        </div>
      </ScrollReveal>
      </div>
    </div>
  );
};
