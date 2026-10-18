import type { Metadata } from "next";
import ViewComponent from "../../views/voiceCalls";

export const metadata: Metadata = {
  title: "Business Voice Calling Solutions | iNetGlobal",
  description: "High-definition outbound and inbound business VoIP calling solutions engineered for global enterprise scalability and carrier resilience.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/voice-calls",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/voice-calls",
    title: "Business Voice Calling Solutions | iNetGlobal",
    description: "High-definition outbound and inbound business VoIP calling solutions engineered for global enterprise scalability and carrier resilience.",
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
    title: "Business Voice Calling Solutions | iNetGlobal",
    description: "High-definition outbound and inbound business VoIP calling solutions engineered for global enterprise scalability and carrier resilience.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
