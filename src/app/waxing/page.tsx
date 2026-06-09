import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceSection from "@/components/ServiceSection";
import { waxingServices } from "@/data/site";

export const metadata: Metadata = {
  title: "Waxing | Joy's Nail & Spa | United States",
};

export default function WaxingPage() {
  return (
    <div className="bg-cream px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <PageHero title="Waxing" />
        <ServiceSection title="Waxing" items={waxingServices} />
      </div>
    </div>
  );
}
