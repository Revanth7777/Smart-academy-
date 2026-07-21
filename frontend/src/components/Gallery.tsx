const categories = [
  {
    title: "Training Sessions",
    emoji: "🏋️",
    gradient: "from-emerald-600 to-teal-600",
    count: "24 photos",
  },
  {
    title: "Competitions",
    emoji: "🏆",
    gradient: "from-amber-500 to-orange-600",
    count: "18 photos",
  },
  {
    title: "Medal Winners",
    emoji: "🥇",
    gradient: "from-yellow-400 to-amber-500",
    count: "32 photos",
  },
  {
    title: "Certificates",
    emoji: "📜",
    gradient: "from-blue-500 to-indigo-600",
    count: "15 photos",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Gallery</h2>
          <p className="section-subheading">
            Moments of triumph, dedication, and growth at our academy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer card-hover"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} flex flex-col items-center justify-center text-white p-6`}
              >
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </span>
                <h3 className="text-lg font-bold text-center">{cat.title}</h3>
                <p className="text-sm text-white/80 mt-1">{cat.count}</p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end justify-center pb-6">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold text-sm bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                  View Gallery
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
