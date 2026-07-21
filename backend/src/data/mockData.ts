import type { Event, Sport, Testimonial } from "../types";

export const sports: Sport[] = [
  {
    id: 1,
    name: "Atya Patya",
    emoji: "🥋",
    description: "Traditional Indian tag sport focused on quick movement, timing, and strategy.",
    category: "Traditional Sport",
  },
  {
    id: 2,
    name: "Taekwondo",
    emoji: "🥋",
    description: "Korean martial art focused on powerful kicks, discipline, and self-defense.",
    category: "Martial Arts",
  },
  {
    id: 3,
    name: "Wushu",
    emoji: "🥋",
    description: "Chinese martial art blending fluid movements, acrobatics, and combat forms.",
    category: "Martial Arts",
  },
  {
    id: 4,
    name: "Archery",
    emoji: "🏹",
    description: "Precision sport developing focus, patience, and hand-eye coordination.",
    category: "Precision Sport",
  },
  {
    id: 5,
    name: "Sepak Takraw",
    emoji: "⚽",
    description: "Dynamic Southeast Asian sport using feet, knees, and head to play volleyball.",
    category: "Team Sport",
  },
  {
    id: 6,
    name: "Soft Tennis",
    emoji: "🎾",
    description: "Fast-paced racket sport perfect for agility, reflexes, and team play.",
    category: "Racket Sport",
  },
];

export const events: Event[] = [
  {
    id: 1,
    title: "State Championship",
    date: "2026-03-15",
    location: "Chennai Sports Complex",
    type: "Competition",
  },
  {
    id: 2,
    title: "Belt Promotion Test",
    date: "2026-04-05",
    location: "Academy Main Hall",
    type: "Assessment",
  },
  {
    id: 3,
    title: "Summer Sports Camp",
    date: "2026-05-01",
    endDate: "2026-05-30",
    location: "Smart Games & Academy Campus",
    type: "Camp",
  },
  {
    id: 4,
    title: "Inter Academy Tournament",
    date: "2026-06-20",
    location: "Multi-Sport Arena",
    type: "Tournament",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Raman",
    role: "Parent of Taekwondo Student",
    text: "My son has gained incredible confidence and discipline since joining.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arjun Kumar",
    role: "Wushu Athlete",
    text: "The training here is world-class. I competed at state level within a year.",
    rating: 5,
  },
  {
    id: 3,
    name: "Meena Devi",
    role: "Parent of Archery Student",
    text: "Excellent facilities and structured programs. Highly recommend.",
    rating: 5,
  },
];
