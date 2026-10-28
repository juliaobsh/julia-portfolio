"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { business } from "@/data/business";

const nav = [{href:"/business",label:"Home"},{href:"/business/services",label:"Services"},{href:"/business/industries",label:"Industries"},{href:"/business/work",label:"Work"},{href:"/business/process",label:"How I Work"},{href:"/business/about",label:"About"},{href:"/business/contact",label:"Contact"}];
const services = [{href:"/business/services/process-improvement",label:"Process improvement"},{href:"/business/services/data-analytics",label:"Data analytics"},{href:"/business/services/automation",label:"Automation"},{href:"/business/services/reporting",label:"Reporting & integration"}];

export function ConsultingNav() {
  const path = usePathname().replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const servicesList = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const close = () => { setOpen(false); setServicesOpen(false); };
  useEffect(() => {
    const onOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) { setServicesOpen(false); setOpen(false); }
    };
    document.addEventListener("pointerdown", onOutside);
    return () => document.removeEventListener("pointerdown", onOutside);
  }, []);
  const onServicesKey = (event: KeyboardEvent<HTMLElement>) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    setServicesOpen(true);
    const key = event.key;
    const target = event.target;
    requestAnimationFrame(() => {
      const links = Array.from(servicesList.current?.querySelectorAll<HTMLAnchorElement>("a") || []);
      const current = links.indexOf(target as HTMLAnchorElement);
      const next = key === "Home" ? 0 : key === "End" ? links.length - 1 : key === "ArrowUp" ? (current <= 0 ? links.length - 1 : current - 1) : (current + 1) % links.length;
      links[next]?.focus();
    });
  };
  const onEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Escape") return;
    if (servicesOpen) { setServicesOpen(false); servicesButton.current?.focus(); }
    else if (open) { setOpen(false); menuButton.current?.focus(); }
  };

  return <header ref={header} className="consult-nav" onKeyDown={onEscape}>
    <div className="consult-container nav-inner">
      <Link className="consult-brand" href="/business" onClick={close}><span className="brand-mark">YO</span><span>Yulia Obshansky<small>CONSULTING</small></span></Link>
      <button ref={menuButton} type="button" className="mobile-toggle" aria-expanded={open} aria-controls="consult-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => { setOpen(!open); setServicesOpen(false); }}>{open ? "Close ✕" : "Menu ☰"}</button>
      <nav id="consult-menu" aria-label="Consulting navigation" className={open ? "nav-links nav-open" : "nav-links"}>
        {nav.map(item => {
          const active = path === item.href || (item.href !== "/business" && path.startsWith(item.href + "/"));
          return <div className={`nav-entry ${item.label === "Services" && servicesOpen ? "services-open" : ""}`} key={item.href} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}>
            {item.label === "Services" ? <div className="services-disclosure" onKeyDown={onServicesKey}>
              <button ref={servicesButton} type="button" className={`services-trigger ${active ? "active" : ""}`} aria-expanded={servicesOpen} aria-controls="consult-services" onClick={() => setServicesOpen(!servicesOpen)}>
                Services <svg className="services-chevron" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>
              </button>
              <div ref={servicesList} id="consult-services" className="nav-submenu" hidden={!servicesOpen}>
                <Link className="services-overview" href="/business/services" onClick={close}>All services &amp; pricing <span aria-hidden="true">↗</span></Link>
                {services.map(service => <Link aria-current={path === service.href ? "page" : undefined} href={service.href} key={service.href} onClick={close}>{service.label}</Link>)}
              </div>
            </div> : <Link aria-current={active ? "page" : undefined} className={active ? "active" : undefined} href={item.href} onClick={close}>{item.label}</Link>}
          </div>;
        })}
        <a className="consult-button nav-book" href={business.bookingUrl} target="_blank" rel="noopener noreferrer">Book a Free Consultation ↗</a>
      </nav>
    </div>
  </header>;
}
