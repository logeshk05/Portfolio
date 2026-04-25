import { SectionTitle } from "./About";

const internships = [
  {
    role: "Python Intern",
    company: "Prompt Infotech",
    period: "2024",
    location: "Tiruppur, Tamil Nadu",
    description:
      "Worked on backend development tasks involving APIs, socket programming, and data handling using Python.",
    highlights: [
      "Built and consumed RESTful APIs",
      "Implemented socket programming for real-time communication",
      "Handled and processed structured data pipelines",
    ],
    tech: ["Python", "REST APIs", "Socket Programming"],
  },
];

export default function Internship() {
  return (
    <section id="internship" className="py-24 bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Experience" title="Internship" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-indigo-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {internships.map((item) => (
              <div key={item.company} className="md:pl-16 relative">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-indigo-500 border-4 border-gray-950 hidden md:block" />

                <div className="bg-gray-900 border border-gray-800 hover:border-indigo-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-xl group-hover:text-indigo-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-indigo-400 font-semibold text-sm">{item.company}</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-500 text-sm">{item.location}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium px-3 py-1.5 rounded-full shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.period}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-gray-400 text-sm">
                        <svg className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
