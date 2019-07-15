import React from "react"
import classNames from "classnames"

import "./style.scss"

class Service extends React.Component {
  handleClick = (title) => {
    const { selectedServices, handleSelect } = this.props;
    const newServices = selectedServices.includes(title)
      ? selectedServices.filter(service => service !== title)
      : [...selectedServices, title];

    handleSelect(newServices);
  }

  render() {
    const {
      services,
      selectedServices,
    } = this.props;

    return (
      <>
        {services.map(({ title, icon, activeIcon }) => (
          <div
            key={title}
            className={classNames("service__item", { "active": selectedServices.includes(title) })}
            onClick={() => this.handleClick(title)}
          >
            <img src={selectedServices.includes(title) ? activeIcon.resolutions.src : icon.resolutions.src} alt="icon" />
            <h5>{title}</h5>
          </div>
        ))}
      </>
    )
  }
}

export default Service;