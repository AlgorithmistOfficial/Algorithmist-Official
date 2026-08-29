import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Layers, 
  Cpu, 
  Cloud, 
  Zap, 
  Building, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { TagChip } from '../components/common/TagChip';
import { SEO } from '../components/common/SEO';
import { AuroraBackground } from '../components/common/AuroraBackground';
import { MotionSection, MotionStagger, MotionStaggerItem } from '../components/common/MotionSection';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { SERVICES_LIST } from '../data/servicesData';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Education & Training', 'Software Engineering', 'Consultancy', 'DevOps & Cloud', 'Performance', 'Institutional'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Layers': return Layers;
      case 'Cpu': return Cpu;
      case 'Cloud': return Cloud;
      case 'Zap': return Zap;
      case 'Building': return Building;
      default: return Sparkles;
    }
  };

  const handleRequestInfo = (serviceId: string) => {
    navigate(`/contact?topic=${serviceId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Route-Specific Aurora Background Variant */}
      <AuroraBackground variant="services" />

      {/* Dynamic SEO Meta */}
      <SEO
        title="Services"
        description="Explore Algorithmist services spanning hands-on project incubation, university curriculum design, cloud DevOps optimization, and enterprise architecture audits."
        keywords={[
          'Algorithmist Services',
          'Software Engineering Incubation',
          'Enterprise Architecture Audit',
          'University Curriculum Modernization',
          'DevOps Cloud Automation',
          'Performance Engineering'
        ]}
      />

      {/* 1. Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#344257]/15 shadow-xs text-xs font-semibold text-[#172940]">
          <Layers className="w-3.5 h-3.5 text-[#D96725]" />
          <span>Parent Technical Capabilities</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#172940] tracking-tight">
          Comprehensive Engineering & Educational Services
        </h1>
        <p className="text-base sm:text-lg text-[#344257] leading-relaxed">
          From nurturing aspiring software engineers through practical incubation to architecting high-scale distributed systems and advising enterprise leadership.
        </p>
      </motion.section>

      {/* 2. Category Filter Chips */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {categories.map((cat) => (
          <TagChip
            key={cat}
            label={cat}
            active={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
            size="md"
          />
        ))}
      </motion.section>

      {/* 3. Services Grid (6 Services with Cards, Icons, Outcomes & Deliverables) */}
      <ScrollReveal className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MotionStagger className="contents">
            {filteredServices.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <MotionStaggerItem key={service.id}>
                  <GlassCard
                    variant="light"
                    padding="lg"
                    className="border-slate-200 hover:border-[#D96725]/40 flex flex-col justify-between space-y-6 h-full transition-colors"
                  >
                    <div className="space-y-5">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#172940] text-[#F2A97E] flex items-center justify-center shadow-md shrink-0">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#344257]">
                              {service.category}
                            </span>
                            <h2 className="text-xl font-bold text-[#172940] mt-1">
                              {service.name}
                            </h2>
                          </div>
                        </div>
                      </div>

                      {/* Tagline & Description */}
                      <p className="text-xs font-semibold text-[#D96725] italic">
                        "{service.tagline}"
                      </p>
                      <p className="text-sm text-[#344257] leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Outcomes Section */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#172940]">
                          Key Measurable Outcomes:
                        </h4>
                        <ul className="space-y-2">
                          {service.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#344257]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D96725] shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {service.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/80 border border-slate-200 text-[#172940]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button: "Request info" */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono">
                        SLA & Custom Scope Available
                      </span>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleRequestInfo(service.id)}
                        icon={ArrowRight}
                      >
                        Request info
                      </Button>
                    </div>
                  </GlassCard>
                </MotionStaggerItem>
              );
            })}
          </MotionStagger>
        </div>
      </ScrollReveal>

      {/* 4. Custom Advisory Callout Block */}
      <ScrollReveal className="w-full">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#172940] to-[#344257] text-white space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono font-bold text-[#F2A97E] uppercase tracking-wider">
                Need a bespoke technical consultation?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Algorithmist Optivio: Specialized Enterprise Audits
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                We conduct customized code reviews, performance profiling, and developer velocity assessments for organizations seeking deep architectural optimization.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link to="/contact?topic=optivio">
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Schedule Architecture Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
