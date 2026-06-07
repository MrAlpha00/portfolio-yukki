import GlitchText from '@/components/ui/GlitchText'
import Button from '@/components/ui/Button'

const projects = [
  {
    title: 'Smart Irrigation System',
    desc: 'IoT-based automated irrigation using soil moisture sensors and ESP32.',
    tags: ['Embedded C', 'IoT', 'ESP32'],
  },
  {
    title: 'Signal Processing Toolkit',
    desc: 'MATLAB-based toolkit for filtering and analyzing audio signals.',
    tags: ['MATLAB', 'DSP'],
  },
  {
    title: 'Line Following Robot',
    desc: 'Autonomous bot using IR sensor array with PID control on Arduino.',
    tags: ['Arduino', 'Embedded C', 'PID'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <GlitchText className="text-3xl md:text-4xl mb-12 text-center">
          Projects
        </GlitchText>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300 bg-void-deep/30"
            >
              <h3 className="font-heading text-lg text-primary mb-3">{project.title}</h3>
              <p className="font-body text-sm text-text/60 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-body text-secondary border border-secondary/30 rounded px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <Button className="text-xs py-2 px-4">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
