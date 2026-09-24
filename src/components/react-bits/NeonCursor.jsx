// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import './NeonCursor.css';

// Over these elements the neon cursor fades out and the native pointer takes over.
const INTERACTIVE =
  'a, button, input, textarea, select, label, summary, [role="button"], [data-hover="true"]';

const NeonCursor = () => {
  // Motion values update the DOM directly, so mouse movement never re-renders React.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const mainX = useSpring(x, { damping: 20, stiffness: 400, mass: 0.5 });
  const mainY = useSpring(y, { damping: 20, stiffness: 400, mass: 0.5 });
  const trailX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.8 });
  const trailY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.8 });
  const glowX = useSpring(x, { damping: 40, stiffness: 150, mass: 1 });
  const glowY = useSpring(y, { damping: 40, stiffness: 150, mass: 1 });

  const [inWindow, setInWindow] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setInWindow(true);
    };
    // pointerover fires on every element entered, so it covers both entering and leaving targets.
    const handleOver = (e) => {
      setIsHovering(!!e.target.closest?.(INTERACTIVE));
    };
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);
    const handleLeave = () => setInWindow(false);

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerover', handleOver, { passive: true });
    window.addEventListener('pointerdown', handleDown);
    window.addEventListener('pointerup', handleUp);
    document.documentElement.addEventListener('pointerleave', handleLeave);
    window.addEventListener('blur', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerover', handleOver);
      window.removeEventListener('pointerdown', handleDown);
      window.removeEventListener('pointerup', handleUp);
      document.documentElement.removeEventListener('pointerleave', handleLeave);
      window.removeEventListener('blur', handleLeave);
    };
  }, [x, y]);

  const visible = inWindow && !isHovering;

  return (
    <motion.div
      className='neon-cursor-container'
      aria-hidden='true'
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Main cursor dot */}
      <motion.div
        className='cursor-main'
        style={{ x: mainX, y: mainY }}
        animate={{ scale: isClicking ? 0.8 : 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 400 }}
      />

      {/* Trailing circle */}
      <motion.div
        className='cursor-trail'
        style={{ x: trailX, y: trailY }}
        animate={{ scale: isClicking ? 0.9 : 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      />

      {/* Outer glow */}
      <motion.div className='cursor-glow' style={{ x: glowX, y: glowY }} />
    </motion.div>
  );
};

export default NeonCursor;
