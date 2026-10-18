import type { Metadata } from "next";
import ViewComponent from "../../views/OTP_sms";

export const metadata: Metadata = {
  title: "OTP SMS Services | iNetGlobal",
  description: "Ultra-fast, secure one-time password (OTP) delivery for verification and authentication.",
};

export default function Page() {
  return <ViewComponent />;
}
