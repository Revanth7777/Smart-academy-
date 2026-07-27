import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { getSportCover } from "@/data/siteImages";
import { sports } from "@/data/sports";
import { brand } from "@/data/theme";

export default function SportsPrograms() {
  return (
    <section id="sports" className={`py-16 sm:py-20 ${brand.surface.section}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-4xl mb-4 block">🏆</span>
          <h2 className="section-heading">Our Sports Programs</h2>
          <p className="section-subheading">
            World-class training across six disciplines — from ancient martial arts to modern competitive sports.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {sports.map((sport) => {
            const cover = getSportCover(sport.slug);

            return (
              <div
                key={sport.slug}
                className="group surface-card overflow-hidden card-hover"
              >
                {cover ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-emerald-100/50">
                    <SiteImage
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      className="object-cover"
                      objectPosition={cover.objectPosition ?? "center"}
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className={`h-2 bg-gradient-to-r ${sport.color}`} />
                )}
                <div className="p-5 sm:p-6">
                  {!cover && (
                    <span className="text-4xl mb-4 block">{sport.emoji}</span>
                  )}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    <Link href={`/sports/${sport.slug}`}>{sport.name}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {sport.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/sports/${sport.slug}`}
                      className="text-sm font-semibold text-gray-700 hover:text-emerald-600"
                    >
                      Learn more →
                    </Link>
                    <Link
                      href="/#contact"
                      className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      Enroll Now →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
