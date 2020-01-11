import React, { Component } from "react";
import styles from "./css/HomeComponent.module.css";
import Header from "./Header";
import Icon from "../../General/components/Icon";
import ProductDetails from "./ProductDetails";
import ProductForm from "./ProductForm";
const productContent = [
  {
    title: "Product 1",
    image: "product.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "Product 2",
    image: "product.svg",
    description:
      "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content."
  },
  {
    title: "Product 3",
    image: "product.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      showProducts: false,
      showProductForm: false
    };
  }
  showProductBoxContent = item => {
    this.setState({
      products: item,
      showProducts: true
    });
  };
  showProductsComponent = () => {
    this.setState({
      showProducts: !this.state.showProducts
    });
  };
  howProductForm = () => {
    this.setState({
      showProductForm: !this.state.showProductForm
    });
  };
  render() {
    const urlPath = process.env.PUBLIC_URL;
    return (
      <div className={styles.base}>
        <Header />

        <div className={styles.productWrapper}>
          <div className={styles.OurProductsHeading}> Our Products</div>
          {productContent.map((item, id) => {
            return (
              <div
                className={styles.productWrapper}
                onClick={() => this.showProductBoxContent(item)}
                key={id}
              >
                <div className={styles.productContentBox}>
                  <div className={styles.productTitle}> {item.title}</div>
                  <div className={styles.productImage}>
                    {" "}
                    <Icon
                      image={`${urlPath}/assets/Images/${item.image}`}
                      size={80}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {this.state.showProducts && this.state.products.description && (
          <ProductDetails
            title={this.state.products.title}
            image={this.state.products.image}
            description={this.state.products.description}
            showProductsComponent={this.showProductsComponent}
          />
        )}
        <div
          className={styles.productForm}
          onClick={() => {
            this.howProductForm();
          }}
        >
          ProductForm
        </div>
        {this.state.showProductForm && (
          <ProductForm onClick={this.howProductForm} />
        )}
      </div>
    );
  }
}

export default HomeComponent;
