import { SectionHeading } from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { VimeoFacade } from "@/components/ui/VimeoFacade";
import { site } from "@/lib/site.config";

export function VideoSection() {
  return (
    <section id="video" className="section-pad relative scroll-mt-20">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          align="center"
          eyebrow="See it in action"
          title={
            <>
              Two minutes that show what{" "}
              <span className="text-gradient">&ldquo;Boss Up&rdquo;</span> really
              means.
            </>
          }
        />
        <Reveal delay={0.1}>
          <div className="mt-12">
            <VimeoFacade videoId={site.vimeoVideoId} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
