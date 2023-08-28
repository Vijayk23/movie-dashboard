import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <li>
        <Link to="/movies">MovieList</Link>
      </li>
      <li>
        <Link to="/color-game">Colorgame</Link>
      </li>

      <li>
        <Link to="/addmovie">Add Movie</Link>
      </li>
    </div>
  );
}
