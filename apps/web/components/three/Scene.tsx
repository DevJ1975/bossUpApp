"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";

function Blob({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={1.1} floatIntensity={1.6}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.25}
          metalness={0.15}
          distort={0.38}
          speed={1.3}
          transparent
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
}

/** Gentle camera drift toward the pointer for depth. */
function PointerRig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    camera.position.x += (pointer.x * 0.7 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.45 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      frameloop={reduce ? "demand" : "always"}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.3} color="#ffd57a" />
      <pointLight position={[-6, -2, 3]} intensity={2.2} color="#22d3ee" />
      <pointLight position={[4, 3, 2]} intensity={1.4} color="#7c5cff" />

      <Blob position={[-3.2, 1, -2]} color="#ffb020" scale={1.9} speed={1.2} />
      <Blob position={[3.4, -1.3, -1]} color="#22d3ee" scale={1.35} speed={1.6} />
      <Blob position={[1.6, 2.1, -3.5]} color="#7c5cff" scale={1.05} speed={1.0} />

      <Sparkles
        count={90}
        scale={[15, 9, 6]}
        size={2.2}
        speed={reduce ? 0 : 0.4}
        color="#cfe0ff"
        opacity={0.6}
      />

      {!reduce && <PointerRig />}
    </Canvas>
  );
}
