import React from "react";
import { Phone, MessageSquare, Hash, Check, ArrowRight } from "lucide-react";
import { theme } from "../theme";

interface ServiceCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  iconBg,
  title,
  description,
  features,
}) => {
  return (
    <div className={theme.classes.serviceCard}>
      <div className="space-y-6">
        {/* Icon Badge */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center ${iconBg}`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className={theme.typography.cardHeading + ` text-[${theme.colors.text.heading}]`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-[14px] sm:text-[15px] text-[${theme.colors.text.secondary}] leading-relaxed`}>
          {description}
        </p>

        {/* Features Checklist */}
        <ul className="space-y-2.5 pt-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2.5 text-[13px] sm:text-[14px] text-[#4b5563]"
            >
              <Check className={`w-4 h-4 text-[${theme.colors.accent.DEFAULT}] stroke-[2.5] shrink-0`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn More Link */}
      <div className="pt-8">
        <a
          href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
          className={`inline-flex items-center gap-1.5 text-[14px] font-semibold text-[${theme.colors.primary.DEFAULT}] hover:text-[${theme.colors.primary.hover}] transition-colors group`}
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
      iconBg: `bg-[${theme.colors.accent.dark}]`,
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
      icon: <MessageSquare className={`w-5 h-5 text-[${theme.colors.primary.DEFAULT}] fill-[${theme.colors.primary.DEFAULT}]`} />,
      iconBg: `bg-[${theme.colors.primary.light}]`,
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
      icon: <Hash className={`w-6 h-6 text-[${theme.colors.accent.DEFAULT}] stroke-[2.5]`} />,
      iconBg: `bg-[${theme.colors.accent.paleBg}]`,
    },
  ];

  return (
    <section className={`w-full bg-white ${theme.layout.sectionPy} ${theme.layout.sectionPx}`}>
      <div className={`${theme.layout.maxWidth} mx-auto space-y-10 sm:space-y-14`}>
        
        {/* Section Header */}
        <div className={theme.classes.sectionHeader}>
          <div className="flex items-center gap-2">
            <span className={theme.classes.badgeLine}></span>
            <span className={theme.classes.sectionBadge}>
              CORE SERVICE
            </span>
          </div>

          <h2 className={theme.classes.sectionTitle}>
            Communication Solutions For <br className="hidden sm:inline" />
            Every Customer Journey
          </h2>

          <p className={theme.classes.sectionDescription}>
            Modular telecom infrastructure engineered for high availability
            voice, messaging, and virtual numbers.
          </p>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreServices;
