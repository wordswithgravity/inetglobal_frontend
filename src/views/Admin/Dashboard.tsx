"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  Activity,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  MessageSquare,
  KeyRound,
  Share2,
} from "lucide-react";
import logoImg from "../../assets/logo.png";
import BlogPost from "./BlogPost";
import AdminChangePassword from "../../components/Admin/AdminChangePassword";
import { AdminInquiries } from "../../components/Admin/AdminInquiries";
import AdminSubscribersAndSocial from "../../components/Admin/AdminSubscribersAndSocial";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAdminBlogs } from "../../store/slices/blogSlice";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  lastLogin?: string;
}

type SidebarSection =
  | "blog-posts"
  | "overview"
  | "inquiries"
  | "subscribers-social"
  | "change-password";

export const Dashboard: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { adminBlogs } = useAppSelector((state) => state.blog);

  // Authentication & Mounting State
  const [mounted, setMounted] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    setMounted(true);
    const storedToken = localStorage.getItem("inet_admin_token");
    setToken(storedToken);
    try {
      const stored = localStorage.getItem("inet_admin_user");
      setAdminUser(stored ? JSON.parse(stored) : null);
    } catch {
      setAdminUser(null);
    }
  }, []);

  // Active section in sidebar (defaults to "blog-posts")
  const [activeSection, setActiveSection] =
    useState<SidebarSection>("blog-posts");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Logout handler
  const handleLogout = useCallback(() => {
    localStorage.removeItem("inet_admin_token");
    localStorage.removeItem("inet_admin_user");
    setToken(null);
    setAdminUser(null);
    router.replace("/admin");
  }, [router]);

  // Redirect to /admin if not authenticated
  useEffect(() => {
    if (!mounted) return;

    if (!token) {
      router.replace("/admin");
      return;
    }

    // Load admin blogs count for sidebar badge
    dispatch(fetchAdminBlogs(token));

    // Verify token with backend
    fetch("https://api.inetglobalservices.com/api/admin/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          handleLogout();
        }
      })
      .catch(() => {
        // Backend offline or unreachable, retain local session
      });
  }, [mounted, token, handleLogout, dispatch, router]);

  if (!mounted || !token) {
    return (
      <div className="min-h-screen bg-[#EEF2EB] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#83184d] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const publishedCount = adminBlogs.filter(
    (b) => b.status === "published",
  ).length;
  const draftCount = adminBlogs.filter((b) => b.status === "draft").length;

  return (
    <div className="min-h-screen bg-[#EEF2EB] text-slate-800 flex font-sans selection:bg-[#83184d] selection:text-white">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* ================= 1. SIDEBAR ================= */}
      <aside
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200/90 flex flex-col justify-between transition-transform duration-300 ease-in-out shadow-lg lg:shadow-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Top Branding */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3 select-none">
            <img
              src={typeof logoImg === "string" ? logoImg : (logoImg as any)?.src || logoImg}
              alt="iNet Global"
              className="h-9 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                iNet Global
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#83184d]/10 text-[#83184d] border border-[#83184d]/20">
                  Admin
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Console Dashboard
              </span>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 lg:hidden cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Card */}
        {adminUser && (
          <div className="px-5 py-4 border-b border-slate-100 bg-[#EEF2EB]/40 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#83184d] to-pink-600 text-white font-bold text-base flex items-center justify-center shadow-xs">
              {adminUser.name?.charAt(0) || "A"}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-slate-900 truncate flex items-center gap-1.5">
                {adminUser.name}
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              </div>
              <div className="text-[11px] text-slate-500 truncate">
                {adminUser.email}
              </div>
              <span className="inline-block mt-0.5 text-[10px] font-semibold text-emerald-700 uppercase tracking-wider">
                {adminUser.role || "Administrator"}
              </span>
            </div>
          </div>
        )}

        {/* Navigation Menu Options */}
        <div className="flex-1 overflow-y-auto px-3 py-5 space-y-1.5">
          <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Main Management
          </div>

          {/* BLOG POST OPTION IN SIDEBAR */}
          <button
            onClick={() => {
              setActiveSection("blog-posts");
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSection === "blog-posts"
                ? "bg-[#83184d] text-white shadow-md shadow-[#83184d]/20"
                : "text-slate-700 hover:bg-[#EEF2EB]/80 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 shrink-0" />
              <span>Blog Posts</span>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                activeSection === "blog-posts"
                  ? "bg-white/20 text-white"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {adminBlogs.length}
            </span>
          </button>

          {/* DASHBOARD OVERVIEW */}
          <button
            onClick={() => {
              setActiveSection("overview");
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSection === "overview"
                ? "bg-[#83184d] text-white shadow-md shadow-[#83184d]/20"
                : "text-slate-700 hover:bg-[#EEF2EB]/80 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-4 h-4 shrink-0" />
              <span>Overview</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          </button>

          {/* INQUIRIES OPTION */}
          <button
            onClick={() => {
              setActiveSection("inquiries");
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSection === "inquiries"
                ? "bg-[#83184d] text-white shadow-md shadow-[#83184d]/20"
                : "text-slate-700 hover:bg-[#EEF2EB]/80 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Inquiries</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          </button>

          {/* SOCIAL & SUBSCRIBERS OPTION */}
          <button
            onClick={() => {
              setActiveSection("subscribers-social");
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSection === "subscribers-social"
                ? "bg-[#83184d] text-white shadow-md shadow-[#83184d]/20"
                : "text-slate-700 hover:bg-[#EEF2EB]/80 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <Share2 className="w-4 h-4 shrink-0" />
              <span>Social & Newsletter</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          </button>

          {/* CHANGE PASSWORD OPTION */}
          <button
            onClick={() => {
              setActiveSection("change-password");
              setSidebarOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSection === "change-password"
                ? "bg-[#83184d] text-white shadow-md shadow-[#83184d]/20"
                : "text-slate-700 hover:bg-[#EEF2EB]/80 hover:text-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <KeyRound className="w-4 h-4 shrink-0" />
              <span>Change Password</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          </button>
        </div>

        {/* Bottom Sidebar Action: Sign Out */}
        <div className="p-4 border-t border-slate-100 bg-white">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-bold transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ================= 2. MAIN CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Navbar Header */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/90 px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 lg:hidden cursor-pointer"
              title="Toggle sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 capitalize flex items-center gap-2">
                {activeSection === "blog-posts" && (
                  <>
                    <FileText className="w-5 h-5 text-[#83184d]" />
                    Blog Post Intelligence & Management
                  </>
                )}
                {activeSection === "overview" && (
                  <>
                    <LayoutDashboard className="w-5 h-5 text-emerald-600" />
                    Administrative Console Overview
                  </>
                )}
                {activeSection === "inquiries" && (
                  <>
                    <MessageSquare className="w-5 h-5 text-teal-600" />
                    Customer Inquiries & Messages
                  </>
                )}
                {activeSection === "subscribers-social" && (
                  <>
                    <Share2 className="w-5 h-5 text-[#83184d]" />
                    Social Media & Newsletter Subscribers
                  </>
                )}
                {activeSection === "change-password" && (
                  <>
                    <KeyRound className="w-5 h-5 text-[#83184d]" />
                    Security & Password Management
                  </>
                )}
              </h1>
              <p className="text-xs text-slate-500 hidden sm:block">
                Connected securely to iNet Global Production Backend
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setActiveSection("change-password")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                activeSection === "change-password"
                  ? "bg-[#83184d] text-white border-[#83184d]"
                  : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200"
              }`}
              title="Change Password"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Change Password</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-semibold transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </header>

        {/* Main Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1440px] w-full mx-auto">
          {/* SECTION 1: BLOG POSTS (DEFAULT ACTIVE) */}
          {activeSection === "blog-posts" && <BlogPost token={token} />}

          {/* SECTION 2: OVERVIEW */}
          {activeSection === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-xs">
                  <div className="p-3 rounded-xl bg-[#83184d] text-white">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Total Articles
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-0.5">
                      {adminBlogs.length}
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-xs">
                  <div className="p-3 rounded-xl bg-emerald-600 text-white">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Published Live
                    </div>
                    <div className="text-2xl font-bold text-emerald-700 mt-0.5">
                      {publishedCount}
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-xs">
                  <div className="p-3 rounded-xl bg-amber-500 text-white">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Draft Articles
                    </div>
                    <div className="text-2xl font-bold text-amber-700 mt-0.5">
                      {draftCount}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Callout Panel */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 text-slate-700 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#83184d]" />
                      Quick Blog Management Actions
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Manage telecom articles, upload Cloudinary media, and
                      publish to the live site.
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveSection("blog-posts")}
                    className="px-4 py-2 rounded-xl bg-[#83184d] hover:bg-[#6c143f] text-white text-xs font-semibold shadow-xs cursor-pointer transition"
                  >
                    Open Blog Workspace
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div
                    onClick={() => setActiveSection("blog-posts")}
                    className="p-4 rounded-2xl bg-[#EEF2EB]/50 border border-slate-200/90 hover:border-[#83184d] transition cursor-pointer"
                  >
                    <div className="text-sm font-bold text-slate-900">
                      Post New Article
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Create structured articles with tables, graphs, and
                      Cloudinary media.
                    </p>
                  </div>

                  <div
                    onClick={() => setActiveSection("blog-posts")}
                    className="p-4 rounded-2xl bg-[#EEF2EB]/50 border border-slate-200/90 hover:border-[#83184d] transition cursor-pointer"
                  >
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      Manage All Articles
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Inspect and edit existing drafts and published posts.
                    </p>
                  </div>

                  <div
                    onClick={() => setActiveSection("inquiries")}
                    className="p-4 rounded-2xl bg-[#EEF2EB]/50 border border-slate-200/90 hover:border-[#83184d] transition cursor-pointer"
                  >
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      View Customer Requests
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Review inquiry requests submitted through the contact
                      form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: INQUIRIES */}
          {activeSection === "inquiries" && (
            <AdminInquiries token={token || ""} />
          )}

          {/* SECTION 4: SOCIAL & SUBSCRIBERS */}
          {activeSection === "subscribers-social" && (
            <AdminSubscribersAndSocial token={token || ""} />
          )}

          {/* SECTION 5: CHANGE PASSWORD */}
          {activeSection === "change-password" && (
            <AdminChangePassword token={token} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
