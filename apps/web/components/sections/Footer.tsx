import { LogoWordmark } from "@/components/ui/LogoWordmark";
import { nav, site } from "@/lib/site.config";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-night/60">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <LogoWordmark variant="brand" className="text-2xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline} Delivered in partnership with {site.partner}.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-fg">Explore</h4>
            <ul className="mt-4 space-y-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-fg">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-muted transition-colors hover:text-fg"
                >
                  {site.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={site.brochurePath}
                  download
                  className="text-muted transition-colors hover:text-fg"
                >
                  Download the overview (PDF)
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-brand transition-colors hover:text-fg"
                >
                  Book a pilot →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-muted/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Purpose-built for{" "}
            {site.audience}.
          </p>
          <p>BossUp × {site.partner}</p>
        </div>
      </div>
    </footer>
  );
}
