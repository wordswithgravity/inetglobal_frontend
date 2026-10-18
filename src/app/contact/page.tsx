import type { Metadata } from "next";
import ViewComponent from "../../views/Contact";

export const metadata: Metadata = {
  title: "Contact Our Global Team | iNetGlobal",
  description: "Connect with our 24/7 telecommunications experts for voice interconnection, wholesale messaging, carrier pricing, and technical support.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/contact",
    title: "Contact Our Global Team | iNetGlobal",
    description: "Connect with our 24/7 telecommunications experts for voice interconnection, wholesale messaging, carrier pricing, and technical support.",
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
    title: "Contact Our Global Team | iNetGlobal",
    description: "Connect with our 24/7 telecommunications experts for voice interconnection, wholesale messaging, carrier pricing, and technical support.",
    images: ["/assets/logo.png"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact iNetGlobal",
  url: "https://www.inetglobalservices.com/contact",
  description: "Connect with our 24/7 telecommunications experts for voice interconnection, wholesale messaging, carrier pricing, and technical support.",
  mainEntity: {
    "@type": "Organization",
    name: "iNetGlobal",
    url: "https://www.inetglobalservices.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44 20 7946 0991",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish", "French", "Arabic"],
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ViewComponent />
    </>
  );
}
