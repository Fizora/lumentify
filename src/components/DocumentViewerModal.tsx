"use client";

import { LuDownload, LuX } from "react-icons/lu";
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="document-viewer-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50"
    >
      {/* Wrapper ini yang membuat konten tetap center tapi bisa di-scroll */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg bg-white shadow-xl">
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-zinc-200 p-5">
            <div className="min-w-0">
              <h2
                id="document-viewer-title"
                className="truncate text-sm font-bold text-zinc-900 sm:text-base"
              >
                {content.title}
              </h2>

              <span
                className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  status === "Signed"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {status}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close document viewer"
              className="shrink-0 rounded-full p-2 text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 active:scale-95"
            >
              <LuX size={18} />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain p-6">
            {/* Meta table */}
            <div className="mb-6 grid grid-cols-1 gap-x-6 gap-y-2 border-b border-zinc-100 pb-6 sm:grid-cols-2">
              {content.meta.map(({ label, value }) => (
                <div key={label} className="text-sm">
                  <span className="text-zinc-400">{label}: </span>
                  <span className="font-medium text-zinc-800">{value}</span>
                </div>
              ))}
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-6">
              {content.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="mb-2 text-sm font-bold text-zinc-900">
                    {section.heading}
                  </h3>

                  {section.paragraphs?.map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-2 text-sm leading-relaxed text-zinc-600"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-1 flex flex-col gap-1.5">
                      {section.bullets.map((bullet, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm leading-relaxed text-zinc-600"
                        >
                          <span className="shrink-0 text-zinc-300">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Signature block */}
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-zinc-100 pt-6 sm:grid-cols-2">
              <div>
                <p className="mb-1 text-xs text-zinc-400">Client Signature</p>
                <div className="h-10 border-b border-zinc-300" />
              </div>

              <div>
                <p className="mb-1 text-xs text-zinc-400">Provider Signature</p>
                <div className="h-10 border-b border-zinc-300" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex shrink-0 justify-end border-t border-zinc-200 p-4">
            <button
              type="button"
              onClick={onDownload}
              className="flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 active:scale-95"
            >
              <LuDownload size={14} />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewerModal;
