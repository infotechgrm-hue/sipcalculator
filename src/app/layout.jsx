import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import keywords from "./keywords.json";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SIP Calculator | Best Calculator Online for Mutual Funds",
  description:
    "A SIP calculator is a tool to calculate returns for your SIP investments in mutual funds that helps individuals to plan their investments effectively. This will help us to estimate the future value of your SIP investments based on various parameters like monthly investment amount, expected rate of return, and investment duration.",
  keywords: keywords,
  openGraph: {
    title: "SIP Calculator | Best Calculator Online for Mutual Funds",
    description:
      "A SIP calculator is a tool to calculate returns for your SIP investments in mutual funds that helps individuals to plan their investments effectively.",
    url: "https://www.sipcalculator.tech/",
    images: [
      {
        url: "https://www.sipcalculator.tech/og-images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "SIP Calculator | Best Calculator Online for Mutual Funds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIP Calculator | Best Calculator Online for Mutual Funds",
    description:
      "A SIP calculator is a tool to calculate returns for your SIP investments in mutual funds that helps individuals to plan their investments effectively.",
    images: ["https://www.sipcalculator.tech/og-images/og-image.webp"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className}`}
      >
        {children}
        <Analytics />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J4QTK4426X"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J4QTK4426X');
          `}
        </Script>

        {/* ✅ Google AdSense */}
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js?client=ca-pub-7433238339097067"
          crossOrigin="anonymous"
        />


        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-J4QTK4426X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
