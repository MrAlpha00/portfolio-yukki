import { useCustomCursor } from '@/hooks/useCustomCursor'

export default function CustomCursor() {
  const { dotRef, ringRef } = useCustomCursor()

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ transition: 'opacity 0.15s ease' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[36px] h-[36px] border rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          borderColor: 'rgba(124, 58, 237, 0.4)',
          borderWidth: '1.5px',
          backgroundColor: 'transparent',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
        }}
      />
    </>
  )
}
