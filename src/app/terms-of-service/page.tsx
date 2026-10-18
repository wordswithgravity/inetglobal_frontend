import type { Metadata } from "next";
import ViewComponent from "../../views/termsofservices";

export const metadata: Metadata = {
  title: "Terms of Service | iNetGlobal",
  description: "Terms and conditions governing access to iNetGlobal telecom APIs, wholesale connectivity, SMS gateways, and cloud software services.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/terms-of-service",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/terms-of-service",
    title: "Terms of Service | iNetGlobal",
    description: "Terms and conditions governing access to iNetGlobal telecom APIs, wholesale connectivity, SMS gateways, and cloud software services.",
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
    title: "Terms of Service | iNetGlobal",
    description: "Terms and conditions governing access to iNetGlobal telecom APIs, wholesale connectivity, SMS gateways, and cloud software services.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
