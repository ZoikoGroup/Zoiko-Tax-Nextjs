"use client";

// ZoikoTax Intelligence: the site's public assistant, opened from the
// floating launcher on every page. The conversation is useTaxxonChat and
// TaxxonAnswer; around it are topic shortcuts, market shortcuts and common
// questions, each of which simply asks the assistant. No answer text is
// written into the page.

import {
  ArrowRight,
  BookOpen,
  ChartColumn,
  ChevronRight,
  CircleHelp,
  Database,
  FileText,
  Globe,
  Info,
  Lightbulb,
  MapPin,
  MessageSquareText,
  Plus,
  ReceiptText,
  Settings,
  ShieldCheck,
  User,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import type { Intent } from "@/lib/taxxon/types";
import TaxxonAnswer from "./TaxxonAnswer";
import { MAX_CHARS, UNAVAILABLE, useTaxxonChat } from "./useTaxxonChat";

interface Prompt {
  label: string;
  text: string;
  hint: Intent;
}

const TOPICS: (Prompt & { icon: LucideIcon })[] = [
  { icon: MessageSquareText, label: "Communications taxes", text: "How are telecom and communications services taxed?", hint: "telecom_issues" },
  { icon: FileText, label: "Regulatory fees", text: "What regulatory fees apply to communication services?", hint: "telecom_issues" },
  { icon: Globe, label: "Global obligations", text: "How do obligations differ by country?", hint: "capabilities" },
  { icon: ReceiptText, label: "E-invoicing", text: "Do e-invoicing rules apply to telecoms?", hint: "capabilities" },
  { icon: MapPin, label: "Country coverage", text: "Which countries and taxes are supported?", hint: "coverage" },
];

const QUESTIONS: (Prompt & { chip: string })[] = [
  { chip: "VoIP taxes", label: "How are VoIP services taxed?", text: "How are VoIP services taxed?", hint: "telecom_issues" },
  { chip: "Regulatory fees", label: "What regulatory fees apply to communication services?", text: "What regulatory fees apply to communication services?", hint: "telecom_issues" },
  { chip: "E-invoicing", label: "Do e-invoicing rules apply to telecoms?", text: "Do e-invoicing rules apply to telecoms?", hint: "capabilities" },
  { chip: "Country obligations", label: "How do obligations differ by country?", text: "How do obligations differ by country?", hint: "capabilities" },
];

const MARKETS: { label: string; text: string; flag: "us" | "uk" | "eu" }[] = [
  { label: "United States", text: "United States", flag: "us" },
  { label: "United Kingdom", text: "United Kingdom", flag: "uk" },
  { label: "EU markets", text: "European Union", flag: "eu" },
];

const STEPS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: FileText, title: "Classify service", body: "Understand how the service is defined locally." },
  { icon: Globe, title: "Resolve jurisdiction", body: "Identify where the service is supplied." },
  { icon: Settings, title: "Map obligations", body: "Determine applicable taxes and regulatory fees." },
  { icon: FileText, title: "Review evidence", body: "Consider documentation and sourcing rules." },
];

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Database, title: "Tax & regulatory intelligence", body: "Clear, up-to-date insights across global jurisdictions." },
  { icon: Globe, title: "Jurisdictional context", body: "Understand how rules apply in different markets." },
  { icon: Lightbulb, title: "Transparent explanations", body: "Source-aware, easy to follow guidance." },
];

const DATA_NOTICE =
  "Please don't share invoices, tax returns, account numbers, credentials or personal financial information here. I can explain Zoiko Tax features and help you find a secure route.";
const SUPPORT_FALLBACK = "/customer-support";
const STAGES = ["Determine", "Obligate", "Comply", "Reconcile", "Prove"];

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-taxxon-copper";
const chip = `min-h-11 rounded-full border border-taxxon-aubergine/30 bg-white px-3.5 py-2 text-left text-sm font-medium text-taxxon-aubergine hover:bg-taxxon-aubergine/5 disabled:opacity-50 ${focusRing}`;

export default function IntelligenceAssistant() {
  const chat = useTaxxonChat(true);
  const { session, state, items, draft, setDraft, pending, announce, lastResponse, reviewCta, setReviewCta, report, setReport, startSession, send, newChat, sendReport } = chat;
  const [topic, setTopic] = useState<string | null>(null);
  const [notice, setNotice] = useState(false);
  const transcript = useRef<HTMLDivElement>(null);
  const composer = useRef<HTMLTextAreaElement>(null);
  const ready = state === "ready" && pending === null;

  useEffect(() => {
    transcript.current?.scrollTo({ top: transcript.current.scrollHeight, behavior: "smooth" });
  }, [items, pending]);

  const ask = (p: Prompt, display = p.label) => {
    send(p.text, { hint: p.hint, display });
    composer.current?.focus();
  };

  const onComposerKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send(draft, { fromComposer: true });
    }
  };

  const support = session?.utility_ctas.find((c) => c.destination_id === "support");
  const privacy = session?.utility_ctas.find((c) => c.destination_id === "privacy_notice");

  // Once a conversation starts the page becomes the chat: sidebar plus a
  // full-height transcript with the composer pinned below (the landing
  // content returns with "New conversation").
  const chatting = items.length > 0 || pending !== null;

  // Fill exactly the viewport under the site's sticky header while chatting,
  // with no site footer below: the page itself does not scroll.
  const [headerH, setHeaderH] = useState(81);
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const sync = () => setHeaderH(Math.round(header.getBoundingClientRect().height));
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (chatting) {
      root.dataset.ztiChat = "";
      window.scrollTo({ top: 0 });
    } else delete root.dataset.ztiChat;
    return () => {
      delete root.dataset.ztiChat;
    };
  }, [chatting]);

  const unavailableBox =
    state === "unavailable" ? (
      <div className="rounded-xl bg-taxxon-porcelain p-4 text-sm ring-1 ring-black/10">
        <p className="font-semibold">{UNAVAILABLE}</p>
        <p className="mt-1">
          Human support is available via the <a href={SUPPORT_FALLBACK} className={`underline ${focusRing}`}>contact form</a> on this website.
        </p>
        <button type="button" onClick={() => void startSession()} className={`mt-3 ${chip}`}>Try again</button>
      </div>
    ) : null;

  const messages = (
    <>
      {items.map((item, index) => {
        switch (item.kind) {
          case "visitor":
            return (
              <div key={item.id} className="taxxon-enter flex items-start justify-end gap-3">
                <p className="max-w-[80%] rounded-2xl bg-[#ece8fb] px-4 py-3 text-[15px] whitespace-pre-wrap text-[#2a1f4a]">
                  <span className="sr-only">You said: </span>
                  {item.text}
                </p>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ecebee] text-taxxon-graphite/70" aria-hidden="true">
                  <User className="h-5 w-5" />
                </span>
              </div>
            );
          case "note":
            return <p key={item.id} className="text-center text-xs text-taxxon-graphite/80">{item.text}</p>;
          case "error":
            return (
              <div key={item.id} role="alert" className="rounded-xl border border-[#ef4444]/40 bg-white p-3 text-sm">
                <p>{item.text}</p>
                {item.retry && session ? (
                  <button type="button" className={`mt-2 ${chip}`} disabled={pending !== null} onClick={() => chat.retry(item.retry!)}>Retry</button>
                ) : null}
              </div>
            );
          case "assistant":
            return (
              <div key={item.id} className="flex items-start gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element -- the official favicon, served as-is */}
                <img src="/icon.svg" alt="" width={40} height={40} className="mt-1 h-10 w-10 shrink-0 rounded-xl" />
                <TaxxonAnswer
                  r={item.response}
                  chip={chip}
                  focusRing={focusRing}
                  busy={pending !== null}
                  answered={items.slice(index + 1).some((later) => later.kind === "assistant")}
                  reviewing={reviewCta === item.response.response_id}
                  onReview={(v) => setReviewCta(v ? item.response.response_id : null)}
                  onOption={chat.choose}
                  onFollowUp={(q) => send(q)}
                  className="min-w-0 flex-1 rounded-2xl bg-white p-4 text-[15px] shadow-sm md:p-5"
                />
              </div>
            );
        }
      })}
      {pending ? (
        <div className="flex items-center gap-3 pl-[52px] text-sm text-taxxon-graphite/90">
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-taxxon-copper motion-safe:animate-pulse" />
            <span className="h-2 w-2 rounded-full bg-taxxon-copper motion-safe:animate-pulse [animation-delay:150ms]" />
            <span className="h-2 w-2 rounded-full bg-taxxon-copper motion-safe:animate-pulse [animation-delay:300ms]" />
          </span>
          <span>{pending.coverage ? "Checking approved coverage information…" : "ZoikoTax Intelligence is responding…"}</span>
          <button type="button" onClick={chat.cancel} className={`ml-auto text-xs font-semibold text-taxxon-aubergine underline ${focusRing}`}>Cancel</button>
        </div>
      ) : null}
    </>
  );

  const composerForm = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send(draft, { fromComposer: true });
      }}
    >
      <div className="flex items-end gap-2 rounded-3xl border border-black/15 bg-white py-1.5 pr-1.5 pl-5 shadow-sm focus-within:border-taxxon-aubergine/50 focus-within:ring-2 focus-within:ring-taxxon-aubergine/15">
        <label htmlFor="zti-composer" className="sr-only">Ask about telecom taxes, fees, or obligations</label>
        <textarea
          id="zti-composer"
          ref={composer}
          rows={1}
          value={draft}
          maxLength={MAX_CHARS}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onComposerKey}
          disabled={state !== "ready"}
          placeholder={chatting ? "Ask a follow-up…" : "Ask about telecom taxes, fees, or obligations…"}
          aria-describedby="zti-composer-hint"
          className="max-h-32 min-h-10 flex-1 resize-none self-center bg-transparent py-2 text-base leading-snug placeholder:text-taxxon-graphite/55 focus:outline-none md:text-[15px]"
        />
        <button
          type="submit"
          aria-label="Send"
          disabled={state !== "ready" || pending !== null || draft.trim() === ""}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c2702f] to-[#d98744] text-white shadow disabled:opacity-40 ${focusRing}`}
        >
          <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
      <p id="zti-composer-hint" className="sr-only">Enter to send, Shift+Enter for a new line.</p>
    </form>
  );

  const footerLine = (
    <>
      <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-taxxon-graphite/75">
        <span>General information only. Confirm applicable rules and effective dates before acting.</span>
        {lastResponse && report === "closed" ? (
          <button type="button" onClick={() => setReport("open")} className={`font-semibold text-taxxon-aubergine underline ${focusRing}`}>Report an answer</button>
        ) : null}
        {privacy ? <a href={privacy.url} className={`font-semibold text-taxxon-aubergine underline ${focusRing}`}>Privacy</a> : null}
        <span>
          Human support via <a href={support?.url ?? SUPPORT_FALLBACK} className={`underline ${focusRing}`}>contact form</a>.
        </span>
      </div>
      {report === "open" ? (
        <div className="mt-2 flex flex-wrap justify-center gap-1.5" role="group" aria-label="What is wrong with the last answer?">
          {(["incorrect", "outdated", "unclear", "unsafe", "other"] as const).map((r) => (
            <button key={r} type="button" className={`${chip} min-h-9 py-1 text-xs capitalize`} onClick={() => void sendReport(r)}>{r}</button>
          ))}
          <button type="button" className={`text-xs underline ${focusRing}`} onClick={() => setReport("closed")}>Cancel</button>
        </div>
      ) : null}
      {report === "sent" ? <p className="mt-1 text-center text-xs" role="status">Thanks. Your report was recorded against this answer only.</p> : null}
    </>
  );

  const startNew = () => {
    setTopic(null);
    void newChat();
  };

  return (
    <div
      className={`bg-[#f6f4f9] text-taxxon-graphite ${
        chatting ? "flex flex-col overflow-hidden lg:grid lg:grid-cols-[268px_minmax(0,1fr)]" : "lg:grid lg:min-h-[calc(100vh-81px)] lg:grid-cols-[268px_minmax(0,1fr)]"
      }`}
      style={chatting ? { height: `calc(100dvh - ${headerH}px)` } : undefined}
    >
      {/* Sidebar */}
      <aside
        className={`flex flex-col bg-[#24123f] text-white ${chatting ? "lg:h-full lg:overflow-y-auto" : "lg:sticky lg:top-[81px] lg:h-[calc(100vh-81px)] lg:overflow-y-auto"}`}
        aria-label="ZoikoTax Intelligence"
      >
        {/* While chatting on small screens, a compact bar keeps the conversation in view. */}
        {chatting ? (
          <div className="flex items-center gap-3 px-4 py-2.5 lg:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element -- the official favicon, served as-is */}
            <img src="/icon.svg" alt="" width={32} height={32} className="h-8 w-8 rounded-lg" />
            <p className="flex-1 truncate font-bold">ZoikoTax Intelligence</p>
            <button type="button" onClick={startNew} className={`flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#c2702f] to-[#d98744] px-3 py-2 text-sm font-semibold ${focusRing}`}>
              <Plus aria-hidden="true" className="h-4 w-4" /> New
            </button>
          </div>
        ) : null}

        <div className={chatting ? "max-lg:hidden" : undefined}>
          <div className="flex items-center gap-3 px-5 pt-6 pb-5 lg:px-6 lg:pt-8">
            {/* eslint-disable-next-line @next/next/no-img-element -- the official favicon, served as-is */}
            <img src="/icon.svg" alt="" width={64} height={64} className="h-14 w-14 rounded-2xl shadow-lg lg:h-16 lg:w-16" />
            <div>
              <p className="text-xl leading-tight font-bold">ZoikoTax Intelligence</p>
              <p className="text-sm text-white/70">Public assistant</p>
            </div>
          </div>

          <div className="px-5">
            <button
              type="button"
              onClick={startNew}
              className={`flex w-full items-center gap-3 rounded-xl border border-white/20 bg-gradient-to-r from-[#c2702f] to-[#d98744] px-4 py-3 text-base font-semibold shadow-md hover:brightness-105 ${focusRing}`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/25"><Plus aria-hidden="true" className="h-4 w-4" /></span>
              New conversation
            </button>
          </div>

          <nav aria-label="Topics" className="mt-4 flex gap-2 overflow-x-auto px-5 pb-3 lg:mt-6 lg:flex-col lg:gap-1.5 lg:overflow-visible">
            {TOPICS.map((t) => {
              const on = topic === t.label;
              return (
                <button
                  key={t.label}
                  type="button"
                  disabled={!ready}
                  aria-current={on ? "true" : undefined}
                  onClick={() => {
                    setTopic(t.label);
                    ask(t);
                  }}
                  className={`flex shrink-0 items-center gap-3.5 rounded-xl px-4 py-3 text-left text-[15px] transition-colors disabled:opacity-60 lg:w-full ${
                    on ? "bg-white/12 ring-1 ring-white/25 shadow-[inset_3px_0_0_#a78bfa]" : "hover:bg-white/8"
                  } ${focusRing}`}
                >
                  <t.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-white/85" />
                  {t.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto hidden space-y-1 border-t border-white/15 px-5 pt-4 lg:block">
          <Link href="/resources-faq" className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/85 hover:text-white ${focusRing}`}>
            <CircleHelp aria-hidden="true" className="h-5 w-5" /> Help &amp; resources
          </Link>
          <Link href="/about-us" className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/85 hover:text-white ${focusRing}`}>
            <Info aria-hidden="true" className="h-5 w-5" /> About ZoikoTax
          </Link>
        </div>
        <div className="hidden p-5 lg:block">
          <button
            type="button"
            onClick={() => setNotice((v) => !v)}
            aria-expanded={notice}
            className={`flex w-full items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-left ${focusRing}`}
          >
            <Globe aria-hidden="true" className="h-6 w-6 shrink-0" />
            <span className="flex-1">
              <span className="block text-sm font-semibold">Public assistant</span>
              <span className="block text-xs text-white/70">General information only</span>
            </span>
            <ChevronRight aria-hidden="true" className={`h-4 w-4 transition-transform ${notice ? "rotate-90" : ""}`} />
          </button>
          {notice ? <p className="mt-2 text-xs leading-relaxed text-white/80">{DATA_NOTICE}</p> : null}
        </div>
      </aside>

      <p className="sr-only" aria-live="polite" aria-atomic="true">{announce}</p>

      {chatting ? (
        <section className="flex min-h-0 min-w-0 flex-1 flex-col" aria-label="Conversation with ZoikoTax Intelligence">
          <div ref={transcript} role="log" aria-label="Conversation" className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div className="mx-auto w-full max-w-3xl space-y-5 px-4 py-6 md:px-6 md:py-8">
              {messages}
              {unavailableBox}
            </div>
          </div>
          <div className="border-t border-black/5 bg-[#f6f4f9]" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
            <div className="mx-auto w-full max-w-3xl px-4 pt-3 pb-3 md:px-6">
              {composerForm}
              {footerLine}
            </div>
          </div>
        </section>
      ) : (
        <div className="min-w-0">
          {/* Hero */}
          <section className="relative overflow-hidden border-b border-black/5 bg-white px-5 py-7 lg:px-10" aria-labelledby="zti-title">
            <TowerArt />
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-bold tracking-[0.14em] uppercase">ZoikoTax Intelligence</p>
              <h1 id="zti-title" className="mt-2 text-3xl leading-tight font-extrabold tracking-tight text-[#1f1235] md:text-[2.6rem]">
                Answers for a complex tax world.
              </h1>
              <p className="mt-1 text-lg text-taxxon-graphite/80 md:text-2xl">Telecom tax clarity, across jurisdictions.</p>
            </div>
            <ol className="absolute top-6 right-8 z-10 hidden space-y-0.5 rounded-lg bg-white/70 px-3 py-2 text-sm backdrop-blur-sm xl:block" aria-label="Fiscal pipeline">
              {STAGES.map((s, i) => (
                <li key={s} className={i === STAGES.length - 1 ? "border-b-2 border-taxxon-copper pb-1 font-medium" : undefined}>
                  {s}
                  {i < STAGES.length - 1 ? <span aria-hidden="true"> →</span> : null}
                </li>
              ))}
            </ol>
          </section>

          <div className="grid gap-5 p-4 md:p-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Welcome, before the first question */}
            <section className="flex min-w-0 flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-7" aria-label="Start a conversation with ZoikoTax Intelligence">
              <div className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element -- the official favicon, served as-is */}
                <img src="/icon.svg" alt="" width={52} height={52} className="h-[52px] w-[52px] rounded-xl" />
                <div>
                  <h2 className="text-lg font-bold text-[#1f1235]">Welcome to ZoikoTax Intelligence</h2>
                  <p className="text-[15px] text-taxxon-graphite/80">Explore telecom taxes, fees, and obligations with clear, source-aware guidance.</p>
                  {session?.preview_content ? (
                    <p className="mt-2 rounded bg-[#fbefdf] px-2 py-1 text-xs font-medium text-[#7a470d]">Preview environment: draft content shown here is not approved for publication.</p>
                  ) : null}
                </div>
              </div>

              <div ref={transcript} className="mt-5">{unavailableBox}</div>

              {state !== "unavailable" ? (
                <ol className="mt-2 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="How guidance is approached">
                  {STEPS.map((s, i) => (
                    <li key={s.title} className="relative rounded-xl border border-black/10 bg-white p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ece8fb] text-[#4b3a8c]" aria-hidden="true">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <p className="mt-3 font-bold text-[#1f1235]">{s.title}</p>
                      <p className="mt-0.5 text-sm text-taxxon-graphite/80">{s.body}</p>
                      {i < STEPS.length - 1 ? (
                        <ArrowRight aria-hidden="true" className="absolute top-1/2 -right-3 hidden h-4 w-4 -translate-y-1/2 text-taxxon-graphite/60 xl:block" />
                      ) : null}
                    </li>
                  ))}
                </ol>
              ) : null}

              <p className="mt-6 flex items-center gap-2 font-semibold text-[#1f1235]">
                <MapPin aria-hidden="true" className="h-5 w-5 text-taxxon-copper" />
                Choose a market to explore applicable tax and regulatory considerations.
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {MARKETS.map((m) => (
                  <button
                    key={m.label}
                    type="button"
                    disabled={!ready}
                    onClick={() => send(m.text, { hint: "coverage", display: m.label })}
                    className={`flex min-h-11 items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:border-taxxon-aubergine/40 disabled:opacity-60 ${focusRing}`}
                  >
                    <Flag kind={m.flag} />
                    {m.label}
                    <ArrowRight aria-hidden="true" className="h-4 w-4 text-taxxon-graphite/60" />
                  </button>
                ))}
                <Link
                  href="/coverage-overview"
                  className={`flex min-h-11 items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:border-taxxon-aubergine/40 ${focusRing}`}
                >
                  <ChartColumn aria-hidden="true" className="h-5 w-5 text-[#5b47c9]" />
                  Compare markets
                  <ArrowRight aria-hidden="true" className="h-4 w-4 text-taxxon-graphite/60" />
                </Link>
              </div>

              <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 border-b border-black/10 pb-5 text-sm text-taxxon-graphite/80" aria-label="About these answers">
                <li className="flex items-center gap-2"><BookOpen aria-hidden="true" className="h-4 w-4" /> Public guidance</li>
                <li className="flex items-center gap-2"><ShieldCheck aria-hidden="true" className="h-4 w-4" /> Jurisdiction-specific</li>
                <li className="flex items-center gap-2"><Database aria-hidden="true" className="h-4 w-4" /> Source-aware</li>
              </ul>

              <div className="mt-5">{composerForm}</div>

              <div className="mt-4 flex flex-wrap justify-center gap-2.5" role="group" aria-label="Suggested questions">
                {QUESTIONS.map((q) => (
                  <button
                    key={q.chip}
                    type="button"
                    disabled={!ready}
                    onClick={() => ask(q, q.label)}
                    className={`flex min-h-10 items-center gap-2 rounded-full border border-[#c9bff3] bg-[#f7f5fe] px-5 py-1.5 text-sm font-medium text-[#3d2f86] hover:bg-[#efebfd] disabled:opacity-60 ${focusRing}`}
                  >
                    {q.chip}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </button>
                ))}
              </div>

              {footerLine}
            </section>

            {/* Right rail */}
            <div className="space-y-5">
              <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5" aria-labelledby="zti-built">
                <h2 id="zti-built" className="text-xl leading-snug font-bold text-[#1f1235]">Built for complex communications</h2>
                <p className="mt-2 text-[15px] text-taxxon-graphite/80">
                  Global tax and regulatory intelligence for telecom, broadband, IoT and digital communications services.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {FEATURES.map((f) => (
                    <li key={f.title} className="flex gap-3 rounded-xl border border-black/10 p-3.5">
                      <f.icon aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-taxxon-copper" />
                      <span>
                        <span className="block text-sm font-bold text-[#1f1235]">{f.title}</span>
                        <span className="block text-sm text-taxxon-graphite/80">{f.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/coverage-overview" className={`mt-4 inline-flex items-center gap-2 font-semibold text-taxxon-copper hover:underline ${focusRing}`}>
                  Explore coverage <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </section>

              <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5" aria-labelledby="zti-common">
                <h2 id="zti-common" className="text-xl font-bold text-[#1f1235]">Common questions</h2>
                <ul className="mt-2 divide-y divide-black/10">
                  {QUESTIONS.map((q) => (
                    <li key={q.label}>
                      <button
                        type="button"
                        disabled={!ready}
                        onClick={() => ask(q, q.label)}
                        className={`flex w-full items-center justify-between gap-3 py-3 text-left text-[15px] text-taxxon-graphite/90 hover:text-taxxon-aubergine disabled:opacity-60 ${focusRing}`}
                      >
                        {q.label}
                        <ChevronRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                      </button>
                    </li>
                  ))}
                </ul>
                <Link href="/resources-faq" className={`mt-3 inline-flex items-center gap-2 font-semibold text-taxxon-copper hover:underline ${focusRing}`}>
                  View all questions <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** A lattice mast against a dusk sky, behind two glass panes. Decorative. */
function TowerArt() {
  return (
    <svg className="pointer-events-none absolute inset-y-0 right-0 h-full w-[70%] max-md:opacity-50 md:w-[58%]" viewBox="0 0 520 170" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="zti-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5a4a9c" />
          <stop offset=".45" stopColor="#b77aa0" />
          <stop offset=".75" stopColor="#f0a36f" />
          <stop offset="1" stopColor="#f7d2a8" />
        </linearGradient>
        <linearGradient id="zti-pane" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".75" />
          <stop offset="1" stopColor="#ffffff" stopOpacity=".1" />
        </linearGradient>
        <linearGradient id="zti-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="1" />
          <stop offset=".35" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="160,0 520,0 520,170 60,170" fill="url(#zti-sky)" />
      <polygon points="120,170 230,0 300,0 190,170" fill="url(#zti-pane)" />
      <polygon points="215,170 325,0 360,0 250,170" fill="#ffffff" opacity=".35" />
      <g stroke="#2a1f4a" strokeWidth="1.6" fill="none" opacity=".85">
        <path d="M370 170 L392 22 L414 170" />
        <path d="M376 130 L408 130 M380 100 L404 100 M384 72 L400 72 M388 46 L396 46" />
        <path d="M376 130 L404 100 L380 100 L400 72 L384 72 L396 46" />
        <path d="M408 130 L380 100 M404 100 L384 72 M400 72 L388 46" />
        <path d="M392 22 L392 8" />
        <rect x="380" y="30" width="6" height="14" fill="#2a1f4a" />
        <rect x="398" y="30" width="6" height="14" fill="#2a1f4a" />
        <rect x="379" y="54" width="5" height="11" fill="#2a1f4a" />
        <rect x="400" y="54" width="5" height="11" fill="#2a1f4a" />
      </g>
      <circle cx="392" cy="8" r="2.4" fill="#e0533a" />
      <rect x="0" y="0" width="520" height="170" fill="url(#zti-fade)" />
    </svg>
  );
}

/** Simplified round flags. Decorative: the label names the market. */
function Flag({ kind }: { kind: "us" | "uk" | "eu" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10" aria-hidden="true">
      <clipPath id={`zti-flag-${kind}`}><circle cx="12" cy="12" r="12" /></clipPath>
      <g clipPath={`url(#zti-flag-${kind})`}>
        {kind === "us" ? (
          <>
            <rect width="24" height="24" fill="#fff" />
            {[0, 2, 4, 6, 8, 10, 12].map((i) => <rect key={i} y={i * (24 / 13)} width="24" height={24 / 13} fill="#b22234" />)}
            <rect width="11" height="13" fill="#3c3b6e" />
          </>
        ) : kind === "uk" ? (
          <>
            <rect width="24" height="24" fill="#012169" />
            <path d="M0 0 24 24M24 0 0 24" stroke="#fff" strokeWidth="4.5" />
            <path d="M0 0 24 24M24 0 0 24" stroke="#c8102e" strokeWidth="1.6" />
            <path d="M12 0v24M0 12h24" stroke="#fff" strokeWidth="6.5" />
            <path d="M12 0v24M0 12h24" stroke="#c8102e" strokeWidth="3.5" />
          </>
        ) : (
          <>
            <rect width="24" height="24" fill="#003399" />
            {Array.from({ length: 12 }, (_, i) => {
              // Rounded so server and browser render identical attributes.
              const a = (i * Math.PI) / 6;
              const at = (v: number) => Math.round((12 + 6.5 * v) * 100) / 100;
              return <circle key={i} cx={at(Math.cos(a))} cy={at(Math.sin(a))} r="1.05" fill="#ffcc00" />;
            })}
          </>
        )}
      </g>
    </svg>
  );
}
