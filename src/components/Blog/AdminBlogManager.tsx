"use client";

import React, { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  Loader2,
  AlertCircle,
  CheckCircle2,
  FileText,
  Calendar,
  Sparkles,
  BarChart2,
  RefreshCw,
  Clock,
  Timer,
  CalendarDays,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchAdminBlogs,
  deleteAdminBlog,
  type BlogItem,
} from "../../store/slices/blogSlice";
import AdminBlogEditor from "./AdminBlogEditor";

interface AdminBlogManagerProps {
  token: string;
}

// Helper countdown component for scheduled posts
const ScheduledCountdown: React.FC<{ scheduledAt: string; onDue?: () => void }> = ({
  scheduledAt,
  onDue,
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isDue: boolean;
  }>(() => calculateTimeLeft(scheduledAt));

  function calculateTimeLeft(targetIso: string) {
    const diff = new Date(targetIso).getTime() - Date.now();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isDue: true };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, isDue: false };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = calculateTimeLeft(scheduledAt);
      setTimeLeft(updated);
      if (updated.isDue && onDue) {
        clearInterval(interval);
        onDue();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [scheduledAt, onDue]);

  if (timeLeft.isDue) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 animate-pulse">
        <Clock className="w-3.5 h-3.5 text-emerald-600" />
        Due now • Auto-publishing...
      </span>
    );
  }

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold shadow-xs">
      <Timer className="w-3.5 h-3.5 text-blue-600 animate-spin" />
      <span className="font-bold text-blue-700">Auto-posts in:</span>
      <span className="font-mono text-blue-950 font-bold">
        {timeLeft.days > 0 && `${timeLeft.days}d `}
        {String(timeLeft.hours).padStart(2, "0")}h:
        {String(timeLeft.minutes).padStart(2, "0")}m:
        {String(timeLeft.seconds).padStart(2, "0")}s
      </span>
    </div>
  );
};

export const AdminBlogManager: React.FC<AdminBlogManagerProps> = ({ token }) => {
  const dispatch = useAppDispatch();
  const { adminBlogs, adminLoading, error, successMessage } = useAppSelector(
    (state) => state.blog
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft" | "scheduled">("all");
  const [editingBlog, setEditingBlog] = useState<BlogItem | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [localFeedback, setLocalFeedback] = useState<string | null>(null);

  // Load blogs on mount
  useEffect(() => {
    if (token) {
      dispatch(fetchAdminBlogs(token));
    }
  }, [dispatch, token]);

  const handleRefresh = () => {
    if (token) {
      dispatch(fetchAdminBlogs(token));
    }
  };

  const handleOpenCreate = () => {
    setEditingBlog(null);
    setIsEditorOpen(true);
  };

  const handleOpenEdit = (blog: BlogItem) => {
    setEditingBlog(blog);
    setIsEditorOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteAdminBlog({ id, token })).unwrap();
      setDeleteConfirmId(null);
      setLocalFeedback("Article successfully deleted.");
      setTimeout(() => setLocalFeedback(null), 3500);
    } catch (err: unknown) {
      alert(typeof err === "string" ? err : "Failed to delete article");
    }
  };

  const filteredBlogs = adminBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || blog.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // If the editor is open, render it as a full screen instead of a modal
  if (isEditorOpen) {
    return (
      <AdminBlogEditor
        initialBlog={editingBlog}
        token={token}
        onClose={() => setIsEditorOpen(false)}
        onSuccess={(saved) => {
          setIsEditorOpen(false);
          setLocalFeedback(
            saved.status === "scheduled"
              ? `Article "${saved.title}" scheduled for auto-posting.`
              : saved.status === "draft"
              ? `Article "${saved.title}" saved as draft.`
              : `Article "${saved.title}" successfully published.`
          );
          handleRefresh();
          setTimeout(() => setLocalFeedback(null), 4000);
        }}
      />
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Top Banner & Control Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#83184d] to-pink-600 flex items-center justify-center text-white shadow-md">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              Blog & Article Management
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#83184d]/10 text-[#83184d] font-semibold border border-[#83184d]/20">
                CRUD Active
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              Create, edit, preview, and publish telecom intelligence articles with Cloudinary media.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-start md:self-auto">
          <button
            onClick={handleRefresh}
            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition cursor-pointer"
            title="Refresh articles"
          >
            <RefreshCw
              className={`w-4 h-4 ${adminLoading ? "animate-spin text-[#83184d]" : ""}`}
            />
          </button>

          <button
            onClick={handleOpenCreate}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#83184d] hover:bg-[#6c143f] text-white text-xs sm:text-sm font-semibold shadow-md transition cursor-pointer active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Create New Article
          </button>
        </div>
      </div>

      {/* Notifications */}
      {(successMessage || localFeedback) && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{localFeedback || successMessage}</span>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2.5">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title, category, or slug..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {(["all", "published", "scheduled", "draft"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold capitalize transition cursor-pointer ${
                filterStatus === status
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {status} ({status === "all" ? adminBlogs.length : adminBlogs.filter((b) => b.status === status).length})
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards / Table */}
      {adminLoading && adminBlogs.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
          <Loader2 className="w-8 h-8 text-[#83184d] animate-spin mx-auto" />
          <p className="text-sm font-semibold text-slate-600">
            Loading articles from database...
          </p>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
          <FileText className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            No articles found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {searchTerm
              ? "Try adjusting your search or status filter."
              : "No blogs currently exist. Click 'Create New Article' to create your first post."}
          </p>
          <button
            onClick={handleOpenCreate}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#83184d] text-white text-xs font-semibold cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Create First Article
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredBlogs.map((blog) => {
            const blogId = (blog._id || blog.id) as string;
            const isDeleting = deleteConfirmId === blogId;

            return (
              <div
                key={blogId}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row gap-5 items-start md:items-center justify-between"
              >
                {/* Left: Thumbnail & Details */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-24 h-20 sm:w-28 sm:h-22 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#83184d]/10 text-[#83184d] border border-[#83184d]/20">
                        {blog.category}
                      </span>

                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          blog.status === "published"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : blog.status === "scheduled"
                            ? "bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {blog.status === "scheduled" && (
                          <CalendarDays className="w-2.5 h-2.5 text-blue-600" />
                        )}
                        {blog.status}
                      </span>

                      {/* Live Auto-Posting Countdown Timer (Shown on Admin side for scheduled blogs) */}
                      {blog.status === "scheduled" && blog.scheduledAt && (
                        <ScheduledCountdown
                          scheduledAt={blog.scheduledAt}
                          onDue={handleRefresh}
                        />
                      )}

                      {blog.featured && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          Featured
                        </span>
                      )}

                      <span className="text-xs text-slate-400">
                        • {blog.readTime || "5 min"}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug truncate">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-1">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {blog.date || "Recent"}
                      </span>
                      <span>By {blog.author}</span>
                      <span className="flex items-center gap-1">
                        <BarChart2 className="w-3 h-3" />
                        {blog.views || 0} views
                      </span>
                      <span>{blog.sections?.length || 0} sections</span>
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  {/* Edit / Preview */}
                  <button
                    onClick={() => handleOpenEdit(blog)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#83184d]/10 hover:bg-[#83184d] text-[#83184d] hover:text-white border border-[#83184d]/20 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    Edit & Preview
                  </button>

                  {/* Delete */}
                  {isDeleting ? (
                    <div className="flex items-center gap-1.5 bg-red-50 p-1 rounded-xl border border-red-200">
                      <span className="text-[11px] text-red-700 px-2 font-medium">
                        Confirm?
                      </span>
                      <button
                        onClick={() => handleDelete(blogId)}
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
                      onClick={() => setDeleteConfirmId(blogId)}
                      className="p-2 rounded-xl text-red-500 hover:text-red-700 hover:bg-red-50 transition cursor-pointer"
                      title="Delete article"
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

export default AdminBlogManager;
