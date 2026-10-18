import type { Metadata } from "next";
import ViewComponent from "../../views/DailerSolution";

export const metadata: Metadata = {
  title: "Call Center Dialer Solution | iNetGlobal",
  description: "Smart predictive and progressive dialer software for modern call center operations.",
};

export default function Page() {
  return <ViewComponent />;
}
