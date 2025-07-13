import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function FloatingBalloon({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible").then(() => {
        controls.start("float");
      });
    }
  }, [isInView, controls]);

  const balloonVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.img
      ref={ref}
      src={src}
      className={className}
      initial="hidden"
      animate={controls}
      variants={balloonVariants}
      onAnimationComplete={() => controls.start("float")}
    />
  );
}
