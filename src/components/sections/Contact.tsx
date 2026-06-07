import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import GlitchText from '@/components/ui/GlitchText'

/*
  EmailJS Setup:
  1. Create an account at https://www.emailjs.com/
  2. Create an Email Service and get the Service ID
  3. Create an Email Template and get the Template ID
  4. Get your Public Key from Account > API Keys
  5. Replace the placeholders below:
     serviceID: 'YOUR_SERVICE_ID'
     templateID: 'YOUR_TEMPLATE_ID'
     publicKey: 'YOUR_PUBLIC_KEY'
*/

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/yuktha-ar',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.5.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z"/>
      </svg>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yuktha-ar',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>`,
  },
]

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null!)
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY',
      )
      setStatus('sent')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-14">
          <GlitchText as="h2" className="text-3xl md:text-4xl text-center">
            Let&apos;s Connect
          </GlitchText>
          <span className="mt-4 w-10 h-[2px] bg-[#7c3aed]" />
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            className="md:col-span-2 space-y-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="font-body text-sm text-[#e2e8f0]/70 leading-relaxed">
              I&apos;m actively looking for opportunities in embedded systems, IoT,
              and software development. Let&apos;s build something great.
            </p>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="font-body text-xs text-[#4ade80]">
                Available for full-time &middot; Internship &middot; Freelance
              </span>
            </div>

            <a
              href="mailto:yuktha@example.com"
              className="inline-block font-mono text-sm text-[#06b6d4] underline underline-offset-4 decoration-[#06b6d4]/30 hover:decoration-[#06b6d4] transition-all"
            >
              yuktha@example.com
            </a>

            <div className="flex items-center gap-4 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-xs text-[#e2e8f0]/50 hover:text-[#7c3aed] underline-offset-4 hover:underline transition-all duration-200"
                >
                  <span className="w-4 h-4" dangerouslySetInnerHTML={{ __html: s.icon }} />
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-[#0f0a1e] border border-[#7c3aed]/50 text-[#e2e8f0] rounded-lg px-5 py-3.5 font-body text-sm outline-none transition-all duration-200 focus:border-[#7c3aed] focus:shadow-[0_0_12px_rgba(124,58,237,0.25)] placeholder:text-[#e2e8f0]/25"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-[#0f0a1e] border border-[#7c3aed]/50 text-[#e2e8f0] rounded-lg px-5 py-3.5 font-body text-sm outline-none transition-all duration-200 focus:border-[#7c3aed] focus:shadow-[0_0_12px_rgba(124,58,237,0.25)] placeholder:text-[#e2e8f0]/25"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full bg-[#0f0a1e] border border-[#7c3aed]/50 text-[#e2e8f0] rounded-lg px-5 py-3.5 font-body text-sm outline-none transition-all duration-200 focus:border-[#7c3aed] focus:shadow-[0_0_12px_rgba(124,58,237,0.25)] placeholder:text-[#e2e8f0]/25 resize-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="font-body text-sm font-medium text-white bg-[#7c3aed] border border-[#7c3aed] px-7 py-3.5 transition-all duration-300 hover:bg-[#06b6d4] hover:border-[#06b6d4] disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message \u2192'}
              </button>
            </form>

            <AnimatePresence>
              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 font-body text-xs text-[#4ade80] flex items-center gap-2"
                >
                  <span>Message sent!</span>
                  <span className="text-base">&#10003;</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 font-body text-xs text-red-400"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
