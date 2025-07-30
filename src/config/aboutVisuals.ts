export const birdsConfig = [
  // high left pair
  {
    className:
      "top-[10%] left-[18%] w-4 " + // phones
      "sm:top-[14%] sm:left-[20%] sm:w-6", // ≥640 px
    opacity: 0.4,
  },
  {
    className:
      "top-[13%] right-[18%] w-3.5 " + "sm:top-[18%] sm:right-[22%] sm:w-5",
    opacity: 0.35,
  },

  // mid‑horizon bird coming in from left
  {
    className:
      "top-[42%] left-[-6%] w-5 z-[4] " + // still off‑screen a touch
      "sm:top-[33%] sm:left-[-12%] sm:w-8",
    opacity: 0.45,
  },

  // mirrored bird on right
  {
    className:
      "top-[48%] left-[105%] w-6 z-[4] " + "sm:top-[42%] sm:left-[112%] sm:w-9",
    opacity: 0.4,
    flip: true,
  },

  // lower pair
  {
    className: "top-[64%] left-[18%] w-5 " + "sm:top-[55%] sm:w-7",
    opacity: 0.3,
  },
  {
    className: "top-[66%] right-[18%] w-5 " + "sm:top-[57%] sm:w-7",
    opacity: 0.3,
  },
];

export const sparkleConfig = [
  {
    id: 0,
    className:
      "top-[18%] left-[18%] w-2.5 " + "sm:top-[20%] sm:left-[20%] sm:w-3",
    y: [-1, 1, -1],
    dur: 2.8,
  },
  {
    id: 1,
    className:
      "top-[28%] right-[24%] w-2 " + "sm:top-[32%] sm:right-[28%] sm:w-3",
    y: [1, -1, 1],
    dur: 2.6,
  },
  {
    id: 2,
    className:
      "bottom-[14%] left-[28%] w-2 " + "sm:bottom-[10%] sm:left-[25%] sm:w-3",
    y: [-1, 2, -1],
    dur: 3.2,
  },
  {
    id: 3,
    className:
      "bottom-[26%] right-[24%] w-1.5 " +
      "sm:bottom-[22%] sm:right-[30%] sm:w-2",
    y: [1, -2, 1],
    dur: 3.1,
  },
  {
    id: 4,
    className:
      "top-[8%] right-[10%] w-2 " + "sm:top-[10%] sm:right-[12%] sm:w-3",
    y: [-1.2, 1.2, -1.2],
    dur: 2.5,
  },
  {
    id: 5,
    className:
      "top-[40%] left-[12%] w-1.5 " + "sm:top-[45%] sm:left-[10%] sm:w-2",
    y: [0.5, -1, 0.5],
    dur: 2.7,
  },
];
