import type { Metadata } from "next";
import ViewComponent from "../../views/wholeSaleVoice";

export const metadata: Metadata = {
  title: "Wholesale Voice | iNetGlobal",
  description: "Carrier-grade wholesale voice termination with Tier-1 routes and flexible routing options.",
};

export default function Page() {
  return <ViewComponent />;
}
