import Header from "@/components/Header";
import AddSlot from "@/components/AddSlot";
import Footer from "@/components/Footer";

// ✅ SEO Metadata
export const metadata = {
  title: "About | SIP Calculator",
  description:
    "Learn about SIP Calculator — a simple and reliable tool to calculate mutual fund returns, plan investments, and grow your wealth through systematic investing.",
};

export default function AboutPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100">
      {/* ✅ Fixed Interactive Header */}
      <Header />

      {/* ✅ Hero Section */}
      <section className="relative isolate overflow-hidden pt-32 pb-20 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-100 via-blue-50 to-transparent dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            About <span className="text-emerald-600">SIP Calculator</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Empowering every investor with smart, data-driven insights to plan,
            invest, and grow through the power of Systematic Investment Plans.
          </p>
        </div>
      </section>

      {/* ✅ Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-2 space-y-4">
        <AddSlot />

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            At <strong>SIP Calculator</strong>, our goal is simple — to make
            investing easier for everyone. We believe that financial growth
            shouldn’t require complex spreadsheets or expert-level knowledge.
            With our easy-to-use calculator, investors can visualize their SIP
            returns, plan their goals, and make informed decisions backed by
            data — all in just a few clicks.
          </p>
          <AddSlot />
        </section>

        {/* What We Offer */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">What We Offer</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Our <strong>online SIP calculator</strong> is designed to give you
            complete financial clarity. Whether you’re saving for a home,
            planning retirement, or investing for your child’s education, our
            calculator helps you estimate your maturity amount, compare mutual
            fund options, and fine-tune your investment strategy — instantly and
            accurately.
          </p>
          <AddSlot />
        </section>

        {/* Why Investors Trust Us */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            Why Investors Trust Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            We focus on simplicity, accuracy, and transparency. Our SIP
            calculator uses tried-and-tested mathematical formulas to calculate
            returns while maintaining a user-friendly interface that even first-time
            investors can navigate effortlessly. Trusted by thousands of users,
            we continue to deliver consistent results and reliable guidance for
            long-term wealth creation.
          </p>
          <AddSlot />
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">How It Works</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Our SIP calculator uses the power of compounding to project your
            potential returns. Just enter three key details — your monthly
            investment, expected annual return, and tenure — and the tool
            instantly displays your <strong>maturity amount</strong>,{" "}
            <strong>total investment</strong>, and <strong>estimated gains</strong>.
            You can also reverse-calculate your SIP by entering your target
            amount to find how much you should invest monthly to achieve it.
          </p>
          <AddSlot />
        </section>

        {/* Our Commitment */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">Our Commitment</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            We are committed to building tools that make investing less
            intimidating and more accessible. As markets evolve, we continue to
            enhance our calculator with new features, intuitive design, and
            accurate algorithms to help investors stay ahead — no matter their
            financial journey or experience level.
          </p>
          <AddSlot />
        </section>

        {/* Education & Awareness */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            Educating the Investor Community
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            We don’t just provide tools — we provide knowledge. Through our blog
            and resources, we aim to simplify investment concepts, explain
            market trends, and guide users in achieving their financial goals.
            Our content focuses on clarity, transparency, and empowering
            investors with confidence.
          </p>
          <AddSlot />
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">Contact Us</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Have feedback, questions, or collaboration ideas? We’d love to hear
            from you. Reach us anytime via our{" "}
            <a
              href="/contact"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Contact Page
            </a>{" "}
            — our team typically replies within 24 hours.
          </p>
        </section>

        <AddSlot />
      </div>

      {/* ✅ Footer */}
      <Footer />
    </main>
  );
}
