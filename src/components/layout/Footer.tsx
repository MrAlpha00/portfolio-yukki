export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-text/40">
          &copy; {new Date().getFullYear()} Yuktha A R. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-text/40 hover:text-primary transition-colors text-sm">GitHub</a>
          <a href="#" className="text-text/40 hover:text-primary transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-text/40 hover:text-primary transition-colors text-sm">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
