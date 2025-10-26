"use client";
import React from "react";

const ToggleSwitch = ({ active, onToggle }) => {
  return (
    <div className="flex bg-gray-100 p-1 rounded-full w-fit">
      <button
        onClick={() => onToggle("SIP")}
        className={`px-4 py-1 rounded-full font-semibold ${
          active === "SIP"
            ? "bg-green-100 text-green-600"
            : "text-gray-600 hover:text-green-500"
        }`}
      >
        SIP
      </button>

      <button
        onClick={() => onToggle("Lumpsum")}
        className={`px-4 py-1 rounded-full font-semibold ${
          active === "Lumpsum"
            ? "bg-green-100 text-green-600"
            : "text-gray-600 hover:text-green-500"
        }`}
      >
        Lumpsum
      </button>
    </div>
  );
};

export default ToggleSwitch;
