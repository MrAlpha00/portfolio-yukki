import { useCustomCursor } from '@/hooks/useCustomCursor'

export default function CustomCursor() {
  const { dotRef, ringRef } = useCustomCursor()

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ transition: 'none' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
      />
    </>
  )
}
