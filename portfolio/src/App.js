import { HashRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About.js";
import Instructions from "./pages/Instructions.js";
import Proposal from "./pages/Proposal.js";
import Resume from "./pages/Resume.js";
import Layout from "./components/Layout.js";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Instructions" element={<Instructions />} />
          <Route path="Proposal" element={<Proposal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
