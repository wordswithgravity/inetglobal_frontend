import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import type { AboutUsTranslation } from "../../data/aboutUsTranslations";
import type { RegionContent } from "../../data/regionContent";
import mapImg from "../../assets/map.png";

interface AddressAndMapProps {
  t: AboutUsTranslation;
  regionContent: RegionContent;
}

export const AddressAndMap: React.FC<AddressAndMapProps> = ({
  t,
  regionContent,
}) => {
  const address = regionContent.footer.address;
  const phone = regionContent.footer.phone;
  const email = regionContent.footer.email;

  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.mapBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#102038] tracking-tight leading-tight">
            {t.mapTitle}
          </h2>
          <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.mapSubtitle}
          </p>
        </div>

        {/* 2-Column: Live Map on Left + Registered Address & Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch text-left">
          {/* Left Column: Live Map Card with map.png */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#698a22]/15 text-[#698a22] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[16px] text-[#102038]">
                      {t.mapPinTitle}
                    </h3>
                    <p className="text-[12px] text-slate-500">
                      Victoria · Financial Park Interconnect Hub
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Location
                </span>
              </div>

              {/* Map Image Container */}
              <div className="w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden relative shadow-inner border border-slate-300/80 group">
                <img
                  src={mapImg}
                  alt="iNet Global Headquarters Map"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#102038]/90 backdrop-blur-md text-white p-3.5 rounded-2xl border border-slate-700/80 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#698a22] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-white">
                      Financial Park Labuan
                    </div>
                    <div className="text-[10.5px] text-slate-300">
                      Jalan Merdeka, 87000 Victoria
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Note / Description */}
            <div className="p-4 rounded-2xl bg-[#EEF2EB] border border-slate-200/80 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-[#698a22] shrink-0 mt-0.5" />
              <p className="text-[12.5px] text-slate-600 leading-relaxed">
                {t.mapPinDesc}
              </p>
            </div>
          </div>

          {/* Right Column: Registered Office Address & Contact Info */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-[#698a22] uppercase tracking-wider block mb-1">
                  {t.officeTitle}
                </span>
                <h3 className="text-2xl font-bold text-[#102038]">
                  {t.officeAddressLabel}
                </h3>
              </div>

              {/* Address Details */}
              <div className="space-y-4 text-[14px]">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#EEF2EB] border border-slate-200/80">
                  <div className="w-8 h-8 rounded-xl bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-bold uppercase block">
                      Postal Address
                    </span>
                    <p className="font-semibold text-[#102038] text-[14.5px] leading-snug">
                      {address.line1}
                    </p>
                    {address.line2 && (
                      <p className="text-slate-600 text-[13.5px]">
                        {address.line2}
                      </p>
                    )}
                    {address.line3 && (
                      <p className="text-slate-500 text-[13px]">
                        {address.line3}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#EEF2EB] border border-slate-200/80">
                  <div className="w-8 h-8 rounded-xl bg-[#83184d]/15 text-[#83184d] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-bold uppercase block">
                      {t.officePhoneLabel}
                    </span>
                    <a
                      href={`tel:${phone}`}
                      className="font-bold text-[#102038] hover:text-[#698a22] transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#EEF2EB] border border-slate-200/80">
                  <div className="w-8 h-8 rounded-xl bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-bold uppercase block">
                      {t.officeEmailLabel}
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="font-bold text-[#102038] hover:text-[#698a22] transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                {/* NOC / Support Hours */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#EEF2EB] border border-slate-200/80">
                  <div className="w-8 h-8 rounded-xl bg-[#102038]/10 text-[#102038] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-bold uppercase block">
                      {t.officeSupportLabel}
                    </span>
                    <span className="font-bold text-[#698a22]">
                      {t.officeSupportHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="pt-2">
              <a
                href="/contact"
                className="w-full py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-md shadow-[#83184d]/25 transition active:scale-[0.98]"
              >
                <span>Get in Touch with Our Team</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressAndMap;
