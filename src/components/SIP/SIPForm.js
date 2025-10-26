"use client";
import React from "react";
import SliderInput from "../UI/SliderInput";

const SIPForm = ({ data, onChange }) => {
  const { monthlyInvestment, annualRate, years } = data;

  return (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <p className="font-medium text-gray-700 mb-1">Monthly investment</p>
        <SliderInput
          min={500}
          max={100000}
          step={500}
          value={monthlyInvestment}
          onChange={(val) => onChange("monthlyInvestment", val)}
          unit="₹"
        />
      </div>

      <div>
        <p className="font-medium text-gray-700 mb-1">Expected return rate (p.a)</p>
        <SliderInput
          min={5}
          max={20}
          step={0.5}
          value={annualRate}
          onChange={(val) => onChange("annualRate", val)}
          unit="%"
        />
      </div>

      <div>
        <p className="font-medium text-gray-700 mb-1">Time period</p>
        <SliderInput
          min={1}
          max={30}
          step={1}
          value={years}
          onChange={(val) => onChange("years", val)}
          unit="Yr"
        />
      </div>
    </div>
  );
};

export default SIPForm;
