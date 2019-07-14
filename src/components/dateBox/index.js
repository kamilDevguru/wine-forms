import React from "react"
import classNames from "classnames"
import { Form, Row, Col } from "react-bootstrap"

import "./style.scss"

class DateBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShipped: false,
      isArrived: false,
      isSeized: false,
    }
  }

  handleClick = (key, value) => {
    console.log('value :', value);
    this.setState({ [key]: value });
  }

  render() {
    const {
      isShipped,
      isArrived,
      isSeized,
    } = this.state;
    const {      
      shipLabel,
      shippedOptions,
      arriveLabel,
      arrivedOptions,
      seizeLabel,
      seizedOptions,
      estimateLabel,
      estimatedDate,
    } = this.props;

    return (
      <>
        <Form.Group className="date__group" controlId="formShipped">
          <Form.Label className="date__label">
            {shipLabel}
          </Form.Label>
          <Row className="data__row">
            {shippedOptions.map(option => (
              <Col
                key={option.flag}
                sm={4}
                className={
                  classNames("date__option", { "active": isShipped === option.flag })
                }
                onClick={() => this.handleClick('isShipped', option.flag)}
              >
                <p>
                  {option.label}
                </p>
              </Col>
            ))}
          </Row>
        </Form.Group>
        <Form.Group className="date__group" controlId="formArrived">
          <Form.Label className="date__label">
            {arriveLabel}
          </Form.Label>
          <Row className="data__row">
            {arrivedOptions.map(option => (
              <Col
                key={option.flag}
                sm={4}
                className={
                  classNames("date__option", { "active": isArrived === option.flag })
                }
                onClick={() => this.handleClick('isArrived', option.flag)}
              >
                <p>
                  {option.label}
                </p>
              </Col>
            ))}
          </Row>
        </Form.Group>
        <Form.Group className="date__group" controlId="formDate">
          <Form.Label className="date__label">
            {estimateLabel}
          </Form.Label>
          <Row className="data__row">
            <Col
              sm={12}
              className="date__option"
            >
              <p>
                {estimatedDate}
              </p>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="date__group" controlId="formSeized">
          <Form.Label className="date__label">
            {seizeLabel}
          </Form.Label>
          <Row className="data__row">
            {seizedOptions.map(option => (
              <Col              
                key={option.flag}
                sm={12}
                className={
                  classNames("date__option", { "active": isSeized === option.flag })
                }
                onClick={() => this.handleClick('isSeized', option.flag)}
              >
                <p>
                  {option.label}
                </p>
              </Col>
            ))}
          </Row>
        </Form.Group>
      </>
    )
  }
}

export default DateBox;