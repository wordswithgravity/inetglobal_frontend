import React from "react";
import { Phone, MessageSquare, Hash, Check, ArrowRight } from "lucide-react";
import { useAppSelector } from "../store/hooks";
import { getRegionContent } from "../data/regionContent";

import { getNavTranslations } from "../data/translations";

interface ServiceCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  features: string[];
  learnMoreText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  iconBg,
  title,
  description,
  features,
  learnMoreText = "Learn more",
}) => {
  return (
    <div
      className="bg-white rounded-[26px] p-6 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200"
    >
      <div className="space-y-6">
        {/* Icon Badge */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center ${iconBg}`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#102038] tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] sm:text-[15px] text-[#556578] leading-relaxed">
          {description}
        </p>

        {/* Features Checklist */}
        <ul className="space-y-2.5 pt-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2.5 text-[13px] sm:text-[14px] text-[#4b5563]"
            >
              <Check className="w-4 h-4 text-[#789d26] stroke-[2.5] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn More Link */}
      <div className="pt-8">
        <a
          href="/voice"
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#83184d] hover:text-[#6b103e] transition-colors group"
        >
          <span>{learnMoreText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export const CoreServices: React.FC = () => {
  const selectedRegion = useAppSelector((state) => state.region.selectedRegion);
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );
  const content = getRegionContent(selectedRegion, selectedLanguage).coreServices;
  const t = getNavTranslations(selectedLanguage);

  const icons = [
    {
      icon: <Phone className="w-6 h-6 text-white fill-white" />,
      iconBg: "bg-[#658a1f]",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#83184d] fill-[#83184d]" />,
      iconBg: "bg-[#f9e9f1]",
    },
    {
      icon: <Hash className="w-6 h-6 text-[#658a1f] stroke-[2.5]" />,
      iconBg: "bg-[#eaf3de]",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]"></span>
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {content.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[42px] font-bold text-[#102038] tracking-tight leading-[1.18]">
            {content.titleLine1} <br className="hidden sm:inline" />
            {content.titleLine2}
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#556578] leading-relaxed max-w-2xl">
            {content.description}
          </p>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {content.services.map((service, index) => {
            const iconConfig = icons[index % icons.length];
            return (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={iconConfig.icon}
                iconBg={iconConfig.iconBg}
                learnMoreText={t.learnMore}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
