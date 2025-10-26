import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} SIP Calculator. All rights reserved.
        </p>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
          <Link href="/disclaimer" className="hover:text-white">
            Disclaimer
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
