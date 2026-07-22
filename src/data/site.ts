export const site = {
  name: "Yulia Obshansky",
  role: "Business Data Analyst",
  location: "Vaughan, Ontario",
  availability: "Open to data and BI opportunities",
  email: "yuliaobs@gmail.com",
  /** Update if a custom domain is added later — used for canonical + OG URLs. */
  url: "https://julia-portfolio-nine.vercel.app",
  description:
    "Portfolio of Yulia Obshansky — Computer Science co-op student and Business Data Analyst working in Power BI, business analysis, and workflow automation.",
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
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

/** Sections tracked by the navbar's active-link observer. */
export const sectionIds = [
  "hero",
  "about",
  "work",
  "experience",
  "skills",
  "contact",
] as const;
