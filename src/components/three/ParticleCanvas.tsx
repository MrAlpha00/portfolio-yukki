import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function ParticleCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
