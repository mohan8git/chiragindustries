'use client'

import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei'
import * as THREE from 'three'
import { RotateCw, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'

// Bakelite Handle Component
function BakeliteHandle({ color = '#1a1a1a' }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.3, 0, 0]}>
      {/* Main grip body */}
      <mesh position={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[0.15, 1.2, 16, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Grip ridges */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[0, -0.4 + i * 0.1, 0]} castShadow>
          <torusGeometry args={[0.16, 0.015, 8, 32]} />
          <meshStandardMaterial color={color} roughness={0.4} />
        </mesh>
      ))}

      {/* Metal mounting bracket */}
      <mesh position={[0, 0.75, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.14, 0.15, 32]} />
        <meshStandardMaterial
          color="#c0c0c0"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Mounting plate */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <boxGeometry args={[0.35, 0.05, 0.25]} />
        <meshStandardMaterial
          color="#a0a0a0"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Screw holes */}
      <mesh position={[-0.1, 0.88, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.02, 16]} />
        <meshStandardMaterial color="#404040" />
      </mesh>
      <mesh position={[0.1, 0.88, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.02, 16]} />
        <meshStandardMaterial color="#404040" />
      </mesh>
    </group>
  )
}

// Stainless Steel Handle
function SSHandle() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.3, 0, 0]}>
      {/* Tubular handle body */}
      <mesh position={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[0.08, 1.4, 16, 32]} />
        <meshStandardMaterial
          color="#e8e8e8"
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      {/* Inner tube (darker) */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.06, 1.35, 16, 32]} />
        <meshStandardMaterial
          color="#808080"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* End cap 1 */}
      <mesh position={[0, -0.75, 0]} castShadow>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial
          color="#d0d0d0"
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>

      {/* Mounting bracket */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.12, 0.2, 32]} />
        <meshStandardMaterial
          color="#c0c0c0"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Mounting plate */}
      <mesh position={[0, 0.95, 0]} castShadow>
        <boxGeometry args={[0.4, 0.04, 0.3]} />
        <meshStandardMaterial
          color="#b0b0b0"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>
    </group>
  )
}

// Knob Component
function BakeliteKnob({ color = '#2a2a2a' }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Knob top */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <sphereGeometry args={[0.35, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Knob base */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.3, 0.3, 32]} />
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.1} />
      </mesh>

      {/* Grip rings */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, -0.05 + i * 0.08, 0]}>
          <torusGeometry args={[0.33, 0.02, 8, 32]} />
          <meshStandardMaterial color={color} roughness={0.4} />
        </mesh>
      ))}

      {/* Metal screw */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.15, 16]} />
        <meshStandardMaterial color="#909090" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  )
}

// Flame Guard Component
function FlameGuard() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.6, 0.08, 16, 48]} />
        <meshStandardMaterial
          color="#d4d4d4"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Support legs */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI) / 2) * 0.5,
            -0.2,
            Math.sin((i * Math.PI) / 2) * 0.5,
          ]}
          castShadow
        >
          <cylinderGeometry args={[0.03, 0.04, 0.4, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.25} metalness={0.85} />
        </mesh>
      ))}

      {/* Inner ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[0.4, 0.04, 16, 48]} />
        <meshStandardMaterial color="#b8b8b8" roughness={0.25} metalness={0.85} />
      </mesh>
    </group>
  )
}

// Scene component that renders different models
function Scene({ modelType, color }: { modelType: string; color?: string }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, 3, -5]} intensity={0.3} />

      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
        {modelType === 'bakelite' && <BakeliteHandle color={color} />}
        {modelType === 'stainless' && <SSHandle />}
        {modelType === 'knob' && <BakeliteKnob color={color} />}
        {modelType === 'flameguard' && <FlameGuard />}
      </Float>

      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.4}
        scale={3}
        blur={2}
        far={2}
      />

      <Environment preset="studio" />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={2}
        maxDistance={6}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  )
}

// Loading placeholder
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-slate-200 border-t-slate-600 rounded-full animate-spin" />
    </div>
  )
}

interface ProductViewer3DProps {
  modelType?: 'bakelite' | 'stainless' | 'knob' | 'flameguard'
  color?: string
  className?: string
}

export default function ProductViewer3D({
  modelType = 'bakelite',
  color,
  className = '',
}: ProductViewer3DProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <div
        className={`viewer-container overflow-hidden ${
          isFullscreen
            ? 'fixed inset-0 z-50 rounded-none'
            : 'aspect-square rounded-xl'
        }`}
      >
        <Suspense fallback={<Loader />}>
          <Canvas
            camera={{ position: [0, 0, 4], fov: 45 }}
            className="canvas-container"
          >
            <Scene modelType={modelType} color={color} />
          </Canvas>
        </Suspense>

        {/* Controls overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs text-slate-600 font-medium">
              Drag to rotate
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-md text-slate-600 hover:text-slate-900 transition-colors"
              title="Toggle fullscreen"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Close button for fullscreen */}
        {isFullscreen && (
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-md text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span className="text-sm font-medium">Close</span>
          </button>
        )}
      </div>
    </div>
  )
}
