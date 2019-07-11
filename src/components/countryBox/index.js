import React from "react"
import Select from "react-select"

import "./style.scss";

const countries = [
  {
    label: 'Andorra',
    value: 'Andorra',
  },
  {
    label: 'Angola',
    value: 'Angola',
  },
  {
    label: 'Antigua and Barbuda',
    value: 'Antigua and Barbuda',
  },
  {
    label: 'Algeria',
    value: 'Algeria',
  },
]

class CountryBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '' };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  }
  
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="country__container">
        <p className="country__label">
          Country of origin
        </p>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={countries}
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

export default CountryBox;
