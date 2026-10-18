import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Compass, ArrowRight, Home, PhoneCall, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#EEF2EB] text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="w-full max-w-2xl bg-white border border-slate-200/90 rounded-3xl shadow-xl p-8 sm:p-12 text-center backdrop-blur-sm">
          {/* Badge & Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-rose-50 border border-rose-200/60 text-[#83184d] mb-6 shadow-xs">
            <Compass className="w-10 h-10 animate-pulse" />
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-4">
            404 • Page Not Found
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            This route is disconnected
          </h1>

          <p className="text-base text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed">
            The page or service you are trying to reach has moved, been updated,
            or doesn&apos;t exist on our network. Use the direct links below to get
            back on track.
          </p>

          {/* Core Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#83184d] to-pink-700 hover:from-[#6b133e] hover:to-pink-800 text-white font-semibold text-sm shadow-md shadow-pink-900/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Home className="w-4 h-4" />
              Return to Homepage
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-200 transition"
            >
              Contact Our Engineers
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>

          {/* Quick Service Links */}
          <div className="pt-8 border-t border-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-4">
              Explore Our Core Solutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link
                href="/voice"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#83184d]" />
                Voice Services
              </Link>
              <Link
                href="/messaging"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                SMS & Messaging
              </Link>
              <Link
                href="/whatsapp"
                className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition"
              >
                WhatsApp Business
              </Link>
              <Link
                href="/omnichannel"
                className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition"
              >
                Omnichannel
              </Link>
              <Link
                href="/blog"
                className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition"
              >
                Telecom Blog
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
