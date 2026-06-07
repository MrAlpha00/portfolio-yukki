import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-heading text-lg font-bold text-primary">
          Yuktha<span className="text-secondary">.</span>
        </Link>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-[pulse-dot_2s_ease-in-out_infinite]" />
            <span className="text-xs text-success font-medium">Open to work</span>
          </div>
          <Link to="/hire" className="font-body text-sm text-text/70 hover:text-primary transition-colors">
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  )
}
