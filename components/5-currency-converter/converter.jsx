import React, { useEffect, useRef, useState } from 'react';
import { Block } from './block';
import './index.scss';
import axios from 'axios';

function Converter() {
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState();
  const [toPrice, setToPrice] = useState(1);

  const ratesRef = useRef({});

  useEffect(() => {
    axios
      .get('https://api.currencyapi.com/v3/latest?apikey=N6v0qTQCarkk40XGzC8uLcBCF40R8E5DQaSJAzDa')
      .then((res) => {
        ratesRef.current = res.data.data
        onChangeToPrice(1);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(ratesRef)

  const onChangeFromPrice = (value) => {
    setFromPrice(value);
    const price = value / ratesRef.current[fromCurrency]?.value;
    const result = price * ratesRef.current[toCurrency]?.value;
    setToPrice(result.toFixed(2));
  };

  const onChangeToPrice = (value) => {
    setToPrice(value);
    const result =
      (ratesRef.current[fromCurrency]?.value / ratesRef.current[toCurrency]?.value) * value;
    setFromPrice(result.toFixed(2));
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className={'body_converter'}>
      <div className="converter">
        <Block
          value={fromPrice}
          currency={fromCurrency}
          onChangeCurrency={setFromCurrency}
          onChangeValue={onChangeFromPrice}
        />
        <Block
          value={toPrice}
          currency={toCurrency}
          onChangeCurrency={setToCurrency}
          onChangeValue={onChangeToPrice}
        />
      </div>
    </div>
  );
}

export default Converter;
