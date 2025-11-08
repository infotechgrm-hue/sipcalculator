import Header from "@/components/Header";
import MutualFundReturnCalculator from "@/components/SIP/MutualFundReturnCalculator";
import PopularCalculators from "@/components/PopularCalculators";
import EnhancedSection from "@/components/EnhancedSection";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";
import AddSlot from "@/components/AddSlot";

export const metadata = {
  title: "Mutual Fund Return Calculator | Estimate MF Growth & Performance",
  description:
    "Use the Mutual Fund Return Calculator to estimate how your mutual fund investment could grow over time. Get accurate projections based on investment amount, duration, and expected returns. Plan smarter for your financial goals with this easy-to-use tool.",
  openGraph: {
    title: "Mutual Fund Return Calculator | Estimate MF Growth & Performance",
    description:
      "Estimate your mutual fund returns with this easy-to-use calculator. Plan your investments smartly with data-backed projections.",
    url: "https://www.sipcalculator.tech/mutual-fund-return-calculator",
    images: [
      {
        url: "https://www.sipcalculator.tech/og-images/mfr-og.webp",
        width: 1200,
        height: 630,
        alt: "Mutual Fund Return Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutual Fund Return Calculator | Estimate MF Growth & Performance",
    description:
      "Project your mutual fund growth easily. Calculate expected returns and compare with SIP or lumpsum investment strategies.",
    images: [
      "https://www.sipcalculator.tech/og-images/mfr-og.webp",
    ],
  },
};

export default function MutualFundReturnCalculatorPage() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header />

      {/* ===== MAIN CALCULATOR SECTION ===== */}
      <div className="max-w-7xl w-full mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="flex-1 w-full order-1">
            <MutualFundReturnCalculator />
          </div>
          <div className="w-full lg:w-1/5 order-2">
            <PopularCalculators />
          </div>
        </div>
      </div>

      <AddSlot slot="1234567890" />

      {/* ===== INTRO ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-600 mb-4">
          Mutual Fund Return Calculator – Estimate Your Investment Growth
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          A <strong>Mutual Fund Return Calculator</strong> helps investors
          estimate the potential growth of their investments in equity, debt, or
          hybrid funds. By entering details such as the invested amount,
          duration, and expected rate of return, you can instantly know how your
          wealth may appreciate over time.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          This tool simplifies complex return calculations and helps investors
          make informed decisions. Whether you're planning for long-term goals
          like retirement or short-term ones like a vacation, understanding how
          your money grows is the first step to smart investing.
        </p>

        <p className="text-base text-gray-600 dark:text-gray-400 italic">
          *Note: The calculator offers estimated results based on historical
          performance assumptions. Actual returns may differ due to market
          fluctuations.*
        </p>
      </section>

      {/* ===== WHY USE IT ===== */}
      <EnhancedSection
        title="Why Use a Mutual Fund Return Calculator?"
        content="The Mutual Fund Return Calculator empowers investors to forecast returns, compare performance, and plan better. It offers clarity about how compounding and market-linked returns influence your total wealth."
        bullets={[
          "Quickly estimate fund growth over different time horizons.",
          "Helps compare SIP vs Lumpsum strategies for your goals.",
          "Avoids manual computation errors and saves time.",
        ]}
        img="/images/mutual-fund-calculator.webp"
      />

      {/* ===== HOW RETURNS ARE CALCULATED ===== */}
      <EnhancedSection
        title="How Are Mutual Fund Returns Calculated?"
        content="Mutual fund returns depend on Net Asset Value (NAV) appreciation over time. When the NAV rises, your investment gains value. The calculator uses compounding to project growth accurately."
        formula={{
          title: "Future Value Formula (Lumpsum)",
          expression: "FV = P × (1 + r)^n",
          vars: [
            { k: "FV", v: "Future value of investment" },
            { k: "P", v: "Invested amount" },
            { k: "r", v: "Annual rate of return" },
            { k: "n", v: "Number of years invested" },
          ],
        }}
        bullets={[
          "NAV appreciation directly impacts returns.",
          "Longer durations smooth out short-term volatility.",
          "Reinvested earnings compound and accelerate growth.",
        ]}
      />

      {/* ===== TABLE: EXAMPLES ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center md:text-left">
          Example: Mutual Fund Return Scenarios
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
            <thead className="bg-emerald-100 text-gray-800 font-semibold">
              <tr>
                <th className="p-3 border">Fund Type</th>
                <th className="p-3 border">Investment (₹)</th>
                <th className="p-3 border">Duration</th>
                <th className="p-3 border">Expected Return (p.a.)</th>
                <th className="p-3 border">Future Value (₹)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border text-center">Equity Fund</td>
                <td className="p-3 border text-center">2,00,000</td>
                <td className="p-3 border text-center">10 Years</td>
                <td className="p-3 border text-center">12%</td>
                <td className="p-3 border text-center">6,21,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">Balanced Fund</td>
                <td className="p-3 border text-center">3,00,000</td>
                <td className="p-3 border text-center">15 Years</td>
                <td className="p-3 border text-center">10%</td>
                <td className="p-3 border text-center">12,54,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">Debt Fund</td>
                <td className="p-3 border text-center">5,00,000</td>
                <td className="p-3 border text-center">8 Years</td>
                <td className="p-3 border text-center">7%</td>
                <td className="p-3 border text-center">8,59,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">
          *These projections are for illustration only. Actual performance may
          vary based on market conditions.*
        </p>
      </section>

      <AddSlot slot="2234567891" />

      {/* ===== REAL-LIFE CASES ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center md:text-left">
          Real-Life Mutual Fund Growth Examples
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
            <thead className="bg-emerald-100 text-gray-800 font-semibold">
              <tr>
                <th className="p-3 border">Investor</th>
                <th className="p-3 border">Fund Type</th>
                <th className="p-3 border">Investment</th>
                <th className="p-3 border">Tenure</th>
                <th className="p-3 border">Expected Value (₹)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border text-center">Ravi (Age 35)</td>
                <td className="p-3 border text-center">Equity Fund</td>
                <td className="p-3 border text-center">5,00,000</td>
                <td className="p-3 border text-center">20 Years</td>
                <td className="p-3 border text-center">32,20,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">Anjali (Age 29)</td>
                <td className="p-3 border text-center">Hybrid Fund</td>
                <td className="p-3 border text-center">3,00,000</td>
                <td className="p-3 border text-center">15 Years</td>
                <td className="p-3 border text-center">12,10,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">Vikas (Age 40)</td>
                <td className="p-3 border text-center">Debt Fund</td>
                <td className="p-3 border text-center">10,00,000</td>
                <td className="p-3 border text-center">10 Years</td>
                <td className="p-3 border text-center">19,67,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <AddSlot slot="2234567892" />

      {/* ===== COMPARISON ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center md:text-left">
          Mutual Fund vs Fixed Deposit Returns
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
            <thead className="bg-emerald-100 text-gray-800 font-semibold">
              <tr>
                <th className="p-3 border">Investment Type</th>
                <th className="p-3 border">Investment (₹)</th>
                <th className="p-3 border">Duration</th>
                <th className="p-3 border">Return (p.a.)</th>
                <th className="p-3 border">Future Value (₹)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border text-center">Mutual Fund (Equity)</td>
                <td className="p-3 border text-center">5,00,000</td>
                <td className="p-3 border text-center">10 Years</td>
                <td className="p-3 border text-center">12%</td>
                <td className="p-3 border text-center">15,52,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">Fixed Deposit</td>
                <td className="p-3 border text-center">5,00,000</td>
                <td className="p-3 border text-center">10 Years</td>
                <td className="p-3 border text-center">6%</td>
                <td className="p-3 border text-center">8,95,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">
          *Mutual funds carry market risk, but historically outperform fixed
          deposits in the long run.*
        </p>
      </section>

      {/* ===== FINAL CTA ===== */}
      <EnhancedSection
        title="Start Investing Smartly with Mutual Fund Calculator"
        content="The Mutual Fund Return Calculator gives you a clearer picture of potential growth and helps plan long-term financial goals efficiently. Use it before investing to align your strategy with realistic expectations."
        bullets={[
          "Estimate future value based on expected returns.",
          "Adjust parameters to fit your personal goals.",
          "Take control of your investments with knowledge.",
        ]}
      />

      <Faqs type="mutualfund" />
      <Footer />
    </main>
  );
}
