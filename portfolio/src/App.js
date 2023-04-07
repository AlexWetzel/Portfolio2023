import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Instructions from "./pages/Instructions.js";
import Proposal from "./pages/Proposal.js";
import Resume from "./pages/Resume.js";
import Layout from "./components/Layout.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Instructions" element={<Instructions />} />
          <Route path="Proposal" element={<Proposal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
