import React, { useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Check,
  Send,
  PhoneCall,
  MessageCircle,
  Sparkles,
  Mail,
} from "lucide-react";
import type { OmnichannelTranslation } from "../../data/omnichannelTranslations";

interface WhyOurServiceProps {
  t: OmnichannelTranslation;
}

export const WhyOurService: React.FC<WhyOurServiceProps> = ({ t }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getChannelHref = (id: string) => {
    switch (id) {
      case "whatsapp":
        return "/whatsapp";
      case "voice-calls":
        return "/voice";
      case "rcs":
        return "/rcs";
      default:
        return "/contact";
    }
  };

  return (
    <section
      id="omnichannel-services"
      className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1440px] mx-auto space-y-10 sm:space-y-14">
        {/* Section Heading with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left max-w-3xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.whyServiceBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.whyServiceTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed max-w-2xl">
              {t.whyServiceSubtitle}
            </p>
          </div>

          {/* Carousel Arrow Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scrollCarousel("left")}
              aria-label="Previous channels"
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition cursor-pointer active:scale-95 shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              aria-label="Next channels"
              className="w-10 h-10 rounded-full bg-[#83184d] hover:bg-[#721240] text-white flex items-center justify-center transition cursor-pointer active:scale-95 shadow-xs shadow-[#83184d]/25"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-1 items-stretch"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {t.channels.map((channel, idx) => {
            // Custom channel icon render
            const renderChannelIcon = () => {
              if (channel.id === "whatsapp") {
                return (
                  <div className="w-14 h-14 rounded-full bg-[#698a22] flex items-center justify-center text-white shadow-md">
                    <MessageSquare className="w-7 h-7" />
                  </div>
                );
              }
              if (channel.id === "voice-calls") {
                return (
                  <div className="w-14 h-14 rounded-full bg-[#edf4e8] flex items-center justify-center text-[#698a22]">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                );
              }
              if (channel.id === "telegram") {
                return (
                  <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center text-[#83184d]">
                    <Send className="w-6 h-6 -translate-x-0.5" />
                  </div>
                );
              }
              if (channel.id === "instagram") {
                return (
                  <div className="w-14 h-14 rounded-full bg-[#edf4e8] flex items-center justify-center text-[#698a22]">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                );
              }
              if (channel.id === "facebook") {
                return (
                  <div className="w-14 h-14 rounded-full bg-[#e8f0fe] flex items-center justify-center text-[#1877F2]">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                );
              }
              if (channel.id === "tiktok") {
                return (
                  <div className="w-14 h-14 rounded-full bg-[#0f172a] flex items-center justify-center text-white">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                );
              }
              if (channel.id === "live-chat") {
                return (
                  <div className="w-14 h-14 rounded-full bg-[#edf4e8] flex items-center justify-center text-[#698a22]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                );
              }
              if (channel.id === "rcs") {
                return (
                  <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center text-[#83184d]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                );
              }
              if (channel.id === "email") {
                return (
                  <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center text-[#83184d]">
                    <Mail className="w-6 h-6" />
                  </div>
                );
              }
              return (
                <div className="w-14 h-14 rounded-full bg-[#fce7f3] flex items-center justify-center text-[#83184d]">
                  <MessageSquare className="w-6 h-6" />
                </div>
              );
            };

            const isFirst = idx === 0;

            return (
              <div
                key={channel.id}
                style={{ scrollSnapAlign: "start" }}
                className={`min-w-[300px] sm:min-w-[340px] md:min-w-[380px] lg:flex-1 bg-white rounded-[28px] p-7 sm:p-8 border ${
                  isFirst
                    ? "border-[#698a22] shadow-md ring-1 ring-[#698a22]/20"
                    : "border-gray-200 shadow-xs"
                } hover:border-[#698a22] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group`}
              >
                <div className="space-y-5">
                  {renderChannelIcon()}

                  <div className="space-y-2.5 text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#102038]">
                      {channel.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed">
                      {channel.description}
                    </p>
                  </div>

                  {/* Bullet Checkpoints */}
                  <div className="space-y-2 pt-2 text-left">
                    {[channel.bullet1, channel.bullet2, channel.bullet3].map(
                      (bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-slate-700"
                        >
                          <Check className="w-4 h-4 text-[#698a22] shrink-0 stroke-[2.5]" />
                          <span>{bullet}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="pt-6 sm:pt-8 text-left">
                  <a
                    href={getChannelHref(channel.id)}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#83184d] group-hover:text-[#721240] transition"
                  >
                    {channel.learnMore}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyOurService;
