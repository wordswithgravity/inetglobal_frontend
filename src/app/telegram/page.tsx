import type { Metadata } from "next";
import ViewComponent from "../../views/telegram";

export const metadata: Metadata = {
  title: "Enterprise Telegram Messaging Integration | iNetGlobal",
  description: "Deploy automated Telegram bots, broadcast alerts, and customer engagement channels seamlessly through unified messaging APIs.",
  alternates: {
    canonical: "https://www.inetglobalservices.com/telegram",
  },
  openGraph: {
    type: "website",
    url: "https://www.inetglobalservices.com/telegram",
    title: "Enterprise Telegram Messaging Integration | iNetGlobal",
    description: "Deploy automated Telegram bots, broadcast alerts, and customer engagement channels seamlessly through unified messaging APIs.",
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
    title: "Enterprise Telegram Messaging Integration | iNetGlobal",
    description: "Deploy automated Telegram bots, broadcast alerts, and customer engagement channels seamlessly through unified messaging APIs.",
    images: ["/assets/logo.png"],
  },
};

export default function Page() {
  return <ViewComponent />;
}
