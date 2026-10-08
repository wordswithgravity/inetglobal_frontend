import React from "react";
import { Phone, MessageSquare, Hash, Check, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  features: string[];
  isActive?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  iconBg,
  title,
  description,
  features,
  isActive = false,
}) => {
  return (
    <div
      className={`bg-white rounded-[26px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
        isActive
          ? "border-2 border-[#6f9421] shadow-lg shadow-[#6f9421]/10"
          : "border border-gray-100 shadow-sm hover:border-gray-200"
      }`}
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
          href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#83184d] hover:text-[#6b103e] transition-colors group"
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export const CoreServices: React.FC = () => {
  const services = [
    {
      title: "Voice Services",
      description:
        "International SIP trunking with flexible route options designed around quality, localized CLI coverage, and optimized termination costs.",
      features: [
        "High-quality voice connections",
        "Flexible route options",
        "Global coverage",
      ],
      icon: <Phone className="w-6 h-6 text-white fill-white" />,
      iconBg: "bg-[#658a1f]",
      isActive: true,
    },
    {
      title: "Messaging",
      description:
        "Deliver critical transactional SMS, OTPs, and rich business messaging directly to handsets worldwide with high delivery assurance.",
      features: [
        "High-quality voice connections",
        "Flexible route options",
        "Global coverage",
      ],
      icon: <MessageSquare className="w-5 h-5 text-[#83184d] fill-[#83184d]" />,
      iconBg: "bg-[#f9e9f1]",
      isActive: false,
    },
    {
      title: "Omnichannels",
      description:
        "Unify Voice, SMS, WhatsApp, and Verification into a single developer-friendly REST API suite designed for instant deployment.",
      features: [
        "High-quality voice connections",
        "Flexible route options",
        "Global coverage",
      ],
      icon: <Hash className="w-6 h-6 text-[#658a1f] stroke-[2.5]" />,
      iconBg: "bg-[#eaf3de]",
      isActive: false,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]"></span>
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              CORE SERVICE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-[1.18]">
            Communication Solutions For <br className="hidden sm:inline" />
            Every Customer Journey
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#556578] leading-relaxed max-w-2xl">
            Modular telecom infrastructure engineered for high availability
            voice, messaging, and virtual numbers.
          </p>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreServices;
