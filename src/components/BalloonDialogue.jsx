// components/BalloonDialogue.jsx
import { motion } from "framer-motion";

export default function BalloonDialogue({ text }) {
  return (
    <motion.div
      className="absolute left-full top-1/2 ml-4 -translate-y-1/2 w-80 text-sm sm:text-base"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Bubble box */}
      <div className="relative p-4 rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/30 shadow-lg">
        {text}
        {/* Speech bubble tail */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-r-[12px] border-t-transparent border-b-transparent border-r-white dark:border-r-white/10"></div>
      </div>
    </motion.div>
  );
}
