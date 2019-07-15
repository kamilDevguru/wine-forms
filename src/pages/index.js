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
import Spinner from "../components/spinner"

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
    const productData = getLocaleData(props, 'products')[0].node;
    const countryData = getLocaleData(props, 'selector').find(item => item.node.key === COUNTRY_KEY).node;
    const cityData = getLocaleData(props, 'selector').find(item => item.node.key === CITY_KEY).node;
    const optionData = getLocaleData(props, 'options')[0].node;
    const serviceData = getLocaleData(props, 'services')[0].node;
    const spinnerData = getLocaleData(props, 'spinner')[0].node;    
    const quoteData = getLocaleData(props, 'quotes')[0].node;

    this.state = {
      activeStep: 0,
      productData,
      countryData,
      cityData,
      optionData,
      serviceData,
      spinnerData,
      quoteData,
      isSpinning: false,
      selectedProducts: [],
      originCountry: '',
      pickUpCity: '',
      isShipped: false,
      isArrived: false,
      isSeized: false,
      selectedServices: [],
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
      quoteData,
      spinnerData,
      isSpinning,
    } = this.state;
    let title = '';

    if (isSpinning) return spinnerData.label;

    if (activeStep === 0) {
      title = productData.label;
    } else if (activeStep === 1) {
      title = countryData.label;
    } else if (activeStep === 2) {
      title = cityData.label;
    } else if (activeStep === 3) {
      title = optionData.label;
    } else if (activeStep === 4) {
      title = serviceData.label;
    } else if (activeStep === 5) {
      title = quoteData.label;
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
      quoteData,
      spinnerData,
      isSpinning,
      selectedProducts,
      originCountry,
      pickUpCity,
      isShipped,
      isArrived,
      isSeized,
      selectedServices,
    } = this.state;

    if (isSpinning) return <Spinner note={spinnerData.note} />
    let content = <div />;
    console.log('this.state :', this.state);

    if (activeStep === 0) {
      content = (<Product
        data={productData.productList}
        selectedProducts={selectedProducts}
        handleSelect={this.handleProductsChange}
      />)
    } else if (activeStep === 1) {
      content = (<CountryBox
        inputLabel={countryData.inputBoxLabel}
        placeholder={countryData.placeholder}
        countries={countryData.countries}
        originCountry={originCountry}
        handleSelect={originCountry => this.setState({originCountry})}
      />)
    } else if (activeStep === 2) {
      content = (<CityBox
        inputLabel={cityData.inputBoxLabel}
        placeholder={cityData.placeholder}
        cities={cityData.countries}
        pickUpCity={pickUpCity}
        handleSelect={pickUpCity => this.setState({pickUpCity})}
      />)
    } else if (activeStep === 3) {
      content = (<DateBox
        shipLabel={optionData.shipLabel}
        shippedOptions={optionData.shippedOptions}
        arriveLabel={optionData.arriveLabel}
        arrivedOptions={optionData.arrivedOptions}
        seizeLabel={optionData.seizeLabel}
        seizedOptions={optionData.seizedOptions}
        estimateLabel={optionData.estimateLabel}
        estimatedDate={optionData.estimatedDate}
        isShipped={isShipped}
        isArrived={isArrived}
        isSeized={isSeized}
        handleChange={(key, value) => {this.setState({[key]: value})}}
      />)
    } else if (activeStep === 4) {
      content = (<Service
        services={serviceData.services}
        selectedServices={selectedServices}
        handleSelect={(arr) => this.setState({selectedServices: arr})}
      />)
    } else if (activeStep === 5) {
      content = (<Quote
        quotes={quoteData.quotes}
      />)
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

  handleProductsChange = (products) => {
    this.setState({
      selectedProducts: products,
    });
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
        <Form
          name="wine-form"
          method="post"
          data-netlify="true"
          data-neltify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="wine-form" />
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
            activeIcon {
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