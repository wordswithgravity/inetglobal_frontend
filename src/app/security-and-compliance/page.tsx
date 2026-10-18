import type { Metadata } from "next";
import ViewComponent from "../../views/securtiyandcomplience";

export const metadata: Metadata = {
  title: "Security & Regulatory Compliance | iNetGlobal",
  description: "Discover iNetGlobal's telecom security architecture, end-to-end data encryption, spam mitigation, and international carrier compliance frameworks.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/security-and-compliance",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/security-and-compliance",
    title: "Security & Regulatory Compliance | iNetGlobal",
    description: "Discover iNetGlobal's telecom security architecture, end-to-end data encryption, spam mitigation, and international carrier compliance frameworks.",
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
    title: "Security & Regulatory Compliance | iNetGlobal",
    description: "Discover iNetGlobal's telecom security architecture, end-to-end data encryption, spam mitigation, and international carrier compliance frameworks.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
