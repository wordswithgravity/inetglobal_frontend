import React from "react";
import { CheckCircle2, RadioTower } from "lucide-react";
import mapImg from "../../assets/map.jpg";
import type { WholesaleMessageTranslation } from "../../data/wholesaleMessageTranslations";

const defaults = {
  networkBadge: "Reliability at global scale",
  networkTitle: "A Network Designed To Keep Messages Moving",
  networkDesc:
    "Bring your A2P traffic closer to the mobile networks that serve your customers. Combine carrier connectivity with routing policies tailored to each market.",
  networkBullets: [
    "Direct carrier relationships and managed partner routes",
    "Destination-aware routing and alternative route options",
    "Sender ID and registration guidance by market",
    "Route monitoring and operational escalation",
  ],
  networkStats: [
    { val: "Carrier-led", label: "Connectivity strategy" },
    { val: "Market-aware", label: "Routing & sender policies" },
  ],
  networkFooterNote:
    "Coverage and sender options vary by destination. Ask our team about the markets you need.",
  networkBadgeOverlay: {
    title: "Connected through carrier relationships",
    sub: "Direct routes. Managed interconnects.",
  },
};

interface GlobalNetworkProps {
  t?: Partial<WholesaleMessageTranslation>;
}

export const GlobalNetwork: React.FC<GlobalNetworkProps> = ({ t }) => {
  const badge = t?.networkBadge ?? defaults.networkBadge;
  const title = t?.networkTitle ?? defaults.networkTitle;
  const desc = t?.networkDesc ?? defaults.networkDesc;
  const bullets = t?.networkBullets ?? defaults.networkBullets;
  const stats = t?.networkStats ?? defaults.networkStats;
  const note = t?.networkFooterNote ?? defaults.networkFooterNote;
  const overlay = t?.networkBadgeOverlay ?? defaults.networkBadgeOverlay;

  return (
    <section className="w-full bg-[#10233f] text-white py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ===== Left: Map card ===== */}
        <div className="lg:col-span-6 relative w-full max-w-[640px] lg:max-w-[700px] mx-auto lg:mx-0 mb-12 lg:mb-0">
          <div className="relative w-full aspect-[460/354] rounded-[32px] bg-[#0d1427] overflow-hidden shadow-2xl border border-[#1b345c]">
            <img
              src={mapImg}
              alt="Global SMS network map"
              draggable={false}
              className="absolute inset-0 w-full h-full object-contain object-[center_45%] select-none transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating info card (overlaps bottom edge) */}
          <div className="absolute left-[6%] right-[6%] sm:left-[8%] sm:right-[8%] -bottom-[28px] h-[80px] sm:h-[84px] bg-white rounded-[18px] shadow-[0_12px_36px_rgba(0,0,0,0.3)] flex items-center gap-4 px-5 sm:px-6 border border-gray-100">
            <span className="w-[42px] h-[42px] shrink-0 rounded-full bg-[#eef6dc] flex items-center justify-center shadow-xs">
              <RadioTower
                className="w-5 h-5 text-[#5f8a1a]"
                strokeWidth={2}
              />
            </span>
            <div className="min-w-0 text-left">
              <p className="text-[14.5px] sm:text-[15.5px] font-bold text-[#12223b] leading-tight truncate">
                {overlay.title}
              </p>
              <p className="text-[12px] sm:text-[12.5px] text-[#6b7280] leading-snug pt-0.5">
                {overlay.sub}
              </p>
            </div>
          </div>
        </div>

        {/* ===== Right: Content ===== */}
        <div className="lg:col-span-6 text-left space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#5f8a1a]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#6b9a1f] uppercase">
              {badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-white tracking-tight leading-[1.15] max-w-xl">
            {title}
          </h2>

          <p className="text-[15px] sm:text-[16.5px] text-[#b3bfd0] leading-relaxed max-w-xl">
            {desc}
          </p>

          {/* Bullets */}
          <ul className="space-y-3.5 pt-1">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-[13.5px] sm:text-[14.5px] text-[#c3cdda] leading-snug"
              >
                <CheckCircle2
                  className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 text-[#7aa32a]"
                  strokeWidth={2}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Stat boxes */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {stats.map((st, i) => (
              <div
                key={i}
                className="h-[76px] sm:h-[84px] rounded-[14px] bg-[#15335a] hover:bg-[#183a66] border border-[#234778] px-5 flex flex-col justify-center transition"
              >
                <div className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {st.val}
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#8fa0b8] font-medium pt-1">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="pt-1 text-[12px] sm:text-[13px] text-[#8b9bb0] leading-relaxed">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
