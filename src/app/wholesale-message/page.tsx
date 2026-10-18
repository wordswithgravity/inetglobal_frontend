import type { Metadata } from "next";
import ViewComponent from "../../views/wholeSaleMessage";

export const metadata: Metadata = {
  title: "Wholesale Messaging | iNetGlobal",
  description: "Scalable wholesale SMS delivery with direct routes and carrier-grade infrastructure.",
};

export default function Page() {
  return <ViewComponent />;
}
