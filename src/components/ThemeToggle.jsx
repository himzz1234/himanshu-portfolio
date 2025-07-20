import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";
import sun from "../assets/icons/sun.png";
import moon from "../assets/icons/moon.png";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 cursor-pointer outline-none bg-white dark:bg-sky-900 rounded-full flex items-center justify-center transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: 90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {theme === "light" ? (
          <img src={sun} className="w-6 h-6" />
        ) : (
          <img src={moon} className="w-6 h-6" />
        )}
      </motion.div>
    </button>
  );
}
