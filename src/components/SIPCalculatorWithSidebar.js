// components/SIP/SIPCalculatorWithSidebar.jsx
import React from "react";
import SIPCalculator from "../components/SIP/SIPCalculator";
import PopularCalculators from "../components/PopularCalculators";

const SIPCalculatorWithSidebar = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start ">
      <div className="flex-1 w-full order-1">
        <SIPCalculator />
      </div>

      <div className="w-full lg:w-1/5 order-2">
        <PopularCalculators />
      </div>
    </div>
  );
};

export default SIPCalculatorWithSidebar;
