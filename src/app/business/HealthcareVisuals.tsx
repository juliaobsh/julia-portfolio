import Image from "next/image";

export function HealthcareVisuals({ preview = false }: { preview?: boolean }) {
  const visuals = [
    { file: "dashboard", display: "dashboard.webp", full: "dashboard.png", width: 1800, height: 1100, title: "A shared view of operations", alt: "Illustrative healthcare operations dashboard with treatment stages, funding categories and data-quality checks. All displayed metrics are fictional.", caption: "Recreated from the report structure with fictional metrics and neutral labels. These sample figures are not live client data or measured project results." },
    { file: "reporting-pipeline", display: "reporting-pipeline.svg", full: "reporting-pipeline.svg", width: 1800, height: 1100, title: "A new analytics layer, built around existing workflows", alt: "Existing operational tools had no unified analytics layer. The new reporting pipeline uses Cloud Run for processing, BigQuery for analytical storage, and Power BI for owners to filter, drill down, and drill through. Reported timings are approximate: about two minutes for Cloud Run and ten to fifteen minutes for Power BI refresh.", caption: "An anonymized architecture illustration based on the current project update. The organization already had digital workflows. This project established the reporting layer; it is not a measured before-and-after time-savings comparison. Stage timings are approximate and are not a verified total refresh time." },
  ];
  return <div className={`healthcare-visuals ${preview ? "preview" : ""}`}>
    {(preview ? visuals.slice(0, 1) : visuals).map(visual => <figure className="healthcare-figure" key={visual.file}>
      <h3>{visual.title}</h3>
      <a href={`/healthcare/${visual.full}`} target="_blank" rel="noopener noreferrer" aria-label={`View full-size illustration: ${visual.title} (new tab)`}>
        <Image src={`/healthcare/${visual.display}`} width={visual.width} height={visual.height} alt={visual.alt} sizes="(max-width: 700px) 94vw, 1100px"/>
        <span className="healthcare-image-link">View full-size illustration ↗</span>
      </a>
      <figcaption>{visual.caption}</figcaption>
    </figure>)}
  </div>;
}
