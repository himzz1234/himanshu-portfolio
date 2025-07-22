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

  const hoverCtx = { rest: {}, hover: {} };

  const tipVariants = {
    rest: { opacity: 0, y: 0 },
    hover: {
      opacity: 1,
      y: -60,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`relative w-fit ${className} `}
      variants={baseEntrance}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        variants={hoverCtx}
        initial="rest"
        whileHover="hover"
        className="relative w-fit"
      >
        <motion.img
          src={src}
          alt={title}
          className="relative z-20"
          {...continuousAnim}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full z-[1] pointer-events-none">
          <motion.div
            variants={tipVariants}
            className="flex flex-col items-center pointer-events-none"
          >
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
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
