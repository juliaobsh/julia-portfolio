// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e9ddff] via-[#e6f4ff] to-[#e6fff5] text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Hero */}
        <section className="mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Hi, I&apos;m <span className="text-violet-600">Julia</span>.
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-700 md:text-lg">
            I&apos;m a Computer Science student who loves building cozy game
            experiences, aesthetic tools, and practical automation scripts.
          </p>
          <p className="mt-2 max-w-xl text-sm text-slate-600">
            My interests include game development, UI/UX design, and software
            engineering — especially where creativity and clean design meet.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-6 py-2 text-sm font-medium text-white shadow-md shadow-violet-200 transition hover:bg-violet-700"
            >
              View my projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white/60 px-6 py-2 text-sm font-medium text-slate-800 backdrop-blur-sm transition hover:border-violet-300 hover:text-violet-700"
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
          <p className="mt-2 text-sm text-slate-600">
            A mix of game dev, product design, and automation work.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Leaf Drift */}
            <article className="rounded-2xl bg-white/80 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Leaf Drift — Cozy Unity 3D Game
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-violet-500">
                Unity • C# • Game Design • URP
              </p>
              <p className="mt-3 text-sm text-slate-700">
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
                Crochet Companion — Project Tracker App Concept
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-rose-500">
                UI/UX • Figma • Product Design
              </p>
              <p className="mt-3 text-sm text-slate-700">
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
                Automation &amp; Scripting — Python Tooling
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-sky-500">
                Python • Selenium • BeautifulSoup • Requests
              </p>
              <p className="mt-3 text-sm text-slate-700">
                A collection of scripts that automate bits of my workflow: HTTP
                checks using <code>requests</code>, HTML parsing with
                BeautifulSoup, and Selenium-based browser automation. These are
                used for environment validation, testing corporate setups, and
                scraping structured data for analysis.
              </p>
            </article>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Experience
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Hands-on industry and academic experience.
          </p>

          <div className="mt-4 space-y-4">
            <article className="rounded-2xl bg-white/80 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
              <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                <h3 className="text-sm font-semibold text-slate-900">
                  Business Analyst / Developer Co-op
                </h3>
                <p className="text-xs text-slate-500">
                  Hydro One · 2025 (8–12 month co-op)
                </p>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-violet-500">
                Automation · Internal Tools · Reporting
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-700 list-disc list-inside">
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

        {/* About / Skills */}
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            About &amp; Skills
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/70 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                A bit about me
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                I&apos;m a Computer Science student with interests in game
                development, UX-focused tools, and automation. I enjoy taking
                ideas that feel cozy or fun — like a drifting leaf or a crochet
                project — and turning them into structured, interactive
                experiences.
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Tech stack
              </h3>
              <ul className="mt-2 grid grid-cols-2 gap-1 text-sm text-slate-700">
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
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-4">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Contact
          </h2>
          <p className="mt-2 text-sm text-slate-700">
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
  );
}
