import type { Metadata } from "next";
import ViewComponent from "../../views/MessagingServices";

export const metadata: Metadata = {
  title: "Messaging Services | iNetGlobal",
  description: "Reliable global SMS, OTP, and A2P messaging services with high delivery rates.",
};

export default function Page() {
  return <ViewComponent />;
}
