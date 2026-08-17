import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — ZMEJKA | Identity, Motion, Packaging" },
      {
        name: "description",
        content:
          "Selected case studies by ZMEJKA: Riot teaser campaign, LDA identity, drobiunamai.lt and epamokos.lt motion, Whoop packaging, Yummy social system and 100 Posters.",
      },
      { property: "og:title", content: "Portfolio — ZMEJKA" },
      {
        property: "og:description",
        content: "Case studies structured as Challenge → Visual Idea → Constraint → Solution.",
      },
    ],
  }),
  component: Portfolio,
});

type Project = {
  n: string;
  title: string;
  year: string;
  status: string;
  discipline: string;
  overview: string;
  role: string;
  tools: string;
  challenge: string;
  visualIdea: string;
  constraint: string;
  solution: string;
  results: string;
  assets: string[];
};

const projects: Project[] = [
  {
    n: "01",
    title: "Riot — Teaser Social Campaign",
    year: "2024–2025",
    status: "Client work · Approved & released",
    discipline: "Social Campaign / Motion / Art Direction",
    overview:
      "A series of teaser posts announcing a new Riot product on social media without ever showing it clearly. The goal was to build curiosity inside strict tobacco-adjacent advertising rules.",
    role: "Designer & art director at RoyalSmoke — concept, layout system, motion, final delivery. Tools: Illustrator, Photoshop, After Effects.",
    challenge:
      "Advertising regulations and internal legal review limited how the product could be depicted, named and described. On top of that, the launch date required total secrecy, and every asset had to survive platform compression and multiple aspect ratios (1:1, 4:5, 9:16).",
    visualIdea:
      "Turn the restriction into the message: what is hidden is what you want to see. A progressive blur veil over the product, with hard-edged typography cutting through the haze — secrecy as an aesthetic, not a compromise.",
    constraint:
      "No clear product shot, no claims, no lifestyle usage. Legal-approved copy only, tight brand palette, and a fixed posting calendar that fixed the reveal rhythm.",
    solution:
      "Built a modular teaser template where blur radius decreases post by post, so the campaign itself becomes a countdown. Type locked to a grid so every ratio reflows without re-art-directing. Animated versions keep motion minimal — a slow focus pull and a single type snap — to stay readable on mute and at small sizes.",
    results:
      "The full series passed legal and brand review and was released as the official teaser campaign — a rare case where the compliance constraint became the creative hook.",
    assets: [
      "Static teaser compositions (1:1, 4:5, 9:16)",
      "Animated MP4 / GIF focus-pull sequence",
      "Blur-progression grid showing the campaign arc",
      "Template file with locked type grid",
    ],
  },
  {
    n: "02",
    title: "Lithuanian Design Association — Visual Identity",
    year: "2020",
    status: "Competition · Shortlisted",
    discipline: "Brand Identity / Typography",
    overview:
      "A competition proposal for the visual identity of the Lithuanian Design Association. The goal was a system that represents a whole community of designers without imposing one designer's taste.",
    role: "Sole designer — concept, mark, typographic system, applications. Tools: Illustrator, Photoshop, InDesign.",
    challenge:
      "An association identity has to be neutral enough to host many voices, yet distinctive enough to be recognised at a glance — applied by different people across posters, digital and print with no dedicated studio to police it.",
    visualIdea:
      "A structural mark built from the same grid as the typography, so the logo reads as the system's smallest unit rather than a decoration placed on top of it.",
    constraint:
      "Competition brief, no budget for custom type, and mandatory legibility in one-colour print and small digital sizes.",
    solution:
      "Defined a grid, a strict typographic hierarchy and clear spacing rules so any member can produce on-brand layouts. Delivered the mark in responsive weights, plus poster, digital and stationery applications proving the system holds under real use.",
    results:
      "Shortlisted in the national competition — external recognition of the systemic thinking behind the identity.",
    assets: [
      "Logo construction grid & clear-space diagrams",
      "Typographic hierarchy sheet",
      "Poster and stationery applications",
      "One-colour and small-size stress tests",
    ],
  },
  {
    n: "03",
    title: "drobiunamai.lt — Animated Advertising",
    year: "2021",
    status: "Client work · Released",
    discipline: "Motion / Advertising",
    overview:
      "Animated advertising for a real client, made for digital and social placement. The goal was to communicate the offer in a few seconds of scroll time.",
    role: "Motion designer — storyboard, design, animation, export. Tools: After Effects, Illustrator.",
    challenge:
      "A commercial message with a fixed short runtime, watched on mute, competing with everything else in the feed — while staying inside the client's existing brand assets.",
    visualIdea:
      "Let the product build itself on screen. Shapes assemble into the offer, so the viewer watches a construction rather than reads an ad.",
    constraint:
      "Short duration, small file sizes, no sound dependency, supplied brand assets of mixed quality.",
    solution:
      "Rebuilt the supplied assets as clean vectors, storyboarded a three-beat structure (hook → offer → CTA), and animated with eased shape transitions so the message lands before the second beat. Exported per-platform ratios and weights.",
    results:
      "Delivered and used as the client's live digital advertising, with a reusable animation structure for later offers.",
    assets: [
      "Animated MP4 / GIF cutdowns",
      "Storyboard and keyframe sheet",
      "Vector rebuild of client assets",
    ],
  },
  {
    n: "04",
    title: "epamokos.lt — Animated Remote Lessons",
    year: "2020–2021",
    status: "Project · Released",
    discipline: "Motion / Education",
    overview:
      "Animated visual communication for distance-learning lessons. The goal was to make abstract lesson content clear and watchable for students at home.",
    role: "Motion designer — visual language, illustration, animation. Tools: After Effects, Illustrator.",
    challenge:
      "Educational content is dense and unforgiving: every animation has to explain something, keep attention across long runtimes, and stay consistent across many episodes.",
    visualIdea:
      "One flat, high-contrast visual language where motion carries meaning — things move because the explanation moves, never for decoration.",
    constraint:
      "Fixed lesson scripts, long-form runtimes, production volume, and legibility on small school laptops.",
    solution:
      "Built a reusable component library (icons, transitions, title cards) so each episode is assembled rather than redrawn, keeping the series consistent and the production schedule realistic.",
    results:
      "A structured animated lesson series with a repeatable pipeline — proof of narrative motion delivered at volume.",
    assets: [
      "Animated lesson excerpts (MP4)",
      "Reusable component and transition library",
      "Title-card and icon system",
    ],
  },
  {
    n: "05",
    title: "Whoop Plus & Whoop Snus — Packaging",
    year: "2023–2025",
    status: "Concept · Unreleased technical draft",
    discipline: "Packaging / Technical Design",
    overview:
      "Packaging design for heated-tobacco packs and snus boxes, prepared as technical drafts with real measurements. The goal was production-ready artwork, not a mockup.",
    role: "Packaging designer at RoyalSmoke — dielines, artwork, typography, mockups. Tools: Illustrator, Photoshop, Blender.",
    challenge:
      "Very small print surfaces shared with mandatory legal and health information, strict category rules, and tolerances for cutting, folding and gluing that make a two-millimetre error visible on shelf.",
    visualIdea:
      "Treat the pack as architecture: a consistent structural band across faces so the brand is recognisable from any angle, even when most of the surface is legally reserved.",
    constraint:
      "Fixed dieline dimensions, mandatory warning areas, limited colour separations, white-background technical presentation.",
    solution:
      "Built artwork directly onto measured dielines with bleed and safety zones, set a compressed typographic scale for micro-surfaces, and validated the result with 3D renders to check how panels read when folded.",
    results:
      "A complete, measurement-accurate packaging concept for both products — presented as a concept, since the range was not signed off for release.",
    assets: [
      "Packaging dielines with measurements",
      "Flat artwork on white background",
      "3D product mockups / renders",
      "Small-surface typography specimen",
    ],
  },
  {
    n: "06",
    title: "Yummy — Social Media Visual System",
    year: "2023",
    status: "Concept · Not fully approved",
    discipline: "Design System / Social",
    overview:
      "A social media template system for a candy and dessert shop: fonts, colours and a general post style. The goal was consistency, so non-designers could keep posting on brand.",
    role: "Designer — visual system, components, template documentation. Tools: Figma, Illustrator, Photoshop.",
    challenge:
      "Daily content needs speed. A single beautiful post is worthless if the next twenty drift off-brand once someone else takes over.",
    visualIdea:
      "An appetising but disciplined kit — warm product photography inside strict typographic frames, so the food changes and the brand doesn't.",
    constraint:
      "Non-designer editors, platform-varying safe areas, mixed-quality product photography.",
    solution:
      "Defined type scale, colour roles and a component set covering post, story and highlight formats, with rules for photo crops and text length so layouts never break.",
    results:
      "A ready-to-run content system presented as a concept — demonstrating systemic social design rather than one-off posts.",
    assets: [
      "Template components (post / story / highlight)",
      "Type and colour specification sheet",
      "Feed mockup showing consistency across posts",
    ],
  },
  {
    n: "07",
    title: "Italian DJ — Cover Art & Animation",
    year: "2019–2021",
    status: "Client work · Released",
    discipline: "Illustration / Art Direction / Motion",
    overview:
      "Illustrated song covers for an Italian DJ, with one cover extended into an animated loop. The goal was artwork that carries the track's mood at thumbnail size.",
    role: "Illustrator & animator — concept, illustration, animation. Tools: Illustrator, Photoshop, After Effects.",
    challenge:
      "Streaming covers are consumed as tiny squares, and each release needs its own personality while still feeling like the same artist.",
    visualIdea:
      "Bold, character-led illustration with a single dominant focal shape that survives being shrunk to a playlist thumbnail.",
    constraint:
      "Square format, thumbnail legibility, per-release turnaround, artist's musical direction.",
    solution:
      "Built each cover around one high-contrast focal element, then animated the strongest one as a short seamless loop for social and video platforms.",
    results:
      "Released cover artwork across the artist's tracks, plus an animated version used as promotional motion content.",
    assets: [
      "Static cover illustrations",
      "Animated cover loop (GIF / MP4)",
      "Thumbnail legibility tests",
    ],
  },
  {
    n: "08",
    title: "100 Posters — Personal Series",
    year: "2020–2024 · Ongoing",
    status: "Personal · 18 of 100 completed",
    discipline: "Poster / Experimental / Motion",
    overview:
      "A long-running self-initiated series of 100 posters, static and animated. The goal is deliberate practice: one composition problem per poster.",
    role: "Self-initiated — concept, design, animation. Tools: Illustrator, Photoshop, After Effects.",
    challenge:
      "Without a client there is no brief and no deadline — the hard part is imposing constraints strong enough to produce real work.",
    visualIdea:
      "Typography as the subject. Each poster takes a single rule — scale, repetition, distortion, negative space — and pushes it until it breaks.",
    constraint:
      "Self-imposed rules per poster, print-ready format, and a series identity that must hold across four years of shifting taste.",
    solution:
      "A fixed format and monochrome-leaning palette keep the series coherent, while animation is added only where movement is the idea rather than an effect.",
    results:
      "18 posters published so far and shared through Instagram (@zmejkart) — an ongoing laboratory feeding techniques straight back into client work.",
    assets: [
      "Selected poster compositions",
      "Animated poster loops (MP4 / GIF)",
      "Process and iteration spreads",
    ],
  },
  {
    n: "09",
    title: "RoyalSmoke — Employee Business Cards",
    year: "2022",
    status: "Client work · Approved",
    discipline: "Print / Brand Application",
    overview:
      "Business cards for company employees, produced within existing brand guidelines. The goal was a clean, production-safe print application.",
    role: "Designer — layout, typesetting, print preparation. Tools: Illustrator, InDesign.",
    challenge:
      "A small canvas with fixed brand assets, variable-length names and titles, and no room for print error.",
    visualIdea:
      "Quiet confidence: generous margins, one typographic accent, nothing that fights the logo.",
    constraint:
      "Brand guidelines, fixed print size, bleed and safety margins, variable data across employees.",
    solution:
      "A single master layout with data-driven fields so every employee card sets identically, prepared with correct bleed, colour and crop marks for the printer.",
    results:
      "Approved and produced as the company's employee card standard.",
    assets: ["Front/back card layouts", "Print-ready file with bleed & marks", "Physical mockups"],
  },
];

function Portfolio() {
  return (
    <SiteLayout>
      <section className="border-b border-border py-20 sm:py-28">
        <div className="shell rise">
          <p className="eyebrow">Selected Work · 2019 — 2026</p>
          <h1 className="mt-6 max-w-[14ch] uppercase">Portfolio</h1>
          <p className="mt-6 max-w-[60ch] text-[1.15rem] text-muted-foreground">
            Nine case studies, ordered by strength of the story rather than by date. Each one
            follows the same structure — <strong className="text-foreground">Challenge</strong> →{" "}
            <strong className="text-foreground">Visual Idea</strong> →{" "}
            <strong className="text-foreground">Constraint</strong> →{" "}
            <strong className="text-foreground">Solution</strong> — because the constraint is
            usually where the design actually happens.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {projects.map((p) => (
              <a
                key={p.n}
                href={`#p${p.n}`}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                {p.n} · {p.title.split(" — ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {projects.map((p) => (
        <article key={p.n} id={`p${p.n}`} className="scroll-mt-24 border-b border-border py-20">
          <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)]">
            <header className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-display text-6xl font-extrabold text-muted-foreground/40">{p.n}</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] uppercase">{p.title}</h2>
              <p className="mt-4 text-sm tracking-[0.14em] uppercase text-muted-foreground">
                {p.year}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{p.discipline}</p>
              <p className="mt-4 inline-block rounded-full border border-border px-3 py-1 text-xs tracking-[0.12em] uppercase">
                {p.status}
              </p>
            </header>

            <div className="space-y-8">
              <p className="text-[1.3rem] leading-snug">{p.overview}</p>

              <Block label="My Role & Tools" text={p.role} />
              <Block label="Challenge" text={p.challenge} />
              <Block label="Visual Idea" text={p.visualIdea} />
              <Block label="Constraint" text={p.constraint} />
              <Block label="Solution" text={p.solution} />
              <Block label="Results & Impact" text={p.results} />

              <div>
                <p className="eyebrow">Visual Assets</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {p.assets.map((a) => (
                    <li
                      key={a}
                      className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted-foreground"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}

      <section className="py-24">
        <div className="shell text-center">
          <h3 className="uppercase">Have a project in mind?</h3>
          <div className="mt-8 flex justify-center">
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-t border-border pt-5">
      <p className="eyebrow">{label}</p>
      <p className="mt-3 max-w-[68ch] text-muted-foreground">{text}</p>
    </div>
  );
}
