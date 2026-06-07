import GlitchText from '@/components/ui/GlitchText'
import Button from '@/components/ui/Button'

export default function Hire() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-2xl mx-auto text-center">
        <GlitchText as="h1" className="text-4xl md:text-5xl mb-6">
          Hire Me
        </GlitchText>
        <p className="font-body text-text/60 mb-8 leading-relaxed">
          I&apos;m actively seeking opportunities in electronics, embedded systems,
          and related fields. Download my resume below or get in touch directly.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button href="/resume.pdf">Download Resume</Button>
          <Button href="#contact">Contact Me</Button>
        </div>
        <div className="mt-12 border border-border rounded-lg p-6 bg-void-deep/30">
          <h2 className="font-heading text-lg text-primary mb-4">Why hire me?</h2>
          <ul className="text-left space-y-3 font-body text-sm text-text/60">
            <li className="flex items-start gap-3">
              <span className="text-success mt-1">▸</span>
              Strong foundation in Electronics & Communication Engineering
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success mt-1">▸</span>
              Hands-on experience with embedded systems and PCB design
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success mt-1">▸</span>
              Quick learner with a passion for hardware-software integration
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success mt-1">▸</span>
              Excellent problem-solving and analytical skills
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
