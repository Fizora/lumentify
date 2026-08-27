"use client";

import { LuX, LuDownload } from "react-icons/lu";
import { DocContent } from "./document/documentContent";

type DocumentViewerModalProps = {
  content: DocContent;
  status: "Signed" | "Awaiting Signature";
  onClose: () => void;
  onDownload: () => void;
};

const DocumentViewerModal = ({
  content,
  status,
  onClose,
  onDownload,
}: DocumentViewerModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 p-5 border-b border-zinc-200 shrink-0">
          <div>
            <h2 className="font-bold text-zinc-900 text-sm sm:text-base">
              {content.title}
            </h2>
            <span
              className={`inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                status === "Signed"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-amber-50 text-amber-600"
              }`}
            >
              {status}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors duration-200 shrink-0"
          >
            <LuX size={18} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-6 flex-1">
          {/* Meta table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 pb-6 border-b border-zinc-100">
            {content.meta.map(({ label, value }) => (
              <div key={label} className="text-sm">
                <span className="text-zinc-400">{label}: </span>
                <span className="text-zinc-800 font-medium">{value}</span>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-6">
            {content.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-sm font-bold text-zinc-900 mb-2">
                  {section.heading}
                </h3>
                {section.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm text-zinc-600 leading-relaxed mb-2"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="flex flex-col gap-1.5 mt-1">
                    {section.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-600 leading-relaxed flex gap-2"
                      >
                        <span className="text-zinc-300 shrink-0">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Signature block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-zinc-100">
            <div>
              <p className="text-xs text-zinc-400 mb-1">Client Signature</p>
              <div className="h-10 border-b border-zinc-300" />
            </div>
            <div>
              <p className="text-xs text-zinc-400 mb-1">Provider Signature</p>
              <div className="h-10 border-b border-zinc-300" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-zinc-200 shrink-0">
          <button
            onClick={onDownload}
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-200"
          >
            <LuDownload size={14} />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewerModal;
