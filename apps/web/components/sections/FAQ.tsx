import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/site.config";

export function FAQ() {
  return (
    <section id="faq" className="section-pad relative scroll-mt-20">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient">answered.</span>
            </>
          }
          description="Everything procurement, operations, and people teams tend to ask."
        />
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
