"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import cloud8 from "../assets/images/cloud_8.png";
import cloud8Dark from "../assets/images/cloud_8_dark.png";
import cloud7 from "../assets/images/cloud_7.png";
import cloud7Dark from "../assets/images/cloud_7_dark.png";
import cloudBannerLeft from "../assets/images/cloud_banner_left.png";
import cloudBannerLeftDark from "../assets/images/cloud_banner_left_dark.png";
import cloudBannerRight from "../assets/images/cloud_banner_right.png";
import cloudBannerRightDark from "../assets/images/cloud_banner_right_dark.png";
import { useTheme } from "../context/ThemeContext";
import sparkle1 from "../assets/images/sparkle_1.png";
import { Cloud } from "./visual/Cloud";
import { sparkleConfigs } from "../config/heroVisuals";
import { Sparkle } from "./visual/Sparkle";

export default function Home() {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const translateLeft = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);
  const translateRight = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full overflow-hidden flex justify-center items-center h-[80vh] sm:h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
    >
      <motion.div
        className="absolute top-[55%] left-1/2 -translate-x-1/2 text-center w-full max-w-[90vw] sm:max-w-none"
        style={!prefersReducedMotion ? { opacity } : undefined}
      >
        {/* Single semantic h1 */}
        <h1 className="relative mb-4">
          <motion.span
            className="block font-eb-garamond font-bold italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-50 dark:text-blue-200 sm:mb-1"
            style={!prefersReducedMotion ? { x: translateLeft } : undefined}
          >
            The Adventures of
          </motion.span>
          <motion.span
            className="block font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-bold text-white dark:text-blue-100"
            style={!prefersReducedMotion ? { x: translateRight } : undefined}
          >
            HIMANSHU
          </motion.span>

          <motion.p
            className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal font-body text-blue-50/90 dark:text-blue-200"
            initial={!prefersReducedMotion ? { opacity: 0 } : false}
            animate={!prefersReducedMotion ? { opacity: 1 } : undefined}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={!prefersReducedMotion ? { opacity } : undefined}
          >
            Building web experiences, one bug at a time.
          </motion.p>
        </h1>

        {/* Scroll prompt */}
        {!prefersReducedMotion && (
          <motion.div
            aria-hidden="true"
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
              className="mt-10 text-sm md:text-base lg:text-lg font-medium font-serif italic tracking-wide text-white/80 dark:text-blue-300"
              style={{ opacity }}
            >
              Scroll for the journey
            </motion.p>
          </motion.div>
        )}
      </motion.div>

      {/* Sparkles (decorative) */}
      {theme === "dark" &&
        !prefersReducedMotion &&
        sparkleConfigs.map((s) => (
          <Sparkle
            key={s.id}
            src={sparkle1}
            className={s.className}
            yKeyframes={s.y}
            duration={s.dur}
            reduceMotion={prefersReducedMotion}
          />
        ))}

      <Cloud
        lightSrc={cloud8}
        darkSrc={cloud8Dark}
        className="top-10 right-[10%] w-12 sm:w-20 md:w-24 lg:w-28 xl:w-32 opacity-25 dark:opacity-20"
        driftX={10}
        driftDuration={6}
        scrollYProgress={scrollYProgress}
        yRange={[0, 80]}
        reduceMotion={prefersReducedMotion}
      />

      <Cloud
        lightSrc={cloud7}
        darkSrc={cloud7Dark}
        className="top-[30%] left-[10%] w-16 sm:w-24 md:w-28 lg:w-32 xl:w-36 opacity-30 dark:opacity-20"
        driftX={-10}
        driftDuration={5}
        scrollYProgress={scrollYProgress}
        yRange={[0, 80]}
        reduceMotion={prefersReducedMotion}
      />

      <Cloud
        lightSrc={cloudBannerLeft}
        darkSrc={cloudBannerLeft}
        className="bottom-0 left-0 z-50
          h-[160px] w-[160px]
          sm:h-[220px] sm:w-[220px]
          md:h-[300px] md:w-[300px]
          lg:h-[400px] lg:w-[400px]
          xl:h-[500px] xl:w-[500px]
          object-contain object-left-bottom dark:brightness-[.75] dark:contrast-[1.22] dark:hue-rotate-[215deg] dark:saturate-[0]
        "
        scrollYProgress={scrollYProgress}
        yRange={["0%", "15%"]}
        reduceMotion={prefersReducedMotion}
      />

      <Cloud
        lightSrc={cloudBannerRight}
        darkSrc={cloudBannerRight}
        className="bottom-0 right-0 z-50
          h-[160px] w-[160px]
          sm:h-[240px] sm:w-[240px]
          md:h-[320px] md:w-[320px]
          lg:h-[420px] lg:w-[420px]
          xl:h-[500px] xl:w-[500px]
          object-contain object-right-bottom dark:brightness-[.75] dark:contrast-[1.22] dark:hue-rotate-[215deg] dark:saturate-[0]
        "
        scrollYProgress={scrollYProgress}
        yRange={["0%", "15%"]}
        reduceMotion={prefersReducedMotion}
      />
    </section>
  );
}
