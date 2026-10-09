import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import VoiceServices from "./pages/VoiceServices";

export default function App() {
  const getInitialPage = (): "home" | "contact" | "voice" => {
    // If URL has a leftover hash, clean it to standard path
    if (window.location.hash) {
      const cleanHash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
      if (cleanHash === "contact") {
        window.history.replaceState(null, "", "/contact");
        return "contact";
      }
      if (
        cleanHash === "voice" ||
        cleanHash === "voice-services" ||
        cleanHash === "wholesale-voice" ||
        cleanHash === "ai-voice" ||
        cleanHash === "virtual-numbers"
      ) {
        window.history.replaceState(null, "", "/voice");
        return "voice";
      }
      window.history.replaceState(null, "", "/");
      return "home";
    }

    const path = window.location.pathname.toLowerCase().replace(/\/+$/, "");

    if (path === "/contact") {
      return "contact";
    }
    if (
      path === "/voice" ||
      path === "/voice-services" ||
      path === "/wholesale-voice" ||
      path === "/ai-voice" ||
      path === "/virtual-numbers"
    ) {
      return "voice";
    }
    return "home";
  };

  const [currentPage, setCurrentPage] = useState<"home" | "contact" | "voice">(
    getInitialPage
  );

  useEffect(() => {
    const handleLocationChange = () => {
      // Clean any hash if present
      if (window.location.hash) {
        const cleanHash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
        let targetPath = "/";
        if (cleanHash === "contact") targetPath = "/contact";
        else if (
          cleanHash === "voice" ||
          cleanHash === "voice-services" ||
          cleanHash === "wholesale-voice" ||
          cleanHash === "ai-voice" ||
          cleanHash === "virtual-numbers"
        ) {
          targetPath = "/voice";
        }
        window.history.replaceState(null, "", targetPath);
      }

      const path = window.location.pathname.toLowerCase().replace(/\/+$/, "");

      if (path === "/contact") {
        setCurrentPage("contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/voice" ||
        path === "/voice-services" ||
        path === "/wholesale-voice" ||
        path === "/ai-voice" ||
        path === "/virtual-numbers"
      ) {
        setCurrentPage("voice");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setCurrentPage("home");
      }
    };

    // Intercept internal link clicks to prevent full reloads and avoid '#'
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // If link starts with '/', navigate without hash and without reload
      if (href.startsWith("/") && !href.startsWith("//")) {
        e.preventDefault();
        window.history.pushState(null, "", href);
        handleLocationChange();
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  if (currentPage === "contact") {
    return <Contact />;
  }
  if (currentPage === "voice") {
    return <VoiceServices />;
  }
  return <Home />;
}
