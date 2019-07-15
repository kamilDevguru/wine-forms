import React from "react"
import Select from "react-select"

import "./style.scss";

class CityBox extends React.Component {
  getFormattedArray = (arr) => (
    arr.map(item => ({
      value: item.key,
      label: item.name,
    }))
  )
  
  render() {
    const {
      pickUpCity,
      inputLabel,
      placeholder,
      cities,
      handleSelect,
    } = this.props;

    return (
      <div className="city__container">
        <p className="city__label">
          {inputLabel}
        </p>
        <Select
          value={pickUpCity}
          onChange={handleSelect}
          options={this.getFormattedArray(cities)}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default CityBox;
