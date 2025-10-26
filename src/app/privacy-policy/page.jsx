import Header from "@/components/Header";
import AddSlot from "@/components/AddSlot";
import Footer from "@/components/Footer";

// ✅ SEO Metadata
export const metadata = {
  title: "Privacy Policy | SIP Calculator",
  description:
    "Read our Privacy Policy to understand how SIP Calculator handles your personal information responsibly while providing secure and transparent financial tools.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-100 via-blue-50 to-transparent dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            At <strong>SIP Calculator</strong>, your privacy matters. This policy explains
            how we collect, protect, and use your data to ensure transparency and trust in
            every calculation you perform on our platform.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-2 space-y-4">
        <AddSlot />

        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">1. Introduction</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Welcome to <strong>SIP Calculator</strong>. Your privacy is our top priority.
            This Privacy Policy describes how we handle your personal and non-personal
            information when you use our website, including any tools, calculators, or
            services provided under the SIP Calculator brand.
          </p>
          <AddSlot />
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            2. Information We Collect
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            We collect minimal user information necessary for the functionality of our
            website. This may include your IP address, browser type, device information,
            and general usage statistics. Our site may also use cookies and third-party
            tools such as <strong>Google AdSense</strong> to enhance user experience and
            display relevant ads.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-3">
            No personally identifiable information (like your name, contact details, or
            financial data) is collected unless voluntarily shared through contact forms or
            feedback sections.
          </p>
          <AddSlot />
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            3. How We Use Your Information
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            The data collected is used to:
          </p>
          <ul className="list-disc ml-6 mt-3 text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li>Enhance website performance and user experience.</li>
            <li>Display personalized advertisements through Google AdSense.</li>
            <li>Monitor and analyze usage patterns for site improvement.</li>
            <li>Ensure security, fraud prevention, and compliance with applicable laws.</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            We never sell, rent, or trade your personal data with any third party.
          </p>
          <AddSlot />
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            4. Use of Cookies and Third-Party Services
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>SIP Calculator</strong> uses cookies to store user preferences and
            improve site functionality. Third-party services like Google AdSense and Google
            Analytics may also collect anonymous information to personalize ads and analyze
            traffic patterns. You can control or disable cookies in your browser settings.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            For more details on how Google uses data, please review{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Google’s Advertising Policy
            </a>
            .
          </p>
          <AddSlot />
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            5. Your Data Rights
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            You have the right to access, modify, or request deletion of your personal data.
            You can also opt out of personalized ads by visiting your{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Google Ads Settings
            </a>
            . We are committed to maintaining transparency and respecting your privacy
            choices under global data protection regulations such as GDPR and CCPA.
          </p>
          <AddSlot />
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">
            6. Policy Updates
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            This Privacy Policy may be updated from time to time to reflect changes in our
            practices or legal requirements. Any updates will be posted on this page with a
            revised “Last Updated” date.
          </p>
          <AddSlot />
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">7. Contact Us</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            For questions, suggestions, or privacy-related inquiries, feel free to reach
            out via our{" "}
            <a
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact Page
            </a>
            . We’ll respond as quickly as possible.
          </p>
        </section>

        <AddSlot />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
