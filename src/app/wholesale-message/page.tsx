import type { Metadata } from "next";
import ViewComponent from "../../views/wholeSaleMessage";

export const metadata: Metadata = {
  title: "Wholesale SMS Delivery & Carrier Routes | iNetGlobal",
  description: "Direct carrier wholesale SMS termination delivering high throughput, low latency, and competitive international volume pricing.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/wholesale-message",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/wholesale-message",
    title: "Wholesale SMS Delivery & Carrier Routes | iNetGlobal",
    description: "Direct carrier wholesale SMS termination delivering high throughput, low latency, and competitive international volume pricing.",
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
    title: "Wholesale SMS Delivery & Carrier Routes | iNetGlobal",
    description: "Direct carrier wholesale SMS termination delivering high throughput, low latency, and competitive international volume pricing.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
