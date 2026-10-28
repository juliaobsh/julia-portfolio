import { ConsultingMotion } from "./ConsultingMotion";
import type { ReactNode } from "react";
import { ConsultingNav } from "./ConsultingNav";
import Link from "next/link";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./consulting.css";
import "./reference-style.css";
const editorial = Cormorant_Garamond({subsets:["latin"],weight:["500","600","700"],variable:"--font-editorial",display:"swap"});
const bodyFont = DM_Sans({subsets:["latin"],variable:"--font-consult-body",display:"swap"});
export default function BusinessLayout({children}:{children:ReactNode}) {return <div className={`consulting ${editorial.variable} ${bodyFont.variable}`}><ConsultingNav/><ConsultingMotion>{children}</ConsultingMotion><footer className="consult-footer"><div className="consult-container"><div><strong>Yulia Obshansky</strong><p>Independent business process & analytics consultant · Vaughan, Thornhill & GTA</p></div><div className="footer-links"><Link href="/business/services">Services</Link><Link href="/business/industries">Industries</Link><Link href="/business/work">Work</Link><Link href="/business/process">How I Work</Link><Link href="/business/about">About</Link><Link href="/business/contact">Contact</Link><Link href="/">Personal portfolio</Link></div><p>© {new Date().getFullYear()} Yulia Obshansky. Independent consulting.</p></div></footer></div>}
