"use client";
import React, { useRef, useCallback } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import ProjectBalloon from "./ProjectBalloon";
import ProjectInfo from "./ProjectInfo";
import { useModal } from "../context/ModalContext";
import { useTheme } from "../context/ThemeContext";

// Assets
import balloon12 from "../assets/images/balloon_12.png";
import balloon12Dark from "../assets/images/balloon_12_dark.png";
import balloon13 from "../assets/images/balloon_13.png";
import balloon13Dark from "../assets/images/balloon_13_dark.png";
import balloon14 from "../assets/images/balloon_14.png";
import balloon16 from "../assets/images/balloon_16.png";
import balloon17 from "../assets/images/balloon_17.png";
import balloon18 from "../assets/images/balloon_18.png";
import balloon14Dark from "../assets/images/balloon_14_dark.png";
import backgroundBalloon from "../assets/images/background_balloon.png";
import sparkle1 from "../assets/images/sparkle_1.png";
import cloud7 from "../assets/images/cloud_7.png";
import cloud7Dark from "../assets/images/cloud_7_dark.png";
import {
  backgroundBalloonsConfig,
  birdsConfig,
  sparklesConfig,
} from "../config/projectVisuals";
import { Bird } from "./visual/Bird";
import { Sparkle } from "./visual/Sparkle";
import { Cloud } from "./visual/Cloud";

const projects = [
  {
    key: "swadsathi",
    title: "SwadSathi",
    timeline: "2023–2024",
    primaryColor: "#6b5b95",
    pos: "top-[60%] sm:top-1/2 left-[25%] sm:left-[35%] -translate-x-1/2",
    size: "w-28 sm:w-48",
    srcLight: balloon18,
    srcDark: balloon12Dark,
    info: {
      description:
        "Real-time canteen ordering to cut queues. Students place & track, staff manage live.",
      stack: ["React", "Tailwind CSS", "Node.js", "Socket.io"],
      features: ["Live order tracking", "Admin dashboard", "Mobile-first UI"],
      githubLink: "https://github.com/himzz1234/SwadSathi",
    },
    delay: 0.25,
  },
  {
    key: "connect",
    title: "Connect",
    timeline: "2022–2023",
    primaryColor: "#2a9d8f",
    pos: "top-[25%] left-[20%] sm:left-[20%] -translate-x-1/2",
    size: "w-24 sm:w-32",
    srcLight: balloon17,
    srcDark: balloon14Dark,
    info: {
      description:
        "MERN social platform with live messaging, posts and scalable architecture.",
      stack: ["React.js", "Express.js", "Node.js", "MongoDB", "Socket.io"],
      features: [
        "Real-time messaging",
        "Auth & post APIs",
        "100+ users in 3 months",
      ],
      githubLink: "https://github.com/himzz1234/Connect",
      demoLink: "https://connect-nine-coral.vercel.app",
    },
    delay: 0.0,
  },
  {
    key: "sneakpeek",
    title: "SneakPeek",
    timeline: "2024–Present",
    primaryColor: "#e76f51",
    pos: "top-[25%] right-[20%] sm:right-[30%] translate-x-1/2",
    size: "w-28 sm:w-44",
    srcLight: balloon16,
    srcDark: balloon13Dark,
    info: {
      description:
        "Sneaker price comparison aggregator scraping multiple e‑commerce sources.",
      stack: ["Puppeteer", "Cheerio", "Node.js", "Next.js", "MongoDB"],
      features: [
        "Throttled scraping",
        "Cross‑site comparison",
        "Tracking & alerts",
      ],
      githubLink: "https://github.com/himzz1234/SneakPeek",
    },
    delay: 0.4,
  },
];

function Projects() {
  const { theme } = useTheme();
  const { openModal } = useModal();
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(containerRef, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const fgY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -30]
  );

  const midY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 40]
  );

  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80]);

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
  };

  const launchModal = useCallback(
    (p) =>
      openModal(
        <ProjectInfo
          title={p.title}
          description={p.info.description}
          stack={p.info.stack}
          features={p.info.features}
          githubLink={p.info.githubLink}
          demoLink={p.info.demoLink}
        />
      ),
    [openModal]
  );

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      ref={containerRef}
      id="projects"
      aria-labelledby="projectsHeading"
      className="relative w-full overflow-hidden flex justify-center h-[80vh] sm:h-screen font-sans"
    >
      {/* Heading */}
      <div className="absolute top-[4%] sm:top-[6%] md:left-1/2 md:-translate-x-1/2 flex flex-col items-center text-center px-4 z-[1] pointer-events-none">
        <h2 id="projectsHeading" className="sr-only">
          Projects
        </h2>
        <motion.h3
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#336F94] dark:text-[#e2edff]"
        >
          The Balloon Fleet
        </motion.h3>
        <motion.p
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          transition={{ delay: 0.25, duration: 0.75 }}
          className="mt-1 md:mt-3 text-sm sm:text-lg md:text-xl text-[#427FA3] dark:text-[#c1d8ff] max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed tracking-wide px-2"
        >
          Selected work & experiments
        </motion.p>
      </div>

      {/* Foreground Project Balloons */}
      <ul className="list-none m-0 p-0">
        {projects.map((p) => {
          const floatAnim = !prefersReducedMotion
            ? {
                animate: {
                  y: [0, -12, 0],
                  rotate: [0, -1.5, 1.2, 0],
                },
                transition: {
                  y: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: p.delay,
                  },
                  rotate: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: p.delay + 0.4,
                  },
                },
              }
            : {};

          return (
            <motion.li
              key={p.key}
              style={{ y: fgY }}
              className={`absolute ${p.pos} ${p.size} z-10 drop-shadow-xl`}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: p.delay }}
            >
              <motion.button
                type="button"
                onClick={() => launchModal(p)}
                className="group relative w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/40 rounded-lg cursor-pointer"
                whileHover={!reduceMotion ? { y: -10, scale: 1.05 } : undefined}
                whileTap={!reduceMotion ? { scale: 0.96 } : undefined}
                aria-label={`Open details for project ${p.title}`}
              >
                <ProjectBalloon
                  title={p.title}
                  primaryColor={p.primaryColor}
                  timeline={p.timeline}
                  src={theme === "light" ? p.srcLight : p.srcDark}
                  {...floatAnim}
                />
              </motion.button>
            </motion.li>
          );
        })}
      </ul>

      <motion.div
        style={{ y: midY }}
        className="absolute inset-0 pointer-events-none z-[2]"
        aria-hidden="true"
      >
        {birdsConfig.map((b, i) => (
          <Bird key={i} {...b} animate={false} />
        ))}

        {theme === "dark" &&
          sparklesConfig.map((s) => (
            <Sparkle
              key={s.id}
              src={sparkle1}
              className={s.className}
              yKeyframes={s.y}
              duration={s.dur}
              reduceMotion={prefersReducedMotion}
            />
          ))}
      </motion.div>

      <motion.div
        style={{ y: midY }}
        className="absolute inset-0 pointer-events-none z-[1]"
        aria-hidden="true"
      >
        <Cloud
          lightSrc={cloud7}
          darkSrc={cloud7Dark}
          className="top-[15%] sm:top-[15%] left-[10%] w-12 sm:w-20 md:w-24 lg:w-28 xl:w-32 dark:opacity-45"
          driftX={20}
          driftDuration={5}
          reduceMotion={prefersReducedMotion}
        />

        <Cloud
          lightSrc={cloud7}
          darkSrc={cloud7Dark}
          className="top-[12.5%] right-[10%] sm:right-[20%] w-16 sm:w-24 md:w-28 lg:w-32 xl:w-36 opacity-80 dark:opacity-50"
          driftX={-15}
          driftDuration={7.5}
          reduceMotion={prefersReducedMotion}
        />
      </motion.div>

      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        {backgroundBalloonsConfig.map((b, i) => (
          <motion.img
            key={i}
            src={backgroundBalloon}
            alt=""
            aria-hidden="true"
            className={`absolute ${b.className}`}
            animate={!reduceMotion ? { y: [0, b.y[0], 0] } : undefined}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            loading="lazy"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default React.memo(Projects);
