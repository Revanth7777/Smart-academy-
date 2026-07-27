import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { getSportCover } from "@/data/siteImages";
import { sports } from "@/data/sports";
import { brand } from "@/data/theme";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { value: "500+", label: "Students" },
  { value: "6", label: "Sports" },
  { value: "15+", label: "Coaches" },
];

function SportImageCard({
  sport,
  priority = false,
  className = "",
  sizes,
}: {
  sport: (typeof sports)[number] & { cover: NonNullable<ReturnType<typeof getSportCover>> };
  priority?: boolean;
  className?: string;
  sizes: string;
}) {
  return (
    <Link
      href={`/sports/${sport.slug}`}
      className={`relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/15 shadow-xl group ${className}`}
    >
      <SiteImage
        src={sport.cover.src}
        alt={sport.cover.alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        objectPosition={sport.cover.objectPosition ?? "center"}
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/25 to-transparent" />
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${brand.gradientAccent}`}
      />
      <span className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 text-white font-semibold text-xs sm:text-sm drop-shadow-md line-clamp-1">
        {sport.emoji} {sport.name}
      </span>
    </Link>
  );
}

export default function Hero() {
  const sportCards = sports
    .map((sport) => {
      const cover = getSportCover(sport.slug);
      return cover ? { ...sport, cover } : null;
    })
    .filter((sport): sport is NonNullable<typeof sport> => sport !== null);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-16 sm:pt-20 pb-14 sm:pb-20 lg:min-h-screen lg:flex lg:items-center"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradientDark}`} />

      {sportCards.length > 0 && (
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="grid grid-cols-3 h-full">
            {sportCards.slice(0, 3).map((sport) => (
              <div key={sport.slug} className="relative">
                <SiteImage
                  src={sport.cover.src}
                  alt=""
                  fill
                  className="object-cover"
                  objectPosition={sport.cover.objectPosition ?? "center"}
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/4 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-xs sm:text-sm mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Train • Compete • Excel</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight mb-4 sm:mb-5 leading-tight">
              SMART GAMES
              <br />
              <span className={`inline-block bg-gradient-to-r ${brand.textGradient} bg-clip-text text-transparent`}>
                &amp; ACADEMY
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 font-light tracking-wide mb-5 sm:mb-6 max-w-xl mx-auto lg:mx-0">
              Discipline • Dedication • Excellence
            </p>

            {sportCards.length > 0 && (
              <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                {sportCards.map((sport, index) => (
                  <SportImageCard
                    key={sport.slug}
                    sport={sport}
                    priority={index < 2}
                    className="aspect-[4/5] sm:aspect-square"
                    sizes="(max-width: 640px) 45vw, 200px"
                  />
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 justify-center lg:justify-start mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              {sports.map((sport) => (
                <Link
                  key={sport.slug}
                  href={`/sports/${sport.slug}`}
                  className="px-2.5 sm:px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/35 text-emerald-50 text-xs sm:text-sm font-medium hover:bg-emerald-500/30 hover:border-emerald-400/50 transition-colors text-center whitespace-nowrap"
                >
                  {sport.emoji} {sport.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-14 max-w-sm sm:max-w-none mx-auto lg:mx-0">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-emerald-900 font-bold rounded-full hover:bg-emerald-50 transition-all shadow-xl text-sm sm:text-base"
              >
                Join Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 transition-all text-center text-sm sm:text-base"
              >
                Book Trial
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 max-w-md mx-auto lg:mx-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 px-2 sm:px-3 py-2.5 sm:py-4 backdrop-blur-sm"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-emerald-200/80 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {sportCards.length > 0 && (
            <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-3 h-[28rem] xl:h-[32rem]">
              {sportCards.map((sport, index) => (
                <SportImageCard
                  key={sport.slug}
                  sport={sport}
                  priority={index < 2}
                  className={index === 0 ? "col-span-2 row-span-2" : ""}
                  sizes={
                    index === 0
                      ? "(max-width: 1280px) 40vw, 420px"
                      : "(max-width: 1280px) 20vw, 200px"
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <a href="#sports" className="text-white/60 hover:text-white" aria-label="Scroll to sports">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
