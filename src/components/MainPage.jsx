// 3DModelBase.jsx
// Single-file React component using @react-three/fiber and @react-three/drei
// - Default export: ModelViewer
// - Props: modelPath (string URL to .glb/.gltf), background = 'sky' | 'studio' | 'none'
// - Install instructions (project root):
//    npm install three @react-three/fiber @react-three/drei
//    or
//    yarn add three @react-three/fiber @react-three/drei
// - Drop a public URL to a .glb into <ModelViewer modelPath="/models/myModel.glb" />

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html, Environment, Center, Float } from '@react-three/drei'

// Simple fallback loader shown while the model is loading
function Loader() {
  return (
    <Html center>
      <div className="bg-white/90 p-3 rounded shadow">Loading 3D model...</div>
    </Html>
  )
}

// Example model wrapper: loads a GLTF model and applies a small spin animation
function Model({ path }) {
  const gltf = useGLTF(path, true)
  const ref = useRef()

  // tiny rotation animation
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.3
  })

  return (
    <group ref={ref} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  )
}

// A simple ground / shadow catcher
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#e6e6e6" metalness={0} roughness={1} />
    </mesh>
  )
}

// Main viewer component
export default function ModelViewer({ modelPath = null, background = 'studio', autoRotate = false }) {
  // If no modelPath is provided, we show a simple placeholder box so layout is visible
  const hasModel = Boolean(modelPath)

  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg">
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 3], fov: 50 }}
        gl={{ antialias: true }}
      >
        {/* Ambient + key lights */}
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[5, 10, 5]} intensity={1} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

        {/* Environment - choose studio/sky/none */}
        {background === 'studio' && <Environment preset="studio" />}
        {background === 'sky' && <Environment preset="sunset" />}

        <Suspense fallback={<Loader />}>
          <Center>
            {hasModel ? (
              <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
                <Model path={modelPath} />
              </Float>
            ) : (
              <mesh castShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#8ea7ff" />
              </mesh>
            )}
          </Center>

          <Ground />
        </Suspense>

        {/* Orbit controls: allow rotate/zoom/pan */}
        <OrbitControls enablePan enableRotate enableZoom />
      </Canvas>
    </div>
  )
}

// Helpful notes:
// 1) If your model requires DRACO compression, install and configure DRACO loader with useGLTF.
// 2) For local development, place the .glb file in public/models and pass 
//    modelPath="/models/yourModel.glb" to ModelViewer.
// 3) You can wrap this component into a page or dashboard; styling uses Tailwind classes by default.
// 4) Replace Environment presets or add lights to match your artistic needs.

// End of file
