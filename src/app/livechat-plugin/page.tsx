import type { Metadata } from "next";
import ViewComponent from "../../views/livechatPlugin";

export const metadata: Metadata = {
  title: "Live Chat Plugin | iNetGlobal",
  description: "Embeddable website live chat widget for instant customer assistance and sales conversion.",
};

export default function Page() {
  return <ViewComponent />;
}
