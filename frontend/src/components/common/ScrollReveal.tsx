import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

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
 * Leverages Framer Motion's `useScroll`, `useTransform`, and `motion.div` to
 * produce subtle, high-fidelity fade-in and slide-up animations as sections
 * enter the viewport during scrolling.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  id,
  delay = 0,
  offsetY = 32,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.95', 'start 0.60'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [offsetY, 0]);

  return (
    <div ref={containerRef} id={id} className={`w-full ${className}`}>
      <motion.div
        style={{ opacity, y }}
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
