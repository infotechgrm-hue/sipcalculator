"use client";
import { useState, useEffect } from "react";

export default function H1Header() {
  const [blink, setBlink] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setBlink((b) => !b), 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center py-6 select-none">
      {/* Main Heading */}
      <h1
        className={`
          text-3xl sm:text-5xl font-extrabold tracking-wide transition-all duration-500
          bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500
          bg-clip-text text-transparent
          ${hovered ? "scale-105 drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]" : ""}
        `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        SIP Calculator
      </h1>

      {/* Animated Underline */}
      <div
        className={`
          mt-2 h-[3px] w-24 rounded-full transition-all duration-700
          ${blink ? "bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 opacity-100" : "opacity-40"}
        `}
      ></div>

      {/* Subtext */}
      <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
        Calculate Smart. Invest Smarter.
      </p>
    </div>
  );
}


//Put this in global.css file to enable shine animation
// @keyframes shine {
//   0% { background-position: 0% 50%; }
//   100% { background-position: 100% 50%; }
// }
// .animate-shine {
//   background-size: 200% auto;
//   animation: shine 3s linear infinite;
// }

