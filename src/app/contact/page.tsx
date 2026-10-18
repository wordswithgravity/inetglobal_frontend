import type { Metadata } from "next";
import ViewComponent from "../../views/Contact";

export const metadata: Metadata = {
  title: "Contact Us | iNetGlobal",
  description: "Get in touch with the iNetGlobal team for enterprise voice, messaging, and connectivity inquiries.",
};

export default function Page() {
  return <ViewComponent />;
}
