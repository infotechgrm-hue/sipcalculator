import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import BlogTabs from "@/components/BlogTabs";
import TableOfContents from "@/components/TableOfContents";
import RedirectButton from "@/components/RedirectButton";
import RelatedPosts from "@/components/RelatedPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogDir = path.join(process.cwd(), "content/blog");

// ✅ Convert Markdown → HTML + Extract TOC
async function getPost(slug) {
  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  const toc = [];
  const headingRegex = /^##\s+(.*)|^###\s+(.*)/gm;
  let match;
  while ((match = headingRegex.exec(content))) {
    const level = match[1] ? 2 : 3;
    const text = match[1] || match[2];
    const slug = text.toLowerCase().replace(/[^\w]+/g, "-");
    toc.push({ level, text, slug });
  }

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["heading-link"] },
    })
    .use(rehypeExternalLinks, {
      target: "_blank",
      rel: ["noopener", "noreferrer"],
    })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return { ...data, contentHtml: processed.toString(), readingTime, toc };
}

// ✅ SEO Metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data } = matter(fileContent, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url:
            data.ogImage ||
            "https://www.sipcalculator.tech/og-cache/sip-growth-chart.jpg",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
  };
}

// ✅ Blog Detail Page
export default async function BlogDetail({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = await getPost(slug);
  if (!post) return notFound();

  const {
    title,
    date,
    tags = [],
    author = "SIP Calculator Team",
    ogImage,
    contentHtml,
    readingTime,
    toc,
  } = post;

  const safeOgImage =
    ogImage && ogImage.trim() !== ""
      ? ogImage.startsWith("http")
        ? ogImage
        : `https://www.sipcalculator.tech${ogImage}`
      : "https://www.sipcalculator.tech/og-cache/sip-growth-chart.jpg";

  // ✅ Related Posts
  const allFiles = fs.readdirSync(blogDir);
  const relatedPosts = allFiles
    .filter((file) => file !== `${slug}.md`)
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
        },
      });
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title,
        ogImage:
          data.ogImage ||
          "https://www.sipcalculator.tech/og-cache/sip-growth-chart.jpg",
        tags: data.tags || [],
      };
    })
    .filter((p) => p.tags.some((tag) => tags.includes(tag)))
    .slice(0, 10);

  return (
    <main className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-32 pb-20 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-100 via-blue-50 to-transparent dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            {title}
          </h1>
          <div className="flex justify-center gap-3 text-gray-600 dark:text-gray-400 text-sm mb-6">
            {date && (
              <span>
                {new Date(date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>

          {ogImage && (
            <div className="relative w-full h-64 md:h-96 mx-auto mb-10 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={safeOgImage}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Author + Tags */}
          <div className="flex flex-col items-center gap-3 mt-4">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {author}
              </p>
              <p className="text-sm text-gray-500">Investment Insights Writer</p>
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <article className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
        {/* Left: Content */}
        <div>
          <div className="overflow-x-auto no-scrollbar mb-8">
            <BlogTabs />
          </div>

          <RedirectButton />

          {/* TOC (Mobile) */}
          <div className="block lg:hidden mt-8 mb-10">
            <TableOfContents toc={toc} />
          </div>

          {/* Markdown */}
          <section
            id="overview"
            className="prose prose-lg md:prose-xl mx-auto prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-a:text-emerald-600 hover:prose-a:underline prose-li:marker:text-emerald-500 prose-blockquote:border-l-emerald-400 prose-img:rounded-xl prose-img:shadow-md dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Key Takeaways */}
          <section id="key-points" className="mt-16">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-600">
              🔹 Key Takeaways
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Understand your SIP goals and tenure clearly.</li>
              <li>Review your mutual fund performance periodically.</li>
              <li>Invest consistently for long-term wealth creation.</li>
            </ul>
          </section>

          {/* Related Posts (Mobile) */}
          <div className="block lg:hidden mt-16">
            <RelatedPosts relatedPosts={relatedPosts} />
          </div>

          <hr className="my-12 border-gray-200 dark:border-gray-700" />
          <Footer />
        </div>

        {/* Right: Sidebar */}
        <aside className="hidden lg:block space-y-12">
          <TableOfContents toc={toc} />
          <RelatedPosts relatedPosts={relatedPosts} />
        </aside>
      </article>
    </main>
  );
}
