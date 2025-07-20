import { motion } from "motion/react";
import birdImg from "../../assets/images/bird.png";

export function Bird({ className, flip = false, opacity = 0.4 }) {
  return (
    <motion.img
      src={birdImg}
      alt=""
      aria-hidden="true"
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        opacity,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    />
  );
}
