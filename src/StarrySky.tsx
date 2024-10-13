import { OrbitControls, Stars, Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import { BufferGeometry, Color, Mesh, NormalBufferAttributes } from "three";

export default function StarrySky() {
  return (
    <>
      <color attach="background" args={["black"]} />
      <ambientLight intensity={1} />
      {/* <ShootingStar /> */}
      <Stars saturation={0} count={500} speed={1} />
      <OrbitControls />

      <ShootingStar />

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} />
      </EffectComposer>
    </>
  );
}

function ShootingStar() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 2;
    ref.current?.position.set(
      Math.sin(t) * 4,
      Math.atan(t) * Math.cos(t / 2) * 2,
      Math.cos(t) * 4
    );
  });

  return (
    <Trail
      width={5}
      length={8}
      color={new Color(2, 1, 10)}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </Trail>
  );
}
