import type { Metadata } from "next";
import ViewComponent from "../../views/facebook";

export const metadata: Metadata = {
  title: "Facebook Messenger Integration | iNetGlobal",
  description: "Connect with your customers on Facebook Messenger through unified omnichannel messaging.",
};

export default function Page() {
  return <ViewComponent />;
}
