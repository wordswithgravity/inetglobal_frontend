import type { Metadata } from "next";
import ViewComponent from "../../views/instagram";

export const metadata: Metadata = {
  title: "Instagram Direct Messaging Integration | iNetGlobal",
  description: "Automate Instagram Direct messaging, respond to story mentions, and convert followers into customers with omnichannel tools.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/instagram",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/instagram",
    title: "Instagram Direct Messaging Integration | iNetGlobal",
    description: "Automate Instagram Direct messaging, respond to story mentions, and convert followers into customers with omnichannel tools.",
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
    title: "Instagram Direct Messaging Integration | iNetGlobal",
    description: "Automate Instagram Direct messaging, respond to story mentions, and convert followers into customers with omnichannel tools.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
