import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Hire Me', href: '/hire' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (href: string) => {
    setOpen(false)
    if (href.startsWith('/')) return
    const id = href.replace('#', '')

    if (location.pathname !== '/') {
      navigate('/')
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      })
      return
    }

    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/70 backdrop-blur-[12px] border-b border-[#1e1b4b]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-heading text-xl font-bold text-[#7c3aed] tracking-tight">
            Y.A.R
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-body text-sm transition-colors ${
                    location.pathname === link.href ? 'text-[#7c3aed]' : 'text-[#e2e8f0]/70 hover:text-[#7c3aed]'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(link.href)
                  }}
                  className="font-body text-sm text-[#e2e8f0]/70 hover:text-[#7c3aed] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <div className="flex items-center gap-1.5 pl-3 border-l border-[#1e1b4b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="font-body text-[12px] text-[#4ade80] font-medium">Open to work</span>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="block w-6 h-[1.5px] bg-[#e2e8f0]/80" />
            <span className="block w-6 h-[1.5px] bg-[#e2e8f0]/80" />
            <span className="block w-6 h-[1.5px] bg-[#e2e8f0]/80" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-[#0a0a0f]/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[280px] bg-[#0f0a1e] border-l border-[#1e1b4b] transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#1e1b4b]">
          <span className="font-heading text-sm text-[#7c3aed]">Navigation</span>
          <button
            onClick={() => setOpen(false)}
            className="text-[#e2e8f0]/60 hover:text-[#e2e8f0] text-lg"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col px-6 pt-8 gap-6">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`font-body text-base transition-colors ${
                  location.pathname === link.href ? 'text-[#7c3aed]' : 'text-[#e2e8f0]/80 hover:text-[#7c3aed]'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(link.href)
                }}
                className="font-body text-base text-[#e2e8f0]/80 hover:text-[#7c3aed] transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <div className="flex items-center gap-1.5 pt-4 border-t border-[#1e1b4b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="font-body text-[12px] text-[#4ade80] font-medium">Open to work</span>
          </div>
        </div>
      </div>
    </>
  )
}
