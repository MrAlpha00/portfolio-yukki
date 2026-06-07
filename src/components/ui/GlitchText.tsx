import type { ReactNode } from 'react'

interface GlitchTextProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'span'
  className?: string
}

export default function GlitchText({ children, as: Tag = 'h2', className = '' }: GlitchTextProps) {
  return (
    <Tag className={`glitch-text font-heading ${className}`}>
      {children}
    </Tag>
  )
}
