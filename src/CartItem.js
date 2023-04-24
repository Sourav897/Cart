import React from "react";

const CartItem = (props) => {
  const { title, price, Qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} alt="" src={product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price} </div>
        <div style={{ color: "#777" }}>Qty: {Qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            src="https://img.icons8.com/ios/1x/plus.png"
            alt="increase"
            className="action-icons"
            // onClick={this.increaseQuantity}
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            src="https://img.icons8.com/ios/1x/minus.png"
            alt="decrease"
            className="action-icons"
            // onClick={this.decreaseQuantity}
            onClick={() => onDecreaseQuantity(product)}
          />

          <img
            src="https://img.icons8.com/carbon-copy/1x/filled-trash.png"
            alt="delete"
            className="action-icons"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
