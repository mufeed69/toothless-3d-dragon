import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Html, Environment } from '@react-three/drei'

// Simple fallback loader shown while the model is loading
function Loader() {
  return (
    <Html center>
      <div className="bg-white/90 p-3 rounded shadow">Loading 3D model...</div>
    </Html>
  )
}

// Example model wrapper: loads a GLTF model and applies scroll-based animation
function Model({ path, scrollY }) {
  const gltf = useGLTF(path, true)
  const groupRef = useRef()
  const targetRotationY = useRef(0)
  const targetPosition = useRef([5, -5, 0]) // Initial top-right corner position

  useFrame(() => {
    if (groupRef.current) {
      // Calculate scroll progress (0 to 1) - stop at 0.8 to face front
      const scrollProgress = Math.min(scrollY / 2000, 0.8) // Stop at 80% to face front

      // Rotate to face front: -90 degrees (facing camera)
      targetRotationY.current = -Math.PI * 0.5 * scrollProgress // Rotate to face front

      // Calculate position values: Move from right (5, 5, 0) to the center (0, 0, 0)
      targetPosition.current = [
        5 - (5 * scrollProgress), // Move from 5 (right) to 0 (center)
        5 - (5 * scrollProgress), // Move from 5 (top) to 0 (center)
        0 // Fixed Z-axis
      ]

      // Apply smooth interpolation using lerp for smooth rotation and movement
      const lerpFactor = 0.05 // Adjust for smoother/faster interpolation

      groupRef.current.rotation.y += (targetRotationY.current - groupRef.current.rotation.y) * lerpFactor
      groupRef.current.position.set(
        targetPosition.current[0],
        targetPosition.current[1],
        targetPosition.current[2]
      )
    }
  })

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  )
}

export default function ModelViewer({ modelPath, background, scrollY }) {
  const hasModel = Boolean(modelPath)
  const cameraRef = useRef()

  return (
    <div className="fixed top-0 left-0 w-full h-screen rounded-2xl overflow-hidden shadow-lg z-10">
      <Canvas
        shadows
        camera={{ position: [50, 30, -30], fov: 10 }}
        gl={{ antialias: true }}
      >
        {/* Ambient + key lights */}
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[5, 10, 5]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Environment - choose studio/sky/none */}
        {background === 'studio' && <Environment preset="studio" />}
        {background === 'sky' && <Environment preset="sunset" />}

        {/* Suspense to handle loading */}
        <Suspense fallback={<Loader />}>
          {hasModel ? (
            <Model path={modelPath} scrollY={scrollY} />
          ) : (
            <mesh castShadow>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#8ea7ff" />
            </mesh>
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}
