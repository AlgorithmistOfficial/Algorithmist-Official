import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface MotionSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  stagger?: boolean;
}

export const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  id,
  ...props
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up': return { y: 28, x: 0 };
      case 'down': return { y: -28, x: 0 };
      case 'left': return { x: 28, y: 0 };
      case 'right': return { x: -28, y: 0 };
      case 'none': return { x: 0, y: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export const MotionStagger: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.08 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionStaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
