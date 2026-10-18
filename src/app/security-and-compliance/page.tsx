import type { Metadata } from "next";
import ViewComponent from "../../views/securtiyandcomplience";

export const metadata: Metadata = {
  title: "Security & Compliance | iNetGlobal",
  description: "Enterprise security standards, regulatory compliance, data encryption, and telecom privacy protocols.",
};

export default function Page() {
  return <ViewComponent />;
}
