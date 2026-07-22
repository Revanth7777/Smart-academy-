import { Calendar, MapPin } from "lucide-react";
import { brand, eventBadgeStyles } from "@/data/theme";

const events = [
  {
    title: "State Championship",
    date: "March 15, 2026",
    location: "Chennai Sports Complex",
    type: "Competition",
  },
  {
    title: "Belt Promotion Test",
    date: "April 5, 2026",
    location: "Academy Main Hall",
    type: "Assessment",
  },
  {
    title: "Summer Sports Camp",
    date: "May 1 – May 30, 2026",
    location: "Smart Games & Academy Campus",
    type: "Camp",
  },
  {
    title: "Inter Academy Tournament",
    date: "June 20, 2026",
    location: "Multi-Sport Arena",
    type: "Tournament",
  },
];

const typeColors = eventBadgeStyles;

export default function Events() {
  return (
    <section id="events" className={`py-24 ${brand.surface.sectionAlt}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🥇</span>
          <h2 className="section-heading">Upcoming Events</h2>
          <p className="section-subheading">
            Stay updated with competitions, camps, and academy milestones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="surface-card p-6 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">🥇</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[event.type]}`}
                >
                  {event.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {event.title}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
