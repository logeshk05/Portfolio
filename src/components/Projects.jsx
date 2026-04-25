import { SectionTitle, Badge } from "./About";

const projects = [
  {
    title: "HomeServeX",
    emoji: "🏠",
    type: "Full-Stack Web App",
    description:
      "A full-stack web application connecting users with local service providers — electricians, plumbers, and carpenters — with real-time booking and role-based dashboards.",
    features: ["Real-time booking", "Role-based dashboards", "Responsive UI"],
    tech: [
      { label: "React",    color: "sky"    },
      { label: "Firebase", color: "amber"  },
    ],
    github: "https://github.com/logesh",
    demo: "#",
    featured: true,
  },
  {
    title: "News Aggregator",
    emoji: "📰",
    type: "CLI Tool",
    description:
      "A command-line tool that fetches and displays the latest news headlines using the NewsAPI. Supports category filtering and keyword search.",
    features: ["NewsAPI integration", "Category filtering", "Keyword search"],
    tech: [
      { label: "Python", color: "yellow" },
    ],
    github: "https://github.com/logesh",
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="What I've built" title="Projects" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, emoji, type, description, features, tech, github, demo, featured }) {
  return (
    <div
      className={`relative flex flex-col bg-gray-900 border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group ${
        featured
          ? "border-indigo-500/40 hover:border-indigo-400/70 hover:shadow-indigo-500/10"
          : "border-gray-800 hover:border-gray-600"
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-xs bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded-full font-medium">
          Featured
        </span>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-xl">
          {emoji}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg group-hover:text-indigo-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-xs">{type}</p>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>

      {/* Features */}
      <ul className="space-y-1.5 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-gray-400 text-sm">
            <svg className="w-3.5 h-3.5 text-indigo-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t.label} label={t.label} color={t.color} />
          ))}
        </div>
        <div className="flex gap-3">
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"
            className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          {demo && (
            <a href={demo} aria-label="Live demo"
              className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
