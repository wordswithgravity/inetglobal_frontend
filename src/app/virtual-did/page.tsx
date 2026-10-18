import type { Metadata } from "next";
import ViewComponent from "../../views/InternationalNumberDID";

export const metadata: Metadata = {
  title: "International DID Numbers | iNetGlobal",
  description: "International direct inward dialing (DID) numbers with carrier-grade voice quality and global coverage.",
};

export default function Page() {
  return <ViewComponent />;
}
