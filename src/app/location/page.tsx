import type { Metadata } from "next";
import GoogleMap from "@/components/GoogleMap";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Location | Joy's Nail & Spa | United States",
};

export default function LocationPage() {
  return (
    <div className="bg-cream px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <PageHero title="Location" />
        <GoogleMap />

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-2 font-display text-xs tracking-[0.25em] text-muted uppercase">
              Address
            </p>
            <p className="text-sm leading-relaxed text-charcoal">{site.address}</p>
          </div>
          <div>
            <p className="mb-2 font-display text-xs tracking-[0.25em] text-muted uppercase">
              Hours
            </p>
            <ul className="space-y-1 text-sm text-charcoal">
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 font-display text-xs tracking-[0.25em] text-muted uppercase">
              Phone
            </p>
            <a
              href={`tel:${site.phone.replace(/\D/g, "")}`}
              className="text-sm text-charcoal hover:text-tan-dark"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <p className="mb-2 font-display text-xs tracking-[0.25em] text-muted uppercase">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-charcoal hover:text-tan-dark"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
