import { SectionTitle } from "./About";

const socials = [
  {
    name: "Email",
    value: "logesh.k2505@gmail.com",
    href: "mailto:logesh.k2505@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "indigo",
  },
  {
    name: "GitHub",
    value: "github.com/logesh",
    href: "https://github.com/logesh",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    color: "gray",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/logesh",
    href: "https://linkedin.com/in/logesh",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "blue",
  },
];

const borderColor = {
  indigo: "border-indigo-500/20 hover:border-indigo-500/60 hover:bg-indigo-500/5",
  gray:   "border-gray-700     hover:border-gray-500       hover:bg-white/5",
  blue:   "border-blue-500/20  hover:border-blue-500/60    hover:bg-blue-500/5",
};

const iconColor = {
  indigo: "text-indigo-400 bg-indigo-500/10",
  gray:   "text-gray-400   bg-gray-800",
  blue:   "text-blue-400   bg-blue-500/10",
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Get in touch" title="Contact" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm open to internships, freelance projects, and full-time opportunities.
              Whether you have a question or just want to say hi — my inbox is always open!
            </p>

            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.name !== "Email" ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`flex items-center gap-4 border rounded-xl p-4 transition-all duration-200 group ${borderColor[s.color]}`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${iconColor[s.color]}`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{s.name}</p>
                    <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">
                      {s.value}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right — quick message card */}
          <div className="bg-gray-950/60 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-5">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="text-gray-500 text-xs font-medium block mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-900 border border-gray-700 focus:border-indigo-500 text-white text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder-gray-600"
                />
              </div>
              <div>
                <label className="text-gray-500 text-xs font-medium block mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-gray-900 border border-gray-700 focus:border-indigo-500 text-white text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder-gray-600"
                />
              </div>
              <div>
                <label className="text-gray-500 text-xs font-medium block mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Hi Logesh, I'd like to..."
                  className="w-full bg-gray-900 border border-gray-700 focus:border-indigo-500 text-white text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder-gray-600 resize-none"
                />
              </div>
              <a
                href="mailto:logesh.k2505@gmail.com"
                className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
