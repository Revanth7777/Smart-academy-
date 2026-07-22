import { imagePath, type SiteImage } from "@/lib/images";
import { brand } from "@/data/theme";

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
    "atya-patya": [
      {
        src: imagePath("atya-patya-cover.jpg"),
        alt: "Atya Patya player leaping over defenders on a marked court",
        objectPosition: "55% 40%",
        // Keep the jump clear of the left-aligned title on detail pages
        heroObjectPosition: "62% 38%",
      },
    ],
    taekwondo: [
      {
        src: imagePath("taekwondo-cover.jpg"),
        alt: "Taekwondo match — high kick at Olimpiada Nacional",
        objectPosition: "center 30%",
        // Push action toward the right so left-aligned title does not cover the kick
        heroObjectPosition: "68% 28%",
      },
    ],
    wushu: [
      {
        src: imagePath("wushu-cover.jpg"),
        alt: "Wushu sanda fight in a sports arena",
        objectPosition: "center 45%",
        // Keep the punch/action clear of the left-aligned title
        heroObjectPosition: "62% 42%",
      },
    ],
    archery: [
      {
        src: imagePath("archery-cover.jpg"),
        alt: "Archer drawing a recurve bow in competition",
        objectPosition: "40% 42%",
        // Face left, bow right — keep the draw clear beside the title
        heroObjectPosition: "48% 40%",
      },
    ],
    "sepak-takraw": [
      {
        src: imagePath("sepak-takraw-cover.jpg"),
        alt: "Sepak Takraw player performing a high kick at the Asian Games",
        objectPosition: "center 55%",
        // Keep the vertical kick clear of the left-aligned title
        heroObjectPosition: "58% 52%",
      },
    ],
    "soft-tennis": [
      {
        src: imagePath("soft-tennis-cover.jpg"),
        alt: "Soft tennis players competing at the National Games",
        objectPosition: "42% 58%",
        // Keep the lunging player clear of the left-aligned title
        heroObjectPosition: "58% 52%",
      },
    ],
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
    gradient: brand.galleryShades[0],
  },
  {
    id: "competitions",
    title: "Competitions",
    emoji: "🏆",
    gradient: brand.galleryShades[1],
  },
  {
    id: "medals",
    title: "Medal Winners",
    emoji: "🥇",
    gradient: brand.galleryShades[2],
  },
  {
    id: "certificates",
    title: "Certificates",
    emoji: "📜",
    gradient: brand.galleryShades[3],
  },
];

export function getSportCover(slug: string): SiteImage | null {
  const images = siteImages.sports[slug as keyof typeof siteImages.sports];
  return images?.[0] ?? null;
}

export function getSportCoverImage(slug: string): string | null {
  return getSportCover(slug)?.src ?? null;
}

export function getGalleryImages(categoryId: GalleryCategoryId): SiteImage[] {
  return siteImages.gallery[categoryId];
}
