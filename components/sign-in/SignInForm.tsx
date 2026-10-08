"use client";

import React, { useState } from "react";
import { ArrowRight, KeyRound, Mail } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function MicrosoftMark() {
  return (
    <span className="grid size-5 shrink-0 grid-cols-2 gap-0.5" aria-hidden="true">
      <span className="bg-[#F25022]" />
      <span className="bg-[#7FBA00]" />
      <span className="bg-[#00A4EF]" />
      <span className="bg-[#FBBC05]" />
    </span>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.81Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.92l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.95H1.27v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56v-3.1H1.27a12 12 0 0 0 0 10.76l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.44-3.44A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.27 6.62l4 3.1C6.22 6.88 8.87 4.77 12 4.77Z" />
    </svg>
  );
}

const PROVIDERS = [
  { id: "microsoft", label: "Continue with Microsoft", icon: <MicrosoftMark /> },
  { id: "google", label: "Continue with Google", icon: <GoogleMark /> },
  {
    id: "passkey",
    label: "Use a passkey",
    icon: <KeyRound className="size-5 shrink-0 text-[#211C24]" strokeWidth={2} aria-hidden="true" />,
  },
];

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Enter a valid work email address, like name@company.com.");
      return;
    }
    setError("");
    // Authentication is not connected yet; the identity provider handoff goes here.
  };

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <label htmlFor="sign-in-email" className="text-base font-semibold text-[#211C24]">
            Email address
          </label>
          <div
            className={`h-14 px-4 rounded-md bg-white border-2 flex items-center gap-3 transition-colors focus-within:border-[#A75930] ${
              error ? "border-[#EA4335]" : "border-[#5D5A5A]"
            }`}
          >
            <Mail className="size-5 shrink-0 text-[#706B74]" strokeWidth={1.5} aria-hidden="true" />
            <input
              id="sign-in-email"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "sign-in-email-error" : undefined}
              className="w-full min-w-0 bg-transparent text-base text-[#211C24] placeholder:text-[#706B74] outline-none"
            />
          </div>
          {error && (
            <p id="sign-in-email-error" role="alert" className="text-sm text-[#B3261E]">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="h-14 w-full rounded-md bg-[#A75930] text-base font-semibold text-white inline-flex items-center justify-center gap-1.5 transition-colors hover:bg-[#924d29] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A75930] cursor-pointer"
        >
          Continue
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4" role="separator" aria-label="or">
          <span className="h-px flex-1 bg-[#DCD8D5]" />
          <span className="text-xs text-[#706B74]" aria-hidden="true">
            or
          </span>
          <span className="h-px flex-1 bg-[#DCD8D5]" />
        </div>

        <div className="flex flex-col gap-3">
          {PROVIDERS.map((p) => (
            <button
              key={p.id}
              type="button"
              className="group h-14 w-full px-5 rounded-md border border-[#DCD8D5] bg-[#FAF9F6] flex items-center gap-4 text-left transition-colors hover:bg-white hover:border-[#706B74] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A75930] cursor-pointer"
            >
              {p.icon}
              <span className="flex-1 text-base font-semibold text-[#211C24]">{p.label}</span>
              <ArrowRight
                className="h-4 w-4 text-[#706B74] transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
