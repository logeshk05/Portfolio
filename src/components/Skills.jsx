import { SectionTitle } from "./About";

const groups = [
  {
    category: "Programming",
    icon: "⚙️",
    color: "indigo",
    skills: [
      { name: "C",      level: 75 },
      { name: "Python", level: 80 },
    ],
  },
  {
    category: "Web Development",
    icon: "🌐",
    color: "sky",
    skills: [
      { name: "HTML",       level: 90 },
      { name: "CSS",        level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React",      level: 75 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "green",
    skills: [
      { name: "MongoDB", level: 70 },
    ],
  },
];

const barColor = {
  indigo: "bg-indigo-500",
  sky:    "bg-sky-500",
  green:  "bg-green-500",
};

const cardBorder = {
  indigo: "border-indigo-500/20 hover:border-indigo-500/50",
  sky:    "border-sky-500/20    hover:border-sky-500/50",
  green:  "border-green-500/20  hover:border-green-500/50",
};

const iconBg = {
  indigo: "bg-indigo-500/10 text-indigo-400",
  sky:    "bg-sky-500/10    text-sky-400",
  green:  "bg-green-500/10  text-green-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="What I know" title="Skills" />
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div
              key={g.category}
              className={`bg-gray-950/60 border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${cardBorder[g.color]}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${iconBg[g.color]}`}>
                  {g.icon}
                </div>
                <h3 className="text-white font-semibold">{g.category}</h3>
              </div>

              <div className="space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-gray-300 text-sm font-medium">{s.name}</span>
                      <span className="text-gray-500 text-xs">{s.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${barColor[g.color]}`}
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All skills as badges */}
        <div className="mt-10 bg-gray-950/40 border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {["C", "Python", "HTML5", "CSS3", "JavaScript", "React", "MongoDB", "Git", "GitHub", "VS Code", "Firebase", "Node.js"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 border border-gray-700 text-gray-300 text-sm px-4 py-1.5 rounded-full hover:bg-indigo-500/10 hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
