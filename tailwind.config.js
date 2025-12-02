/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Medical Blue
        secondary: "#64748B", // Neutral Gray
        accent: "#0EA5E9", // Light Blue
        success: "#22C55E", // Green for status
        danger: "#EF4444", // Red for errors
      }
    },
  },
  plugins: [],
}











// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2563EB",
//         secondary: "#64748B",
//       }
//     },
//   },
//   plugins: [],
// }