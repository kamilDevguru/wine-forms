import React from "react"

import "./style.scss"

const Spinner = ({note}) => (
  <div className="spinner__container">
    <p>{note}</p>
  </div>
);

export default Spinner;