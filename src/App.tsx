import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import VoiceServices from "./pages/VoiceServices";
import MessagingServices from "./pages/MessagingServices";

export default function App() {
  const getInitialPage = (): "home" | "contact" | "voice" | "messaging" => {
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
      if (
        cleanHash === "messaging" ||
        cleanHash === "messaging-services" ||
        cleanHash === "wholesale-sms" ||
        cleanHash === "rcs" ||
        cleanHash === "otp-sms" ||
        cleanHash === "sms"
      ) {
        window.history.replaceState(null, "", "/messaging");
        return "messaging";
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
    if (
      path === "/messaging" ||
      path === "/messaging-services" ||
      path === "/wholesale-sms" ||
      path === "/rcs" ||
      path === "/otp-sms" ||
      path === "/sms"
    ) {
      return "messaging";
    }
    return "home";
  };

  const [currentPage, setCurrentPage] = useState<"home" | "contact" | "voice" | "messaging">(
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
        } else if (
          cleanHash === "messaging" ||
          cleanHash === "messaging-services" ||
          cleanHash === "wholesale-sms" ||
          cleanHash === "rcs" ||
          cleanHash === "otp-sms" ||
          cleanHash === "sms"
        ) {
          targetPath = "/messaging";
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
      } else if (
        path === "/messaging" ||
        path === "/messaging-services" ||
        path === "/wholesale-sms" ||
        path === "/rcs" ||
        path === "/otp-sms" ||
        path === "/sms"
      ) {
        setCurrentPage("messaging");
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
  if (currentPage === "messaging") {
    return <MessagingServices />;
  }
  return <Home />;
}
