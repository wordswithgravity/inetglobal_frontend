import type { Metadata } from "next";
import ViewComponent from "../../views/voiceCalls";

export const metadata: Metadata = {
  title: "Voice Calling Solutions | iNetGlobal",
  description: "Crystal-clear SIP trunking and business voice calling solutions built for global uptime.",
};

export default function Page() {
  return <ViewComponent />;
}
