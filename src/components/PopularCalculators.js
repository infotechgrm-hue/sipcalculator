// components/PopularCalculators.jsx
import React from 'react';
import Link from 'next/link';

// Data for the popular calculators
const calculators = [
  { name: "Lumpsum Calculator", href: "/lumpsum" },
  { name: "SWP Calculator", href: "/swp" },
  { name: "Mutual Fund Returns Calculator", href: "/mf-returns" },
  { name: "Sukanya Samriddhi Yojana Calculator", href: "/ssy" },
  { name: "Income Tax Calculator", href: "/income-tax" },
  { name: "FD Calculator", href: "/fd" },
  { name: "PPF Calculator", href: "/ppf" },
  { name: "EPF Calculator", href: "/epf" },
  { name: "RD Calculator", href: "/rd" },
  { name: "EMI Calculator", href: "/emi" },
  { name: "GST Calculator", href: "/gst" },
  { name: "XIRR Calculator", href: "/xirr" },
];

// Re-using the InvestmentPromoBox for structure
const InvestmentPromoBox = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 text-center mb-6">
        <div className="flex justify-center mb-3">
            {/* Placeholder SVG */}
            <svg viewBox="0 0 100 100" className="w-12 h-12">
                <circle cx="50" cy="80" r="15" fill="#fdb32a"/>
                <path d="M40 70 L60 70 L62 50 L38 50 Z" fill="#b9804b"/>
                <circle cx="45" cy="40" r="5" fill="#10b981"/>
                <circle cx="55" cy="35" r="5" fill="#2563eb"/>
                <path d="M48 50 L48 30 M52 50 L52 30" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Invest the way you want
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Join millions of Indians who trust and love Groww
        </p>
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition">
            EXPLORE PRODUCTS
        </button>
    </div>
);


const PopularCalculators = () => {
  return (
    // Side content container (includes the promo box and the list)
    <div className="space-y-6">
        <InvestmentPromoBox />
        
        {/* Popular Calculators List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-0 overflow-hidden">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white p-4">
                Popular Calculators
            </h3>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {calculators.map((calculator, index) => (
                    <li key={index}>
                        <Link href={calculator.href} className="block hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out">
                            <span className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                                {calculator.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default PopularCalculators;