import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import GlitchText from '@/components/ui/GlitchText'

type Tab = 'hardware' | 'software'

interface Skill {
  name: string
  icon: string
  progress: number
}

const hardwareSkills: Skill[] = [
  { name: 'Embedded C', icon: '⚡', progress: 85 },
  { name: 'Arduino', icon: '🔧', progress: 90 },
  { name: 'Raspberry Pi', icon: '🍓', progress: 70 },
  { name: 'PCB Design', icon: '📐', progress: 75 },
  { name: 'VLSI Basics', icon: '🔬', progress: 65 },
  { name: 'IoT Systems', icon: '📡', progress: 80 },
  { name: '8051 MCU', icon: '💾', progress: 75 },
  { name: 'Signal Processing', icon: '📊', progress: 70 },
  { name: 'ARM Cortex', icon: '🧠', progress: 60 },
  { name: 'MATLAB', icon: '📈', progress: 70 },
]

const softwareSkills: Skill[] = [
  { name: 'Python', icon: '🐍', progress: 80 },
  { name: 'C++', icon: '⚙️', progress: 75 },
  { name: 'React.js', icon: '⚛️', progress: 70 },
  { name: 'Git & GitHub', icon: '🔀', progress: 85 },
  { name: 'Linux / Bash', icon: '🐧', progress: 80 },
  { name: 'MATLAB Scripting', icon: '📜', progress: 70 },
  { name: 'HTML / CSS', icon: '🌐', progress: 85 },
  { name: 'Node.js', icon: '💚', progress: 60 },
  { name: 'VS Code', icon: '🖥️', progress: 90 },
  { name: 'Figma', icon: '🎨', progress: 55 },
]

const r = 32
const circ = 2 * Math.PI * r

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null!)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    setTilt({ x: -dy / 12, y: dx / 12 })
  }, [])

  const onMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="relative bg-[#0f0a1e]/60 border border-[#1e1b4b] rounded-lg p-4 flex flex-col items-center gap-2 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
    >
      <span className="text-xl leading-none">{skill.icon}</span>
      <p className="font-body text-xs text-[#e2e8f0]/80 text-center leading-tight">{skill.name}</p>

      <svg width="72" height="72" viewBox="0 0 72 72" className="mt-1">
        <circle cx="36" cy="36" r={r} fill="none" stroke="#1e1b4b" strokeWidth="4" />
        <motion.circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke={skill.progress >= 80 ? '#4ade80' : skill.progress >= 65 ? '#7c3aed' : '#06b6d4'}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - (skill.progress / 100) * circ }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 + index * 0.04 }}
          transform="rotate(-90 36 36)"
        />
        <text x="36" y="36" textAnchor="middle" dominantBaseline="central" fill="#e2e8f0" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="600">
          {skill.progress}%
        </text>
      </svg>
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Tab | 'both'>('both')
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playClick = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
    }
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = 1200
    osc.type = 'sine'
    gain.gain.value = 0.06
    osc.start()
    osc.stop(ctx.currentTime + 0.04)
    setTimeout(() => ctx.close(), 50)
  }

  const toggle = (tab: Tab) => {
    playClick()
    if (activeTab === tab) setActiveTab('both')
    else setActiveTab(tab)
  }

  const showHardware = activeTab === 'both' || activeTab === 'hardware'
  const showSoftware = activeTab === 'both' || activeTab === 'software'

  return (
    <section id="skills" className="py-24 px-6 bg-[#0f0a1e]/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <GlitchText as="h2" className="text-3xl md:text-4xl text-center">
            Skills
          </GlitchText>
          <span className="mt-4 w-10 h-[2px] bg-[#7c3aed]" />
        </div>

        <div className="flex justify-center mb-10" data-hoverable>
          <div className="inline-flex items-center gap-0 bg-[#0f0a1e] border border-[#1e1b4b] rounded-lg overflow-hidden p-0.5">
            <button
              onClick={() => toggle('hardware')}
              className={`relative px-5 py-2 font-body text-xs tracking-wider uppercase transition-colors duration-200 ${
                showHardware ? 'text-[#e2e8f0]' : 'text-[#e2e8f0]/40 hover:text-[#e2e8f0]/70'
              }`}
            >
              {showHardware && (
                <motion.span
                  layoutId="toggle-bg"
                  className="absolute inset-0 bg-[#7c3aed]/20 rounded"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">⚡ Hardware</span>
            </button>
            <button
              onClick={() => toggle('software')}
              className={`relative px-5 py-2 font-body text-xs tracking-wider uppercase transition-colors duration-200 ${
                showSoftware ? 'text-[#e2e8f0]' : 'text-[#e2e8f0]/40 hover:text-[#e2e8f0]/70'
              }`}
            >
              {showSoftware && (
                <motion.span
                  layoutId="toggle-bg"
                  className="absolute inset-0 bg-[#06b6d4]/20 rounded"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">💻 Software</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {showHardware &&
            hardwareSkills.map((s, i) => (
              <SkillCard key={s.name} skill={s} index={i} />
            ))}
          {showSoftware &&
            softwareSkills.map((s, i) => (
              <SkillCard key={s.name} skill={s} index={i + (showHardware ? hardwareSkills.length : 0)} />
            ))}
        </div>
      </div>
    </section>
  )
}
