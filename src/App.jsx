import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agents from "./pages/Agents";

function App() {
  return (
    <div >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Agents" element={<Agents />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
     
    </div>
  );
}

export default App;
