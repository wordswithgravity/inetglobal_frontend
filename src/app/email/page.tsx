import type { Metadata } from "next";
import ViewComponent from "../../views/email";

export const metadata: Metadata = {
  title: "Email Communication Services | iNetGlobal",
  description: "High-deliverability transactional and marketing email services for global enterprises.",
};

export default function Page() {
  return <ViewComponent />;
}
