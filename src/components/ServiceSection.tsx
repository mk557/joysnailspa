type ServiceSectionProps = {
  title: string;
  items: string[];
  note?: string;
};

export default function ServiceSection({ title, items, note }: ServiceSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-1 font-display text-lg tracking-[0.2em] text-charcoal uppercase">
        {title}
      </h2>
      {note && (
        <p className="mb-4 text-sm italic text-tan-dark">{note}</p>
      )}
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-tan/20 py-2.5 text-sm text-charcoal"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
