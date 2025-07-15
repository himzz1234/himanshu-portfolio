import { useRef } from "react";
import { motion } from "motion/react";
import FloatingBalloon from "./FloatingBalloon";
import { useModal } from "../context/ModalContext";
import ProjectInfo from "./ProjectInfo";
import balloon12 from "../assets/images/balloon_12.png";
import balloon13 from "../assets/images/balloon_13.png";
import balloon14 from "../assets/images/balloon_14.png";
import bird from "../assets/images/bird.png";
import sparkle1 from "../assets/images/sparkle_1.png";
import sparkle2 from "../assets/images/sparkle_2.png";
import cloud7 from "../assets/images/cloud_7.png";
import cloud8 from "../assets/images/cloud_8.png";

export default function Projects() {
  const { openModal } = useModal();
  const containerRef = useRef(null);

  const hoverAnimation = {
    whileHover: {
      y: -10,
      rotate: [0, -3, 3, 0],
      scale: 1.05,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="w-full font-normal overflow-hidden flex justify-center h-screen relative"
    >
      {/* Balloons */}
      <motion.div
        className="absolute top-[45%] left-[25%] sm:left-[35%] -translate-x-1/2 w-28 sm:w-44 z-10 drop-shadow-xl cursor-pointer"
        {...hoverAnimation}
        onClick={() =>
          openModal(
            <ProjectInfo
              title="SwadSathi"
              description="A real-time food ordering app built to reduce long queues and wait times in the college canteen. Students can place and track orders live, while canteen staff manage them efficiently."
              stack={["React", "Tailwind CSS", "Node.js", "Socket.io"]}
              features={[
                "Live order tracking",
                "Admin dashboard",
                "Mobile-first UI",
              ]}
              githubLink="https://github.com/himzz1234/SwadSathi"
            />
          )
        }
      >
        <FloatingBalloon src={balloon12} />
      </motion.div>

      <motion.div
        className="absolute top-[15%] left-[20%] sm:left-[20%] -translate-x-1/2 w-24 sm:w-32 z-10 drop-shadow-xl cursor-pointer"
        {...hoverAnimation}
        onClick={() =>
          openModal(
            <ProjectInfo
              title="Connect"
              description="A real-time MERN stack-based social media platform with messaging, post creation, and user interaction features."
              stack={[
                "React.js",
                "Express.js",
                "Node.js",
                "MongoDB",
                "Socket.io",
              ]}
              features={[
                "Real-time messaging",
                "User auth & post creation APIs",
                "100+ active users in 3 months",
                "Highly scalable architecture",
              ]}
              githubLink="https://github.com/himzz1234/Connect"
              demoLink="https://connect-nine-coral.vercel.app"
            />
          )
        }
      >
        <FloatingBalloon src={balloon14} />
      </motion.div>

      <motion.div
        className="absolute top-[20%] right-[20%] sm:right-[30%] translate-x-1/2 w-28 sm:w-40 z-10 drop-shadow-xl cursor-pointer"
        {...hoverAnimation}
        onClick={() =>
          openModal(
            <ProjectInfo
              title="Sneakpeek"
              description="A sneaker price comparison platform that scrapes and matches sneaker listings from multiple e-commerce websites to help users find the best deal."
              stack={["Puppeteer", "Cheerio", "Node.js", "Next.js", "MongoDB"]}
              features={[
                "Web scraping with delay/throttling",
                "Cross-site price comparison",
                "Product tracking & alert system",
              ]}
              githubLink="https://github.com/himzz1234/SneakPeek"
            />
          )
        }
      >
        <FloatingBalloon src={balloon13} />
      </motion.div>

      {/* Birds */}
      <img
        src={bird}
        className="w-6 sm:w-10 absolute top-[25%] sm:top-[20%] left-[35%] sm:left-[30%] opacity-80"
      />
      <img
        src={bird}
        className="w-4 sm:w-6 absolute top-[28%] sm:top-[23%] left-[37.5%] sm:left-[32%] opacity-60"
      />

      {/* Sparkles */}
      {/* <img
        src={sparkle1}
        className="w-2 sm:w-4 opacity-80 absolute top-[10%] left-[40%]"
      />
      <img
        src={sparkle1}
        className="w-2 sm:w-3 opacity-70 absolute top-[18%] right-[42%]"
      />
      <img
        src={sparkle2}
        className="w-1.5 sm:w-2 opacity-50 absolute bottom-[18%] left-[28%]"
      />
      <img
        src={sparkle1}
        className="w-1.5 sm:w-2 opacity-60 absolute bottom-[10%] right-[30%]"
      /> */}

      {/* Animated Clouds */}
      <motion.img
        src={cloud7}
        alt="cloud"
        className="absolute top-[10%] left-[10%] w-28 sm:w-44 opacity-65 z-0"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={cloud7}
        alt="cloud"
        className="absolute top-[12.5%] right-[10%] sm:right-[20%] w-24 sm:w-36 opacity-70 z-0"
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
