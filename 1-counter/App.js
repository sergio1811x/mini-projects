import './index.scss';
import {useState} from "react";

function App() {
    const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{number}</h1>
        <button className="minus" onClick={() =>setNumber(number-1)}>- Минус</button>
        <button className="plus"  onClick={() =>setNumber(number+1)} >Плюс +</button>
      </div>
    </div>
  );
}

export default App;
