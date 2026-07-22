import { brand } from "@/data/theme";

const testimonials = [
  {
    name: "Priya Raman",
    role: "Parent of Taekwondo Student",
    text: "My son has gained incredible confidence and discipline since joining. The coaches are patient, professional, and truly care about each student's progress.",
    rating: 5,
  },
  {
    name: "Arjun Kumar",
    role: "Wushu Athlete",
    text: "The training here is world-class. I competed at state level within a year of joining. The academy prepared me mentally and physically for every challenge.",
    rating: 5,
  },
  {
    name: "Meena Devi",
    role: "Parent of Archery Student",
    text: "Excellent facilities and structured programs. The performance reports help us track our daughter's progress. Highly recommend for serious sports training.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className={`py-24 ${brand.surface.section}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-emerald-500">
                ★
              </span>
            ))}
          </div>
          <h2 className="section-heading">Testimonials</h2>
          <p className="section-subheading">Parents & Students Reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="surface-card p-8 card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-emerald-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
