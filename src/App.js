import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Intro from "./pages/Intro";
import AboutMe from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { ContactMe } from "./pages/ContactMe";

function App() {
  return (
    <div className="flex">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
