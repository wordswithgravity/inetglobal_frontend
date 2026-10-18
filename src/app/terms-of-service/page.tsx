import type { Metadata } from "next";
import ViewComponent from "../../views/termsofservices";

export const metadata: Metadata = {
  title: "Terms of Service | iNetGlobal",
  description: "Terms and Conditions governing the use of iNetGlobal services and enterprise solutions.",
};

export default function Page() {
  return <ViewComponent />;
}
