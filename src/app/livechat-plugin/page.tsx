import type { Metadata } from "next";
import ViewComponent from "../../views/livechatPlugin";

export const metadata: Metadata = {
  title: "Website Live Chat Plugin & Widget | iNetGlobal",
  description: "Lightweight, embeddable live chat widget designed to capture leads and deliver instant real-time customer support directly on your website.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/livechat-plugin",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/livechat-plugin",
    title: "Website Live Chat Plugin & Widget | iNetGlobal",
    description: "Lightweight, embeddable live chat widget designed to capture leads and deliver instant real-time customer support directly on your website.",
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
    title: "Website Live Chat Plugin & Widget | iNetGlobal",
    description: "Lightweight, embeddable live chat widget designed to capture leads and deliver instant real-time customer support directly on your website.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
