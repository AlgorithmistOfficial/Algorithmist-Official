import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { Clock, Rocket, Award, Code2, TrendingUp, Sparkles } from 'lucide-react';
import { ImpactStat } from '../../types';

interface AnimatedStatCounterProps {
  stat: ImpactStat;
  index: number;
}

// Helper to parse numeric part and formatting from stat string
const parseStatValue = (valStr: string) => {
  // e.g. '4,500+' -> { numeric: 4500, prefix: '', suffix: '+', isThousands: false }
  // '25k+' -> { numeric: 25, prefix: '', suffix: 'k+', isThousands: true }
  // '94%' -> { numeric: 94, prefix: '', suffix: '%', isThousands: false }
  // '120+' -> { numeric: 120, prefix: '', suffix: '+', isThousands: false }
  const cleanStr = valStr.trim();
  
  if (cleanStr.includes('k')) {
    const num = parseFloat(cleanStr.replace(/[^0-9.]/g, ''));
    return { target: num, prefix: '', suffix: 'k+', decimals: cleanStr.includes('.') ? 1 : 0 };
  }
  
  if (cleanStr.includes('%')) {
    const num = parseFloat(cleanStr.replace(/[^0-9.]/g, ''));
    return { target: num, prefix: '', suffix: '%', decimals: 0 };
  }
  
  const num = parseFloat(cleanStr.replace(/[^0-9.]/g, ''));
  const hasPlus = cleanStr.includes('+');
  return { target: num, prefix: '', suffix: hasPlus ? '+' : '', decimals: 0 };
};

// Map icons to stat index or keywords
const getStatIcon = (index: number, label: string) => {
  const lower = label.toLowerCase();
  if (lower.includes('hour') || lower.includes('mentor')) return Clock;
  if (lower.includes('project') || lower.includes('ship')) return Rocket;
  if (lower.includes('placement') || lower.includes('hiring') || lower.includes('success')) return Award;
  if (lower.includes('problem') || lower.includes('algorithm')) return Code2;
  
  const icons = [Clock, Rocket, Award, Code2];
  return icons[index % icons.length] || Sparkles;
};

export const AnimatedStatCounter: React.FC<AnimatedStatCounterProps> = ({ stat, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState('0');
  
  const { target, prefix, suffix } = parseStatValue(stat.value);
  const IconComponent = getStatIcon(index, stat.label);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 35,
    stiffness: 75,
    duration: 1.8,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      const rounded = Math.round(latest);
      // Format with commas if >= 1000
      const formattedNumber = rounded >= 1000 ? rounded.toLocaleString('en-US') : rounded.toString();
      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);
    });
    return () => unsubscribe();
  }, [springValue, prefix, suffix]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.92,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring',
            damping: 24,
            stiffness: 120,
            delay: index * 0.12,
          },
        },
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group relative p-5 sm:p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D96725]/40 transition-colors shadow-lg backdrop-blur-xs flex flex-col justify-between h-full"
    >
      {/* Top Ambient Glow on Card Hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D96725]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="space-y-3 relative z-10">
        {/* Metric Header & Icon */}
        <div className="flex items-center justify-between gap-2">
          <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-[#D96725]/20 border border-white/10 group-hover:border-[#D96725]/30 text-[#F2A97E] flex items-center justify-center transition-colors">
            <IconComponent className="w-4 h-4" />
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#D96725]/20 text-[#F2A97E] border border-[#D96725]/30">
            <TrendingUp className="w-2.5 h-2.5" />
            {stat.growth}
          </span>
        </div>

        {/* Big Animated Number Counter */}
        <div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F2A97E] tracking-tight font-mono">
            {isInView ? displayValue : `${prefix}0${suffix}`}
          </div>
          <h4 className="text-sm font-bold text-white tracking-wide mt-1 group-hover:text-[#F2A97E] transition-colors">
            {stat.label}
          </h4>
        </div>
      </div>

      {/* Subtext Description */}
      <div className="pt-3 mt-3 min-h-[4.5rem] border-t border-white/10 relative z-10">
        <p className="text-xs text-slate-300 font-light leading-relaxed">
          {stat.subtext}
        </p>
      </div>
    </motion.div>
  );
};
