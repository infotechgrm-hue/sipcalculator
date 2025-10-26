"use client";
import React from "react";
import { TrendingUp, Wallet, Trophy } from "lucide-react";

const pretty = (n) => `₹ ${Math.round(Number(n || 0)).toLocaleString("en-IN")}`;

export default function SIPResult({ invested, returns, total, showIcons = true }) {
  const results = [
    {
      label: "Invested amount",
      value: pretty(invested),
      icon: Wallet,
      color: "emerald",
    },
    {
      label: "Est. returns",
      value: pretty(returns),
      icon: TrendingUp,
      color: "sky",
    },
    {
      label: "Total value",
      value: pretty(total),
      icon: Trophy,
      color: "emerald",
      highlight: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {results.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className={`rounded-xl border p-4 flex flex-col items-center justify-center text-center shadow-sm
              transition-all duration-200 ${
                item.highlight
                  ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-700"
                  : "bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-700"
              }`}
          >
            {showIcons && (
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <Icon
                  size={18}
                  className={`text-${item.color}-600 dark:text-${item.color}-400`}
                />
              </div>
            )}
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {item.label}
            </p>
            <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mt-1">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
