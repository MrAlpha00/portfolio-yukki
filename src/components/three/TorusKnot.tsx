import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Knot() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.2
    ref.current.rotation.y += delta * 0.35
  })

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.35, 180, 24]} />
      <MeshDistortMaterial
        color="#7c3aed"
        emissive="#06b6d4"
        emissiveIntensity={0.15}
        roughness={0.3}
        metalness={0.8}
        distort={0.15}
        speed={2}
      />
    </mesh>
  )
}

export default function TorusKnotCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 45 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#7c3aed" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#06b6d4" />
      <Knot />
    </Canvas>
  )
}
