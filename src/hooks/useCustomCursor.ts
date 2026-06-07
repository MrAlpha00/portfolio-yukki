import { useEffect, useRef } from 'react'

export function useCustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const lerp = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      requestAnimationFrame(lerp)
    }

    const onHoverIn = () => {
      dot.style.opacity = '0'
      ring.style.width = '52px'
      ring.style.height = '52px'
      ring.style.borderColor = 'rgba(124, 58, 237, 0.6)'
      ring.style.backgroundColor = 'rgba(124, 58, 237, 0.2)'
    }

    const onHoverOut = () => {
      dot.style.opacity = '1'
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.borderColor = 'rgba(124, 58, 237, 0.4)'
      ring.style.backgroundColor = 'transparent'
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hoverable]')
      ) {
        onHoverIn()
        target.addEventListener('mouseleave', onHoverOut, { once: true })
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    lerp()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return { dotRef, ringRef }
}
