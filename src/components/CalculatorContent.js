// components/CalculatorContent.jsx
import EnhancedSection from "@/components/EnhancedSection";
import AddSlot from "@/components/AddSlot";

// You can keep everything fully hardcoded per variant:
export default function CalculatorContent({ variant = "sip" }) {
  if (variant === "lumpsum") {
    return (
      <>
        <section className="max-w-6xl mx-auto px-4 py-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-600 mb-4">
            Lumpsum Calculator — One-Time Investment Returns Estimator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            Planning a one-time mutual fund investment? The Lumpsum Calculator
            estimates the future value of a single contribution based on an
            expected annual return and your chosen time horizon. It’s an easy
            way to visualize long-term growth and compare scenarios.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 italic">
            *This tool provides estimates, not guarantees. Actual outcomes depend on
            market performance and scheme-specific charges.*
          </p>
        </section>

        <EnhancedSection
          title="How Lumpsum Growth Works"
          content="A one-time investment compounds over time at the assumed annual rate. The longer the tenure, the bigger the effect of compounding."
          bullets={[
            "Invest once; let compounding do the heavy lifting.",
            "Great for long-term goals when you have available capital.",
            "Compare tenures and return assumptions before you invest.",
          ]}
          formula={{
            title: "Lumpsum Future Value",
            expression: "FV = P × (1 + r)^n",
            vars: [
              { k: "FV", v: "Future value at maturity" },
              { k: "P", v: "Initial (one-time) investment" },
              { k: "r", v: "Annual rate of return (decimal)" },
              { k: "n", v: "Number of years" },
            ],
          }}
          img="/images/lumpsum.webp"
        />

        <AddSlot slot="2234567892" />

        <EnhancedSection
          title="When to Prefer Lumpsum Over SIP?"
          content="Both approaches have strengths. Choose lumpsum when you have idle cash and a long horizon, or SIPs when you value rupee-cost averaging and habit formation."
          bullets={[
            "Lumpsum: best when you can invest a large amount upfront.",
            "SIP: smoothens volatility; great for building discipline.",
            "Many investors use a mix for balance and flexibility.",
          ]}
        />
      </>
    );
  }

  // Default: SIP content (your previous hardcoded sections)
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-600 mb-4">
          SIP Calculator – Systematic Investment Plan Returns Estimator
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          A <strong>Systematic Investment Plan (SIP)</strong> lets you invest a
          fixed amount at regular intervals into mutual funds. Our SIP
          calculator estimates how your monthly contributions could grow over
          time based on an expected rate of return and your chosen tenure.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 italic">
          *This tool provides estimates based on assumptions. Real outcomes can
          vary with market conditions and scheme costs.*
        </p>
      </section>

      <EnhancedSection
        title="Why Use an SIP Calculator?"
        content="Plan with clarity, compare scenarios, and align your monthly contributions with your goal timeline."
        bullets={[
          "Estimate maturity value instantly.",
          "Reverse-calculate monthly amount from a target goal.",
          "Compare multiple rates, tenures, and scenarios.",
        ]}
        img="/images/sip-calculator.webp"
      />

      <EnhancedSection
        title="How Does SIP Compounding Work?"
        content="Each monthly contribution compounds, and your returns start earning returns too — compounding accelerates with time."
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
            { k: "r", v: "Rate of return per month" },
            { k: "n", v: "Total number of instalments (months)" },
          ],
        }}
      />

      <AddSlot slot="2234567891" />

      <EnhancedSection
        title="Investment Breakdown"
        content="A simple view of invested principal vs. wealth created through returns."
        chart={{
          type: "pie",
          title: "Invested vs. Returns",
          data: [
            { label: "Est. Returns", value: 2808477 },
            { label: "Invested Amount", value: 3000000 },
          ],
          colors: ["#2563EB", "#10B981"],
        }}
      />

      <AddSlot slot="2234567892" />

      <EnhancedSection
        title="How Are SIP Returns Calculated?"
        content="We use the standard SIP future value formula to estimate the maturity amount for a given monthly input, expected return and tenure."
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
      />

      <AddSlot slot="2234567895" />

      <EnhancedSection
        title="Benefits of Using an SIP Calculator"
        content="Stay disciplined, plan better, and set realistic expectations — all in a few clicks."
        bullets={[
          "Plan your financial goals with clarity.",
          "Visualize future corpus and returns.",
          "Stay disciplined with consistent SIPs.",
        ]}
      />

      <AddSlot slot="2234567896" />

      <EnhancedSection
        title="SIP vs Lump Sum Investment"
        content="Both have merits. SIPs help you average costs; lumpsum can shine when you have capital and a long horizon."
        bullets={[
          "SIPs help average out market volatility.",
          "Lumpsum suits those with a large one-time capital.",
          "Many investors blend both for balance.",
        ]}
      />

      <AddSlot slot="2234567897" />

      <EnhancedSection
        title="Tips to Maximize SIP Returns"
        content="Start early, stay consistent, and use step-up SIPs for incremental growth each year."
        bullets={[
          "Start investing early for maximum compounding effect.",
          "Increase SIP amount annually with a step-up plan.",
          "Avoid stopping SIPs during short-term market dips.",
        ]}
      />
    </>
  );
}
