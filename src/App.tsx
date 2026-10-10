import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import VoiceServices from "./pages/VoiceServices";
import MessagingServices from "./pages/MessagingServices";
import OmniChannel from "./pages/OmniChannel";
import WholeSaleVoice from "./pages/wholeSaleVoice";
import WholeSaleMessage from "./pages/wholeSaleMessage";
import WhatsappBusiness from "./pages/whatsappBusiness";
import OTP_SMS from "./pages/OTP_SMS";
import InternationalNumberDID from "./pages/InternationalNumberDID";
import DailerSolution from "./pages/DailerSolution";
import AboutUS from "./pages/AboutUS";
import AIVoice from "./pages/AIVoice";
import { useAppSelector } from "./store/hooks";

export default function App() {
  const { selectedLanguage, availableLanguages } = useAppSelector(
    (state) => state.language,
  );

  useEffect(() => {
    const currentLang = availableLanguages.find(
      (l) => l.id === selectedLanguage,
    );
    const dir =
      currentLang?.dir ||
      (selectedLanguage === "ar" || selectedLanguage === "he" ? "rtl" : "ltr");
    document.documentElement.dir = dir;
    document.documentElement.lang = selectedLanguage;
  }, [selectedLanguage, availableLanguages]);
  const getInitialPage = ():
    | "home"
    | "contact"
    | "voice"
    | "messaging"
    | "omnichannel"
    | "wholesale-voice"
    | "wholesale-message"
    | "whatsapp"
    | "otp-sms"
    | "virtual-did"
    | "dialer"
    | "about"
    | "ai-voice" => {
    // If URL has a leftover hash, clean it to standard path
    if (window.location.hash) {
      const cleanHash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
      if (cleanHash === "contact") {
        window.history.replaceState(null, "", "/contact");
        return "contact";
      }
      if (
        cleanHash === "ai-voice" ||
        cleanHash === "aivoice" ||
        cleanHash === "ai_voice"
      ) {
        window.history.replaceState(null, "", "/ai-voice");
        return "ai-voice";
      }
      if (
        cleanHash === "about" ||
        cleanHash === "about-us" ||
        cleanHash === "aboutus"
      ) {
        window.history.replaceState(null, "", "/about");
        return "about";
      }
      if (cleanHash === "wholesale-voice" || cleanHash === "whole-sale-voice") {
        window.history.replaceState(null, "", "/wholesale-voice");
        return "wholesale-voice";
      }
      if (
        cleanHash === "wholesale-message" ||
        cleanHash === "wholesale-sms" ||
        cleanHash === "whole-sale-message" ||
        cleanHash === "whole-sale-sms"
      ) {
        window.history.replaceState(null, "", "/wholesale-message");
        return "wholesale-message";
      }
      if (
        cleanHash === "whatsapp" ||
        cleanHash === "whatsapp-business" ||
        cleanHash === "whatsappbusiness"
      ) {
        window.history.replaceState(null, "", "/whatsapp");
        return "whatsapp";
      }
      if (
        cleanHash === "otp-sms" ||
        cleanHash === "otp_sms" ||
        cleanHash === "sms-portal"
      ) {
        window.history.replaceState(null, "", "/otp-sms");
        return "otp-sms";
      }
      if (
        cleanHash === "virtual-did" ||
        cleanHash === "virtual_did" ||
        cleanHash === "virtual-numbers" ||
        cleanHash === "virtualdid" ||
        cleanHash === "did" ||
        cleanHash === "did-portal"
      ) {
        window.history.replaceState(null, "", "/virtual-did");
        return "virtual-did";
      }
      if (
        cleanHash === "dialer" ||
        cleanHash === "dailer" ||
        cleanHash === "dialer-solution" ||
        cleanHash === "dailer-solution" ||
        cleanHash === "dailersolution" ||
        cleanHash === "call-center-dialer"
      ) {
        window.history.replaceState(null, "", "/dialer");
        return "dialer";
      }
      if (
        cleanHash === "voice" ||
        cleanHash === "voice-services" ||
        cleanHash === "ai-voice"
      ) {
        window.history.replaceState(null, "", "/voice");
        return "voice";
      }
      if (
        cleanHash === "messaging" ||
        cleanHash === "messaging-services" ||
        cleanHash === "rcs" ||
        cleanHash === "otp-sms" ||
        cleanHash === "sms"
      ) {
        window.history.replaceState(null, "", "/messaging");
        return "messaging";
      }
      if (
        cleanHash === "omnichannel" ||
        cleanHash === "omnichannel-services" ||
        cleanHash === "telegram" ||
        cleanHash === "omnichannel-messaging"
      ) {
        window.history.replaceState(null, "", "/omnichannel");
        return "omnichannel";
      }
      window.history.replaceState(null, "", "/");
      return "home";
    }

    const path = window.location.pathname.toLowerCase().replace(/\/+$/, "");

    if (path === "/contact") {
      return "contact";
    }
    if (path === "/about" || path === "/about-us" || path === "/aboutus") {
      return "about";
    }
    if (path === "/wholesale-voice" || path === "/whole-sale-voice") {
      return "wholesale-voice";
    }
    if (
      path === "/wholesale-message" ||
      path === "/wholesale-sms" ||
      path === "/whole-sale-message" ||
      path === "/whole-sale-sms"
    ) {
      return "wholesale-message";
    }
    if (
      path === "/whatsapp" ||
      path === "/whatsapp-business" ||
      path === "/whatsappbusiness"
    ) {
      return "whatsapp";
    }
    if (path === "/otp-sms" || path === "/otp_sms" || path === "/sms-portal") {
      return "otp-sms";
    }
    if (
      path === "/virtual-did" ||
      path === "/virtual_did" ||
      path === "/virtual-numbers" ||
      path === "/virtualdid" ||
      path === "/international-number" ||
      path === "/international-numbers" ||
      path === "/internationalnumberdid" ||
      path === "/did" ||
      path === "/did-portal"
    ) {
      return "virtual-did";
    }
    if (
      path === "/dialer" ||
      path === "/dailer" ||
      path === "/dialer-solution" ||
      path === "/dailer-solution" ||
      path === "/dailersolution" ||
      path === "/call-center-dialer"
    ) {
      return "dialer";
    }
    if (path === "/ai-voice" || path === "/aivoice" || path === "/ai_voice") {
      return "ai-voice";
    }
    if (path === "/voice" || path === "/voice-services") {
      return "voice";
    }
    if (
      path === "/messaging" ||
      path === "/messaging-services" ||
      path === "/rcs" ||
      path === "/sms"
    ) {
      return "messaging";
    }
    if (
      path === "/omnichannel" ||
      path === "/omnichannel-services" ||
      path === "/telegram" ||
      path === "/omnichannel-messaging"
    ) {
      return "omnichannel";
    }
    return "home";
  };

  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "contact"
    | "voice"
    | "messaging"
    | "omnichannel"
    | "wholesale-voice"
    | "wholesale-message"
    | "whatsapp"
    | "otp-sms"
    | "virtual-did"
    | "dialer"
    | "about"
    | "ai-voice"
  >(getInitialPage);

  useEffect(() => {
    const handleLocationChange = () => {
      // Clean any hash if present
      if (window.location.hash) {
        const cleanHash = window.location.hash
          .replace(/^#\/?/, "")
          .toLowerCase();
        let targetPath = "/";
        if (cleanHash === "contact") targetPath = "/contact";
        else if (
          cleanHash === "ai-voice" ||
          cleanHash === "aivoice" ||
          cleanHash === "ai_voice"
        ) {
          targetPath = "/ai-voice";
        } else if (
          cleanHash === "about" ||
          cleanHash === "about-us" ||
          cleanHash === "aboutus"
        ) {
          targetPath = "/about";
        } else if (
          cleanHash === "wholesale-voice" ||
          cleanHash === "whole-sale-voice"
        ) {
          targetPath = "/wholesale-voice";
        } else if (
          cleanHash === "wholesale-message" ||
          cleanHash === "wholesale-sms" ||
          cleanHash === "whole-sale-message" ||
          cleanHash === "whole-sale-sms"
        ) {
          targetPath = "/wholesale-message";
        } else if (
          cleanHash === "whatsapp" ||
          cleanHash === "whatsapp-business" ||
          cleanHash === "whatsappbusiness"
        ) {
          targetPath = "/whatsapp";
        } else if (
          cleanHash === "otp-sms" ||
          cleanHash === "otp_sms" ||
          cleanHash === "sms-portal"
        ) {
          targetPath = "/otp-sms";
        } else if (
          cleanHash === "virtual-did" ||
          cleanHash === "virtual_did" ||
          cleanHash === "virtual-numbers" ||
          cleanHash === "virtualdid" ||
          cleanHash === "did" ||
          cleanHash === "did-portal"
        ) {
          targetPath = "/virtual-did";
        } else if (
          cleanHash === "dialer" ||
          cleanHash === "dailer" ||
          cleanHash === "dialer-solution" ||
          cleanHash === "dailer-solution" ||
          cleanHash === "dailersolution" ||
          cleanHash === "call-center-dialer"
        ) {
          targetPath = "/dialer";
        } else if (
          cleanHash === "voice" ||
          cleanHash === "voice-services" ||
          cleanHash === "ai-voice"
        ) {
          targetPath = "/voice";
        } else if (
          cleanHash === "messaging" ||
          cleanHash === "messaging-services" ||
          cleanHash === "rcs" ||
          cleanHash === "sms"
        ) {
          targetPath = "/messaging";
        } else if (
          cleanHash === "omnichannel" ||
          cleanHash === "omnichannel-services" ||
          cleanHash === "telegram" ||
          cleanHash === "omnichannel-messaging"
        ) {
          targetPath = "/omnichannel";
        }
        window.history.replaceState(null, "", targetPath);
      }

      const path = window.location.pathname.toLowerCase().replace(/\/+$/, "");

      if (path === "/contact") {
        setCurrentPage("contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/ai-voice" ||
        path === "/aivoice" ||
        path === "/ai_voice"
      ) {
        setCurrentPage("ai-voice");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/about" ||
        path === "/about-us" ||
        path === "/aboutus"
      ) {
        setCurrentPage("about");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (path === "/wholesale-voice" || path === "/whole-sale-voice") {
        setCurrentPage("wholesale-voice");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/wholesale-message" ||
        path === "/wholesale-sms" ||
        path === "/whole-sale-message" ||
        path === "/whole-sale-sms"
      ) {
        setCurrentPage("wholesale-message");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/whatsapp" ||
        path === "/whatsapp-business" ||
        path === "/whatsappbusiness"
      ) {
        setCurrentPage("whatsapp");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/otp-sms" ||
        path === "/otp_sms" ||
        path === "/sms-portal"
      ) {
        setCurrentPage("otp-sms");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/virtual-did" ||
        path === "/virtual_did" ||
        path === "/virtual-numbers" ||
        path === "/virtualdid" ||
        path === "/did" ||
        path === "/did-portal"
      ) {
        setCurrentPage("virtual-did");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/dialer" ||
        path === "/dailer" ||
        path === "/dialer-solution" ||
        path === "/dailer-solution" ||
        path === "/dailersolution" ||
        path === "/call-center-dialer"
      ) {
        setCurrentPage("dialer");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (path === "/voice" || path === "/voice-services") {
        setCurrentPage("voice");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/messaging" ||
        path === "/messaging-services" ||
        path === "/rcs" ||
        path === "/sms"
      ) {
        setCurrentPage("messaging");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/omnichannel" ||
        path === "/omnichannel-services" ||
        path === "/telegram" ||
        path === "/omnichannel-messaging"
      ) {
        setCurrentPage("omnichannel");
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
  if (currentPage === "about") {
    return <AboutUS />;
  }
  if (currentPage === "ai-voice") {
    return <AIVoice />;
  }
  if (currentPage === "wholesale-voice") {
    return <WholeSaleVoice />;
  }
  if (currentPage === "wholesale-message") {
    return <WholeSaleMessage />;
  }
  if (currentPage === "whatsapp") {
    return <WhatsappBusiness />;
  }
  if (currentPage === "otp-sms") {
    return <OTP_SMS />;
  }
  if (currentPage === "virtual-did") {
    return <InternationalNumberDID />;
  }
  if (currentPage === "dialer") {
    return <DailerSolution />;
  }
  if (currentPage === "voice") {
    return <VoiceServices />;
  }
  if (currentPage === "messaging") {
    return <MessagingServices />;
  }
  if (currentPage === "omnichannel") {
    return <OmniChannel />;
  }
  return <Home />;
}
