import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteImage from "@/components/SiteImage";
import { getSportCover, siteImages } from "@/data/siteImages";
import { getAllSportSlugs, getSportBySlug, sports } from "@/data/sports";
import { brand } from "@/data/theme";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSportSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sport = getSportBySlug(slug);
  if (!sport) return { title: "Sport Not Found" };

  return {
    title: `${sport.name} | Smart Games & Academy`,
    description: sport.tagline,
  };
}

export default async function SportPage({ params }: PageProps) {
  const { slug } = await params;
  const sport = getSportBySlug(slug);
  if (!sport) notFound();

  const related = sports.filter((s) => s.slug !== sport.slug).slice(0, 3);
  const cover = getSportCover(slug);
  const sportImages =
    siteImages.sports[slug as keyof typeof siteImages.sports] ?? [];

  return (
    <main>
      <Navbar />

      <article className="pt-20">
        <header
          className={`relative overflow-hidden bg-gradient-to-br ${sport.color} min-h-[300px] md:min-h-[420px]`}
        >
          {cover && (
            <SiteImage
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              className="object-cover"
              objectPosition={
                cover.heroObjectPosition ?? cover.objectPosition ?? "center"
              }
              sizes="100vw"
            />
          )}
          {/* Darker on the left for text; clearer on the right so the photo reads */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-950/55 to-emerald-950/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-white">
            <div className="max-w-xl">
              <Link
                href="/#sports"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Sports
              </Link>
              <span className="text-5xl mb-4 block">{sport.emoji}</span>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-2">
                {sport.origin}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{sport.name}</h1>
              <p className="text-lg md:text-xl text-white/90">{sport.tagline}</p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid sm:grid-cols-2 gap-3 mb-12">
            {sport.highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-emerald-100/40 px-4 py-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            {sport.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {section.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-[1.05rem]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {sportImages.length > 1 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sportImages.slice(1).map((img) => (
                  <div
                    key={img.src}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-emerald-100/50"
                  >
                    <SiteImage
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={`mt-14 rounded-2xl bg-gradient-to-r ${brand.gradient} p-8 text-center text-white`}>
            <h2 className="text-2xl font-bold mb-2">Ready to start {sport.name}?</h2>
            <p className="text-white/90 mb-6 max-w-lg mx-auto">
              Book a trial session or enroll with our coaches and begin your journey.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Explore more sports</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/sports/${item.slug}`}
                  className="group surface-card p-5 card-hover"
                >
                  <span className="text-2xl block mb-2">{item.emoji}</span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
