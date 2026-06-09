import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import InstagramFeed from "@/components/InstagramFeed";
import { serviceCards, site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero.jpg"
          alt="Joy's Nail & Spa salon interior"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="relative z-10 px-6 py-24 text-center text-white">
          <p className="mb-4 font-display text-lg tracking-[0.4em]">
            JOY&apos;S NAIL &amp; SPA
          </p>
          <h1 className="font-display text-5xl tracking-[0.12em] uppercase md:text-7xl">
            Welcome
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed font-light md:text-base">
            {site.tagline}
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/welcome.jpg"
              alt="Nail care at Joy's Nail & Spa"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="mb-2 font-display text-xs tracking-[0.35em] text-tan-dark">
              JOY&apos;S NAIL &amp; SPA
            </p>
            <p className="mb-8 text-sm leading-relaxed text-charcoal">
              {site.tagline}
            </p>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-display text-xs tracking-[0.25em] text-muted uppercase">
                  Address
                </p>
                <p className="text-sm text-charcoal">{site.address}</p>
              </div>
              <div>
                <p className="mb-2 font-display text-xs tracking-[0.25em] text-muted uppercase">
                  Contact
                </p>
                <p className="text-sm text-charcoal">
                  Telephone:{" "}
                  <a
                    href={`tel:${site.phone.replace(/\D/g, "")}`}
                    className="hover:text-tan-dark"
                  >
                    {site.phone}
                  </a>
                </p>
              </div>
              <div className="sm:col-span-2">
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-display text-2xl tracking-[0.12em] text-charcoal uppercase md:text-3xl">
            Quality Services for Dashing Results
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group overflow-hidden bg-cream transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-sm tracking-[0.2em] text-charcoal uppercase">
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="social" className="bg-cream-dark px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-2 font-display text-2xl tracking-[0.12em] text-charcoal uppercase">
            Social Media
          </h2>
          <p className="mb-10 font-display text-xs tracking-[0.3em] text-tan-dark uppercase">
            Follow Us On
          </p>

      <div className="flex justify-center gap-6">
        <Link
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-tan-dark bg-white text-xs tracking-wider text-charcoal uppercase transition-colors hover:bg-charcoal hover:text-white"
        >
          IG
        </Link>
        <Link
          href={site.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-tan-dark bg-white text-xs tracking-wider text-charcoal uppercase transition-colors hover:bg-charcoal hover:text-white"
        >
          FB
        </Link>
      </div><br></br>
          <InstagramFeed />
        </div>
      </section>

      <section id="contact" className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 font-display text-2xl tracking-[0.12em] text-charcoal uppercase">
              Contact Us
            </h2>
            <p className="mb-6 text-sm text-muted">
              Have a question or want to book an appointment? Send us a message.
            </p>
            <div className="space-y-3 text-sm text-charcoal">
              <p>{site.address}</p>
              <p>
                <a
                  href={`tel:${site.phone.replace(/\D/g, "")}`}
                  className="hover:text-tan-dark"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-tan-dark">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
