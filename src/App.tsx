import { Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/info/:id" element={<InfoPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
