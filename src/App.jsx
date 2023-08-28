import "./App.css";
import { MovieList } from "./MovieList";
import { Color } from "./Color";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Movie } from "./Movie";
import { NotFound } from "./NotFound";
import { AddMovie } from "./AddMovie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<MovieList />} />
        <Route path="color-game" element={<Color />} />
        <Route path="*" element={<NotFound />} />
        <Route path="addmovie" element={<AddMovie />} />
      </Routes>
    </div>
  );
}

export default App;
