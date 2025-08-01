import { useState, useRef, useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import balloonImg from "./assets/images/balloon.png";
import ThemeToggle from "./components/ThemeToggle";
import AudioToggle from "./components/AudioToggle";

const getYValue = () =>
  window.matchMedia("(max-width: 640px)").matches ? "35%" : "10%";

export default function App() {
  const [y, setY] = useState(() =>
    typeof window !== "undefined" ? getYValue() : "10%"
  );

  const [scrollComplete, setScrollComplete] = useState(false);
  const { scrollY } = useScroll();
  const mainRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const contactRef = useRef(null);
  const balloonRef = useRef(null);

  const [contactTop, setContactTop] = useState(0);
  const [contactHeight, setContactHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setY(getYValue());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <main className="relative" ref={mainRef}>
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
            className="w-28 sm:w-36 md:w-40 lg:w-44 drop-shadow-2xl dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] dark:brightness-120 dark:saturate-110"
          />
        </motion.div>
      </motion.div>

      <div className="flex items-center gap-2 sm:gap-3 fixed top-6 right-6 z-[999]">
        {/* <AudioToggle /> */}
        <ThemeToggle />
      </div>

      <section
        className="min-h-[50vh] sm:min-h-screen bg-gradient-to-b
             from-[#4db8ff] via-[#89d4ff] to-[#b3dfff]
             dark:from-[#00060e] dark:via-[#011627] dark:to-[#02243b]"
      >
        <Home />
      </section>

      <section
        className="min-h-[50vh] sm:min-h-screen bg-gradient-to-b
             from-[#b3dfff] via-[#d6edff] to-[#eaf6ff]
             dark:from-[#02243b] dark:via-[#021c30] dark:to-[#021425]"
      >
        <About />
      </section>

      <section
        className="min-h-[80vh] sm:min-h-screen bg-gradient-to-b
             from-[#eaf6ff] via-[#fff5ec] to-[#fff0dc]
             dark:from-[#021425] dark:via-[#01101b] dark:to-[#0a1b29]  /* was #000a12 */
"
      >
        <Projects />
      </section>

      <section
        ref={contactRef}
        className="min-h-[80vh] sm:min-h-screen bg-gradient-to-b
             from-[#fff0dc] via-[#ffe8c7] to-[#ffe2b9]
             dark:from-[#0a1b29]  /* was #000a12 */
             dark:via-[#081622]   /* was #000714 */
             dark:to-[#333c45]    /* was #2a2a2a */
"
      >
        <Contact />
      </section>
    </main>
  );
}
