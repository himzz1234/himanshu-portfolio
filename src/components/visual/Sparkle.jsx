import { motion } from "motion/react";

export function Sparkle({
  src,
  className,
  yKeyframes,
  duration,
  reduceMotion = false,
}) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      className={`absolute pointer-events-none ${className}`}
      animate={!reduceMotion ? { y: yKeyframes } : undefined}
      transition={
        !reduceMotion
          ? { duration, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
    />
  );
}
