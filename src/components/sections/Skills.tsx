import GlitchText from '@/components/ui/GlitchText'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-void-deep/50">
      <div className="max-w-6xl mx-auto">
        <GlitchText className="text-3xl md:text-4xl mb-12 text-center">
          Skills
        </GlitchText>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-heading text-lg text-secondary mb-6">Hardware</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Embedded C', 'Verilog', 'PCB Design', 'Arduino'].map((skill) => (
                <div key={skill} className="border border-border rounded-lg p-4 hover:shadow-glow transition-shadow">
                  <p className="font-body text-sm text-text">{skill}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg text-secondary mb-6">Software</h3>
            <div className="grid grid-cols-2 gap-4">
              {['MATLAB', 'Python', 'C++', 'KiCad'].map((skill) => (
                <div key={skill} className="border border-border rounded-lg p-4 hover:shadow-glow transition-shadow">
                  <p className="font-body text-sm text-text">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
