import "./styles.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(5000);

  let handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className="amount">
        <sup>$</sup>
        <span className="dollars">{parseFloat(value / 100).toFixed(2)}</span>
      </div>
      <input type="range" id="priceRange" min="0" max="10000" step="1" value={value} onChange={handleChange} />
      <br />
      <button>Buy Now</button>
    </div>
  );
}

export default App;
