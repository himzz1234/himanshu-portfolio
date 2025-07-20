import { useState, useRef, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import balloonImg from "./assets/images/balloon.png";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [y, setY] = useState("10%");
  const [scrollComplete, setScrollComplete] = useState(false);
  const { scrollY } = useScroll();
  const mainRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const contactRef = useRef(null);
  const balloonRef = useRef(null);

  const [contactTop, setContactTop] = useState(0);
  const [contactHeight, setContactHeight] = useState(0);

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

  useEffect(() => {
    const updateContactPosition = () => {
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        setContactTop(contactRef.current.offsetTop);
        setContactHeight(rect.height);
      }
    };

    updateContactPosition();
    window.addEventListener("resize", updateContactPosition);

    return () => window.removeEventListener("resize", updateContactPosition);
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
                y:
                  contactTop +
                  (contactHeight - balloonRef.current?.offsetHeight + 100 ||
                    0) /
                    2,
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
          className="relative"
        >
          <img
            src={balloonImg}
            alt="Balloon"
            className="w-28 sm:w-36 md:w-44 drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* <div className="fixed top-6 right-6 z-[999] hover:scale-110 transition-transform duration-200">
        <ThemeToggle />
      </div> */}

      <section
        className="min-h-[50vh] sm:min-h-screen bg-gradient-to-b
  from-[#4db8ff] via-[#89d4ff] to-[#b3dfff] 
  dark:from-[#000b1c] dark:via-[#011a35] dark:to-[#013350]"
      >
        <Home />
      </section>

      <section
        className="min-h-[60vh] sm:min-h-screen bg-gradient-to-b
  from-[#b3dfff] via-[#d6edff] to-[#eaf6ff] 
  dark:from-[#013350] dark:via-[#022a55] dark:to-[#031f3a]"
      >
        <About />
      </section>

      <section
        className="min-h-[80vh] sm:min-h-screen bg-gradient-to-b
  from-[#eaf6ff] via-[#fff5ec] to-[#fff0dc] 
  dark:from-[#031f3a] dark:via-[#05152f] dark:to-[#080e1d]"
      >
        <Projects />
      </section>

      <section
        ref={contactRef}
        className="min-h-[80vh] sm:min-h-screen bg-gradient-to-b
  from-[#fff0dc] via-[#ffe8c7] to-[#ffe2b9] 
  dark:from-[#080e1d] dark:via-[#040815] dark:to-[#000000]"
      >
        <Contact />
      </section>
    </main>
  );
}
