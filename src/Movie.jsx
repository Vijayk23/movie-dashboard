import { useState } from "react";
import { IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export function Movie({ movie }) {
  const styles = {
    color: movie.rating >= 8.5 ? "teal" : "red",
  };
  const [show, setShow] = useState(true);
  const toggle = {
    display: show ? "block" : "none",
  };

  return (
    <Card id="movie-container">
      <img id="poster" src={movie.poster} />
      <CardContent>
        <div className="title">
          <p id="moviename">
            {movie.name}{" "}
            <IconButton onClick={() => setShow(!show)}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </p>
          <p id="rating" style={styles}>
            ⭐{movie.rating}
          </p>
        </div>

        <p style={toggle} id="summary">
          {movie.summary}
        </p>
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  );
}
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  return (
    <div>
      <IconButton
        color="primary"
        aria-lable="like"
        onClick={() => setLike(like + 1)}
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton color="error" onClick={() => setDisLike(dislike + 1)}>
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
