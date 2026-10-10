import React from "react";
import { Check, Quote } from "lucide-react";
import blackLadyImg from "../../assets/blacklady.jpg";
import type { WholesaleVoiceTranslation } from "../../data/wholesaleVoiceTranslations";

interface TestimonialSectionProps {
  t: WholesaleVoiceTranslation;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ t }) => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto space-y-10 sm:space-y-12">
        {/* Header with pill badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.testimonialBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.testimonialTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.testimonialSubtitle}
            </p>
          </div>

          {/* Top-right 3 Trust Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {t.testimonialPills.map((pill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#edf4e8] border border-[#d6e7cb] text-[#4b6d17] text-[12px] sm:text-[12.5px] font-semibold"
              >
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>{pill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Big Testimonial Card */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 border border-gray-200/90 shadow-xl shadow-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          {/* Left Column: Portrait photo of VP */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-4/3 sm:aspect-square lg:aspect-4/5 rounded-[24px] overflow-hidden shadow-md bg-slate-100">
              <img
                src={blackLadyImg}
                alt="Maya Chen - VP, Network Operations"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Quote, Author, Metrics */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="relative">
              <Quote className="w-10 h-10 text-[#698a22] opacity-40 mb-2 rotate-180" />
              <blockquote className="text-lg sm:text-2xl font-bold text-[#102038] leading-snug tracking-tight">
                “{t.quote}”
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 border-t border-gray-100">
              <div>
                <div className="text-[16px] sm:text-[17px] font-bold text-[#102038]">
                  {t.authorName}
                </div>
                <div className="text-[13px] sm:text-[13.5px] text-slate-500">
                  {t.authorRole}
                </div>
              </div>

              {/* 2 Impact Stats */}
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#83184d]">
                    {t.stat1Val}
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] text-slate-500 font-medium">
                    {t.stat1Label}
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#698a22]">
                    {t.stat2Val}
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] text-slate-500 font-medium">
                    {t.stat2Label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
