import type { Metadata } from "next";
import ViewComponent from "../../views/OTP_sms";

export const metadata: Metadata = {
  title: "OTP SMS Services & Two-Factor Authentication | iNetGlobal",
  description: "Sub-second one-time password (OTP) delivery over high-priority direct carrier routes for seamless 2FA and user authentication.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/otp-sms-services",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/otp-sms-services",
    title: "OTP SMS Services & Two-Factor Authentication | iNetGlobal",
    description: "Sub-second one-time password (OTP) delivery over high-priority direct carrier routes for seamless 2FA and user authentication.",
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
    title: "OTP SMS Services & Two-Factor Authentication | iNetGlobal",
    description: "Sub-second one-time password (OTP) delivery over high-priority direct carrier routes for seamless 2FA and user authentication.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
