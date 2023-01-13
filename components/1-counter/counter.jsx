import './index.scss';
import React, { useState } from 'react';


function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div className={'body_counter'}>
      <div className="counter">
        <div>
          <h2>Счетчик:</h2>
          <h1>{number}</h1>
          <button className="minus" onClick={() => setNumber(number - 1)}>
            - Минус
          </button>
          <button className="plus" onClick={() => setNumber(number + 1)}>
            Плюс +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
