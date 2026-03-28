//"use client"

// Import react components
import { FC } from "react";
import { useRef } from "react";

// Import next.js components

// Import three.js components
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  // MeshTransmissionMaterial,
  ContactShadows,
  Environment,
} from "@react-three/drei";

const ThreeDItemCanvas: FC<{
  itemName: string;
  itemImage: string;
  itemDescription: string;
  itemPrice: number;
}> = ({ itemName, itemImage, itemDescription, itemPrice }) => {
  function Eagle(props: any) {
    const ref = useRef();
    const { materials } = useGLTF(`/${itemImage}`);
    useFrame((state) => {
      const t = state.clock.getElapsedTime();
      const rotation = ref.current as any;
      rotation.rotation.set(
        Math.cos(t / 4) / 8,
        Math.sin(t / 3) / 4,
        0.15 + Math.sin(t / 2) / 8,
      );
      const node = ref.current as any;
      node.position.y = (0.5 + Math.cos(t / 2)) / 7;
    });
    return (
      <group ref={ref}>
        <mesh receiveShadow castShadow material={materials.Eagle} {...props} />
      </group>
    );
  }

  useGLTF.preload("/eagle.gltf");

  return (
    <div
      id="itemCardTemplate"
      className=" max-w-72 min-w-72 border border-black content-center"
    >
      <div id="3dModel">
        {" "}
        <Canvas eventPrefix="client" camera={{ position: [0, 0, 4], fov: 40 }}>
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, -5]}
            castShadow
          />
          <Environment preset="city" background blur={1} />
          <ContactShadows
            resolution={512}
            position={[0, -0.8, 0]}
            opacity={1}
            scale={10}
            blur={2}
            far={0.8}
          />
          <Eagle rotation={[0.3, Math.PI / 1.6, 0]} />
        </Canvas>
      </div>

      <div>{itemName}</div>
      <div>{itemPrice}</div>
      <div>{itemDescription}</div>
    </div>
  );
};

export { ThreeDItemCanvas };

//geometry={nodes.defaultMaterial.geometry}
