import React from "react"
import Select from "react-select"

import "./style.scss";

class CountryBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '' };
  }

  getFormattedArray = (arr) => (
    arr.map(item => ({
      value: item.key,
      label: item.name,
    }))
  )

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  }
  
  render() {
    const { selectedOption } = this.state;
    const {
      inputLabel,
      placeholder,
      countries,
    } = this.props;

    return (
      <div className="country__container">
        <p className="country__label">
          {inputLabel}
        </p>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.getFormattedArray(countries)}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default CountryBox;
