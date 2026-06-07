import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
}

export default function Button({ children, variant = 'outline', href, onClick, className = '' }: ButtonProps) {
  const base = 'inline-block animate-sweep border border-primary bg-transparent px-6 py-3 font-body text-sm font-medium text-text transition-colors hover:text-white'

  const Tag = href ? 'a' : 'button'
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } as const : { onClick }

  return (
    <Tag {...props} className={`${base} ${className}`}>
      {children}
    </Tag>
  )
}
