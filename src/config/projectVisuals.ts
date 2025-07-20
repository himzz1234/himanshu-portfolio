export const birdsConfig = [
  {
    className:
      "w-6 sm:w-10 top-[25%] sm:top-[20%] left-[35%] sm:left-[30%] rotate-[12deg]",
    opacity: 0.8,
  },
  {
    className: "w-4 sm:w-6 top-[28%] sm:top-[23%] left-[37.5%] sm:left-[32%]",
    opacity: 0.6,
  },
  { className: "w-5 sm:w-8 top-[30%] left-[10%] rotate-[5deg]", opacity: 0.75 },
  {
    className: "w-4 sm:w-7 top-[35%] right-[20%] -rotate-[12deg]",
    flip: true,
    opacity: 0.6,
  },
  { className: "w-3 sm:w-5 bottom-[30%] left-[45%]", opacity: 0.5 },
];

export const backgroundBalloonsConfig = [
  {
    className:
      "top-[60%] left-[20%] w-12 sm:w-16 opacity-10 dark:opacity-5 brightness-80 blur-[1px]",
    y: [-10],
  },
  {
    className:
      "top-[40%] right-[15%] w-14 sm:w-20 opacity-15 dark:opacity-5 brightness-80 blur-[1px]",
    y: [8],
  },
  {
    className:
      "bottom-[20%] left-[60%] w-10 sm:w-14 opacity-5 brightness-80 blur-[1px]",
    y: [-6],
  },
];

export const sparklesConfig = [
  {
    id: 1,
    y: [-1, 1, -1],
    dur: 2.8,
    className: "w-2 sm:w-3 top-[8%] left-[45%] opacity-60",
  },
  {
    id: 2,
    y: [-1, 1, -1],
    dur: 2.8,
    className: "w-1.5 sm:w-2 top-[20%] right-[42%] opacity-50",
  },
  {
    id: 3,
    y: [-1, 1, -1],
    dur: 2.8,
    className: "w-1.5 sm:w-2 bottom-[15%] left-[30%] opacity-50",
  },
  {
    id: 4,
    y: [-1, 1, -1],
    dur: 2.8,
    className: "w-2 sm:w-3 bottom-[8%] right-[25%] opacity-60",
  },
];
