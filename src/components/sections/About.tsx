import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import GlitchText from '@/components/ui/GlitchText'

const TorusKnotCanvas = lazy(() => import('@/components/three/TorusKnot'))

const stats = [
  { cmd: '$ major --get', result: 'Electronics & Communication Engineering' },
  { cmd: '$ college --name', result: 'GECR, Ramanagara' },
  { cmd: '$ batch --year', result: '2026 Pass Out' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <GlitchText as="h2" className="text-3xl md:text-4xl text-center">
            About Me
          </GlitchText>
          <span className="mt-4 w-10 h-[2px] bg-[#7c3aed]" />
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-center">
          <motion.div
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="font-body text-[15px] text-[#e2e8f0]/80 leading-[1.8]">
              I&apos;m Yuktha A R, a final-year ECE engineer from GECR (Government
              Engineering College Ramanagara), graduating in 2026. I bridge the gap
              between hardware and software — from designing embedded systems and PCB
              layouts to building full-stack applications. I&apos;m passionate about IoT,
              signal processing, and making electronics intelligent.
            </p>

            <div className="space-y-3 pt-2">
              {stats.map((s) => (
                <div
                  key={s.cmd}
                  className="border-l-[3px] border-[#7c3aed] bg-[#0f0a1e] pl-4 py-3 pr-4 font-mono text-sm"
                >
                  <p className="text-[#4ade80]">{s.cmd}</p>
                  <p className="text-[#e2e8f0]/80 mt-0.5">{s.result}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 h-[340px] md:h-[400px]"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-[#e2e8f0]/30 text-sm font-body">
                  Loading&hellip;
                </div>
              }
            >
              <TorusKnotCanvas />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
