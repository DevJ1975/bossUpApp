import { Marquee } from "@/components/ui/Marquee";
import { LogoWordmark } from "@/components/ui/LogoWordmark";
import { clients } from "@/lib/site.config";

export function ClientsMarquee() {
  return (
    <section className="relative border-y border-line bg-night/60 py-10 backdrop-blur-sm">
      <p className="container-px mx-auto mb-8 max-w-7xl text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted/70">
        Trusted by workforce &amp; learning teams at
      </p>
      <Marquee>
        {clients.map((client) => (
          <LogoWordmark
            key={client.name}
            name={client.name}
            className="text-2xl text-muted/60 transition-colors hover:text-fg sm:text-3xl"
          />
        ))}
      </Marquee>
    </section>
  );
}
