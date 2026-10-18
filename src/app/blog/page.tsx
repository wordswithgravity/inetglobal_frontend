import type { Metadata } from "next";
import ViewComponent from "../../views/Blog";

export const metadata: Metadata = {
  title: "Blog & Industry Insights | iNetGlobal",
  description: "Explore the latest insights, trends, and articles on telecommunications, CPaaS, and enterprise messaging.",
};

export default function Page() {
  return <ViewComponent />;
}
