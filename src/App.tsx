import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import { Routes, Route } from "react-router-dom";
import { TMovie } from "./components/List";
import { TState } from "./store/movies/movies.slice";
import useData from "./hooks/useData";
import useFavorites from "./hooks/useFavorites";
import "./App.css";

export interface IPageProps {
  data: TState;
}

export interface IFavoritesPageProps {
  data: TMovie[];
}

function App() {
  const data = useData();
  const favorites = useFavorites();

  return (
    <>
      <h1>Домашнее задание к занятию «Redux Toolkit»</h1>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/:id" element={<InfoPage data={data} />} />
        <Route path="/favorites" element={<FavoritesPage data={favorites} />} />
      </Routes>
    </>
  );
}

export default App;
