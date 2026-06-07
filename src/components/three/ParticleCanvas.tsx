import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

function sampleTextPoints(): Float32Array {
  const canvas = document.createElement('canvas')
  canvas.width = 400
  canvas.height = 100
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#fff'
  ctx.font = 'bold 64px "Space Grotesk", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('YUKTHA A R', 200, 50)

  const imageData = ctx.getImageData(0, 0, 400, 100)
  const data = imageData.data
  const points: number[] = []
  const step = 2

  for (let y = 0; y < 100; y += step) {
    for (let x = 0; x < 400; x += step) {
      const i = (y * 400 + x) * 4
      if (data[i] > 128) {
        points.push((x - 200) * 0.025, (50 - y) * 0.025, 0)
      }
    }
  }

  return new Float32Array(points)
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const positionsRef = useRef<Float32Array | null>(null)
  const velocitiesRef = useRef<Float32Array | null>(null)
  const phaseRef = useRef<number>(0)

  const targetPositions = useMemo(() => sampleTextPoints(), [])
  const count = targetPositions.length / 3

  const { cloudPositions, colors } = useMemo(() => {
    const cloud = new Float32Array(targetPositions.length)
    const cols = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      cloud[i * 3] = (Math.random() - 0.5) * 12
      cloud[i * 3 + 1] = (Math.random() - 0.5) * 8
      cloud[i * 3 + 2] = (Math.random() - 0.5) * 6
      const t = Math.random()
      cols[i * 3] = t * 0.5 + 0.5
      cols[i * 3 + 1] = t * 0.2 + 0.1
      cols[i * 3 + 2] = t * 0.6 + 0.4
    }
    return { cloudPositions: cloud, colors: cols }
  }, [count])

  useEffect(() => {
    const geo = ref.current.geometry
    const pos = geo.attributes.position.array as Float32Array
    pos.set(cloudPositions)
    geo.attributes.position.needsUpdate = true
    positionsRef.current = pos

    const vel = new Float32Array(count * 3)
    velocitiesRef.current = vel

    gsap.to(pos, {
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        geo.attributes.position.needsUpdate = true
      },
      endArray: Array.from(targetPositions),
    })

    setTimeout(() => {
      phaseRef.current = 1
    }, 2500)
  }, [])

  useFrame(() => {
    if (phaseRef.current !== 1) return
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    const vel = velocitiesRef.current!
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const targetX = targetPositions[i3]
      const targetY = targetPositions[i3 + 1]
      const targetZ = targetPositions[i3 + 2]

      const dx = pos[i3] - targetX
      const dy = pos[i3 + 1] - targetY
      const dz = pos[i3 + 2] - targetZ
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

      if (dist > 0.3) {
        const force = 0.02
        pos[i3] -= dx * force
        pos[i3 + 1] -= dy * force
        pos[i3 + 2] -= dz * force
      } else {
        vel[i3] += (Math.random() - 0.5) * 0.002
        vel[i3 + 1] += (Math.random() - 0.5) * 0.002
        vel[i3 + 2] += (Math.random() - 0.5) * 0.002
        vel[i3] *= 0.98
        vel[i3 + 1] *= 0.98
        vel[i3 + 2] *= 0.98
        pos[i3] += vel[i3]
        pos[i3 + 1] += vel[i3 + 1]
        pos[i3 + 2] += vel[i3 + 2]

        const maxDrift = 0.4
        pos[i3] = THREE.MathUtils.clamp(pos[i3], targetX - maxDrift, targetX + maxDrift)
        pos[i3 + 1] = THREE.MathUtils.clamp(pos[i3 + 1], targetY - maxDrift, targetY + maxDrift)
        pos[i3 + 2] = THREE.MathUtils.clamp(pos[i3 + 2], targetZ - maxDrift, targetZ + maxDrift)
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={ref} limit={count}>
      <PointMaterial
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
        vertexColors
      />
      <bufferGeometry>
        <bufferAttribute
          args={[cloudPositions, 3]}
          attach="attributes-position"
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          args={[colors, 3]}
          attach="attributes-color"
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
    </Points>
  )
}

export default function ParticleCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ParticleField />
    </Canvas>
  )
}
