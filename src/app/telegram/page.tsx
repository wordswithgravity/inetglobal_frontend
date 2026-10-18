import type { Metadata } from "next";
import ViewComponent from "../../views/telegram";

export const metadata: Metadata = {
  title: "Telegram Messaging Integration | iNetGlobal",
  description: "Secure enterprise Telegram messaging integration for alerts, bots, and customer support.",
};

export default function Page() {
  return <ViewComponent />;
}
