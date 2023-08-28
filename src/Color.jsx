import { useState } from "react";
import { TextField } from "@mui/material";

export function Color() {
  const [color, setColor] = useState("");
  const [colorList, setcolorList] = useState(["skyblue", "black", "orange"]);

  const styles = {
    backgroundColor: color,
  };

  return (
    <div>
      <TextField
        label="Type any color"
        variant="outlined"
        type="text"
        style={styles}
        onChange={(event) => setColor(event.target.value)}
      />
      <button onClick={() => setcolorList([...colorList, color])}>
        ADD Color
      </button>
      {colorList.map((clr) => (
        <Colorbox colrs={clr} />
      ))}
    </div>
  );
}
function Colorbox({ colrs }) {
  const listColor = {
    width: "300px",
    height: "50px",
    background: colrs,
    marginTop: "10px",
  };
  return <div style={listColor}></div>;
}
