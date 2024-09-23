import * as THREE from "three";

import { Text } from "@react-three/drei";
import { interpolateInferno } from "d3-scale-chromatic";

import { SurfaceFunction } from "./FunctionToMinimize";

const GetText = ({
  position,
  rotation,
}: {
  position: number[];
  rotation: number[];
}) => {
  return (
    <Text
      font={"fonts/Poppins-Regular.ttf"}
      position={new THREE.Vector3(...position)}
      rotation={new THREE.Euler(...rotation)}
      fontSize={0.3}
      color="#780f41"
    >
      GRADIENT DESCENT ALGORITHM
    </Text>
  );
};

const SurfaceFrame = ({
  width,
  height = 0.6,
  depth = 0.08,
  color = "#495057",
}: {
  width: number;
  height?: number;
  depth?: number;
  color?: string;
}) => {
  return (
    <group>
      <mesh position={[0, -height * 0.4166, width / 2]}>
        <boxGeometry args={[width + 2 * depth, height, depth]} />
        <meshStandardMaterial color={new THREE.Color(color)} />
        <GetText position={[0, 0.03, depth / 1.6]} rotation={[0, 0, 0]} />
      </mesh>
      <mesh position={[0, -height * 0.4166, -width / 2]}>
        <boxGeometry args={[width + 2 * depth, height, depth]} />
        <meshStandardMaterial color={new THREE.Color(color)} />
        <GetText
          position={[0, 0.03, -depth / 1.6]}
          rotation={[0, Math.PI, 0]}
        />
      </mesh>
      <mesh position={[width / 2 + depth / 2, -height * 0.4166, 0]}>
        <boxGeometry args={[depth, height, width]} />
        <meshStandardMaterial color={new THREE.Color(color)} />
        <GetText
          position={[depth / 1.6, 0.03, depth / 1.6]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </mesh>
      <mesh position={[-width / 2 - depth / 2, -height * 0.4166, 0]}>
        <boxGeometry args={[depth, height, width]} />
        <meshStandardMaterial color={new THREE.Color(color)} />
        <GetText
          position={[-depth / 1.6, 0.03, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </mesh>
    </group>
  );
};

export const GenerateSurface = (
  size: number,
  mesh: React.RefObject<
    THREE.Mesh<
      THREE.BufferGeometry<THREE.NormalBufferAttributes>,
      THREE.Material | THREE.Material[],
      THREE.Object3DEventMap
    >
  >,
  alpha: number,
  theta: number
) => {
  const resolution = 50;

  const geometry = new THREE.PlaneGeometry(size, size, resolution, resolution);
  const count = geometry.attributes.position.count;

  let minY = Infinity;
  let maxY = -Infinity;

  for (let i = 0; i < count; i++) {
    const x = geometry.attributes.position.getX(i);
    // /!\ We reverse the Y and Z axes to put them back in the right order.
    const z = geometry.attributes.position.getY(i);
    const y = SurfaceFunction(x, z, alpha, theta);

    if (y < minY) minY = y;
    if (y > maxY) maxY = y;

    geometry.attributes.position.setZ(i, z);
    geometry.attributes.position.setY(i, y);
  }

  geometry.computeVertexNormals();

  minY = Math.floor(minY);
  maxY = Math.ceil(maxY);

  const colors = [];
  for (let i = 0; i < count; i++) {
    const y = geometry.attributes.position.getY(i);
    const color = interpolateInferno((y - minY) / (maxY - minY));
    colors.push(...new THREE.Color(color));
  }

  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  if (mesh.current) {
    mesh.current.geometry.dispose();
    mesh.current.geometry = geometry;
  }
};

export const Surface3D = ({
  size,
  mesh,
  alpha = 0.1,
  theta = 0.5,
}: {
  size: number;
  mesh: React.RefObject<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>>;
  alpha: number;
  theta: number;
}) => {
  GenerateSurface(size, mesh, alpha, theta);

  // const { wireframe } = useControls({ wireframe: false })

  return (
    <>
      <mesh ref={mesh} castShadow>
        <meshStandardMaterial side={THREE.DoubleSide} vertexColors={true} />
      </mesh>
      <mesh
        geometry={mesh.current?.geometry}
        position={[0, -0.5, 0]}
        castShadow
      >
        <meshStandardMaterial side={THREE.FrontSide} vertexColors={true} />
      </mesh>
      <SurfaceFrame width={size} />
    </>
  );
};
