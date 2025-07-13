"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const translateLeft = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);
  const translateRight = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden flex justify-center items-center h-screen px-4 sm:px-0"
    >
      <motion.div
        className="absolute top-[55%] left-1/2 -translate-x-1/2 text-center z-[1] w-full max-w-[90vw] sm:max-w-none"
        style={{ opacity }}
      >
        <motion.p
          className="text-2xl sm:text-5xl font-bold bg-gradient-to-br from-white to-blue-100 text-transparent bg-clip-text eb-garamond italic relative"
          style={{ x: translateLeft }}
        >
          The Adventures of
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-8xl font-bold bg-gradient-to-br from-white to-blue-100 text-transparent bg-clip-text drop-shadow-md relative"
          style={{ x: translateRight }}
        >
          HIMANSHU
        </motion.h1>

        <motion.p
          className="text-sm sm:text-xl font-sans font-bold bg-gradient-to-br from-white to-blue-100 text-transparent bg-clip-text relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ opacity }}
        >
          Building playful, real-time web experiences
        </motion.p>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 5 }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <motion.p
            className="mt-10 sm:mt-16 text-xs sm:text-lg font-sans font-bold bg-gradient-to-br from-white to-blue-100 text-transparent bg-clip-text relative"
            style={{ opacity }}
          >
            Help me descend
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Cloud Images */}
      <motion.img
        src="src/assets/images/cloud_8.png"
        alt="Small cloud"
        className="absolute top-10 right-10 w-16 sm:w-24 opacity-25 z-[2]"
        animate={{ x: 10 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="src/assets/images/cloud_7.png"
        alt="Small cloud"
        className="absolute top-[30%] left-10 w-20 sm:w-32 opacity-30 z-[1]"
        animate={{ x: -10 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Bottom banners */}
      <motion.div
        style={{
          backgroundImage: `url(src/assets/images/cloud_banner_left.png)`,
          backgroundPosition: "bottom left",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute bottom-0 left-0 h-[250px] w-[250px] sm:h-[750px] sm:w-[750px] z-[3] pointer-events-none filter drop-shadow-xl blur-[1px] opacity-90"
      />

      <motion.div
        style={{
          backgroundImage: `url(src/assets/images/cloud_banner_right.png)`,
          backgroundPosition: "bottom right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute bottom-0 right-0 h-[200px] w-[200px] sm:h-[600px] sm:w-[600px] z-[3] pointer-events-none filter drop-shadow-md blur-[0.5px] opacity-80"
      />
    </div>
  );
}
