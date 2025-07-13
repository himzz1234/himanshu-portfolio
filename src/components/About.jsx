import { useRef } from "react";
import {
  motion,
  useScroll,
  useAnimation,
  useMotionValueEvent,
} from "motion/react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cardControls = useAnimation();
  const boardControls = useAnimation();

  useMotionValueEvent(scrollYProgress, "change", async (latest) => {
    if (latest >= 0.3) {
      await boardControls.start({
        y: "-25%",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
      });

      await boardControls.start({
        y: "-20%",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 12,
        },
      });

      await cardControls.start({
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      await boardControls.start({
        y: "-80%",
        transition: { duration: 0.4, ease: "easeOut" },
      });

      await cardControls.start({
        opacity: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  });

  return (
    <div
      ref={ref}
      className="w-full font-normal overflow-hidden flex justify-center h-screen relative px-4 sm:px-0"
    >
      {/* Clouds */}
      <motion.img
        src="src/assets/images/cloud_7.png"
        className="absolute top-[10%] left-[5%] w-24 sm:w-44 opacity-20 z-0"
        alt="cloud"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="src/assets/images/cloud_7.png"
        className="absolute top-[20%] right-[10%] w-20 sm:w-36 opacity-25 z-0"
        alt="cloud"
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="src/assets/images/cloud_7.png"
        className="absolute top-[65%] left-[15%] w-16 sm:w-28 opacity-15 z-0"
        alt="cloud"
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="src/assets/images/cloud_7.png"
        className="absolute bottom-[15%] right-[8%] w-20 sm:w-32 opacity-10 z-0"
        alt="cloud"
        animate={{ x: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        style={{
          backgroundImage: `url(src/assets/images/cloud_large.png)`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute -top-36 z-30 w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6"
      >
        <h2 className="text-xl sm:text-5xl mt-6 font-semibold text-[#38477e] drop-shadow-sm">
          Hi, I'm Himanshu!
        </h2>

        <p className="mt-4 text-sm sm:text-xl text-[#38477e] leading-relaxed max-w-sm sm:max-w-xl px-2 sm:px-0">
          A skybound developer crafting{" "}
          <span className="font-semibold">playful, real-time</span> experiences
          with a touch of storytelling. I turn imaginative ideas into meaningful
          web interfaces that <em>connect, engage, and delight</em>.
        </p>
      </div>

      {/* Sparkles */}
      <img
        src="/src/assets/images/sparkle_1.png"
        className="w-3 sm:w-4 opacity-90 absolute top-[20%] left-[20%]"
      />
      <img
        src="/src/assets/images/sparkle_2.png"
        className="w-2.5 sm:w-3 opacity-70 absolute top-[32%] right-[28%]"
      />
      <img
        src="/src/assets/images/sparkle_1.png"
        className="w-2.5 sm:w-3 opacity-80 absolute bottom-[10%] left-[25%]"
      />
      <img
        src="/src/assets/images/sparkle_2.png"
        className="w-2 opacity-60 absolute bottom-[22%] right-[30%]"
      />
      <img
        src="/src/assets/images/sparkle_1.png"
        className="w-2.5 sm:w-3 opacity-60 absolute top-[10%] right-[12%]"
      />
      <img
        src="/src/assets/images/sparkle_2.png"
        className="w-2 opacity-50 absolute top-[45%] left-[10%]"
      />

      {/* Boards - Left */}
      <div className="absolute top-[50%] sm:top-80 left-1/2 sm:left-96 -translate-x-1/2 sm:translate-x-0 flex flex-col items-center z-20">
        <motion.img
          src="src/assets/images/board_3.png"
          alt="Hanging Board"
          animate={boardControls}
          initial={{ y: "-80%" }}
          className="w-48 sm:w-60 h-auto drop-shadow-xl"
        />

        <motion.div
          animate={cardControls}
          initial={{ opacity: 0 }}
          className="font-sans grid grid-cols-2 sm:grid-cols-3 gap-1 -mt-5 text-[#276490] font-medium"
        >
          {["React", "Typescript", "Nextjs", "Tailwind"].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`bg-[#f0f8ff] flex items-center justify-center rounded-md px-3 py-2 text-sm ${
                i === 3 ? "col-span-2 sm:col-span-1 sm:col-start-2" : ""
              }`}
            >
              <p>{tech}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Boards - Right */}
      <div className="absolute top-[105%] sm:top-80 left-1/2 sm:right-96 -translate-x-1/2 sm:translate-x-0 flex flex-col items-center z-20">
        <motion.img
          src="src/assets/images/board_4.png"
          alt="Hanging Board"
          animate={boardControls}
          initial={{ y: "-80%" }}
          className="w-48 sm:w-60 h-auto drop-shadow-xl"
        />

        <motion.div
          animate={cardControls}
          initial={{ opacity: 0 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-1 -mt-5 text-[#276490] font-medium"
        >
          {["Node.js", "MongoDB", "REST"].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#ecf5fd] flex items-center justify-center rounded-md px-3 py-2 text-sm"
            >
              <p>{tech}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
