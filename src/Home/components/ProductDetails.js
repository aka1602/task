import React from "react";
import styles from "./css/ProductDetails.module.css";
import Icon from "../../General/components/Icon";
function ProductDetails(props) {
  const urlPath = process.env.PUBLIC_URL;
  return (
    <div className={styles.base}>
      <div
        className={styles.backIcon}
        onClick={() => props.showProductsComponent()}
      >
        <Icon image={`${urlPath}/assets/Images/close.svg`} size={50} />
      </div>
      <div className={styles.productImageContent}>
        <div className={styles.productTitle}>{props.title}</div>
        <div className={styles.productIcon}>
          <Icon image={`${urlPath}/assets/Images/${props.image}`} size={100} />
        </div>
      </div>
      <div className={styles.productDescription}>{props.description}</div>
    </div>
  );
}

export default ProductDetails;
