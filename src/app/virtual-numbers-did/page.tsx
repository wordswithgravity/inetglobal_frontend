import type { Metadata } from "next";
import ViewComponent from "../../views/virtualNumberDID";

export const metadata: Metadata = {
  title: "Global Virtual Numbers (DID) | iNetGlobal",
  description: "Local, toll-free, and mobile virtual DID numbers across 100+ countries with flexible SIP forwarding and instant online provisioning.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/virtual-numbers-did",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/virtual-numbers-did",
    title: "Global Virtual Numbers (DID) | iNetGlobal",
    description: "Local, toll-free, and mobile virtual DID numbers across 100+ countries with flexible SIP forwarding and instant online provisioning.",
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
    title: "Global Virtual Numbers (DID) | iNetGlobal",
    description: "Local, toll-free, and mobile virtual DID numbers across 100+ countries with flexible SIP forwarding and instant online provisioning.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
