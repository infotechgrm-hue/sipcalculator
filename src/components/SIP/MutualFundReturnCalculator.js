"use client";
import React, { useMemo, useState } from "react";
import { calculateSIP } from "../utils/sipUtils";
import { calculateLumpsum } from "../utils/lumpsumUtils";
import SIPChart from "./SIPChart";
import SIPResult from "./SIPResult";
import ToggleSwitch from "../UI/ToggleSwitch";
import ProgressBar from "../UI/ProgressBar";
import ComparisonChart from "./ComparisonChart";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pretty = (n) => `₹ ${Math.round(Number(n || 0)).toLocaleString("en-IN")}`;

export default function SIPCalculator() {
  const [mode, setMode] = useState("Lumpsum");
  const [data, setData] = useState({
    monthlyInvestment: 25000,
    annualRate: 12,
    years: 10,
    lumpsumInvestment: 25000,
  });

  const handleChange = (key, val) =>
    setData((p) => ({
      ...p,
      [key]: typeof val === "number" ? val : Number(val),
    }));

  const result =
    mode === "SIP"
      ? calculateSIP(data.monthlyInvestment, data.annualRate, data.years)
      : calculateLumpsum(data.lumpsumInvestment, data.annualRate, data.years);

  const totalReturnPct =
    result.investedAmount > 0
      ? ((result.estimatedReturns / result.investedAmount) * 100).toFixed(1)
      : 0;

  const comparisonSeries = useMemo(() => {
    const arr = [];
    for (let y = 1; y <= data.years; y++) {
      arr.push({
        year: `Year ${y}`,
        sip: calculateSIP(data.monthlyInvestment, data.annualRate, y)
          .totalValue,
        lumpsum: calculateLumpsum(data.lumpsumInvestment, data.annualRate, y)
          .totalValue,
      });
    }
    return arr;
  }, [data]);

  return (
    <div className="mx-auto w-full max-w-[1400px] md:rounded-2xl rounded-2xl md:p-8 p-4 bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-100 dark:ring-gray-800 transition-colors duration-300 md:w-[90%] sm:w-full">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Mutual Fund Return Calculator
        </h1>
      </div>

      {/* 🖥 Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-[1.2fr_1fr] gap-10">
        {/* Left Inputs */}
        <div className="space-y-6">
          {mode === "SIP" ? (
            <SliderInput
              label="Monthly investment"
              min={0}
              max={1000000}
              step={1000}
              value={data.monthlyInvestment}
              onChange={(v) => handleChange("monthlyInvestment", v)}
              suffix="₹"
            />
          ) : (
            <SliderInput
              label="Total investment"
              min={0}
              max={10000000}
              step={20000}
              value={data.lumpsumInvestment}
              onChange={(v) => handleChange("lumpsumInvestment", v)}
              suffix="₹"
            />
          )}

          <SliderInput
            label="Expected return rate (p.a)"
            min={1}
            max={50}
            step={0.1}
            value={data.annualRate}
            onChange={(v) => handleChange("annualRate", v)}
            suffix="%"
          />

          <SliderInput
            label="Time period"
            min={1}
            max={50}
            step={1}
            value={data.years}
            onChange={(v) => handleChange("years", v)}
            suffix="Yr"
          />

          {/* Results Section */}
          <div className="mt-6 w-full rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm bg-white dark:bg-gray-800">
            <SIPResult
              invested={result.investedAmount}
              returns={result.estimatedReturns}
              total={result.totalValue}
              showIcons={true}
            />
            {/* <button className="mt-5 w-full rounded-lg bg-emerald-500 px-4 py-3 font-medium text-white shadow-md transition hover:bg-emerald-600">
              INVEST NOW
            </button> */}
          </div>
        </div>

        {/* Right Charts */}
        <div className="flex flex-col gap-6">
          {/* Investment Breakdown */}
          <div className="rounded-xl border border-gray-100 dark:border-gray-700 p-4 shadow-sm flex flex-col items-center justify-center min-h-[240px] bg-white dark:bg-gray-800 h-0">
            {/* <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Investment Breakdown
            </h3> */}
            <div className="flex flex-col items-center justify-center w-full">
              <div className="aspect-square w-[80%] max-w-[280px]">
                <SIPChart
                  invested={result.investedAmount}
                  returns={result.estimatedReturns}
                />
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="rounded-xl border border-gray-100 dark:border-gray-700 p-4 shadow-sm flex items-center justify-center min-h-[220px] bg-white dark:bg-gray-800">
            <ProgressBar
              percent={Number(totalReturnPct)}
              headline="Total Return %"
              subline={`${pretty(result.estimatedReturns)} / ${pretty(
                result.investedAmount
              )}`}
            />
          </div>
        </div>
      </div>

      {/* 📱 Mobile Layout (Reordered) */}
      <div className="flex flex-col gap-6 md:hidden mt-4 w-full max-w-full mx-auto">
        {/* 1️⃣ Sliders */}
        <div className="space-y-6">
          {mode === "SIP" ? (
            <SliderInput
              label="Monthly investment"
              min={0}
              max={1000000}
              step={1000}
              value={data.monthlyInvestment}
              onChange={(v) => handleChange("monthlyInvestment", v)}
              suffix="₹"
            />
          ) : (
            <SliderInput
              label="Lumpsum investment"
              min={0}
              max={10000000}
              step={20000}
              value={data.lumpsumInvestment}
              onChange={(v) => handleChange("lumpsumInvestment", v)}
              suffix="₹"
            />
          )}

          <SliderInput
            label="Expected return rate (p.a)"
            min={1}
            max={50}
            step={0.1}
            value={data.annualRate}
            onChange={(v) => handleChange("annualRate", v)}
            suffix="%"
          />

          <SliderInput
            label="Time period"
            min={1}
            max={50}
            step={1}
            value={data.years}
            onChange={(v) => handleChange("years", v)}
            suffix="Yr"
          />
        </div>

        {/* 2️⃣ Results Section */}
        <div className="rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm bg-white dark:bg-gray-800">
          <SIPResult
            invested={result.investedAmount}
            returns={result.estimatedReturns}
            total={result.totalValue}
            showIcons={true}
          />
          {/* <button className="mt-5 w-full rounded-lg bg-emerald-500 px-4 py-3 font-medium text-white shadow-md transition hover:bg-emerald-600">
            INVEST NOW
          </button> */}
        </div>

        {/* 3️⃣ Investment Breakdown */}
        <div className="rounded-xl border border-gray-100 dark:border-gray-700 p-4 shadow-sm flex flex-col items-center justify-center bg-white dark:bg-gray-800">
          {/* <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Investment Breakdown
          </h3> */}
          <SIPChart
            invested={result.investedAmount}
            returns={result.estimatedReturns}
          />
        </div>

        {/* 4️⃣ Progress Bar */}
        <div className="rounded-xl border border-gray-100 dark:border-gray-700 p-4 shadow-sm flex items-center justify-center bg-white dark:bg-gray-800">
          <ProgressBar
            percent={Number(totalReturnPct)}
            headline="Total Return %"
            subline={`${pretty(result.estimatedReturns)} / ${pretty(
              result.investedAmount
            )}`}
          />
        </div>
      </div>
    </div>
  );
}

/* 🎚 Slider Input */
function SliderInput({ label, min, max, step, value, onChange, suffix }) {
  const isPrefix = suffix === "₹";
  const [error, setError] = React.useState("");

  const handleChange = (val) => {
    if (val < min) {
      setError(`Value cannot be less than ${min}`);
      onChange(min);
      return;
    }
    if (val > max) {
      setError(`Value cannot be greater than ${max}`);
      onChange(max);
      return;
    }
    setError("");
    onChange(val);
  };

  const handleInput = (e) => {
    let val = e.target.value.replace(/[^\d.]/g, "");
    if (val.startsWith("0") && val.length > 1 && !val.startsWith("0.")) {
      val = val.replace(/^0+/, "");
    }
    const num = val === "" ? 0 : Number(val);
    handleChange(num);
  };

  return (
    <div className="relative">
      <p className="mb-2 font-medium text-gray-700 dark:text-gray-300">
        {label}
      </p>
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full accent-emerald-500 cursor-pointer"
        />
        <div className="relative flex items-center">
          {isPrefix && (
            <span className="absolute left-2 text-emerald-600 text-sm font-semibold pointer-events-none">
              ₹
            </span>
          )}
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            value={value === 0 ? "" : value}
            onChange={handleInput}
            className={`w-28 text-right rounded-md border px-3 py-2 text-base font-semibold text-gray-700 dark:text-gray-100 transition-all duration-150 ${
              error
                ? "border-red-300 bg-red-50 focus:ring-red-400 dark:border-red-500 dark:bg-red-900/30"
                : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 focus:bg-emerald-50 dark:focus:bg-gray-700 focus:ring-2 focus:ring-emerald-400"
            } ${isPrefix ? "pl-6 pr-2" : "pr-6"}`}
          />
          {!isPrefix && suffix && (
            <span className="absolute right-2 text-emerald-600 text-sm font-semibold pointer-events-none">
              {suffix}
            </span>
          )}
        </div>
      </div>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="mt-2 flex items-center gap-1 text-red-500 text-sm"
          >
            <Info size={14} />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* 🧾 Info Box */
function InfoBox({ label, value, color }) {
  const colors = {
    emerald:
      "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-200",
    sky: "bg-sky-50 dark:bg-sky-900/30 text-sky-900 dark:text-sky-200",
    indigo:
      "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-200",
  };
  return (
    <div
      className={`rounded-lg p-3 text-sm ${colors[color]} transition-colors duration-300`}
    >
      <div>{label}</div>
      <div className="font-semibold tabular-nums">{value}</div>
    </div>
  );
}
