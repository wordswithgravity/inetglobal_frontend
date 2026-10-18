import type { Metadata } from "next";
import ViewComponent from "../../views/whatsappBusiness";

export const metadata: Metadata = {
  title: "WhatsApp Business API Solutions | iNetGlobal",
  description: "Official WhatsApp Business Platform provider with verified green badge support, automated customer journeys, and scalable conversational messaging.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/whatsapp",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/whatsapp",
    title: "WhatsApp Business API Solutions | iNetGlobal",
    description: "Official WhatsApp Business Platform provider with verified green badge support, automated customer journeys, and scalable conversational messaging.",
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
    title: "WhatsApp Business API Solutions | iNetGlobal",
    description: "Official WhatsApp Business Platform provider with verified green badge support, automated customer journeys, and scalable conversational messaging.",
    images: ["/assets/logo.png"],
  },
};

const whatsappServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WhatsApp Business API Solutions",
  serviceType: "Conversational Messaging & Customer Engagement",
  provider: {
    "@type": "Organization",
    name: "iNetGlobal",
    url: "https://www.inetglobalservices.com",
  },
  description: "Official WhatsApp Business Platform provider with verified green badge support, automated customer journeys, and scalable conversational messaging.",
  areaServed: "Worldwide",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whatsappServiceSchema) }}
      />
      <ViewComponent />
    </>
  );
}
