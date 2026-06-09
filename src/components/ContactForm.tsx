"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to send message. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-tan/30 bg-white/60 p-8 text-center">
        <p className="text-sm leading-relaxed text-charcoal">
          Thanks for submitting! We will get back to you shortly!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs tracking-wider text-muted uppercase">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={loading}
          className="w-full border border-tan/30 bg-white/80 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-tan-dark disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs tracking-wider text-muted uppercase">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={loading}
          className="w-full border border-tan/30 bg-white/80 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-tan-dark disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs tracking-wider text-muted uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={loading}
          className="w-full resize-none border border-tan/30 bg-white/80 px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-tan-dark disabled:opacity-60"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-charcoal px-6 py-3.5 text-xs tracking-[0.25em] text-white uppercase transition-colors hover:bg-tan-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
