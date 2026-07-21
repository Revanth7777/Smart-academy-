import { CheckCircle2 } from "lucide-react";

const features = [
  "Certified Coaches",
  "Professional Training",
  "National & International Competition Preparation",
  "Age-wise Batches",
  "Weekend & Evening Classes",
  "Fitness & Nutrition Guidance",
  "Online Registration",
  "Attendance Tracking",
  "Performance Reports",
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose{" "}
              <span className="gradient-text">Our Academy?</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are committed to nurturing champions through structured training,
              expert coaching, and a supportive environment. Our academy provides
              everything you need to excel — from beginner fundamentals to
              international competition preparation.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 flex flex-col justify-end text-white shadow-2xl">
              <div className="absolute top-8 right-8 w-24 h-24 border-4 border-white/20 rounded-full" />
              <div className="absolute top-16 right-16 w-12 h-12 bg-white/10 rounded-full" />
              <p className="text-6xl font-black opacity-20 absolute top-8 left-8">
                &ldquo;
              </p>
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-4">
                  Building champions through discipline, dedication, and
                  world-class coaching.
                </p>
                <footer className="text-emerald-200 font-semibold">
                  — Smart Games & Academy Mission
                </footer>
              </blockquote>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="text-2xl font-bold text-emerald-600">10+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
