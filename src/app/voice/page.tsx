import type { Metadata } from "next";
import ViewComponent from "../../views/VoiceServices";

export const metadata: Metadata = {
  title: "Voice Services | iNetGlobal",
  description: "High-quality wholesale and enterprise voice connectivity across international termination routes.",
};

export default function Page() {
  return <ViewComponent />;
}
