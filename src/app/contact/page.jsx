import Header from "@/components/Header";
import AddSlot from "@/components/AddSlot";
import RedirectButton from "@/components/RedirectButton";

// ✅ SEO Metadata
export const metadata = {
  title: "Contact Us | SIP Calculator",
  description:
    "Get in touch with the SIP Calculator team for support, feedback, or business inquiries. We're here to help you plan your investments and achieve your financial goals.",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-100 via-blue-50 to-transparent dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Have a question, suggestion, or partnership idea? We’d love to hear
            from you. The <strong>SIP Calculator</strong> team is always ready
            to help you plan smarter and invest better.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-2 space-y-6">
        <AddSlot />

        {/* 1. Support Section */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            1. Support & Assistance
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            If you’re facing any technical issues while using our SIP Calculator
            or have doubts about how the calculations work, our support team is
            here to guide you. We aim to respond to all support requests within{" "}
            <strong>24–48 hours</strong>.
          </p>
          <AddSlot />
        </section>

        {/* 2. Feedback & Suggestions */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            2. Feedback & Suggestions
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            We continuously improve our tools based on user feedback. If you
            have ideas for new features or see ways we can make the SIP
            Calculator even better, please share your suggestions — your input
            helps us grow!
          </p>
          <AddSlot />
        </section>

        {/* 3. Business Partnerships */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            3. Business & Collaboration
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            We welcome collaborations with mutual fund distributors, fintech
            platforms, and content creators who want to empower investors. Reach
            out to explore partnerships, integrations, or sponsorship
            opportunities with <strong>SIP Calculator</strong>.
          </p>
          <AddSlot />
        </section>

        {/* 4. Contact Information */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            4. Contact Information
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:support@sipcalculator.in"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              infotechgrm@gmail.com
            </a>
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            🌐 <strong>Website:</strong>{" "}
            <a
              href="https://www.sipcalculator.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              www.sipcalculator.tech
            </a>
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            📍 <strong>Location:</strong> Online financial tool platform, serving
            users across India and globally.
          </p>
          <AddSlot />
        </section>

        {/* 5. Stay Connected */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            5. Stay Connected
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Follow us on social media for investment insights, SIP tips, and
            updates about new features and tools:
          </p>
          {/* <ul className="list-disc list-inside text-lg mt-3 text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Twitter
              </a>{" "}
              – stay updated with market trends.
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                LinkedIn
              </a>{" "}
              – for professional connections and financial insights.
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Facebook
              </a>{" "}
              – join our growing community of investors.
            </li>
          </ul> */}
          <AddSlot />
        </section>

        {/* 6. Quick Access CTA */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            6. Quick Access
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            For instant navigation or quick assistance, you can use the button
            below to explore more tools or get back to your investment planning.
          </p>
        </section>

        <AddSlot />
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 py-10 text-center text-gray-500 text-sm">
        <div className="max-w-4xl mx-auto">
          <p>© {new Date().getFullYear()} SIP Calculator. All rights reserved.</p>
          <AddSlot />
        </div>
      </footer>
    </main>
  );
}
