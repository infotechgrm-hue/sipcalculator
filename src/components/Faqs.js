"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = {
  sip: [
    {
      question: "What is an SIP Calculator and how does it work?",
      answer:
        "An SIP Calculator helps you estimate the future value of your mutual fund investments made through a Systematic Investment Plan. You just enter your monthly investment, expected annual return, and investment period to see how your wealth can grow over time.",
    },
    {
      question: "Is SIP better than a lump sum investment?",
      answer:
        "SIPs offer disciplined, periodic investing that smooths out market volatility through rupee-cost averaging. Lump sum investments are better for investors who have a large amount available at once. Both strategies can be effective depending on your goals and market timing.",
    },
    {
      question: "Can I modify or pause my SIP anytime?",
      answer:
        "Yes. You can increase, reduce, pause, or stop your SIP investment without penalties. However, consistent investing over the long term gives the best compounding results.",
    },
  ],
  lumpsum: [
    {
      question: "What is a Lumpsum Calculator?",
      answer:
        "A Lumpsum Calculator estimates how a one-time investment can grow over time. By entering your investment amount, expected annual return, and duration, it projects the future value of your investment through compounding.",
    },
    {
      question: "How does a Lumpsum Calculator differ from an SIP Calculator?",
      answer:
        "While an SIP Calculator estimates periodic monthly investments, a Lumpsum Calculator focuses on a single, one-time investment. It helps you understand how compounding works when you invest a larger amount upfront.",
    },
    {
      question: "Can I use the Lumpsum Calculator for goal-based planning?",
      answer:
        "Yes! You can use it to calculate how much you need to invest today to achieve a specific goal — like retirement or buying a house — based on your expected return and time horizon.",
    },
    {
      question: "Does the Lumpsum Calculator account for inflation?",
      answer:
        "No, this calculator shows nominal returns. For real purchasing power, consider factoring in an average inflation rate manually to get a more realistic future value.",
    },
  ],
  default: [
    {
      question: "What is a Financial Calculator?",
      answer:
        "A financial calculator helps estimate investment returns, EMIs, or savings growth using mathematical formulas. It provides clarity and aids better financial planning.",
    },
  ],
};

export default function Faqs({ type = "default" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // ✅ Select FAQs dynamically based on prop
  const selectedFaqs = faqData[type] || faqData.default;

  // ✅ Generate structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: selectedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="w-full bg-gray-50 py-16 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-gray-100">
          Frequently Asked Questions
        </h2>

        {/* ✅ Inject JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="space-y-5">
          {selectedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl shadow-sm transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-gray-800 border-blue-400 shadow-md"
                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-900 dark:text-gray-100 focus:outline-none"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-500" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
