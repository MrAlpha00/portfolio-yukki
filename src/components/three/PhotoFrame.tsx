import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'

function Frame() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.15
    groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.12
    groupRef.current.rotation.x = -0.05 + Math.sin(t * 0.5) * 0.01
  })

  return (
    <group ref={groupRef}>
      {/* Glow backdrop */}
      <mesh position={[0, 0, -0.18]}>
        <planeGeometry args={[3.2, 3.9]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.08} />
      </mesh>

      {/* Frame border — back */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[2.8, 3.5, 0.12]} />
        <meshStandardMaterial
          color="#7c3aed"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Frame border — front (raised) */}
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry args={[2.68, 3.38, 0.06]} />
        <meshStandardMaterial
          color="#7c3aed"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Inner photo area */}
      <mesh position={[0, 0, 0.07]}>
        <planeGeometry args={[2.4, 3.1]} />
        <PhotoContent />
      </mesh>
    </group>
  )
}

function PhotoContent() {
  const texture = (window as any).__PROFILE_TEXTURE as THREE.Texture | null

  if (texture) {
    return <meshBasicMaterial map={texture} toneMapped={false} />
  }

  return (
    <>
      <meshBasicMaterial color="#1e1b4b" />
      <Html center wrapperClass="pointer-events-none">
        <div className="flex flex-col items-center gap-2 text-center select-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
            <rect x="3" y="7" width="34" height="26" rx="2" />
            <circle cx="14" cy="17" r="3" />
            <path d="M3 27l9-9 5 5 7-7 13 13" />
          </svg>
          <span className="font-body text-xs text-[#7c3aed]/50 tracking-wider">
            Your Photo Here
          </span>
        </div>
      </Html>
    </>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[-3, 3, 4]} intensity={1.2} color="#7c3aed" />
      <pointLight position={[3, -3, 2]} intensity={0.6} color="#06b6d4" />
      <Frame />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 2 - 0.3}
        maxPolarAngle={Math.PI / 2 + 0.3}
        minAzimuthAngle={-0.4}
        maxAzimuthAngle={0.4}
        dampingFactor={0.05}
        enableDamping
      />
    </>
  )
}

export default function PhotoFrame() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.8], fov: 28 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
    >
      <Scene />
    </Canvas>
  )
}
