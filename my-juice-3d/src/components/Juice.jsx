//
// JuiceBottle.jsx
//
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useGLTF,
  Float,
  PresentationControls,
  Environment,
  ContactShadows,
} from '@react-three/drei';

// 3D Model Component

function JuiceBottle() {
  // const { scene } = useGLTF('/models/juice_bottle.glb');
  const { scene } = useGLTF('/models/orange_juice.glb');
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t / 4) / 4;
  });

  return (
    <primitive ref={meshRef} object={scene} scale={2.5} position={[0, -1, 0]} />
  );
}

export default function App() {
  return (
    <div
      style={{
        width: '80vw',
        innerHeight: '100vh',
        background: 'radial-gradient(circle, #ff9a9e 0%, #fecfef 100%)',
        // height: '100vh',
      }}
    >
      <Canvas shadow camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />

        <Suspense fallback={null}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
              <JuiceBottle />
            </Float>
          </PresentationControls>

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={1}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      <div
        style={{
          // position: 'absolute',
          top: '20%',
          left: '10%',
          pointerEvents: 'none',
          padding: '20px',
        }}
      >
        <h1 style={{ fontSize: '4rem', color: '#fff', margin: 0 }}>ORANGE</h1>
        <p style={{ fontSize: '1.2rem', color: '#fff' }}>
          100% Organic Cold Pressed Juice
        </p>
        <button
          style={{
            pointerEvents: 'auto',
            padding: '12px 24px',
            borderRadius: '30px',
            border: 'none',
            background: '#fff',
            cursor: 'pointer',
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
