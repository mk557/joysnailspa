import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceSection from "@/components/ServiceSection";
import { spaServices } from "@/data/site";

export const metadata: Metadata = {
  title: "Spa Services | Joy's Nail & Spa | United States",
};

export default function SpaServicesPage() {
  return (
    <div className="bg-cream px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <PageHero title="Spa Services" />
        <ServiceSection
          title="Spa Pedicure"
          note={spaServices.spaPedicure.note}
          items={spaServices.spaPedicure.items}
        />
        <section className="mb-12">
          <h2 className="mb-4 font-display text-lg tracking-[0.2em] text-charcoal uppercase">
            Body Massages
          </h2>
          <ul className="space-y-4">
            {spaServices.bodyMassages.map((item) => (
              <li
                key={item.name}
                className="border-b border-tan/20 py-3 text-sm text-charcoal"
              >
                <p>{item.name}</p>
                <p className="mt-1 text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
