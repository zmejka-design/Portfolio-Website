import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import bgDesktop from "@/assets/Home_Page_01_Desktop.jpg.asset.json";
import bgMobile from "@/assets/Home_Page_01_Mobile.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZMEJKA — Graphic & Motion Designer, Vilnius" },
      {
        name: "description",
        content:
          "Portfolio of Mantas Zmejauskas (ZMEJKA): bold brand identity, motion design, packaging and social campaigns from Vilnius, Lithuania.",
      },
      { property: "og:title", content: "ZMEJKA — Graphic & Motion Designer" },
      {
        property: "og:description",
        content: "Clean, bold, creative visuals. Brand identity, motion design and packaging.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="relative isolate flex min-h-[calc(100svh-73px)] items-center overflow-hidden">
        <picture className="absolute inset-0 -z-10">
          <source media="(min-width: 768px)" srcSet={bgDesktop.url} />
          <img
            src={bgMobile.url}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 -z-10 bg-background/45" />

        <div className="shell rise py-24">
          <p className="eyebrow">Graphic &amp; Motion Designer · Vilnius</p>
          <h1 className="mt-6 max-w-[16ch] uppercase">Let&apos;s create something new together</h1>
          <p className="mt-6 max-w-[52ch] text-[1.15rem] text-muted-foreground">
            Bold identities, motion that earns attention, and packaging built to production spec —
            crafted since 2019 under the name ZMEJKA.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/about" className="btn-primary">
              Who Am I?
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              See The Work
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="shell grid gap-10 sm:grid-cols-3">
          {[
            ["06+", "Years designing brands, motion and packaging"],
            ["Shortlisted", "Lithuanian Design Association identity competition, 2020"],
            ["Static + Motion", "A rare combination: system thinking that also moves"],
          ].map(([k, v]) => (
            <div key={k}>
              <h4 className="uppercase">{k}</h4>
              <p className="mt-2 text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
