import React from "react"
import classNames from "classnames"

import "./style.scss";

class Product extends React.Component {
  handleClick = (product) => {
    const { selectedProducts } = this.props;
    const newProducts = selectedProducts.includes(product)
      ? selectedProducts.filter(p => p !== product)
      : [...selectedProducts, product];

    this.props.handleSelect(newProducts);
  }

  render() {
    const { data } = this.props;
    const { selectedProducts } = this.props;
  
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