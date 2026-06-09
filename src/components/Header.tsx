"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/data/site";

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block py-2 text-sm tracking-[0.2em] uppercase transition-colors hover:text-tan-dark ${
        active ? "text-tan-dark font-semibold" : "text-charcoal"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 hidden h-full w-56 flex-col border-r border-cream-dark bg-cream lg:flex">
        <div className="flex flex-1 flex-col px-8 py-10">
          <Link href="/" className="mb-10">
            <p className="font-display text-xs tracking-[0.35em] text-charcoal">
              JOY&apos;S NAIL &amp; SPA
            </p>
          </Link>

          <nav className="flex flex-1 flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between py-2 text-sm tracking-[0.2em] text-charcoal uppercase transition-colors hover:text-tan-dark"
                  >
                    {item.label}
                    <span className="text-xs">{servicesOpen ? "−" : "+"}</span>
                  </button>
                  {servicesOpen && (
                    <div className="ml-3 border-l border-tan/40 pl-3">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          href={child.href}
                          label={child.label}
                          active={isActive(child.href)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={isActive(item.href)}
                />
              ),
            )}
          </nav>

          <div className="mt-auto space-y-1 text-xs text-muted">
            <p className="tracking-wider uppercase">Address</p>
            <p className="leading-relaxed normal-case">{site.address}</p>
          </div>
        </div>
      </header>

      <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-cream-dark bg-cream/95 px-5 py-4 backdrop-blur-sm lg:hidden">
        <Link href="/">
          <p className="font-display text-[10px] tracking-[0.3em] text-charcoal">
            JOY&apos;S NAIL &amp; SPA
          </p>
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-cream pt-20 lg:hidden">
          <nav className="flex flex-col gap-1 px-8 py-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="mb-2">
                  <p className="py-2 text-sm tracking-[0.2em] text-muted uppercase">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 pl-4 text-sm tracking-[0.15em] text-charcoal uppercase"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-sm tracking-[0.2em] text-charcoal uppercase"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </>
  );
}
