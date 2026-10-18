import type { Metadata } from "next";
import ViewComponent from "../../views/tiktok";

export const metadata: Metadata = {
  title: "TikTok Messaging Integration | iNetGlobal",
  description: "Engage next-gen audiences on TikTok with integrated enterprise communication channels.",
};

export default function Page() {
  return <ViewComponent />;
}
