"use client"

import { useState } from "react";

/* ─── Shared section wrapper ─── */
function Section({
  title,
  id,
  description,
  children,
}: {
  title: string;
  id: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-b-4 border-black py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono uppercase tracking-widest border-b-2 border-black pb-2 mb-2">
          {title}
        </h2>
        <p className="font-mono text-sm mb-8 opacity-70">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}

/* placeholder box */
function PlaceholderBox({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-2 border-black bg-white p-4 font-mono text-sm ${className}`}
    >
      {children ?? "Box"}
    </div>
  );
}

/* ─── NAV ─── */
const layouts = [
  "stack",
  "box",
  "center",
  "cluster",
  "sidebar",
  "switcher",
  "cover",
  "grid",
  "frame",
  "reel",
  "imposter",
];

function Nav() {
  return (
    <nav className="border-b-4 border-black px-6 py-4 font-mono overflow-x-auto">
      <div className="flex flex-wrap gap-2">
        {layouts.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            className="border-2 border-black px-3 py-1 uppercase text-xs tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ─── HERO / COVER ─── */
function Hero() {
  return (
    <header className="border-b-4 border-black min-h-[60vh] flex flex-col justify-center items-center px-6 py-20 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.5em] mb-4">
        A Brutalist Catalogue of
      </p>
      <h1
        className="font-mono uppercase tracking-tight"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 7rem)",
          lineHeight: 0.95,
        }}
      >
        Every
        <br />
        Layout
      </h1>
      <p className="font-mono text-sm mt-6 max-w-md opacity-70">
        Intrinsic layout primitives as popularised by Heydon
        Pickering &amp; Andy Bell — demonstrated in stark black
        &amp; white.
      </p>
    </header>
  );
}

/* ─── 1. STACK ─── */
function StackDemo() {
  return (
    <Section
      id="stack"
      title="01 — Stack"
      description="Vertically stacked elements with consistent spacing. The most fundamental layout primitive."
    >
      <div className="flex flex-col gap-4 max-w-md">
        {[
          "First item",
          "Second item",
          "Third item",
          "Fourth item",
          "Fifth item",
        ].map((t) => (
          <PlaceholderBox key={t}>{t}</PlaceholderBox>
        ))}
      </div>
    </Section>
  );
}

/* ─── 2. BOX ─── */
function BoxDemo() {
  return (
    <Section
      id="box"
      title="02 — Box"
      description="A padded container with a visible border. The fundamental unit of composition."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-4 border-black p-6 font-mono">
          <p className="text-xs uppercase tracking-widest mb-2">
            Default Box
          </p>
          <p className="text-sm opacity-70">
            Padding on all sides.
          </p>
        </div>
        <div className="border-4 border-black p-10 bg-black text-white font-mono">
          <p className="text-xs uppercase tracking-widest mb-2">
            Inverted Box
          </p>
          <p className="text-sm opacity-70">
            With extra padding.
          </p>
        </div>
        <div className="border-4 border-black p-6 font-mono border-dashed">
          <p className="text-xs uppercase tracking-widest mb-2">
            Dashed Box
          </p>
          <p className="text-sm opacity-70">
            Variation with dashed border.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ─── 3. CENTER ─── */
function CenterDemo() {
  return (
    <Section
      id="center"
      title="03 — Center"
      description="Horizontally centered content with a max-width constraint."
    >
      <div className="border-2 border-dashed border-black p-6">
        <div className="max-w-sm mx-auto border-4 border-black p-8 text-center font-mono">
          <p className="text-xs uppercase tracking-widest">
            Centered Element
          </p>
          <p className="text-sm mt-2 opacity-70">
            max-width constrains, auto margins center.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ─── 4. CLUSTER ─── */
function ClusterDemo() {
  const tags = [
    "CSS",
    "Layout",
    "Intrinsic",
    "Design",
    "Web",
    "Brutalist",
    "Responsive",
    "Flexbox",
    "Grid",
    "Every Layout",
    "Primitives",
  ];
  return (
    <Section
      id="cluster"
      title="04 — Cluster"
      description="Horizontally wrapping items with consistent gaps — perfect for tags, buttons, or badges."
    >
      <div className="flex flex-wrap gap-3">
        {tags.map((t) => (
          <span
            key={t}
            className="border-2 border-black px-4 py-2 font-mono text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-default"
          >
            {t}
          </span>
        ))}
      </div>
    </Section>
  );
}

/* ─── 5. SIDEBAR ─── */
function SidebarDemo() {
  return (
    <Section
      id="sidebar"
      title="05 — Sidebar"
      description="A sidebar of fixed width alongside flexible main content. Wraps on narrow viewports."
    >
      <div className="flex flex-wrap gap-0">
        <div className="w-full md:w-56 border-4 border-black p-6 font-mono bg-black text-white shrink-0">
          <p className="text-xs uppercase tracking-widest mb-4">
            Sidebar
          </p>
          <ul className="text-sm space-y-2">
            <li className="border-b border-white/30 pb-1">
              Link One
            </li>
            <li className="border-b border-white/30 pb-1">
              Link Two
            </li>
            <li className="border-b border-white/30 pb-1">
              Link Three
            </li>
            <li>Link Four</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[60%] border-4 border-black border-l-0 max-md:border-l-4 max-md:border-t-0 p-6 font-mono">
          <p className="text-xs uppercase tracking-widest mb-2">
            Main Content
          </p>
          <p className="text-sm opacity-70">
            This area flexes to fill the remaining space. On
            narrow screens, the sidebar wraps above the main
            content.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ─── 6. SWITCHER ─── */
function SwitcherDemo() {
  return (
    <Section
      id="switcher"
      title="06 — Switcher"
      description="Items display in a row when space permits, but switch to a single column when it doesn't."
    >
      <div className="flex flex-wrap gap-4">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="flex-1 min-w-[16rem] border-4 border-black p-8 font-mono text-center"
          >
            <p className="text-4xl mb-2">
              {String(n).padStart(2, "0")}
            </p>
            <p className="text-xs uppercase tracking-widest">
              Panel {n}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 7. COVER ─── */
function CoverDemo() {
  return (
    <Section
      id="cover"
      title="07 — Cover"
      description="A vertically-centered principal element with optional header and footer."
    >
      <div className="border-4 border-black min-h-[50vh] flex flex-col">
        <div className="border-b-2 border-black p-4 font-mono text-xs uppercase tracking-widest">
          Header
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center font-mono">
            <p
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
              className="uppercase tracking-tight"
            >
              Principal Element
            </p>
            <p className="text-sm mt-2 opacity-70">
              Vertically centered in the cover
            </p>
          </div>
        </div>
        <div className="border-t-2 border-black p-4 font-mono text-xs uppercase tracking-widest">
          Footer
        </div>
      </div>
    </Section>
  );
}

/* ─── 8. GRID ─── */
function GridDemo() {
  return (
    <Section
      id="grid"
      title="08 — Grid"
      description="An intrinsic, auto-filling grid that adapts columns to available space."
    >
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 12rem), 1fr))",
        }}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="border-4 border-black aspect-square flex items-center justify-center font-mono text-2xl"
          >
            {String(i + 1).padStart(2, "0")}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 9. FRAME ─── */
function FrameDemo() {
  return (
    <Section
      id="frame"
      title="09 — Frame"
      description="Cropping media to a specific aspect ratio without distortion."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { ratio: "aspect-square", label: "1 : 1" },
          { ratio: "aspect-video", label: "16 : 9" },
          { ratio: "aspect-[4/3]", label: "4 : 3" },
        ].map(({ ratio, label }) => (
          <div key={label}>
            <div
              className={`${ratio} border-4 border-black bg-black flex items-center justify-center overflow-hidden`}
            >
              <span className="font-mono text-white text-xs uppercase tracking-widest">
                {label}
              </span>
            </div>
            <p className="font-mono text-xs mt-2 text-center uppercase tracking-wider opacity-50">
              {label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 10. REEL ─── */
function ReelDemo() {
  return (
    <Section
      id="reel"
      title="10 — Reel"
      description="A horizontal scrolling container for overflow content."
    >
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="flex-none w-56 h-56 border-4 border-black flex items-center justify-center font-mono text-2xl snap-start hover:bg-black hover:text-white transition-colors"
          >
            {String(i + 1).padStart(2, "0")}
          </div>
        ))}
      </div>
      <p className="font-mono text-xs mt-2 opacity-50 uppercase tracking-wider">
        ← Scroll horizontally →
      </p>
    </Section>
  );
}

/* ─── 11. IMPOSTER ─── */
function ImposterDemo() {
  const [show, setShow] = useState(false);
  return (
    <Section
      id="imposter"
      title="11 — Imposter"
      description="An element positioned over content — modals, tooltips, and overlays."
    >
      <div className="relative border-4 border-black min-h-[300px] flex items-center justify-center overflow-hidden">
        <button
          onClick={() => setShow(!show)}
          className="border-2 border-black px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
        >
          {show ? "Dismiss" : "Summon Imposter"}
        </button>
        {show && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="bg-white border-4 border-black p-8 font-mono text-center max-w-sm mx-4">
              <p className="text-xs uppercase tracking-widest mb-2">
                Imposter
              </p>
              <p className="text-sm opacity-70 mb-4">
                This element is positioned over the parent
                container.
              </p>
              <button
                onClick={() => setShow(false)}
                className="border-2 border-black px-4 py-2 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t-4 border-black px-6 py-12 font-mono text-center">
      <p className="text-xs uppercase tracking-widest opacity-50">
        Every Layout — Brutalist Demo —{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

/* ─── APP ─── */
export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-mono selection:bg-black selection:text-white">
      <Nav />
      <Hero />
      <StackDemo />
      <BoxDemo />
      <CenterDemo />
      <ClusterDemo />
      <SidebarDemo />
      <SwitcherDemo />
      <CoverDemo />
      <GridDemo />
      <FrameDemo />
      <ReelDemo />
      <ImposterDemo />
      <Footer />
    </div>
  );
}