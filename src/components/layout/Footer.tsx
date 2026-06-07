export default function Footer() {
  return (
    <footer className="border-t border-[#7c3aed]/50 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="font-body text-xs text-[#e2e8f0]/40">
          <span className="glitch-footer-name group relative inline-block">
            <span className="group-hover:opacity-0 transition-opacity duration-200">Yuktha A R</span>
            <span className="absolute inset-0 text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-200 [clip-path:inset(0_0_40%_0)] translate-x-[1px]">
              Yuktha A R
            </span>
            <span className="absolute inset-0 text-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity duration-200 [clip-path:inset(60%_0_0_0)] translate-x-[-1px]">
              Yuktha A R
            </span>
          </span>
          <span className="hidden md:inline"> &middot; </span>
          <br className="md:hidden" />
          BE ECE &middot; GECR &middot; 2026
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yuktha-ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e2e8f0]/30 hover:text-[#7c3aed] transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.5.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yuktha-ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e2e8f0]/30 hover:text-[#7c3aed] transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <p className="font-body text-xs text-[#e2e8f0]/30">
          Built with React + Three.js &middot; No templates
        </p>
      </div>
    </footer>
  )
}
