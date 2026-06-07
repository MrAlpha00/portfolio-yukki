import { useCustomCursor } from '@/hooks/useCustomCursor'

export default function CustomCursor() {
  const cursorRef = useCustomCursor()

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        transition: 'transform 0.12s ease',
        transform: 'scale(1) rotate(0deg)',
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow layer (offset right+down for 3D bevel) */}
        <path
          d="M2 2l12 16h-5l-3 4-2-4h-4z"
          fill="#333333"
          transform="translate(2, 2)"
        />
        {/* Main arrow body */}
        <path
          d="M2 2l12 16h-5l-3 4-2-4h-4z"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
