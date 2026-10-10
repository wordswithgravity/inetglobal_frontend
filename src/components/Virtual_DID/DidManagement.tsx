import React, { useState } from "react";
import { Check, Search, ChevronDown, Plus, Sliders } from "lucide-react";
import type { VirtualDidTranslation } from "../../data/virtualDidTranslations";

interface DidManagementProps {
  t: VirtualDidTranslation;
}

export const DidManagement: React.FC<DidManagementProps> = ({ t }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const inventoryData = [
    {
      did: "+1 212 555 0198",
      country: "New York, US",
      customer: "Acme Support",
      status: "Active",
    },
    {
      did: "+44 20 7946 0912",
      country: "London, UK",
      customer: "Northstar Ltd",
      status: "Active",
    },
    {
      did: "+65 6812 4500",
      country: "Singapore, SG",
      customer: "Available",
      status: "Available",
    },
    {
      did: "+49 30 5557 0240",
      country: "Berlin, DE",
      customer: "Orbit Services",
      status: "Active",
    },
  ];

  const filteredData = inventoryData.filter((row) => {
    const matchSearch =
      row.did.includes(searchQuery) ||
      row.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus =
      statusFilter === "all" ||
      row.status.toLowerCase() === statusFilter.toLowerCase();
    return matchSearch && matchStatus;
  });

  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.managementBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.managementTitle}
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.managementSubtitle}
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: 10 Checklist Items */}
          <div className="lg:col-span-4 bg-[#EEF2EB] rounded-2xl p-6 sm:p-7 border border-slate-200/80 text-left">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#698a22]/15 flex items-center justify-center text-[#698a22]">
                <Sliders className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-[#102038]">
                {t.managementChecklistTitle}
              </h3>
            </div>

            <ul className="space-y-3.5">
              {t.managementChecklist.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] text-slate-700 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Number Inventory Dashboard Mockup */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-7 text-left">
            {/* Header with Title and Action Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-[#102038]">
                  {t.inventoryCard.title}
                </h3>
                <p className="text-[13px] text-slate-500 mt-0.5">
                  {t.inventoryCard.subtitle}
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#83184d] hover:bg-[#721240] text-white text-[13px] font-semibold transition shadow-xs active:scale-95 self-start sm:self-auto cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{t.inventoryCard.provisionBtn}</span>
              </button>
            </div>

            {/* Filter Controls Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder={t.inventoryCard.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#698a22] focus:bg-white transition"
                />
              </div>

              <div className="relative">
                <select
                  value={countryFilter}
                  onChange={(e) => setCountryFilter(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-[13px] text-slate-700 appearance-none focus:outline-none focus:border-[#698a22] cursor-pointer"
                >
                  <option value="all">{t.inventoryCard.countryFilter}</option>
                  <option value="us">United States (US)</option>
                  <option value="uk">United Kingdom (UK)</option>
                  <option value="sg">Singapore (SG)</option>
                  <option value="de">Germany (DE)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-[13px] text-slate-700 appearance-none focus:outline-none focus:border-[#698a22] cursor-pointer"
                >
                  <option value="all">{t.inventoryCard.statusFilter}</option>
                  <option value="active">Active</option>
                  <option value="available">Available</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-slate-200/80 rounded-xl">
              <table className="w-full text-left border-collapse text-[13px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">{t.inventoryCard.colDid}</th>
                    <th className="py-3 px-4">{t.inventoryCard.colCountry}</th>
                    <th className="py-3 px-4">{t.inventoryCard.colCustomer}</th>
                    <th className="py-3 px-4 text-right">
                      {t.inventoryCard.colStatus}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#f9fbf7] transition-colors"
                    >
                      <td className="py-3.5 px-4 font-mono font-medium text-[#102038]">
                        {row.did}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {row.country}
                      </td>
                      <td className="py-3.5 px-4 text-slate-800 font-medium">
                        {row.customer}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold ${
                            row.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                              : "bg-lime-50 text-lime-800 border border-lime-200/60"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer / Pagination */}
            <div className="flex items-center justify-between pt-4 text-[12px] text-slate-500">
              <div>{t.inventoryCard.showingText}</div>
              <div className="flex items-center gap-1.5 font-medium">
                <button
                  type="button"
                  className="px-2 py-1 rounded hover:bg-slate-100 cursor-pointer"
                >
                  &lt;
                </button>
                <button
                  type="button"
                  className="px-2.5 py-1 rounded bg-[#698a22] text-white font-bold cursor-pointer"
                >
                  1
                </button>
                <button
                  type="button"
                  className="px-2 py-1 rounded hover:bg-slate-100 cursor-pointer"
                >
                  2
                </button>
                <button
                  type="button"
                  className="px-2 py-1 rounded hover:bg-slate-100 cursor-pointer"
                >
                  3
                </button>
                <button
                  type="button"
                  className="px-2 py-1 rounded hover:bg-slate-100 cursor-pointer"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DidManagement;
