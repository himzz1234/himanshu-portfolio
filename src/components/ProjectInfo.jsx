import { useState } from "react";
import { IoLogoGithub, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import titleBoard from "../assets/images/title_board_1.png";

export default function ProjectInfo({
  title,
  description,
  stack = [],
  features = [],
  primaryColor,
  demoLink,
  githubLink,
}) {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <div className="text-[#2B4C6F] dark:text-[#e0e0e0] font-body px-2 sm:px-6">
      {/* Title Board */}
      {/* <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-60 md:w-72 lg:w-80 h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center">
        <img
          src={titleBoard}
          alt="Title Board"
          className="w-full h-full absolute inset-0 object-contain drop-shadow-xl"
        />
        <h2
          className="font-bold font-sans uppercase tracking-tight text-[clamp(1.4rem,4vw,2.4rem)] text-lg sm:text-2xl md:text-3xl lg:text-4xl z-10 text-center"
          style={{
            color: "#3f1f0d",
            mixBlendMode: "multiply",
            opacity: 0.9,
          }}
        >
          {title}
        </h2>
      </div> */}

      <div>
        <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold leading-snug text-[#1E3A8A] dark:text-blue-100">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg font-body italic font-light leading-relaxed text-[#2D3748] dark:text-[#cbd5e0]">
          {description}
        </p>

        {/* Accordions for small screens */}
        <div className="sm:hidden mt-5 space-y-3 text-base">
          {[
            { key: "stack", label: "Tech Stack", data: stack },
            { key: "features", label: "Key Features", data: features },
          ].map(({ key, label, data }) => (
            <div
              key={key}
              className="bg-white/50 dark:bg-[#141d2c]/50 backdrop-blur-lg rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-4 py-2 font-body font-semibold tracking-wide text-base flex justify-between items-center text-[#38477e] dark:text-[#e0e0e0]"
                onClick={() => toggle(key)}
              >
                {label}
                {openKey === key ? <IoChevronUp /> : <IoChevronDown />}
              </button>

              <AnimatePresence initial={false}>
                {openKey === key && (
                  <motion.ul
                    key={key}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={accordionVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-4 pb-3 space-y-1 overflow-hidden"
                  >
                    {data.map((item, i) => (
                      <li key={i} className="text-sm dark:text-gray-400">
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Side-by-side on larger screens */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-4 mt-5 text-base">
          <div className="bg-white/50 dark:bg-[#141d2c]/50 backdrop-blur-lg p-3 rounded-xl">
            <h4 className="font-body font-semibold text-lg tracking-wide text-[#1A202C] dark:text-[#e0e0e0]">
              Tech Stack
            </h4>
            <ul className="mt-2 list-inside space-y-1 text-[#4A5568] dark:text-gray-400">
              {stack.map((tech, i) => (
                <li
                  key={i}
                  className="text-sm font-body leading-relaxed text-[#4A5568] dark:text-gray-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/50 dark:bg-[#141d2c]/50 backdrop-blur-lg p-3 rounded-xl">
            <h4 className="font-body font-semibold text-lg tracking-wide text-[#1A202C] dark:text-[#e0e0e0]">
              Key Features
            </h4>
            <ul className="mt-2 list-inside space-y-1 text-[#4A5568] dark:text-gray-400">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="text-sm font-body leading-relaxed text-[#4A5568] dark:text-gray-400"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {(demoLink || githubLink) && (
          <div className="mt-5">
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-medium tracking-wide text-sm sm:text-base bg-white/50 dark:bg-[#141d2c]/70 backdrop-blur-lg px-4 py-2 rounded-lg hover:bg-[#3182CE] hover:text-white dark:hover:bg-[#4a68a1] transition text-[#1a1a1a] dark:text-white"
                >
                  Live Demo
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  <div className="font-body font-medium tracking-wide text-sm sm:text-base bg-white/50 dark:bg-[#141d2c]/70 backdrop-blur-lg flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-[#3182CE] hover:text-white dark:hover:bg-[#4a68a1] transition text-[#1a1a1a] dark:text-white">
                    <IoLogoGithub size={18} />
                    <span>Github</span>
                  </div>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
