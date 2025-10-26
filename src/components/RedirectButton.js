"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RedirectButton() {
  return (
    <div className="flex justify-center mt-10 mb-14">
      <Link href="/" passHref>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
          className="
            relative flex items-center justify-center gap-3 px-8 py-4
            text-lg font-semibold rounded-xl overflow-hidden
            bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600
            text-white shadow-lg shadow-emerald-300/40 dark:shadow-emerald-900/40
            hover:shadow-emerald-400/50
            transition-all duration-500 ease-out group
          "
          aria-label='Open SIP Calculator'
        >
          <span className="relative z-10">Try SIP Calculator Now</span>
          <FaArrowRight className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-2" />

          {/* Subtle glow layer */}
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-teal-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>

          {/* Highlight shimmer */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite]"></span>
        </motion.button>
      </Link>

      {/* Shimmer keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
