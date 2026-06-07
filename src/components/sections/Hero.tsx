import { useState, useEffect, Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'

const ParticleCanvas = lazy(() => import('@/components/three/ParticleCanvas'))
const PhotoFrame = lazy(() => import('@/components/three/PhotoFrame'))

const typewriterWords = [
  'Hardware Engineer',
  'Embedded Systems',
  'Software Developer',
  'ECE 2026 Graduate',
]

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const current = typewriterWords[wordIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 40)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx((w) => (w + 1) % typewriterWords.length)
    }

    return () => clearTimeout(timeout)
  }, [wordIdx, charIdx, deleting])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScroll = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <ParticleCanvas />
        </Suspense>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
      />

      {/* LEFT COLUMN */}
      <div className="relative z-10 w-full md:w-[55%] h-full flex items-center pl-6 md:pl-12 lg:pl-20 xl:pl-28">
        <div className="max-w-xl">
          <p className="font-body text-xs md:text-sm text-[#06b6d4] tracking-[0.25em] uppercase mb-5">
            BE ECE &middot; GECR &middot; 2026
          </p>

          <h1 className="glitch-hero font-heading text-[clamp(36px,6vw,72px)] font-bold leading-[1.1] text-[#e2e8f0] mb-6 select-none">
            Yuktha A R
          </h1>

          <p className="font-body text-base md:text-lg text-[#e2e8f0]/50 h-7 mb-8">
            <span>{typewriterWords[wordIdx].slice(0, charIdx)}</span>
            <span className="animate-pulse text-[#7c3aed]">|</span>
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('projects')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative overflow-hidden border border-[#7c3aed] px-7 py-3 font-body text-sm font-medium text-[#e2e8f0] transition-all duration-300"
            >
              <span className="relative z-10">See My Work</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-[#7c3aed]/20 to-transparent" />
            </a>
            <Link
              to="/hire"
              className="relative overflow-hidden bg-[#7c3aed] px-7 py-3 font-body text-sm font-medium text-white transition-all duration-300 hover:bg-[#6d28d9]"
              style={{ border: '1px solid #7c3aed' }}
            >
              Hire Me &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="hidden md:relative md:z-10 md:block md:w-[45%] h-full">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="w-full max-w-[380px] aspect-[4/5]">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-[#e2e8f0]/20 text-sm font-body">
                  Loading&hellip;
                </div>
              }
            >
              <PhotoFrame />
            </Suspense>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <button
        onClick={handleScroll}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-[#7c3aed]/50 transition-opacity duration-500 z-20 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Scroll down"
      >
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" className="animate-bounce">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="12" r="2.5" fill="currentColor">
            <animate attributeName="cy" values="12;18;12" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </button>
    </section>
  )
}
