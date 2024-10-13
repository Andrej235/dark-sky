import { OrbitControls, Stars } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import ShootingStar from "./ShootingStar";

export default function StarrySky() {
  return (
    <>
      <color attach="background" args={["black"]} />
      <ambientLight intensity={1} />

      <Stars saturation={0} count={500} speed={1} />
      <OrbitControls />

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} />
      </EffectComposer>

      <ShootingStar />
    </>
  );
}
