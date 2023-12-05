import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import "./App.css";

import GamesPage from "./pages/GamesPage";
import CreatorsPage from "./pages/CreatorsPage";
import GamesIdPage from "./pages/GamesIdPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<GamesIdPage />} />
        <Route path="/creators" element={<CreatorsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
