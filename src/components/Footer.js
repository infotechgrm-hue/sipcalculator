import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-100 via-blue-50 to-transparent dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-24 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-emerald-700 dark:text-emerald-400">
            SIP Calculator
          </span>
          . All rights reserved.
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <Link
            href="/about"
            className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/privacy-policy"
            className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/disclaimer"
            className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Disclaimer
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Decorative background accent */}
      <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-20 bg-gradient-to-t from-emerald-200 via-blue-100 to-transparent dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
    </footer>
  );
}
