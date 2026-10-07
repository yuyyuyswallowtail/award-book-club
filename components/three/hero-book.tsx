"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function Book({ animate }: { animate: boolean }) {
  const g = useRef<THREE.Group>(null);

  useFrame((s) => {
    const m = g.current;
    if (!m) return;
    const t = animate ? s.clock.elapsedTime : 0;
    m.rotation.y = -0.6 + (animate ? s.pointer.x * 0.4 : 0) + Math.sin(t * 0.6) * 0.15;
    m.rotation.x = 0.25 - (animate ? s.pointer.y * 0.2 : 0);
    m.rotation.z = -0.12;
  });

  return (
    <Float speed={animate ? 1.6 : 0} floatIntensity={animate ? 0.8 : 0} rotationIntensity={0}>
      <group ref={g}>
        <RoundedBox args={[1.5, 2.1, 0.05]} radius={0.02} smoothness={4} position={[0, 0, 0.13]}>
          <meshStandardMaterial color="#2F4C8C" roughness={0.45} />
        </RoundedBox>
        <RoundedBox args={[1.5, 2.1, 0.05]} radius={0.02} smoothness={4} position={[0, 0, -0.13]}>
          <meshStandardMaterial color="#2F4C8C" roughness={0.45} />
        </RoundedBox>
        <mesh>
          <boxGeometry args={[1.42, 2.0, 0.22]} />
          <meshStandardMaterial color="#F4ECDD" roughness={0.9} />
        </mesh>
        <mesh position={[-0.745, 0, 0]}>
          <boxGeometry args={[0.07, 2.1, 0.31]} />
          <meshStandardMaterial color="#E2573A" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.35, 0.16]}>
          <circleGeometry args={[0.3, 48]} />
          <meshStandardMaterial color="#E2573A" />
        </mesh>
        <mesh position={[0, -0.55, 0.16]}>
          <boxGeometry args={[0.9, 0.05, 0.005]} />
          <meshStandardMaterial color="#F6B98B" />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroBook({ animate }: { animate: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 35 }} dpr={[1, 1.75]} frameloop={animate ? "always" : "demand"}>
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 3, 3]} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={2} color="#F6B98B" position={[-5, 0, 2]} scale={[2, 6, 1]} />
        <Lightformer form="rect" intensity={2} position={[5, -2, 2]} scale={[2, 5, 1]} />
      </Environment>
      <Book animate={animate} />
    </Canvas>
  );
}
