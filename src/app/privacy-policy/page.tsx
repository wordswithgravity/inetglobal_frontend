import type { Metadata } from "next";
import ViewComponent from "../../views/privacypolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | iNetGlobal",
  description: "iNetGlobal Privacy Policy, data protection practices, and regulatory compliance standards.",
};

export default function Page() {
  return <ViewComponent />;
}
