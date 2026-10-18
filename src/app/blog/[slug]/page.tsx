import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailsView from "../../../views/BlogDetails";
import { API_BASE_URL } from "../../../utils/apiConfig";
import type { BlogItem } from "../../../store/slices/blogSlice";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlogArticle(slug: string): Promise<BlogItem | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.blog || null;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const blogs: BlogItem[] = data.blogs || [];
    return blogs.map((b) => ({ slug: b.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogArticle(slug);

  if (!article) {
    const readableTitle = slug
      ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : "Article";
    return {
      title: `${readableTitle} | iNetGlobal Blog`,
      description:
        "Explore the latest insights on enterprise communications and telecom solutions.",
    };
  }

  const title = article.title;
  const description =
    article.excerpt ||
    "Read the complete article and industry insights on iNetGlobal.";
  const canonicalUrl = `https://www.inetglobalservices.com/blog/${slug}`;

  return {
    title: `${title} | iNetGlobal Blog`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      publishedTime: article.date,
      modifiedTime: article.updatedAt,
      authors: article.author ? [article.author] : undefined,
      images: article.imageUrl
        ? [
            {
              url: article.imageUrl,
              alt: article.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: article.imageUrl ? [article.imageUrl] : undefined,
    },
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const article = await getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return <BlogDetailsView slug={slug} initialBlog={article} />;
}
