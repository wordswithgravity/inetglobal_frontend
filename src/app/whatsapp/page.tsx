import type { Metadata } from "next";
import ViewComponent from "../../views/whatsappBusiness";

export const metadata: Metadata = {
  title: "WhatsApp Business API | iNetGlobal",
  description: "Enterprise WhatsApp Business API solutions for conversational engagement and automated notifications.",
};

export default function Page() {
  return <ViewComponent />;
}
