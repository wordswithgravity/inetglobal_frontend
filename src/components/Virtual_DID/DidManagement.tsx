import React, { useState, useMemo } from "react";
import {
  Check,
  Search,
  ChevronDown,
  Plus,
  Sliders,
  X,
  Copy,
  CheckCircle2,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import type { VirtualDidTranslation } from "../../data/virtualDidTranslations";

interface DidManagementProps {
  t: VirtualDidTranslation;
}

interface DidItem {
  id: string;
  did: string;
  country: string;
  customer: string;
  status: "Active" | "Available";
}

const initialInventory: DidItem[] = [
  {
    id: "1",
    did: "+1 212 555 0198",
    country: "New York, US",
    customer: "Acme Support",
    status: "Active",
  },
  {
    id: "2",
    did: "+44 20 7946 0912",
    country: "London, UK",
    customer: "Northstar Ltd",
    status: "Active",
  },
  {
    id: "3",
    did: "+65 6812 4500",
    country: "Singapore, SG",
    customer: "Available",
    status: "Available",
  },
  {
    id: "4",
    did: "+49 30 5557 0240",
    country: "Berlin, DE",
    customer: "Orbit Services",
    status: "Active",
  },
  {
    id: "5",
    did: "+1 415 555 0184",
    country: "San Francisco, US",
    customer: "Apex Cloud",
    status: "Active",
  },
  {
    id: "6",
    did: "+33 1 70 38 29 10",
    country: "Paris, FR",
    customer: "Available",
    status: "Available",
  },
  {
    id: "7",
    did: "+81 3 5555 0142",
    country: "Tokyo, JP",
    customer: "Nexus Global",
    status: "Active",
  },
  {
    id: "8",
    did: "+61 2 9876 5432",
    country: "Sydney, AU",
    customer: "Pacific Retail",
    status: "Active",
  },
  {
    id: "9",
    did: "+44 161 496 0192",
    country: "Manchester, UK",
    customer: "Available",
    status: "Available",
  },
  {
    id: "10",
    did: "+1 312 555 0119",
    country: "Chicago, US",
    customer: "Vanguard Logistics",
    status: "Active",
  },
  {
    id: "11",
    did: "+49 89 2018 3920",
    country: "Munich, DE",
    customer: "FinTech Partners",
    status: "Active",
  },
  {
    id: "12",
    did: "+65 6932 7810",
    country: "Singapore, SG",
    customer: "Available",
    status: "Available",
  },
];

export const DidManagement: React.FC<DidManagementProps> = ({ t }) => {
  const [inventory, setInventory] = useState<DidItem[]>(initialInventory);
  const [searchQuery, setSearchQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Provisioning Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCountry, setNewCountry] = useState("United States");
  const [newCity, setNewCity] = useState("Los Angeles, US");
  const [newCustomer, setNewCustomer] = useState("");
  const [newNumber, setNewNumber] = useState("+1 213 555 0199");
  const [newStatus, setNewStatus] = useState<"Active" | "Available">("Active");
  const [successToast, setSuccessToast] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter Logic
  const filteredData = useMemo(() => {
    return inventory.filter((row) => {
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        !query ||
        row.did.toLowerCase().includes(query) ||
        row.country.toLowerCase().includes(query) ||
        row.customer.toLowerCase().includes(query);

      let matchCountry = true;
      if (countryFilter !== "all") {
        matchCountry = row.country
          .toLowerCase()
          .includes(countryFilter.toLowerCase());
      }

      let matchStatus = true;
      if (statusFilter !== "all") {
        matchStatus = row.status.toLowerCase() === statusFilter.toLowerCase();
      }

      return matchSearch && matchCountry && matchStatus;
    });
  }, [inventory, searchQuery, countryFilter, statusFilter]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const activePage = Math.min(currentPage, totalPages);

  const paginatedData = useMemo(() => {
    const startIndex = (activePage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, activePage]);

  // Handle Provisioning Submit
  const handleProvisionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const createdItem: DidItem = {
      id: Date.now().toString(),
      did:
        newNumber.trim() ||
        "+1 213 555 " + Math.floor(1000 + Math.random() * 9000),
      country: newCity.trim() || `${newCountry}, Intl`,
      customer: newCustomer.trim() || "Available",
      status: newCustomer.trim() ? newStatus : "Available",
    };

    setInventory([createdItem, ...inventory]);
    setIsModalOpen(false);
    setCurrentPage(1);
    setNewCustomer("");
    setSuccessToast(`DID ${createdItem.did} successfully provisioned!`);
    setTimeout(() => {
      setSuccessToast(null);
    }, 4000);
  };

  // Toggle Status
  const handleToggleStatus = (id: string) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Active" ? "Available" : "Active",
              customer:
                item.status === "Active"
                  ? "Available"
                  : item.customer === "Available"
                    ? "Acme Support"
                    : item.customer,
            }
          : item,
      ),
    );
  };

  // Copy DID
  const handleCopy = (did: string, id: string) => {
    navigator.clipboard.writeText(did);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70 relative">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-24 right-6 z-50 bg-[#102038] text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-top duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#698a22]" />
          <span className="text-[13.5px] font-medium">{successToast}</span>
          <button
            onClick={() => setSuccessToast(null)}
            className="text-slate-400 hover:text-white ml-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

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
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm text-left">
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

          {/* Right Column: Number Inventory Dashboard Card */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-lg p-5 sm:p-7 text-left">
            {/* Header with Title and Provision Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-[#102038]">
                  {t.inventoryCard.title}
                </h3>
                <p className="text-[13px] text-slate-500 mt-0.5">
                  {inventory.length} numbers across your customer accounts
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#83184d] hover:bg-[#721240] text-white text-[13px] font-semibold transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-95 self-start sm:self-auto cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{t.inventoryCard.provisionBtn}</span>
              </button>
            </div>

            {/* Filter Controls Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
              {/* Search Bar with Clear Icon */}
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder={t.inventoryCard.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-8 py-2 text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#698a22] focus:bg-white transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setCurrentPage(1);
                    }}
                    className="absolute right-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Country Selector */}
              <div className="relative">
                <select
                  value={countryFilter}
                  onChange={(e) => {
                    setCountryFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[13px] text-slate-700 appearance-none focus:outline-none focus:border-[#698a22] cursor-pointer"
                >
                  <option value="all">All countries</option>
                  <option value="us">United States (US)</option>
                  <option value="uk">United Kingdom (UK)</option>
                  <option value="sg">Singapore (SG)</option>
                  <option value="de">Germany (DE)</option>
                  <option value="fr">France (FR)</option>
                  <option value="jp">Japan (JP)</option>
                  <option value="au">Australia (AU)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Status Selector */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[13px] text-slate-700 appearance-none focus:outline-none focus:border-[#698a22] cursor-pointer"
                >
                  <option value="all">All statuses</option>
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
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">{t.inventoryCard.colDid}</th>
                    <th className="py-3 px-4">{t.inventoryCard.colCountry}</th>
                    <th className="py-3 px-4">{t.inventoryCard.colCustomer}</th>
                    <th className="py-3 px-4 text-right">
                      {t.inventoryCard.colStatus}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedData.length > 0 ? (
                    paginatedData.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-[#f9fbf7] transition-colors group"
                      >
                        <td className="py-3.5 px-4 font-mono font-medium text-[#102038]">
                          <div className="flex items-center gap-2">
                            <span>{row.did}</span>
                            <button
                              type="button"
                              onClick={() => handleCopy(row.did, row.id)}
                              title="Copy DID"
                              className="text-slate-300 hover:text-[#698a22] opacity-0 group-hover:opacity-100 transition cursor-pointer"
                            >
                              {copiedId === row.id ? (
                                <span className="text-[10px] text-emerald-600 font-sans font-bold">
                                  Copied!
                                </span>
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          {row.country}
                        </td>
                        <td className="py-3.5 px-4 text-slate-800 font-medium">
                          {row.customer}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            type="button"
                            onClick={() => handleToggleStatus(row.id)}
                            title="Click to toggle status"
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold transition cursor-pointer hover:opacity-80 active:scale-95 ${
                              row.status === "Active"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                                : "bg-lime-50 text-lime-800 border border-lime-200/60"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                row.status === "Active"
                                  ? "bg-emerald-500"
                                  : "bg-lime-600"
                              }`}
                            />
                            {row.status}
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="py-8 text-center text-slate-400 text-sm"
                      >
                        No virtual numbers found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer with Working Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-[12px] text-slate-500">
              <div>
                Showing{" "}
                {paginatedData.length > 0
                  ? (activePage - 1) * itemsPerPage + 1
                  : 0}
                –{Math.min(activePage * itemsPerPage, filteredData.length)} of{" "}
                {filteredData.length} numbers
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-1.5 font-medium">
                <button
                  type="button"
                  disabled={activePage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className={`px-2 py-1 rounded transition cursor-pointer ${
                    activePage <= 1
                      ? "text-slate-300 cursor-not-allowed"
                      : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  &lt;
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setCurrentPage(num)}
                      className={`px-2.5 py-1 rounded transition cursor-pointer ${
                        activePage === num
                          ? "bg-[#698a22] text-white font-bold shadow-xs"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      {num}
                    </button>
                  ),
                )}

                <button
                  type="button"
                  disabled={activePage >= totalPages}
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  className={`px-2 py-1 rounded transition cursor-pointer ${
                    activePage >= totalPages
                      ? "text-slate-300 cursor-not-allowed"
                      : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Provision DID Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-7 border border-slate-200 text-left relative space-y-5 animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#83184d]/10 text-[#83184d] flex items-center justify-center font-bold">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-[#102038] text-[17px]">
                    Provision Virtual DID
                  </h3>
                  <p className="text-[12px] text-slate-400">
                    Instantly assign a new virtual number
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleProvisionSubmit} className="space-y-4">
              {/* Country Selection */}
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1">
                  Country
                </label>
                <select
                  value={newCountry}
                  onChange={(e) => {
                    setNewCountry(e.target.value);
                    if (e.target.value === "United States") {
                      setNewCity("Los Angeles, US");
                      setNewNumber("+1 213 555 0199");
                    } else if (e.target.value === "United Kingdom") {
                      setNewCity("Birmingham, UK");
                      setNewNumber("+44 121 496 0199");
                    } else if (e.target.value === "Singapore") {
                      setNewCity("Singapore, SG");
                      setNewNumber("+65 6789 1234");
                    } else {
                      setNewCity("Frankfurt, DE");
                      setNewNumber("+49 69 5557 0199");
                    }
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[13px] text-slate-800 focus:outline-none focus:border-[#698a22]"
                >
                  <option value="United States">United States (+1)</option>
                  <option value="United Kingdom">United Kingdom (+44)</option>
                  <option value="Singapore">Singapore (+65)</option>
                  <option value="Germany">Germany (+49)</option>
                </select>
              </div>

              {/* City / Region */}
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  required
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[13px] text-slate-800 focus:outline-none focus:border-[#698a22]"
                />
              </div>

              {/* DID Number */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[12px] font-bold text-slate-700">
                    DID Phone Number
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const prefix = newNumber.slice(0, 5);
                      setNewNumber(
                        `${prefix} 555 ${Math.floor(1000 + Math.random() * 9000)}`,
                      );
                    }}
                    className="text-[11px] text-[#698a22] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" />
                    Generate random
                  </button>
                </div>
                <input
                  type="text"
                  required
                  value={newNumber}
                  onChange={(e) => setNewNumber(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[13px] font-mono text-slate-800 focus:outline-none focus:border-[#698a22]"
                />
              </div>

              {/* Customer Account */}
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1">
                  Assign Customer (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Support (leave empty for Available)"
                  value={newCustomer}
                  onChange={(e) => setNewCustomer(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#698a22]"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1">
                  Status
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setNewStatus("Active")}
                    className={`py-2 px-3 rounded-xl text-[12px] font-bold border transition cursor-pointer ${
                      newStatus === "Active"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                        : "bg-slate-50 text-slate-600 border-slate-200"
                    }`}
                  >
                    Active
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewStatus("Available")}
                    className={`py-2 px-3 rounded-xl text-[12px] font-bold border transition cursor-pointer ${
                      newStatus === "Available"
                        ? "bg-lime-50 text-lime-800 border-lime-300"
                        : "bg-slate-50 text-slate-600 border-slate-200"
                    }`}
                  >
                    Available
                  </button>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-[13px] font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#83184d] hover:bg-[#721240] text-white text-[13px] font-semibold transition shadow-md shadow-[#83184d]/25 cursor-pointer"
                >
                  Provision Number
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default DidManagement;
