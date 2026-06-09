import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceSection from "@/components/ServiceSection";
import { miscServices } from "@/data/site";

export const metadata: Metadata = {
  title: "Beauty Perks & Kid's Special | Joy's Nail & Spa | United States",
};

export default function MiscPage() {
  return (
    <div className="bg-cream px-6 py-40 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <PageHero title="Beauty Perks & Kid's Special" />
        <ServiceSection
          title="Beauty Perks"
          items={miscServices.beautyPerks}
        />
        <ServiceSection
          title="Kid's Special"
          items={miscServices.kidsSpecial}
        />
      </div>
    </div>
  );
}
