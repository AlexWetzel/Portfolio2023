import { HashRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage.js";
import InstructionsPage from "./pages/InstructionsPage.js";
import ProposalPage from "./pages/ProposalPage.js";
import ResumePage from "./pages/ResumePage.js";
import Layout from "./components/Layout.js";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="instructions" element={<InstructionsPage />} />
          <Route path="proposal" element={<ProposalPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
