import GlitchText from '@/components/ui/GlitchText'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <GlitchText className="text-3xl md:text-4xl mb-12 text-center">
          About Me
        </GlitchText>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="font-body text-text/80 leading-relaxed">
              Passionate Electronics & Communication Engineering graduate from
              Government Engineering College Ramanagara (GECR), batch of 2026.
            </p>
            <p className="font-body text-text/60 leading-relaxed">
              Driven by a curiosity for embedded systems, signal processing, and
              cutting-edge hardware-software integration.
            </p>
          </div>
          <div className="bg-void-deep border border-border rounded-lg p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-success" />
              <span className="text-text/40 ml-2">terminal</span>
            </div>
            <div className="space-y-2 text-text/70">
              <p><span className="text-success">$</span> whoami</p>
              <p className="text-text/90">Yuktha A R — BE ECE, GECR</p>
              <p className="mt-2"><span className="text-success">$</span> ./skills --list</p>
              <p className="text-text/90">Embedded C | MATLAB | Python | Circuit Design</p>
              <p className="mt-2"><span className="text-success">$</span> <span className="animate-pulse">▊</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
