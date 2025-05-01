const flexClasses = {
  ".flex-jsb-c": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ".flex-jsb-s": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },
  ".flex-jsb-e": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
  },
  ".flex-js-c": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ".flex-js-s": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "start",
  },
  ".flex-js-e": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "end",
  },
  ".flex-jc-c": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".flex-jc-s": {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  ".flex-jse-c": {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ".flex-jsa-c": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ".flex-je-c": {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
};

export const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "text-blue-500",
    "bg-blue-500",
    "hover:bg-blue-600",
    "border-blue-500",

    "text-gray-500",
    "bg-gray-500",
    "hover:bg-gray-600",
    "border-gray-500",

    "text-red-500",
    "bg-red-500",
    "hover:bg-red-600",
    "border-red-500",

    "underline",
    "bg-transparent",
    "p-0",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#FFF",
        black: "#11181C",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      borderColor: {
        DEFAULT: "#e7e9ee",
      },
      animation: {
        pop: "pop 0.4s ease-in-out",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents(flexClasses);
    },
  ],
};

export default config;
