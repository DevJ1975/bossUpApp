"use client";

import { useState } from "react";
import { Check, Download } from "./icons";
import { site } from "@/lib/site.config";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-fg placeholder:text-muted/60 focus:border-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors";

function triggerDownload() {
  const a = document.createElement("a");
  a.href = site.brochurePath;
  a.download = "BossUp-Overview.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", organization: "" });

  function update(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      triggerDownload();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass flex flex-col items-start gap-3 rounded-2xl p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-brand">
          <Check size={24} />
        </span>
        <h3 className="text-xl font-semibold text-fg">Your download is starting.</h3>
        <p className="text-muted">
          Thanks, {form.name || "there"} — we&apos;ll follow up at{" "}
          <span className="text-fg">{form.email}</span>. If the file didn&apos;t
          open,{" "}
          <a className="text-brand underline" href={site.brochurePath} download>
            download the overview here
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          className={inputClass}
          placeholder="Full name"
          value={form.name}
          onChange={update("name")}
          autoComplete="name"
        />
        <input
          required
          type="email"
          className={inputClass}
          placeholder="Work email"
          value={form.email}
          onChange={update("email")}
          autoComplete="email"
        />
      </div>
      <input
        className={inputClass}
        placeholder="Organization (e.g. ATL Airport)"
        value={form.organization}
        onChange={update("organization")}
        autoComplete="organization"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold tracking-tight text-ink shadow-[0_10px_40px_-10px_rgba(255,176,32,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          "Sending…"
        ) : (
          <>
            Get the overview
            <Download size={18} />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-300">
          Something went wrong. Email us at{" "}
          <a className="underline" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
          .
        </p>
      )}
      <p className="text-xs text-muted/70">
        By submitting you agree to be contacted about BossUp. No spam.
      </p>
    </form>
  );
}
