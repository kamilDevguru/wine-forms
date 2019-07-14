import React from "react"

import "./style.scss"

const Quote = ({quotes}) => (
  <div className="quote__container">
    {quotes.map(({label, charge}, index) => (
      <div
        key={index}
        className="quote__item"
      >
        <h5>{label}</h5>
        <h2>{`¥${charge}`}</h2>
      </div>
    ))}
  </div>
);

export default Quote;