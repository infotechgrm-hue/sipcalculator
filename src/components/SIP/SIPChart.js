"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#10B981", "#2563EB"];

export default function SIPChart({ invested = 0, returns = 0 }) {
  const total = invested + returns;

  const data =
    total > 0
      ? [
          { name: "Invested Amount", value: Number(invested) },
          { name: "Est. Returns", value: Number(returns) },
        ]
      : [
          { name: "Invested Amount", value: 1 },
          { name: "Est. Returns", value: 1 },
        ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* <h3 className="text-gray-700 font-medium mb-2">Investment Breakdown</h3> */}

      {/* fixed chart container */}
      <div
        style={{
          width: 220,
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <PieChart width={220} height={220}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}  // smaller radius
            outerRadius={70}  // fits safely inside
            startAngle={90}
            endAngle={450}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(val) => `₹ ${Math.round(val).toLocaleString("en-IN")}`}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{ paddingTop: "6px" }}
          />
        </PieChart>
      </div>
    </div>
  );
}
