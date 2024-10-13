import { Instance, Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

type ShootingStarProps = {
  particle: {
    factor: number;
    scale: number;
    speed: number;
    xFactor: number;
    yFactor: number;
    zFactor: number;
  };
};

export default function ShootingStar({
  particle: { scale, factor, speed, xFactor, yFactor, zFactor },
}: ShootingStarProps) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const t = factor + state.clock.elapsedTime * (speed / 2);
    ref.current.position.set(
      Math.cos(t) +
        Math.sin(t * 1) / 10 +
        xFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        yFactor +
        Math.sin((t / 10) * factor) +
        (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        zFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 3) * factor) / 4
    );
  });
  return (
    <Trail
      children={<Instance ref={ref} scale={scale} />}
      color={0xffffff}
      attenuation={(t) => t * t}
      width={5}
      length={8}
    />
  );
}
