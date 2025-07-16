import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import useSettings from "../utils/useSettings";

type Props = {
  shells: number[];
};

function ElectronRing({ count, radius }: { count: number; radius: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  let rotationSpeed = 0.2;

  const { settings } = useSettings();
  if (settings.rotationSpeedElektrons === "slow") {
    rotationSpeed = 0.2;
  } else if (settings.rotationSpeedElektrons === "normal") {
    rotationSpeed = 0.5;
  } else if (settings.rotationSpeedElektrons === "fast") {
    rotationSpeed = 1.0;
  }

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
  });

  const elektronen = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return (
      <mesh key={i} position={[x, 0, z]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#7de2fc" />
      </mesh>
    );
  });

  return <group ref={groupRef}>{elektronen}</group>;
}

function OrbitRing({ radius }: { radius: number }) {
  const segments = 64;
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * 2 * Math.PI;
    points.push(
      new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius)
    );
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <primitive
      object={
        new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({ color: "#888", linewidth: 1 })
        )
      }
    />
  );
}

export default function AtomView({ shells }: Props) {
  const totalParticles = shells.reduce((sum, n) => sum + n, 0);

  const kern = Array.from({ length: totalParticles }, (_, i) => (
    <mesh
      key={i}
      position={[
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
      ]}
    >
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial color={i % 2 === 0 ? "#ff5050" : "#a0a0a0"} />
    </mesh>
  ));

  return (
    <Canvas
      style={{ height: "400px", width: "100%" }}
      camera={{ position: [4, 3, 4], fov: 50 }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} />
      <OrbitControls />

      <group>{kern}</group>

      {shells.map((electrons, i) => {
        const radius = 1.5 + i * 0.8;
        return (
          <group key={i}>
            <ElectronRing count={electrons} radius={radius} />
            <OrbitRing radius={radius} />
          </group>
        );
      })}
    </Canvas>
  );
}
