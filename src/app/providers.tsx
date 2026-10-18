"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { useAppSelector } from "../store/hooks";

function LanguageDirectionSync({ children }: { children: React.ReactNode }) {
  const { selectedLanguage, availableLanguages } = useAppSelector(
    (state) => state.language
  );

  useEffect(() => {
    const currentLang = availableLanguages.find(
      (l) => l.id === selectedLanguage
    );
    const dir =
      currentLang?.dir ||
      (selectedLanguage === "ar" || selectedLanguage === "he" ? "rtl" : "ltr");
    if (typeof document !== "undefined") {
      document.documentElement.dir = dir;
      document.documentElement.lang = selectedLanguage;
    }
  }, [selectedLanguage, availableLanguages]);

  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <LanguageDirectionSync>{children}</LanguageDirectionSync>
    </Provider>
  );
}
