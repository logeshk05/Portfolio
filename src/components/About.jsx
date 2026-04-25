const highlights = [
  { label: "C",          color: "blue"   },
  { label: "Python",     color: "yellow" },
  { label: "HTML",       color: "orange" },
  { label: "CSS",        color: "sky"    },
  { label: "JavaScript", color: "amber"  },
  { label: "MongoDB",    color: "green"  },
];

const colorMap = {
  blue:   "bg-blue-500/10   border-blue-500/20   text-blue-300",
  yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
  sky:    "bg-sky-500/10    border-sky-500/20    text-sky-300",
  amber:  "bg-amber-500/10  border-amber-500/20  text-amber-300",
  green:  "bg-green-500/10  border-green-500/20  text-green-300",
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-300",
};

export function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-3 w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
    </div>
  );
}

export function Badge({ label, color = "indigo" }) {
  return (
    <span className={`border text-sm font-medium px-4 py-1.5 rounded-full ${colorMap[color]}`}>
      {label}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Who I am" title="About Me" />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Bio — 3 cols */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-gray-400 leading-relaxed text-base">
              I am a{" "}
              <span className="text-white font-semibold">BCA student</span> with a strong
              interest in web development and real-time applications. I enjoy building
              projects that solve real-world problems and continuously improving my
              technical skills.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Currently based in{" "}
              <span className="text-indigo-400 font-medium">Tiruppur, Tamil Nadu</span>, I
              am actively looking for internship and entry-level opportunities where I can
              contribute and grow as a developer.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                ["🎓", "Degree",   "BCA (Final Year)"],
                ["📍", "Location", "Tiruppur, TN"],
                ["💼", "Status",   "Open to Work"],
                ["🌐", "Focus",    "Web Development"],
              ].map(([icon, key, val]) => (
                <div key={key} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3 flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs">{key}</p>
                    <p className="text-white text-sm font-medium">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills highlight — 2 cols */}
          <div className="md:col-span-2">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">
              Core Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {highlights.map((s) => (
                <Badge key={s.label} label={s.label} color={s.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
