type Project = {
  name: string;
  description: string;
  href: string;
  status: "live" | "in progress" | "planned";
};

const projects: Project[] = [
  {
    name: "Newspaper Archive",
    description:
      "\"On this day\" front-page lookup from the Library of Congress's Chronicling America archive.",
    href: "https://newspaper-archive.vercel.app",
    status: "live",
  },
  {
    name: "Art Search",
    description:
      "Multi-modal semantic search over 130k National Gallery of Art artworks (CLIP, MiniLM, DINOv2).",
    href: "https://nga-art-search.vercel.app",
    status: "live",
  },
  {
    name: "Logo Design Studio",
    description:
      "AI logo & brand-identity generator — concepts, logo images, refinements, and a full brand kit, powered by Gemini.",
    href: "https://logo-design-studio.vercel.app",
    status: "in progress",
  },
  {
    name: "Games",
    description: "A handful of small games, not yet deployed.",
    href: "https://github.com/GlenProz/Games",
    status: "planned",
  },
];

const statusStyles: Record<Project["status"], string> = {
  live: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "in progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  planned: "bg-zinc-500/10 text-zinc-500 dark:text-zinc-400",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col gap-10 px-6 py-24">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Hobby Projects
          </h1>
          <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            An open-source playground for side projects, each deployed and
            hosted independently. This page is the front door.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 rounded-xl border border-black/[.08] bg-white p-5 transition-colors hover:border-black/[.15] dark:border-white/[.1] dark:bg-zinc-950 dark:hover:border-white/[.2]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-black dark:text-zinc-50">
                    {project.name}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>
                <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
