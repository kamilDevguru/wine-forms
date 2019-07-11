import React from "react"
import classNames from "classnames"

import "./style.scss";

const PRODUCTS = [
  'car',
  'bear',
  'shoes',
  'shirt',
];

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: ['car'],
    };
  }

  handleClick = (product) => {
    const { selectedProducts } = this.state;

    if (selectedProducts.includes(product)) {
      this.setState({
        selectedProducts: selectedProducts.filter(p => p !== product),
      });
    } else {
      this.setState({
        selectedProducts: [...selectedProducts, product],
      });
    }
  }

  render() {
    const { selectedProducts } = this.state;
  
    return (
      <div className="product__container">
        {PRODUCTS.map(product => (
          <div
            className={
              classNames("product__item", {"active": selectedProducts.includes(product)})
            }
            onClick={() => this.handleClick(product)}
          />
        ))}
      </div>
    );
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Product;
