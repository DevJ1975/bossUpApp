import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site.config";

export function Testimonials() {
  return (
    <section className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          eyebrow="What leaders say"
          title={
            <>
              The kind of results worth{" "}
              <span className="text-gradient">talking about.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={i * 0.1}>
              <figure className="glass flex h-full flex-col rounded-2xl p-8">
                <span className="font-display text-5xl leading-none text-brand/70">
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1 text-lg leading-relaxed text-fg/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <div className="font-semibold text-fg">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
