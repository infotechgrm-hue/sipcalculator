"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#93C5FD", "#2563EB"]; // Light blue for invested, dark blue for returns

export default function InvestmentBreakdown({ invested, returns }) {
  const data = [
    { name: "Invested", value: invested },
    { name: "Returns", value: returns },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-[180px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={55}
            outerRadius={75}
            paddingAngle={3}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="text-xs text-gray-500 mt-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#93C5FD]" /> Invested
          <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" /> Returns
        </div>
      </div>
    </div>
  );
}
