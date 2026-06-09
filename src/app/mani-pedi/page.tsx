import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceSection from "@/components/ServiceSection";
import { maniPediServices } from "@/data/site";

export const metadata: Metadata = {
  title: "Mani & Pedi | Joy's Nail & Spa | United States",
};

export default function ManiPediPage() {
  return (
    <div className="bg-cream px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <PageHero title="Mani & Pedi" />
        <ServiceSection title="Manicure" items={maniPediServices.manicure} />
        <ServiceSection title="Color Gel" items={maniPediServices.colorGel} />
        <ServiceSection title="Pedicure" items={maniPediServices.pedicure} />
        <ServiceSection
          title="Full Set & Fill-ins"
          items={maniPediServices.fullSet}
        />
      </div>
    </div>
  );
}
