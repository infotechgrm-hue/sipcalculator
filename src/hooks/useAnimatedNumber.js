"use client";
import { useSpring, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

/**
 * Smoothly animates any numeric value with a spring.
 * Returns a formatted currency string.
 */
export function AnimatedNumber({ value, prefix = "₹", decimals = 0, className = "" }) {
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const formatted = useTransform(spring, (v) =>
    `${prefix} ${Math.round(v).toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
    })}`
  );

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <motion.span className={className}>
      {formatted}
    </motion.span>
  );
}
