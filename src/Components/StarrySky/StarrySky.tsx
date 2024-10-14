import { Html, Instances, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import ShootingStar from "../ShootingStar/ShootingStar";
import { MathUtils } from "three";
import Header from "../Header/Header";
import Stars from "../Stars/Stars";
import { useMemo } from "react";
//Make custom stars? they would glow like shooting ones

export default function StarrySky() {
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, () => {
        const x = {
          scale: MathUtils.randFloat(0.5, 1),
          trailLength: 1,
          trailWidth: 1,
          factor: MathUtils.randInt(20, 100),
          speed: MathUtils.randFloat(0.01, 0.75),
          xFactor: MathUtils.randFloatSpread(40),
          yFactor: MathUtils.randFloatSpread(10),
          zFactor: MathUtils.randFloatSpread(10),
        };

        x.trailLength *= x.scale;
        x.trailWidth *= x.scale;

        return x;
      }),
    []
  );

  return (
    <>
      <Html>
        <Header />
      </Html>

      <color attach="background" args={["black"]} />
      <ambientLight intensity={1} />

      <OrbitControls />

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={0} />
      </EffectComposer>

      <Stars />

      <group scale={[0.5, 0.5, 0.5]}>
        <Instances limit={particles.length} position={[0, 2.5, 0]}>
          {particles.map((particle, i) => (
            <ShootingStar key={i} particle={particle} />
          ))}

          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </Instances>
      </group>
    </>
  );
}
