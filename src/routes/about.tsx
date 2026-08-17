import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import profile from "@/assets/Mantas_profilis.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ZMEJKA — Mantas Zmejauskas, Designer" },
      {
        name: "description",
        content:
          "Mantas Zmejauskas (ZMEJKA), a Vilnius-based graphic designer driven by clean, bold and creative visuals since 2019.",
      },
      { property: "og:title", content: "About ZMEJKA — Mantas Zmejauskas" },
      {
        property: "og:description",
        content: "Vilnius-based graphic designer working in identity, motion and packaging.",
      },
    ],
  }),
  component: About,
});

const skills = [
  ["Brand Identity", "Logo systems, grids, typographic hierarchy, guidelines"],
  ["Motion Graphics", "After Effects animation for ads, education and social"],
  ["Packaging", "Dielines, measurements, small-surface typography, mockups"],
  ["Social Systems", "Templates, components and consistent content at scale"],
];

const tools = ["After Effects", "Illustrator", "Photoshop", "InDesign", "Figma", "Blender"];

function About() {
  return (
    <SiteLayout>
      <section className="py-20 sm:py-28">
        <div className="shell rise grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <img
              src={profile.url}
              alt="Portrait of Mantas Zmejauskas, ZMEJKA"
              className="w-full max-w-md rounded-[2rem] object-cover grayscale transition-all duration-700 hover:grayscale-0"
              loading="eager"
              width={800}
              height={800}
            />
          </div>
          <div>
            <h1 className="uppercase">Hello!</h1>
            <p className="mt-6 max-w-[54ch] text-[1.3rem] leading-snug">
              My name is Mantas Zmejauskas, but I work under the nickname ZMEJKA. Based in Vilnius,
              Lithuania, I&apos;m a graphic designer driven by a passion for clean, bold and
              creative visuals since 2019.
            </p>
            <p className="mt-5 max-w-[54ch] text-muted-foreground">
              I work where strategy meets craft: turning restrictions — advertising rules, print
              tolerances, tiny label surfaces — into the idea itself. Static and motion, always as
              one system.
            </p>
            <div className="mt-10">
              <Link to="/portfolio" className="btn-primary">
                What I Do?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="shell">
          <p className="eyebrow">What I Do</p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {skills.map(([t, d]) => (
              <div key={t} className="border-t border-border pt-6">
                <h4 className="uppercase">{t}</h4>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
