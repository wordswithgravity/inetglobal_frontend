import React, { useState, useEffect } from "react";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  Shield,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Server,
  KeyRound,
  LogOut,
  LayoutDashboard,
  Activity,
  BookOpen,
  FileText,
} from "lucide-react";
import logoImg from "../../assets/logo.png";
import AdminBlogManager from "../../components/Blog/AdminBlogManager";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  lastLogin?: string;
}

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"blogs" | "overview">("blogs");

  // Check if admin is already logged in
  const [adminUser, setAdminUser] = useState<AdminUser | null>(() => {
    try {
      const stored = localStorage.getItem("inet_admin_user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("inet_admin_token");
  });

  const handleLogout = React.useCallback(() => {
    localStorage.removeItem("inet_admin_token");
    localStorage.removeItem("inet_admin_user");
    setToken(null);
    setAdminUser(null);
    setEmail("");
    setPassword("");
    setSuccessMsg(null);
    setErrorMsg(null);
  }, []);

  // If already logged in, redirect to dashboard
  useEffect(() => {
    if (token) {
      window.history.pushState(null, "", "/dashboard");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  }, [token]);

  // Verify token on mount if stored
  useEffect(() => {
    if (token) {
      fetch("http://localhost:5000/api/admin/me", {
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
          // If server offline or check fails, retain local state or handle gracefully
        });
    }
  }, [token, handleLogout]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!email.trim() || !password.trim()) {
      setErrorMsg("Please enter both email address and password.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Authentication failed");
      }

      // Save credentials in storage
      localStorage.setItem("inet_admin_token", data.token);
      localStorage.setItem("inet_admin_user", JSON.stringify(data.admin));

      setToken(data.token);
      setAdminUser(data.admin);
      setSuccessMsg("Welcome back, Administrator! Redirecting to Dashboard...");

      // Route to Dashboard.tsx
      setTimeout(() => {
        window.history.pushState(null, "", "/dashboard");
        window.dispatchEvent(new PopStateEvent("popstate"));
      }, 400);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Failed to connect to backend server. Ensure backend is running on port 5000.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF2EB] text-slate-800 flex flex-col font-sans selection:bg-[#15803d] selection:text-white relative overflow-hidden">
      {/* Background Soft Subtle Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      {/* Top Header / Brand Bar */}
      <header className="w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10 shadow-xs">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="iNet Global"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              iNet Global
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-600/10 text-emerald-800 border border-emerald-600/20">
                Admin Console
              </span>
            </span>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            ← Back to Website
          </a>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 z-10">
        {adminUser && token ? (
          /* ================= Authenticated State (Admin Dashboard & Blog CRUD) ================= */
          <div className="w-full max-w-6xl bg-white border border-slate-200 rounded-3xl shadow-xl p-6 sm:p-8 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 space-y-6">
            {/* Top Bar inside Authenticated state */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-[#83184d] to-pink-600 flex items-center justify-center text-white font-bold text-2xl shadow-md">
                  {adminUser.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    {adminUser.name}
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300 capitalize">
                      {adminUser.role}
                    </span>
                  </h1>
                  <p className="text-sm text-slate-500">{adminUser.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold transition"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  View Public Blog
                </a>

                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 text-xs font-semibold transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>

            {/* Dashboard Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
              <button
                onClick={() => setActiveTab("blogs")}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeTab === "blogs"
                    ? "bg-[#83184d] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <FileText className="w-4 h-4" />
                Blog & Article Manager (CRUD)
              </button>

              <button
                onClick={() => setActiveTab("overview")}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeTab === "overview"
                    ? "bg-[#83184d] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                System Overview
              </button>
            </div>

            {/* Tab 1: Blog CRUD Management */}
            {activeTab === "blogs" && (
              <AdminBlogManager token={token} />
            )}

            {/* Tab 2: System Overview */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Admin Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-[#EEF2EB]/60 border border-slate-200 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emerald-600 text-white shadow-xs">
                      <LayoutDashboard className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Console Status
                      </div>
                      <div className="text-lg font-bold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        Online & Active
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#EEF2EB]/60 border border-slate-200 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-slate-800 text-white shadow-xs">
                      <Server className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        API Endpoint
                      </div>
                      <div className="text-sm font-bold text-slate-800 mt-0.5">
                        http://localhost:5000
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#EEF2EB]/60 border border-slate-200 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-teal-700 text-white shadow-xs">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Permissions
                      </div>
                      <div className="text-sm font-bold text-slate-800 mt-0.5">
                        Full Administrative
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions Panel */}
                <div className="p-6 rounded-2xl bg-[#EEF2EB] border border-slate-300/80 text-slate-700">
                  <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                    Connected Administrative Session
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    You are securely authenticated as an administrator. You have authorization to manage communication channels, SMS routing, DID allocation, voice carriers, and customer inquiries.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setActiveTab("blogs")}
                      className="px-4 py-2 rounded-xl bg-[#83184d] hover:bg-[#6c143f] text-white text-xs font-semibold shadow-xs transition cursor-pointer"
                    >
                      Manage Articles
                    </button>
                    <a
                      href="/contact"
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-300 shadow-xs transition-colors"
                    >
                      View Inquiries
                    </a>
                    <a
                      href="/"
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      Visit Main Portal
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ================= Login Form Card ================= */
          <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-3xl shadow-xl p-6 sm:p-8 backdrop-blur-xl">
            {/* Header / Avatar */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-700 shadow-lg shadow-emerald-700/15 mb-4 border border-emerald-500/20">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Admin Authentication
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Enter your administrative credentials to access the console
              </p>
            </div>

            {/* Alerts */}
            {errorMsg && (
              <div className="mb-6 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="mb-6 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{successMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Admin Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@inetglobal.com"
                    autoComplete="email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#EEF2EB]/50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Master Password
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    autoComplete="current-password"
                    required
                    className="w-full pl-10 pr-11 py-3 bg-[#EEF2EB]/50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Default Credentials Helper Hint */}
              <div className="p-3.5 rounded-xl bg-[#EEF2EB] border border-slate-300 text-xs text-slate-700 flex items-start gap-2.5">
                <KeyRound className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Default Access:</span>{" "}
                  Email: <code className="bg-white border border-slate-200 px-1.5 py-0.5 rounded font-mono text-slate-800">admin@inetglobal.com</code>
                  <br />
                  <span className="inline-block mt-1">
                    Password: <code className="bg-white border border-slate-200 px-1.5 py-0.5 rounded font-mono text-slate-800">Admin@123</code>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    Sign In to Console
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Footer Notice */}
            <div className="mt-6 text-center text-xs text-slate-500">
              Protected by enterprise end-to-end token encryption & TLS 1.3
            </div>
          </div>
        )}
      </main>

      {/* Bottom Footer */}
      <footer className="w-full border-t border-slate-200 bg-white/60 px-6 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} iNet Global Communications Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminLogin;
