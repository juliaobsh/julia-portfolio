export const site = {
  name: "Yulia Obshansky",
  role: "Business Data Analyst",
  location: "Vaughan, Ontario",
  availability: "Open to BI, data analyst, and technical BA roles",
  email: "yuliaobs@gmail.com",
  /** Update if a custom domain is added later — used for canonical + OG URLs. */
  url: "https://julia-portfolio-nine.vercel.app",
  description:
    "Portfolio of Yulia Obshansky — Business Data Analyst working in enterprise Power BI, Microsoft Fabric reporting, and business requirements analysis.",
  resumePath: "/resume.pdf",
} as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yulia-obshansky/",
    handle: "linkedin.com/in/yulia-obshansky",
  },
  {
    label: "GitHub",
    href: "https://github.com/juliaobsh",
    handle: "github.com/juliaobsh",
  },
] as const;

export const navigation = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Approach", id: "approach" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

/** Sections tracked by the navbar's active-link observer. */
export const sectionIds = [
  "hero",
  "about",
  "work",
  "experience",
  "approach",
  "skills",
  "contact",
] as const;
