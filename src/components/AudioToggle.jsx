import { useAudio } from "../context/AudioContext";
import { motion } from "motion/react";
import { FiVolumeX } from "react-icons/fi";
import { FaVolumeHigh } from "react-icons/fa6";

export default function AudioToggle() {
  const { playing, toggle } = useAudio();

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute ambience" : "Play ambience"}
      className="
        w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
        rounded-full flex items-center justify-center cursor-pointer outline-none hover:scale-110
        bg-white dark:bg-white/10 backdrop-blur-sm
        ring-1 ring-inset ring-white/30 dark:ring-white/20
        transition-all duration-200
      "
    >
      <motion.div
        key={playing ? "on" : "off"}
        initial={{ rotate: 90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {playing ? (
          <FaVolumeHigh className="text-emerald-400 dark:text-emerald-300 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        ) : (
          <FiVolumeX className="text-rose-200 dark:text-rose-300 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        )}
      </motion.div>
    </button>
  );
}
