import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard, { type BlogPost } from "../components/Blog/BlogCard";
import { Search, BookOpen, ArrowRight, Loader2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPublishedBlogs } from "../store/slices/blogSlice";
import { getBlogTranslations } from "../data/blogTranslations";

export const Blog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { blogs: apiBlogs, loading } = useAppSelector((state) => state.blog);
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage,
  );
  const t = getBlogTranslations(selectedLanguage);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    dispatch(fetchPublishedBlogs({ lang: selectedLanguage }));
  }, [dispatch, selectedLanguage]);

  const categories = [
    { key: "All", label: t.categories.all },
    { key: "RCS & Messaging", label: t.categories.rcs },
    { key: "AI & Voice", label: t.categories.aiVoice },
    { key: "Cloud Telecom", label: t.categories.cloudTelecom },
    { key: "Security & SMS", label: t.categories.securitySms },
    { key: "Omnichannel", label: t.categories.omnichannel },
    { key: "Wholesale Voice", label: t.categories.wholesaleVoice },
  ];

  // Convert real API blogs to BlogPost format (NO fake/mock data)
  const allBlogPosts: BlogPost[] = (apiBlogs || []).map((b) => ({
    id: (b._id || b.id || b.slug) as string,
    slug: b.slug,
    title: b.title,
    excerpt: b.excerpt,
    category: b.category,
    readTime: b.readTime,
    date: b.date,
    author: b.author,
    authorRole: b.authorRole,
    imageUrl: b.imageUrl,
    featured: b.featured,
  }));

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allBlogPosts.find((p) => p.featured) || allBlogPosts[0];

  return (
    <div className="min-h-screen bg-[#EEF2EB] text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Header Section - max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white to-[#EEF2EB]">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t.description}
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Category Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.key
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-full text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#83184d] focus:border-transparent transition-all shadow-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Article Banner (Only when backend has articles and no search filter) */}
      {allBlogPosts.length > 0 &&
        selectedCategory === "All" &&
        !searchQuery &&
        featuredPost && (
          <section className="py-10 bg-white border-b border-slate-200">
            <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
              <div className="text-xs font-bold uppercase tracking-wider text-[#83184d] mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {t.featuredStory}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EEF2EB]/50 rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10">
                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-800 border border-slate-200">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="hover:text-[#83184d] transition-colors"
                    >
                      {featuredPost.title}
                    </a>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 pt-2">
                    <span>By {featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="pt-2">
                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-sm font-semibold transition-all shadow-md shadow-[#83184d]/25"
                    >
                      {t.readFullStory}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

      {/* 4. Articles Grid Section - matches Header.tsx: max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 */}
      <section className="flex-1 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              {searchQuery
                ? `${t.searchResultsFor} "${searchQuery}"`
                : selectedCategory === "All"
                  ? t.recentPublications
                  : `${categories.find((c) => c.key === selectedCategory)?.label || selectedCategory} ${t.articlesSuffix}`}
              {loading && (
                <Loader2 className="w-4 h-4 animate-spin text-[#83184d]" />
              )}
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {t.showingArticles} {filteredPosts.length} {t.articlesSuffix}
            </span>
          </div>

          {/* If Loading and no articles yet */}
          {loading && allBlogPosts.length === 0 ? (
            <div className="p-16 text-center rounded-3xl bg-white border border-slate-200 space-y-3">
              <Loader2 className="w-8 h-8 text-[#83184d] animate-spin mx-auto" />
              <h3 className="text-base font-bold text-slate-800">
                {t.loadingArticles}
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {t.loadingDesc}
              </p>
            </div>
          ) : allBlogPosts.length === 0 ? (
            /* ================= Completely Empty Backend State ================= */
            <div className="p-16 sm:p-20 text-center rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#EEF2EB] flex items-center justify-center text-[#83184d]">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {t.noArticlesYet}
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                {t.noArticlesDesc}
              </p>
            </div>
          ) : filteredPosts.length > 0 ? (
            /* ================= Articles Grid ================= */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            /* ================= Filter/Search Yields 0 Results ================= */
            <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800">
                {t.noMatchingFound}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                {t.noMatchingDesc}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition cursor-pointer"
              >
                {t.clearFilters}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 6. Global Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
