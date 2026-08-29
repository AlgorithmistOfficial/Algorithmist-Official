import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  offsetY?: number;
  threshold?: number;
}

/**
 * ScrollReveal Component
 * Uses a one-shot viewport observer so revealed sections do not stay subscribed
 * to scroll progress after entering the viewport.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  id,
  delay = 0,
  offsetY = 32,
}) => {
  return (
    <div id={id} className={`w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: offsetY }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.65,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
