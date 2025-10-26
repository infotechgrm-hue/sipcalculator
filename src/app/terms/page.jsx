import Header from "@/components/Header";
import AddSlot from "@/components/AddSlot";
import Footer from "@/components/Footer";

// ✅ SEO Metadata
export const metadata = {
  title: "Terms & Conditions | SIP Calculator",
  description:
    "Read the Terms and Conditions for using SIP Calculator. Understand your rights, responsibilities, and guidelines when using our financial tools and services.",
};

export default function TermsPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-100 via-blue-50 to-transparent dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            These Terms & Conditions govern your use of the{" "}
            <strong>SIP Calculator</strong> website and tools. By using our
            platform, you agree to these terms and confirm your understanding of
            how our financial calculators and resources may be used.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-2 space-y-4">
        <AddSlot />

        {/* 1. Acceptance of Terms */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            1. Acceptance of Terms
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            By accessing or using <strong>SIP Calculator</strong> (the “Site”),
            you acknowledge that you have read, understood, and agree to be
            bound by these Terms & Conditions. If you do not agree, you should
            discontinue use of the Site immediately.
          </p>
          <AddSlot />
        </section>

        {/* 2. Use of Services */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            2. Use of Services
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            You agree to use the Site solely for lawful and personal financial
            planning purposes. You must not misuse our calculators, attempt to
            disrupt functionality, or use automated scripts or data scraping
            tools without prior written permission.
          </p>
          <AddSlot />
        </section>

        {/* 3. Financial Disclaimer */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            3. Financial Disclaimer
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            The information and results provided by{" "}
            <strong>SIP Calculator</strong> are for general informational
            purposes only. The calculator provides estimated returns based on
            user inputs and assumed growth rates. Actual results may vary due to
            market fluctuations and other financial conditions. We are not a
            financial advisor and do not guarantee investment outcomes.
          </p>
          <AddSlot />
        </section>

        {/* 4. Intellectual Property Rights */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            4. Intellectual Property Rights
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            All content, design elements, graphics, text, logos, and source code
            available on this Site are the intellectual property of{" "}
            <strong>SIP Calculator</strong> and are protected under applicable
            copyright and trademark laws. Unauthorized copying, distribution, or
            modification is strictly prohibited.
          </p>
          <AddSlot />
        </section>

        {/* 5. Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            5. Limitation of Liability
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            In no event shall <strong>SIP Calculator</strong> or its affiliates
            be held liable for any direct, indirect, incidental, consequential,
            or special damages arising from your use or inability to use the
            website, including loss of data or financial loss, even if advised
            of the possibility of such damages.
          </p>
          <AddSlot />
        </section>

        {/* 6. Third-Party Links */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            6. Third-Party Links
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Our website may contain links to third-party websites or financial
            resources. These links are provided for informational purposes only.
            We are not responsible for the accuracy, content, or privacy
            practices of any external sites linked from our platform.
          </p>
          <AddSlot />
        </section>

        {/* 7. Modification of Terms */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            7. Modification of Terms
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>SIP Calculator</strong> reserves the right to modify or
            update these Terms & Conditions at any time without prior notice.
            Continued use of the Site after such modifications constitutes your
            acknowledgment and acceptance of the revised Terms.
          </p>
          <AddSlot />
        </section>

        {/* 8. Governing Law */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            8. Governing Law
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            These Terms shall be governed by and construed in accordance with
            the laws of your local jurisdiction. Any disputes arising under
            these Terms will be subject to the exclusive jurisdiction of
            competent courts within your region.
          </p>
          <AddSlot />
        </section>

        {/* 9. Contact Information */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            9. Contact Information
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            If you have questions or concerns regarding these Terms &
            Conditions, please reach out to us via our{" "}
            <a
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact Page
            </a>
            . We aim to respond to all legitimate inquiries promptly.
          </p>
        </section>

        <AddSlot />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
