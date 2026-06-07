import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Environment } from '@react-three/drei'
import * as THREE from 'three'

interface FrameSceneProps {
  targetY: number
  targetX: number
}

function FrameScene({ targetY, targetX }: FrameSceneProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const currentY = useRef(0)
  const currentX = useRef(0)

  const texture = useTexture('/profile.jpg')

  useFrame(({ clock }) => {
    const t = clock.elapsedTime

    currentY.current += (targetY - currentY.current) * 0.05
    currentX.current += (targetX - currentX.current) * 0.05

    const bob = Math.sin(t * 0.7) * 0.12
    const breathe = Math.sin(t * 0.4) * 0.18
    const xTilt = Math.sin(t * 0.3) * 0.06 - 0.04

    groupRef.current.position.y = bob
    groupRef.current.rotation.y = breathe + currentY.current * 0.2
    groupRef.current.rotation.x = xTilt + currentX.current * 0.15
  })

  return (
    <group ref={groupRef}>
      {/* A) Glow plane behind everything */}
      <mesh position={[0, 0, -0.2]}>
        <planeGeometry args={[3.4, 4.2]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.12} />
      </mesh>

      {/* B) Outer frame box */}
      <mesh>
        <boxGeometry args={[3.0, 3.8, 0.18]} />
        <meshStandardMaterial
          color="#7c3aed"
          metalness={0.9}
          roughness={0.15}
          envMapIntensity={1.0}
        />
      </mesh>

      {/* C) Dark inner inset (creates depth illusion) */}
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[2.65, 3.45, 0.05]} />
        <meshStandardMaterial color="#0a0a0f" />
      </mesh>

      {/* A) Photo plane */}
      <mesh position={[0, 0, 0.11]}>
        <planeGeometry args={[2.6, 3.4]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* E) Four cyan metallic corner accents */}
      {[
        [-1.42, 1.82],
        [1.42, 1.82],
        [-1.42, -1.82],
        [1.42, -1.82],
      ].map(([x, y]) => (
        <mesh key={`${x}${y}`} position={[x, y, 0]}>
          <boxGeometry args={[0.15, 0.15, 0.25]} />
          <meshStandardMaterial
            color="#06b6d4"
            metalness={1.0}
            roughness={0.0}
          />
        </mesh>
      ))}
    </group>
  )
}

interface PhotoFrameProps {
  mouseX?: number
  mouseY?: number
}

export default function PhotoFrame({ mouseX = 0, mouseY = 0 }: PhotoFrameProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[-3, 3, 3]} color="#7c3aed" intensity={2.5} />
      <pointLight position={[3, -2, 2]} color="#06b6d4" intensity={1.5} />
      <pointLight position={[0, 0, 4]} color="#ffffff" intensity={0.8} />
      <Environment preset="night" />
      <FrameScene targetY={mouseX} targetX={mouseY} />
    </Canvas>
  )
}
