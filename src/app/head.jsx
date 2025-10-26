export default function Head() {
  return (
    <>
      {/* ✅ Basic Meta Tags */}
      <meta name="application-name" content="SIP Calculator" />
      <meta name="apple-mobile-web-app-title" content="SIP Calculator" />
      <meta name="google-adsense-account" content="ca-pub-7433238339097067" />
      <meta
        name="theme-color"
        content="#ffffff"
      />

      {/* ✅ Favicons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* ✅ JSON-LD: Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SIP Calculator",
            url: "https://www.sipcalculator.tech",
            logo: "https://www.sipcalculator.tech/favicon-32x32.png",
            sameAs: [
              "https://www.facebook.com/",
              "https://twitter.com/",
              "https://www.linkedin.com/",
            ],
          }),
        }}
      />

      {/* ✅ JSON-LD: Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SIP Calculator",
            alternateName: "SIP Calculator - Best Calculator Online for Mutual Funds",
            url: "https://www.sipcalculator.tech",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.sipcalculator.tech/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            publisher: {
              "@type": "Organization",
              name: "SIP Calculator",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sipcalculator.tech/favicon-32x32.png",
              },
            },
          }),
        }}
      />

    </>
  );
}
