import SiteImage from "@/components/SiteImage";
import {
  galleryCategories,
  getGalleryImages,
  siteImages,
} from "@/data/siteImages";
import { brand } from "@/data/theme";

export default function Gallery() {
  const allImages = galleryCategories.flatMap((cat) =>
    getGalleryImages(cat.id).map((img) => ({ ...img, category: cat.title }))
  );

  const hasGalleryImages =
    siteImages.gallery.training.length > 0 ||
    siteImages.gallery.competitions.length > 0 ||
    siteImages.gallery.medals.length > 0 ||
    siteImages.gallery.certificates.length > 0;

  return (
    <section id="gallery" className={`py-16 sm:py-20 ${brand.surface.section}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading">Gallery</h2>
          <p className="section-subheading">
            Moments of triumph, dedication, and growth at our academy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {galleryCategories.map((cat) => {
            const images = getGalleryImages(cat.id);
            const cover = images[0];

            return (
              <div
                key={cat.id}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer card-hover"
              >
                {cover ? (
                  <>
                    <SiteImage
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  </>
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} flex flex-col items-center justify-center text-white p-6`}
                  >
                    <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {cat.emoji}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-6 text-white">
                  <h3 className="text-lg font-bold text-center">{cat.title}</h3>
                  <p className="text-sm text-white/80 mt-1">
                    {images.length > 0
                      ? `${images.length} photo${images.length === 1 ? "" : "s"}`
                      : "Add photos to public/images"}
                  </p>
                </div>

                <div className="absolute inset-0 flex items-end justify-center pb-16 pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold text-sm bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                    View Gallery
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {allImages.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recent photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {allImages.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square rounded-xl overflow-hidden bg-emerald-100/50"
                >
                  <SiteImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {!hasGalleryImages && (
          <p className="text-center text-sm text-gray-500">
            Drop image files into{" "}
            <code className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              frontend/public/images/
            </code>{" "}
            and list them in{" "}
            <code className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              src/data/siteImages.ts
            </code>
          </p>
        )}
      </div>
    </section>
  );
}
