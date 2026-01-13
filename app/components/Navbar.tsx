// app/components/Navbar.tsx
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
        <nav className="bg-violet-100/80 backdrop-blur shadow-md shadow-violet-200/40">
            <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex items-center justify-between rounded-2xl px-5">
                {/* Left: logo */}
                <a className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </a>

                <ThemeToggle />

                {/* Center: links */}
                <ul className="hidden items-center gap-10 text-sm font-bold text-slate-800 md:flex font-mono">
                <li><a href="#home" className="hover:text-violet-700">Home</a></li>
                <li><a href="#about" className="hover:text-violet-700">About</a></li>
                <li><a href="#projects" className="hover:text-violet-700">Projects</a></li>
                <li><a href="#skills" className="hover:text-violet-700">Skills</a></li>
                <li><a href="#contact" className="hover:text-violet-700">Contact</a></li>
                </ul>

                {/* Right: resume button */}
                <a
                href="/resume.pdf"
                className="rounded-full bg-[#A468DA] px-6 py-2 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 font-mono"
                download
                >
                Download Resume
                </a>
            </div>
            </div>
        </nav>
    </header>
  );
}
