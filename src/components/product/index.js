import React from "react"
import classNames from "classnames"

import "./style.scss";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
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
    const { data } = this.props;
    const { selectedProducts } = this.state;
  
    return (
      <div className="product__container">
        {data.map(({image, type}) => (
          <div
            key={type}
            className={
              classNames("product__item", {"active": selectedProducts.includes(type)})
            }
            onClick={() => this.handleClick(type)}
          >
            <img src={image.resolutions.src} alt="product" />
          </div>
        ))}
      </div>
    );
  }
}

export default Product;