import React from "react"
import classNames from "classnames"

import Plane from "./asset/plane.svg"
import PlaneActive from "./asset/plane-active.svg"
import "./style.scss"

const SERVICES = [
  'Customs clearance',
  'Warehousing',
  'Cold-chain logistics',
  'Delivery',
];

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [0, 1],
    }
  }

  handleClick = (index) => {
    const { services } = this.state;

    if (services.includes(index)) {
      this.setState({ services: services.filter(service => service !== index)});
    } else {
      this.setState({ services: [...services, index]});
    }
  }

  render() {
    const { services } = this.state;

    return (
      <>
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className={classNames("service__item", { "active": services.includes(index) })}
            onClick={() => this.handleClick(index)}
          >
            <img src={services.includes(index) ? PlaneActive : Plane} alt="plane" />
            <h5>{service}</h5>
          </div>
        ))}
      </>
    )
  }
}

export default Service;