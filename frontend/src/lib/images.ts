/** Build a public image URL from a filename in /public/images */
export function imagePath(filename: string): string {
  // Must include basePath for GitHub Pages project sites (and local next.dev with basePath).
  // next/image with unoptimized static export does not rewrite these paths automatically.
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}/images/${filename}`;
}

export type SiteImage = {
  /** Path under public/, e.g. /images/training-session-01.jpg */
  src: string;
  alt: string;
  /** CSS object-position for cards / general use, e.g. "center 35%" */
  objectPosition?: string;
  /** Optional crop focus for wide detail-page heroes */
  heroObjectPosition?: string;
};
