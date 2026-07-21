import { sports } from "@/data/sports";
import { siteImages } from "@/data/siteImages";
import { ACADEMY_PHONE_DISPLAY } from "@/lib/contact";

const quickLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#sports", label: "Sports" },
  { href: "/#events", label: "Events" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {siteImages.logo ? (
                <img
                  src={siteImages.logo}
                  alt="Smart Games & Academy logo"
                  className="h-10 w-auto max-w-[160px] object-contain shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shrink-0" />
              )}
              <span className="font-bold text-white text-lg">Smart Games & Academy</span>
            </div>
            <p className="text-sm leading-relaxed">
              Discipline &bull; Dedication &bull; Excellence
            </p>
            <p className="text-sm mt-2 text-gray-400">
              Building champions through world-class sports training.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Sports</h4>
            <ul className="space-y-2 text-sm">
              {sports.map((sport) => (
                <li key={sport.slug}>
                  <a
                    href={`/sports/${sport.slug}`}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {sport.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Sports Complex Road</li>
              <li>Chennai - 600044</li>
              <li>{ACADEMY_PHONE_DISPLAY}</li>
              <li>smartgamesacademy2010@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>Copyright &copy; 2026 Smart Games & Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
