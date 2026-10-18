import type { Metadata } from "next";
import ViewComponent from "../../views/OTP_sms";

export const metadata: Metadata = {
  title: "OTP SMS Solutions | iNetGlobal",
  description: "Fast and reliable OTP SMS delivery for two-factor authentication and user verification.",
};

export default function Page() {
  return <ViewComponent />;
}
