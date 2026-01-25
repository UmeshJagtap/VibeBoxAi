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

  // Subtle constant rotation + Diagonal movement
  useFrame((state) => {
    if (canRef.current) {
      canRef.current.rotation.y += 0.010;
      canRef.current.rotation.x += 0.008;

      // Move diagonally from top-right to bottom-left
      canRef.current.position.x -= 0.05;
      canRef.current.position.y -= 0.05;

      // Reset to top-right when it goes off screen
      if (canRef.current.position.y < -10) {
        canRef.current.position.x = 10;
        canRef.current.position.y = 10;
      }
    }
  });

  return (
    <primitive
      object={scene}
      ref={canRef}
      scale={10}
      position={[10, 10, 0]}
    />
  );
}
