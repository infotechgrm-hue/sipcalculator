"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is an SIP Calculator and how does it work?",
    answer:
      "An SIP Calculator is a financial tool that helps you estimate the future value of your investments made through a Systematic Investment Plan. By entering your monthly contribution, expected rate of return, and investment duration, it instantly calculates your potential maturity amount — helping you plan smarter and invest with confidence.",
  },
  {
    question: "Is an SIP better than a lump sum investment?",
    answer:
      "Both have their advantages. SIPs are ideal for investors who prefer disciplined, gradual investing and want to average out market volatility. Lump sum investments, on the other hand, work well when you have a large amount available upfront and want to capitalize on long-term growth opportunities. The SIP calculator helps you compare both methods and choose what fits your goals best.",
  },
  {
    question: "How accurate are SIP calculator results?",
    answer:
      "The results from an SIP calculator are based on projected returns and serve as estimates. Real returns may vary depending on market performance, fund type, and duration. Still, the calculator provides a reliable framework for understanding how your money can grow through consistent investing.",
  },
  {
    question: "Can I calculate SIP for my target amount?",
    answer:
      "Yes, most SIP calculators, including ours, allow you to reverse-calculate your monthly investment. Just enter your target corpus, desired time frame, and expected annual return — the calculator will tell you how much you should invest each month to reach that goal.",
  },
  {
    question: "What are the benefits of investing through SIP?",
    answer:
      "SIPs encourage disciplined investing, reduce the stress of timing the market, and leverage the power of compounding. They allow you to start small, stay consistent, and gradually build significant wealth over time — making them ideal for both beginners and experienced investors.",
  },
  {
    question: "Do SIPs offer guaranteed returns?",
    answer:
      "No, SIP returns are market-linked since they invest in mutual funds. However, by investing regularly and staying invested for the long term, you can smooth out short-term volatility and improve your chances of achieving stable, inflation-beating returns.",
  },
  {
    question: "How frequently can I invest through SIP?",
    answer:
      "You can set up SIPs on a monthly, quarterly, or even weekly basis depending on the fund provider. Most investors prefer monthly SIPs as they align well with their income cycle and make financial planning easier.",
  },
  {
    question: "Can I modify or stop my SIP anytime?",
    answer:
      "Yes, SIPs are flexible. You can increase, decrease, pause, or even stop your SIP at any time without penalties. However, staying consistent gives you the full benefit of compounding and rupee-cost averaging over the long run.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Step 2: Generate FAQ schema dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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

        {/* ✅ Inject FAQ Schema into <head> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="space-y-5">
          {faqs.map((faq, index) => {
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
