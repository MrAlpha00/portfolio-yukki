import { motion } from 'framer-motion'
import GlitchText from '@/components/ui/GlitchText'

interface Project {
  name: string
  badge: string
  badgeColor: string
  icon: string
  tagline: string
  stack: string[]
  description: string
}

const projects: Project[] = [
  {
    name: 'Smart Home Automation',
    badge: 'IoT',
    badgeColor: '#06b6d4',
    icon: `
      <svg viewBox="0 0 48 48" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="6" width="36" height="36" rx="3" />
        <circle cx="24" cy="24" r="4" />
        <circle cx="24" cy="24" r="8" opacity="0.4" />
        <circle cx="24" cy="24" r="12" opacity="0.2" />
        <line x1="24" y1="6" x2="24" y2="14" />
        <line x1="24" y1="34" x2="24" y2="42" />
        <line x1="6" y1="24" x2="14" y2="24" />
        <line x1="34" y1="24" x2="42" y2="24" />
      </svg>`,
    tagline: 'Voice + sensor controlled home system',
    stack: ['Arduino', 'ESP8266', 'MQTT', 'Python'],
    description:
      'Built a WiFi-enabled home automation system using ESP8266 modules, DHT11 sensor, and a Python MQTT broker. Controlled via mobile and voice commands.',
  },
  {
    name: 'ECG Signal Classifier',
    badge: 'ML + DSP',
    badgeColor: '#7c3aed',
    icon: `
      <svg viewBox="0 0 48 48" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="2 24 10 24 14 14 18 34 22 20 26 28 30 16 34 24 38 24" />
        <circle cx="14" cy="14" r="2" fill="#7c3aed" opacity="0.5" />
        <circle cx="22" cy="20" r="2" fill="#7c3aed" opacity="0.5" />
        <circle cx="30" cy="16" r="2" fill="#7c3aed" opacity="0.5" />
        <line x1="38" y1="24" x2="46" y2="24" />
      </svg>`,
    tagline: 'Cardiac arrhythmia detection using ML',
    stack: ['Python', 'NumPy', 'Scikit-learn', 'MATLAB'],
    description:
      'Processed raw ECG signals with bandpass filtering and extracted time-domain features. Trained SVM classifier with 91% accuracy on MIT-BIH dataset.',
  },
  {
    name: 'Student Portfolio Website',
    badge: 'Web',
    badgeColor: '#4ade80',
    icon: `
      <svg viewBox="0 0 48 48" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 18 14 12 8 6" />
        <line x1="24" y1="4" x2="18" y2="16" />
        <line x1="28" y1="4" x2="22" y2="16" />
        <rect x="2" y="24" width="44" height="20" rx="3" />
        <circle cx="12" cy="34" r="2" />
        <circle cx="20" cy="34" r="2" />
        <circle cx="28" cy="34" r="2" />
        <circle cx="36" cy="34" r="2" />
      </svg>`,
    tagline: "The site you're looking at — built from scratch",
    stack: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    description:
      'Designed and built a 3D portfolio website with particle animations, 3D canvas, custom cursor, and hardware-inspired UI. Zero templates used.',
  },
  {
    name: 'PCB Design — FM Transmitter',
    badge: 'Hardware',
    badgeColor: '#f59e0b',
    icon: `
      <svg viewBox="0 0 48 48" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <circle cx="16" cy="16" r="2" />
        <circle cx="32" cy="16" r="2" />
        <circle cx="16" cy="32" r="2" />
        <circle cx="32" cy="32" r="2" />
        <circle cx="24" cy="24" r="3" />
        <line x1="16" y1="16" x2="32" y2="16" />
        <line x1="16" y1="32" x2="32" y2="32" />
        <line x1="16" y1="16" x2="16" y2="32" />
        <line x1="32" y1="16" x2="32" y2="32" />
        <line x1="24" y1="21" x2="24" y2="27" />
      </svg>`,
    tagline: 'Designed and fabricated a low-power FM transmitter PCB',
    stack: ['KiCad', 'Altium basics', 'SMD soldering'],
    description:
      'Designed schematic and PCB layout for a low-power FM transmitter using KiCad. Fabricated and tested the board with 88–108 MHz range.',
  },
]

function FlipCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      className="group perspective-[1000px] h-[340px]"
    >
      <div className="relative w-full h-full transition-transform duration-[0.6s] ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="absolute inset-0 rounded-lg border border-[#1e1b4b] border-t-[3px] border-t-[#7c3aed] bg-[#0f0a1e]/60 p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-shadow duration-300">
          <div
            className="w-11 h-11 mb-3"
            dangerouslySetInnerHTML={{ __html: project.icon }}
          />
          <span
            className="inline-block font-body text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded border mb-3"
            style={{ color: project.badgeColor, borderColor: `${project.badgeColor}40` }}
          >
            {project.badge}
          </span>
          <h3 className="font-heading text-base text-[#e2e8f0] mb-2">{project.name}</h3>
          <p className="font-body text-xs text-[#e2e8f0]/50 leading-relaxed">{project.tagline}</p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-lg border border-[#1e1b4b] border-t-[3px] border-t-[#06b6d4] bg-[#0f0a1e] p-6 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-shadow duration-300">
          <div>
            <h3 className="font-heading text-base text-[#e2e8f0] mb-2">{project.name}</h3>
            <p className="font-body text-xs text-[#e2e8f0]/60 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-body text-[10px] text-[#7c3aed] border border-[#7c3aed]/30 rounded px-2 py-[3px]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="self-start font-body text-xs text-[#e2e8f0] border border-[#7c3aed] px-4 py-2 transition-colors duration-300 hover:bg-[#7c3aed]/20"
          >
            GitHub &nearr;
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-14">
          <GlitchText as="h2" className="text-3xl md:text-4xl text-center">
            Projects
          </GlitchText>
          <span className="mt-4 w-10 h-[2px] bg-[#7c3aed]" />
          <p className="font-body text-sm text-[#e2e8f0]/50 mt-5 text-center max-w-md">
            Things I&apos;ve built — hardware, software, and everything in between
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <FlipCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
