import type { Metadata } from "next";
import ViewComponent from "../../views/Advance_SMS_Portal";

export const metadata: Metadata = {
  title: "Advanced SMS Portal | iNetGlobal",
  description: "Feature-rich enterprise SMS web portal for campaign management, analytics, and contact lists.",
};

export default function Page() {
  return <ViewComponent />;
}
