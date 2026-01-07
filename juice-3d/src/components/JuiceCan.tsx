'use client';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function JuiceCan() {
  // Replace with the path to your own .glb file in the /public folder
  //   const { scene } = useGLTF('/models/juice_can.glb');
  const { scene } = useGLTF('/models/orange_juice.glb');
  //   const { scene } = useGLTF('/models/cylinderengine.gltf');
  const canRef = useRef<THREE.Group>(null);

  // Subtle constant rotation for realism
  useFrame((state) => {
    if (canRef.current) {
      canRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive object={scene} ref={canRef} scale={2.5} position={[0, -1, 0]} />
  );
}
