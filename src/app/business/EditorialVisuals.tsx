import Image from "next/image";

const photos = {
  planning: {alt:"Notebook and lilac stationery arranged on a light desk",credit:"Jess Bailey",url:"https://unsplash.com/photos/notebook-ruler-and-keyboard-on-white-surface-OXQVfxXORJ0",width:1400,height:933},
  workspace: {alt:"A quiet desk with notebooks, headphones, and a plant",credit:"Kelly Sikkema",url:"https://unsplash.com/photos/a-desk-with-a-notebook-headphones-and-a-potted-plant-T7yUACjd3hU",width:1400,height:2100},
  journal: {alt:"An open notebook, pens, coffee, and a small plant on a wooden desk",credit:"Kelly Sikkema",url:"https://unsplash.com/photos/notebook-pens-and-coffee-on-a-wooden-table-gRZynBXSdz4",width:1200,height:1345},
  meeting: {alt:"An unoccupied shared workspace with wooden desks and natural light",credit:"nrd",url:"https://unsplash.com/photos/an-empty-office-with-a-long-table-and-chairs-DeDWCcLUHSs",width:1400,height:2100},
  architecture: {alt:"Geometric architectural details of a warm-coloured building against the sky",credit:"Simone Hutsch",url:"https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-epn8Q-Uq13U",width:1200,height:1500},
};
export type PhotoKind = keyof typeof photos;
export function EditorialPhoto({kind="planning",compact=false}:{kind?:PhotoKind;compact?:boolean}) {
  const photo=photos[kind];
  return <figure className={`editorial-photo photo-${kind} ${compact?"compact":""}`}>
    <div className="photo-window"><Image src={`/editorial/${kind}.webp`} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 700px) 100vw, 60vw" /></div>
    <figcaption>Illustrative image · Photo by <a href={photo.url} target="_blank" rel="noopener noreferrer">{photo.credit} / Unsplash ↗</a></figcaption>
  </figure>;
}
export function PhotoStory({kind="journal",eyebrow,title,description}:{kind?:PhotoKind;eyebrow:string;title:string;description:string}) {
  return <section className="photo-story consult-container"><div className="photo-story-image"><EditorialPhoto kind={kind}/><span className="photo-corner" aria-hidden="true"/></div><div className="photo-story-copy"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{description}</p><span className="story-line" aria-hidden="true"/></div></section>;
}

export function ProcessArt() {
  return <div className="process-art" role="img" aria-label="A practical improvement process: understand the problem, connect the information, and build a useful solution.">
    <p className="eyebrow">From a question to a clearer way forward</p>
    <div className="process-art-flow">
      <div><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="27" cy="27" r="16"/><path d="m39 39 14 14M20 28l5 5 10-12"/></svg><span>Understand</span><small>Find the real bottleneck</small></div>
      <span className="process-art-connector" aria-hidden="true">→</span>
      <div><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><rect x="7" y="8" width="18" height="16" rx="3"/><rect x="39" y="39" width="18" height="16" rx="3"/><path d="M25 16h19a5 5 0 0 1 5 5v18M39 47H20a5 5 0 0 1-5-5V24"/></svg><span>Connect</span><small>Make information useful</small></div>
      <span className="process-art-connector" aria-hidden="true">→</span>
      <div><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><rect x="8" y="10" width="48" height="44" rx="5"/><path d="M8 21h48M19 43l8-9 9 5 10-12"/><circle cx="16" cy="16" r="1"/></svg><span>Improve</span><small>Build, verify, and hand over</small></div>
    </div>
  </div>;
}
