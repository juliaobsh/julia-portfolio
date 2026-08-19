import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * A single unhedged statement of scale, placed between the hero and the About
 * essay so a scanner reaches concrete numbers before prose. The rest of the
 * site earns the right to be careful; this strip is allowed to just be plain.
 */
const stats = [
  { value: "27", label: "report enterprise BI suite" },
  { value: "14,000+", label: "records automated weekly" },
  { value: "188", label: "surveys inventoried" },
  { value: "3 orgs", label: "ServiceNow BA bridge" },
];

export function ImpactStrip() {
  return (
    <section className="border-y border-line bg-surface">
      <Container className="py-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-bold text-ink sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
