import React, { useEffect, useState } from "react";
import {
  Mail,
  Share2,
  Trash2,
  Loader2,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Search,
  ExternalLink,
  Save,
  Users,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchSubscribers,
  updateSubscriberStatus,
  deleteSubscriber,
  fetchSocialLinks,
  updateSocialLinks,
  clearSocialFeedback,
} from "../../store/slices/siteSettingsSlice";

interface AdminSubscribersAndSocialProps {
  token: string;
}

export const AdminSubscribersAndSocial: React.FC<AdminSubscribersAndSocialProps> = ({
  token,
}) => {
  const dispatch = useAppDispatch();
  const {
    subscribers,
    subscribersLoading,
    socialLinks,
    socialUpdating,
    socialError,
    socialSuccessMessage,
  } = useAppSelector((state) => state.siteSettings);

  const [activeTab, setActiveTab] = useState<"social" | "subscribers">("social");

  // Local state for social link form inputs
  const [formData, setFormData] = useState({
    facebook: "",
    twitter: "",
    youtube: "",
    linkedin: "",
    instagram: "",
    github: "",
  });

  const [searchSubscriber, setSearchSubscriber] = useState("");
  const [subscriberFeedback, setSubscriberFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      dispatch(fetchSocialLinks());
      dispatch(fetchSubscribers(token));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (socialLinks) {
      setFormData({
        facebook: socialLinks.facebook || "",
        twitter: socialLinks.twitter || "",
        youtube: socialLinks.youtube || "",
        linkedin: socialLinks.linkedin || "",
        instagram: socialLinks.instagram || "",
        github: socialLinks.github || "",
      });
    }
  }, [socialLinks]);

  const handleSaveSocialLinks = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    await dispatch(updateSocialLinks({ links: formData, token }));
    setTimeout(() => {
      dispatch(clearSocialFeedback());
    }, 4000);
  };

  const handleStatusToggle = async (id: string, currentStatus: "active" | "unsubscribed") => {
    const newStatus = currentStatus === "active" ? "unsubscribed" : "active";
    try {
      await dispatch(updateSubscriberStatus({ id, status: newStatus, token })).unwrap();
      setSubscriberFeedback(`Subscriber marked as ${newStatus}.`);
      setTimeout(() => setSubscriberFeedback(null), 3000);
    } catch (err: any) {
      alert(err || "Failed to update subscriber status");
    }
  };

  const handleDeleteSubscriber = async (id: string) => {
    if (!window.confirm("Are you sure you want to remove this subscriber?")) return;
    try {
      await dispatch(deleteSubscriber({ id, token })).unwrap();
      setSubscriberFeedback("Subscriber deleted.");
      setTimeout(() => setSubscriberFeedback(null), 3000);
    } catch (err: any) {
      alert(err || "Failed to delete subscriber");
    }
  };

  const filteredSubscribers = subscribers.filter((s) =>
    s.email.toLowerCase().includes(searchSubscriber.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("social")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === "social"
                ? "bg-[#83184d] text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Share2 className="w-4 h-4" />
            Social Media Accounts
          </button>
          <button
            onClick={() => setActiveTab("subscribers")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === "subscribers"
                ? "bg-[#83184d] text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Mail className="w-4 h-4" />
            Newsletter Subscribers ({subscribers.length})
          </button>
        </div>

        <div className="flex items-center gap-2">
          {activeTab === "subscribers" && (
            <button
              onClick={() => dispatch(fetchSubscribers(token))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition cursor-pointer"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${subscribersLoading ? "animate-spin text-[#83184d]" : ""}`}
              />
              Refresh
            </button>
          )}
        </div>
      </div>

      {/* TAB 1: SOCIAL MEDIA ACCOUNTS */}
      {activeTab === "social" && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-100 pb-5">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
              <Share2 className="w-5 h-5 text-[#83184d]" />
              Manage Social Media Accounts
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              Enter your official social profile URLs below. Icons will only appear in the website
              footer if a valid URL is provided. If no accounts are configured, the social media row
              remains completely hidden.
            </p>
          </div>

          {socialSuccessMessage && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{socialSuccessMessage}</span>
            </div>
          )}

          {socialError && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{socialError}</span>
            </div>
          )}

          <form onSubmit={handleSaveSocialLinks} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Facebook */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Facebook URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={formData.facebook}
                    onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                    placeholder="https://facebook.com/inetglobal"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#83184d] transition"
                  />
                  {formData.facebook && (
                    <a
                      href={formData.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Twitter / X */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  X (Twitter) URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={formData.twitter}
                    onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                    placeholder="https://x.com/inetglobal"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#83184d] transition"
                  />
                  {formData.twitter && (
                    <a
                      href={formData.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* YouTube */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  YouTube URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={formData.youtube}
                    onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                    placeholder="https://youtube.com/@inetglobal"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#83184d] transition"
                  />
                  {formData.youtube && (
                    <a
                      href={formData.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  LinkedIn URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/company/inetglobal"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#83184d] transition"
                  />
                  {formData.linkedin && (
                    <a
                      href={formData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Instagram */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Instagram URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={formData.instagram}
                    onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                    placeholder="https://instagram.com/inetglobal"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#83184d] transition"
                  />
                  {formData.instagram && (
                    <a
                      href={formData.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* GitHub */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  GitHub URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="https://github.com/inetglobal"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#83184d] transition"
                  />
                  {formData.github && (
                    <a
                      href={formData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={socialUpdating}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#83184d] hover:bg-[#721240] text-white text-xs sm:text-sm font-semibold transition shadow-md shadow-[#83184d]/20 cursor-pointer disabled:opacity-60"
              >
                {socialUpdating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving Links...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Social Media Accounts
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 2: SUBSCRIBERS LIST */}
      {activeTab === "subscribers" && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                <Users className="w-5 h-5 text-[#83184d]" />
                Newsletter Subscriber Audience
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                All visitor emails collected from the website footer subscription bar.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchSubscriber}
                onChange={(e) => setSearchSubscriber(e.target.value)}
                placeholder="Search email..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#83184d] transition"
              />
            </div>
          </div>

          {subscriberFeedback && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{subscriberFeedback}</span>
            </div>
          )}

          {subscribersLoading ? (
            <div className="py-12 flex flex-col items-center justify-center gap-3 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin text-[#83184d]" />
              <p className="text-xs">Loading subscribers...</p>
            </div>
          ) : filteredSubscribers.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              No newsletter subscribers found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-500 uppercase font-semibold text-[11px] tracking-wider bg-slate-50/50">
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Subscribed Date</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredSubscribers.map((sub) => (
                    <tr key={sub._id} className="hover:bg-slate-50/70 transition">
                      <td className="py-3 px-4 font-medium text-slate-900 flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        {sub.email}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-semibold text-[10.5px] ${
                            sub.status === "active"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {sub.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-500 text-[11.5px]">
                        {new Date(sub.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleStatusToggle(sub._id, sub.status)}
                            className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 text-[11px] font-medium transition cursor-pointer"
                          >
                            Mark {sub.status === "active" ? "Unsubscribed" : "Active"}
                          </button>
                          <button
                            onClick={() => handleDeleteSubscriber(sub._id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                            title="Delete subscriber"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminSubscribersAndSocial;
