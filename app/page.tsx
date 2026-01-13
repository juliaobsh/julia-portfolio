// app/page.tsx

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-violet-100/80 text-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-16">
          {/* Hero */}
          <section id="home" className="mb-16">
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              Hello! I&apos;m <span className="text-[#A468DA]">Yulia Obshansky</span>
            </h1>
            <h2 className="mt-3 text-xl font-bold md:text-3xl">
              I'm an aspiring Software Developer.
            </h2>
            <p className="mt-4 max-w-xl text-base font-bold text-slate-700 md:text-lg font-mono">
               Currently, I'm a Business / Technical Analyst at <span className="text-[#A468DA]">Hydro One</span>.
            </p>
            <p className="mt-2 max-w-xl text-sm font-bold text-slate-600 font-mono">
              I&apos;m a 3rd year Computer Science student who loves building cozy game
              experiences, aesthetic tools, and practical automation scripts. My interests include game development, UI/UX design, and software
              engineering, especially where creativity and clean design meet.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-[#A468DA] px-6 py-2 text-sm font-medium text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 font-mono font-bold"
              >
                View my projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 bg-white/60 px-6 py-2 text-sm font-medium text-slate-800 backdrop-blur-sm transition hover:border-violet-300 hover:text-violet-700 font-mono font-bold"
              >
                Get in touch
              </a>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Projects
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Leaf Drift */}
              <article className="rounded-2xl bg-white/80 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Leaf Drift - Cozy Unity 3D Game
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-violet-500 font-mono font-bold">
                  Unity • C# • Game Design • URP
                </p>
                <p className="mt-3 text-sm text-slate-700 font-mono font-bold">
                  A peaceful river-drifting exploration game where players guide a
                  customizable leaf as it floats along stylized water. I worked on
                  custom buoyancy physics, smooth camera controls, and
                  mount/dismount mechanics to keep the experience calm but
                  satisfying to play.
                </p>
              </article>

              {/* Crochet App */}
              <article className="rounded-2xl bg-white/80 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Crochet Companion - Project Tracker App Concept
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-rose-500 font-mono font-bold">
                  UI/UX • Figma • Product Design
                </p>
                <p className="mt-3 text-sm text-slate-700 font-mono font-bold">
                  A mobile-first app concept that helps crocheters track pattern
                  progress, rows, and materials. Includes a &quot;yarn pal&quot;
                  mascot, reminders for unfinished projects, and cozy pastel
                  visuals. Designed to make long-term projects feel manageable and
                  fun.
                </p>
              </article>

              {/* Automation Scripts */}
              <article className="rounded-2xl bg-white/80 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm md:col-span-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  Graph-Based Relationship Mappping API
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-sky-500 font-mono font-bold">
                  REST APIs • Java • SQL
                </p>
                <p className="mt-3 text-sm text-slate-700 font-mono font-bold">
                  Designed and implemented a production-style REST API managing 1,000+ graph nodes and relationships, as well as
                  improved query performance by 25% through optimized indexing, property-based queries, and dynamic updates, and
                  implemented shortest-path and traversal algorithms handling hundreds of queries per run, applying graph theory to
                  real-world data models
                </p>
              </article>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Experience
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-mono font-bold">
              Hands-on industry and academic experience.
            </p>

            <div className="mt-4 space-y-4">
              <article className="rounded-2xl bg-white/80 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
                <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Business Analyst / Developer Co-op
                  </h3>
                  <p className="text-xs text-slate-500">
                    Hydro One · May 2025 - Present (12 month co-op)
                  </p>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-violet-500 font-mono font-bold">
                  Automation · Internal Tools · Reporting
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-700 list-disc list-inside font-mono font-bold">
                  <li>
                    Built automation and analysis tools using Python, Excel, and
                    internal platforms to simplify recurring reporting tasks.
                  </li>
                  <li>
                    Documented workflows, created playbooks, and helped improve
                    usability of internal tools for non-technical stakeholders.
                  </li>
                  <li>
                    Collaborated with developers and analysts to debug issues and
                    validate data quality in production-like environments.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* About */}
          <section id="about" className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              About Me
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white/70 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-slate-900 font-mono font-bold">
                  A bit about me
                </h3>
                <p className="mt-2 text-sm text-slate-700 font-mono font-bold">
                  I&apos;m a Computer Science student with interests in game
                  development, UX-focused tools, and automation. I enjoy taking
                  ideas that feel cozy or fun - like a drifting leaf or a crochet
                  project - and turning them into structured, interactive
                  experiences.
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Skills
            </h2>
            <div className="rounded-2xl bg-white/70 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Tech stack
                </h3>
                <ul className="mt-2 grid grid-cols-2 gap-1 text-sm text-slate-700 font-mono font-bold">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C# / Unity</li>
                  <li>JavaScript / TypeScript</li>
                  <li>HTML &amp; CSS</li>
                  <li>Next.js (learning)</li>
                  <li>Selenium &amp; BeautifulSoup</li>
                  <li>Git &amp; GitHub</li>
                </ul>
              </div>
          </section>


          {/* Contact */}
          <section id="contact" className="mb-4">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Contact
            </h2>
            <p className="mt-2 text-sm text-slate-700 font-mono font-bold">
              Open to co-op roles in software development, game dev, or UI/UX.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:yuliaobs@gmail.com"
                  className="underline decoration-violet-300 underline-offset-2 hover:text-violet-700"
                >
                  yuliaobs@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium">GitHub:</span>{" "}
                <a
                  href="https://github.com/juliaobsh"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-violet-300 underline-offset-2 hover:text-violet-700"
                >
                  github.com/juliaobsh
                </a>
              </li>
              <li>
                <span className="font-medium">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/yulia-obshansky/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-violet-300 underline-offset-2 hover:text-violet-700"
                >
                  linkedin.com/in/yulia-obshansky/
                </a>
              </li>
            </ul>
          </section>

          <footer className="mt-8 border-t border-white/60 pt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Julia. Built with Next.js &amp; Tailwind
            CSS.
          </footer>
        </div>
      </main>
    </>
  );
}
