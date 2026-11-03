import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * Business details shared by the Privacy Policy and the Terms & Conditions.
 * Fields still in [brackets] are placeholders that must be filled in
 * before publishing.
 */
export const LEGAL = {
  appName: 'izi Morocco',
  companyName: '[Legal Company/Owner Name]',
  companyCountry: '[Country, e.g., Morocco]',
  email: 'elvaigh@gmail.com',
  supportEmail: 'support@izimorocco.com',
  phone: '+33 7 83 04 85 86',
  phoneHref: '+33783048586',
  minimumAge: 13,
}

export type LegalSection = {
  id: string
  /** Short label shown in the sidebar contents list. */
  nav: string
  /** Full heading shown above the section; defaults to `nav`. */
  title?: string
  body: ReactNode
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="space-y-2.5">{children}</ul>
}

export function Item({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" aria-hidden="true" />
      <span>
        {label && <strong className="text-foreground">{label}</strong>} {children}
      </span>
    </li>
  )
}

export function Callout({ children }: { children: ReactNode }) {
  return <p className="rounded-lg border border-primary/25 bg-primary/5 p-4 text-foreground">{children}</p>
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const className = 'text-primary underline'
  return href.startsWith('/') ? (
    <Link className={className} href={href}>
      {children}
    </Link>
  ) : (
    <a className={className} href={href}>
      {children}
    </a>
  )
}

const pad = (n: number) => String(n).padStart(2, '0')

const footerLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
]

export function LegalPage({
  title,
  intro,
  lastUpdated,
  preamble,
  sections,
}: {
  title: string
  intro: string
  lastUpdated: string
  /** Unnumbered opening paragraphs shown at the top of the card. */
  preamble?: ReactNode
  sections: LegalSection[]
}) {
  return (
    <main className="min-h-screen bg-background">
      <header className="hero-surface relative overflow-hidden px-6 py-20">
        <div className="zellige absolute inset-0 opacity-35" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.3em] text-gold transition-opacity hover:opacity-75"
          >
            ← {LEGAL.appName}
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-background sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-xl text-background/75">{intro}</p>
          <p className="mt-6 inline-flex rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-wide text-gold">
            Last Updated · {lastUpdated}
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[240px_1fr]">
        <nav aria-label="Sections" className="hidden lg:block">
          <div className="sticky top-10">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Contents</p>
            <ol className="space-y-2 text-sm">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="text-gold">{pad(i + 1)}</span>
                    {section.nav}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="relic-card min-w-0 space-y-12 rounded-2xl p-7 sm:p-10">
          {preamble && (
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">{preamble}</div>
          )}
          {sections.map((section, i) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm font-bold text-gold">{pad(i + 1)}</span>
                <h2 className="text-2xl font-semibold text-foreground">{section.title ?? section.nav}</h2>
              </div>
              <div className="gold-rule mt-3 mb-5 h-px w-24 rounded-full" />
              <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">{section.body}</div>
            </section>
          ))}
        </article>
      </div>

      <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
        <nav aria-label="Legal" className="mb-3 flex justify-center gap-6">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        © {new Date().getFullYear()} {LEGAL.appName}. Hunt responsibly.
      </footer>
    </main>
  )
}
