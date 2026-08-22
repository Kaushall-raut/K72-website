import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agents from "./pages/Agents";

function App() {
  return (<>
  
      <Link to={"/"}>Home</Link>
      <Link to={"/Agents"}>Agents</Link>
      <Link to={"/projects"}>project</Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Agents" element={<Agents />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  </>
  );
}

export default App;
