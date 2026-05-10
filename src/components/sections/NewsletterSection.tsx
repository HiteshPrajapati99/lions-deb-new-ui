"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/social-links";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const CONTACT_API = "https://api.thelionsden.co.in/contact/email-send";

const inputClass =
  "h-11 w-full rounded-[10px] border-gray-200 bg-white text-gray-900 shadow-sm placeholder:text-gray-500 focus-visible:border-[#C5A059] focus-visible:ring-[#C5A059]/35";

const textareaClass =
  "min-h-[7rem] w-full resize-y rounded-[10px] border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm placeholder:text-gray-500 outline-none focus-visible:border-[#C5A059] focus-visible:ring-3 focus-visible:ring-[#C5A059]/35";

type ApiResponse = { s?: boolean; m?: string };

export default function NewsletterSection() {
  const [form, setForm] = useState({
    name: "",
    p_number: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      const res = await fetch(CONTACT_API, {
        method: "POST",
        body,
      });
      const data = (await res.json()) as ApiResponse;

      if (data.s) {
        setStatus("success");
        setForm({
          name: "",
          p_number: "",
          email: "",
          subject: "",
          message: "",
        });
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
      className="relative overflow-hidden bg-[#0B1B32] py-20"
    >
      <div
        className="pointer-events-none absolute left-[-20%] top-[-40%] h-[min(90vw,520px)] w-[min(90vw,520px)] rounded-full bg-[#F26522]/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-15%] bottom-[-35%] h-[min(85vw,480px)] w-[min(85vw,480px)] rounded-full bg-[#C5A059]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,50,0)_0%,rgba(11,27,50,0.55)_45%,rgba(11,27,50,0.92)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.25rem] border border-gray-100/90 bg-white p-6 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] md:p-10 lg:p-12">
          <h2
            className={cn(
              playfair.className,
              "mb-3 text-center text-3xl font-semibold tracking-tight text-[#0B1B32] md:text-4xl",
            )}
          >
            Contact Us
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-gray-600 md:text-base">
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days. We will be happy to
            answer your questions.
          </p>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <form className="flex-1 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-gray-700"
                  >
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="text-xs font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="contact-phone"
                    name="p_number"
                    type="tel"
                    required
                    value={form.p_number}
                    onChange={handleChange}
                    className={inputClass}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold text-gray-700"
                  >
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-semibold text-gray-700"
                  >
                    Subject
                  </label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={textareaClass}
                />
              </div>

              {status === "success" ? (
                <p className="rounded-lg border border-emerald-200/80 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">
                  Thank you for reaching out to us.
                </p>
              ) : null}
              {status === "error" && errorMessage ? (
                <p className="rounded-lg border border-red-300/50 bg-red-950/30 px-4 py-3 text-sm font-medium text-red-100">
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-linear-to-r from-[#CB912E] to-[#F5BD1E] px-8 text-sm font-bold text-white shadow-md transition-colors hover:from-[#b88228] hover:to-[#e0ad1c] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>

            <aside className="flex w-full flex-col gap-4 lg:max-w-md lg:shrink-0">
              <ContactCard
                icon={
                  <MapPin
                    className="size-5 shrink-0 text-[#C5A059]"
                    aria-hidden
                  />
                }
                title="Registered Office Address"
                body="Super Market, Shop No. 11, ST Bus Stand Side, Morbi MDG, Morbi, Rajkot, Gujarat, India-363641"
              />
              <ContactCard
                icon={
                  <Mail
                    className="size-5 shrink-0 text-[#C5A059]"
                    aria-hidden
                  />
                }
                title="OUR MAILBOX:"
                body="paritosh@thelionsden.co.in"
              />
              <ContactCard
                icon={
                  <Phone
                    className="size-5 shrink-0 text-[#C5A059]"
                    aria-hidden
                  />
                }
                title="OUR PHONE:"
                body="+91 90235 34224, +91 83205 35713"
              />

              <div className="mt-1 flex flex-wrap items-center justify-center gap-3 border-t border-gray-200 pt-6 lg:justify-start">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 text-[#0B1B32] shadow-sm transition-transform hover:scale-105 hover:border-[#C5A059]/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <Icon className="size-5 shrink-0" aria-hidden />
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 shadow-sm">
      <div className="flex gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#C5A059]/12 ring-1 ring-[#C5A059]/20">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-[#0B1B32]">{title}</p>
          <p className="mt-1 text-sm leading-snug text-gray-600">{body}</p>
        </div>
      </div>
    </div>
  );
}
