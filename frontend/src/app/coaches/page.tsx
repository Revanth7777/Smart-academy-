import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { coaches } from "@/data/coaches";
import { brand } from "@/data/theme";
import { homeSectionHref } from "@/lib/scroll";

export const metadata: Metadata = {
  title: "Our Coaches | Smart Games & Academy",
  description:
    "Meet the certified coaches at Smart Games & Academy — Mentors who build discipline, skill, and champions.",
};

export default function CoachesPage() {
  return (
    <main>
      <Navbar />

      <article className="pt-16 sm:pt-20">
        <header
          className={`relative overflow-hidden bg-gradient-to-br ${brand.gradientDark} text-white`}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Our Coaches
            </h1>
            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl">
              Meet the mentors who guide every athlete at Smart Games &amp; Academy.
              Photos and full profiles coming soon.
            </p>
          </div>
        </header>

        <div className={`py-12 sm:py-16 ${brand.surface.section}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {coaches.map((coach) => (
                <div
                  key={coach.slug}
                  className="group surface-card overflow-hidden card-hover"
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${brand.gradient} flex items-center justify-center`}
                  >
                    <span className="text-5xl font-bold text-white/40 select-none">
                      {coach.name.charAt(0)}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {coach.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                      Coach &middot; Smart Games &amp; Academy
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`mt-12 sm:mt-14 rounded-2xl bg-gradient-to-r ${brand.gradient} p-5 sm:p-8 text-center text-white`}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Train with our coaches
              </h2>
              <p className="text-white/90 mb-6 max-w-lg mx-auto">
                Book a trial session and start your journey with our coaching team.
              </p>
              <a
                href={homeSectionHref("contact")}
                className="inline-block px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors"
              >
                Book a Trial
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
