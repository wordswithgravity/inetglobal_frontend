import type { Metadata } from "next";
import ViewComponent from "../../views/DailerSolution";

export const metadata: Metadata = {
  title: "Predictive & Cloud Dialer Solutions | iNetGlobal",
  description: "Maximize agent productivity with smart predictive, progressive, and preview dialers tailored for high-volume enterprise call centers.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/dialer",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/dialer",
    title: "Predictive & Cloud Dialer Solutions | iNetGlobal",
    description: "Maximize agent productivity with smart predictive, progressive, and preview dialers tailored for high-volume enterprise call centers.",
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
    title: "Predictive & Cloud Dialer Solutions | iNetGlobal",
    description: "Maximize agent productivity with smart predictive, progressive, and preview dialers tailored for high-volume enterprise call centers.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
