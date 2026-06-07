import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

function sampleTextPoints(): Float32Array | null {
  const canvas = document.createElement('canvas')
  canvas.width = 400
  canvas.height = 100
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  ctx.fillStyle = '#fff'
  ctx.font = 'bold 64px "Space Grotesk", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('YUKTHA A R', 200, 50)

  const imageData = ctx.getImageData(0, 0, 400, 100)
  const data = imageData.data
  const points: number[] = []
  const step = 3

  for (let y = 0; y < 100; y += step) {
    for (let x = 0; x < 400; x += step) {
      const i = (y * 400 + x) * 4
      if (data[i] > 128) {
        points.push((x - 200) * 0.03, (50 - y) * 0.03, 0)
      }
    }
  }

  if (points.length === 0) return null
  return new Float32Array(points)
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const velocitiesRef = useRef<Float32Array | null>(null)
  const phaseRef = useRef(0)

  const targetData = useMemo(() => {
    const raw = sampleTextPoints()
    if (!raw) return { positions: new Float32Array(0), count: 0 }
    return { positions: raw, count: raw.length / 3 }
  }, [])

  const count = targetData.count

  const { cloudPositions, colors } = useMemo(() => {
    if (count === 0) {
      return { cloudPositions: new Float32Array(0), colors: new Float32Array(0) }
    }
    const cloud = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      cloud[i3] = (Math.random() - 0.5) * 12
      cloud[i3 + 1] = (Math.random() - 0.5) * 8
      cloud[i3 + 2] = (Math.random() - 0.5) * 6
      const t = Math.random()
      cols[i3] = t * 0.5 + 0.5
      cols[i3 + 1] = t * 0.2 + 0.1
      cols[i3 + 2] = t * 0.6 + 0.4
    }
    return { cloudPositions: cloud, colors: cols }
  }, [count])

  useEffect(() => {
    if (count === 0) return
    const geo = ref.current.geometry
    const pos = geo.attributes.position.array as Float32Array
    pos.set(cloudPositions)
    geo.attributes.position.needsUpdate = true

    const vel = new Float32Array(count * 3)
    velocitiesRef.current = vel

    const target = targetData.positions
    const proxy = { values: Array.from(pos) }
    const endValues = Array.from(target)

    gsap.to(proxy, {
      values: endValues,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        pos.set(proxy.values)
        geo.attributes.position.needsUpdate = true
      },
    })

    const timer = setTimeout(() => {
      phaseRef.current = 1
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useFrame(() => {
    if (phaseRef.current !== 1 || count === 0) return
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    const vel = velocitiesRef.current!
    const target = targetData.positions

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const tx = target[i3]
      const ty = target[i3 + 1]
      const tz = target[i3 + 2]

      const dx = pos[i3] - tx
      const dy = pos[i3 + 1] - ty
      const dz = pos[i3 + 2] - tz
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

      if (dist > 0.3) {
        pos[i3] -= dx * 0.02
        pos[i3 + 1] -= dy * 0.02
        pos[i3 + 2] -= dz * 0.02
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

        pos[i3] = THREE.MathUtils.clamp(pos[i3], tx - 0.4, tx + 0.4)
        pos[i3 + 1] = THREE.MathUtils.clamp(pos[i3 + 1], ty - 0.4, ty + 0.4)
        pos[i3 + 2] = THREE.MathUtils.clamp(pos[i3 + 2], tz - 0.4, tz + 0.4)
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  if (count === 0) return null

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
