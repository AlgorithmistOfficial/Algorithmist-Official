import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  Clock, 
  Building2, 
  Code2, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { TagChip } from '../components/common/TagChip';
import { SEO } from '../components/common/SEO';
import { AuroraBackground } from '../components/common/AuroraBackground';
import { MotionSection, MotionStagger, MotionStaggerItem } from '../components/common/MotionSection';
import { IMPACT_STATS, TIMELINE_ITEMS, CASE_STUDIES } from '../data/impactData';

export const ImpactPage: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(CASE_STUDIES[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-24">
      {/* Route-Specific Aurora Background Variant */}
      <AuroraBackground variant="impact" />

      {/* Dynamic SEO Metadata */}
      <SEO
        title="Impact, Metrics & Evolutionary Timeline"
        description="Discover how Algorithmist transforms engineering education into verifiable industry capability through Nexus project incubation and Academy DSA mastery."
        keywords={[
          'Algorithmist Impact',
          'Software Engineering Metrics',
          'Student Placement Outcomes',
          'Computer Science Timeline',
          'Case Studies',
          'Build-to-Ship Results'
        ]}
      />

      {/* 1. Header & Mission Narrative */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#344257]/15 shadow-xs text-xs font-semibold text-[#172940]">
          <TrendingUp className="w-3.5 h-3.5 text-[#D96725]" />
          <span>Systemic Impact & Milestones</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#172940] tracking-tight">
          Transforming Theoretical Learning into Real Industrial Capability
        </h1>
        <p className="text-base sm:text-lg text-[#344257] leading-relaxed">
          The traditional education pattern in engineering creates a perilous rift between academic curricula and actual industry expectations. Algorithmist exists to eradicate that divide through disciplined pedagogy and measurable outcomes.
        </p>
      </motion.section>

      {/* 2. Impact Proof Metric Cards */}
      <MotionSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MotionStagger className="contents">
          {IMPACT_STATS.map((stat, idx) => (
            <MotionStaggerItem key={idx}>
              <GlassCard variant="light" className="text-center space-y-2 border-slate-200 h-full">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#D96725]">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#172940]">
                  {stat.label}
                </div>
                <p className="text-xs text-[#344257]">{stat.subtext}</p>
                <span className="inline-block text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#172940]/5 text-[#172940]">
                  {stat.growth}
                </span>
              </GlassCard>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </MotionSection>

      {/* 3. Narrative Layout: The Problem & Our Dual-Program Solution */}
      <MotionSection className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <GlassCard variant="light" padding="lg" className="border-slate-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="text-2xl font-bold text-[#172940]">
              The Core Problem in Engineering Education
            </h3>
            <p className="text-sm text-[#344257] leading-relaxed">
              In India and emerging tech hubs, engineering students are subjected to an overwhelmingly theory-focused curriculum for the majority of their academic terms. However, colleges and hiring panels simultaneously mandate large-scale projects requiring deep industry-level architectures.
            </p>
            <p className="text-sm text-[#344257] leading-relaxed">
              Without guided mentorship in modern version control, code quality reviews, asynchronous concurrency, and cloud deployment, students struggle to deliver meaningful work.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#172940]">
            <Target className="w-4 h-4 text-[#D96725]" />
            <span>Resulting in critical placement and confidence bottlenecks</span>
          </div>
        </GlassCard>

        <GlassCard variant="accent" padding="lg" className="flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#D96725] text-white flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="text-2xl font-bold text-[#172940]">
              The Algorithmist Intervention Model
            </h3>
            <p className="text-sm text-[#344257] leading-relaxed">
              We developed two dedicated authorities to systematically resolve both sides of the coin:
            </p>
            <ul className="space-y-3 text-sm text-[#344257]">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D96725] mt-2 shrink-0" />
                <span>
                  <strong className="text-[#172940]">Algorithmist Nexus:</strong> Direct project-development learning where students build, review, and ship production-grade cloud systems.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#172940] mt-2 shrink-0" />
                <span>
                  <strong className="text-[#172940]">Algorithmist Academy:</strong> Structured problem-solving tracks mastering Data Structures & Algorithms for stringent technical interview loops.
                </span>
              </li>
            </ul>
          </div>
          <div className="pt-6 border-t border-[#D96725]/20">
            <Link to="/ecosystem" className="text-xs font-bold text-[#D96725] inline-flex items-center gap-1 hover:underline">
              See the complete ecosystem workflow <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </GlassCard>
      </MotionSection>

      {/* 4. Case Study Highlight Component */}
      <MotionSection className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#172940]/5 text-xs font-semibold text-[#172940]">
              <Award className="w-3.5 h-3.5 text-[#D96725]" />
              <span>Evidence & Case Studies</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#172940]">
              Verifiable Case Studies
            </h2>
          </div>
          <div className="flex gap-2">
            {CASE_STUDIES.map((cs) => (
              <button
                key={cs.id}
                type="button"
                onClick={() => setSelectedCaseStudy(cs)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCaseStudy.id === cs.id
                    ? 'bg-[#172940] text-white shadow-xs font-semibold'
                    : 'bg-white/80 border border-slate-200 text-[#344257] hover:bg-white'
                }`}
              >
                {cs.domain}
              </button>
            ))}
          </div>
        </div>

        <GlassCard variant="light" padding="xl" className="border-slate-200 shadow-md">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-semibold text-[#D96725] uppercase tracking-wider">
                  Partner / Cohort: {selectedCaseStudy.partner}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172940] mt-1">
                  {selectedCaseStudy.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedCaseStudy.tags.map((t, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-[#344257] font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono text-[#344257] uppercase tracking-wider">The Challenge</h4>
                <p className="text-sm text-[#344257] leading-relaxed">{selectedCaseStudy.challenge}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono text-[#344257] uppercase tracking-wider">The Solution</h4>
                <p className="text-sm text-[#344257] leading-relaxed">{selectedCaseStudy.solution}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono text-[#344257] uppercase tracking-wider">The Outcome</h4>
                <p className="text-sm text-[#344257] leading-relaxed">{selectedCaseStudy.outcome}</p>
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              {selectedCaseStudy.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/80 border border-slate-200 text-center">
                  <div className="text-2xl font-extrabold text-[#D96725]">{m.value}</div>
                  <div className="text-xs font-medium text-[#172940] mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </MotionSection>

      {/* 5. Evolutionary Timeline */}
      <MotionSection className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#172940]/5 text-xs font-semibold text-[#172940]">
            <Clock className="w-3.5 h-3.5 text-[#D96725]" />
            <span>Historical Track Record</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#172940]">
            Algorithmist Growth Timeline
          </h2>
          <p className="text-sm text-[#344257]">
            From conceptual pedagogical research to expanding across institutional and enterprise horizons.
          </p>
        </div>

        <div className="relative border-l-2 border-[#344257]/20 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-8 py-2">
          {TIMELINE_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Timeline marker */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#D96725] group-hover:scale-125 transition-transform" />

              {/* Period indicator */}
              <div className="sm:absolute sm:-left-36 sm:top-1.5 text-xs font-mono font-bold text-[#172940] mb-1 sm:mb-0">
                {item.period}
              </div>

              <GlassCard variant="light" padding="md" className="border-slate-200 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-[#172940]">{item.title}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D96725]/10 text-[#D96725] font-semibold">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#344257] leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      {/* Bottom CTA to Contact */}
      <MotionSection className="text-center p-8 rounded-3xl bg-[#172940] text-white space-y-4">
        <h3 className="text-2xl font-bold">Partner with Algorithmist for Measurable Impact</h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Whether you are a university seeking to boost student placement readiness or an enterprise seeking software excellence, we are ready to collaborate.
        </p>
        <div className="pt-2">
          <Link to="/contact">
            <Button variant="primary" size="md" icon={ArrowRight}>
              Initiate Institutional Partnership
            </Button>
          </Link>
        </div>
      </MotionSection>
    </div>
  );
};
