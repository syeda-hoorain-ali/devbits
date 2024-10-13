import { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  animation: 'fadeIn' | 'zoomIn' | 'left' | 'right' | 'top' | 'bottom';
  tagName: keyof typeof motion;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

const Animate = ({
  children,
  animation = 'fadeIn',
  tagName = 'div',
  delay = 0,
  duration = 0.8,
  className,
  style
}: Props) => {
  // Animation variants
  const variants = {
    fadeIn: { opacity: 1, y: 0 },
    zoomIn: { opacity: 1, scale: 1 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    top: { opacity: 1, y: 0 },
    bottom: { opacity: 1, y: 0 }
  };

  // Initial states based on animation type
  const initial = {
    fadeIn: { opacity: 0, y: 30 },
    zoomIn: { opacity: 0, scale: 0.8 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    top: { opacity: 0, y: 50 },
    bottom: { opacity: 0, y: -50 }
  };

  // Use the selected HTML tag (like motion.div, motion.h2)
  const MotionTag = motion[tagName] as React.ElementType;

  return (
    <MotionTag
      initial={initial[animation]} // Apply the initial state based on animation type
      animate={variants[animation]} // Apply the final state based on animation type
      transition={{ duration, delay }} // Animation duration
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is in view
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
};

export default Animate;
