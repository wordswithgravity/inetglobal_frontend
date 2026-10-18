import type { Metadata } from "next";
import ViewComponent from "../../views/virtualNumberDID";

export const metadata: Metadata = {
  title: "Virtual Numbers (DID) | iNetGlobal",
  description: "Global virtual numbers (DID) in over 100+ countries with local presence and flexible call forwarding.",
};

export default function Page() {
  return <ViewComponent />;
}
