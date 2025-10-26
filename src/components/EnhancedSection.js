"use client";
import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function buildSipGrowth(monthly, annualRate, years) {
  const monthlyRate = Math.pow(1 + annualRate / 100, 1 / 12) - 1;
  const data = [];
  let invested = 0;
  let value = 0;
  for (let m = 1; m <= years * 12; m++) {
    invested += monthly;
    value = value * (1 + monthlyRate) + monthly;
    if (m % 12 === 0) {
      data.push({
        year: `Year ${m / 12}`,
        invested,
        value,
        returns: value - invested,
      });
    }
  }
  return data;
}

function ChartBlock({ chart }) {
  if (!chart) return null;
  const height = chart.height || 260;

  if (chart.type === "line") {
    return (
      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700 p-4">
        <h4 className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          {chart.title || "Growth Over Time"}
        </h4>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fill: "#6b7280" }} />
              <YAxis
                tick={{ fill: "#6b7280" }}
                tickFormatter={(n) => "₹ " + Math.round(n).toLocaleString("en-IN")}
              />
              <Tooltip formatter={(v) => "₹ " + Math.round(v).toLocaleString("en-IN")} />
              <Legend />
              <Line type="monotone" dataKey="invested" stroke="#10B981" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="returns" stroke="#8B5CF6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  if (chart.type === "pie") {
    const COLORS = chart.colors || ["#2563EB", "#10B981"];
    return (
      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700 p-4">
        <h4 className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          {chart.title || "Breakdown"}
        </h4>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={chart.data}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={2}
              >
                {chart.data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip formatter={(v) => "₹ " + Math.round(v).toLocaleString("en-IN")} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  return null;
}

function FormulaCard({ formula }) {
  if (!formula) return null;
  return (
    <div className="rounded-xl bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700 p-5">
      {formula.title && (
        <h4 className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          {formula.title}
        </h4>
      )}
      <div
        className="font-mono text-base md:text-lg bg-gray-50 dark:bg-gray-900/50 text-gray-800 dark:text-gray-100 rounded-md p-4 overflow-x-auto"
        style={{ lineHeight: 1.6 }}
      >
        {formula.expression}
      </div>
      {!!(formula.vars && formula.vars.length) && (
        <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
          {formula.vars.map((v) => (
            <li key={v.k}>
              <span className="font-semibold">{v.k}</span> — {v.v}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function BulletList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-5 space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="mt-[7px] h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EnhancedSection({
  title,
  content,
  img,
  imgAlt,
  bullets,
  formula,
  chart,
  monthly,
  annualRate,
  years,
}) {
  const autoChart =
    !chart && monthly && annualRate && years
      ? {
          type: "line",
          title: "Projected SIP Growth",
          data: buildSipGrowth(monthly, annualRate, years),
        }
      : null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
      {/* LEFT SIDE */}
      <div
        className={`transition-all duration-500 ${
          !img && !chart && !autoChart ? "md:col-span-2 w-full" : "w-full"
        }`}
      >
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {title}
          </h2>
        )}
        {content && (
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {content}
          </p>
        )}
        <BulletList items={bullets} />
        {formula && <div className="mt-6"><FormulaCard formula={formula} /></div>}
      </div>

      {/* RIGHT SIDE */}
      {(img || chart || autoChart) && (
        <div className="flex flex-col gap-6 justify-center">
          {img && (
            <img
              src={img}
              alt={imgAlt || title || "Illustration"}
              className="rounded-xl shadow-lg w-full"
              loading="lazy"
            />
          )}
          <ChartBlock chart={chart || autoChart} />
        </div>
      )}
    </section>
  );
}
