import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GlitchText from '@/components/ui/GlitchText'

const tags = ['Embedded Systems', 'VLSI', 'Signal Processing', 'IoT', 'PCB Design']

export default function Education() {
  const svgRef = useRef<SVGSVGElement>(null!)
  const inView = useInView(svgRef, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-24 px-6 bg-[#0f0a1e]/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <GlitchText as="h2" className="text-3xl md:text-4xl text-center">
            Education
          </GlitchText>
          <span className="mt-4 w-10 h-[2px] bg-[#7c3aed]" />
        </div>

        <div className="relative max-w-2xl mx-auto">
          <svg
            ref={svgRef}
            className="absolute left-[19px] top-0 h-full w-[2px]"
            viewBox="0 0 2 320"
            preserveAspectRatio="none"
          >
            <line x1="1" y1="0" x2="1" y2="320" stroke="#1e1b4b" strokeWidth="2" />
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="320"
              stroke="#7c3aed"
              strokeWidth="2"
              strokeDasharray="320"
              strokeDashoffset={inView ? 0 : 320}
              style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
            />
          </svg>

          <div className="relative pl-14">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="absolute left-[11px] top-1 w-[17px] h-[17px] rounded-full border-2 border-[#7c3aed] bg-[#0a0a0f] shadow-[0_0_10px_rgba(124,58,237,0.3)]" />
              <div className="absolute left-[15px] top-5 w-[9px] h-[9px] rounded-full border border-[#06b6d4]/40 bg-[#0a0a0f]" />
              <div className="absolute left-[15px] top-10 w-[6px] h-[6px] rounded-full border border-[#7c3aed]/30 bg-[#0a0a0f]" />

              <div className="bg-[#0f0a1e] border border-[#1e1b4b] border-l-[3px] border-l-[#7c3aed] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-shadow duration-300">
                <span className="inline-block font-body text-xs text-[#06b6d4] tracking-[0.15em] font-medium mb-2">
                  2022 — 2026
                </span>
                <h3 className="font-heading text-lg text-[#e2e8f0] mb-1">
                  Government Engineering College Ramanagara (GECR)
                </h3>
                <p className="font-body text-sm text-[#e2e8f0]/60 mb-4">
                  Bachelor of Engineering — Electronics &amp; Communication Engineering
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="font-body text-[11px] text-[#06b6d4] border border-[#06b6d4]/30 rounded px-2.5 py-1 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
