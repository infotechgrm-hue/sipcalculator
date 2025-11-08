"use client";
import React from "react";
import { TrendingUp, Wallet, Trophy, Timer } from "lucide-react";

const pretty = (n) => `₹${Math.round(Number(n || 0)).toLocaleString("en-IN")}`;

export default function SSYResult({ invested, returns, total, maturityYear, showIcons = false }) {
  const results = [
    { label: "Invested amount", value: pretty(invested), icon: Wallet },
    { label: "Est. returns", value: pretty(returns), icon: TrendingUp },
    { label: "Maturity year", value: maturityYear, icon: Timer },
    { label: "Total value", value: pretty(total), icon: Trophy, highlight: true },
  ];

  return (
    <div className="w-full rounded-sm overflow-hidden">
      {results.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className={`flex items-center justify-between px-0 py-2.5
              border-b last:border-b-0
              ${item.highlight ? "bg-emerald-50 dark:bg-emerald-900/10" : "bg-transparent"}`}
          >
            <div className="flex items-center gap-3">
              {showIcons && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                  <Icon size={14} className="text-gray-600 dark:text-gray-300" />
                </div>
              )}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {item.label}
              </span>
            </div>

            <span
              className={`text-sm font-semibold ${
                item.highlight ? "text-emerald-600 dark:text-emerald-400" : "text-gray-900 dark:text-gray-100"
              }`}
            >
              {item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
