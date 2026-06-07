import GlitchText from '@/components/ui/GlitchText'
import Button from '@/components/ui/Button'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <GlitchText className="text-3xl md:text-4xl mb-12 text-center">
          Contact
        </GlitchText>
        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 font-body text-sm text-text outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 font-body text-sm text-text outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 font-body text-sm text-text outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <Button>Send Message</Button>
          </form>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg text-primary mb-2">Get in Touch</h3>
              <p className="font-body text-sm text-text/60">
                Have a project in mind or just want to say hi? Drop me a message!
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-text/50">
                <span className="text-primary">Email:</span>
                <span>yuktha.ar@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text/50">
                <span className="text-primary">Location:</span>
                <span>Ramanagara, Karnataka</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-text/40 hover:text-primary transition-colors text-sm border border-border rounded-lg px-4 py-2">GitHub</a>
              <a href="#" className="text-text/40 hover:text-primary transition-colors text-sm border border-border rounded-lg px-4 py-2">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
