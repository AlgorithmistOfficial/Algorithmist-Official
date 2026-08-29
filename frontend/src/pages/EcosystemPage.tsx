import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  GraduationCap, 
  Cpu, 
  Users, 
  Wrench, 
  Microscope,
  ArrowUpRight
} from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { TagChip } from '../components/common/TagChip';
import { SEO } from '../components/common/SEO';
import { AuroraBackground } from '../components/common/AuroraBackground';
import { MotionSection, MotionStagger, MotionStaggerItem } from '../components/common/MotionSection';
import { 
  ECOSYSTEM_ENTITIES, 
  ECOSYSTEM_CATEGORIES, 
  FILTER_TAGS 
} from '../data/ecosystemData';
import { EcosystemEntity, EcosystemCategory } from '../types';

export const EcosystemPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const location = useLocation();

  // Filter entities based on tag and category
  const filteredEntities = useMemo(() => {
    return ECOSYSTEM_ENTITIES.filter((entity) => {
      const matchesTag = selectedTag === 'All' || entity.tags.includes(selectedTag);
      const matchesCategory = selectedCategory === 'All' || entity.category === selectedCategory;
      return matchesTag && matchesCategory;
    });
  }, [selectedTag, selectedCategory]);

  const getCategoryIcon = (category: EcosystemCategory) => {
    switch (category) {
      case 'Education': return GraduationCap;
      case 'Corporate / Delivery': return Cpu;
      case 'Community': return Users;
      case 'Tools': return Wrench;
      case 'Research': return Microscope;
      default: return Network;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 space-y-16">
      {/* Route-Specific Aurora Background Variant */}
      <AuroraBackground variant="ecosystem" />

      {/* Dynamic SEO Meta */}
      <SEO
        title="Ecosystem"
        description="Explore the Algorithmist system map connecting Algorithmist Academy, Algorithmist Nexus, Technologies, Optivio, CoreLabs, and Research."
        keywords={[
          'Algorithmist Ecosystem',
          'Algorithmist Nexus',
          'Algorithmist Academy',
          'Algorithmist Technologies',
          'Algorithmist Optivio',
          'CoreLabs Tooling',
          'Engineering Pipeline'
        ]}
      />

      {/* 1. Header & Ecosystem Map Intro */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#344257]/15 shadow-xs text-xs font-semibold text-[#172940]">
          <Network className="w-3.5 h-3.5 text-[#D96725]" />
          <span>Interconnected Technical Ecosystem</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#172940] tracking-tight">
          The Algorithmist System Map
        </h1>
        <p className="text-base sm:text-lg text-[#344257] leading-relaxed">
          Algorithmist operates as the parent foundation for a network of dedicated educational wings, software delivery authorities, developer tooling, and applied research labs.
        </p>
      </motion.section>

      {/* 2. “How the ecosystem connects” Connection Callout Block (Glass) */}
      <MotionSection id="ecosystem-connection" className="space-y-4">
        <GlassCard variant="accent" padding="xl" className="border-[#D96725]/30 shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D96725]">
              <Sparkles className="w-4 h-4" />
              <span>How The Ecosystem Connects</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172940]">
                The Continuous Knowledge & Delivery Pipeline
              </h2>
              {/* Exact required explanation */}
              <p className="text-base sm:text-lg font-medium text-[#172940] bg-white/70 p-4 rounded-xl border border-[#D96725]/20 leading-relaxed">
                “Academy builds fundamentals and interview confidence → Nexus turns skills into shipped products → graduates can transition into real delivery or partner opportunities.”
              </p>
            </div>

            {/* Interactive Visual Step Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/90 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#172940]">STAGE 01</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-semibold">
                    Fundamentals
                  </span>
                </div>
                <h4 className="font-bold text-sm text-[#172940]">Algorithmist Academy</h4>
                <p className="text-xs text-[#344257]">
                  Master DSA complexity, tree/graph traversal, and competitive interview rigor.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/90 border border-[#D96725]/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D96725]">STAGE 02</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D96725]/20 text-[#D96725] font-semibold">
                    Production
                  </span>
                </div>
                <h4 className="font-bold text-sm text-[#172940]">Algorithmist Nexus</h4>
                <p className="text-xs text-[#344257]">
                  Ship production cloud systems under real agile sprints, PR reviews, and CI/CD pipelines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/90 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#172940]">STAGE 03</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-semibold">
                    Enterprise
                  </span>
                </div>
                <h4 className="font-bold text-sm text-[#172940]">Technologies & Optivio</h4>
                <p className="text-xs text-[#344257]">
                  Graduates and engineers step into real-world client engagements and high-scale software delivery.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </MotionSection>

      {/* 3. Tag Filter Bar & Category Controls */}
      <MotionSection className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#344257]">
              Filter by Focus Area & Tags
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#344257]">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 text-xs rounded-xl bg-white border border-slate-200 text-[#172940] focus:outline-none focus:border-[#D96725]"
            >
              <option value="All">All Categories ({ECOSYSTEM_CATEGORIES.length})</option>
              {ECOSYSTEM_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* TagChips Filter Bar */}
        <div className="flex flex-wrap gap-2 pt-1">
          {FILTER_TAGS.map((tag) => (
            <TagChip
              key={tag}
              label={tag}
              active={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
              size="md"
            />
          ))}
        </div>
      </MotionSection>

      {/* 4. Filterable Grid with First-Class Cards for Nexus, Academy & Others */}
      <section className="space-y-12">
        {ECOSYSTEM_CATEGORIES.map((category) => {
          const entitiesInCategory = filteredEntities.filter((e) => e.category === category);
          if (entitiesInCategory.length === 0) return null;

          const CategoryIcon = getCategoryIcon(category);

          return (
            <MotionSection key={category} className="space-y-6">
              {/* Category Section Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#172940] text-white flex items-center justify-center">
                  <CategoryIcon className="w-4 h-4 text-[#F2A97E]" />
                </div>
                <h3 className="text-xl font-bold text-[#172940]">
                  {category} Wing
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  ({entitiesInCategory.length} {entitiesInCategory.length === 1 ? 'Entity' : 'Entities'})
                </span>
              </div>

              {/* Entity Cards Grid */}
              <MotionStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {entitiesInCategory.map((entity) => (
                  <MotionStaggerItem key={entity.id}>
                    <GlassCard
                      id={entity.id}
                      variant="light"
                      padding="lg"
                      className={`border-slate-200 hover:border-[#D96725]/50 flex flex-col justify-between space-y-6 h-full transition-colors ${
                        entity.id === 'nexus' || entity.id === 'academy' ? 'ring-1 ring-[#D96725]/30' : ''
                      }`}
                    >
                      <div className="space-y-4">
                        {/* Card Header & Status */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-2xl font-extrabold text-[#172940]">
                                {entity.name}
                              </h4>
                            </div>
                            <p className="text-xs font-semibold text-[#D96725] italic mt-0.5">
                              {entity.tagline}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-100 text-[#172940] shrink-0">
                            <span className={`w-2 h-2 rounded-full ${entity.statusColor || 'bg-slate-400'}`} />
                            {entity.status}
                          </span>
                        </div>

                        {/* Required Official Context Block */}
                        <div className="p-4 rounded-xl bg-white/90 border border-slate-200 text-xs sm:text-sm text-[#172940] leading-relaxed font-normal shadow-xs">
                          {entity.requiredContext}
                        </div>

                        {/* Highlights */}
                        <div className="space-y-2 pt-1">
                          <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#344257]">
                            Key Operational Capabilities:
                          </h5>
                          <ul className="space-y-1.5">
                            {entity.highlights.map((h, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-[#344257]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#D96725] shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Metrics if available */}
                        {entity.metrics && (
                          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                            {entity.metrics.map((m, idx) => (
                              <div key={idx} className="text-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                                <div className="text-sm font-bold text-[#172940]">{m.value}</div>
                                <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{m.label}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {entity.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-[#344257]"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom CTA Action Button */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">
                          {entity.category}
                        </span>
                        <Link to={entity.ctaLink}>
                          <Button variant="primary" size="sm" icon={ArrowRight}>
                            {entity.ctaLabel}
                          </Button>
                        </Link>
                      </div>
                    </GlassCard>
                  </MotionStaggerItem>
                ))}
              </MotionStagger>
            </MotionSection>
          );
        })}

        {filteredEntities.length === 0 && (
          <div className="text-center py-16 space-y-4">
            <p className="text-sm text-slate-500">No ecosystem wings match your active filter criteria.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedTag('All');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};
