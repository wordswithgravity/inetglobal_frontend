import type { Metadata } from "next";
import HomeView from "../views/Home";

export const metadata: Metadata = {
  title: "iNetGlobal",
  description:
    "iNetGlobal is a global telecommunications provider delivering enterprise wholesale voice, A2P SMS, OTP verification, WhatsApp Business API, and smart contact center dialers.",
  alternates: {
    canonical: "https://www.inetglobalservices.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com",
    title:
      "Enterprise Voice, SMS, WhatsApp & Omnichannel Solutions | iNetGlobal",
    description:
      "iNetGlobal is a global telecommunications provider delivering enterprise wholesale voice, A2P SMS, OTP verification, WhatsApp Business API, and smart contact center dialers.",
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
      "Enterprise Voice, SMS, WhatsApp & Omnichannel Solutions | iNetGlobal",
    description:
      "iNetGlobal is a global telecommunications provider delivering enterprise wholesale voice, A2P SMS, OTP verification, WhatsApp Business API, and smart contact center dialers.",
    images: ["/assets/logo.png"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
