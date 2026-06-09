import Link from "next/link";
import { site } from "@/data/site";

const encodedAddress = encodeURIComponent(site.address);
const mapEmbedSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

export default function GoogleMap() {
  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-tan/30 bg-cream-dark">
        <iframe
          title="Joy's Nail & Spa location on Google Maps"
          src={mapEmbedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-charcoal px-6 py-3 text-xs tracking-[0.2em] text-white uppercase transition-colors hover:bg-tan-dark"
        >
          Get Directions
        </Link>
      </div>
    </div>
  );
}
