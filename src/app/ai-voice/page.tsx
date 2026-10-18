import type { Metadata } from "next";
import ViewComponent from "../../views/AIVoice";

export const metadata: Metadata = {
  title: "Conversational AI Voice Agents | iNetGlobal",
  description: "Automate inbound support and outbound customer outreach with natural, conversational AI voice agents integrated with cloud contact centers.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/ai-voice",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/ai-voice",
    title: "Conversational AI Voice Agents | iNetGlobal",
    description: "Automate inbound support and outbound customer outreach with natural, conversational AI voice agents integrated with cloud contact centers.",
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
    title: "Conversational AI Voice Agents | iNetGlobal",
    description: "Automate inbound support and outbound customer outreach with natural, conversational AI voice agents integrated with cloud contact centers.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
