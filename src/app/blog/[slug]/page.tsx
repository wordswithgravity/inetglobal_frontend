import type { Metadata } from "next";
import BlogDetailsView from "../../../views/BlogDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const readableTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Article";

  return {
    title: `${readableTitle} | iNetGlobal Blog`,
    description: "Read the complete article and insights on iNetGlobal.",
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  return <BlogDetailsView slug={slug} />;
}
