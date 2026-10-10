import React from "react";
import { Target, Compass, Award, Shield, Users, Lightbulb } from "lucide-react";
import type { AboutUsTranslation } from "../../data/aboutUsTranslations";
import peopleImg from "../../assets/people.png";

interface AboutCompanyProps {
  t: AboutUsTranslation;
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({ t }) => {
  const valueIcons = [
    <Award className="w-5 h-5 text-[#698a22]" />,
    <Shield className="w-5 h-5 text-[#698a22]" />,
    <Users className="w-5 h-5 text-[#698a22]" />,
    <Lightbulb className="w-5 h-5 text-[#698a22]" />,
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.companyBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#102038] tracking-tight leading-tight">
            {t.companyTitle}
          </h2>
          <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.companySubtitle}
          </p>
        </div>

        {/* 2-Column: Story & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/3] bg-slate-100">
              <img
                src={peopleImg}
                alt="iNet Global Operations Team"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Ambient Accent Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#102038] text-white p-5 rounded-2xl shadow-xl border border-slate-700/80 max-w-[240px] text-left">
              <div className="text-2xl font-black text-[#698a22] mb-0.5">
                100+
              </div>
              <div className="text-xs font-semibold text-slate-200">
                Direct Global Interconnects
              </div>
              <div className="text-[10.5px] text-slate-400 mt-1">
                Zero-friction international wholesale transit
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              <p>{t.companyStory1}</p>
              <p>{t.companyStory2}</p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#EEF2EB] p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#698a22]/15 text-[#698a22] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#102038]">
                  {t.missionTitle}
                </h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {t.missionDesc}
                </p>
              </div>

              <div className="bg-[#fdf8fa] p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#83184d]/15 text-[#83184d] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#102038]">
                  {t.visionTitle}
                </h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {t.visionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values 4-Card Grid */}
        <div className="space-y-6 text-left pt-6 border-t border-slate-100">
          <h3 className="text-xl sm:text-2xl font-bold text-[#102038]">
            {t.coreValuesTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#698a22]/50 shadow-sm hover:shadow-md transition space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f4f8ee] flex items-center justify-center">
                  {valueIcons[idx % valueIcons.length]}
                </div>
                <h4 className="text-base font-bold text-[#102038]">
                  {val.title}
                </h4>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
