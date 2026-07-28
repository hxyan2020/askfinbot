"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

interface DocSummary {
  id: string;
  title: string;
  type: string;
  fileName?: string;
  chunkCount: number;
  charCount: number;
  updatedAt: string;
}

const DOC_TYPES = [
  { value: "textbook", label: "Textbook" },
  { value: "testbank", label: "Test bank" },
  { value: "notes", label: "Notes" },
  { value: "other", label: "Other" },
];

export default function AdminExamDocumentsPage() {
  const params = useParams<{ examId: string }>();
  const examId = params.examId;
  const router = useRouter();

  const [documents, setDocuments] = useState<DocSummary[]>([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("textbook");
  const [file, setFile] = useState<File | null>(null);
  const [pasteContent, setPasteContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editType, setEditType] = useState("textbook");
  const [editContent, setEditContent] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const fetchDocs = useCallback(async (): Promise<DocSummary[] | null> => {
    const res = await fetch(`/api/admin/documents/${examId}`);
    if (res.status === 401) {
      router.push("/admin");
      return null;
    }
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to load documents");
    return data.documents || [];
  }, [examId, router]);

  useEffect(() => {
    let active = true;
    void fetchDocs()
      .then((nextDocuments) => {
        if (active && nextDocuments) setDocuments(nextDocuments);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : "Load failed");
      });
    return () => {
      active = false;
    };
  }, [fetchDocs]);

  async function onUpload(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setMessage(null);
    try {
      if (file) {
        const form = new FormData();
        form.append("file", file);
        form.append("title", title);
        form.append("type", type);
        const res = await fetch(`/api/admin/documents/${examId}`, { method: "POST", body: form });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Upload failed");
        setMessage(`Uploaded “${data.document.title}” (${data.document.chunkCount} chunks).`);
      } else if (pasteContent.trim()) {
        const res = await fetch(`/api/admin/documents/${examId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: title || "Pasted notes", type, content: pasteContent }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Save failed");
        setMessage(`Saved “${data.document.title}” (${data.document.chunkCount} chunks).`);
      } else {
        throw new Error("Choose a file or paste content.");
      }
      setTitle("");
      setFile(null);
      setPasteContent("");
      const nextDocuments = await fetchDocs();
      if (nextDocuments) setDocuments(nextDocuments);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  async function startEdit(doc: DocSummary) {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/documents/${examId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: doc.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load document");
      setEditingId(doc.id);
      setEditTitle(data.document.title);
      setEditType(data.document.type);
      setEditContent(data.document.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Edit failed");
    } finally {
      setBusy(false);
    }
  }

  async function saveEdit(e: FormEvent) {
    e.preventDefault();
    if (!editingId) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/documents/${examId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          title: editTitle,
          type: editType,
          content: editContent,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed");
      setMessage(`Updated “${data.document.title}”.`);
      setEditingId(null);
      const nextDocuments = await fetchDocs();
      if (nextDocuments) setDocuments(nextDocuments);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed");
    } finally {
      setBusy(false);
    }
  }

  async function removeDoc(doc: DocSummary) {
    if (!confirm(`Delete “${doc.title}”? This cannot be undone.`)) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/documents/${examId}?id=${encodeURIComponent(doc.id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      setMessage(`Deleted “${doc.title}”.`);
      if (editingId === doc.id) setEditingId(null);
      const nextDocuments = await fetchDocs();
      if (nextDocuments) setDocuments(nextDocuments);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="admin-shell admin-shell-wide">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/admin/dashboard" className="text-sm text-navy hover:underline">
            ← All exams
          </Link>
          <h1 className="mt-2 text-2xl font-semibold uppercase tracking-wide text-slate-900">
            {examId} materials
          </h1>
          <p className="text-sm text-slate-500">Upload, edit, or delete RAG sources for this exam.</p>
        </div>
      </div>

      {message && <p className="mb-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p>}
      {error && <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

      <section className="admin-card mb-6">
        <h2 className="mb-4 text-base font-semibold text-slate-900">Add material</h2>
        <form onSubmit={onUpload} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="admin-label">
              Title
              <input className="admin-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. CFA L1 Ethics textbook" />
            </label>
            <label className="admin-label">
              Type
              <select className="admin-input" value={type} onChange={(e) => setType(e.target.value)}>
                {DOC_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="admin-label">
            Upload file (PDF, DOCX, TXT, MD)
            <input
              className="admin-input"
              type="file"
              accept=".pdf,.docx,.txt,.md,application/pdf,text/plain"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>
          <label className="admin-label">
            Or paste text
            <textarea
              className="admin-input min-h-28"
              value={pasteContent}
              onChange={(e) => setPasteContent(e.target.value)}
              placeholder="Paste notes or extracted text…"
            />
          </label>
          <button type="submit" className="admin-btn" disabled={busy}>
            {busy ? "Working…" : "Save to RAG"}
          </button>
        </form>
      </section>

      <section className="admin-card">
        <h2 className="mb-4 text-base font-semibold text-slate-900">Documents ({documents.length})</h2>
        {documents.length === 0 ? (
          <p className="text-sm text-slate-500">No materials yet for this exam.</p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {documents.map((doc) => (
              <li key={doc.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div>
                  <p className="font-medium text-slate-900">{doc.title}</p>
                  <p className="text-xs text-slate-500">
                    {doc.type} · {doc.chunkCount} chunks · {doc.charCount.toLocaleString()} chars
                    {doc.fileName ? ` · ${doc.fileName}` : ""}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button type="button" className="admin-btn-secondary" onClick={() => startEdit(doc)} disabled={busy}>
                    Edit
                  </button>
                  <button type="button" className="admin-btn-danger" onClick={() => removeDoc(doc)} disabled={busy}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {editingId && (
        <section className="admin-card mt-6">
          <h2 className="mb-4 text-base font-semibold text-slate-900">Edit document</h2>
          <form onSubmit={saveEdit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="admin-label">
                Title
                <input className="admin-input" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} required />
              </label>
              <label className="admin-label">
                Type
                <select className="admin-input" value={editType} onChange={(e) => setEditType(e.target.value)}>
                  {DOC_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="admin-label">
              Content
              <textarea
                className="admin-input min-h-64 font-mono text-xs"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                required
              />
            </label>
            <div className="flex gap-2">
              <button type="submit" className="admin-btn" disabled={busy}>
                Save changes
              </button>
              <button type="button" className="admin-btn-secondary" onClick={() => setEditingId(null)}>
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
