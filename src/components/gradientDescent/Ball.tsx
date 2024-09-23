import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { extend, Object3DNode } from "@react-three/fiber";
import { DerivativeFunction, SurfaceFunction } from "./FunctionToMinimize";

// alpha in [-0.3, 0.3] and theta in [-0.5, 0.5]
const GradientDescent = (
  x: number,
  z: number,
  alpha: number,
  theta: number,
  learningRate: number = 0.01
) => {
  const [dx, dz] = DerivativeFunction(x, z, alpha, theta);
  const newX = x - learningRate * dx;
  const newZ = z - learningRate * dz;
  return [newX, newZ];
};

extend({ Line_: THREE.Line });
declare module "@react-three/fiber" {
  interface ThreeElements {
    line_: Object3DNode<THREE.Line, typeof THREE.Line>;
  }
}

export const Ball = ({
  alpha,
  theta,
  ballMaterialRef,
  trail,
  setTrail,
  position,
  setPosition,
  isMoving,
  setIsMoving,
}: {
  alpha: number;
  theta: number;
  ballMaterialRef: React.RefObject<THREE.MeshStandardMaterial>;
  trail: THREE.Vector3[];
  setTrail: React.Dispatch<React.SetStateAction<THREE.Vector3[]>>;
  position: number[];
  setPosition: React.Dispatch<React.SetStateAction<number[]>>;
  isMoving: boolean;
  setIsMoving: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ballRef = useRef<THREE.Mesh>(null);
  const startPoint = useRef<THREE.Mesh>(null);
  const trailRef = useRef<THREE.Line>(null);

  //   const x = -0.5;
  //   const z = -0.15;
  //   const [trail, setTrail] = useState<THREE.Vector3[]>([]);
  //   const [position, setPosition] = useState<number[]>([x, surfaceFunction(x, z), z]);
  //   const [isMoving, setIsMoving] = useState<boolean>(true);
  const stopThreshold = 0.0005;

  //   useEffect(() => {
  //     if (!isMoving) {
  //       const interval = setTimeout(() => {
  //         const x = ((Math.random() - 0.5) * size) / 2;
  //         const z = ((Math.random() - 0.5) * size) / 2;
  //         setPosition([x, surfaceFunction(x, z), z]);
  //         setTrail([]);
  //         setIsMoving(true);
  //         if (ballMaterialRef.current) ballMaterialRef.current.color.set("red");
  //       }, 5000);

  //       return () => clearTimeout(interval);
  //     }
  //   }, [isMoving]);

  useFrame(() => {
    if (ballRef.current && trailRef.current && ballMaterialRef.current) {
      // Update ball position
      const x = position[0];
      const z = position[2];
      const [newX, newZ] = GradientDescent(x, z, alpha, theta);
      const newY = SurfaceFunction(newX, newZ, alpha, theta);

      const movement = Math.sqrt(Math.pow(newX - x, 2) + Math.pow(newZ - z, 2));

      if (movement < stopThreshold && isMoving) {
        setIsMoving(false);
        ballMaterialRef.current.color.set("#24a424");
      }

      setPosition([newX, newY, newZ]);
      ballRef.current.position.set(newX, newY + 0.1, newZ);

      // Add current position to trail
      setTrail((trail) => {
        const newPos = ballRef.current!.position.clone();
        if (
          trail.length > 0 &&
          trail[trail.length - 1].distanceTo(newPos) < 0.1
        )
          return trail;
        return [...trail, newPos];
      });

      // Add start ball
      if (startPoint.current && trail.length > 0)
        startPoint.current.position.set(trail[0].x, trail[0].y, trail[0].z);

      // Update the trail geometry
      const trailGeometry = trailRef.current.geometry;
      const positions = new Float32Array(trail.length * 3);
      trail.forEach((pos, i) => {
        positions[i * 3] = pos.x;
        positions[i * 3 + 1] = pos.y;
        positions[i * 3 + 2] = pos.z;
      });
      trailGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      trailGeometry.setDrawRange(0, trail.length);
    }
  });

  // useHelper(ballRef, BoxHelper, "#272740");

  return (
    <>
      <mesh ref={ballRef}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial ref={ballMaterialRef} color="red" />
      </mesh>
      <mesh ref={startPoint}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <line_ ref={trailRef}>
        <bufferGeometry />
        <lineBasicMaterial color="red" />
      </line_>
    </>
  );
};
