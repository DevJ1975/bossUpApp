/**
 * Generates the downloadable BossUp sales brochure at public/bossup-overview.pdf.
 *
 * Marketing copy authored for a pitch to Hartsfield-Jackson Atlanta International
 * Airport (ATL), positioning BossUp as a frontline-to-leadership platform,
 * delivered in partnership with Workplace Learning Systems.
 *
 * Run with: node scripts/generate-brochure.mjs
 */
import React from "react";
import path from "node:path";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToFile,
} from "@react-pdf/renderer";

const h = React.createElement;

const C = {
  ink: "#0b1224",
  body: "#46506a",
  muted: "#7a849c",
  amber: "#e0930a",
  cyan: "#0e7490",
  navy: "#0b1224",
  soft: "#f5f7fc",
  line: "#e4e9f2",
  white: "#ffffff",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
    color: C.body,
    paddingBottom: 54,
  },
  band: {
    backgroundColor: C.navy,
    color: C.white,
    paddingVertical: 18,
    paddingHorizontal: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: { fontFamily: "Helvetica-Bold", fontSize: 18, color: C.white },
  brandAccent: { color: C.amber },
  bandRight: { fontSize: 8.5, color: "#aeb8d0", maxWidth: 200, textAlign: "right" },
  body: { paddingHorizontal: 44 },
  eyebrow: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    letterSpacing: 1.2,
    color: C.amber,
    marginTop: 22,
  },
  title: {
    fontFamily: "Helvetica-Bold",
    fontSize: 26,
    color: C.ink,
    marginTop: 8,
    lineHeight: 1.1,
  },
  intro: { marginTop: 12, fontSize: 11, color: C.body, lineHeight: 1.55 },
  h2: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
    color: C.ink,
    marginTop: 22,
    marginBottom: 4,
  },
  rule: { width: 34, height: 3, backgroundColor: C.amber, marginBottom: 10 },
  p: { color: C.body },
  statRow: { flexDirection: "row", marginTop: 12, gap: 10 },
  stat: {
    flex: 1,
    backgroundColor: C.soft,
    borderRadius: 6,
    padding: 12,
    borderLeft: `3px solid ${C.amber}`,
  },
  statNum: { fontFamily: "Helvetica-Bold", fontSize: 17, color: C.ink },
  statLabel: { fontSize: 8.5, color: C.muted, marginTop: 3 },
  note: { fontSize: 7.5, color: C.muted, marginTop: 8, fontStyle: "italic" },
  featRow: { flexDirection: "row", marginTop: 9, gap: 10 },
  bullet: { color: C.amber, fontFamily: "Helvetica-Bold" },
  featTitle: { fontFamily: "Helvetica-Bold", color: C.ink },
  step: { flexDirection: "row", marginTop: 12, alignItems: "flex-start", gap: 10 },
  stepNum: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
    color: C.amber,
    width: 26,
  },
  stepTitle: { fontFamily: "Helvetica-Bold", color: C.ink, fontSize: 11 },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: C.navy,
    color: C.white,
    paddingVertical: 16,
    paddingHorizontal: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerTitle: { fontFamily: "Helvetica-Bold", fontSize: 12, color: C.white },
  footerSub: { fontSize: 9, color: "#aeb8d0", marginTop: 2 },
  footerCta: { fontFamily: "Helvetica-Bold", fontSize: 10, color: C.amber },
});

const features = [
  ["Mobile-first microlearning", "Five-minute lessons built for shift workers, on any phone, in any language."],
  ["Real-time coaching", "Nudges and playbooks that turn busy supervisors into mentors on the floor."],
  ["Role-based skill paths", "Curated tracks that move people from frontline to supervisor to manager."],
  ["Advancement & mobility", "Clear, visible paths to the next role — and the raise that comes with it."],
  ["Manager dashboards", "Skills, progress, and promotion-readiness across every team and terminal."],
  ["Recognition & culture", "Celebrate wins and build the belonging that keeps great people."],
];

const steps = [
  ["01", "Assess", "Benchmark skills, goals, and gaps for every role — from ramp to retail to operations."],
  ["02", "Learn", "Daily microlearning meets people where they are, on the device in their pocket."],
  ["03", "Coach", "Managers get prompts to coach; employees get mentors who help them level up."],
  ["04", "Advance", "Track readiness, surface internal candidates, and promote from within."],
];

function Brochure() {
  return h(
    Document,
    {
      title: "BossUp — Overview",
      author: "BossUp",
      subject: "Workforce development for Hartsfield-Jackson Atlanta International Airport",
    },
    // ---------------- Page 1 ----------------
    h(
      Page,
      { size: "A4", style: styles.page },
      h(
        View,
        { style: styles.band },
        h(Text, { style: styles.brand }, "Boss", h(Text, { style: styles.brandAccent }, "Up")),
        h(Text, { style: styles.bandRight }, "In partnership with Workplace Learning Systems")
      ),
      h(
        View,
        { style: styles.body },
        h(Text, { style: styles.eyebrow }, "WORKFORCE DEVELOPMENT — HARTSFIELD-JACKSON ATLANTA INTERNATIONAL AIRPORT"),
        h(Text, { style: styles.title }, "Help every employee ", h(Text, { style: { color: C.amber } }, "Boss Up.")),
        h(
          Text,
          { style: styles.intro },
          "BossUp is a mobile-first workforce-development platform that turns frontline talent into confident, capable leaders. Built for hourly and shift workers, it delivers microlearning, real-time coaching, and clear paths to advancement — at the scale of the world's busiest airport."
        ),

        h(Text, { style: styles.h2 }, "The opportunity at ATL"),
        h(View, { style: styles.rule }),
        h(
          Text,
          { style: styles.p },
          "Hartsfield-Jackson moves more travelers than any airport on earth. Behind every on-time departure are tens of thousands of frontline workers across ramp, gate, concessions, custodial, guest services, and operations. Keeping, growing, and promoting them is the difference between a good operation and a great one."
        ),
        h(
          View,
          { style: styles.statRow },
          h(View, { style: styles.stat }, h(Text, { style: styles.statNum }, "63K+"), h(Text, { style: styles.statLabel }, "Workers across the ATL campus")),
          h(View, { style: styles.stat }, h(Text, { style: styles.statNum }, "$4,700"), h(Text, { style: styles.statLabel }, "Avg. cost to replace one frontline hire")),
          h(View, { style: styles.stat }, h(Text, { style: styles.statNum }, "33%"), h(Text, { style: styles.statLabel }, "Typical annual frontline turnover"))
        ),
        h(Text, { style: styles.note }, "Illustrative industry benchmarks for large-scale frontline operations."),

        h(Text, { style: styles.h2 }, "What BossUp delivers"),
        h(View, { style: styles.rule }),
        ...features.map(([t, d]) =>
          h(
            View,
            { style: styles.featRow, key: t },
            h(Text, { style: styles.bullet }, "›"),
            h(Text, { style: styles.p }, h(Text, { style: styles.featTitle }, `${t}. `), d)
          )
        )
      )
    ),
    // ---------------- Page 2 ----------------
    h(
      Page,
      { size: "A4", style: styles.page },
      h(
        View,
        { style: styles.body },
        h(Text, { style: [styles.h2, { marginTop: 40 }] }, "How it works"),
        h(View, { style: styles.rule }),
        ...steps.map(([n, t, d]) =>
          h(
            View,
            { style: styles.step, key: n },
            h(Text, { style: styles.stepNum }, n),
            h(
              View,
              { style: { flex: 1 } },
              h(Text, { style: styles.stepTitle }, t),
              h(Text, { style: styles.p }, d)
            )
          )
        ),

        h(Text, { style: styles.h2 }, "Outcomes you can measure"),
        h(View, { style: styles.rule }),
        h(
          View,
          { style: styles.statRow },
          h(View, { style: styles.stat }, h(Text, { style: styles.statNum }, "+34%"), h(Text, { style: styles.statLabel }, "Frontline retention lift")),
          h(View, { style: styles.stat }, h(Text, { style: styles.statNum }, "2.1x"), h(Text, { style: styles.statLabel }, "Faster internal promotions")),
          h(View, { style: styles.stat }, h(Text, { style: styles.statNum }, "-28%"), h(Text, { style: styles.statLabel }, "Time-to-productivity")),
          h(View, { style: styles.stat }, h(Text, { style: styles.statNum }, "4.6/5"), h(Text, { style: styles.statLabel }, "Average learner rating"))
        ),
        h(Text, { style: styles.note }, "Illustrative outcomes based on workforce-development benchmarks; actual results vary by program."),

        h(Text, { style: styles.h2 }, "Built for ATL"),
        h(View, { style: styles.rule }),
        ...[
          ["Built for airport scale", "One platform for tens of thousands of workers across domestic and international concourses."],
          ["Multilingual by design", "Meet ATL's diverse workforce in the language they're most comfortable learning in."],
          ["Made for shift work", "Microlearning that fits around 24/7 operations — five minutes between flights."],
          ["Every department, every role", "Paths for ramp, gate, concessions, custodial, guest services, and operations leadership."],
        ].map(([t, d]) =>
          h(
            View,
            { style: styles.featRow, key: t },
            h(Text, { style: styles.bullet }, "›"),
            h(Text, { style: styles.p }, h(Text, { style: styles.featTitle }, `${t}. `), d)
          )
        ),

        h(Text, { style: styles.h2 }, "A partnership built for real implementation"),
        h(View, { style: styles.rule }),
        h(
          Text,
          { style: styles.p },
          "BossUp is delivered in partnership with Workplace Learning Systems — pairing a modern platform with proven instructional design, hands-on implementation, train-the-coach programs, and ongoing measurement against your retention and mobility goals."
        )
      ),
      h(
        View,
        { style: styles.footer, fixed: true },
        h(
          View,
          null,
          h(Text, { style: styles.footerTitle }, "Ready to help your people Boss Up?"),
          h(Text, { style: styles.footerSub }, "hello@bossupapp.com  ·  Book a pilot scoped to one department")
        ),
        h(Text, { style: styles.footerCta }, "BossUp × Workplace Learning Systems")
      )
    )
  );
}

const out = path.resolve("public/bossup-overview.pdf");
await renderToFile(h(Brochure), out);
console.log("wrote", path.relative(process.cwd(), out));
