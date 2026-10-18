import type { Metadata } from "next";
import ViewComponent from "../../views/facebook";

export const metadata: Metadata = {
  title: "Facebook Messenger Business Integration | iNetGlobal",
  description: "Connect enterprise CRM and helpdesks to Facebook Messenger for continuous social customer care and conversational commerce.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/facebook",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/facebook",
    title: "Facebook Messenger Business Integration | iNetGlobal",
    description: "Connect enterprise CRM and helpdesks to Facebook Messenger for continuous social customer care and conversational commerce.",
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
    title: "Facebook Messenger Business Integration | iNetGlobal",
    description: "Connect enterprise CRM and helpdesks to Facebook Messenger for continuous social customer care and conversational commerce.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
