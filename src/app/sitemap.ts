export const dynamic = "force-static";
import type {MetadataRoute} from "next";import {site} from "@/data/site";import {projects} from "@/data/projects";
const paths=["/","/business","/business/services","/business/services/process-improvement","/business/services/data-analytics","/business/services/automation","/business/services/reporting","/business/industries","/business/work","/business/process","/business/about","/business/contact"];
export default function sitemap():MetadataRoute.Sitemap{return [...paths,...projects.map(project=>`/projects/${project.slug}`)].map(path=>({url:new URL(path,site.url).toString(),changeFrequency:"monthly",priority:path==="/business"?0.9:0.6}))}
