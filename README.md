# Yulia Obshansky - Business Data Analyst Portfolio

Personal portfolio website showcasing my experience in enterprise business intelligence, Power BI reporting, data validation, workflow automation, and technical business analysis.

**Live site:** [julia-portfolio-nine.vercel.app](https://julia-portfolio-nine.vercel.app/)

## About the portfolio

This portfolio is designed to show more than finished dashboards. It documents how I approach real analytical work: understanding an existing reporting environment, investigating ambiguous requests, implementing careful changes, validating results, supporting QA, and communicating findings clearly.

The featured case studies cover work involving:

- Enterprise Power BI report enhancements
- DAX, filter context, and report validation
- Microsoft Fabric reporting workflows
- Cybersecurity vulnerability triage automation
- Enterprise survey-platform discovery
- Contact-centre speech and text analytics

Because much of this work was completed in an enterprise environment, company-sensitive details, internal identifiers, employee information, and production data have been removed or reconstructed.

## Featured case studies

### Enterprise Contact-Centre Reporting Suite

Implemented and validated ticket-driven Power BI enhancements across operational and performance reports within a larger enterprise reporting environment.

### Enterprise Survey Platform Migration

Supported discovery and analysis for the migration of an enterprise survey ecosystem, including inventory review, stakeholder outreach, and requirements consolidation.

### Cybersecurity Vulnerability Triage Automation

Automated recurring vulnerability-processing tasks using Excel VBA and CMDB enrichment to support the weekly handling of large security datasets.

### ApexAuto - Electric Vehicle Marketplace

Created the original UI/UX direction and prototype for a full-stack electric-vehicle marketplace, implemented selected React and TypeScript frontend functionality, and conducted functional and usability testing across key user journeys.

## Tech stack

- **Framework:** Next.js 16 using the App Router
- **Frontend:** React 19 and TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Sora, Manrope, and DM Mono through `next/font`
- **Analytics:** Vercel Analytics and Speed Insights
- **Deployment:** Vercel

## Key features

- Responsive, accessible single-page portfolio
- Dynamically generated case-study routes
- Data-driven project content stored separately from presentation components
- Custom project visuals built with React and CSS
- Scroll-based reveal animations with reduced-motion support
- SEO metadata, canonical URLs, and social metadata
- Downloadable résumé and direct contact links
- Clear distinction between work I owned directly, work I collaborated on, and systems maintained by other teams

## Project structure

```text
src/
├── app/
│   ├── projects/[slug]/    # Dynamically generated case-study pages
│   ├── globals.css         # Design tokens, typography, and animation styles
│   ├── layout.tsx          # Global metadata, fonts, navigation, and analytics
│   └── page.tsx            # Homepage composition
├── components/
│   ├── layout/             # Navbar and footer
│   ├── sections/           # Homepage sections
│   ├── ui/                 # Reusable interface components
│   └── visuals/            # Custom portfolio and project visuals
├── data/
│   ├── approach.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── site.ts
│   └── skills.ts
├── lib/                    # Metadata and utility helpers
└── types/                  # Shared TypeScript definitions
```

## Confidentiality

The case studies are based on real professional experience, but public-facing content is intentionally anonymized. Visuals may use reconstructed layouts or representative data to demonstrate the analytical process without exposing confidential company information, system identifiers, credentials, or operational records.

## Contact

- [Portfolio](https://julia-portfolio-nine.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/yulia-obshansky/)
- [GitHub](https://github.com/juliaobsh)
- [Email](mailto:yuliaobs@gmail.com)

---

Built and maintained by **Yulia Obshansky**.
