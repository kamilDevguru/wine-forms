import React from "react"
import { Button, Form } from "react-bootstrap"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product"
import CountryBox from "../components/countryBox"
import CityBox from "../components/cityBox"
import DateBox from "../components/dateBox"
import Service from "../components/service"
import Quote from "../components/quote"

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
    const { data } = this.props;
    console.log('data :', data);

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

            {activeStep === 5 && (
              <Quote />
            )}
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

export const query = graphql`
  query {
    products: allContentfulProductPage {
      edges {
        node {
          label
          productList {
            image {
              resolutions {
                src
              }
            }
            type
          }
        }
      }
    }

    selector: allContentfulSelectingPage {
      edges {
        node {
          key
          label
          countries {
            ... on ContentfulCountry {
              name
              key
            }
            ... on ContentfulCity {
              name
              key
            }
          }
          placeholder
          inputBoxLabel
        }
      }
    }

    options: allContentfulOptionPage {
      edges {
        node {
          arriveLabel
          arrivedOptions {
            flag
            label
          }
          estimateLabel
          estimatedDate(formatString: "dddd, Do MMMM YYYY")
          label
          seizeLabel
          seizedOptions {
            flag
            label
          }
          shipLabel
          shippedOptions {
            flag
            label
          }
        }
      }
    }

    services: allContentfulServicePage {
      edges {
        node {
          label
          services {
            title
            icon {
              resolutions {
                src
              }
            }
          }
        }
      }
    }

    quotes: 
    allContentfulQuotePage {
      edges {
        node {
          label
          quotes {
            label
            charge
          }
        }
      }
    }

    spinner: 
    allContentfulSpinnerPage {
      edges {
        node {
          label
          note
        }
      }
    }
  }
`