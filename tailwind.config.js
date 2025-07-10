/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827",        // dark text
        secondary: "#6B7280",      // gray labels
        sheetHeader: "#F9FAFB",    // light header bg
        gridBorder: "#E5E7EB",     // cell borders
        badgeGreen: "#DCFCE7",     // Complete
        badgeRed: "#FEE2E2",       // Blocked
        badgeYellow: "#FEF9C3",    // In-process
        badgeGray: "#F3F4F6",      // Need to start
      }
    }
  },
  plugins: [],
}
