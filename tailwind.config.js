/** @type {import('tailwindcss').Config} */

let sizeInPx = [...Array(2000).keys()].reduce((acc, el) => {
  acc[`${el + 1}`] = `${el + 1}px`;
  return acc;
}, {});
let sizeInPercent = [...Array(100).keys()].reduce((acc, el) => {
  acc[`${el + 1}%`] = `${el + 1}%`;
  return acc;
}, {});
let sizeInVw = [...Array(100).keys()].reduce((acc, el) => {
  acc[`${el + 1}vw`] = `${el + 1}vw`;
  return acc;
}, {});
let sizeInVh = [...Array(100).keys()].reduce((acc, el) => {
  acc[`${el + 1}vh`] = `${el + 1}vh`;
  return acc;
}, {});
let position = [...Array(100).keys()].reduce((acc, el) => {
  acc[`${el + 1}`] = `-${el + 1}px`;

  return acc;
}, {});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        ...sizeInPx,
      },
      width: {
        ...sizeInVw,
        ...sizeInPercent,
        ...sizeInPx,
      },
      height: {
        ...sizeInVw,
        ...sizeInPercent,
        ...sizeInPx,
        ...sizeInVh,
      },
      borderRadius: {
        ...sizeInPx,
        ...sizeInPercent,
      },
      gap: {
        ...sizeInVw,
        ...sizeInPercent,
        ...sizeInPx,
      },
      padding: {
        ...sizeInVw,
        ...sizeInPercent,
        ...sizeInPx,
      },
      margin: {
        ...sizeInVw,
        ...sizeInPercent,
        ...sizeInPx,
      },
      zIndex: {
        neg1: "-1",
      },
      left: {
        ...position,
      },
      gridTemplateRows: {
        l: " 72px 72px 72px 144px",
        s: " 72px 72px  72px 72px 72px 144px",
      },
      screens: {
        max: { max: "1300px" },
      },
    },
  },
  plugins: [],
};
