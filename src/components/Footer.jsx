export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/60 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
            L
          </span>
          <span className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Logesh K</span> — Built with React &
            Tailwind CSS
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/logesh" target="_blank" rel="noreferrer"
            className="text-gray-600 hover:text-white transition-colors text-sm">
            GitHub
          </a>
          <a href="https://linkedin.com/in/logesh" target="_blank" rel="noreferrer"
            className="text-gray-600 hover:text-white transition-colors text-sm">
            LinkedIn
          </a>
          <a
            href="#home"
            className="flex items-center gap-1.5 text-gray-600 hover:text-indigo-400 transition-colors text-sm"
          >
            Back to top
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
