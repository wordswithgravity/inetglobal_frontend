import type { Metadata } from "next";
import ViewComponent from "../../views/MessagingServices";

export const metadata: Metadata = {
  title: "Wholesale SMS & Messaging Solutions | iNetGlobal",
  description: "Global A2P and P2P wholesale SMS termination with ultra-low latency, direct carrier routes, and real-time delivery reporting.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/messaging",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/messaging",
    title: "Wholesale SMS & Messaging Solutions | iNetGlobal",
    description: "Global A2P and P2P wholesale SMS termination with ultra-low latency, direct carrier routes, and real-time delivery reporting.",
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
    title: "Wholesale SMS & Messaging Solutions | iNetGlobal",
    description: "Global A2P and P2P wholesale SMS termination with ultra-low latency, direct carrier routes, and real-time delivery reporting.",
    images: ["/assets/logo.png"],
  },
};

const messagingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wholesale SMS & Messaging Solutions",
  serviceType: "A2P & P2P SMS Termination",
  provider: {
    "@type": "Organization",
    name: "iNetGlobal",
    url: "https://www.inetglobalservices.com",
  },
  description: "Global A2P and P2P wholesale SMS termination with ultra-low latency, direct carrier routes, and real-time delivery reporting.",
  areaServed: "Worldwide",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(messagingServiceSchema) }}
      />
      <ViewComponent />
    </>
  );
}
