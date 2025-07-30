export const birdsConfig = [
  {
    // big arc over the balloon
    className:
      "w-5 top-[15%] left-[28%] rotate-[12deg] " +
      "sm:w-10 sm:top-[20%] sm:left-[30%]",
    opacity: 0.8,
  },
  {
    // partner bird in the pair
    className:
      "w-3.5 top-[18%] left-[32%] " + "sm:w-6 sm:top-[23%] sm:left-[32%]",
    opacity: 0.6,
  },
  {
    // low left swoop
    className:
      "w-4 top-[55%] left-[12%] rotate-[5deg] " + "sm:w-8 sm:top-[30%]",
    opacity: 0.75,
  },
  {
    // mirrored bird on the right horizon
    className:
      "w-3.5 top-[60%] right-[18%] -rotate-[12deg] " + "sm:w-7 sm:top-[35%]",
    flip: true,
    opacity: 0.6,
  },
  {
    // tiny distant speck under the fleet
    className: "w-2.5 bottom-[22%] left-[48%] " + "sm:w-5 sm:bottom-[30%]",
    opacity: 0.5,
  },
];

export const backgroundBalloonsConfig = [
  {
    className:
      "top-[62%] left-[22%] w-10 opacity-10 brightness-80 blur-[1px] " +
      "sm:w-16 sm:opacity-10 sm:top-[60%] sm:left-[20%]",
    y: [-8],
  },
  {
    className:
      "top-[42%] right-[10%] w-12 opacity-20 brightness-80 blur-[1px] " +
      "sm:right-[15%] sm:w-20 sm:top-[40%]",
    y: [6],
  },
  {
    className:
      "bottom-[16%] left-[68%] w-8 opacity-10 brightness-80 blur-[1px] " +
      "sm:bottom-[20%] sm:left-[60%] sm:w-14",
    y: [-5],
  },
];

export const sparklesConfig = [
  {
    id: 2,
    y: [-1, 1, -1],
    dur: 2.8,
    className:
      "w-1.5 top-[22%] right-[38%] opacity-50 " +
      "sm:w-2 sm:right-[42%] sm:top-[20%]",
  },
  {
    id: 3,
    y: [-1, 1, -1],
    dur: 2.8,
    className:
      "w-1.5 bottom-[20%] left-[26%] opacity-50 " +
      "sm:left-[30%] sm:bottom-[15%] sm:w-2",
  },
  {
    id: 4,
    y: [-1, 1, -1],
    dur: 2.8,
    className:
      "w-2 bottom-[10%] right-[22%] opacity-60 " +
      "sm:w-3 sm:right-[25%] sm:bottom-[8%]",
  },
];
