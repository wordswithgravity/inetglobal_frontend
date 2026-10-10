import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import VoiceServices from "./pages/VoiceServices";
import MessagingServices from "./pages/MessagingServices";
import OmniChannel from "./pages/OmniChannel";
import WholeSaleVoice from "./pages/wholeSaleVoice";
import WholeSaleMessage from "./pages/wholeSaleMessage";
import WhatsappBusiness from "./pages/whatsappBusiness";
import Advance_SMS_Portal from "./pages/Advance_SMS_Portal";
import OTP_sms from "./pages/OTP_sms";
import InternationalNumberDID from "./pages/InternationalNumberDID";
import DailerSolution from "./pages/DailerSolution";
import AboutUS from "./pages/AboutUS";
import AIVoice from "./pages/AIVoice";
import Instagram from "./pages/instagram";
import Facebook from "./pages/facebook";
import Tiktok from "./pages/tiktok";
import Email from "./pages/email";
import LivechatPlugin from "./pages/livechatPlugin";
import Telegram from "./pages/telegram";
import VoiceCalls from "./pages/voiceCalls";
import RCS from "./pages/rcs";
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
    | "advance-sms-portal"
    | "virtual-did"
    | "dialer"
    | "about"
    | "ai-voice"
    | "rcs"
    | "instagram"
    | "facebook"
    | "tiktok"
    | "email"
    | "livechat-plugin"
    | "telegram"
    | "voice-calls" => {
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
        cleanHash === "advance-sms-portal" ||
        cleanHash === "advance_sms_portal" ||
        cleanHash === "advancesmsportal" ||
        cleanHash === "sms-portal"
      ) {
        window.history.replaceState(null, "", "/advance-sms-portal");
        return "advance-sms-portal";
      }
      if (
        cleanHash === "otp-sms-services" ||
        cleanHash === "otp-sms" ||
        cleanHash === "otp_sms" ||
        cleanHash === "otp"
      ) {
        window.history.replaceState(null, "", "/otp-sms-services");
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
        cleanHash === "rcs" ||
        cleanHash === "rcs-messaging" ||
        cleanHash === "rcs-business-messaging" ||
        cleanHash === "rcsbusinessmessaging"
      ) {
        window.history.replaceState(null, "", "/rcs");
        return "rcs";
      }
      if (
        cleanHash === "messaging" ||
        cleanHash === "messaging-services" ||
        cleanHash === "sms"
      ) {
        window.history.replaceState(null, "", "/messaging");
        return "messaging";
      }
      if (cleanHash === "instagram") {
        window.history.replaceState(null, "", "/instagram");
        return "instagram";
      }
      if (cleanHash === "facebook") {
        window.history.replaceState(null, "", "/facebook");
        return "facebook";
      }
      if (cleanHash === "tiktok") {
        window.history.replaceState(null, "", "/tiktok");
        return "tiktok";
      }
      if (cleanHash === "email") {
        window.history.replaceState(null, "", "/email");
        return "email";
      }
      if (
        cleanHash === "livechat-plugin" ||
        cleanHash === "livechat" ||
        cleanHash === "live-chat"
      ) {
        window.history.replaceState(null, "", "/livechat-plugin");
        return "livechat-plugin";
      }
      if (cleanHash === "telegram") {
        window.history.replaceState(null, "", "/telegram");
        return "telegram";
      }
      if (cleanHash === "voice-calls" || cleanHash === "voicecalls") {
        window.history.replaceState(null, "", "/voice-calls");
        return "voice-calls";
      }
      if (
        cleanHash === "omnichannel" ||
        cleanHash === "omnichannel-services" ||
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
    if (
      path === "/advance-sms-portal" ||
      path === "/advance_sms_portal" ||
      path === "/advancesmsportal" ||
      path === "/sms-portal"
    ) {
      return "advance-sms-portal";
    }
    if (
      path === "/otp-sms-services" ||
      path === "/otp-sms" ||
      path === "/otp_sms" ||
      path === "/otp"
    ) {
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
    if (
      path === "/rcs" ||
      path === "/rcs-messaging" ||
      path === "/rcs-business-messaging" ||
      path === "/rcsbusinessmessaging"
    ) {
      return "rcs";
    }
    if (path === "/voice" || path === "/voice-services") {
      return "voice";
    }
    if (
      path === "/messaging" ||
      path === "/messaging-services" ||
      path === "/sms"
    ) {
      return "messaging";
    }
    if (path === "/instagram") {
      return "instagram";
    }
    if (path === "/facebook") {
      return "facebook";
    }
    if (path === "/tiktok") {
      return "tiktok";
    }
    if (path === "/email") {
      return "email";
    }
    if (
      path === "/livechat-plugin" ||
      path === "/livechat" ||
      path === "/live-chat"
    ) {
      return "livechat-plugin";
    }
    if (path === "/telegram") {
      return "telegram";
    }
    if (path === "/voice-calls" || path === "/voicecalls") {
      return "voice-calls";
    }
    if (
      path === "/omnichannel" ||
      path === "/omnichannel-services" ||
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
    | "advance-sms-portal"
    | "virtual-did"
    | "dialer"
    | "about"
    | "ai-voice"
    | "rcs"
    | "instagram"
    | "facebook"
    | "tiktok"
    | "email"
    | "livechat-plugin"
    | "telegram"
    | "voice-calls"
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
          cleanHash === "advance-sms-portal" ||
          cleanHash === "advance_sms_portal" ||
          cleanHash === "advancesmsportal" ||
          cleanHash === "sms-portal"
        ) {
          targetPath = "/advance-sms-portal";
        } else if (
          cleanHash === "otp-sms-services" ||
          cleanHash === "otp-sms" ||
          cleanHash === "otp_sms" ||
          cleanHash === "otp"
        ) {
          targetPath = "/otp-sms-services";
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
          cleanHash === "rcs" ||
          cleanHash === "rcs-messaging" ||
          cleanHash === "rcs-business-messaging" ||
          cleanHash === "rcsbusinessmessaging"
        ) {
          targetPath = "/rcs";
        } else if (cleanHash === "instagram") {
          targetPath = "/instagram";
        } else if (cleanHash === "facebook") {
          targetPath = "/facebook";
        } else if (cleanHash === "tiktok") {
          targetPath = "/tiktok";
        } else if (cleanHash === "email") {
          targetPath = "/email";
        } else if (
          cleanHash === "livechat-plugin" ||
          cleanHash === "livechat" ||
          cleanHash === "live-chat"
        ) {
          targetPath = "/livechat-plugin";
        } else if (cleanHash === "telegram") {
          targetPath = "/telegram";
        } else if (
          cleanHash === "voice-calls" ||
          cleanHash === "voicecalls"
        ) {
          targetPath = "/voice-calls";
        } else if (
          cleanHash === "messaging" ||
          cleanHash === "messaging-services" ||
          cleanHash === "sms"
        ) {
          targetPath = "/messaging";
        } else if (
          cleanHash === "omnichannel" ||
          cleanHash === "omnichannel-services" ||
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
        path === "/advance-sms-portal" ||
        path === "/advance_sms_portal" ||
        path === "/advancesmsportal" ||
        path === "/sms-portal"
      ) {
        setCurrentPage("advance-sms-portal");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/otp-sms-services" ||
        path === "/otp-sms" ||
        path === "/otp_sms" ||
        path === "/otp"
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
      } else if (
        path === "/rcs" ||
        path === "/rcs-messaging" ||
        path === "/rcs-business-messaging" ||
        path === "/rcsbusinessmessaging"
      ) {
        setCurrentPage("rcs");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (path === "/voice" || path === "/voice-services") {
        setCurrentPage("voice");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/messaging" ||
        path === "/messaging-services" ||
        path === "/sms"
      ) {
        setCurrentPage("messaging");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (path === "/instagram") {
        setCurrentPage("instagram");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (path === "/facebook") {
        setCurrentPage("facebook");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (path === "/tiktok") {
        setCurrentPage("tiktok");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (path === "/email") {
        setCurrentPage("email");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/livechat-plugin" ||
        path === "/livechat" ||
        path === "/live-chat"
      ) {
        setCurrentPage("livechat-plugin");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (path === "/telegram") {
        setCurrentPage("telegram");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/voice-calls" ||
        path === "/voicecalls"
      ) {
        setCurrentPage("voice-calls");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        path === "/omnichannel" ||
        path === "/omnichannel-services" ||
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
  if (currentPage === "advance-sms-portal") {
    return <Advance_SMS_Portal />;
  }
  if (currentPage === "otp-sms") {
    return <OTP_sms />;
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
  if (currentPage === "rcs") {
    return <RCS />;
  }
  if (currentPage === "instagram") {
    return <Instagram />;
  }
  if (currentPage === "facebook") {
    return <Facebook />;
  }
  if (currentPage === "tiktok") {
    return <Tiktok />;
  }
  if (currentPage === "email") {
    return <Email />;
  }
  if (currentPage === "livechat-plugin") {
    return <LivechatPlugin />;
  }
  if (currentPage === "telegram") {
    return <Telegram />;
  }
  if (currentPage === "voice-calls") {
    return <VoiceCalls />;
  }
  if (currentPage === "messaging") {
    return <MessagingServices />;
  }
  if (currentPage === "omnichannel") {
    return <OmniChannel />;
  }
  return <Home />;
}
