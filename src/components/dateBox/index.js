import React from "react"
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

  render() {
    return (
      <>
        <Form.Group className="date__group" controlId="formShipped">
          <Form.Label className="date__label">
            Have your goods already been shipped?
          </Form.Label>
          <Row className="data__row">
            <Col
              sm={4}
              className="date__option active"
            >
              <p>
                No
              </p>
            </Col>
            <Col
              sm={4}
              className="date__option"
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
              className="date__option active"
            >
              <p>
                No
              </p>
            </Col>
            <Col
              sm={4}
              className="date__option"
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
              className="date__option active"
            >
              <p>
                No, my goods are fine.
              </p>
            </Col>
            <Col
              sm={12}
              className="date__option"
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