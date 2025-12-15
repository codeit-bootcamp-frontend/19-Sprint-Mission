/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // ---------------------------------------------------
  theme: {
    colors: {
      // 파란색
      "primary-100": "#3692FF",
      "primary-200": "#1967D6",
      "primary-300": "#1251AA",
      //빨간색
      "red": "#F74747",
      // 회색
      "gray-100": "#F9FAFB",
      "gray-200": "#F3F4F6",
      "gray-300": "#E5E7EB",
      "gray-400": "#9CA3AF",
      "gray-500": "#6B7280",
      "gray-600": "#4B5563",
      "gray-700": "#374151",
      "gray-800": "#1F2937",
      "gray-900": "#111827",
    },
  },
  extend: {
    screens: {
      // 커스텀 breakpoint 설정
      mobile: "375px",
      tablet: "768px",
      desktop: "1024px",
    },
  },
  plugins: [],
};
