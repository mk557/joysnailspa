type PageHeroProps = {
  subtitle?: string;
  title: string;
};

export default function PageHero({ subtitle = "To Perfection", title }: PageHeroProps) {
  return (
    <div className="mb-14 text-center">
      <p className="mb-2 font-body text-sm tracking-[0.3em] text-tan-dark uppercase">
        {subtitle}
      </p>
      <h1 className="font-display text-3xl tracking-[0.15em] text-charcoal uppercase md:text-4xl">
        {title}
      </h1>
      <div className="mx-auto mt-6 h-px w-16 bg-tan" />
    </div>
  );
}
