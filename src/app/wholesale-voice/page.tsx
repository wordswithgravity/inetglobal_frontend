import type { Metadata } from "next";
import ViewComponent from "../../views/wholeSaleVoice";

export const metadata: Metadata = {
  title: "Wholesale Voice Termination | iNetGlobal",
  description: "Scalable wholesale voice termination featuring Tier-1 interconnects, bilateral routing agreements, and flexible LCR engines for global telecom operators.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/wholesale-voice",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/wholesale-voice",
    title: "Wholesale Voice Termination | iNetGlobal",
    description: "Scalable wholesale voice termination featuring Tier-1 interconnects, bilateral routing agreements, and flexible LCR engines for global telecom operators.",
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
    title: "Wholesale Voice Termination | iNetGlobal",
    description: "Scalable wholesale voice termination featuring Tier-1 interconnects, bilateral routing agreements, and flexible LCR engines for global telecom operators.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
