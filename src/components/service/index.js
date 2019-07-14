import React from "react"
import classNames from "classnames"

import "./style.scss"

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeServices: [],
    }
  }

  handleClick = (title) => {
    const { activeServices } = this.state;
    console.log('title :', title);

    if (activeServices.includes(title)) {
      this.setState({ activeServices: activeServices.filter(service => service !== title)});
    } else {
      this.setState({ activeServices: [...activeServices, title]});
    }
  }

  render() {
    const { activeServices } = this.state;
    const { services } = this.props;

    return (
      <>
        {services.map(({ title, icon, activeIcon }) => (
          <div
            key={title}
            className={classNames("service__item", { "active": activeServices.includes(title) })}
            onClick={() => this.handleClick(title)}
          >
            <img src={activeServices.includes(title) ? activeIcon.resolutions.src : icon.resolutions.src} alt="icon" />
            <h5>{title}</h5>
          </div>
        ))}
      </>
    )
  }
}

export default Service;