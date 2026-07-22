/** Single academy brand colour — emerald only (lighter/darker shades) */
export const brand = {
  gradient: "from-emerald-600 to-emerald-700",
  gradientDark: "from-emerald-950 via-emerald-900 to-emerald-800",
  gradientHero: "from-emerald-600 to-emerald-700",
  gradientAccent: "from-emerald-400 to-emerald-500",
  textGradient: "from-emerald-200 to-emerald-400",
  /** Gallery cards — same colour, different depth */
  galleryShades: [
    "from-emerald-600 to-emerald-700",
    "from-emerald-700 to-emerald-800",
    "from-emerald-500 to-emerald-600",
    "from-emerald-800 to-emerald-900",
  ],
  /** Page surfaces — no plain white sections */
  surface: {
    page: "bg-emerald-50",
    section: "bg-emerald-50",
    sectionAlt: "bg-emerald-100/40",
    card: "bg-emerald-50/80 backdrop-blur-sm",
    cardSolid: "bg-emerald-50",
    cardBorder: "border-emerald-200/70",
    nav: "bg-emerald-50/95",
    muted: "bg-emerald-100/50",
  },
} as const;

export const eventBadgeStyles: Record<string, string> = {
  Competition: "bg-emerald-100 text-emerald-800",
  Assessment: "bg-emerald-200 text-emerald-900",
  Camp: "bg-emerald-50 text-emerald-700",
  Tournament: "bg-emerald-300/40 text-emerald-900",
};
