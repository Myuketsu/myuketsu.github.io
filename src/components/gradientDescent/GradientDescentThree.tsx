// ------- //
// IMPORTS //
// ------- //

import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { SurfaceFunction } from "./FunctionToMinimize";
import { Surface3D } from "./Surface";
import { Ball } from "./Ball";
// import { useControls } from 'leva';
// import { Perf } from "r3f-perf";

// import { useHelper } from '@react-three/drei';
// import { BoxHelper, PointLightHelper } from "three";

// ---- //
// CODE //
// ---- //

const Light = () => {
  const group = useRef<THREE.Group>(null);
  const pointLight = useRef<THREE.PointLight>(null);

  // useHelper(pointLight, PointLightHelper, 0.5, "hotpink");

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001;
    }
  });

  // const { position, decay, intensity } = useControls("Light", { position: [5, 4, 0], decay: { value: 1, step: 0.2}, intensity: 5});

  return (
    <group ref={group}>
      <pointLight
        ref={pointLight}
        color="white"
        position={[5, 4, 0]}
        intensity={5}
        decay={1}
      />
    </group>
  );
};

const GradientDescentAlgorithm = ({ size }: { size: number }) => {
  const groupGrad = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);
  const ballMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

  const [alpha] = useState<number>(0.1);
  const [theta] = useState<number>(0.5);
  const [trail, setTrail] = useState<THREE.Vector3[]>([]);
  const [position, setPosition] = useState<number[]>([-0.5, 0, -0.15]);
  const [isMoving, setIsMoving] = useState<boolean>(true);

  useEffect(() => {
    if (!isMoving) {
      const interval = setTimeout(() => {
        // const newAlpha = Math.random() * 0.6 - 0.3;
        // const newTheta = Math.random() - 0.5;
        // setAlpha(newAlpha);
        // setTheta(newTheta);

        const x = ((Math.random() - 0.5) * size) / 2;
        const z = ((Math.random() - 0.5) * size) / 2;
        setPosition([x, SurfaceFunction(x, z, alpha, theta), z]);

        // GenerateSurface(size, mesh, newAlpha, newTheta);
        setTrail([]);
        if (ballMaterialRef.current) ballMaterialRef.current.color.set("red");

        setIsMoving(true);
      }, 5000);

      return () => clearTimeout(interval);
    }
  }, [isMoving]);

  useFrame(() => {
    if (groupGrad.current) {
      groupGrad.current.rotation.y += 0.0022;
    }
  });

  return (
    <group ref={groupGrad}>
      <Surface3D size={size} mesh={mesh} alpha={alpha} theta={theta} />
      <Ball
        alpha={alpha}
        theta={theta}
        ballMaterialRef={ballMaterialRef}
        trail={trail}
        setTrail={setTrail}
        position={position}
        setPosition={setPosition}
        isMoving={isMoving}
        setIsMoving={setIsMoving}
      />
    </group>
  );
};

const GradientDescentApp = () => {
  return (
    <>
      <Canvas camera={{ position: [45, 45, 45], fov: 7 }}>
        {/* <Perf position="top-left" /> */}
        <ambientLight intensity={0.6} />
        <Light />
        <GradientDescentAlgorithm size={8} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </>
  );
};

export default GradientDescentApp;
