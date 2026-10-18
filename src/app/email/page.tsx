import type { Metadata } from "next";
import ViewComponent from "../../views/email";

export const metadata: Metadata = {
  title: "Transactional & Marketing Email Services | iNetGlobal",
  description: "High-inbox-rate email delivery infrastructure built for enterprise transactional receipts, password resets, and marketing campaigns.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/email",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/email",
    title: "Transactional & Marketing Email Services | iNetGlobal",
    description: "High-inbox-rate email delivery infrastructure built for enterprise transactional receipts, password resets, and marketing campaigns.",
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
    title: "Transactional & Marketing Email Services | iNetGlobal",
    description: "High-inbox-rate email delivery infrastructure built for enterprise transactional receipts, password resets, and marketing campaigns.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
