import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-sm mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Train • Compete • Excel</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
          SMART GAMES
          <br />
          <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
            &amp; ACADEMY
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-emerald-100/90 font-light tracking-widest mb-12">
          Discipline &bull; Dedication &bull; Excellence
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 font-bold rounded-full hover:bg-emerald-50 transition-all shadow-xl"
          >
            Join Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 transition-all"
          >
            Book Trial
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "500+", label: "Students" },
            { value: "6", label: "Sports" },
            { value: "15+", label: "Coaches" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-emerald-200/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
