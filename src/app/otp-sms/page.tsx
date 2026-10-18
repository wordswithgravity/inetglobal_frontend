import type { Metadata } from "next";
import ViewComponent from "../../views/OTP_sms";

export const metadata: Metadata = {
  title: "OTP SMS Verification Solutions | iNetGlobal",
  description: "Secure, ultra-fast one-time password verification SMS for enterprise web and mobile authentication workflows.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/otp-sms-services",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/otp-sms-services",
    title: "OTP SMS Verification Solutions | iNetGlobal",
    description: "Secure, ultra-fast one-time password verification SMS for enterprise web and mobile authentication workflows.",
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
    title: "OTP SMS Verification Solutions | iNetGlobal",
    description: "Secure, ultra-fast one-time password verification SMS for enterprise web and mobile authentication workflows.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
