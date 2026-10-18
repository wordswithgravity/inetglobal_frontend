import type { Metadata } from "next";
import ViewComponent from "../../views/rcs";

export const metadata: Metadata = {
  title: "RCS Business Messaging Solutions | iNetGlobal",
  description: "Upgrade SMS to interactive Rich Communication Services (RCS) with verified brand sender IDs, rich media carousels, and quick-reply action buttons.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/rcs",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/rcs",
    title: "RCS Business Messaging Solutions | iNetGlobal",
    description: "Upgrade SMS to interactive Rich Communication Services (RCS) with verified brand sender IDs, rich media carousels, and quick-reply action buttons.",
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
    title: "RCS Business Messaging Solutions | iNetGlobal",
    description: "Upgrade SMS to interactive Rich Communication Services (RCS) with verified brand sender IDs, rich media carousels, and quick-reply action buttons.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
