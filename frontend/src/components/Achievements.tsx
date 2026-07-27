import { brand } from "@/data/theme";

const achievements = [
  {
    title: "National Medalists",
    emoji: "🏆",
    count: "45+",
    description: "Students who earned medals at national-level championships",
  },
  {
    title: "State Champions",
    emoji: "🏆",
    count: "120+",
    description: "Gold, silver, and bronze winners at state competitions",
  },
  {
    title: "International Participants",
    emoji: "🏆",
    count: "18+",
    description: "Athletes representing at international events",
  },
];

export default function Achievements() {
  return (
    <section id="coaches" className={`py-16 sm:py-20 bg-gradient-to-br ${brand.gradientDark} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-emerald-200/80 max-w-2xl mx-auto">
            Our students&apos; success is our greatest pride. Here&apos;s what we&apos;ve accomplished together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="text-center p-5 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur card-hover"
            >
              <span className="text-5xl mb-4 block">{item.emoji}</span>
              <div className="text-4xl sm:text-5xl font-black text-emerald-300 mb-2">
                {item.count}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-emerald-200/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
