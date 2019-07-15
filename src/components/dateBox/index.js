import React from "react"
import classNames from "classnames"
import { Form, Row, Col } from "react-bootstrap"

import "./style.scss"

class DateBox extends React.Component {
  render() {
    const {      
      shipLabel,
      shippedOptions,
      arriveLabel,
      arrivedOptions,
      seizeLabel,
      seizedOptions,
      estimateLabel,
      estimatedDate,
      isShipped,
      isArrived,
      isSeized,
      handleChange,
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
                onClick={() => handleChange('isShipped', option.flag)}
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
                onClick={() => handleChange('isArrived', option.flag)}
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
                onClick={() => handleChange('isSeized', option.flag)}
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