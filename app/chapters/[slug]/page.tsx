import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChapterHero } from "@/components/chapters/ChapterHero";
import {
  NewsletterCTA,
  StartChapterCTA,
} from "@/components/chapters/ChapterCTA";
import { EventCard } from "@/components/chapters/EventCard";
import { OrganizerCard } from "@/components/chapters/OrganizerCard";
import { CitySkyline, SceneImage, type CitySlug } from "@/components/CityImage";
import { chapterPages, getChapterPage } from "@/lib/chapter-pages";
import { getResourcePagesForCity } from "@/lib/resource-pages";

type Params = { slug: string };

/** Plain <img> srcs don't get Next's basePath automatically, so prefix
 *  them explicitly for the GitHub Pages subpath deployment. */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Real chapter logo artwork (from the CTC city logo set) */
const chapterLogos: Record<string, string> = Object.fromEntries(
  [
    "new-york",
    "london",
    "boston",
    "san-francisco",
    "los-angeles",
    "washington-dc",
    "san-diego",
    "seattle",
  ].map((slug) => [slug, `${BASE_PATH}/logos/${slug}.webp`]),
);

/** Short noun for each resource category's card subtitle */
const categoryNouns: Record<string, string> = {
  universities: "programs & centers",
  "incubators-accelerators": "organizations",
  "public-programs": "public programs",
  "industry-partners": "partners",
  "capital-partners": "investors",
};

/** Which illustrated scene stands in for each category's photo, and its tint.
 *  Each shows the kind of photo to source for the slot. */
const categoryScenes: Record<
  string,
  { scene: "campus" | "panel" | "civic" | "sitevisit" | "capital"; tone: "cream" | "lavender" | "leaf" }
> = {
  universities: { scene: "campus", tone: "cream" },
  "incubators-accelerators": { scene: "panel", tone: "lavender" },
  "public-programs": { scene: "civic", tone: "leaf" },
  "industry-partners": { scene: "sitevisit", tone: "cream" },
  "capital-partners": { scene: "capital", tone: "leaf" },
};

export function generateStaticParams(): Params[] {
  return chapterPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const page = getChapterPage((await params).slug);
  if (!page) return {};
  return {
    title: `${page.city} Chapter | Climate Tech Cities`,
    description: page.lede.slice(0, 155),
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getChapterPage(slug);
  if (!page) notFound();

  // Hero hook and narrative are independent pieces of copy; the narrative
  // renders in full, verbatim from the source sheet.
  const narrative = page.narrative;

  const resourceTiles = getResourcePagesForCity(slug).map((rp) => ({
    label: rp.sidebarLabel,
    href: `/chapters/${slug}/${rp.categorySlug}`,
    categorySlug: rp.categorySlug,
    count: rp.groups.reduce((n, g) => n + g.orgs.length, 0),
    noun: categoryNouns[rp.categorySlug] ?? "listings",
  }));

  return (
    <>
      <ChapterHero
        city={page.city}
        slug={page.slug as CitySlug}
        lede={page.lede}
        newsletterUrl={page.newsletterUrl}
        logoSrc={chapterLogos[page.slug]}
      />

      {/* The city narrative. Named for what it actually covers: the city's
          relationship to climate tech, not the chapter itself. */}
      <section aria-labelledby="city-climate" className="bg-cream">
        <div className="mx-auto max-w-[1060px] px-5 py-16 sm:px-10 md:py-24">
          <h2 id="city-climate" className="text-4xl font-medium">
            {page.city} and Climate Tech
          </h2>
          <div className="mt-10 max-w-3xl space-y-6 md:pl-12">
            {narrative.slice(0, 2).map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[16px] leading-[1.8]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <CitySkyline
            city={page.slug as CitySlug}
            alt={`Illustration of the ${page.city} skyline`}
            tone="leaf"
            className="mt-12 h-40 w-full rounded-md sm:h-52"
          />
          <div className="mt-12 max-w-3xl space-y-6 md:pl-12">
            {narrative.slice(2).map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[16px] leading-[1.8]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Resource categories as a clickable strip. The per-category sidebar
          still lives on the resource pages themselves for cross-navigation. */}
      <section aria-labelledby="city-resources" className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-10 md:py-20">
          <div className="grid items-end gap-4 md:grid-cols-[2fr_1fr]">
            <h2 id="city-resources" className="text-3xl font-medium">
              {page.city} Resources
            </h2>
            <p className="text-[15px] leading-relaxed text-forest-soft md:pb-1">
              A starter guide to the programs, partners, and capital powering
              climate tech in {page.city}.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-6">
            {resourceTiles.map((tile, i) => {
              const art = categoryScenes[tile.categorySlug] ?? {
                scene: "panel" as const,
                tone: "cream" as const,
              };
              return (
                <Link
                  key={tile.href}
                  href={tile.href}
                  className={`group md:col-span-2 ${i === 3 ? "md:col-start-2" : ""}`}
                >
                  <SceneImage
                    scene={art.scene}
                    alt={`Illustration for ${tile.label}`}
                    tone={art.tone}
                    className="aspect-[4/3] w-full rounded-md"
                  />
                  <p className="mt-4 text-[17px] font-medium underline decoration-1 underline-offset-4 transition-colors group-hover:text-coral">
                    {tile.label}
                  </p>
                  <p className="mt-1 text-[13px] text-forest-soft">
                    {tile.count} {tile.noun}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] space-y-20 px-5 pb-24 pt-4 sm:px-10">
        <NewsletterCTA city={page.city} url={page.newsletterUrl} />

        {/* Events */}
        <section aria-labelledby="chapter-events">
          <h2
            id="chapter-events"
            className="scroll-mt-24 text-3xl font-medium"
          >
            Events
          </h2>

          {page.upcomingEvents.length > 0 && (
            <>
              <h3 className="mt-8 text-xl font-medium">Upcoming Events</h3>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {page.upcomingEvents.map((event, i) => (
                  <EventCard key={event.title} event={event} index={i} />
                ))}
              </div>
            </>
          )}

          {page.pastEvents.length > 0 && (
            <>
              <h3 className="mt-10 text-xl font-medium">Past Events</h3>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {page.pastEvents.map((event, i) => (
                  <EventCard key={event.title} event={event} index={i + 1} />
                ))}
              </div>
            </>
          )}
        </section>

        {/* Organizers */}
        <section aria-labelledby="chapter-organizers">
          <h2 id="chapter-organizers" className="text-3xl font-medium">
            Organizers
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
            Every chapter is powered by volunteers who plan events, write the
            newsletter, and grow the local community.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {page.organizers.map((organizer, i) => (
              <OrganizerCard key={i} organizer={organizer} index={i} />
            ))}
          </div>
        </section>
      </div>

      <StartChapterCTA />
    </>
  );
}
