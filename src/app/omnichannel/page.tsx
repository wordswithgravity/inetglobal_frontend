import type { Metadata } from "next";
import ViewComponent from "../../views/OmniChannel";

export const metadata: Metadata = {
  title: "Omnichannel Solutions | iNetGlobal",
  description: "Engage customers seamlessly across WhatsApp, RCS, Telegram, and social messaging channels.",
};

export default function Page() {
  return <ViewComponent />;
}
