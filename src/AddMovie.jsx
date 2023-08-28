import { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export function AddMovie(setMovieList, movieList) {
  const [Name, setName] = useState("");
  const [Poster, setPoster] = useState("");
  const [Rating, setRating] = useState("");
  const [Summary, setSummary] = useState("");
  return (
    <div className="addmovie">
      <TextField
        id="standard-basic"
        variant="outlined"
        type="text"
        label="Name"
        onChange={(event) => setName(event.target.value)}
        value={Name}
      />
      <TextField
        id="standard-basic"
        variant="outlined"
        type="text"
        label="Poster"
        onChange={(event) => setPoster(event.target.value)}
        value={Poster}
      />
      <TextField
        id="standard-basic"
        variant="outlined"
        type="text"
        label="Rating"
        onChange={(event) => setRating(event.target.value)}
        value={Rating}
      />
      <TextField
        id="standard-basic"
        variant="outlined"
        type="text"
        label="Summary"
        onChange={(event) => setSummary(event.target.value)}
        value={Summary}
      />
      <Button
        variant="contained"
        onClick={() => {
          const newMovie = {
            name: Name,
            poster: Poster,
            rating: Rating,
            summary: Summary,
          };
          setMovieList([...movieList, newMovie]);
        }}
      >
        ADD MOVIE
      </Button>
    </div>
  );
}
