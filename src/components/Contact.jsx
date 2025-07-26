import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import cityScape from "../assets/images/cityscape_4.png";
import cityScapeDark from "../assets/images/cityscape_4_dark_2.png";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const socials = [
  {
    href: "https://github.com/himzz1234",
    label: "GitHub",
    Icon: IoLogoGithub,
    hover: "hover:text-[#5a3a25] dark:hover:text-[#93c5fd]",
  },
  {
    href: "https://www.linkedin.com/in/himanshu-singh-ab19161b2",
    label: "LinkedIn",
    Icon: IoLogoLinkedin,
    hover: "hover:text-[#0a66c2] dark:hover:text-[#3b82f6]",
  },
  {
    href: "https://www.instagram.com/whyhimanshuwhy",
    label: "Instagram",
    Icon: IoLogoInstagram,
    hover: "hover:text-[#e1306c] dark:hover:text-[#f77737]",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

function Contact() {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full font-body h-[80vh] sm:h-screen overflow-hidden flex flex-col items-center justify-start pt-10"
    >
      {/* Heading + Copy */}
      <div className="relative z-[1] w-full max-w-3xl px-6 text-center">
        <h2 id="contactHeading" className="sr-only font-heading">
          Contact Us
        </h2>
        <motion.h2
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-[#7b4b2d] dark:text-[#e2edff]"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="font-light mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto
                     text-[#6d4327] dark:text-[#c1d8ff]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
        >
          Thanks for riding along. Want to chat, swap ideas, or build something?
          I’m one message away.
        </motion.p>
      </div>

      <ul className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 absolute left-20 top-[40%] sm:top-[55%] sm:left-[40%] sm:translate-x-[-50%] translate-x-[-50%] translate-y-1/2 z-50">
        {socials.map(({ href, label, Icon, hover }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`group relative
              w-11 h-11 sm:w-12 sm:h-12
              rounded-full flex items-center justify-center
              bg-[#ffd9b0]/30 dark:bg-[#1f2937]/40 backdrop-blur-sm
              text-[#7f4f30] dark:text-[#e2e8f0]
              transition-colors duration-300
              focus-visible:outline-none focus-visible:ring-4
              focus-visible:ring-amber-300/40 dark:focus-visible:ring-sky-500/40
              ${hover}`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />

              <span
                className="absolute opacity-0 group-hover:opacity-100
               -bottom-8 sm:-bottom-9
               left-1/2 -translate-x-1/2
               text-[10px] sm:text-xs md:text-sm
               text-[#7f4f30] dark:text-[#e2e8f0]
               bg-[#ffd9b0] dark:bg-[#1f2937]
               px-2 py-0.5 rounded
               whitespace-nowrap
               transition-all duration-300"
              >
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="absolute top-[30%] sm:top-[50%] right-1/2 sm:right-[35%] sm:left-auto translate-x-1/2 sm:translate-x-0">
        <a
          href="mailto:himanshuhim1230@gmail.com"
          className="text-[#7f4f30] dark:text-[#e2e8f0] font-medium text-sm sm:text-base md:text-lg bg-[#ffd9b0] dark:bg-[#1f2937] border border-[#ffc499] dark:border-[#4b5563] rounded-md px-4 py-2 shadow-[0_2px_6px_rgba(255,200,150,0.3)] dark:shadow-[0_2px_6px_rgba(255,255,255,0.05)] hover:bg-[#ffc894] active:bg-[#fcbf86] dark:hover:bg-[#374151] transition-all duration-200 ease-out"
        >
          Say Hello
        </a>
      </div>

      <div className="absolute inset-x-0 -bottom-10 pointer-events-none select-none mx-auto z-[1]">
        <img
          src={cityScape}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`w-full h-[800px] object-repeat object-cover sm:object-fill object-bottom
            ${
              theme === "dark"
                ? "opacity-60 brightness-[8%]"
                : "opacity-60 brightness-95"
            }`}
        />
      </div>

      {theme === "dark" && (
        <div className="absolute inset-x-0 -bottom-10 pointer-events-none select-none mx-auto z-[10]">
          <img
            src={cityScapeDark}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className={`w-full h-[800px] object-repeat object-cover sm:object-fill object-bottom opacity-70`}
          />
        </div>
      )}
    </section>
  );
}

export default React.memo(Contact);
