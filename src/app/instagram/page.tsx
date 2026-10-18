import type { Metadata } from "next";
import ViewComponent from "../../views/instagram";

export const metadata: Metadata = {
  title: "Instagram Messaging Integration | iNetGlobal",
  description: "Omnichannel Instagram Direct messaging integration for automated customer support and sales.",
};

export default function Page() {
  return <ViewComponent />;
}
