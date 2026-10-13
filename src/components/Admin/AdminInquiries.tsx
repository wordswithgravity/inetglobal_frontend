import React, { useEffect, useState } from "react";
import {
  MessageSquare,
  Search,
  Trash2,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Building2,
  Mail,
  Phone,
  Tag,
  RefreshCw,
  Clock,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchInquiries,
  updateInquiryStatus,
  deleteInquiry,
  type InquiryItem,
} from "../../store/slices/inquirySlice";

interface AdminInquiriesProps {
  token: string;
}

export const AdminInquiries: React.FC<AdminInquiriesProps> = ({ token }) => {
  const dispatch = useAppDispatch();
  const { inquiries, loading, error } = useAppSelector((state) => state.inquiry);
  const [feedback, setFeedback] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterService, setFilterService] = useState<string>("all");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const loadInquiries = () => {
    if (token) {
      dispatch(fetchInquiries(token));
    }
  };

  useEffect(() => {
    loadInquiries();
  }, [token]);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await dispatch(
        updateInquiryStatus({
          id,
          status: newStatus as InquiryItem["status"],
          token,
        })
      ).unwrap();

      setFeedback("Inquiry status updated successfully.");
      setTimeout(() => setFeedback(null), 3000);
    } catch (err: unknown) {
      alert(typeof err === "string" ? err : "Failed to update status");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteInquiry({ id, token })).unwrap();
      setDeleteConfirmId(null);
      setFeedback("Inquiry deleted successfully.");
      setTimeout(() => setFeedback(null), 3000);
    } catch (err: unknown) {
      alert(typeof err === "string" ? err : "Failed to delete inquiry");
    }
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || inq.status === filterStatus;
    const matchesService =
      filterService === "all" || inq.service === filterService;

    return matchesSearch && matchesStatus && matchesService;
  });

  const statusColors: Record<string, string> = {
    new: "bg-blue-50 text-blue-700 border-blue-200",
    contacted: "bg-purple-50 text-purple-700 border-purple-200",
    "in-progress": "bg-amber-50 text-amber-700 border-amber-200",
    resolved: "bg-emerald-50 text-emerald-700 border-emerald-200",
    closed: "bg-slate-100 text-slate-700 border-slate-300",
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Banner Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#83184d] to-pink-600 flex items-center justify-center text-white shadow-md">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              Customer Inquiries Management
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#83184d]/10 text-[#83184d] font-semibold border border-[#83184d]/20">
                Live Submissions
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              Review and manage customer messages and leads received via the website contact form.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={loadInquiries}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition cursor-pointer"
            title="Refresh Inquiries"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#83184d]" : ""}`}
            />
            Refresh
          </button>
        </div>
      </div>

      {/* Notifications */}
      {feedback && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2.5">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, company, email, phone, or message..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#83184d] transition shadow-xs"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#83184d] transition shadow-xs cursor-pointer"
          >
            <option value="all">All Statuses ({inquiries.length})</option>
            <option value="new">
              New ({inquiries.filter((i) => i.status === "new").length})
            </option>
            <option value="contacted">
              Contacted ({inquiries.filter((i) => i.status === "contacted").length})
            </option>
            <option value="in-progress">
              In Progress ({inquiries.filter((i) => i.status === "in-progress").length})
            </option>
            <option value="resolved">
              Resolved ({inquiries.filter((i) => i.status === "resolved").length})
            </option>
            <option value="closed">
              Closed ({inquiries.filter((i) => i.status === "closed").length})
            </option>
          </select>

          {/* Service Filter */}
          <select
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#83184d] transition shadow-xs cursor-pointer"
          >
            <option value="all">All Services</option>
            <option value="Voice">Voice Services</option>
            <option value="Messaging">Messaging</option>
            <option value="Omnichannel">Omnichannel</option>
          </select>
        </div>
      </div>

      {/* Inquiry Cards List */}
      {loading && inquiries.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-3xl border border-slate-200 space-y-3 shadow-xs">
          <Loader2 className="w-8 h-8 text-[#83184d] animate-spin mx-auto" />
          <p className="text-sm font-semibold text-slate-600">
            Loading inquiries from database...
          </p>
        </div>
      ) : filteredInquiries.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-3xl border border-slate-200 space-y-3 shadow-xs">
          <MessageSquare className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            No inquiries found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {searchTerm || filterStatus !== "all" || filterService !== "all"
              ? "Try adjusting your search query or filter selection."
              : "No customer contact inquiries have been submitted yet."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredInquiries.map((inq) => {
            const isDeleting = deleteConfirmId === inq._id;
            const formattedDate = inq.createdAt
              ? new Date(inq.createdAt).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })
              : "Recent";

            return (
              <div
                key={inq._id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row gap-5 items-start justify-between"
              >
                {/* Inquiry Details */}
                <div className="space-y-3 flex-1 min-w-0">
                  {/* Top Bar: Name, Company, Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {inq.fullName}
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      <Building2 className="w-3 h-3 text-slate-500" />
                      {inq.companyName}
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#83184d]/10 text-[#83184d] border border-[#83184d]/20">
                      <Tag className="w-3 h-3 text-[#83184d]" />
                      {inq.service}
                    </span>

                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        statusColors[inq.status] || statusColors.new
                      }`}
                    >
                      {inq.status}
                    </span>

                    <span className="text-xs text-slate-400 flex items-center gap-1 ml-auto lg:ml-0">
                      <Clock className="w-3.5 h-3.5" />
                      {formattedDate}
                    </span>
                  </div>

                  {/* Contact Info: Email & Phone */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
                    <a
                      href={`mailto:${inq.email}`}
                      className="inline-flex items-center gap-1.5 hover:text-[#83184d] transition text-blue-700"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {inq.email}
                    </a>

                    <a
                      href={`tel:${inq.phonePrefix}${inq.phoneNumber}`}
                      className="inline-flex items-center gap-1.5 hover:text-[#83184d] transition"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {inq.phonePrefix} {inq.phoneNumber}
                    </a>
                  </div>

                  {/* Message content */}
                  {inq.message && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Message / Requirements:
                      </div>
                      <p className="whitespace-pre-wrap">{inq.message}</p>
                    </div>
                  )}
                </div>

                {/* Right Actions: Status Selector & Delete */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end gap-2.5 self-end lg:self-center shrink-0 pt-2 lg:pt-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
                      Status:
                    </span>
                    <select
                      value={inq.status}
                      onChange={(e) => handleStatusChange(inq._id, e.target.value)}
                      className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#83184d] transition cursor-pointer shadow-xs"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="in-progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  {/* Delete button */}
                  {isDeleting ? (
                    <div className="flex items-center gap-1 bg-red-50 p-1 rounded-xl border border-red-200">
                      <span className="text-[11px] text-red-700 px-2 font-medium">
                        Confirm?
                      </span>
                      <button
                        onClick={() => handleDelete(inq._id)}
                        className="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold cursor-pointer transition"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(null)}
                        className="px-2 py-1 rounded-lg text-slate-600 hover:bg-white text-[11px] cursor-pointer transition"
                      >
                        No
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirmId(inq._id)}
                      className="p-2 rounded-xl text-red-500 hover:text-red-700 hover:bg-red-50 transition cursor-pointer"
                      title="Delete inquiry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminInquiries;
