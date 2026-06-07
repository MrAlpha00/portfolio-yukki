import { useEffect, useRef } from 'react'

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    const onMouseMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }

    const onHoverIn = () => {
      el.style.transform = 'scale(1.3) rotate(10deg)'
    }

    const onHoverOut = () => {
      el.style.transform = 'scale(1) rotate(0deg)'
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hoverable]') ||
        target.closest('[data-cursor="pointer"]')
      ) {
        onHoverIn()
        target.addEventListener('mouseleave', onHoverOut, { once: true })
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return cursorRef
}
