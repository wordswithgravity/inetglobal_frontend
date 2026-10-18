import type { Metadata } from "next";
import ViewComponent from "../../views/AdminLogin/AdminLogin";

export const metadata: Metadata = {
  title: "Admin Portal Login | iNetGlobal",
  description:
    "Secure administrator login portal for iNetGlobal management system.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function Page() {
  return <ViewComponent />;
}
