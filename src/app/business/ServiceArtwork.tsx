const titles: Record<string, string> = {
  "process-improvement": "A clearer path through the work",
  "data-analytics": "Turn information into a useful view",
  automation: "Connect the steps. Reduce repetition.",
  reporting: "Bring the information together",
};

export function ServiceIcon({kind}:{kind:string}) {
  return <svg className="service-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    {kind === "process-improvement" ? <><rect x="5" y="22" width="15" height="20" rx="4"/><rect x="44" y="22" width="15" height="20" rx="4"/><path d="M20 32h24m-6-6 6 6-6 6M12 12h40"/></> : kind === "data-analytics" ? <><path d="M9 10v44h47M19 43V30m13 13V19m13 24V9"/><circle cx="19" cy="23" r="3"/><circle cx="32" cy="12" r="3"/><circle cx="45" cy="3" r="2"/></> : kind === "automation" ? <><rect x="5" y="5" width="19" height="19" rx="5"/><rect x="40" y="40" width="19" height="19" rx="5"/><path d="M24 14h19a7 7 0 0 1 7 7v19M40 50H21a7 7 0 0 1-7-7V24m30 10 6 6 6-6"/></> : <><rect x="16" y="7" width="35" height="46" rx="5"/><path d="M16 16H9v41a4 4 0 0 0 4 4h29v-8M24 20h19M24 30h19M24 40h10"/></>}
  </svg>;
}

export function ServiceArtwork({kind="process-improvement", compact=false}:{kind?:string;compact?:boolean}) {
  return <div className={`service-artwork ${compact?"compact":""}`}>
    <div className="artwork-top"><span>THE IDEA, SIMPLIFIED</span><ServiceIcon kind={kind}/></div>
    <svg className="service-scene" viewBox="0 0 420 195" fill="none" role="img" aria-label={`${titles[kind] ?? titles.reporting}. Concept illustration, not client results.`}>
      <rect x="1" y="1" width="418" height="193" rx="12" fill="#faf7f2"/>
      <path d="M24 160H396M24 96H396M104 18V177M208 18V177M312 18V177" stroke="#eee6ef"/>
      {kind==="data-analytics" ? <>
        <rect x="39" y="35" width="116" height="123" rx="8" fill="white" stroke="#d8cedc"/><path d="M56 57h58M56 73h82M56 89h68M56 105h74" stroke="#b8a8c1" strokeWidth="3" strokeLinecap="round"/>
        <path className="draw-line" pathLength="1" d="M166 96h42m-7-6 7 6-7 6" stroke="#77637f" strokeWidth="2"/>
        <rect x="223" y="44" width="159" height="110" rx="9" fill="#f0e8f2" stroke="#d8cedc"/>
        <rect x="243" y="106" width="22" height="30" rx="3" fill="#c4b3ce"/><rect x="279" y="86" width="22" height="50" rx="3" fill="#a38caf"/><rect x="315" y="64" width="22" height="72" rx="3" fill="#77637f"/>
      </> : kind==="reporting" ? <>
        {[0,1,2].map(i=><g key={i} transform={`translate(${26+i*18},${30+i*15})`}><rect width="88" height="106" rx="7" fill={i===2?'#fff':'#eae0ed'} stroke="#b8a8c1"/><path d="M18 28h51M18 44h39M18 60h47" stroke="#b8a8c1" strokeWidth="3" strokeLinecap="round"/></g>)}
        <path className="draw-line" pathLength="1" d="M171 99h43m-7-6 7 6-7 6" stroke="#77637f" strokeWidth="2"/>
        <rect x="231" y="38" width="154" height="124" rx="8" fill="white" stroke="#b8a8c1"/><rect x="231" y="38" width="154" height="30" rx="8" fill="#e2d7e5"/>
        <path d="M248 88h119M248 110h119M248 132h119M289 78v66M331 78v66" stroke="#d8cedc"/>
      </> : <>
        <rect x="28" y="56" width="90" height="86" rx="10" fill="white" stroke="#b8a8c1"/>
        <path d="M49 80h48M49 94h36M49 108h42" stroke="#b8a8c1" strokeWidth="3" strokeLinecap="round"/>
        <path className="draw-line" pathLength="1" d={kind==='automation'?"M118 99h44V49h80v50h44":"M118 99h44m-7-6 7 6-7 6M254 99h32m-7-6 7 6-7 6"} stroke="#77637f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="167" y="56" width="86" height="86" rx="10" fill="#e2d7e5" stroke="#b8a8c1"/>
        <circle cx="210" cy="99" r="23" fill="#faf7f2" stroke="#b8a8c1"/>
        <path d={kind==='automation'?"m212 82-11 18h12l-6 17 17-23h-13l5-12":"m199 99 8 8 15-17"} stroke="#77637f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="291" y="56" width="99" height="86" rx="10" fill="#77637f"/>
        <path d="m320 99 12 12 23-27" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        {kind==='automation'&&<circle className="flow-dot" cx="160" cy="49" r="4" fill="#77637f"/>}
      </>}
    </svg>
    {!compact && <p>{titles[kind] ?? titles.reporting}</p>}
    <span className="artwork-caption">Concept illustration · Built around your process</span>
  </div>;
}
