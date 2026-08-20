import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { submitContact } from "@/lib/contact.functions";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Connect — ZMEJKA | Mantas Zmejauskas" },
      {
        name: "description",
        content:
          "Get in touch with ZMEJKA for brand identity, motion graphics, packaging, printing and visual design projects. Based in Vilnius, Lithuania.",
      },
      { property: "og:title", content: "Connect — ZMEJKA" },
      {
        property: "og:description",
        content: "Start a conversation about identity, motion, packaging or visual design.",
      },
    ],
  }),
  component: Contact,
});

const services = ["Brand Identity", "Motion Graphics", "Packaging", "Printing", "Visual Design"];

const links = [
  { label: "Email", value: "mzmejauskas@gmail.com", href: "mailto:mzmejauskas@gmail.com" },
  {
    label: "Location",
    value: "Vilnius, Lithuania",
    href: "https://www.google.com/maps/place/Vilnius",
  },
  { label: "Behance", value: "behance.net/zmejka", href: "https://www.behance.net/zmejka/" },
  {
    label: "LinkedIn",
    value: "mantas-zmejauskas",
    href: "https://www.linkedin.com/in/mantas-zmejauskas/",
  },
  { label: "Instagram", value: "@zmejkart", href: "https://www.instagram.com/zmejkart/" },
  { label: "Facebook", value: "mzmejka", href: "https://www.facebook.com/mzmejka/" },
  { label: "YouTube", value: "@zmejkart", href: "https://www.youtube.com/@zmejkart" },
];

function Icon({ name }: { name: string }) {
  const common = { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24" };
  switch (name) {
    case "Email":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M2 5h20v14H2V5Zm2.4 2 7.6 5.7L19.6 7H4.4Z" />
        </svg>
      );
    case "Location":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
        </svg>
      );
    case "Behance":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M9.3 11.2c.9-.4 1.4-1.1 1.4-2.2 0-2-1.5-2.8-3.4-2.8H1v11.6h6.5c2.1 0 3.9-1 3.9-3.3 0-1.5-.7-2.7-2.1-3.3ZM3.8 8.3h2.6c.9 0 1.6.3 1.6 1.2s-.6 1.3-1.6 1.3H3.8V8.3Zm2.9 7.2H3.8v-3h3c1 0 1.8.4 1.8 1.5s-.8 1.5-1.9 1.5ZM18.6 8.9c-2.8 0-4.6 2-4.6 4.6 0 2.7 1.7 4.6 4.6 4.6 2.2 0 3.7-1 4.3-3h-2.4c-.3.7-.9 1.1-1.8 1.1-1.3 0-2-.8-2.1-2.1H23c.2-3.1-1.5-5.2-4.4-5.2Zm-2 3.7c.2-1.1.8-1.8 2-1.8s1.8.7 1.9 1.8h-3.9ZM14.8 6.6h5.6v1.3h-5.6z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Zm6.9-11.1a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6c-.3 0-1.3-.13-2.45-.13-2.4 0-4.05 1.47-4.05 4.17v2.26H7.5V14h2.7v8h3.3Z" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path d="M21.6 7.2s-.2-1.4-.8-2c-.75-.8-1.6-.8-2-.85C16 4.2 12 4.2 12 4.2s-4 0-6.8.15c-.4.05-1.25.05-2 .85-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.5v1.6c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.75.8 1.75.8 2.2.9 1.6.15 6.8.2 6.8.2s4 0 6.8-.2c.4-.05 1.25-.05 2-.85.6-.6.8-2 .8-2s.2-1.65.2-3.3v-1.6c0-1.7-.2-3.35-.2-3.35ZM10 14.6V9.1l5.2 2.75L10 14.6Z" />
        </svg>
      );
  }
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [picked, setPicked] = useState<string[]>([]);
  const send = useServerFn(submitContact);

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <SiteLayout>
      <section className="py-20 sm:py-28">
        <div className="shell rise">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 uppercase">Connect</h1>
          <p className="mt-6 max-w-[56ch] text-[1.15rem] text-muted-foreground">
            I&apos;d love to hear from you. Whether you have questions, ideas, don&apos;t hesitate
            to reach out.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)]">
          <form
            className="space-y-5"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              setStatus("submitting");
              setError("");
              try {
                await send({
                  data: {
                    firstName: String(fd.get("first") ?? ""),
                    lastName: String(fd.get("last") ?? ""),
                    email: String(fd.get("email") ?? ""),
                    message: String(fd.get("message") ?? ""),
                    services: picked,
                    newsletter: fd.get("newsletter") === "on",
                  },
                });
                form.reset();
                setPicked([]);
                setStatus("done");
              } catch (err) {
                setStatus("error");
                setError(
                  err instanceof Error
                    ? err.message
                    : "Something went wrong. Please email me directly.",
                );
              }
            }}
          >

            <div className="grid gap-[10px] sm:grid-cols-2">
              <Field id="first" label="First Name" required autoComplete="given-name" />
              <Field id="last" label="Last Name" required autoComplete="family-name" />
            </div>
            <Field id="email" label="Email" required type="email" autoComplete="email" />

            <div>
              <label htmlFor="message" className="mb-1 block text-sm">
                Message <span className="text-muted-foreground">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                maxLength={2000}

                required
                rows={5}
                className="field !rounded-3xl"
                placeholder="Tell me about the project"
              />
            </div>

            <fieldset className="pt-2">
              <legend className="eyebrow mb-4">What services are you looking for?</legend>
              <div className="flex flex-wrap gap-3">
                {services.map((s) => (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={picked.includes(s)}
                    onClick={() => toggle(s)}
                    className={`rounded-full border-2 px-4 py-2 text-sm transition-colors ${
                      picked.includes(s)
                        ? "border-foreground bg-foreground text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
              <input type="checkbox" name="newsletter" className="h-4 w-4 accent-white" />
              Sign up for news and updates
            </label>

            <button
              type="submit"
              className="btn-secondary mt-4 disabled:opacity-60"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Submitting"
                : status === "done"
                  ? "Sent — Thank You"
                  : "Submit"}
            </button>
            <p aria-live="polite" role="status" className="text-sm text-muted-foreground">
              {status === "done" ? "Thanks! I'll reply to your email shortly." : ""}
              {status === "error" ? error : ""}
            </p>

          </form>

          <aside>
            <p className="eyebrow">Direct Channels</p>
            <ul className="mt-6 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    className="flex items-center gap-4 rounded-2xl border border-border bg-surface px-4 py-3 transition-colors hover:border-foreground"
                  >
                    <span className="shrink-0">
                      <Icon name={l.label} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-[0.14em] uppercase text-muted-foreground">
                        {l.label}
                      </span>
                      <span className="block truncate">{l.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  id,
  label,
  required,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm">
        {label} {required && <span className="text-muted-foreground">(required)</span>}
      </label>
      <input
        id={id}
        name={id}
        maxLength={type === "email" ? 255 : 80}

        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field"
        placeholder={label}
      />
    </div>
  );
}
