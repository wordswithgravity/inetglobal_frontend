"use client";

import React, { useState } from "react";
import {
  Plus,
  Trash2,
  Table as TableIcon,
  BarChart3,
  Image as ImageIcon,
  Upload,
  Loader2,
} from "lucide-react";
import RichToolbar from "./RichToolbar";
import type {
  BlogSection,
  TableData,
  GraphData,
  LinkItem,
} from "../../store/slices/blogSlice";

interface SectionEditorProps {
  section: BlogSection;
  index: number;
  onUpdate: (updated: BlogSection) => void;
  onDelete: () => void;
  onUploadImage: (file: File) => Promise<string>;
}

export const SectionEditor: React.FC<SectionEditorProps> = ({
  section,
  index,
  onUpdate,
  onDelete,
  onUploadImage,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [newPoint, setNewPoint] = useState("");
  const [newLinkText, setNewLinkText] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");

  const updateHeading = (heading: string) => {
    onUpdate({ ...section, heading });
  };

  const updateParagraph = (pIndex: number, text: string) => {
    const updated = [...(section.paragraphs || [])];
    updated[pIndex] = text;
    onUpdate({ ...section, paragraphs: updated });
  };

  const addParagraph = () => {
    onUpdate({
      ...section,
      paragraphs: [...(section.paragraphs || []), ""],
    });
  };

  const removeParagraph = (pIndex: number) => {
    onUpdate({
      ...section,
      paragraphs: (section.paragraphs || []).filter((_, i) => i !== pIndex),
    });
  };

  const addPoint = () => {
    if (!newPoint.trim()) return;
    onUpdate({
      ...section,
      contentPoints: [...(section.contentPoints || []), newPoint.trim()],
    });
    setNewPoint("");
  };

  const removePoint = (ptIdx: number) => {
    onUpdate({
      ...section,
      contentPoints: (section.contentPoints || []).filter((_, i) => i !== ptIdx),
    });
  };

  const addLink = () => {
    if (!newLinkText.trim() || !newLinkUrl.trim()) return;
    const newLinks: LinkItem[] = [
      ...(section.links || []),
      { text: newLinkText.trim(), url: newLinkUrl.trim(), isExternal: false },
    ];
    onUpdate({ ...section, links: newLinks });
    setNewLinkText("");
    setNewLinkUrl("");
  };

  const removeLink = (lIdx: number) => {
    onUpdate({
      ...section,
      links: (section.links || []).filter((_, i) => i !== lIdx),
    });
  };

  // Section Image Upload to Cloudinary
  const handleImageFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      try {
        const url = await onUploadImage(e.target.files[0]);
        onUpdate({
          ...section,
          sectionImage: {
            url,
            caption: section.sectionImage?.caption || "Section illustration",
            alt: section.heading,
          },
        });
      } catch (err) {
        alert("Image upload failed");
      } finally {
        setIsUploading(false);
      }
    }
  };

  // Add Default Table
  const initTable = () => {
    const defaultTable: TableData = {
      headers: ["Metric", "Traditional Route", "Next-Gen Route"],
      rows: [
        ["Latency", "450ms", "180ms"],
        ["Deliverability", "92%", "99.9%"],
        ["Fallback Support", "No", "Yes (Automatic)"],
      ],
    };
    onUpdate({ ...section, tableData: defaultTable });
  };

  // Add Default Graph
  const initGraph = () => {
    const defaultGraph: GraphData = {
      title: "Performance Distribution",
      type: "bar",
      data: [
        { label: "SMS", value: 45, color: "#64748b" },
        { label: "RCS", value: 85, color: "#83184d" },
        { label: "WhatsApp", value: 92, color: "#15803d" },
      ],
    };
    onUpdate({ ...section, graphData: defaultGraph });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-300/80 shadow-md p-5 sm:p-7 space-y-6 transition-all relative">
      {/* Section Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#83184d] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            {index + 1}
          </span>
          <span className="text-sm font-bold text-slate-800">
            Section Block {index + 1}
          </span>
        </div>

        <button
          type="button"
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-xl transition flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
          title="Delete Section"
        >
          <Trash2 className="w-4 h-4" />
          <span>Remove Block</span>
        </button>
      </div>

      {/* Rich Toolbar Helper */}
      <RichToolbar
        onInsertTable={!section.tableData ? initTable : undefined}
        onInsertGraph={!section.graphData ? initGraph : undefined}
      />

      {/* Section Heading Input */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
          Section Heading *
        </label>
        <input
          type="text"
          value={section.heading}
          onChange={(e) => updateHeading(e.target.value)}
          placeholder="e.g. 1. The Architecture Behind Low-Latency Voice"
          className="w-full px-4 py-2.5 bg-[#EEF2EB]/50 border border-slate-300 rounded-xl text-slate-900 font-bold text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#83184d] transition"
        />
      </div>

      {/* Paragraphs Editor */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Paragraphs Text
          </label>
          <button
            type="button"
            onClick={addParagraph}
            className="text-xs font-bold text-[#83184d] hover:text-[#5f1037] flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Paragraph</span>
          </button>
        </div>

        {(section.paragraphs && section.paragraphs.length > 0
          ? section.paragraphs
          : [""]
        ).map((p, pIdx) => (
          <div key={pIdx} className="relative group">
            <textarea
              rows={3}
              value={p}
              onChange={(e) => updateParagraph(pIdx, e.target.value)}
              placeholder={`Write content paragraph ${pIdx + 1}...`}
              className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#83184d] transition leading-relaxed"
            />
            {(section.paragraphs?.length || 0) > 1 && (
              <button
                type="button"
                onClick={() => removeParagraph(pIdx)}
                className="absolute top-2.5 right-2.5 text-slate-400 hover:text-red-500 transition p-1"
                title="Remove Paragraph"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Content Points / Bullets */}
      <div className="space-y-3 pt-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
          Key Bullet Points
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={newPoint}
            onChange={(e) => setNewPoint(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addPoint();
              }
            }}
            placeholder="Type bullet point and press enter..."
            className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#83184d]"
          />
          <button
            type="button"
            onClick={addPoint}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition cursor-pointer"
          >
            Add Point
          </button>
        </div>

        {section.contentPoints && section.contentPoints.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {section.contentPoints.map((pt, ptIdx) => (
              <span
                key={ptIdx}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#EEF2EB] border border-slate-300 text-xs text-slate-800 font-medium"
              >
                <span>• {pt}</span>
                <button
                  type="button"
                  onClick={() => removePoint(ptIdx)}
                  className="text-slate-400 hover:text-red-600 transition"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Quote Block */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
          Highlighted Quote / Insight (Optional)
        </label>
        <input
          type="text"
          value={section.quote || ""}
          onChange={(e) => onUpdate({ ...section, quote: e.target.value })}
          placeholder="e.g. Sub-300ms latency is the gold standard for conversational speech..."
          className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 italic focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#83184d]"
        />
      </div>

      {/* In-Between Section Image (Uploaded to Cloudinary) */}
      <div className="p-4 rounded-2xl bg-[#EEF2EB]/50 border border-slate-300 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4 text-emerald-700" />
            In-Between Section Image (Cloudinary)
          </span>
          {section.sectionImage?.url && (
            <button
              type="button"
              onClick={() =>
                onUpdate({
                  ...section,
                  sectionImage: undefined,
                })
              }
              className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
            >
              Remove Image
            </button>
          )}
        </div>

        {section.sectionImage?.url ? (
          <div className="space-y-2">
            <div className="aspect-16/9 max-h-48 rounded-xl overflow-hidden border border-slate-300">
              <img
                src={section.sectionImage.url}
                alt={section.sectionImage.caption || "Preview"}
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="text"
              value={section.sectionImage.caption || ""}
              onChange={(e) =>
                onUpdate({
                  ...section,
                  sectionImage: {
                    ...section.sectionImage!,
                    caption: e.target.value,
                  },
                })
              }
              placeholder="Caption for this image..."
              className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
            />
          </div>
        ) : (
          <label className="flex items-center justify-center gap-2 p-3.5 rounded-xl border-2 border-dashed border-slate-300 hover:border-emerald-600 bg-white cursor-pointer transition text-xs font-semibold text-slate-600">
            {isUploading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                Uploading image to Cloudinary...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 text-emerald-600" />
                Upload Section Image (Max 10MB)
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageFileChange}
              disabled={isUploading}
              className="hidden"
            />
          </label>
        )}
      </div>

      {/* Embedded Table Editor */}
      {section.tableData && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-300 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <TableIcon className="w-4 h-4 text-[#83184d]" />
              Comparison / Data Table
            </span>
            <button
              type="button"
              onClick={() =>
                onUpdate({
                  ...section,
                  tableData: undefined,
                })
              }
              className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
            >
              Remove Table
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-slate-200 bg-white">
              <thead>
                <tr className="bg-[#EEF2EB]">
                  {section.tableData.headers.map((h, hIdx) => (
                    <th key={hIdx} className="p-2 border border-slate-200">
                      <input
                        type="text"
                        value={h}
                        onChange={(e) => {
                          const updatedH = [...section.tableData!.headers];
                          updatedH[hIdx] = e.target.value;
                          onUpdate({
                            ...section,
                            tableData: {
                              ...section.tableData!,
                              headers: updatedH,
                            },
                          });
                        }}
                        className="w-full bg-transparent font-bold text-slate-800 focus:outline-none"
                      />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.tableData.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-2 border border-slate-200">
                        <input
                          type="text"
                          value={cell}
                          onChange={(e) => {
                            const updatedRows = [...section.tableData!.rows];
                            updatedRows[rIdx][cIdx] = e.target.value;
                            onUpdate({
                              ...section,
                              tableData: {
                                ...section.tableData!,
                                rows: updatedRows,
                              },
                            });
                          }}
                          className="w-full bg-transparent text-slate-700 focus:outline-none"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="button"
            onClick={() => {
              const newRow = new Array(section.tableData!.headers.length).fill(
                "Value"
              );
              onUpdate({
                ...section,
                tableData: {
                  ...section.tableData!,
                  rows: [...section.tableData!.rows, newRow],
                },
              });
            }}
            className="text-xs font-bold text-[#83184d] hover:underline cursor-pointer"
          >
            + Add Table Row
          </button>
        </div>
      )}

      {/* Embedded Graph Editor */}
      {section.graphData && (
        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              Graph Visualizer ({section.graphData.type.toUpperCase()})
            </span>
            <button
              type="button"
              onClick={() =>
                onUpdate({
                  ...section,
                  graphData: undefined,
                })
              }
              className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
            >
              Remove Graph
            </button>
          </div>

          <input
            type="text"
            value={section.graphData.title}
            onChange={(e) =>
              onUpdate({
                ...section,
                graphData: {
                  ...section.graphData!,
                  title: e.target.value,
                },
              })
            }
            placeholder="Graph Title (e.g. Delivery Speed vs Protocol)"
            className="w-full px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-xs font-bold text-slate-800"
          />

          {/* Graph Data Bars */}
          <div className="space-y-2 pt-1">
            {section.graphData.data.map((dp, dpIdx) => (
              <div key={dpIdx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={dp.label}
                  onChange={(e) => {
                    const updatedD = [...section.graphData!.data];
                    updatedD[dpIdx].label = e.target.value;
                    onUpdate({
                      ...section,
                      graphData: { ...section.graphData!, data: updatedD },
                    });
                  }}
                  placeholder="Label"
                  className="w-1/3 px-2 py-1 bg-white border border-slate-200 rounded text-xs"
                />
                <input
                  type="number"
                  value={dp.value}
                  onChange={(e) => {
                    const updatedD = [...section.graphData!.data];
                    updatedD[dpIdx].value = Number(e.target.value);
                    onUpdate({
                      ...section,
                      graphData: { ...section.graphData!, data: updatedD },
                    });
                  }}
                  placeholder="Value"
                  className="w-24 px-2 py-1 bg-white border border-slate-200 rounded text-xs"
                />
                <input
                  type="color"
                  value={dp.color || "#83184d"}
                  onChange={(e) => {
                    const updatedD = [...section.graphData!.data];
                    updatedD[dpIdx].color = e.target.value;
                    onUpdate({
                      ...section,
                      graphData: { ...section.graphData!, data: updatedD },
                    });
                  }}
                  className="w-8 h-8 rounded border border-slate-200 cursor-pointer"
                />
                <button
                  type="button"
                  onClick={() => {
                    const updatedD = section.graphData!.data.filter(
                      (_, i) => i !== dpIdx
                    );
                    onUpdate({
                      ...section,
                      graphData: { ...section.graphData!, data: updatedD },
                    });
                  }}
                  className="text-red-400 hover:text-red-600 text-xs px-1"
                >
                  ×
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => {
                const updatedD = [
                  ...section.graphData!.data,
                  { label: "New Metric", value: 50, color: "#83184d" },
                ];
                onUpdate({
                  ...section,
                  graphData: { ...section.graphData!, data: updatedD },
                });
              }}
              className="text-xs font-bold text-blue-700 hover:underline cursor-pointer pt-1"
            >
              + Add Metric Data Point
            </button>
          </div>
        </div>
      )}

      {/* Embedded Action Links */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
          Embedded Navigation Links
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={newLinkText}
            onChange={(e) => setNewLinkText(e.target.value)}
            placeholder="Link Anchor Text (e.g. Read Voice Guide)"
            className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
          />
          <input
            type="text"
            value={newLinkUrl}
            onChange={(e) => setNewLinkUrl(e.target.value)}
            placeholder="URL (e.g. /voice or https://...)"
            className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
          />
          <button
            type="button"
            onClick={addLink}
            className="px-3 py-1.5 bg-slate-800 text-white rounded-lg text-xs font-bold cursor-pointer hover:bg-slate-700"
          >
            Add Link
          </button>
        </div>

        {section.links && section.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {section.links.map((l, lIdx) => (
              <span
                key={lIdx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200"
              >
                <span>🔗 {l.text}</span>
                <button
                  type="button"
                  onClick={() => removeLink(lIdx)}
                  className="text-blue-400 hover:text-red-600"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionEditor;
