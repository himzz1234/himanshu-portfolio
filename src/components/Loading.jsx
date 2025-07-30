import { Cloud } from "./visual/Cloud";
import cloud1 from "../assets/images/cloud_1.png";
import cloud2 from "../assets/images/cloud_2.png";
import cloud3 from "../assets/images/cloud_3.png";
import cloud4 from "../assets/images/cloud_4.png";
import cloud5 from "../assets/images/cloud_5.png";
import cloud6 from "../assets/images/cloud_6.png";
import balloonImg from "../assets/images/balloon.png";
import { motion } from "motion/react";

const cloudConfig = [
  [cloud1, 260, "8%", "10%", 160, 60],
  [cloud2, 220, "18%", "70%", -200, 45],
  [cloud3, 280, "30%", "-15%", 280, 35],
  [cloud4, 240, "45%", "40%", -180, 50],
  [cloud5, 300, "60%", "80%", 220, 65],
  [cloud6, 180, "72%", "-25%", 260, 40],
];

export default function Loading() {
  return (
    <div
      className={`fixed inset-0 w-full h-screen bg-gradient-to-b from-[#4db8ff] via-[#89d4ff] to-[#b3dfff] dark:from-[#00060e] dark:via-[#011627] dark:to-[#02243b] flex items-center justify-center`}
    >
      {/* {cloudConfig.map(([src, size, top, left, driftX, dur], i) => (
        <Cloud
          key={i}
          lightSrc={src}
          style={{ top, left, width: size }}
          driftX={driftX}
          driftDuration={dur}
          delay={-(i * 8)}
          alt=""
        />
      ))} */}

      <div className="flex flex-col items-center gap-6">
        {/* balloon gently bobs up and down */}
        <motion.img
          layoutId="balloon"
          src={balloonImg}
          alt=""
          className="w-28 sm:w-36 md:w-44 drop-shadow-2xl dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] dark:brightness-120 dark:saturate-110"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
    </div>
  );
}
