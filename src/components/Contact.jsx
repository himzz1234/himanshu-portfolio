import { motion, useInView } from "motion/react";
import { useRef } from "react";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import instagramIcon from "../assets/icons/instagram.png";
import cityline from "../assets/images/cityline.png";
import grassLeft from "../assets/images/grass_banner_left.png";
import grassRight from "../assets/images/grass_banner_right.png";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  return (
    <div
      ref={ref}
      className="relative w-full font-sans h-screen bg-gradient-to-b from-slate-300 via-[#f7d4c4] to-[#f9e4dc] overflow-hidden flex items-center justify-center pb-24"
    >
      {/* Heading + Subtext */}
      <div className="absolute top-10 flex flex-col items-center text-center z-[1] px-4 max-w-screen-sm mx-auto">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-slate-700/40 drop-shadow-sm tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="mt-4 text-base sm:text-xl text-slate-700/50 max-w-md sm:max-w-2xl leading-relaxed drop-shadow-sm tracking-wide"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Thanks for helping me descend safely — now it’s my turn to lift you
          up. Let’s talk. Whether it’s a spark of an idea, a full-blown project,
          or just a friendly hello, I’m all ears and ready to float your way.
        </motion.p>
      </div>

      {/* Footer Text */}
      <motion.p
        className="absolute bottom-4 hidden sm:visible text-sm sm:text-base text-slate-700/50 drop-shadow-sm z-0 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Designed & Built by Himanshu Singh
      </motion.p>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-3 sm:space-x-2 absolute left-20 top-[50%] sm:top-[70%] sm:left-[40%] sm:translate-x-[-50%] translate-x-[-50%] translate-y-1/2 z-50">
        <div>
          <a
            href="https://github.com/himzz1234"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={githubIcon} alt="GitHub" className="w-6 sm:w-8" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/himanshu-singh-ab19161b2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 sm:w-8" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/whyhimanshuwhy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={instagramIcon} alt="Instagram" className="w-6 sm:w-8" />
          </a>
        </div>
      </div>

      {/* Say Hello Button */}
      <div className="absolute top-[50%] -right-[7.5%] sm:right-[35%] sm:left-auto -translate-x-1/2 sm:translate-x-0 z-40">
        <a
          href="mailto:himanshuhim1230@gmail.com"
          className="text-[#e6dce4] font-semibold text-base sm:text-lg bg-[#f28162] border border-[#fd6a41] rounded-md px-4 py-2"
        >
          Say Hello
        </a>
      </div>

      {/* Cityline */}
      <div className="absolute right-0 bottom-0 z-[1] w-full sm:w-auto">
        <img
          src={cityline}
          className="brightness-75 opacity-25 scale-x-[-1] w-[200vw] sm:w-auto"
        />
      </div>

      {/* Grass Banners */}
      <div className="absolute left-0 -bottom-7.5 z-10 w-full sm:w-auto">
        <img src={grassLeft} className="w-full sm:w-2/3" />
      </div>

      <div className="w-full sm:w-auto absolute right-0 -bottom-7.5 z-10">
        <img src={grassRight} className="w-full sm:w-2/3 ml-auto" />
      </div>
    </div>
  );
}
