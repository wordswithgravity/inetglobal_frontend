import type { Metadata } from "next";
import ViewComponent from "../../views/tiktok";

export const metadata: Metadata = {
  title: "TikTok Business Messaging Integration | iNetGlobal",
  description: "Engage next-generation audiences with automated messaging and interactive customer interactions on TikTok.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/tiktok",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/tiktok",
    title: "TikTok Business Messaging Integration | iNetGlobal",
    description: "Engage next-generation audiences with automated messaging and interactive customer interactions on TikTok.",
    images: [
      {
        url: "/assets/logo.png",
        width: 512,
        height: 512,
        alt: "iNetGlobal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Business Messaging Integration | iNetGlobal",
    description: "Engage next-generation audiences with automated messaging and interactive customer interactions on TikTok.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
