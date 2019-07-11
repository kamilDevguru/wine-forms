import React from "react"
import Select from "react-select"

import "./style.scss";

const cities = [
  {
    label: 'Shanghai',
    value: 'Shanghai',
  },
  {
    label: 'Shantou',
    value: 'Shantou',
  },
  {
    label: 'Shangri la',
    value: 'Shangri la',
  },
  {
    label: 'Shang Shang',
    value: 'Shang Shang',
  },
]

class CityBox extends React.Component {
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
      <div className="city__container">
        <p className="city__label">
          Drop-off or pick-up city
        </p>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={cities}
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
