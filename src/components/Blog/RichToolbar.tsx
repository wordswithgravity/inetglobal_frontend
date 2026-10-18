"use client";

import React from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Table as TableIcon,
  BarChart3,
  Link as LinkIcon,
  Image as ImageIcon,
} from "lucide-react";

interface RichToolbarProps {
  onInsertHeading?: (level: 1 | 2) => void;
  onInsertBullet?: () => void;
  onInsertNumbered?: () => void;
  onInsertQuote?: () => void;
  onInsertPoint?: () => void;
  onInsertTable?: () => void;
  onInsertGraph?: () => void;
  onInsertImage?: () => void;
  onInsertLink?: () => void;
  className?: string;
}

export const RichToolbar: React.FC<RichToolbarProps> = ({
  onInsertHeading,
  onInsertBullet,
  onInsertNumbered,
  onInsertQuote,
  onInsertPoint,
  onInsertTable,
  onInsertGraph,
  onInsertImage,
  onInsertLink,
  className = "",
}) => {
  const executeCommand = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-1.5 p-2 bg-[#EEF2EB] border border-slate-300 rounded-2xl shadow-xs select-none ${className}`}
    >
      {/* Text Styles */}
      <div className="flex items-center gap-0.5 pr-2 border-r border-slate-300">
        <button
          type="button"
          onClick={() => executeCommand("bold")}
          className="p-1.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-white transition cursor-pointer"
          title="Bold (Ctrl+B)"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => executeCommand("italic")}
          className="p-1.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-white transition cursor-pointer"
          title="Italic (Ctrl+I)"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => executeCommand("underline")}
          className="p-1.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-white transition cursor-pointer"
          title="Underline (Ctrl+U)"
        >
          <Underline className="w-4 h-4" />
        </button>
      </div>

      {/* Headings */}
      <div className="flex items-center gap-0.5 pr-2 border-r border-slate-300">
        <button
          type="button"
          onClick={() => onInsertHeading?.(1)}
          className="p-1.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-white transition flex items-center gap-1 text-xs font-bold cursor-pointer"
          title="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
          <span>H1</span>
        </button>
        <button
          type="button"
          onClick={() => onInsertHeading?.(2)}
          className="p-1.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-white transition flex items-center gap-1 text-xs font-bold cursor-pointer"
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
          <span>H2</span>
        </button>
      </div>

      {/* Lists & Points */}
      <div className="flex items-center gap-0.5 pr-2 border-r border-slate-300">
        <button
          type="button"
          onClick={onInsertPoint || onInsertBullet}
          className="p-1.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-white transition flex items-center gap-1 text-xs font-semibold cursor-pointer"
          title="Bullet Points"
        >
          <List className="w-4 h-4" />
          <span className="hidden sm:inline">Bullets</span>
        </button>
        <button
          type="button"
          onClick={onInsertNumbered}
          className="p-1.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-white transition flex items-center gap-1 text-xs font-semibold cursor-pointer"
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={onInsertQuote}
          className="p-1.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-white transition cursor-pointer"
          title="Quote Block"
        >
          <Quote className="w-4 h-4" />
        </button>
      </div>

      {/* Structured Elements: Tables, Graphs, Images, Links */}
      <div className="flex items-center gap-1">
        {onInsertTable && (
          <button
            type="button"
            onClick={onInsertTable}
            className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-[#83184d] border border-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition cursor-pointer"
            title="Insert Comparison Table"
          >
            <TableIcon className="w-3.5 h-3.5 text-[#83184d]" />
            <span>+ Table</span>
          </button>
        )}

        {onInsertGraph && (
          <button
            type="button"
            onClick={onInsertGraph}
            className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-blue-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition cursor-pointer"
            title="Insert Analytics Graph"
          >
            <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
            <span>+ Graph</span>
          </button>
        )}

        {onInsertImage && (
          <button
            type="button"
            onClick={onInsertImage}
            className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-emerald-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition cursor-pointer"
            title="Upload In-Between Image"
          >
            <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>+ Image</span>
          </button>
        )}

        {onInsertLink && (
          <button
            type="button"
            onClick={onInsertLink}
            className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition cursor-pointer"
            title="Insert Link"
          >
            <LinkIcon className="w-3.5 h-3.5 text-slate-600" />
            <span>+ Link</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default RichToolbar;
