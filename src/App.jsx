import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import "./App.css";

import GamesPage from "./pages/GamesPage";
import CreatorsPage from "./pages/CreatorsPage";
import GamesIdPage from "./pages/GamesIdPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp";
import FavoritePage from "./pages/FavoritePage";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const handleToken = (newToken) => {
    if (newToken) {
      Cookies.set("token", newToken, { expires: 3 });
      setToken(newToken);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };
  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<GamesIdPage />} />
        <Route path="/creators" element={<CreatorsPage />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route
          path="/favorites"
          element={<FavoritePage handleToken={handleToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
