import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inetglobalservices.com"),
  title: {
    default:
      "iNetGlobal - Enterprise Communications & Global Telecom Solutions",
    template: "%s | iNetGlobal",
  },
  description:
    "iNetGlobal empowers global enterprises with carrier-grade Voice Termination, SMS & OTP Messaging, Omnichannel Engagement, WhatsApp Business API, and Cloud Telephony.",
  keywords: [
    "enterprise voice",
    "wholesale voice",
    "A2P SMS",
    "OTP verification",
    "WhatsApp Business API",
    "omnichannel messaging",
    "RCS business messaging",
    "cloud call center dialer",
    "DID virtual numbers",
    "telecom solutions",
  ],
  authors: [{ name: "iNetGlobal" }],
  creator: "iNetGlobal",
  publisher: "iNetGlobal",
  alternates: {
    canonical: "https://www.inetglobalservices.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.inetglobalservices.com",
    siteName: "iNetGlobal",
    title:
      "iNetGlobal - Enterprise Communications & Global Telecom Solutions",
    description:
      "iNetGlobal empowers global enterprises with carrier-grade Voice Termination, SMS & OTP Messaging, Omnichannel Engagement, WhatsApp Business API, and Cloud Telephony.",
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
    title:
      "iNetGlobal - Enterprise Communications & Global Telecom Solutions",
    description:
      "iNetGlobal empowers global enterprises with carrier-grade Voice Termination, SMS & OTP Messaging, Omnichannel Engagement, WhatsApp Business API, and Cloud Telephony.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.inetglobalservices.com/#organization",
      name: "iNetGlobal",
      url: "https://www.inetglobalservices.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.inetglobalservices.com/assets/logo.png",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contact@inetglobalservices.com",
          availableLanguage: [
            "English",
            "Arabic",
            "Spanish",
            "French",
            "Chinese",
          ],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.inetglobalservices.com/#website",
      url: "https://www.inetglobalservices.com",
      name: "iNetGlobal",
      publisher: {
        "@id": "https://www.inetglobalservices.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
