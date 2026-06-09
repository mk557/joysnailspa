import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-cream-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-12">
        <div>
          <p className="mb-3 font-display text-xs tracking-[0.3em] text-charcoal">
            ADDRESS
          </p>
          <p className="text-sm leading-relaxed text-charcoal">{site.address}</p>
        </div>
        <div>
          <p className="mb-3 font-display text-xs tracking-[0.3em] text-charcoal">
            CONTACT
          </p>
          <p className="text-sm text-charcoal">
            <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="hover:text-tan-dark">
              {site.phone}
            </a>
          </p>
          <p className="mt-1 text-sm text-charcoal">
            <a href={`mailto:${site.email}`} className="hover:text-tan-dark">
              {site.email}
            </a>
          </p>
        </div>
        <div>
          <p className="mb-3 font-display text-xs tracking-[0.3em] text-charcoal">
            HOURS
          </p>
          <ul className="space-y-1 text-sm text-charcoal">
            {site.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-tan/20 py-6 text-center text-xs tracking-wider text-muted">
        <p>{site.copyright}</p>
        <div className="mt-3 flex justify-center gap-4">
          <Link
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tan-dark"
          >
            Instagram
          </Link>
          <Link
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tan-dark"
          >
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
}
