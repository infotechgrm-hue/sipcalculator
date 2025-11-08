// app/sukanya-samriddhi-yojana-calculator/page.jsx

import Header from "@/components/Header";
import PopularCalculators from "@/components/PopularCalculators";
import EnhancedSection from "@/components/EnhancedSection";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";
import AddSlot from "@/components/AddSlot";
import SukanyaSamriddhiCalculator from "@/components/SSY/SukanyaSamriddhiCalculator";

export const metadata = {
  title: "Sukanya Samriddhi Yojana (SSY) Calculator Online (2025)",
  description:
    "Use the Sukanya Samriddhi Yojana (SSY) Calculator to estimate maturity value, compound interest, and tax-free benefits. Plan deposits for 15 years and project the corpus your girl child will receive at 21 years.",
  openGraph: {
    title: "Sukanya Samriddhi Yojana (SSY) Calculator Online (2025)",
    description:
      "Calculate SSY maturity using the compound interest formula A = P(1 + r/n)^(nt). Visualize annual contributions, total interest, and tax-free maturity value with accurate projections.",
    url: "https://www.sipcalculator.tech/sukanya-samriddhi-yojana-calculator",
    images: [
      {
        url: "https://www.sipcalculator.tech/og-images/ssy-og.webp",
        width: 1200,
        height: 630,
        alt: "Sukanya Samriddhi Yojana Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sukanya Samriddhi Yojana (SSY) Calculator | Accurate Compound Interest Projection",
    description:
      "Estimate SSY maturity using A = P(1 + r/n)^(nt). Understand compounding, tenure, and EEE tax-free growth benefits for your girl child’s future.",
    images: ["https://www.sipcalculator.tech/og-images/ssy-og.webp"],
  },
};

export default function SSYCalculatorPage() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header />

      {/* ===== MAIN CALCULATOR SECTION ===== */}
      <div className="max-w-7xl w-full mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="flex-1 w-full order-1">
            <SukanyaSamriddhiCalculator />
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
          Sukanya Samriddhi Yojana (SSY) Calculator – Accurate Compound Interest
          Projection
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          The <strong>Sukanya Samriddhi Yojana (SSY)</strong> is a Government of
          India small-savings scheme designed to help parents build a secure,
          tax-free corpus for their girl child. You can invest as little as{" "}
          <strong>₹250 per year</strong>
          and up to <strong>₹1.5 lakh per year</strong>, earning one of the
          highest government-guaranteed interest rates with full{" "}
          <strong>EEE tax exemption</strong>.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          This calculator uses the <strong>compound interest formula</strong> (
          <em>A = P(1 + r/n)^(nt)</em>) to estimate how your yearly deposits
          grow. You can deposit for <strong>15 years</strong>, while your
          balance continues to compound annually for <strong>21 years</strong> —
          giving you an accurate projection of maturity value and interest
          earned.
        </p>

        <p className="text-base text-gray-600 dark:text-gray-400 italic">
          *Interest rate used: 8.2% p.a. (Q4 FY 2024–25). The actual rate is
          notified by the government quarterly and may change during your SSY
          tenure.*
        </p>
      </section>

      {/* ===== WHY USE IT ===== */}
      <EnhancedSection
        title="Why Use an SSY Calculator?"
        content="The Sukanya Samriddhi Yojana offers secure returns, but long tenure and yearly compounding make manual calculations tricky. This calculator instantly computes your projected maturity using the compound interest formula."
        bullets={[
          "Accurately estimate how annual deposits compound each year.",
          "Understand how early investment maximizes compounding.",
          "Evaluate the impact of different yearly deposits and start years.",
        ]}
        img="/images/sukanya-samriddhi-yojna-calculator.webp"
      />

      {/* ===== HOW INTEREST ACCUMULATES ===== */}
      <EnhancedSection
        title="How Does SSY Compound Interest Work?"
        content="The Sukanya Samriddhi Yojana compounds interest annually. Deposits are made for the first 15 years, while the account continues to earn interest for the remaining 6 years — making the total maturity period 21 years."
        bullets={[
          "Annual compounding using A = P(1 + r/n)^(n×t).",
          "Deposits allowed for 15 years; interest continues till year 21.",
          "Partial withdrawal (up to 50%) permitted after the girl turns 18.",
        ]}
        formula={{
          title: "Compound Interest Formula (Yearly Compounding)",
          expression: "A = P × (1 + r/n)^(n × t)",
          vars: [
            { k: "A", v: "Maturity amount (principal + interest)" },
            { k: "P", v: "Yearly principal deposit" },
            { k: "r", v: "Annual interest rate (in decimal)" },
            {
              k: "n",
              v: "Number of compounding intervals per year (1 for yearly)",
            },
            {
              k: "t",
              v: "Number of years (deposit + post-deposit interest period)",
            },
          ],
        }}
      />

      {/* ===== TABLE: SCENARIOS ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center md:text-left">
          SSY Compound Growth Examples (8.2% p.a. Annual Compounding)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
            <thead className="bg-emerald-100 text-gray-800 font-semibold">
              <tr>
                <th className="p-3 border">Annual Deposit (₹)</th>
                <th className="p-3 border">Deposit Period (Years)</th>
                <th className="p-3 border">Total Investment (₹)</th>
                <th className="p-3 border">Estimated Maturity (₹)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border text-center">25,000</td>
                <td className="p-3 border text-center">15</td>
                <td className="p-3 border text-center">3,75,000</td>
                <td className="p-3 border text-center">≈ 8,40,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">50,000</td>
                <td className="p-3 border text-center">15</td>
                <td className="p-3 border text-center">7,50,000</td>
                <td className="p-3 border text-center">≈ 16,80,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">1,00,000</td>
                <td className="p-3 border text-center">15</td>
                <td className="p-3 border text-center">15,00,000</td>
                <td className="p-3 border text-center">≈ 33,60,000</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">1,50,000</td>
                <td className="p-3 border text-center">15</td>
                <td className="p-3 border text-center">22,50,000</td>
                <td className="p-3 border text-center">≈ 50,40,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">
          *Calculated using compound interest formula with yearly compounding.
          Actual maturity depends on quarterly-notified SSY interest rates.*
        </p>
      </section>

      <AddSlot slot="2234567891" />

      {/* ===== REAL-LIFE EXAMPLES ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center md:text-left">
          Real-Life SSY Compounding Scenarios
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
            <thead className="bg-emerald-100 text-gray-800 font-semibold">
              <tr>
                <th className="p-3 border">Parent</th>
                <th className="p-3 border">Girl’s Age at Start</th>
                <th className="p-3 border">Yearly Deposit (₹)</th>
                <th className="p-3 border">Deposit Period</th>
                <th className="p-3 border">Goal</th>
                <th className="p-3 border">Expected Corpus (₹)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border text-center">Meera</td>
                <td className="p-3 border text-center">1 Year</td>
                <td className="p-3 border text-center">50,000</td>
                <td className="p-3 border text-center">15 Years</td>
                <td className="p-3 border text-center">Higher Education</td>
                <td className="p-3 border text-center">≈ ₹16–17 Lakh</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">Arjun</td>
                <td className="p-3 border text-center">5 Years</td>
                <td className="p-3 border text-center">30,000</td>
                <td className="p-3 border text-center">15 Years</td>
                <td className="p-3 border text-center">Tuition & Hostel</td>
                <td className="p-3 border text-center">≈ ₹10 Lakh</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">Pooja</td>
                <td className="p-3 border text-center">8 Years</td>
                <td className="p-3 border text-center">1,00,000</td>
                <td className="p-3 border text-center">13*</td>
                <td className="p-3 border text-center">Education + Marriage</td>
                <td className="p-3 border text-center">≈ ₹26–28 Lakh</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">
          *SSY can be opened until the girl turns 10 years. Later openings
          shorten the deposit period but still accrue interest until 21 years
          from opening.*
        </p>
      </section>

      <AddSlot slot="2234567892" />

      {/* ===== COMPARISON ===== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center md:text-left">
          SSY vs PPF vs Bank RD – Compound Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
            <thead className="bg-emerald-100 text-gray-800 font-semibold">
              <tr>
                <th className="p-3 border">Scheme</th>
                <th className="p-3 border">Interest Rate</th>
                <th className="p-3 border">Contribution</th>
                <th className="p-3 border">Tenure</th>
                <th className="p-3 border">Tax Treatment</th>
                <th className="p-3 border">Approx. Corpus</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border text-center">SSY</td>
                <td className="p-3 border text-center">8.2% p.a.</td>
                <td className="p-3 border text-center">₹50,000/year</td>
                <td className="p-3 border text-center">
                  15 yrs + 6 yrs interest
                </td>
                <td className="p-3 border text-center">EEE (Tax-Free)</td>
                <td className="p-3 border text-center">≈ ₹16–17 Lakh</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">PPF</td>
                <td className="p-3 border text-center">7.1% p.a.</td>
                <td className="p-3 border text-center">₹50,000/year</td>
                <td className="p-3 border text-center">15 years</td>
                <td className="p-3 border text-center">EEE</td>
                <td className="p-3 border text-center">Lower than SSY</td>
              </tr>
              <tr>
                <td className="p-3 border text-center">Bank RD</td>
                <td className="p-3 border text-center">6.5% p.a.</td>
                <td className="p-3 border text-center">₹4,200/month</td>
                <td className="p-3 border text-center">10 years</td>
                <td className="p-3 border text-center">Interest Taxable</td>
                <td className="p-3 border text-center">Significantly Lower</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">
          *All comparisons use A = P(1 + r/n)^(n×t). SSY offers the highest
          compounding advantage under the EEE (Exempt-Exempt-Exempt) category.*
        </p>
      </section>

      {/* ===== CTA ===== */}
      <EnhancedSection
        title="Build a Confident, Tax-Free Future with SSY"
        content="Use this SSY Calculator powered by the compound interest formula to map annual deposits and visualize the complete maturity value for your daughter’s education or marriage."
        bullets={[
          "Select a realistic yearly deposit and stick with it for 15 years.",
          "Start early for maximum compounding benefit.",
          "Reinvest bonuses and savings to boost your tax-free corpus.",
        ]}
      />

      {/* FAQs */}
      <Faqs type="ssy" />

      <Footer />
      <script type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Sukanya Samriddhi Yojana (SSY) Calculator",
  "url": "https://www.sipcalculator.tech/sukanya-samriddhi-yojana-calculator",
  "image": "https://www.sipcalculator.tech/og-images/ssy-og.webp",
  "description": "Use the Sukanya Samriddhi Yojana (SSY) Calculator to estimate maturity amount, interest, and tax-free corpus using compound interest A = P(1 + r/n)^(nt). Ideal for planning education or marriage savings for your girl child.",
  "provider": {
    "@type": "Organization",
    "name": "SIP Calculator Tech",
    "url": "https://www.sipcalculator.tech"
  },
  "interestRate": "8.2% p.a.",
  "category": "Government Small Savings Scheme",
  "termsOfService": "https://www.sipcalculator.tech/terms",
  "offers": {
    "@type": "Offer",
    "url": "https://www.sipcalculator.tech/sukanya-samriddhi-yojana-calculator",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
}
`}
      </script>

      <script type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Sukanya Samriddhi Yojana (SSY)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SSY is a Government of India savings scheme that helps parents create a tax-free corpus for their girl child’s future education or marriage. It offers one of the highest small-savings interest rates and full EEE tax benefits."
      }
    },
    {
      "@type": "Question",
      "name": "How is SSY interest calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SSY Calculator uses the compound interest formula A = P(1 + r/n)^(n×t), where P is your yearly deposit, r is the annual interest rate, n is the compounding frequency, and t is the total number of years."
      }
    },
    {
      "@type": "Question",
      "name": "What is the maturity period of SSY?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SSY account matures 21 years after opening. Deposits can be made for 15 years, and the balance continues earning interest until maturity."
      }
    },
    {
      "@type": "Question",
      "name": "Can I withdraw money before maturity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can withdraw up to 50% of the balance once your girl child turns 18, primarily for education purposes."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum and maximum SSY deposit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The minimum deposit is ₹250 per year and the maximum is ₹1.5 lakh per year. Contributions can be made once or multiple times in a financial year."
      }
    },
    {
      "@type": "Question",
      "name": "Is SSY better than PPF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SSY generally offers a higher interest rate than PPF and provides the same EEE tax-free status, making it ideal for girl child future planning."
      }
    },
    {
      "@type": "Question",
      "name": "Is the maturity amount from SSY taxable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Sukanya Samriddhi Yojana offers full tax exemption under Section 80C — both the interest earned and maturity amount are tax-free."
      }
    }
  ]
}
`}
      </script>
    </main>
  );
}
