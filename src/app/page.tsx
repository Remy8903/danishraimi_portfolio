import Image from "next/image";
import Link from "next/link";
import Navbar from "./_components/Navbar";
import ProjectsSection from "./_components/ProjectsSection";

const skillCategories = [
  {
    title: "Languages",
    icon: "code",
    color: "primary" as const,
    skills: [
      "HTML/CSS",
      "Java",
      "JavaScript",
      "PHP",
      "Python",
      "SQL",
      "TypeScript",
      "C++",
    ],
  },
  {
    title: "Frontend",
    icon: "web",
    color: "primary" as const,
    skills: ["React.js", "Flutter", "Livewire"],
  },
  {
    title: "Backend",
    icon: "dns",
    color: "secondary" as const,
    skills: ["Laravel", "Next.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: "database",
    color: "secondary" as const,
    skills: ["Firestore", "Supabase", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    color: "secondary" as const,
    skills: ["Docker", "Ubuntu", "VPS", "Google Cloud", "DigitalOcean"],
  },
  {
    title: "Tools",
    icon: "construction",
    color: "tertiary" as const,
    skills: [
      "Figma",
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "Redis",
      "Laragon",
      "Docker Compose",
    ],
  },
  {
    title: "Libraries",
    icon: "widgets",
    color: "tertiary" as const,
    skills: ["TailwindCSS", "Vite", "shadcn/ui"],
  },
  {
    title: "AI-Assisted Development Tools",
    icon: "smart_toy",
    color: "tertiary" as const,
    skills: ["opencode", "claudecode", "antigravity IDE"],
  },
];

const gridSpans = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-3",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col gap-32">
        {/* Hero Section */}
        <section
          className="flex flex-col md:flex-row gap-12 items-stretch min-h-[614px]"
          id="about"
        >
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6 items-start">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              Software Engineer
            </span>

            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface">
              Hi, I&apos;m Danish Raimi.
            </h1>

            <div className="font-mono text-lg text-secondary flex items-center gap-2">
              <span>{">"}</span>
              <span className="animate-blink">█</span>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              I am a Software Engineer focused on building robust backends,
              intuitive interfaces, and optimized database solutions. Currently
              exploring advanced cloud deployments and modern framework
              architectures.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                className="bg-primary text-on-primary font-medium py-3 px-6 rounded-full hover:bg-primary-fixed-dim transition-colors flex items-center gap-2"
                href="#projects"
              >
                View My Work{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
              <a
                className="bg-[#0a0f1d] border border-white/10 text-on-surface font-medium py-3 px-6 rounded-full hover:bg-white/5 transition-colors flex items-center gap-2"
                download
                href="/Danish%20Raimi%20Resume%20(1).pdf"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Download Resume
              </a>
            </div>

            <div className="mt-auto pt-12 flex items-center gap-3 text-on-surface-variant/40 font-mono text-[10px] uppercase tracking-[0.15em]">
              <span>GRADUATE OF</span>
              <span className="w-16 sm:w-24 h-px bg-on-surface-variant/20"></span>
              <span>USM Software Engineering</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 relative w-full min-h-[320px] md:min-h-0">
            <div className="absolute inset-0 bg-surface-container rounded-[2rem] overflow-hidden border border-white/10 backdrop-blur-md">
              <Image
                alt="Danish Raimi"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                src="/me.jpg"
              />

              {/* Tech tag accent */}
              <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 font-mono text-sm text-secondary">
                {"< fullstack_dev />"}
              </div>

              {/* Decorative L-shaped frame accents */}
              <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-primary rounded-tr-2xl shadow-[0_0_20px_rgba(173,198,255,0.4)]"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-primary rounded-bl-2xl shadow-[0_0_20px_rgba(173,198,255,0.4)]"></div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <ProjectsSection />

        {/* Tech Stack (Bento Grid) */}
        <section className="flex flex-col gap-8">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`${gridSpans[index]} bg-surface-container border border-white/10 rounded-xl p-6 glow-active transition-all`}
              >
                <div
                  className={`flex items-center gap-2 mb-4 text-${category.color}`}
                >
                  <span className="material-symbols-outlined">
                    {category.icon}
                  </span>
                  <h3 className="font-code-sm text-code-sm uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`border border-${category.color}/30 text-${category.color} px-3 py-1 rounded font-code-sm text-code-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          id="experience"
        >
          <div className="flex flex-col gap-8">
            <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">work</span>{" "}
              Experience
            </h2>
            <div className="relative pl-6 border-l-2 border-surface-variant">
              <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2"></div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="font-body-lg text-body-lg font-semibold">
                    Software Engineering Intern
                  </h3>
                  <span className="font-code-sm text-code-sm text-outline">
                    March 2025 - Sept 2025
                  </span>
                </div>
                <span className="font-code-sm text-code-sm text-primary">
                  Zeta Integrated Solution
                </span>
                <ul className="mt-2 list-disc list-inside text-on-surface-variant space-y-1">
                  <li>
                    Developed and maintained core system modules utilizing
                    Laravel and MySQL.
                  </li>
                  <li>
                    Successfully resolved over 30 technical helpdesk tickets,
                    ensuring smooth operational flow.
                  </li>
                  <li>
                    Collaborated with senior engineers on database query
                    optimization.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">school</span>{" "}
              Education
            </h2>
            <div className="relative pl-6 border-l-2 border-surface-variant flex flex-col gap-8">
              {/* USM */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-surface-variant border-2 border-background rounded-full -left-[31px] top-2"></div>
                <div className="flex flex-col gap-1">
                  <span className="font-code-sm text-code-sm text-outline">
                    2022 - 2026 (Expected Graduate)
                  </span>
                  <h3 className="font-body-lg text-body-lg font-semibold">
                    Bachelor Of Software Engineering
                  </h3>
                  <span className="font-code-sm text-code-sm text-primary">
                    Universiti Sains Malaysia • Pulau Pinang
                  </span>
                  <span className="font-code-sm text-code-sm text-outline mt-1">
                    GPA: 3.06
                  </span>
                </div>
              </div>
              {/* Matrikulasi */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-surface-variant border-2 border-background rounded-full -left-[31px] top-2"></div>
                <div className="flex flex-col gap-1">
                  <span className="font-code-sm text-code-sm text-outline">
                    2021 - 2022
                  </span>
                  <h3 className="font-body-lg text-body-lg font-semibold">
                    Matriculation in Physical Science
                  </h3>
                  <span className="font-code-sm text-code-sm text-primary">
                    Matrikulasi Melaka • Melaka
                  </span>
                  <span className="font-code-sm text-code-sm text-outline mt-1">
                    CGPA: 3.93 • Dean&apos;s List Award All Semesters
                  </span>
                </div>
              </div>
              {/* SPM */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-surface-variant border-2 border-background rounded-full -left-[31px] top-2"></div>
                <div className="flex flex-col gap-1">
                  <span className="font-code-sm text-code-sm text-outline">
                    2020
                  </span>
                  <h3 className="font-body-lg text-body-lg font-semibold">
                    Sijil Pelajaran Malaysia
                  </h3>
                  <span className="font-code-sm text-code-sm text-primary">
                    SMK SAUJANA UTAMA
                  </span>
                  <span className="font-code-sm text-code-sm text-outline mt-1">
                    2A+ 2A 2A- 2B+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pb-8 px-margin-mobile md:px-margin-desktop" id="contact">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 bg-[#0a0f1d]/90 backdrop-blur-md border border-white/10 rounded-full px-6 py-4 shadow-lg shadow-black/20">
          <div className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
            © 2024 Danish Raimi. Built with precision.
          </div>
          <div className="flex gap-6">
            <a
              className="text-on-surface-variant hover:text-white transition-colors font-code-sm text-code-sm flex items-center gap-2 hover:scale-95 duration-100"
              href="https://github.com/Remy8903"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-lg">code_blocks</span>{" "}
              GitHub
            </a>
            <a
              className="text-on-surface-variant hover:text-white transition-colors font-code-sm text-code-sm flex items-center gap-2 hover:scale-95 duration-100"
              href="https://linkedin.com/in/danishraimi"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-lg">work_outline</span>{" "}
              LinkedIn
            </a>
            <a
              className="text-on-surface-variant hover:text-white transition-colors font-code-sm text-code-sm flex items-center gap-2 hover:scale-95 duration-100"
              href="mailto:danishraimi77@gmail.com"
            >
              <span className="material-symbols-outlined text-lg">mail</span> Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
