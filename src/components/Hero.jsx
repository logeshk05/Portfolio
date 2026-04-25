import profileImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden px-6 pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-16">
        {/* ── Left: Text ── */}
        <div>
          <div className="animate-slide-right">
            <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>

          <h1 className="animate-slide-right delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Logesh
            </span>
          </h1>

          <h2 className="animate-slide-right delay-200 text-xl md:text-2xl text-gray-400 font-medium mb-6">
            BCA Student&nbsp;
            <span className="text-gray-600">|</span>
            &nbsp;Web Developer
          </h2>

          <p className="animate-slide-right delay-300 text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            I build responsive and real-time web applications using modern
            technologies — turning ideas into polished digital experiences.
          </p>

          <div className="animate-slide-right delay-400 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-indigo-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* Stats row */}
          <div className="animate-slide-right delay-500 flex gap-8 mt-10">
            {[["2+", "Projects Built"], ["1", "Internship"], ["5+", "Technologies"]].map(
              ([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{num}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* ── Right: Profile Image ── */}
        <div className="flex justify-center md:justify-end animate-slide-left">
          <div className="relative">
            {/* Animated pulse ring */}
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-pulse-ring" />
            <div className="absolute inset-0 rounded-full bg-indigo-500/10 animate-pulse-ring delay-300" />

            {/* Image frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-800 animate-float shadow-2xl shadow-indigo-500/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img
                  src={profileImg}
                  alt="Logesh K"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badge — location */}
            <div className="absolute -bottom-3 -left-4 bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
              <span className="text-lg">📍</span>
              <div>
                <p className="text-white text-xs font-semibold">Tiruppur</p>
                <p className="text-gray-500 text-xs">Tamil Nadu</p>
              </div>
            </div>

            {/* Floating badge — role */}
            <div className="absolute -top-3 -right-4 bg-indigo-500/10 border border-indigo-500/30 rounded-xl px-3 py-2 shadow-xl">
              <p className="text-indigo-300 text-xs font-semibold">BCA Final Year</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 animate-bounce">
        <span className="text-xs">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
