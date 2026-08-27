"use client";

import { useState } from "react";
import {
  LuDownload,
  LuEye,
  LuSignature,
  LuCircleCheck,
  LuClock,
} from "react-icons/lu";
import DocumentViewerModal from "@/components/DocumentViewerModal";
import {
  sowContent,
  msaContent,
  type DocContent,
} from "./document/documentContent";

type DocStatus = "Signed" | "Awaiting Signature";

type Doc = {
  id: string;
  type: "SOW" | "MSA";
  title: string;
  status: DocStatus;
  date: string;
  fileSize: string;
  content?: DocContent; // undefined = preview not available yet
};

// Dummy — replace with real documents from your storage (Bonsai/HelloSign/S3, etc.)
const documents: Doc[] = [
  {
    id: "doc-msa-01",
    type: "MSA",
    title: "Master Service Agreement",
    status: "Signed",
    date: "1 Jul 2026",
    fileSize: "184 KB",
    content: msaContent,
  },
  {
    id: "doc-sow-01",
    type: "SOW",
    title: "Statement of Work — Pro Website Build",
    status: "Signed",
    date: "1 Jul 2026",
    fileSize: "220 KB",
    content: sowContent,
  },
  {
    id: "doc-sow-02",
    type: "SOW",
    title: "Statement of Work — Local Dominance Add-on",
    status: "Awaiting Signature",
    date: "20 Aug 2026",
    fileSize: "96 KB",
    // no content yet — still being drafted
  },
];

const DocumentsList = () => {
  const [activeDoc, setActiveDoc] = useState<Doc | null>(null);

  const handleDownload = (id: string) => {
    // TODO: trigger real file download
    console.log(`Downloading ${id}`);
  };

  return (
    <div className="flex flex-col gap-4">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="border border-zinc-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <span className="shrink-0 p-2.5 rounded-md bg-zinc-100 text-zinc-600">
              <LuSignature size={18} />
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wide text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">
                  {doc.type}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    doc.status === "Signed"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  {doc.status === "Signed" ? (
                    <LuCircleCheck size={11} />
                  ) : (
                    <LuClock size={11} />
                  )}
                  {doc.status}
                </span>
              </div>
              <p className="font-semibold text-zinc-900 text-sm">{doc.title}</p>
              <p className="text-xs text-zinc-400 mt-0.5">
                {doc.date} · {doc.fileSize}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveDoc(doc)}
              disabled={!doc.content}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-md border transition-colors duration-200 ${
                doc.content
                  ? "border-zinc-200 hover:bg-zinc-50"
                  : "border-zinc-100 text-zinc-300 cursor-not-allowed"
              }`}
            >
              <LuEye size={14} />
              View
            </button>
            <button
              onClick={() => handleDownload(doc.id)}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-200"
            >
              <LuDownload size={14} />
              Download
            </button>
          </div>
        </div>
      ))}

      {activeDoc?.content && (
        <DocumentViewerModal
          content={activeDoc.content}
          status={activeDoc.status}
          onClose={() => setActiveDoc(null)}
          onDownload={() => handleDownload(activeDoc.id)}
        />
      )}
    </div>
  );
};

export default DocumentsList;
