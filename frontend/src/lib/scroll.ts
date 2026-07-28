const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Home-page section href that respects GitHub Pages basePath. */
export function homeSectionHref(id: string): string {
  return `${basePath}/#${id}`;
}

/** Smooth-scroll to a section if it's on this page; otherwise navigate to home + hash. */
export function goToHomeSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", homeSectionHref(id));
    return;
  }
  window.location.assign(homeSectionHref(id));
}
