import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agents from "./pages/Agents";
import NavBar from "./components/Common/NavBar";

import FullScreenNav from "./components/Common/FullScreenNav";

function App() {
  return (
    <div className="overflow-x-hidden">
      <FullScreenNav/>
      <NavBar /> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agents" element={<Agents />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
