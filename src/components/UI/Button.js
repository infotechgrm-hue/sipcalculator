"use client";
import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2 rounded-md font-semibold bg-green-500 text-white hover:bg-green-600 transition duration-200 shadow-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
