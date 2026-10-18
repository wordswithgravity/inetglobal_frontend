import type { Metadata } from "next";
import ViewComponent from "../../views/Admin/Dashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard | iNetGlobal",
  description:
    "Administrator control panel for blogs, inquiries, subscribers, and site configuration.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function Page() {
  return <ViewComponent />;
}
