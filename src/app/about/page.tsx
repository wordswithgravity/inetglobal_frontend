import type { Metadata } from "next";
import ViewComponent from "../../views/AboutUS";

export const metadata: Metadata = {
  title: "About Us | iNetGlobal",
  description: "Learn about iNetGlobal, our mission, vision, and core telecom infrastructure services.",
};

export default function Page() {
  return <ViewComponent />;
}
