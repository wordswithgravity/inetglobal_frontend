import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getLegalTranslations } from "../data/legalTranslations";
import {
  FileText,
  Scale,
  Mail,
  Globe,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const TermsOfServices: React.FC = () => {
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );
  const t = getLegalTranslations(selectedLanguage).termsOfService;

  useEffect(() => {
    document.title = t.metaTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", t.metaDescription);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [t]);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="w-full bg-[#EEF2EB] pt-8 sm:pt-12 pb-12 sm:pb-16 px-2 sm:px-3 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto text-left space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102038] tracking-tight leading-[1.15]">
            {t.title}
          </h1>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Scale className="w-4 h-4 text-[#698a22]" />
            <span>{t.lastUpdated}</span>
          </div>

          <p className="text-[15px] sm:text-[17px] text-slate-600 leading-relaxed pt-2">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="flex-1 py-8 sm:py-12 px-2 sm:px-3">
        <div className="max-w-[1440px] mx-auto space-y-8">
          {/* Policy Clauses */}
          <div className="space-y-6">
            {t.sections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl py-5 sm:py-6 px-3 sm:px-4 border border-slate-200/90 shadow-xs hover:border-[#698a22]/40 transition space-y-3.5 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#698a22]/15 text-[#698a22] font-bold text-sm flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#102038]">
                    {sec.title}
                  </h2>
                </div>

                <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed">
                  {sec.description}
                </p>

                {sec.points && sec.points.length > 0 && (
                  <ul className="pt-2 space-y-2 border-t border-slate-100">
                    {sec.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#698a22] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Official Contact Us Card */}
          <section className="bg-[#102038] text-white rounded-3xl py-6 sm:py-7 px-3 sm:px-5 shadow-xl border border-slate-700/80 text-left space-y-6">
            <div className="space-y-2 border-b border-slate-700/80 pb-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8fc42b] uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>{t.contactHeading}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t.companyName}
              </h3>
              <p className="text-sm text-slate-300">
                {t.contactIntro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
              {/* Email */}
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#192f52]/70 border border-slate-700/60">
                <Mail className="w-5 h-5 text-[#8fc42b] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400 block mb-0.5">
                    {t.emailLabel}
                  </span>
                  <a
                    href={`mailto:${t.emailValue}`}
                    className="font-semibold text-white hover:text-[#8fc42b] transition break-all"
                  >
                    {t.emailValue}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#192f52]/70 border border-slate-700/60">
                <Globe className="w-5 h-5 text-[#8fc42b] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400 block mb-0.5">
                    {t.websiteLabel}
                  </span>
                  <a
                    href={t.websiteValue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-[#8fc42b] transition break-all"
                  >
                    {t.websiteValue}
                  </a>
                </div>
              </div>

              {/* Official Address */}
              <div className="md:col-span-2 flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#192f52]/70 border border-slate-700/60">
                <MapPin className="w-5 h-5 text-[#8fc42b] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400 block mb-0.5">
                    {t.addressLabel}
                  </span>
                  <div className="text-slate-200 text-sm leading-relaxed font-medium">
                    {t.addressValue.map((line, lIdx) => (
                      <div key={lIdx}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfServices;
