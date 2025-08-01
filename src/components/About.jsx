import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useAnimation,
  useMotionValueEvent,
} from "motion/react";
import cloud7 from "../assets/images/cloud_7.png";
import cloudLarge from "../assets/images/cloud_large.png";
import sparkle1 from "../assets/images/sparkle_star_1.png";
import board3 from "../assets/images/board_frontend.png";
import board4 from "../assets/images/board_backend.png";
import { useTheme } from "../context/ThemeContext";
import { Cloud } from "./visual/Cloud";
import { Bird } from "./visual/Bird";
import { birdsConfig, sparkleConfig } from "../config/aboutVisuals";
import { Sparkle } from "./visual/Sparkle";

function About() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cloudRef = useRef(null);
  const [cloudHeight, setCloudHeight] = useState(210);

  useEffect(() => {
    const updateHeight = () => {
      if (cloudRef.current) {
        setCloudHeight(cloudRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const cardControls = useAnimation();
  const boardControls = useAnimation();

  useMotionValueEvent(scrollYProgress, "change", async (latest) => {
    const threshold = window.innerWidth < 640 ? 0.05 : 0.25;

    if (latest >= threshold) {
      await boardControls.start({
        y: "-25%",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
      });

      await boardControls.start({
        y: "-30%",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 12,
        },
      });

      await cardControls.start({
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      await boardControls.start({
        y: "-110%",
        transition: { duration: 0.4, ease: "easeOut" },
      });

      await cardControls.start({
        opacity: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  });

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden h-[50vh] sm:h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20"
    >
      <Cloud
        lightSrc={cloud7}
        className="hidden xs:block top-[10%] left-[5%] w-20 sm:w-28 md:w-32 lg:w-36 opacity-20 dark:opacity-10 dark:brightness-150 dark:contrast-125 dark:mix-blend-screen"
        driftX={10}
        driftDuration={7.5}
      />

      <Cloud
        lightSrc={cloud7}
        className="hidden xs:block top-[20%] right-[10%] w-20 sm:w-28 md:w-32 lg:w-36 opacity-25 dark:opacity-15 dark:brightness-150 dark:contrast-125 dark:mix-blend-screen"
        driftX={-15}
        driftDuration={5}
      />

      <Cloud
        lightSrc={cloud7}
        className="hidden xs:block top-[65%] left-[15%] w-20 sm:w-28 md:w-32 lg:w-36 opacity-15 dark:opacity-5 dark:brightness-150 dark:contrast-125 dark:mix-blend-screen"
        driftX={8}
        driftDuration={8}
      />

      <Cloud
        lightSrc={cloud7}
        className="hidden xs:block bottom-[15%] right-[8%] w-20 sm:w-28 md:w-32 lg:w-36 opacity-10 dark:opacity-5 dark:brightness-150 dark:contrast-125 dark:mix-blend-screen"
        driftX={-12}
        driftDuration={8}
      />

      {theme === "light" &&
        birdsConfig.map((b, i) => <Bird key={i} {...b} animate={false} />)}

      <div
        className="relative w-full text-center z-50"
        style={{ height: `${cloudHeight}px` }}
      >
        <img
          ref={cloudRef}
          onLoad={() => {
            if (cloudRef.current) setCloudHeight(cloudRef.current.offsetHeight);
          }}
          src={theme === "light" ? cloudLarge : cloudLarge}
          alt="Large Cloud"
          className="absolute top-0 left-1/2 -translate-x-1/2 lg:w-[min(900px,100%)] w-[100%] max-w-full dark:brightness-[.75] dark:contrast-[1.22] dark:hue-rotate-[215deg] dark:saturate-[0]"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center px-4 sm:px-0 text-center w-full">
          <h2 className="sr-only">About Me</h2>
          <h3
            style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)" }}
            className="font-heading text-base sm:text-3xl md:text-4xl lg:text-5xl mt-4 sm:mt-10 font-semibold text-[#6b9ac4] dark:text-sky-700 sm:drop-shadow-sm"
            aria-hidden="true"
          >
            Who’s in the Basket?
          </h3>

          <p className="font-body font-light mt-2 text-xs text-[#427FA3] dark:text-sky-700 block sm:hidden max-w-[90vw] px-2">
            Developer from India crafting playful web magic from hand rolled
            HTML to full stack apps that connects, delights, and stays lightning
            fast.
          </p>

          <p className="font-body font-light hidden sm:block mt-4 sm:text-lg md:text-xl leading-relaxed text-[#427FA3] dark:text-sky-700 sm:max-w-xl md:max-w-2xl px-2 sm:px-0">
            I’m a <span className="font-medium">developer</span> from India who
            loves turning small ideas into shipped products. From hand rolled
            HTML to fullstack apps, I focus on interfaces that feel fast,
            accessible, and a little playful.
          </p>
        </div>

        {/* Boards - Left */}
        <div className="absolute top-full left-20 sm:left-[45%] sm:-translate-x-full -translate-x-1/2 flex flex-col items-center -z-20">
          <motion.img
            src={board3}
            alt="Hanging Board"
            animate={boardControls}
            initial={{ y: "-110%" }}
            className="w-28 h-16 xs:w-32 xs:h-18 sm:w-52 sm:h-auto object-cover sm:object-contain object-bottom"
          />
          <motion.div
            animate={cardControls}
            initial={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 text-[#276490] md:-mt-3"
          >
            {["React", "Typescript", "Nextjs", "Tailwind"].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`font-body font-medium tracking-wide bg-[#fafafa] text-[#276490] dark:bg-[#1a3a5a] dark:text-[#a8d4ff] border border-[#c2dfff] dark:border-[#2a4a6a] flex items-center justify-center rounded-sm sm:rounded-md px-2 py-1.5 text-xs xs:text-sm md:text-base ${
                  i === 3 ? "col-span-1 sm:col-span-1 sm:col-start-2" : ""
                }`}
              >
                <p>{tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Boards - Right */}
        <div className="absolute top-full right-20 sm:right-[45%] sm:translate-x-full translate-x-1/2 flex flex-col items-center -z-20">
          <motion.img
            src={board4}
            alt="Hanging Board"
            animate={boardControls}
            initial={{ y: "-110%" }}
            className="w-28 h-16 xs:w-32 xs:h-18 sm:w-52 sm:h-auto object-cover sm:object-contain object-bottom"
          />
          <motion.div
            animate={cardControls}
            initial={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 text-[#276490] md:-mt-3"
          >
            {["Node.js", "MongoDB", "REST", "Express"].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`font-body font-medium tracking-wide border bg-[#fafafa] text-[#276490] dark:bg-[#0f2f4b] dark:text-[#a8d4ff] border-[#c2dfff] dark:border-[#1c456c] flex items-center justify-center rounded-sm sm:rounded-md px-2 py-1.5 text-xs xs:text-sm md:text-base ${
                  i === 3 ? "col-span-1 sm:col-span-1 sm:col-start-2" : ""
                }`}
              >
                <p>{tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {theme === "dark" &&
        sparkleConfig.map((s) => (
          <Sparkle
            key={s.id}
            src={sparkle1}
            className={s.className}
            yKeyframes={s.y}
            duration={s.dur}
            reduceMotion={prefersReducedMotion}
          />
        ))}
    </div>
  );
}

export default React.memo(About);
