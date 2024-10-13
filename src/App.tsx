import { Canvas } from "@react-three/fiber";
import "./App.css";
import StarrySky from "./StarrySky";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <StarrySky />
    </Canvas>
  );
}

export default App;
