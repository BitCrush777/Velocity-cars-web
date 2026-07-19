"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from "three";

interface Configurator3DProps {
  color: string;
  finish: "metallic" | "matte" | "satin" | "chrome" | "gloss";
  wheelType: "sport" | "luxury" | "racing" | "carbon" | "chrome";
  caliperColor: string;
  hasSplitter: boolean;
  hasSpoiler: boolean;
}

function CarModel({
  color,
  finish,
  wheelType,
  caliperColor,
  hasSplitter,
  hasSpoiler,
}: Configurator3DProps) {
  // Compute materials based on selected paint finish
  const bodyMaterial = useMemo(() => {
    const params: THREE.MeshStandardMaterialParameters = {
      color: new THREE.Color(color),
    };

    switch (finish) {
      case "matte":
        params.roughness = 0.9;
        params.metalness = 0.1;
        break;
      case "metallic":
        params.roughness = 0.2;
        params.metalness = 0.9;
        break;
      case "satin":
        params.roughness = 0.4;
        params.metalness = 0.6;
        break;
      case "chrome":
        params.roughness = 0.05;
        params.metalness = 1.0;
        break;
      case "gloss":
      default:
        params.roughness = 0.1;
        params.metalness = 0.2;
        break;
    }

    return new THREE.MeshStandardMaterial(params);
  }, [color, finish]);

  // Wheel details
  const wheelMaterial = useMemo(() => {
    const isCarbon = wheelType === "carbon";
    const isChrome = wheelType === "chrome";
    return new THREE.MeshStandardMaterial({
      color: isCarbon ? 0x111111 : isChrome ? 0xdddddd : 0x444444,
      roughness: isChrome ? 0.05 : isCarbon ? 0.8 : 0.4,
      metalness: isChrome ? 1.0 : isCarbon ? 0.2 : 0.8,
    });
  }, [wheelType]);

  const caliperMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(caliperColor),
      roughness: 0.2,
      metalness: 0.8,
    });
  }, [caliperColor]);

  return (
    <group position={[0, 0.4, 0]}>
      {/* Car Main Body (Aerodynamic Sports Silhouette) */}
      <mesh material={bodyMaterial} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.6, 1.9]} />
      </mesh>

      {/* Cabin/Glasshouse */}
      <mesh position={[-0.4, 0.5, 0]} castShadow>
        <boxGeometry args={[2.0, 0.5, 1.6]} />
        <meshStandardMaterial color={0x0b0b0b} roughness={0.05} metalness={0.9} />
      </mesh>

      {/* Front splitter body kit */}
      {hasSplitter && (
        <mesh position={[2.15, -0.25, 0]} castShadow>
          <boxGeometry args={[0.3, 0.1, 1.8]} />
          <meshStandardMaterial color={0x080808} roughness={0.7} metalness={0.9} />
        </mesh>
      )}

      {/* Rear spoiler body kit */}
      {hasSpoiler && (
        <group position={[-1.9, 0.5, 0]}>
          {/* Spoiler struts */}
          <mesh position={[0, -0.2, 0.7]}>
            <boxGeometry args={[0.05, 0.4, 0.1]} />
            <meshStandardMaterial color={0x080808} />
          </mesh>
          <mesh position={[0, -0.2, -0.7]}>
            <boxGeometry args={[0.05, 0.4, 0.1]} />
            <meshStandardMaterial color={0x080808} />
          </mesh>
          {/* Spoiler wing */}
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[0.3, 0.05, 1.9]} />
            <meshStandardMaterial color={0x080808} roughness={0.8} metalness={0.8} />
          </mesh>
        </group>
      )}

      {/* Brake Calipers and Wheels */}
      {/* Wheel 1 (Front Left) */}
      <group position={[1.3, -0.3, 0.95]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.45, 0.45, 0.35, 32]} />
          <primitive object={wheelMaterial} attach="material" />
        </mesh>
        {/* Brake Caliper */}
        <mesh position={[0.2, 0, 0.1]} castShadow>
          <boxGeometry args={[0.1, 0.2, 0.05]} />
          <primitive object={caliperMaterial} attach="material" />
        </mesh>
      </group>

      {/* Wheel 2 (Front Right) */}
      <group position={[1.3, -0.3, -0.95]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.45, 0.45, 0.35, 32]} />
          <primitive object={wheelMaterial} attach="material" />
        </mesh>
        <mesh position={[0.2, 0, -0.1]} castShadow>
          <boxGeometry args={[0.1, 0.2, 0.05]} />
          <primitive object={caliperMaterial} attach="material" />
        </mesh>
      </group>

      {/* Wheel 3 (Rear Left) */}
      <group position={[-1.3, -0.3, 0.95]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.45, 0.45, 0.35, 32]} />
          <primitive object={wheelMaterial} attach="material" />
        </mesh>
        <mesh position={[0.2, 0, 0.1]} castShadow>
          <boxGeometry args={[0.1, 0.2, 0.05]} />
          <primitive object={caliperMaterial} attach="material" />
        </mesh>
      </group>

      {/* Wheel 4 (Rear Right) */}
      <group position={[-1.3, -0.3, -0.95]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.45, 0.45, 0.35, 32]} />
          <primitive object={wheelMaterial} attach="material" />
        </mesh>
        <mesh position={[0.2, 0, -0.1]} castShadow>
          <boxGeometry args={[0.1, 0.2, 0.05]} />
          <primitive object={caliperMaterial} attach="material" />
        </mesh>
      </group>
    </group>
  );
}

export default function Configurator3D({
  color,
  finish,
  wheelType,
  caliperColor,
  hasSplitter,
  hasSpoiler,
}: Configurator3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [5, 2.5, 6], fov: 40 }} gl={{ toneMappingExposure: 1.2 }}>
        <color attach="background" args={["#131313"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <spotLight position={[-10, 8, -10]} color="#adc6ff" intensity={2} angle={0.6} penumbra={1} />
        <Suspense fallback={null}>
          <CarModel
            color={color}
            finish={finish}
            wheelType={wheelType}
            caliperColor={caliperColor}
            hasSplitter={hasSplitter}
            hasSpoiler={hasSpoiler}
          />
          <Grid
            position={[0, -0.35, 0]}
            args={[15, 15]}
            cellSize={0.5}
            cellThickness={0.5}
            cellColor="#3b82f6"
            sectionSize={2.5}
            sectionThickness={1}
            sectionColor="#3b82f6"
            fadeDistance={25}
          />
        </Suspense>
        <OrbitControls enablePan={true} maxPolarAngle={Math.PI / 2.1} minDistance={3} maxDistance={15} />
      </Canvas>
    </div>
  );
}
