import React, { useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
  Sliders,
  BarChart3,
} from "lucide-react";
import type { WholesaleMessageTranslation } from "../../data/wholesaleMessageTranslations";

interface DeliveryIntelligenceProps {
  t: WholesaleMessageTranslation;
}

export const DeliveryIntelligence: React.FC<DeliveryIntelligenceProps> = ({
  t,
}) => {
  const [activeTab, setActiveTab] = useState<"log" | "routes" | "destinations">(
    "log",
  );

  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-20 lg:py-24 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Intelligence Overview + Message Visibility Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center mb-20">
          {/* Left: Text & Checkpoints */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.intelligenceBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.intelligenceTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.intelligenceDesc}
            </p>

            <div className="space-y-3 pt-2">
              {t.intelligenceBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#edf4e8] text-[#698a22] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-[14px] sm:text-[15px] text-slate-700">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[12px] sm:text-[12.5px] text-slate-400 italic pt-1">
              {t.intelligenceFootnote}
            </p>
          </div>

          {/* Right: Interactive Message Visibility Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-left">
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] sm:text-[16px] font-bold text-[#102038]">
                    {t.messageLogCard.title}
                  </span>
                </div>
                <span className="text-[10.5px] font-bold tracking-wider uppercase text-slate-400 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  {t.messageLogCard.badge}
                </span>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-6 px-6 pt-3 border-b border-slate-100 text-[13px] font-medium text-slate-500">
                <button
                  onClick={() => setActiveTab("log")}
                  className={`pb-3 relative transition-colors ${
                    activeTab === "log"
                      ? "text-[#83184d] font-bold"
                      : "hover:text-slate-800"
                  }`}
                >
                  {t.messageLogCard.tab1}
                  {activeTab === "log" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#83184d]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("routes")}
                  className={`pb-3 relative transition-colors ${
                    activeTab === "routes"
                      ? "text-[#83184d] font-bold"
                      : "hover:text-slate-800"
                  }`}
                >
                  {t.messageLogCard.tab2}
                  {activeTab === "routes" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#83184d]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("destinations")}
                  className={`pb-3 relative transition-colors ${
                    activeTab === "destinations"
                      ? "text-[#83184d] font-bold"
                      : "hover:text-slate-800"
                  }`}
                >
                  {t.messageLogCard.tab3}
                  {activeTab === "destinations" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#83184d]" />
                  )}
                </button>
              </div>

              {/* Table Data */}
              <div className="p-6">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                      <th className="pb-3">{t.messageLogCard.colType}</th>
                      <th className="pb-3">{t.messageLogCard.colState}</th>
                      <th className="pb-3 text-right">
                        {t.messageLogCard.colReceipt}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[13.5px]">
                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 font-medium text-slate-800">
                        {t.messageLogCard.row1Type}
                      </td>
                      <td className="py-3.5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {t.messageLogCard.row1State}
                        </span>
                      </td>
                      <td className="py-3.5 text-right text-slate-500 font-mono text-[12.5px]">
                        {t.messageLogCard.row1Receipt}
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 font-medium text-slate-800">
                        {t.messageLogCard.row2Type}
                      </td>
                      <td className="py-3.5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                          {t.messageLogCard.row2State}
                        </span>
                      </td>
                      <td className="py-3.5 text-right text-slate-500 font-mono text-[12.5px]">
                        {t.messageLogCard.row2Receipt}
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 font-medium text-slate-800">
                        {t.messageLogCard.row3Type}
                      </td>
                      <td className="py-3.5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                          {t.messageLogCard.row3State}
                        </span>
                      </td>
                      <td className="py-3.5 text-right text-slate-500 font-mono text-[12.5px]">
                        {t.messageLogCard.row3Receipt}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Bottom Card Footer Banner */}
                <div className="mt-6 p-3.5 rounded-xl bg-[#edf4e8] border border-[#d8e8ce] flex items-center gap-3 text-[12.5px] text-[#2c4e0b]">
                  <BarChart3 className="w-4 h-4 text-[#698a22] shrink-0" />
                  <span>{t.messageLogCard.footerText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Fraud & Traffic Protection */}
        <div className="pt-10 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 text-left">
            <h3 className="text-[20px] sm:text-[22px] font-bold text-[#102038]">
              {t.protectionTitle}
            </h3>
            <span className="text-[11.5px] font-bold tracking-wider text-[#83184d] uppercase bg-[#fdf2f8] px-3 py-1 rounded-full border border-[#fce7f3] self-start sm:self-auto">
              {t.protectionBadge}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.protectionCards.map((card, idx) => {
              const icons = [
                <ShieldCheck className="w-5 h-5 text-[#83184d]" />,
                <FileCheck2 className="w-5 h-5 text-[#83184d]" />,
                <Sliders className="w-5 h-5 text-[#83184d]" />,
              ];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-left flex flex-col justify-start group hover:border-[#83184d]/40 transition duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#fdf2f8] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {icons[idx % icons.length]}
                  </div>
                  <h4 className="text-[16.5px] font-bold text-[#102038] mb-2">
                    {card.title}
                  </h4>
                  <p className="text-[13.5px] text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryIntelligence;
