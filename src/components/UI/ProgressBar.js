"use client";
import React from "react";

export default function ProgressBar({ percent, headline, subline }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      {/* Circular progress wrapper */}
      <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 150 150">
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="10"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#10B981"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-in-out"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {percent}%
          </span>
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            {headline}
          </span>
        </div>
      </div>

      {/* Subline below circle */}
      {/* <div className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-[200px] break-words">
        {subline}
      </div> */}
    </div>
  );
}
