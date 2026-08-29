import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export type AuroraVariant =
  | 'home'
  | 'impact'
  | 'services'
  | 'ecosystem'
  | 'blogs'
  | 'blog-detail'
  | 'about'
  | 'contact'
  | 'not-found'
  | 'default';

export interface AuroraBackgroundProps {
  /**
   * Explicit background variant for a distinct visual identity on each route/page.
   * If omitted, the variant is automatically determined from the current route pathname.
   */
  variant?: AuroraVariant;
  className?: string;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  variant: propVariant,
  className = '',
}) => {
  const location = useLocation();
  const path = location.pathname;

  // Determine active visual theme mode from props or route pathname
  const getThemeMode = (): AuroraVariant => {
    if (propVariant) return propVariant;
    if (path === '/') return 'home';
    if (path.startsWith('/impact')) return 'impact';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/ecosystem')) return 'ecosystem';
    if (path.startsWith('/blogs/')) return 'blog-detail';
    if (path.startsWith('/blogs')) return 'blogs';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/contact')) return 'contact';
    if (path === '/404') return 'not-found';
    return 'default';
  };

  const activeVariant = getThemeMode();

  return (
    <div className={`fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none ${className}`}>
      {/* Base Canvas Surface Tone */}
      <div className="absolute inset-0 bg-[#F7F7F7]" />

      {/* Full-viewport grid layer, independent from the route animation. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#172940 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Dynamic Background Elements configured per variant */}
      <AnimatePresence mode="wait">
        {/* 1. HOME: Primary Navy & Warm Amber Nexus-Academy Apex */}
        {activeVariant === 'home' && (
          <motion.div
            key="bg-variant-home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Primary Navy Nebula */}
            <motion.div
              animate={{
                x: [0, 35, -25, 0],
                y: [0, -25, 20, 0],
                scale: [1, 1.12, 0.95, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-br from-[#344257]/15 via-[#172940]/10 to-transparent blur-[120px]"
            />
            {/* Accent Orange Flare */}
            <motion.div
              animate={{
                x: [0, -40, 20, 0],
                y: [0, 35, -20, 0],
                scale: [1, 1.15, 0.9, 1],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-[25%] -right-[12%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-bl from-[#D96725]/14 via-[#F2A97E]/12 to-transparent blur-[130px]"
            />
            {/* Soft Central Warmth */}
            <motion.div
              animate={{
                x: [0, 25, -30, 0],
                y: [0, -15, 30, 0],
              }}
              transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
              className="absolute bottom-[5%] left-[25%] w-[45vw] h-[45vw] max-w-[520px] max-h-[520px] rounded-full bg-gradient-to-tr from-[#344257]/08 via-[#F2A97E]/08 to-transparent blur-[110px]"
            />
          </motion.div>
        )}

        {/* 2. IMPACT: Metric Matrix & Velocity Emerald-Amber Ascent */}
        {activeVariant === 'impact' && (
          <motion.div
            key="bg-variant-impact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Impact Metric Matrix Overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(to right, #172940 1px, transparent 1px), linear-gradient(to bottom, #172940 1px, transparent 1px)`,
                backgroundSize: '48px 48px',
              }}
            />
            {/* Ascending Metric Velocity Flare */}
            <motion.div
              animate={{
                y: [0, -50, 0],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[8%] right-[8%] w-[52vw] h-[52vw] max-w-[580px] rounded-full bg-gradient-to-b from-[#10b981]/14 via-[#D96725]/12 to-transparent blur-[130px]"
            />
            {/* Foundation Slate Structural Mass */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[700px] rounded-full bg-gradient-to-tr from-[#172940]/18 via-[#344257]/10 to-transparent blur-[140px]"
            />
            {/* Center Outcome Pulse */}
            <motion.div
              animate={{
                scale: [0.95, 1.08, 0.95],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-[45%] left-[20%] w-[35vw] h-[35vw] max-w-[420px] rounded-full bg-gradient-to-br from-[#059669]/10 via-[#F2A97E]/08 to-transparent blur-[100px]"
            />
          </motion.div>
        )}

        {/* 3. SERVICES: Isometric Blueprint & Architectural Prism */}
        {activeVariant === 'services' && (
          <motion.div
            key="bg-variant-services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Isometric Engineering Blueprint Grid */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #344257 1.2px, transparent 0)`,
                backgroundSize: '24px 24px',
              }}
            />
            {/* Architectural Prism Glow */}
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-[10%] right-[5%] w-[48vw] h-[48vw] max-w-[560px] rounded-full bg-gradient-to-bl from-[#344257]/18 via-[#D96725]/12 to-transparent blur-[120px]"
            />
            {/* Deep Rigor & Delivery Core */}
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-[5%] -left-[5%] w-[52vw] h-[52vw] max-w-[620px] rounded-full bg-gradient-to-tr from-[#172940]/16 via-[#F2A97E]/10 to-transparent blur-[130px]"
            />
            {/* Technical Audit Cyan-Slate Accent */}
            <div className="absolute top-[40%] right-[30%] w-[38vw] h-[38vw] max-w-[440px] rounded-full bg-gradient-to-br from-[#0ea5e9]/08 via-[#172940]/06 to-transparent blur-[110px]" />
          </motion.div>
        )}

        {/* 4. ECOSYSTEM: Orbital Constellation & Dual Engine Planetary Cores */}
        {activeVariant === 'ecosystem' && (
          <motion.div
            key="bg-variant-ecosystem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Constellation Dual-Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(#D96725 1.5px, transparent 1.5px), radial-gradient(#172940 1px, transparent 1px)`,
                backgroundSize: '40px 40px, 20px 20px',
              }}
            />
            {/* Rotating Orbital Trajectory Ring */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute top-[15%] left-[20%] w-[600px] h-[600px] rounded-full border border-[#D96725]/10 pointer-events-none opacity-40"
            />
            {/* Nexus Amber Engine Core */}
            <motion.div
              animate={{
                scale: [1, 1.15, 0.95, 1],
                x: [0, 30, -20, 0],
              }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[18%] right-[12%] w-[46vw] h-[46vw] max-w-[520px] rounded-full bg-gradient-to-br from-[#D96725]/16 via-[#F2A97E]/14 to-transparent blur-[120px]"
            />
            {/* Academy Navy Foundation Orbit */}
            <motion.div
              animate={{
                scale: [1, 0.92, 1.1, 1],
                y: [0, -30, 25, 0],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-[8%] left-[8%] w-[56vw] h-[56vw] max-w-[640px] rounded-full bg-gradient-to-tr from-[#172940]/18 via-[#344257]/12 to-transparent blur-[130px]"
            />
            {/* CoreLabs Synapse Luminescence */}
            <div className="absolute top-[50%] left-[45%] w-[32vw] h-[32vw] max-w-[380px] rounded-full bg-gradient-to-r from-[#F2A97E]/10 via-[#172940]/08 to-transparent blur-[90px]" />
          </motion.div>
        )}

        {/* 5. BLOGS: Editorial Typographic Column Lines & Warm Amber Dispatches */}
        {activeVariant === 'blogs' && (
          <motion.div
            key="bg-variant-blogs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Editorial Typographic Column Stripe */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `linear-gradient(90deg, #172940 1px, transparent 1px)`,
                backgroundSize: '56px 100%',
              }}
            />
            {/* Warm Editorial Amber Luminescence */}
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[5%] left-[28%] w-[52vw] h-[52vw] max-w-[620px] rounded-full bg-gradient-to-b from-[#F2A97E]/16 via-[#D96725]/10 to-transparent blur-[140px]"
            />
            {/* Cool Anchor Slate */}
            <div className="absolute bottom-[-8%] right-[-8%] w-[48vw] h-[48vw] max-w-[560px] rounded-full bg-gradient-to-tl from-[#172940]/14 via-[#344257]/08 to-transparent blur-[125px]" />
            {/* Research Accent Warmth */}
            <div className="absolute top-[55%] left-[5%] w-[35vw] h-[35vw] max-w-[400px] rounded-full bg-gradient-to-tr from-[#6366f1]/08 via-[#F2A97E]/06 to-transparent blur-[105px]" />
          </motion.div>
        )}

        {/* 6. BLOG DETAIL: Technical Deep-Dive Blueprint & Reading Apex Halo */}
        {activeVariant === 'blog-detail' && (
          <motion.div
            key="bg-variant-blog-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Focused Reading Micro-Grid */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `radial-gradient(#344257 0.8px, transparent 0.8px)`,
                backgroundSize: '28px 28px',
              }}
            />
            {/* Reading Apex Halo */}
            <motion.div
              animate={{
                opacity: [0.8, 1, 0.8],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[-5%] left-[15%] w-[60vw] h-[45vw] max-w-[700px] rounded-full bg-gradient-to-b from-[#172940]/12 via-[#F2A97E]/10 to-transparent blur-[150px]"
            />
            {/* Subtitle Anchor Glow */}
            <div className="absolute bottom-[10%] right-[5%] w-[42vw] h-[42vw] max-w-[500px] rounded-full bg-gradient-to-tl from-[#D96725]/10 via-transparent to-transparent blur-[120px]" />
          </motion.div>
        )}

        {/* 7. ABOUT: Directorate Authority & Classical Dignified Heritage Lattice */}
        {activeVariant === 'about' && (
          <motion.div
            key="bg-variant-about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Classical Dignified Heritage Lattice */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(#172940 1.2px, transparent 1.2px)`,
                backgroundSize: '36px 36px',
              }}
            />
            {/* Directorate Sovereign Navy Flare */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                y: [0, 25, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-[10%] left-[8%] w-[58vw] h-[58vw] max-w-[680px] rounded-full bg-gradient-to-br from-[#172940]/20 via-[#344257]/14 to-transparent blur-[130px]"
            />
            {/* Executive Apricot Crest Luminescence */}
            <motion.div
              animate={{
                scale: [1, 0.95, 1],
                x: [0, -25, 0],
              }}
              transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-[38%] right-[-5%] w-[48vw] h-[48vw] max-w-[540px] rounded-full bg-gradient-to-bl from-[#D96725]/14 via-[#F2A97E]/12 to-transparent blur-[120px]"
            />
            {/* Pedagogy Heritage Foundation */}
            <div className="absolute bottom-[-10%] left-[25%] w-[45vw] h-[45vw] max-w-[520px] rounded-full bg-gradient-to-tr from-[#344257]/12 via-transparent to-transparent blur-[115px]" />
          </motion.div>
        )}

        {/* 8. CONTACT: Communication Transmission Radar Wave & Beacon */}
        {activeVariant === 'contact' && (
          <motion.div
            key="bg-variant-contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Communication Beacon Radial Matrix */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `radial-gradient(#D96725 1.2px, transparent 1.2px)`,
                backgroundSize: '28px 28px',
              }}
            />
            {/* Responsive Transmission Radar Wave */}
            <motion.div
              animate={{
                scale: [0.85, 1.4, 0.85],
                opacity: [0.35, 0.75, 0.35],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[18%] right-[18%] w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#D96725]/18 via-[#F2A97E]/14 to-transparent blur-[110px]"
            />
            {/* Grounding Base Slate */}
            <div className="absolute bottom-[-15%] -left-[10%] w-[62vw] h-[62vw] max-w-[720px] rounded-full bg-gradient-to-tr from-[#172940]/18 via-[#344257]/12 to-transparent blur-[140px]" />
          </motion.div>
        )}

        {/* 9. NOT FOUND: Diagnostic Amber-Crimson Halo & Void Aura */}
        {(activeVariant === 'not-found' || activeVariant === 'default') && (
          <motion.div
            key="bg-variant-not-found"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Diagnostic Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(#ef4444 1px, transparent 1px), radial-gradient(#172940 1px, transparent 1px)`,
                backgroundSize: '36px 36px',
              }}
            />
            <div className="absolute top-[25%] left-[25%] w-[50vw] h-[50vw] max-w-[500px] rounded-full bg-gradient-to-br from-[#ef4444]/10 via-[#D96725]/12 to-transparent blur-[130px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[55vw] h-[55vw] max-w-[550px] rounded-full bg-gradient-to-tl from-[#172940]/16 via-transparent to-transparent blur-[140px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
