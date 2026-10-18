import type { Metadata } from "next";
import HomeView from "../views/Home";

export const metadata: Metadata = {
  title: "iNetGlobal",
  description:
    "Empowering global enterprises with mission-critical Voice, SMS Messaging, Omnichannel Communications, and Scalable Cloud Contact solutions.",
};

export default function HomePage() {
  return <HomeView />;
}
