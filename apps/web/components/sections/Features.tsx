import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/lib/site.config";
import { featureIcons } from "@/components/ui/icons";

export function Features() {
  return (
    <section className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          eyebrow="The platform"
          title={
            <>
              Everything a growing workforce needs —{" "}
              <span className="text-gradient">in one app.</span>
            </>
          }
          description="Six capabilities that work together to build skills, retain people, and grow leaders from within."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = featureIcons[feature.icon];
            return (
              <Reveal key={feature.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-white/[0.03] p-7 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-accent/10 text-brand">
                    {Icon ? <Icon size={24} /> : null}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-fg">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
