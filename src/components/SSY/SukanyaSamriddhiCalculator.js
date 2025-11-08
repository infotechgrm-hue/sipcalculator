"use client";
import React, { useState, useMemo } from "react";
import SSYResult from "../SSY/SSYResult";
import SIPChart from "../SIP/SIPChart";
import ProgressBar from "../UI/ProgressBar";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

/* Utility: currency formatter */
const pretty = (n) => `₹ ${Math.round(Number(n || 0)).toLocaleString("en-IN")}`;

/* ===== SSY CALCULATOR ===== */
export default function SukanyaSamriddhiCalculator() {
  const [data, setData] = useState({
    yearlyInvestment: 10000,
    girlAge: 6,
    startYear: 2021,
  });

  // fixed interest rate (govt. notified)
  const annualRate = 8.2;
  const compoundingPerYear = 1;
  const depositYears = 15;
  const totalYears = 21;

  /* === SSY Calculation Logic ===
     Deposits for 15 years, interest till 21 years.
     Approx formula for yearly compounding:
     FV = P * [((1 + r)^n - 1) / r] * (1 + r)^m
     where m = remaining non-deposit years (21 - n)
  */
  const result = useMemo(() => {
    const P = data.yearlyInvestment;
    const r = annualRate / 100;
    const n = compoundingPerYear;

    // 1️⃣ Compound deposits each year for 15 years
    let maturityAt15 = 0;
    for (let i = 1; i <= depositYears; i++) {
      maturityAt15 += P * Math.pow(1 + r / n, n * (depositYears - i + 1));
    }

    // 2️⃣ Now compound that total for remaining 6 years
    const remainingYears = totalYears - depositYears;
    const totalMaturity =
      maturityAt15 * Math.pow(1 + r / n, n * remainingYears);

    const invested = P * depositYears;
    const interest = totalMaturity - invested;
    const maturityYear = data.startYear + totalYears;

    return {
      invested,
      interest,
      totalValue: totalMaturity,
      maturityYear,
    };
  }, [data]);

  const totalReturnPct =
    result.invested > 0
      ? ((result.interest / result.invested) * 100).toFixed(1)
      : 0;

  /* Handler */
  const handleChange = (key, val) =>
    setData((p) => ({
      ...p,
      [key]: typeof val === "number" ? val : Number(val),
    }));

  return (
    <div className="mx-auto w-full max-w-[900px] rounded-2xl p-6 md:p-8 bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-100 dark:ring-gray-800">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Sukanya Samriddhi Yojana (SSY) Calculator
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Latest SSY Rate ={" "}
          <span className="text-emerald-600 font-semibold">8.2%</span>
        </p>
      </div>

      {/* Layout: Inputs + Charts */}
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
        {/* LEFT SIDE – Inputs + Results */}
        <div className="space-y-6">
          <SliderInput
            label="Yearly investment"
            min={250}
            max={150000}
            step={1000}
            value={data.yearlyInvestment}
            onChange={(v) => handleChange("yearlyInvestment", v)}
            suffix="₹"
          />

          <SliderInput
            label="Girl's age"
            min={0}
            max={10}
            step={1}
            value={data.girlAge}
            onChange={(v) => handleChange("girlAge", v)}
            suffix="Yr"
          />

          <SliderInput
            label="Start period"
            min={2015}
            max={2030}
            step={1}
            value={data.startYear}
            onChange={(v) => handleChange("startYear", v)}
          />

          {/* Result summary */}
          <div className="mt-6 w-full rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm bg-white dark:bg-gray-800">
            <SSYResult
              invested={result.invested}
              returns={result.interest}
              total={result.totalValue}
              maturityYear={data.startYear + 21}
              showIcons={true}
            />
          </div>
        </div>

        {/* RIGHT SIDE – Charts */}
        <div className="flex flex-col gap-6">
          {/* Chart */}
          <div className="rounded-xl border border-gray-100 dark:border-gray-700 p-4 shadow-sm flex items-center justify-center bg-white dark:bg-gray-800">
            <div className="aspect-square w-[80%] max-w-[280px]">
              <SIPChart invested={result.invested} returns={result.interest} />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="rounded-xl border border-gray-100 dark:border-gray-700 p-4 shadow-sm flex items-center justify-center bg-white dark:bg-gray-800">
            <ProgressBar
              percent={Number(totalReturnPct)}
              headline="Total Return %"
              subline={`${pretty(result.interest)} / ${pretty(
                result.invested
              )}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* 🎚 Shared Slider Input Component */
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
            value={value}
            onChange={handleInput}
            className={`w-24 text-right rounded-md border px-3 py-2 text-base font-semibold text-emerald-600 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-400 ${
              isPrefix ? "pl-6 pr-2" : "pr-6"
            }`}
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
