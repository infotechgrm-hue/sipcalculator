// components/PopularCalculatorsSidebar.jsx
import Link from "next/link";

const popular = [
  { label: "SIP Calculator", href: "/" },
  { label: "Lumpsum Calculator", href: "/lumpsum-calculator" },
  { label: "Mutual Fund Return Calculator", href: "/mutual-fund-return-calculator" },
  { label: "Sukanya Samriddhi Yojna Calculator", href: "/sukanya-samriddhi-yojna-calculator" },
  { label: "SWP Calculator", href: "/swp-calculator" },
  { label: "FD Calculator", href: "/fd-calculator" },
  { label: "RD Calculator", href: "/rd-calculator" },
  { label: "EMI Calculator", href: "/emi-calculator" },
  
  // { label: "Retirement Calculator", href: "/retirement-calculator" },
  // { label: "Goal Calculator", href: "/goal-calculator" },
];

export default function PopularCalculatorsSidebar() {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Popular Calculators
      </h3>
      <ul className="space-y-2">
        {popular.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm border border-transparent hover:border-emerald-200 dark:hover:border-emerald-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
