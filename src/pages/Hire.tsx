import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GlitchText from '@/components/ui/GlitchText'

/*
  Place a resume.pdf file inside public/ to enable the download button.
  Until then, the button will trigger a download of a file that doesn't exist
  (the browser will show a failed-download or open the 404 page).
*/

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
}

export default function Hire() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* ---- TOP ---- */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="font-heading text-[clamp(32px,5vw,56px)] font-bold text-[#e2e8f0] leading-[1.15] mb-5">
            Let&apos;s Work Together
          </h1>
          <p className="font-body text-sm text-[#e2e8f0]/50 max-w-xl mx-auto leading-relaxed">
            BE ECE Engineer &middot; Hardware + Software &middot; Open to full-time,
            internship, or freelance roles &middot; Graduating 2026 from GECR
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="font-body text-xs text-[#4ade80] font-medium">Currently available</span>
          </div>
        </motion.div>

        {/* ---- RESUME ---- */}
        <motion.section className="mb-20" {...stagger}>
          <motion.div {...fadeUp}>
            <GlitchText as="h2" className="text-2xl md:text-3xl mb-8 text-center">
              Resume / CV
            </GlitchText>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="border border-[#7c3aed]/50 rounded-lg bg-[#0f0a1e] p-6 md:p-8 mb-6 font-mono text-sm leading-relaxed"
          >
            <p className="text-[#e2e8f0] font-bold text-base mb-3">YUKTHA A R</p>
            <p className="text-[#06b6d4] mb-4">BE ECE &middot; GECR 2026</p>
            <div className="space-y-1 text-[#e2e8f0]/70">
              <p>
                <span className="text-[#7c3aed]">Skills:</span>{' '}
                Embedded C, Arduino, Python, React, PCB Design, IoT, MATLAB
              </p>
              <p>
                <span className="text-[#7c3aed]">Education:</span>{' '}
                Government Engineering College Ramanagara | BE ECE | 2022-2026
              </p>
              <p>
                <span className="text-[#7c3aed]">Projects:</span>{' '}
                Smart Home Automation | ECG Signal Classifier | FM Transmitter PCB
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2.5 bg-[#7c3aed] text-white border border-[#7c3aed] px-8 py-3.5 font-body text-sm font-medium transition-all duration-300 hover:bg-[#6d28d9] active:scale-[0.97]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 1v10M4 7l4 4 4-4M2 13v1h12v-1" />
              </svg>
              Download Resume
            </a>
          </motion.div>

          <motion.p {...fadeUp} className="text-center font-body text-xs text-[#e2e8f0]/30 mt-3">
            Last updated: June 2025
          </motion.p>
        </motion.section>

        {/* ---- SKILLS HIGHLIGHT ---- */}
        <motion.section className="mb-20" {...stagger}>
          <motion.div {...fadeUp}>
            <GlitchText as="h2" className="text-2xl md:text-3xl mb-8 text-center">
              Skills Highlight
            </GlitchText>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {([
              { title: 'Hardware', items: 'Embedded C · Arduino · PCB Design · IoT · VLSI · MATLAB · Signal Processing · ARM' },
              { title: 'Software', items: 'Python · C++ · React.js · Git · Linux · Node.js · HTML/CSS' },
            ] as const).map((box) => (
              <motion.div
                key={box.title}
                {...fadeUp}
                className="border border-[#1e1b4b] rounded-lg overflow-hidden"
              >
                <div className="flex items-center gap-2 bg-[#0f0a1e] border-b border-[#1e1b4b] px-4 py-2.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-[#4ade80]/80" />
                  <span className="font-body text-[11px] text-[#7c3aed] ml-2 uppercase tracking-wider">
                    {box.title}
                  </span>
                </div>
                <div className="p-5 font-mono text-sm text-[#e2e8f0]/70 leading-loose">
                  {box.items}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---- WHY HIRE ME ---- */}
        <motion.section className="mb-20" {...stagger}>
          <motion.div {...fadeUp}>
            <GlitchText as="h2" className="text-2xl md:text-3xl mb-8 text-center">
              Why Hire Me?
            </GlitchText>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {([
              { title: 'Hardware + Software', desc: 'Rare combo of embedded systems and web development skills — can design a PCB and build the full-stack app that talks to it.' },
              { title: 'Fresh Perspective', desc: '2026 graduate with up-to-date knowledge of modern tools, frameworks, and industry best practices.' },
              { title: 'Project-Proven', desc: 'Real ECE projects from Smart Home automation to PCB fabrication — not just coursework, but hands-on builds.' },
            ] as const).map((card) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                className="border border-[#1e1b4b] border-l-[3px] border-l-[#7c3aed] rounded-lg bg-[#0f0a1e]/60 p-6 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-shadow duration-300"
              >
                <h3 className="font-heading text-base text-[#e2e8f0] mb-2">{card.title}</h3>
                <p className="font-body text-sm text-[#e2e8f0]/50 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---- CTA ---- */}
        <motion.section
          className="text-center border-t border-[#1e1b4b] pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl md:text-3xl text-[#e2e8f0] mb-6">
            Ready to build something?
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:yuktha@example.com"
              className="inline-flex items-center gap-2 bg-[#7c3aed] text-white border border-[#7c3aed] px-7 py-3 font-body text-sm font-medium transition-all duration-300 hover:bg-[#06b6d4] hover:border-[#06b6d4]"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="13" height="9" rx="1.5" />
                <path d="M1 4l6.5 5L14 4" />
              </svg>
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/yuktha-ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#7c3aed] text-[#e2e8f0] px-7 py-3 font-body text-sm font-medium transition-all duration-300 hover:bg-[#7c3aed]/10"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          <div className="mt-8">
            <Link
              to="/"
              className="font-body text-sm text-[#e2e8f0]/40 hover:text-[#7c3aed] transition-colors duration-200"
            >
              &larr; Back to Portfolio
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
