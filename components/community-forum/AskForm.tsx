"use client";

import { useRef, useState, type FormEvent } from "react";
import { TriangleAlert } from "lucide-react";
import { SENSITIVE_DATA_WARNING, TOPICS } from "./shared";

const FIELD =
  "w-full rounded-lg bg-gray-50 px-4 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-orange-400";
const LABEL = "pb-2 text-sm font-bold leading-5 text-gray-700";

const FORMATS = [
  { label: "Bold", marker: "**", text: "B", className: "font-bold" },
  { label: "Italic", marker: "*", text: "I", className: "italic" },
  { label: "Code", marker: "`", text: "</>", className: "font-mono" },
];

export default function AskForm() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const detailsRef = useRef<HTMLTextAreaElement>(null);

  // Wraps the current selection in a Markdown marker (e.g. **bold**).
  function applyFormat(marker: string) {
    const el = detailsRef.current;
    if (!el) return;
    const { selectionStart: start, selectionEnd: end } = el;
    const next = details.slice(0, start) + marker + details.slice(start, end) + marker + details.slice(end);
    setDetails(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + marker.length, end + marker.length);
    });
  }

  // No forum backend is connected yet, so nothing is sent anywhere.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col rounded-2xl bg-white p-5 shadow-2xl sm:p-8">
      <div className="flex flex-col">
        <label htmlFor="ask-topic" className={LABEL}>
          Topic Registry *
        </label>
        <select id="ask-topic" name="topic_id" required defaultValue="" className={`${FIELD} h-12`}>
          <option value="" disabled>
            Select a governed topic...
          </option>
          {TOPICS.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.title}
            </option>
          ))}
        </select>
        <p className="pt-2 text-xs leading-4 text-gray-500">Required governed topic_id; no user-created category.</p>
      </div>

      <div className="flex flex-col pt-6">
        <label htmlFor="ask-title" className={LABEL}>
          Discussion Title *
        </label>
        <input
          id="ask-title"
          name="title"
          type="text"
          required
          maxLength={150}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="A brief, clear summary of your question"
          className={`${FIELD} h-12`}
        />
      </div>

      <div className="flex flex-col pt-6">
        <label htmlFor="ask-details" className={LABEL}>
          Details *
        </label>
        <div className="overflow-hidden rounded-lg bg-gray-50 outline -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-orange-400">
          <div className="flex gap-2 border-b border-gray-200 bg-white px-3 py-2">
            {FORMATS.map((format) => (
              <button
                key={format.label}
                type="button"
                aria-label={format.label}
                onClick={() => applyFormat(format.marker)}
                className={`min-w-9 rounded-sm p-1.5 text-base leading-6 text-gray-600 hover:bg-gray-100 ${format.className}`}
              >
                {format.text}
              </button>
            ))}
          </div>
          <textarea
            id="ask-details"
            name="details"
            ref={detailsRef}
            required
            rows={6}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Describe your workflow or issue in detail..."
            className="block w-full resize-y bg-transparent px-4 py-3 text-base leading-6 text-gray-900 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-r-lg border-l-4 border-amber-500 bg-amber-50 p-4">
        <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-600" strokeWidth={1.7} />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium leading-5 text-amber-900">Warning before posting</p>
          <p className="text-xs leading-4 text-amber-800">{SENSITIVE_DATA_WARNING}</p>
        </div>
      </div>

      {showPreview ? (
        <div className="mt-6 flex flex-col gap-2 rounded-lg bg-gray-50 p-4 outline -outline-offset-1 outline-gray-200">
          <p className="text-xs font-semibold uppercase text-gray-500">Preview</p>
          <p className="text-lg font-bold text-violet-950">{title || "Untitled discussion"}</p>
          <p className="whitespace-pre-wrap text-sm leading-6 text-gray-700">{details || "No details yet."}</p>
        </div>
      ) : null}

      {submitted ? (
        <p role="status" className="mt-6 rounded-lg bg-blue-50 p-4 text-sm leading-5 text-blue-900">
          Posting is not available yet. Your discussion was not submitted and nothing has been sent.
        </p>
      ) : null}

      <div className="mt-8 flex flex-col-reverse gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          aria-pressed={showPreview}
          onClick={() => setShowPreview((v) => !v)}
          className="text-sm font-semibold leading-5 text-gray-500 hover:text-gray-700"
        >
          {showPreview ? "Hide preview" : "Preview discussion"}
        </button>
        <button
          type="submit"
          className="rounded-[999px] bg-amber-700 px-6 py-3.5 text-base font-bold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] outline -outline-offset-1 outline-amber-700 transition-colors hover:bg-amber-800"
        >
          Submit to Community
        </button>
      </div>
    </form>
  );
}
