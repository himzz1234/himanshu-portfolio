import { useState, useRef, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import balloonImg from "./assets/images/balloon.png";

export default function App() {
  const [y, setY] = useState(40);
  const [scrollComplete, setScrollComplete] = useState(false);
  const { scrollY } = useScroll();
  const mainRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const contactRef = useRef(null);
  const balloonRef = useRef(null);

  useEffect(() => {
    const calculateMaxScroll = () => {
      if (mainRef.current) {
        setMaxScroll(mainRef.current.scrollHeight - window.innerHeight);
      }
    };

    calculateMaxScroll();
    window.addEventListener("resize", calculateMaxScroll);

    return () => window.removeEventListener("resize", calculateMaxScroll);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setY(Math.max(40, latest + 40));

    if (latest >= maxScroll - 10 && maxScroll > 0) {
      setScrollComplete(true);
    } else {
      setScrollComplete(false);
    }
  });

  return (
    <main className="relative fredoka" ref={mainRef}>
      <motion.div
        ref={balloonRef}
        className="absolute left-1/2 -translate-x-1/2 z-5"
        initial={{ y: 0 }}
        animate={
          scrollComplete
            ? {
                y: maxScroll + (window.innerHeight - 430),
                transition: { duration: 1.5, ease: "easeOut" },
              }
            : { y: y }
        }
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0, 10, 0],
            x: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={balloonImg}
            alt="Balloon"
            className="w-28 sm:w-36 md:w-44 drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      <section className="min-h-screen bg-gradient-to-b from-sky-200 to-sky-400 relative">
        <Home />
      </section>
      <section className="min-h-screen bg-gradient-to-b from-sky-400 to-indigo-200 relative">
        <About scrollY={scrollY} />
      </section>
      <section className="min-h-screen bg-gradient-to-b from-indigo-200 to-slate-300 relative">
        <Projects />
      </section>
      <section
        className="min-h-screen bg-gradient-to-b from-slate-300 to-rose-100 relative"
        ref={contactRef}
      >
        <Contact />
      </section>
    </main>
  );
}
