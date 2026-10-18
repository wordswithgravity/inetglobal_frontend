import type { Metadata } from "next";
import ViewComponent from "../../views/VoiceServices";

export const metadata: Metadata = {
  title: "Enterprise Voice Services | iNetGlobal",
  description: "Carrier-grade international voice termination, SIP trunking, and direct routes with guaranteed CLI delivery and high answer-seizure ratios.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/voice",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/voice",
    title: "Enterprise Voice Services | iNetGlobal",
    description: "Carrier-grade international voice termination, SIP trunking, and direct routes with guaranteed CLI delivery and high answer-seizure ratios.",
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
    title: "Enterprise Voice Services | iNetGlobal",
    description: "Carrier-grade international voice termination, SIP trunking, and direct routes with guaranteed CLI delivery and high answer-seizure ratios.",
    images: ["/assets/logo.png"],
  },
};

const voiceServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise Voice Services",
  serviceType: "Telecommunications Voice Termination",
  provider: {
    "@type": "Organization",
    name: "iNetGlobal",
    url: "https://www.inetglobalservices.com",
  },
  description: "Carrier-grade international voice termination, SIP trunking, and direct routes with guaranteed CLI delivery and high answer-seizure ratios.",
  areaServed: "Worldwide",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceServiceSchema) }}
      />
      <ViewComponent />
    </>
  );
}
