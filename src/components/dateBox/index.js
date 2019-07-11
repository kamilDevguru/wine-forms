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
    this.setState({ [key]: value });
  }

  render() {
    const {
      isShipped,
      isArrived,
      isSeized,
    } = this.state;

    return (
      <>
        <Form.Group className="date__group" controlId="formShipped">
          <Form.Label className="date__label">
            Have your goods already been shipped?
          </Form.Label>
          <Row className="data__row">
            <Col
              sm={4}
              className={
                classNames("date__option", { "active": !isShipped })
              }
              onClick={() => this.handleClick('isShipped', false)}
            >
              <p>
                No
              </p>
            </Col>
            <Col
              sm={4}
              className={
                classNames("date__option", { "active": isShipped })
              }
              onClick={() => this.handleClick('isShipped', true)}
            >
              <p>
                Yes
              </p>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="date__group" controlId="formArrived">
          <Form.Label className="date__label">
            Have your goods arrived at customs?
          </Form.Label>
          <Row className="data__row">
            <Col
              sm={4}
              className={
                classNames("date__option", { "active": !isArrived })
              }
              onClick={() => this.handleClick('isArrived', false)}
            >
              <p>
                No
              </p>
            </Col>
            <Col
              sm={4}
              className={
                classNames("date__option", { "active": isArrived })
              }
              onClick={() => this.handleClick('isArrived', true)}
            >
              <p>
                Yes
              </p>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="date__group" controlId="formDate">
          <Form.Label className="date__label">
            Estimated date of arrival
          </Form.Label>
          <Row className="data__row">
            <Col
              sm={12}
              className="date__option"
            >
              <p>
                Friday, 15 July 2019
              </p>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="date__group" controlId="formSeized">
          <Form.Label className="date__label">
            Has customs seized your goals?
          </Form.Label>
          <Row className="data__row">
            <Col
              sm={12}
              className={
                classNames("date__option", { "active": !isSeized })
              }
              onClick={() => this.handleClick('isSeized', false)}
            >
              <p>
                No, my goods are fine.
              </p>
            </Col>
            <Col
              sm={12}
              className={
                classNames("date__option", { "active": isSeized })
              }
              onClick={() => this.handleClick('isSeized', true)}
            >
              <p>
                Yes, customs has seized my goods. Help!
              </p>
            </Col>
          </Row>
        </Form.Group>
      </>
    )
  }
}

export default DateBox;