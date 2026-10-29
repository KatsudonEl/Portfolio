/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0D0D0D",
          card: "rgba(20, 20, 20, 0.7)",
          cardHover: "rgba(30, 30, 30, 0.85)",
          border: "rgba(255, 255, 255, 0.08)",
        },
        accent: {
          gold: "#FFD700",
          amber: "#F5A623",
          warm: "#E8B84B",
          cream: "#FFF8E1",
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
      },
      animation: {
        'blob': 'blob 20s infinite alternate ease-in-out',
        'marquee-left': 'marqueeLeft 35s linear infinite',
        'marquee-right': 'marqueeRight 35s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(50px, 30px) scale(1.1)' },
          '100%': { transform: 'translate(-30px, 60px) scale(0.95)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
