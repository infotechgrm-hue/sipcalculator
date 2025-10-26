"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const formatINR = (n) => `₹ ${Math.round(Number(n)).toLocaleString("en-IN")}`;

export default function ComparisonChart({ data = [] }) {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#6B7280" }} />
          <YAxis
            tickFormatter={(val) => `₹${(val / 100000).toFixed(1)}L`}
            tick={{ fontSize: 12, fill: "#6B7280" }}
          />
          <Tooltip
            formatter={(val, name) => [formatINR(val), name]}
            contentStyle={{
              borderRadius: "8px",
              borderColor: "#E5E7EB",
              fontSize: "12px",
            }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ fontSize: "12px", marginBottom: "10px" }}
          />
          {/* SIP line - Green */}
          <Line
            type="monotone"
            dataKey="sip"
            stroke="#10B981"
            strokeWidth={2.5}
            dot={false}
            name="SIP Investment"
          />
          {/* Lumpsum line - Blue */}
          <Line
            type="monotone"
            dataKey="lumpsum"
            stroke="#2563EB"
            strokeWidth={2.5}
            dot={false}
            name="Lumpsum Investment"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
