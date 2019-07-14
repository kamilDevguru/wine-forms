import React from "react"
import Select from "react-select"

import "./style.scss";

class CityBox extends React.Component {
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
      cities,
    } = this.props;

    return (
      <div className="city__container">
        <p className="city__label">
          {inputLabel}
        </p>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
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
