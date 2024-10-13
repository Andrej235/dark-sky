import { Canvas } from "@react-three/fiber";
import StarrySky from "./Components/StarrySky/StarrySky";
import { Stats } from "@react-three/drei";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <StarrySky />

      <Stats />
    </Canvas>
  );
}

export default App;
