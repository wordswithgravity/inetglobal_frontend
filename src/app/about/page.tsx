import type { Metadata } from "next";
import ViewComponent from "../../views/AboutUS";

export const metadata: Metadata = {
  title: "About Us | iNetGlobal",
  description: "Learn about iNetGlobal, our mission, vision, Tier-1 carrier network, and enterprise telecom infrastructure powering global business connectivity.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/about",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/about",
    title: "About Us | iNetGlobal",
    description: "Learn about iNetGlobal, our mission, vision, Tier-1 carrier network, and enterprise telecom infrastructure powering global business connectivity.",
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
    title: "About Us | iNetGlobal",
    description: "Learn about iNetGlobal, our mission, vision, Tier-1 carrier network, and enterprise telecom infrastructure powering global business connectivity.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
