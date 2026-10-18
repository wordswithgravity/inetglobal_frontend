import type { Metadata } from "next";
import ViewComponent from "../../views/Blog";
import { API_BASE_URL } from "../../utils/apiConfig";
import type { BlogItem } from "../../store/slices/blogSlice";

export const metadata: Metadata = {
  title: "Blog & Industry Insights | iNetGlobal",
  description:
    "Explore the latest insights, trends, and authoritative articles on telecommunications, CPaaS, wholesale voice, and enterprise messaging.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/blog",
    title: "Blog & Industry Insights | iNetGlobal",
    description:
      "Explore the latest insights, trends, and authoritative articles on telecommunications, CPaaS, wholesale voice, and enterprise messaging.",
    images: [
      {
        url: "/assets/logo.png",
        width: 512,
        height: 512,
        alt: "iNetGlobal Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Industry Insights | iNetGlobal",
    description:
      "Explore the latest insights, trends, and authoritative articles on telecommunications, CPaaS, wholesale voice, and enterprise messaging.",
    images: ["/assets/logo.png"],
  },
};

async function getInitialBlogs(): Promise<BlogItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.blogs || [];
  } catch {
    return [];
  }
}

export default async function Page() {
  const initialBlogs = await getInitialBlogs();
  return <ViewComponent initialBlogs={initialBlogs} />;
}
