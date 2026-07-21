import { imagePath, type SiteImage } from "@/lib/images";

/**
 * Put all image files in: frontend/public/images/
 *
 * Example:
 * 1. Save file → public/images/training-session-01.jpg
 * 2. Add entry below → { src: imagePath("training-session-01.jpg"), alt: "..." }
 */
export const siteImages = {
  hero: {
    background: null as string | null,
    // background: imagePath("hero-bg.jpg"),
  },

  logo: imagePath("academy-logo.jpeg"),

  gallery: {
    training: [] as SiteImage[],
    // training: [
    //   { src: imagePath("training-session-01.jpg"), alt: "Morning training session" },
    // ],

    competitions: [] as SiteImage[],
    medals: [] as SiteImage[],
    certificates: [] as SiteImage[],
  },

  sports: {
    adimurai: [] as SiteImage[],
    // adimurai: [{ src: imagePath("adimurai-cover.jpg"), alt: "Adimurai training" }],

    taekwondo: [] as SiteImage[],
    wushu: [] as SiteImage[],
    archery: [] as SiteImage[],
    "sepak-takraw": [] as SiteImage[],
    "soft-tennis": [] as SiteImage[],
  },

  events: [] as (SiteImage & { title?: string })[],
  coaches: [] as SiteImage[],
  testimonials: [] as (SiteImage & { name: string })[],
};

export type GalleryCategoryId = keyof typeof siteImages.gallery;

export const galleryCategories: {
  id: GalleryCategoryId;
  title: string;
  emoji: string;
  gradient: string;
}[] = [
  {
    id: "training",
    title: "Training Sessions",
    emoji: "🏋️",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: "competitions",
    title: "Competitions",
    emoji: "🏆",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "medals",
    title: "Medal Winners",
    emoji: "🥇",
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    id: "certificates",
    title: "Certificates",
    emoji: "📜",
    gradient: "from-blue-500 to-indigo-600",
  },
];

export function getSportCoverImage(slug: string): string | null {
  const images = siteImages.sports[slug as keyof typeof siteImages.sports];
  return images?.[0]?.src ?? null;
}

export function getGalleryImages(categoryId: GalleryCategoryId): SiteImage[] {
  return siteImages.gallery[categoryId];
}
