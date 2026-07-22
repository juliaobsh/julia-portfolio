
import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMetaOptions = {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/projects/leadership-kpi-dashboard". */
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: PageMetaOptions): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
