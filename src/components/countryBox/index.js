import React from "react"
import Select from "react-select"

import "./style.scss";

class CountryBox extends React.Component {
  getFormattedArray = (arr) => (
    arr.map(item => ({
      value: item.key,
      label: item.name,
    }))
  )
  
  render() {
    const {
      inputLabel,
      placeholder,
      countries,
      originCountry,
    } = this.props;

    return (
      <div className="country__container">
        <p className="country__label">
          {inputLabel}
        </p>
        <Select
          value={originCountry}
          onChange={this.props.handleSelect}
          options={this.getFormattedArray(countries)}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default CountryBox;
