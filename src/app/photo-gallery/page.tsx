import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { galleryImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Photo Gallery | Joy's Nail & Spa",
};

export default function PhotoGalleryPage() {
  return (
    <div className="bg-cream px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <PageHero title="Photo Gallery" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image}
              className="relative aspect-square overflow-hidden bg-cream-dark"
            >
              <Image
                src={`/images/${image}`}
                alt="Joy's Nail & Spa gallery"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
