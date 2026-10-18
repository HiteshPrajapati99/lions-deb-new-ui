"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/social-links";

const CONTACT_API = "https://api.thelionsden.co.in/contact/email-send";

const SUBJECT_OPTIONS = [
  "General Enquiry",
  "Apply to the Show",
  "Partnership / Sponsorship",
  "Media & Press",
  "Other",
];

const fieldClass =
  "w-full rounded-md border border-white/10 bg-[#16263A] px-3.5 text-sm text-white placeholder:text-gray-400 outline-none transition-colors focus-visible:border-[#E8B04F]/70 focus-visible:ring-2 focus-visible:ring-[#E8B04F]/25";

const labelClass = "mb-1.5 block text-sm font-medium text-white";

type ApiResponse = { s?: boolean; m?: string };

const EMPTY_FORM = {
  name: "",
  p_number: "",
  email: "",
  subject: "",
  message: "",
};

export default function NewsletterSection() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    if (status === "success") setStatus("idle");
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const body = new FormData();
    body.append("name", form.name);
    body.append("email", form.email);
    body.append("phone", form.p_number);
    body.append("subject", form.subject);
    body.append("message", form.message);

    try {
      const res = await fetch(CONTACT_API, { method: "POST", body });
      const data = (await res.json()) as ApiResponse;

      if (data.s) {
        setStatus("success");
        setForm(EMPTY_FORM);
      } else {
        setStatus("error");
        setErrorMessage(data.m || "Server error!");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Could not reach the server. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1726] py-10 md:py-12"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6 text-center md:mb-8">
          <div className="mb-2 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#E8B04F]/70" aria-hidden />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#E8B04F] md:text-xs">
              Get in Touch
            </span>
            <span className="h-px w-12 bg-[#E8B04F]/70" aria-hidden />
          </div>
          <h2 className="font-playfair text-3xl font-bold tracking-tight text-white md:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
            Have a question, partnership idea or want to be part of the show?
            <br className="hidden sm:block" /> We&rsquo;d love to hear from
            you. Our team typically responds within 24 business hours.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-white/10 bg-[#0E1C2E] p-5 md:p-7">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
            {/* Form */}
            <form
              className="flex-1 space-y-4 lg:pr-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={cn(fieldClass, "h-10")}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="p_number"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.p_number}
                    onChange={handleChange}
                    className={cn(fieldClass, "h-10")}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={cn(fieldClass, "h-10")}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className={labelClass}>
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={cn(
                        fieldClass,
                        "h-10 cursor-pointer appearance-none pr-10",
                        !form.subject && "text-gray-400",
                      )}
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          className="bg-[#16263A] text-white"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-gray-300"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell us more about your enquiry..."
                  value={form.message}
                  onChange={handleChange}
                  className={cn(fieldClass, "min-h-[5rem] resize-y py-2.5")}
                />
              </div>

              {status === "success" ? (
                <p
                  role="status"
                  className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-200"
                >
                  Thank you for reaching out to us.
                </p>
              ) : null}
              {status === "error" && errorMessage ? (
                <p
                  role="alert"
                  className="rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-200"
                >
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-11 items-center justify-center gap-3 rounded-md bg-[#E8B04F] px-6 text-sm font-semibold text-[#0B1726] transition-colors hover:bg-[#F0BE62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B04F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E1C2E] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="size-4" aria-hidden />
                  </>
                )}
              </button>
            </form>

            {/* Contact details */}
            <aside className="flex w-full flex-col border-t border-white/10 pt-6 lg:max-w-[24rem] lg:shrink-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <ContactItem
                icon={<MapPin className="size-5" aria-hidden />}
                title="Registered Office Address"
              >
                Super Market, Shop No. 11, ST Bus Stand Side, Morbi MDG, Morbi,
                Rajkot, Gujarat, India – 363641
              </ContactItem>
              <ContactItem
                icon={<Mail className="size-5" aria-hidden />}
                title="Our Mailbox"
              >
                <a
                  href="mailto:paritosh@thelionsden.co.in"
                  className="transition-colors hover:text-[#E8B04F]"
                >
                  paritosh@thelionsden.co.in
                </a>
              </ContactItem>
              <ContactItem
                icon={<Phone className="size-5" aria-hidden />}
                title="Our Phone"
              >
                <a
                  href="tel:+919023534224"
                  className="transition-colors hover:text-[#E8B04F]"
                >
                  +91 90235 34224
                </a>
                <span className="mx-2">,</span>
                <a
                  href="tel:+918320535713"
                  className="transition-colors hover:text-[#E8B04F]"
                >
                  +91 83205 35713
                </a>
              </ContactItem>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <span className="mr-2 text-sm font-medium text-white">
                  Follow Us
                </span>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#E8B04F] hover:text-[#E8B04F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B04F]"
                    >
                      <Icon className="size-4 shrink-0" aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 border-b border-white/10 py-4 first:pt-0">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#E8B04F] [&_svg]:size-5">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-playfair text-base font-semibold text-white md:text-lg">
          {title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-gray-300">
          {children}
        </p>
      </div>
    </div>
  );
}
