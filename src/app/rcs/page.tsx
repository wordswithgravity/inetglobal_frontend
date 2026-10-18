import type { Metadata } from "next";
import ViewComponent from "../../views/rcs";

export const metadata: Metadata = {
  title: "RCS Business Messaging | iNetGlobal",
  description: "Next-generation rich communication services (RCS) with verified sender IDs and interactive media.",
};

export default function Page() {
  return <ViewComponent />;
}
