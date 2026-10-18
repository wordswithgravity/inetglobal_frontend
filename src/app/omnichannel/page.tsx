import type { Metadata } from "next";
import ViewComponent from "../../views/OmniChannel";

export const metadata: Metadata = {
  title: "Omnichannel Communication Platform | iNetGlobal",
  description: "Unify Voice, SMS, WhatsApp, and digital channels in a unified API engine for seamless customer engagement across the entire lifecycle.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/omnichannel",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/omnichannel",
    title: "Omnichannel Communication Platform | iNetGlobal",
    description: "Unify Voice, SMS, WhatsApp, and digital channels in a unified API engine for seamless customer engagement across the entire lifecycle.",
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
    title: "Omnichannel Communication Platform | iNetGlobal",
    description: "Unify Voice, SMS, WhatsApp, and digital channels in a unified API engine for seamless customer engagement across the entire lifecycle.",
    images: ["/assets/logo.png"],
  },
};

const omnichannelServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Omnichannel Communication Platform",
  serviceType: "Cloud Communications Platform",
  provider: {
    "@type": "Organization",
    name: "iNetGlobal",
    url: "https://www.inetglobalservices.com",
  },
  description: "Unify Voice, SMS, WhatsApp, and digital channels in a unified API engine for seamless customer engagement across the entire lifecycle.",
  areaServed: "Worldwide",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(omnichannelServiceSchema) }}
      />
      <ViewComponent />
    </>
  );
}
