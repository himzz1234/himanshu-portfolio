import { motion, useTransform } from "framer-motion";

export function Cloud({
  lightSrc,
  className = "",
  driftX = 0,
  driftDuration = 6,
  delay = 0,
  style = {},
  scrollYProgress,
  yRange,
  reduceMotion = false,
  alt = "",
}) {
  const y =
    scrollYProgress && yRange
      ? useTransform(scrollYProgress, [0, 1], yRange)
      : undefined;

  const animate = !reduceMotion && driftX !== 0 ? { x: driftX } : undefined;

  const transition =
    !reduceMotion && driftX !== 0
      ? {
          duration: driftDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        }
      : undefined;

  return (
    <motion.img
      src={lightSrc}
      alt={alt}
      aria-hidden={alt === "" ? "true" : undefined}
      className={`absolute pointer-events-none ${className}`}
      style={!reduceMotion ? { ...style, y } : style}
      animate={animate}
      transition={transition}
    />
  );
}
