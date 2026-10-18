import type { Metadata } from "next";
import ViewComponent from "../../views/InternationalNumberDID";

export const metadata: Metadata = {
  title: "International DID Numbers & SIP Trunking | iNetGlobal",
  description: "Establish local market presence worldwide with international DID phone numbers backed by carrier-grade voice infrastructure.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/virtual-did",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/virtual-did",
    title: "International DID Numbers & SIP Trunking | iNetGlobal",
    description: "Establish local market presence worldwide with international DID phone numbers backed by carrier-grade voice infrastructure.",
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
    title: "International DID Numbers & SIP Trunking | iNetGlobal",
    description: "Establish local market presence worldwide with international DID phone numbers backed by carrier-grade voice infrastructure.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
