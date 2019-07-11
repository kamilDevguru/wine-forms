import React from "react"
import { Button, Form } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product"
import CountryBox from "../components/CountryBox"
import CityBox from "../components/CityBox"
import DateBox from "../components/DateBox"
import Service from "../components/Service"
// import Quote from "../components/Quote"

const TITLES = [
  'What type of product are you importing?',
  'Which country are you importing from?',
  'Where is your shipment going?',
  'When is your shipment coming?',
  'What services do you need?',
  // 'One moment please...',
  'Your quote is ready'
];

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    }
  }

  handleContinue = () => {
    if (this.state.activeStep === 5) {
      return;
    }
  
    this.setState(({ activeStep }) => ({
      activeStep: activeStep + 1,
    }));
  }

  render() {
    const { activeStep } = this.state;

    return (
      <Layout pageInfo={{ pageName: "index" }}>
        <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <div>
          <h3 className="index__title">
            {TITLES[activeStep]}
          </h3>
        </div>
        <Form>
          <div className="index__content">
            {activeStep === 0 && (
              <Product />
            )}

            {activeStep === 1 && (
              <CountryBox />
            )}
    
            {activeStep === 2 && (
              <CityBox />
            )}

            {activeStep === 3 && (
              <DateBox />
            )}

            {activeStep === 4 && (
              <Service />
            )}
{/*}           
            {activeStep === 5 && (
              <Quote />
            )} */}
          </div>
          <Button
            className="index__button"
            variant="primary"
            onClick={this.handleContinue}
          >
            Continue
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default IndexPage
