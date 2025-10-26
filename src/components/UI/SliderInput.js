"use client";
import React from "react";

const SliderInput = ({ min, max, step, value, onChange, unit }) => (
  <div>
    <div className="flex justify-between items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-green-500"
      />
      <div className="ml-4 bg-green-50 px-3 py-1 rounded-md text-green-600 font-medium">
        {unit} {value}
      </div>
    </div>
  </div>
);

export default SliderInput;
