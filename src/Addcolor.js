import { useState } from "react";
function Addcolor() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };

  const [colorList, setColorList] = useState(["yellow", "pink", "orange"]);

  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color"
      />
      <button onClick={() => setColorList([...colorList, color])}>Add</button>

      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "300px",
    marginTop: "15px",
  };

  return <div style={styles}></div>;
}

export default Addcolor;
