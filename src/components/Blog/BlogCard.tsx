"use client";
import Image from "next/image";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  readMoreText?: string;
  onPostClick?: (slug: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  readMoreText = "Read Article",
  onPostClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onPostClick) {
      e.preventDefault();
      onPostClick(post.slug);
      return;
    }
    // Navigation handled via Link component
  };

  return (
    <article
      onClick={handleClick}
      className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      {/* Post Image Container */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized={!post.imageUrl.startsWith('/') && !post.imageUrl.includes('inetglobalservices.com') && !post.imageUrl.includes('unsplash.com')}
        />
        {/* Category Pill Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-slate-800 shadow-md backdrop-blur-xs">
            <Tag className="w-3 h-3 text-[#83184d]" />
            {post.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Metadata Bar (Date & Read Time) */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#83184d] transition-colors leading-snug">
            <a
              href={`/blog/${post.slug}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(e);
              }}
              className="focus:outline-none"
            >
              {post.title}
            </a>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Card Footer: Author + Read Link */}
        <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EEF2EB] text-slate-800 flex items-center justify-center font-bold text-xs shrink-0 border border-slate-200">
              <User className="w-4 h-4 text-slate-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                {post.author}
              </div>
              <div className="text-[11px] text-slate-500">
                {post.authorRole}
              </div>
            </div>
          </div>

          <Link href={`/blog/${post.slug}`} onClick={(e) => { if (onPostClick) { e.preventDefault(); onPostClick(post.slug); } }} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#83184d] hover:text-[#5f1037] transition-colors group/link"
          >
            <span>{readMoreText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
