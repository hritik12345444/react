import { useState } from "react";
import "./App.css";
import "./component/design.css";

function App() {
  const [color, setColor] = useState("olive");

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div
        id="document"
        style={{
          backgroundColor: color,
          height: "100vh",
          transition: "background-color 0.5s ease",
        }}
      >
        <div id="btn-box">
          <h1 className="heading">Pick a Color 🎨</h1>
          <div className="btn-container">
            <button onClick={() => updateColor("red")} className="red">Red</button>
            <button onClick={() => updateColor("black")} className="black">Black</button>
            <button onClick={() => updateColor("blue")} className="blue">Blue</button>
            <button onClick={() => updateColor("white")} className="white">White</button>
            <button onClick={() => updateColor("green")} className="green">Green</button>
            <button onClick={() => updateColor("purple")} className="purple">Purple</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


