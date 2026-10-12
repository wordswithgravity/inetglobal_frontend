import React, { useState } from "react";
import {
  Save,
  X,
  Upload,
  Plus,
  Sparkles,
  Loader2,
  AlertCircle,
  Eye,
  FileText,
  Clock,
  User,
  Tag,
  Hash,
} from "lucide-react";
import { SectionEditor } from "./SectionEditor";
import type { BlogItem, BlogSection } from "../../store/slices/blogSlice";
import { useAppDispatch } from "../../store/hooks";
import {
  createAdminBlog,
  updateAdminBlog,
  uploadImageCloudinary,
} from "../../store/slices/blogSlice";

interface AdminBlogEditorProps {
  initialBlog?: BlogItem | null;
  token: string;
  onClose: () => void;
  onSuccess: (savedBlog: BlogItem) => void;
}

const DEFAULT_CATEGORIES = [
  "RCS & Messaging",
  "AI & Voice",
  "Cloud Telecom",
  "Security & SMS",
  "Omnichannel",
  "Wholesale Voice",
  "Network & Latency",
  "Company News",
];

export const AdminBlogEditor: React.FC<AdminBlogEditorProps> = ({
  initialBlog,
  token,
  onClose,
  onSuccess,
}) => {
  const dispatch = useAppDispatch();

  // Blog Fields
  const [title, setTitle] = useState(initialBlog?.title || "");
  const [slug, setSlug] = useState(initialBlog?.slug || "");
  const [excerpt, setExcerpt] = useState(initialBlog?.excerpt || "");
  const [category, setCategory] = useState(
    initialBlog?.category || DEFAULT_CATEGORIES[0]
  );
  const [readTime, setReadTime] = useState(initialBlog?.readTime || "5 min read");
  const [author, setAuthor] = useState(
    initialBlog?.author || "iNet Global Team"
  );
  const [authorRole, setAuthorRole] = useState(
    initialBlog?.authorRole || "Telecom Infrastructure Specialist"
  );
  const [authorBio, setAuthorBio] = useState(
    initialBlog?.authorBio ||
      "Carrier operations and enterprise CPaaS engineering specialist at iNet Global."
  );
  const [imageUrl, setImageUrl] = useState(
    initialBlog?.imageUrl ||
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  );
  const [featured, setFeatured] = useState<boolean>(
    initialBlog?.featured || false
  );
  const [status, setStatus] = useState<"draft" | "published">(
    initialBlog?.status || "published"
  );
  const [tagInput, setTagInput] = useState(
    initialBlog?.tags?.join(", ") || "Telecom, CPaaS, Voice"
  );

  // Sections
  const [sections, setSections] = useState<BlogSection[]>(
    initialBlog?.sections && initialBlog.sections.length > 0
      ? initialBlog.sections
      : [
          {
            heading: "Executive Overview",
            paragraphs: [
              "Enter the opening analysis for this telecom intelligence article.",
            ],
            contentPoints: [
              "Sub-millisecond routing across tier-1 carriers",
              "Automated failover and zero-loss switching",
            ],
            keyTakeaways: [
              "Ensure low-latency interconnects before scaling voice agents.",
            ],
          },
        ]
  );

  // Status & states
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingFeaturedImg, setIsUploadingFeaturedImg] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);

  // Auto-slug generator from title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!initialBlog) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(generatedSlug);
    }
  };

  // Upload featured image to Cloudinary
  const handleFeaturedImageFile = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploadingFeaturedImg(true);
      setErrorMessage(null);
      const actionResult = await dispatch(
        uploadImageCloudinary({ file, token })
      ).unwrap();
      setImageUrl(actionResult);
    } catch (err: unknown) {
      setErrorMessage(
        typeof err === "string" ? err : "Failed to upload image to Cloudinary"
      );
    } finally {
      setIsUploadingFeaturedImg(false);
    }
  };

  // Direct upload handler for sections passed to SectionEditor
  const handleSectionImageUpload = async (file: File): Promise<string> => {
    const url = await dispatch(
      uploadImageCloudinary({ file, token })
    ).unwrap();
    return url;
  };

  // Section manipulators
  const updateSection = (idx: number, updated: BlogSection) => {
    const newSections = [...sections];
    newSections[idx] = updated;
    setSections(newSections);
  };

  const removeSection = (idx: number) => {
    if (sections.length <= 1) {
      alert("A blog post must contain at least one section.");
      return;
    }
    setSections(sections.filter((_, i) => i !== idx));
  };

  const addNewSection = () => {
    setSections([
      ...sections,
      {
        heading: `Section ${sections.length + 1}: Key Topic`,
        paragraphs: ["Add your paragraph text and insights here."],
        contentPoints: [],
        keyTakeaways: [],
      },
    ]);
  };

  // Save/Publish
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!title.trim()) {
      setErrorMessage("Please enter a blog post title.");
      return;
    }
    if (!slug.trim()) {
      setErrorMessage("Please enter a URL slug for the article.");
      return;
    }
    if (!excerpt.trim()) {
      setErrorMessage("Please provide a short excerpt or summary.");
      return;
    }
    if (!imageUrl.trim()) {
      setErrorMessage("Please provide or upload a featured header image.");
      return;
    }

    const tagsArray = tagInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const blogPayload: Partial<BlogItem> = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      category: category.trim(),
      readTime: readTime.trim(),
      author: author.trim(),
      authorRole: authorRole.trim(),
      authorBio: authorBio.trim(),
      imageUrl: imageUrl.trim(),
      featured,
      status,
      tags: tagsArray,
      sections,
      relatedSlugs: [],
    };

    try {
      setIsSaving(true);
      let resultBlog: BlogItem;

      if (initialBlog && (initialBlog._id || initialBlog.id)) {
        const id = (initialBlog._id || initialBlog.id) as string;
        resultBlog = await dispatch(
          updateAdminBlog({ id, blogData: blogPayload, token })
        ).unwrap();
      } else {
        resultBlog = await dispatch(
          createAdminBlog({ blogData: blogPayload, token })
        ).unwrap();
      }

      onSuccess(resultBlog);
      onClose();
    } catch (err: unknown) {
      setErrorMessage(
        typeof err === "string" ? err : "Failed to save blog post."
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-150">
      <div className="w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#83184d] text-white flex items-center justify-center shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                {initialBlog ? "Edit Article" : "Create New Blog Article"}
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                  Rich Editor
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Craft rich telecom insights with Cloudinary images, comparison tables, graphs, and structured sections.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPreviewMode(!previewMode)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold cursor-pointer transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              {previewMode ? "Edit Mode" : "Preview"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {errorMessage && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div className="leading-snug">{errorMessage}</div>
            </div>
          )}

          {previewMode ? (
            /* ================= Quick Preview Mode ================= */
            <div className="space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-[#83184d] tracking-wider">
                  {category} • {readTime}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {title || "Untitled Article"}
                </h1>
                <p className="text-sm text-slate-600 italic">
                  {excerpt || "No excerpt specified."}
                </p>
              </div>

              {imageUrl && (
                <div className="w-full aspect-21/9 max-h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src={imageUrl}
                    alt="Featured"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="space-y-6">
                {sections.map((sec, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-xl border border-slate-200 space-y-3"
                  >
                    <h3 className="text-lg font-bold text-slate-900">
                      {sec.heading}
                    </h3>
                    {sec.paragraphs.map((p, pI) => (
                      <p key={pI} className="text-xs sm:text-sm text-slate-700">
                        {p}
                      </p>
                    ))}
                    {sec.sectionImage?.url && (
                      <div className="max-w-md rounded-lg overflow-hidden border border-slate-200">
                        <img
                          src={sec.sectionImage.url}
                          alt={sec.sectionImage.caption || "Section"}
                          className="w-full h-44 object-cover"
                        />
                        {sec.sectionImage.caption && (
                          <div className="text-[11px] p-1.5 text-center bg-slate-50 text-slate-500">
                            {sec.sectionImage.caption}
                          </div>
                        )}
                      </div>
                    )}
                    {sec.quote && (
                      <blockquote className="p-3 bg-[#EEF2EB] border-l-4 border-[#83184d] text-xs italic text-slate-800">
                        "{sec.quote}"
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* ================= Normal Editor Mode ================= */
            <form id="admin-blog-form" onSubmit={handleSave} className="space-y-6">
              {/* Top metadata grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Deploying Low-Latency AI Voice Agents Across Global SIP Trunks"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-slate-400" />
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="e.g. low-latency-ai-voice-sip-trunks"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
                  >
                    {DEFAULT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Excerpt */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Article Summary / Excerpt *
                  </label>
                  <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    rows={2}
                    placeholder="Brief 2-3 sentence overview that appears in cards and search previews..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
                  />
                </div>

                {/* Featured Image URL & Cloudinary Upload */}
                <div className="md:col-span-2 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#83184d]" />
                      Featured Hero Image (Cloudinary Upload)
                    </label>
                    <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#83184d] hover:bg-[#6c143f] text-white text-xs font-semibold cursor-pointer transition shadow-xs">
                      {isUploadingFeaturedImg ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          Uploading to Cloudinary...
                        </>
                      ) : (
                        <>
                          <Upload className="w-3.5 h-3.5" />
                          Upload New Image
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFeaturedImageFile}
                        disabled={isUploadingFeaturedImg}
                      />
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <input
                      type="text"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Paste Image URL or upload directly to Cloudinary"
                      className="flex-1 px-4 py-2 rounded-xl border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#83184d] bg-white"
                    />
                    {imageUrl && (
                      <div className="w-16 h-12 rounded-lg border border-slate-300 overflow-hidden shrink-0 bg-slate-200">
                        <img
                          src={imageUrl}
                          alt="Thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Author Info */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. David Zhao"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Author Role
                  </label>
                  <input
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    placeholder="e.g. Principal Voice Engineer"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Author Short Biography
                  </label>
                  <input
                    type="text"
                    value={authorBio}
                    onChange={(e) => setAuthorBio(e.target.value)}
                    placeholder="e.g. Specialist in low-latency WebRTC and carrier termination."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
                  />
                </div>

                {/* Read Time & Status */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g. 5 min read"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Publication Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) =>
                      setStatus(e.target.value as "draft" | "published")
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
                  >
                    <option value="published">Published (Live on Website)</option>
                    <option value="draft">Draft (Hidden from Public)</option>
                  </select>
                </div>

                {/* Tags & Featured */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-slate-400" />
                    Tags (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Telecom, SIP, AI, CPaaS"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
                  />
                </div>

                <div className="flex items-center gap-3 pt-6">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      className="w-4 h-4 text-[#83184d] rounded border-slate-300 focus:ring-[#83184d]"
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Feature on Homepage / Top Highlight
                    </span>
                  </label>
                </div>
              </div>

              {/* SECTION EDITORS (CRUD inside post: headings, paragraphs, tables, graphs, images, points) */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#83184d]" />
                      Article Sections & Modular Elements ({sections.length})
                    </h3>
                    <p className="text-xs text-slate-500">
                      Add headings, paragraphs, bullet points, Cloudinary in-between images, comparison tables, graphs, and links.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={addNewSection}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs cursor-pointer transition"
                  >
                    <Plus className="w-4 h-4" />
                    Add Section
                  </button>
                </div>

                <div className="space-y-6">
                  {sections.map((section, idx) => (
                    <SectionEditor
                      key={idx}
                      section={section}
                      index={idx}
                      onUpdate={(updated) => updateSection(idx, updated)}
                      onDelete={() => removeSection(idx)}
                      onUploadImage={handleSectionImageUpload}
                    />
                  ))}
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={addNewSection}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-dashed border-slate-300 hover:border-[#83184d] hover:bg-[#EEF2EB]/50 text-slate-700 text-xs font-bold transition cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-[#83184d]" />
                    Add Another Section
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold cursor-pointer transition"
          >
            Cancel
          </button>

          <button
            form="admin-blog-form"
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#83184d] hover:bg-[#6c143f] text-white text-sm font-semibold shadow-md transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving to Database...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                {initialBlog ? "Save Changes" : "Publish Article"}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogEditor;
