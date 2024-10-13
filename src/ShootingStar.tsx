import { Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, Mesh } from "three";

export default function ShootingStar() {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 2;
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
