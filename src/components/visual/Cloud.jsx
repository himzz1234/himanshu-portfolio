import { motion, useTransform } from "motion/react";
import { useTheme } from "../../context/ThemeContext";

export function Cloud({
  lightSrc,
  darkSrc,
  className = "",
  driftX = 0,
  driftDuration = 6,
  scrollYProgress,
  yRange,
  reduceMotion = false,
  alt = "",
}) {
  const { theme } = useTheme();

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
        }
      : undefined;

  return (
    <motion.img
      src={theme === "light" ? lightSrc : darkSrc}
      alt={alt}
      aria-hidden={alt === "" ? "true" : undefined}
      className={`absolute pointer-events-none ${className}`}
      style={!reduceMotion ? { y } : undefined}
      animate={animate}
      transition={transition}
    />
  );
}
