import GlitchText from '@/components/ui/GlitchText'

const education = [
  {
    year: '2022 - 2026',
    degree: 'BE in Electronics & Communication Engineering',
    school: 'Government Engineering College Ramanagara (GECR)',
    desc: 'Focused on embedded systems, VLSI design, and signal processing.',
  },
  {
    year: '2020 - 2022',
    degree: 'Pre-University (PUC)',
    school: 'PCMB with Electronics',
    desc: 'Built foundational knowledge in physics, mathematics, and electronics.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-void-deep/50">
      <div className="max-w-6xl mx-auto">
        <GlitchText className="text-3xl md:text-4xl mb-12 text-center">
          Education
        </GlitchText>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />
          <div className="space-y-12">
            {education.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2" />
                <div className="flex-1" />
                <div className="flex-1 border border-border rounded-lg p-6 hover:shadow-glow transition-shadow ml-10 md:ml-0">
                  <span className="font-body text-xs text-secondary tracking-wider">{item.year}</span>
                  <h3 className="font-heading text-lg text-primary mt-1">{item.degree}</h3>
                  <p className="font-body text-sm text-text/70 mt-1">{item.school}</p>
                  <p className="font-body text-sm text-text/50 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
