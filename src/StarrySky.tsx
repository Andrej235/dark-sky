import { Html, Instances, OrbitControls, Stars } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import ShootingStar from "./ShootingStar";
import { MathUtils } from "three";
import Header from "./Header";

const particles = Array.from({ length: 25 }, () => ({
  scale: MathUtils.randFloat(0.5, 1),
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 0.75),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(10),
  zFactor: MathUtils.randFloatSpread(10),
}));

export default function StarrySky() {
  return (
    <>
      <Html>
        <Header />
      </Html>

      <color attach="background" args={["black"]} />
      <ambientLight intensity={1} />

      <Stars saturation={0} count={500} speed={1} />
      <OrbitControls />

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} />
      </EffectComposer>

      <Instances
        limit={particles.length}
        castShadow
        receiveShadow
        position={[0, 2.5, 0]}
      >
        {particles.map((particle, i) => (
          <ShootingStar key={i} particle={particle} />
        ))}

        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </Instances>
    </>
  );
}
