import Header from "@/components/Header";
import LumpsumCalculator from "@/components/SIP/LumpsumCalculator";
import Script from "next/script";
import PopularCalculators from "@/components/PopularCalculators";
import EnhancedSection from "@/components/EnhancedSection";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";
import AddSlot from "@/components/AddSlot";

export default function Home() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header />

      {/* ===== MAIN CALCULATOR LAYOUT ===== */}
      <div className="max-w-7xl w-full mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="flex-1 w-full order-1">
            <LumpsumCalculator />
          </div>
          <div className="w-full lg:w-1/5 order-2">
            <PopularCalculators />
          </div>
        </div>
      </div>

      <AddSlot slot="1234567890" />

      {/* ===== INTRO / OVERVIEW ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-600 mb-4">
          Lumpsum Calculator – Calculate Your One-Time Investment Growth
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          A <strong>Lumpsum Calculator</strong> helps you estimate how your
          one-time investment can grow over the years through compounding. By
          entering your amount, expected return rate, and time period, you can
          quickly see the potential maturity value.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          Whether you’re investing for retirement, your child’s education, or
          wealth creation, this tool provides accurate projections for smarter
          planning. It’s ideal for long-term investors who prefer a one-time
          contribution over regular SIPs.
        </p>

        <p className="text-base text-gray-600 dark:text-gray-400 italic">
          *Note: These are estimated values and may vary depending on market
          conditions and fund performance.*
        </p>
      </section>

      {/* ===== WHY USE CALCULATOR ===== */}
      <EnhancedSection
        title="Why Use a Lumpsum Calculator?"
        content="A lumpsum calculator lets you visualize your future wealth instantly. It helps in planning investments strategically and understanding how compounding impacts your final corpus."
        bullets={[
          "See potential growth instantly across different timeframes.",
          "Compare expected returns for 5, 10, or 15 years.",
          "Avoid manual compounding math and save time.",
        ]}
        img="/images/lumpsum-calculator.webp"
      />

      {/* ===== HOW COMPOUNDING WORKS ===== */}
      <EnhancedSection
        title="How Compounding Boosts Your Lumpsum Investment"
        content="When you invest a lumpsum amount, the returns generated every year get reinvested. Over time, your investment grows exponentially due to the power of compounding."
        bullets={[
          "One-time investment compounds for the full duration.",
          "Even small differences in rate or time lead to huge changes.",
          "Start early to maximize your compounding advantage.",
        ]}
        formula={{
          title: "Lumpsum Future Value Formula",
          expression: "FV = P × (1 + r)^n",
          vars: [
            { k: "FV", v: "Future value of your investment" },
            { k: "P", v: "Initial amount invested" },
            { k: "r", v: "Annual rate of return (decimal form)" },
            { k: "n", v: "Number of years" },
          ],
        }}
      />

      {/* ===== TABLE: GROWTH EXAMPLES ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center md:text-left">
          Example: How Different Lumpsum Investments Grow
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
            <thead className="bg-emerald-100 text-gray-800 font-semibold">
              <tr>
                <th className="p-3 border">Investment Amount (₹)</th>
                <th className="p-3 border">Duration (Years)</th>
                <th className="p-3 border">Expected Return (p.a.)</th>
                <th className="p-3 border">Estimated Future Value (₹)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border text-center">1,00,000</td>
                <td className="p-3 border text-center">5</td>
                <td className="p-3 border text-center">10%</td>
                <td className="p-3 border text-center">1,61,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">2,00,000</td>
                <td className="p-3 border text-center">10</td>
                <td className="p-3 border text-center">12%</td>
                <td className="p-3 border text-center">6,21,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">5,00,000</td>
                <td className="p-3 border text-center">15</td>
                <td className="p-3 border text-center">11%</td>
                <td className="p-3 border text-center">23,20,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">10,00,000</td>
                <td className="p-3 border text-center">20</td>
                <td className="p-3 border text-center">10%</td>
                <td className="p-3 border text-center">67,27,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">
          *These figures are illustrative and for educational purposes only.*
        </p>
      </section>

      <AddSlot slot="2234567891" />

      {/* ===== REAL-LIFE SCENARIOS ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center md:text-left">
          Real-Life Lumpsum Investment Scenarios
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
            <thead className="bg-emerald-100 text-gray-800 font-semibold">
              <tr>
                <th className="p-3 border">Investor</th>
                <th className="p-3 border">Goal</th>
                <th className="p-3 border">Amount (₹)</th>
                <th className="p-3 border">Duration</th>
                <th className="p-3 border">Est. Value (12%)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border text-center">Ravi (Age 30)</td>
                <td className="p-3 border text-center">Retirement</td>
                <td className="p-3 border text-center">5,00,000</td>
                <td className="p-3 border text-center">25 Years</td>
                <td className="p-3 border text-center">83,95,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">Priya (Age 28)</td>
                <td className="p-3 border text-center">Child’s Education</td>
                <td className="p-3 border text-center">3,00,000</td>
                <td className="p-3 border text-center">18 Years</td>
                <td className="p-3 border text-center">19,20,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">Amit (Age 35)</td>
                <td className="p-3 border text-center">Wealth Building</td>
                <td className="p-3 border text-center">10,00,000</td>
                <td className="p-3 border text-center">20 Years</td>
                <td className="p-3 border text-center">96,46,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">
          *Based on historical mutual fund returns. Actual results will vary.*
        </p>
      </section>

      <AddSlot slot="2234567892" />

      {/* ===== LUMPSUM VS SIP COMPARISON ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center md:text-left">
          Lumpsum vs SIP: Return Comparison Example
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
            <thead className="bg-emerald-100 text-gray-800 font-semibold">
              <tr>
                <th className="p-3 border">Investment Type</th>
                <th className="p-3 border">Amount</th>
                <th className="p-3 border">Duration</th>
                <th className="p-3 border">Return (p.a.)</th>
                <th className="p-3 border">Future Value (₹)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border text-center">Lumpsum</td>
                <td className="p-3 border text-center">5,00,000 (once)</td>
                <td className="p-3 border text-center">10 Years</td>
                <td className="p-3 border text-center">12%</td>
                <td className="p-3 border text-center">15,52,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">SIP</td>
                <td className="p-3 border text-center">5,000/month</td>
                <td className="p-3 border text-center">10 Years</td>
                <td className="p-3 border text-center">12%</td>
                <td className="p-3 border text-center">11,61,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">
          *SIP provides cost-averaging benefits, while Lumpsum grows faster if
          invested early.*
        </p>
      </section>

      {/* ===== CONCLUSION ===== */}
      <EnhancedSection
        title="Plan Your Lumpsum Investment Today"
        content="Use this Lumpsum Calculator to forecast your future corpus, make informed financial decisions, and let time and compounding grow your wealth naturally."
        bullets={[
          "Define your financial goal and timeline.",
          "Experiment with different rates and tenures.",
          "Invest early, stay invested, and track growth yearly.",
        ]}
      />

      {/* ===== FOOTER ===== */}
      <Faqs type="lumpsum" />
      <Footer />
      <Script
        id="ld-json-lumpsum-calculator"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            name: "Lumpsum Calculator",
            url: "https://www.sipcalculator.tech/lumpsum-calculator",
            description:
              "A Lumpsum Calculator helps you estimate how your one-time investment can grow over the years through compounding. By entering your amount, expected return rate, and time period, you can quickly see the potential maturity value.",
            provider: {
              "@type": "Organization",
              name: "SIPCalculator.tech",
              url: "https://www.sipcalculator.tech",
              logo: "https://www.sipcalculator.tech/favicon.ico",
            },
            category: "Finance",
            applicationCategory: "FinanceApplication",
            potentialAction: {
              "@type": "UseAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://www.sipcalculator.tech/",
              },
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </main>
  );
}
