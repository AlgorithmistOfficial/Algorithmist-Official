import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, 
  Target, 
  ShieldCheck, 
  Terminal, 
  Rocket, 
  Network, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Award
} from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import { AuroraBackground } from '../components/common/AuroraBackground';
import { MotionSection, MotionStagger, MotionStaggerItem } from '../components/common/MotionSection';
import { FAQSection } from '../components/about/FAQSection';
import { CORE_VALUES, TEAM_MEMBERS, TRUST_AND_COMPLIANCE } from '../data/teamData';

export const AboutPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'Rocket': return Rocket;
      case 'Network': return Network;
      default: return ShieldCheck;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      {/* Route-Specific Aurora Background Variant */}
      <AuroraBackground variant="about" />

      {/* Dynamic SEO Meta */}
      <SEO
        title="About Us"
        description="Learn about the origin, core operating principles, leadership directorate, and educational mandate of Algorithmist."
        keywords={[
          'About Algorithmist',
          'Algorithmist Directorate',
          'Engineering Pedagogy',
          'Software Engineering Leadership',
          'Academy and Nexus Story',
          'Trust and IP Compliance'
        ]}
      />

      {/* 1. Header & Story */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#344257]/15 shadow-xs text-xs font-semibold text-[#172940]">
          <Building2 className="w-3.5 h-3.5 text-[#D96725]" />
          <span>About the Algorithmist Parent Organization</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#172940] tracking-tight">
          Unifying Engineering Rigor, Real Pedagogy & Software Delivery
        </h1>
        <p className="text-base sm:text-lg text-[#344257] leading-relaxed">
          Founded as an umbrella authority, Algorithmist addresses the fragmentation between theoretical engineering coursework, rigorous algorithmic problem solving, and real-world enterprise software execution.
        </p>
      </motion.section>

      {/* 2. Company Story & Mandate */}
      <MotionSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#344257] leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172940]">
            The Genesis of Our Mission
          </h2>
          <p>
            In higher technical education, millions of students encounter an acute structural paradox: semesters are overwhelmingly filled with theoretical lectures, yet hiring gates and modern engineering environments demand immediate, high-caliber software execution.
          </p>
          <p>
            To address this at root, we conceived a multi-wing ecosystem:
          </p>
          <ul className="space-y-2 text-sm text-[#172940] font-medium pt-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D96725] mt-2 shrink-0" />
              <span>
                <strong>Algorithmist Academy:</strong> Focused on foundational algorithmic depth, data structure intuition, and high-intensity interview loops.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#172940] mt-2 shrink-0" />
              <span>
                <strong>Algorithmist Nexus:</strong> Focused on build-to-ship project learning, where learners construct full-scale applications under production code reviews and deployment standards.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#344257] mt-2 shrink-0" />
              <span>
                <strong>Algorithmist Technologies & Optivio:</strong> Channeling this proven talent into enterprise delivery and strategic technical consultancy for scaling businesses.
              </span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5">
          <GlassCard variant="dark" padding="lg" className="space-y-4 border-white/15">
            <div className="text-xs font-mono font-bold text-[#F2A97E] uppercase tracking-wider">
              Parent Mandate
            </div>
            <h3 className="text-xl font-bold text-white">
              “One Continuous Engineering Engine”
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              By controlling the entire pipeline from algorithmic foundations to deployment and client delivery, Algorithmist creates an unparalleled flywheel of technical competence.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#F2A97E]">
              <span>Established Authority</span>
              <span>Global Standards</span>
            </div>
          </GlassCard>
        </div>
      </MotionSection>

      {/* 3. Core Values (Glass Cards) */}
      <MotionSection className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-[#172940]">
            Our Core Operating Principles
          </h2>
          <p className="text-sm text-[#344257]">
            The foundational standards governing every project, curriculum, and client engagement.
          </p>
        </div>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => {
            const IconComponent = getIcon(val.icon);
            return (
              <MotionStaggerItem key={idx}>
                <GlassCard variant="light" padding="md" className="border-slate-200 space-y-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#172940] text-[#F2A97E] flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#344257]">
                    {val.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#172940]">{val.title}</h3>
                  <p className="text-xs text-[#344257] leading-relaxed">{val.description}</p>
                </GlassCard>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </MotionSection>

      {/* 4. Team Section (5 Leadership & Academic Profiles) */}
      <MotionSection className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#172940]/5 text-xs font-semibold text-[#172940]">
            <Users className="w-3.5 h-3.5 text-[#D96725]" />
            <span>Directorate & Faculty</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#172940]">
            Leadership Behind the Parent Ecosystem
          </h2>
          <p className="text-sm text-[#344257]">
            Senior engineers, competitive programmers, and technical strategists united by a shared vision.
          </p>
        </div>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <MotionStaggerItem key={idx}>
              <GlassCard variant="light" padding="lg" className="border-slate-200 flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#172940] to-[#344257] text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {member.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#172940]">{member.name}</h4>
                      <p className="text-xs text-[#D96725] font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-[#344257] px-2.5 py-1 rounded-md bg-slate-100 inline-block">
                    {member.division}
                  </div>
                  <p className="text-xs text-[#344257] leading-relaxed">{member.bio}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                  {member.focus.map((f, fIdx) => (
                    <span key={fIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-[#172940]">
                      {f}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </MotionSection>

      {/* 5. Trust & Compliance Section */}
      <MotionSection className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-xs font-semibold text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Governance & Standards</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#172940]">
            Trust, Compliance & IP Protection
          </h2>
          <p className="text-sm text-[#344257]">
            Institutional rigor applied equally to student data, client IP, and engineering safety.
          </p>
        </div>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRUST_AND_COMPLIANCE.map((tc, idx) => (
            <MotionStaggerItem key={idx}>
              <GlassCard variant="light" padding="md" className="border-slate-200 flex items-start gap-4 h-full">
                <div className="w-8 h-8 rounded-xl bg-[#172940] text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#172940]">{tc.title}</h4>
                  <p className="text-xs sm:text-sm text-[#344257] leading-relaxed">{tc.description}</p>
                </div>
              </GlassCard>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </MotionSection>

      {/* 6. FAQ Section (Accordion Glassmorphism Cards) */}
      <MotionSection>
        <FAQSection />
      </MotionSection>

      {/* Contact Trigger */}
      <MotionSection className="text-center p-8 rounded-3xl bg-[#172940] text-white space-y-4">
        <h3 className="text-2xl font-bold">Connect with the Algorithmist Directorate</h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Explore customized campus initiatives, enterprise software engagements, or mentorship tracks.
        </p>
        <div className="pt-2">
          <Link to="/contact">
            <Button variant="primary" size="md" icon={ArrowRight}>
              Contact Directorate
            </Button>
          </Link>
        </div>
      </MotionSection>
    </div>
  );
};
