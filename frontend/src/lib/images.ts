/** Build a public image URL from a filename in /public/images */
export function imagePath(filename: string): string {
  return `/images/${filename}`;
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
