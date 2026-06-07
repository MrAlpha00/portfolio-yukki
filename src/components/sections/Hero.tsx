import { Suspense } from 'react'
import ParticleCanvas from '@/components/three/ParticleCanvas'
import GlitchText from '@/components/ui/GlitchText'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={null}>
          <ParticleCanvas />
        </Suspense>
      </div>
      <div className="relative z-10 text-center px-6">
        <p className="font-body text-sm text-secondary tracking-widest uppercase mb-4">
          Electronics & Communication Engineer
        </p>
        <GlitchText as="h1" className="text-5xl md:text-7xl font-bold text-text mb-6">
          Yuktha A R
        </GlitchText>
        <p className="font-body text-lg text-text/60 max-w-xl mx-auto mb-8">
          Class of 2026 &middot; Government Engineering College Ramanagara
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button href="#projects">View Projects</Button>
          <Button href="#contact">Get in Touch</Button>
        </div>
      </div>
    </section>
  )
}
