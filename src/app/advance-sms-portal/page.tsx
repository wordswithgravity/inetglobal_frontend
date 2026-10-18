import type { Metadata } from "next";
import ViewComponent from "../../views/Advance_SMS_Portal";

export const metadata: Metadata = {
  title: "Advanced SMS Web Portal | iNetGlobal",
  description: "Feature-rich web interface for managing bulk SMS campaigns, contact address books, scheduled broadcasts, and real-time delivery logs.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/advance-sms-portal",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/advance-sms-portal",
    title: "Advanced SMS Web Portal | iNetGlobal",
    description: "Feature-rich web interface for managing bulk SMS campaigns, contact address books, scheduled broadcasts, and real-time delivery logs.",
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
    title: "Advanced SMS Web Portal | iNetGlobal",
    description: "Feature-rich web interface for managing bulk SMS campaigns, contact address books, scheduled broadcasts, and real-time delivery logs.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
