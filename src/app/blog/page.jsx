import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Header from "@/components/Header";
import RedirectButton from "@/components/RedirectButton";

export const metadata = {
  title: "Blog | SIP Calculator",
  description:
    "Read the latest articles and insights on SIP investments, mutual funds, and smart financial planning. Stay informed with our expert tips and SIP guides.",
  keywords: [
    "sip calculator blog",
    "mutual fund investment articles",
    "sip strategy tips",
    "financial planning guides",
    "sip vs lumpsum",
    "monthly sip investment",
    "best sip strategies",
    "mutual fund performance",
    "investment planning blog",
  ],
};

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params?.page ?? "1", 10) || 1);

  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir);

  const posts = files.map((file) => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      slug: file.replace(/\.md$/, ""),
      ...data,
    };
  });

  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const postsPerPage = 9;
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const currentPosts = sortedPosts.slice(start, end);
  const pageHref = (p) => `/blog?page=${p}`;

  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-100 via-blue-50 to-transparent dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Investment Blog & SIP Insights
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Explore expert articles and guides on{" "}
            <strong>Systematic Investment Plans (SIPs)</strong>, mutual fund
            growth, and smart financial strategies to make your money work
            better for you.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16 space-y-10">

        {/* 📰 Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => {
            const safeOgImage =
              post.ogImage && post.ogImage.trim() !== ""
                ? post.ogImage.startsWith("http")
                  ? post.ogImage
                  : `https://www.sipcalculator.tech${post.ogImage}`
                : "https://www.sipcalculator.tech/og-cache/sip-growth-chart.jpg";

            return (
              <article
                key={post.slug}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                <img
                  src={safeOgImage}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />

                <div className="flex flex-col flex-grow p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 hover:text-emerald-600">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                    {post.excerpt || post.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 🧭 Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              {/* Prev Button */}
              <Link
                href={pageHref(Math.max(1, currentPage - 1))}
                aria-disabled={currentPage === 1}
                className={`px-3 py-2 text-sm rounded-lg transition ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                ← Prev
              </Link>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => {
                const p = i + 1;
                if (
                  totalPages > 7 &&
                  p !== 1 &&
                  p !== totalPages &&
                  (p < currentPage - 1 || p > currentPage + 1)
                ) {
                  if (p === currentPage - 2 || p === currentPage + 2)
                    return <span key={p}>...</span>;
                  return null;
                }

                return (
                  <Link
                    key={p}
                    href={pageHref(p)}
                    className={`px-3 py-2 text-sm rounded-lg transition ${
                      p === currentPage
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}

              {/* Next Button */}
              <Link
                href={pageHref(Math.min(totalPages, currentPage + 1))}
                aria-disabled={currentPage === totalPages}
                className={`px-3 py-2 text-sm rounded-lg transition ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Next →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 py-10 text-center text-gray-500 text-sm">
        <div className="max-w-4xl mx-auto">
          <p>© {new Date().getFullYear()} SIP Calculator. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
