import { PointMaterial, Points } from "@react-three/drei";
import { random } from "maath";
import { useMemo } from "react";

export default function Stars() {
  const sphere: Float32Array = useMemo(
    () =>
      random.inSphere(new Float32Array(9000), { radius: 20 }) as Float32Array,
    []
  );

  return (
    <Points positions={sphere} stride={3} frustumCulled={false}>
      {/* Transparent makes points round instead of square */}
      <PointMaterial transparent color="#ffa0e0" size={0.02} />
    </Points>
  );
}
