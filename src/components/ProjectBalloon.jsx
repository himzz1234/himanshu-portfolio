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
          className="relative z-20 dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] dark:brightness-120 dark:saturate-110"
          {...continuousAnim}
        />

        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full z-[1] pointer-events-none">
          <motion.div
            variants={tipVariants}
            className="flex flex-col items-center pointer-events-none"
          >
            <p
              className="text-sm sm:text-base font-body font-medium leading-none tracking-wide dark:!text-[#FAFAFA]"
              style={{ color: primaryColor }}
            >
              {timeline}
            </p>

            <p
              className="text-lg sm:text-xl font-heading italic leading-snug mt-1 dark:!text-[#FAFAFA]"
              style={{ color: primaryColor }}
            >
              {title}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
