import Header from "@/components/Header";
import LumpsumCalculator from "@/components/SIP/LumpsumCalculator";
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
          Investing a single large amount can be a smart way to build wealth if
          done at the right time and for the right duration. Our{" "}
          <strong>Lumpsum Calculator</strong> helps you estimate how your
          one-time investment could grow over the years based on expected
          returns and tenure.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          Whether you’re planning for retirement, higher education, or long-term
          goals, this calculator shows the potential corpus your investment can
          achieve—helping you make confident and data-driven decisions.
        </p>

        <p className="text-base text-gray-600 dark:text-gray-400 italic">
          *Note: This calculator provides an estimated value based on assumed
          returns. Actual performance will vary with market conditions and fund
          behaviour.*
        </p>
      </section>

      {/* ===== WHY USE CALCULATOR ===== */}
      <EnhancedSection
        title="Why Use a Lumpsum Calculator?"
        content="A lumpsum calculator takes the guesswork out of investing. It lets you forecast how a one-time contribution can grow over time and compare various return scenarios."
        bullets={[
          "Estimate your investment’s potential value instantly.",
          "Experiment with different tenures and expected returns.",
          "Plan large financial goals with realistic projections.",
        ]}
        img="/images/sip-calculator.webp"
      />

      {/* ===== HOW COMPOUNDING WORKS ===== */}
      <EnhancedSection
        title="How Compounding Boosts Your Lumpsum Investment"
        content="Compounding is the core of long-term wealth creation. When your returns start earning their own returns, growth accelerates year after year—especially when you stay invested."
        bullets={[
          "Invest once and let your money grow automatically.",
          "Longer durations multiply growth through reinvested returns.",
          "Ideal for investors who can stay invested without withdrawals.",
        ]}
        formula={{
          title: "Lumpsum Future Value Formula",
          expression: "FV = P × (1 + r)^n",
          vars: [
            { k: "FV", v: "Future value of the investment" },
            { k: "P", v: "Principal or initial amount invested" },
            { k: "r", v: "Annual rate of return (in decimal form)" },
            { k: "n", v: "Investment period in years" },
          ],
        }}
      />

      <AddSlot slot="2234567891" />

      {/* ===== INVESTMENT BREAKDOWN ===== */}
      <EnhancedSection
        title="Investment Breakdown"
        content="See how your one-time investment divides between the amount you put in and the returns generated through compounding."
        chart={{
          type: "pie",
          title: "Invested vs Returns",
          data: [
            { label: "Est. Returns", value: 1210000 },
            { label: "Invested Amount", value: 1000000 },
          ],
          colors: ["#2563EB", "#10B981"],
        }}
      />

      <AddSlot slot="2234567892" />

      {/* ===== HOW RETURNS ARE CALCULATED ===== */}
      <EnhancedSection
        title="How Are Lumpsum Returns Calculated?"
        content="The calculator applies the compound-interest formula to estimate your final corpus. Since the entire amount compounds from day one, even small differences in rate or duration can change the outcome dramatically."
        formula={{
          title: "Lumpsum Return Formula",
          expression: "FV = P × (1 + r)^n",
          vars: [
            { k: "FV", v: "Future value of your investment" },
            { k: "P", v: "Initial principal amount" },
            { k: "r", v: "Annual rate of return" },
            { k: "n", v: "Number of years invested" },
          ],
        }}
      />

      <AddSlot slot="2234567895" />

      {/* ===== BENEFITS ===== */}
      <EnhancedSection
        title="Benefits of a Lumpsum Investment"
        content="A lumpsum approach can be a powerful strategy for those with available capital seeking long-term growth. It’s straightforward, disciplined, and highly effective when paired with the right fund choice."
        bullets={[
          "Compounding begins immediately on the full amount.",
          "No monthly tracking—invest once and monitor progress.",
          "Ideal for long-term goals such as retirement or education.",
        ]}
      />

      <AddSlot slot="2234567896" />

      {/* ===== LUMPSUM VS SIP ===== */}
      <EnhancedSection
        title="Lumpsum vs SIP – Which Should You Choose?"
        content="Both methods help investors achieve financial goals but work differently. SIPs suit regular income earners, while lumpsum investing benefits those with a surplus amount ready to invest."
        bullets={[
          "SIPs average out market volatility through gradual investing.",
          "Lumpsum investments earn full-scale compounding from day one.",
          "Your choice depends on cash flow, risk tolerance, and goals.",
        ]}
      />

      <AddSlot slot="2234567897" />

      {/* ===== TIPS ===== */}
      <EnhancedSection
        title="Smart Tips for Lumpsum Investors"
        content="Maximize returns and minimize risk by following simple principles used by seasoned investors."
        bullets={[
          "Invest during stable or undervalued market phases.",
          "Diversify across asset classes to balance growth and safety.",
          "Review your portfolio annually to stay aligned with goals.",
        ]}
      />

      <AddSlot slot="2234567898" />

      {/* ===== CONCLUSION ===== */}
      <EnhancedSection
        title="Plan Your Lumpsum Investment Today"
        content="Use this Lumpsum Calculator to see how a single decision today can grow into meaningful wealth tomorrow. With clarity on potential outcomes, you can invest confidently and stay focused on long-term success."
        bullets={[
          "Set a clear financial goal and investment horizon.",
          "Use data-backed projections for better planning.",
          "Stay patient—time and compounding will do the rest.",
        ]}
      />

      {/* ===== FOOTER ===== */}
      <Faqs />
      <Footer />
    </main>
  );
}
