import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function ProjectBalloon({
  src,
  className = "",
  title,
  timeline,
  primaryColor,
  externalFloat,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const baseEntrance = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const continuousAnim = externalFloat || {
    animate: { y: [0, -10, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <motion.div
      ref={ref}
      className={`relative group w-fit ${className}`}
      variants={baseEntrance}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.img src={src} alt={title} className="z-10" {...continuousAnim} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-14 opacity-0 group-hover:opacity-100 whitespace-nowrap flex flex-col items-center transition-opacity duration-300 pointer-events-none">
        <p
          style={{ color: primaryColor }}
          className="text-lg font-medium leading-none"
        >
          {timeline}
        </p>
        <p
          style={{ color: primaryColor }}
          className="text-base leading-tight mt-1"
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
}
