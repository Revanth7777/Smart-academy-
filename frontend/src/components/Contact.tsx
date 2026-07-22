"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import {
  ACADEMY_PHONE_DISPLAY,
  academyTelHref,
  academyWhatsAppHref,
} from "@/lib/contact";
import { brand } from "@/data/theme";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    sport: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", sport: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={`py-24 ${brand.surface.sectionAlt}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Contact Us</h2>
          <p className="section-subheading">
            Ready to start your journey? Get in touch or book a free trial class.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                label: "Academy Location",
                value: "123 Sports Complex Road, Chennai - 600044",
              },
              {
                icon: Phone,
                label: "Phone",
                value: ACADEMY_PHONE_DISPLAY,
                href: academyTelHref,
              },
              {
                icon: Mail,
                label: "Email",
                value: "smartgamesacademy2010@gmail.com",
                href: "mailto:smartgamesacademy2010@gmail.com",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: ACADEMY_PHONE_DISPLAY,
                href: academyWhatsAppHref,
              },
            ].map((item) => (
              <div key={item.label} className={`flex items-start gap-4 p-4 rounded-xl ${brand.surface.muted}`}>
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className={`rounded-2xl overflow-hidden h-64 bg-emerald-100/60 border ${brand.surface.cardBorder}`}>
              <iframe
                title="Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.14!3d12.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzAwLjAiTiA4MMKwMDgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`surface-card p-8 space-y-5`}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                suppressHydrationWarning
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-emerald-200/70 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/80"
                placeholder="Your name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  suppressHydrationWarning
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200/70 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/80"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  suppressHydrationWarning
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200/70 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/80"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sport Interest
              </label>
              <select
                suppressHydrationWarning
                value={form.sport}
                onChange={(e) => setForm({ ...form, sport: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-emerald-200/70 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/80"
              >
                <option value="">Select a sport</option>
                <option>Atya Patya</option>
                <option>Taekwondo</option>
                <option>Wushu</option>
                <option>Archery</option>
                <option>Sepak Takraw</option>
                <option>Soft Tennis</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                suppressHydrationWarning
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-emerald-200/70 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/80 resize-none"
                placeholder="Tell us about your goals..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              <Send className="w-5 h-5" />
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-emerald-600 text-sm text-center">
                Thank you! We&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm text-center">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
