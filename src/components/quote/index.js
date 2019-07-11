import React from "react"

import "./style.scss"

const CHARGES = [
  {
    title: 'Total charges',
    price: 980,
  },
  {
    title: 'Total charges',
    price: 980,
  },
];

const Quote = () => (
  <div className="quote__container">
    {CHARGES.map(({title, price}, index) => (
      <div
        key={index}
        className="quote__item"
      >
        <h5>{title}</h5>
        <h2>{`¥${price}`}</h2>
      </div>
    ))}
  </div>
);

export default Quote;