import type { Metadata } from "next";
import ViewComponent from "../../views/privacypolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | iNetGlobal",
  description: "Review iNetGlobal's privacy policy, personal data protection standards, cookie practices, and international regulatory compliance commitments.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/privacy-policy",
    title: "Privacy Policy | iNetGlobal",
    description: "Review iNetGlobal's privacy policy, personal data protection standards, cookie practices, and international regulatory compliance commitments.",
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
    title: "Privacy Policy | iNetGlobal",
    description: "Review iNetGlobal's privacy policy, personal data protection standards, cookie practices, and international regulatory compliance commitments.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
