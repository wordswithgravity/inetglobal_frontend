import type { Metadata } from "next";
import ViewComponent from "../../views/AIVoice";

export const metadata: Metadata = {
  title: "AI Voice Solutions | iNetGlobal",
  description: "Conversational AI voice agents and smart automation for enterprise customer service.",
};

export default function Page() {
  return <ViewComponent />;
}
