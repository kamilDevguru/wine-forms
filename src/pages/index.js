import React from "react"
import { Button, Form } from "react-bootstrap"
import { graphql } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product"
import CountryBox from "../components/countryBox"
import CityBox from "../components/cityBox"
import DateBox from "../components/dateBox"
import Service from "../components/service"
import Quote from "../components/quote"

const COUNTRY_KEY = 'country';
const CITY_KEY = 'city';

const getLocaleData = (props, key) => {
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const langKey = getUserLangKey(langs, defaultLangKey);

  return props.data[key].edges.filter(item => item.node.node_locale.includes(langKey));
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    const productData = getLocaleData(props, 'products')[0];
    const countryData = getLocaleData(props, 'selector').find(item => item.node.key === COUNTRY_KEY);
    const cityData = getLocaleData(props, 'selector').find(item => item.node.key === CITY_KEY);
    const optionData = getLocaleData(props, 'options')[0];
    const serviceData = getLocaleData(props, 'services')[0];
    const spinnerData = getLocaleData(props, 'spinner')[0];    
    const quoteData = getLocaleData(props, 'quotes')[0];

    this.state = {
      activeStep: 0,
      productData,
      countryData,
      cityData,
      optionData,
      serviceData,
      spinnerData,
      quoteData
    }
  }

  getTitle = () => {    
    const {
      activeStep,
      productData,
      countryData,
      cityData,
      optionData,
      serviceData,
      quoteData
    } = this.state;
    let title = '';

    if (activeStep === 0) {
      title = productData.node.label;
    } else if (activeStep === 1) {
      title = countryData.node.label;
    } else if (activeStep === 2) {
      title = cityData.node.label;
    } else if (activeStep === 3) {
      title = optionData.node.label;
    } else if (activeStep === 4) {
      title = serviceData.node.label;
    } else if (activeStep === 5) {
      title = quoteData.node.label;
    } 

    return title;
  }

  getContent = () => {   
    const {
      activeStep,
      productData,
      countryData,
      cityData,
      optionData,
      serviceData,
      quoteData
    } = this.state;
    let content = <div />;
    console.log('this.state :', this.state);

    if (activeStep === 0) {
      content = <Product data={productData.node.productList} />
    } else if (activeStep === 1) {
      content = (<CountryBox
        inputLabel={countryData.node.inputBoxLabel}
        placeholder={countryData.node.placeholder}
        countries={countryData.node.countries}
      />)
    } else if (activeStep === 2) {
      content = (<CityBox
        inputLabel={cityData.node.inputBoxLabel}
        placeholder={cityData.node.placeholder}
        cities={cityData.node.countries}
      />)
    } else if (activeStep === 3) {
      content = (<DateBox
        shipLabel={optionData.node.shipLabel}
        shippedOptions={optionData.node.shippedOptions}
        arriveLabel={optionData.node.arriveLabel}
        arrivedOptions={optionData.node.arrivedOptions}
        seizeLabel={optionData.node.seizeLabel}
        seizedOptions={optionData.node.seizedOptions}
        estimateLabel={optionData.node.estimateLabel}
        estimatedDate={optionData.node.estimatedDate}
      />)
    } else if (activeStep === 4) {
      content = <Service data={serviceData} />
    } else if (activeStep === 5) {
      content = <Quote data={quoteData} />
    } 

    return content;
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
    return (
      <Layout pageInfo={{ pageName: "index" }}>
        <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <div>
          <h3 className="index__title">
            {this.getTitle()}
          </h3>
        </div>
        <Form>
          <div className="index__content">
            {this.getContent()}
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
    site {
      siteMetadata{
        languages {
          defaultLangKey
          langs
        }
      }
    }

    products: allContentfulProductPage {
      edges {
        node {
          label
          node_locale
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
          node_locale
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
          label
          node_locale
          arriveLabel
          arrivedOptions {
            flag
            label
          }
          estimateLabel
          estimatedDate(formatString: "dddd, Do MMMM YYYY")
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
          node_locale
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
          node_locale
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
          node_locale
          note
        }
      }
    }
  }
`