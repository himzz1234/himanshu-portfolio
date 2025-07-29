import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 hover:scale-110 cursor-pointer outline-none bg-white dark:bg-white/10 backdrop-blur-sm
        ring-1 ring-inset ring-white/30 dark:ring-white/20
        transition-all duration-200 rounded-full flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: 90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {theme === "light" ? (
          <FiSun
            color="#f7bd02"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
          />
        ) : (
          <IoMdMoon
            color="white"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
          />
        )}
      </motion.div>
    </button>
  );
}
