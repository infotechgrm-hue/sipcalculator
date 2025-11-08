import Header from "@/components/Header";
import SIPCalculator from "@/components/SIP/SIPCalculator";
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

      {/* Main SIP Calculator Layout */}
      <div className="max-w-7xl w-full mx-auto py-8">
        {/* Use the new layout component here */}
        <div className="flex flex-col lg:flex-row lg:items-start ">
          <div className="flex-1 w-full order-1">
            <SIPCalculator />
          </div>
          <div className="w-full lg:w-1/5 order-2">
            <PopularCalculators />
          </div>
        </div>
      </div>

      {/* Ad below meter */}
      <AddSlot slot="1234567890" />
      {/* ======================== SEO CONTENT SECTIONS ======================== */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-600 mb-4">
          SIP Calculator – Systematic Investment Plan Returns Estimator
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          Many investors often mix up mutual funds and SIPs, but they’re not the
          same. A<strong> Systematic Investment Plan (SIP)</strong> is simply a
          disciplined method of investing in mutual funds—bit by bit, at fixed
          intervals—rather than investing a large lump sum all at once. SIPs
          make market participation easier and more consistent for regular
          investors.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          The <strong>SIP Calculator</strong> is a practical tool that estimates
          how your investments could grow over time. It helps you understand the
          potential wealth creation from your monthly contributions, based on an
          expected rate of return. Whether you invest weekly, monthly, or
          quarterly, the calculator gives a clear snapshot of your estimated
          corpus at the end of your chosen tenure.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          SIPs have become one of the most popular ways to invest in mutual
          funds—especially among young investors seeking consistent and
          goal-oriented growth. With this SIP calculator, you can project your{" "}
          <strong>total investment, expected gains</strong>, and{" "}
          <strong>maturity amount</strong> in seconds. It’s designed for
          simplicity, accuracy, and smarter decision-making—helping you plan
          your financial journey with confidence.
        </p>

        <p className="text-base text-gray-600 dark:text-gray-400 italic">
          *Note: This calculator provides an estimate based on assumed returns.
          Actual results may vary depending on market conditions, fund
          performance, and applicable charges such as exit load or expense
          ratio.*
        </p>
      </section>
      {/* 3. Why Use an SIP Calculator */}
      <EnhancedSection
        title="Why Use an SIP Calculator?"
        content="An SIP calculator lets you plan with clarity, compare strategies, and stay realistic about outcomes. It’s the fastest way to estimate corpus, fine-tune contributions, and align your goals with time horizons."
        bullets={[
          "Estimate maturity value instantly.",
          "Reverse-calc monthly amount from a target goal.",
          "Compare multiple rates, tenures, and scenarios.",
        ]}
        img="/images/sip-calculator.webp"
      />
      {/* 1. How SIP Compounding Works */}
      <EnhancedSection
        title="How Does SIP Compounding Work?"
        content="SIPs grow on the power of compounding. Every monthly contribution earns returns, and those returns start earning their own returns as well. The longer you stay invested, the steeper the growth curve becomes."
        bullets={[
          "Invest at a fixed frequency (monthly SIPs are most common).",
          "Stay consistent to benefit from rupee-cost averaging.",
          "Let time and compounding do the heavy lifting.",
        ]}
        formula={{
          title: "SIP Maturity Formula",
          expression: "A = P × {([1 + r]^n – 1) / r} × (1 + r)",
          vars: [
            { k: "A", v: "Maturity amount" },
            { k: "P", v: "Monthly investment (contribution)" },
            {
              k: "r",
              v: "Rate of return per month (annual rate converted to monthly)",
            },
            { k: "n", v: "Total number of instalments (months)" },
          ],
        }}
        monthly={15000}
        annualRate={12}
        years={10}
        // img="/images/how-sip-works.webp"
      />
      <AddSlot slot="2234567891" />
      {/* 2. Investment Breakdown (Pie Chart) */}
      <EnhancedSection
        title="Investment Breakdown"
        content="Here’s how your final corpus is composed — the amount you’ve invested over time versus the wealth created through market returns."
        chart={{
          type: "pie",
          title: "Invested vs. Returns",
          data: [
            { label: "Est. Returns", value: 2808477 },
            { label: "Invested Amount", value: 3000000 },
          ],
          colors: ["#2563EB", "#10B981"],
        }}
        // img="/images/breakdown.webp"
      />
      <AddSlot slot="2234567892" />
      {/* 5. SIP Returns Formula */}
      <EnhancedSection
        title="How Are SIP Returns Calculated?"
        content="The SIP calculator uses a mathematical formula to determine the maturity value of your investments. This formula accounts for compounding returns on each monthly investment, giving you a precise idea of your total corpus."
        formula={{
          title: "SIP Return Calculation Formula",
          expression: "A = P × {([1 + r]^n – 1) / r} × (1 + r)",
          vars: [
            { k: "A", v: "Maturity amount" },
            { k: "P", v: "Monthly investment" },
            { k: "r", v: "Monthly rate of return" },
            { k: "n", v: "Number of months invested" },
          ],
        }}
        // img="/images/formula-sip.webp"
      />
      <AddSlot slot="2234567895" />
      {/* 6. Benefits of Using SIP Calculator */}
      <EnhancedSection
        title="Benefits of Using an SIP Calculator"
        content="An SIP calculator empowers you to make informed investment decisions. It helps maintain consistency, visualize your growth, and adjust your SIPs as per your goals. Whether you’re saving for retirement or wealth creation, this tool makes planning easier and smarter."
        bullets={[
          "Plan your financial goals with clarity.",
          "Visualize future corpus and returns.",
          "Stay disciplined with consistent SIPs.",
        ]}
        // img="/images/advantages-sip.webp"
      />
      <AddSlot slot="2234567896" />
      {/* 7. SIP vs Lump Sum Investment */}
      <EnhancedSection
        title="SIP vs Lump Sum Investment"
        content="Both SIP and lump sum investing have their merits. SIPs offer cost-averaging benefits and flexibility, while lump sum investments work well for those with available capital seeking long-term gains. The SIP calculator helps you evaluate which approach aligns best with your goals."
        bullets={[
          "SIPs help average out market volatility.",
          "Lump sum suits those with a large one-time capital.",
          "Both can be used strategically for portfolio balance.",
        ]}
        // img="/images/sip-vs-lumpsum.webp"
      />
      <AddSlot slot="2234567897" />
      {/* 8. Tips to Maximize SIP Returns */}
      <EnhancedSection
        title="Tips to Maximize SIP Returns"
        content="To make the most out of your SIP investments, start early, stay consistent, and periodically review your portfolio. Even small step-up increments can create huge long-term benefits thanks to compounding."
        bullets={[
          "Start investing early for maximum compounding effect.",
          "Increase SIP amount annually with a step-up plan.",
          "Avoid stopping SIPs during short-term market dips.",
        ]}
        // img="/images/tips-sip.webp"
      />
      <AddSlot slot="2234567898" />
      {/* 9. Start SIP Journey */}
      <EnhancedSection
        title="Start Your SIP Journey Today"
        content="SIPs make investing simple, flexible, and rewarding. With the help of an SIP calculator, you can visualize your financial future and stay committed to your goals. Begin today and let time and compounding work their magic."
        bullets={[
          "Define your goal and target timeline.",
          "Use SIP calculator to plan your monthly contribution.",
          "Stay invested — consistency builds wealth.",
        ]}
        // img="/images/start-sip.webp"
      />
      {/* Footer */}
      <Faqs type="sip" />
      <Footer />
    </main>
  );
}
