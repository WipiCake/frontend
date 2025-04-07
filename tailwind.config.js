import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Pretendard Variable", "Roboto"],
    },
  },
  plugins: [
    daisyui, // DaisyUI 플러그인 추가
  ],
};