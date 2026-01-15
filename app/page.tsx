// app/page.tsx

import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#edf2d8] text-slate-900 dark:bg-[#213c46] dark:text-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          {/* Hero */}
          <section id="home" className="mb-28 pt-6 md:pt-40">
            <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
              {/* LEFT: photo */}
              <div className="shrink-0 md:translate-x-10">
                <div className="relative h-56 w-56 md:h-72 md:w-72">

                  {/* glow image from Figma */}
                  <Image
                    src="/gradient.png"
                    alt=""
                    fill
                    priority
                    className="object-contain scale-230 opacity-80 blur-sm"
                  />

                  <Image
                    src="/profile.png"
                    alt="Yulia Obshansky"
                    fill
                    priority
                    className="relative object-contain scale-160 shadow-violet-300/30 ring-2 "
                  />
                </div>
              </div>

              {/* RIGHT: text */}
              <div className="w-full md:max-w-xl md:text-left">
                <h1 className="mt-3 text-4xl font-bold md:text-4xl">
                  Hello! I&apos;m{" "}
                  <span className="text-[#5E9ABF]">Yulia Obshansky</span>
                </h1>

                <h2 className="mt-3 text-xl font-bold md:text-2xl">
                  I&apos;m an aspiring Software Developer
                </h2>

                <p className="mt-4 text-base font-bold text-slate-700 md:text-lg font-mono dark:text-slate-100">
                  Currently, I&apos;m a Technical / Business Analyst at{" "}
                  <span className="text-[#5E9ABF]">Hydro One</span>
                </p>

                <p className="mt-2 text-sm font-bold text-slate-600 font-mono dark:text-slate-100">
                  I&apos;m a 3rd-4th year Computer Science student who loves building cozy game
                  experiences, aesthetic tools, and practical automation scripts. My interests
                  include game development, UI/UX design, and software engineering, especially
                  where creativity and clean design meet.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded-full bg-[#42778C] dark:bg-[#edf2d8] dark:text-slate-900 px-6 py-2 text-sm font-medium text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 font-mono font-bold"
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
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-16 pt-65">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
              Work Experience
            </h2>

            <div className="mt-4 space-y-4">
              <article className="rounded-2xl bg-white/70 dark:bg-slate-900/60 p-5 shadow-sm shadow-slate-200/60 dark:shadow-none backdrop-blur-sm">
                <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Business Analyst / Developer Co-op
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-white">
                    Hydro One · May 2025 - Present (12 month co-op)
                  </p>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-violet-500 font-mono font-bold">
                  Automation · Internal Tools · Reporting
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-700 list-disc list-inside font-mono font-bold dark:text-white">
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

          {/* Projects */}
          <section id="projects" className="mb-16 pt-65">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
              Projects
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Leaf Drift */}
              <article className="relative rounded-2xl p-6 backdrop-blur-xl border border-white/30 shadow-[0_12px_30px_rgba(30,0,60,0.18)]"
              style={{
                  backgroundImage: `
                    url("/noise.png"),
                    radial-gradient(
                      120% 120% at 10% 10%,
                      rgba(200, 194, 242, 1) 0%,
                      rgba(242, 196, 213, 0.22) 77%,
                      rgba(242, 216, 216, 1) 100%
                    )
                  `,
                  backgroundSize: "200px 200px, cover",
                  backgroundBlendMode: "overlay",
                }}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Leaf Drift - Cozy Unity 3D Game
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-violet-500 font-mono font-bold">
                  Unity • C# • Game Design • URP
                </p>
                <p className="mt-3 text-sm text-slate-700 font-mono font-bold dark:text-white">
                  A peaceful river-drifting exploration game where players guide a
                  customizable leaf as it floats along stylized water. I worked on
                  custom buoyancy physics, smooth camera controls, and
                  mount/dismount mechanics to keep the experience calm but
                  satisfying to play.
                </p>
              </article>

              {/* Crochet App */}
              <article className="relative rounded-2xl p-6 backdrop-blur-xl border border-white/30 shadow-[0_12px_30px_rgba(30,0,60,0.18)]"
              style={{
                  backgroundImage: `
                    url("/noise.png"),
                    radial-gradient(
                      120% 120% at 10% 10%,
                      rgba(200, 194, 242, 1) 0%,
                      rgba(242, 196, 213, 0.22) 77%,
                      rgba(242, 216, 216, 1) 100%
                    )
                  `,
                  backgroundSize: "200px 200px, cover",
                  backgroundBlendMode: "overlay",
                }}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Crochet Companion - Project Tracker App Concept
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-rose-500 font-mono font-bold">
                  UI/UX • Figma • Product Design
                </p>
                <p className="mt-3 text-sm text-slate-700 font-mono font-bold dark:text-white">
                  A mobile-first app concept that helps crocheters track pattern
                  progress, rows, and materials. Includes a &quot;yarn pal&quot;
                  mascot, reminders for unfinished projects, and cozy pastel
                  visuals. Designed to make long-term projects feel manageable and
                  fun.
                </p>
              </article>

              {/* Automation Scripts */}
              <article className="relative rounded-2xl p-6 backdrop-blur-xl border border-white/30 md:col-span-2 shadow-[0_12px_30px_rgba(30,0,60,0.18)]"
              style={{
                  backgroundImage: `
                    url("/noise.png"),
                    radial-gradient(
                      120% 120% at 10% 10%,
                      rgba(200, 194, 242, 1) 0%,
                      rgba(242, 196, 213, 0.22) 77%,
                      rgba(242, 216, 216, 1) 100%
                    )
                  `,
                  backgroundSize: "200px 200px, cover",
                  backgroundBlendMode: "overlay",
                }}> 
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Graph-Based Relationship Mappping API
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-sky-500 font-mono font-bold">
                  REST APIs • Java • SQL
                </p>
                <p className="mt-3 text-sm text-slate-700 font-mono font-bold dark:text-white">
                  Designed and implemented a production-style REST API managing 1,000+ graph nodes and relationships, as well as
                  improved query performance by 25% through optimized indexing, property-based queries, and dynamic updates, and
                  implemented shortest-path and traversal algorithms handling hundreds of queries per run, applying graph theory to
                  real-world data models
                </p>
              </article>
            </div>
          </section>

          

          {/* About */}
          <section id="about" className="mb-16">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
              About Me
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white/70 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-slate-900 font-mono font-bold dark:text-white">
                  A bit about me
                </h3>
                <p className="mt-2 text-sm text-slate-700 font-mono font-bold dark:text-white">
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
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
              Skills
            </h2>
            <div className="rounded-2xl bg-white/70 p-5 shadow-sm shadow-slate-200 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Tech stack
                </h3>
                <ul className="mt-2 grid grid-cols-2 gap-1 text-sm text-slate-700 font-mono font-bold dark:text-white">
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
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
              Contact
            </h2>
            <p className="mt-2 text-sm text-slate-700 font-mono font-bold dark:text-white">
              Open to co-op roles in software development, game dev, or UI/UX.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li>
                <span className="font-medium dark:text-white">Email:</span>{" "}
                <a
                  href="mailto:yuliaobs@gmail.com"
                  className="underline decoration-violet-300 underline-offset-2 hover:text-violet-700 dark:text-white"
                >
                  yuliaobs@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium dark:text-white">GitHub:</span>{" "}
                <a
                  href="https://github.com/juliaobsh"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-violet-300 underline-offset-2 hover:text-violet-700 dark:text-white"
                >
                  github.com/juliaobsh
                </a>
              </li>
              <li>
                <span className="font-medium dark:text-white">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/yulia-obshansky/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-violet-300 underline-offset-2 hover:text-violet-700 dark:text-white"
                >
                  linkedin.com/in/yulia-obshansky/
                </a>
              </li>
            </ul>
          </section>

          <footer className="mt-8 border-t border-white/60 pt-4 text-xs text-slate-500 dark:text-white">
            © {new Date().getFullYear()} Julia. Built with Next.js &amp; Tailwind
            CSS.
          </footer>
        </div>
      </main>
    </>
  );
}
