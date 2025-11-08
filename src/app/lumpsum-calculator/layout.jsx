export const metadata = {
  title: "Lumpsum Calculator Online (2025)- One-Time Investment Growth",
  description:
    "Use our free Lumpsum Calculator to estimate how your one-time mutual fund investment can grow with compounding. Plan smarter for retirement, education, or wealth creation with accurate projections. One time investment is better than SIP in long term. Try now!",
  keywords: [
    "Lumpsum Calculator",
    "Mutual Fund Lumpsum Calculator",
    "Investment Calculator",
    "Future Value Calculator",
    "Compounding Calculator",
    "Lumpsum vs SIP",
    "Financial Planning Tools",
  ],
  alternates: {
    canonical: "https://www.sipcalculator.tech/lumpsum-calculator",
  },
  openGraph: {
    title: "Lumpsum Calculator | Smart One-Time Investment Growth Tool",
    description:
      "Estimate your future wealth with our free Lumpsum Calculator. Discover how your one-time investment grows over time using compounding.",
    url: "https://www.sipcalculator.tech/lumpsum-calculator",
    siteName: "SIPCalculator.tech",
    type: "website",
    images: [
      {
        url: "https://www.sipcalculator.tech/og-images/lumpsum-og.webp",
        width: 1200,
        height: 630,
        alt: "Lumpsum Calculator | SIPCalculator.tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumpsum Calculator | Grow Your One-Time Investment",
    description:
      "Plan your goals confidently using our Lumpsum Calculator. Calculate future returns and see how your single investment compounds over time.",
    images: ["https://www.sipcalculator.tech/og-images/lumpsum-og.webp"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LumpsumLayout({ children }) {
  return <>{children}</>;
}
