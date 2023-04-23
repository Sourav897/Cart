import React from "react";

class CartItem extends React.Component {
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F674010%2Fpexels-photo-674010.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&tbnid=fY9reP86COngJM&vet=12ahUKEwjIvtKEicD-AhWs9nMBHWtHCKgQMygFegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&docid=B51x0PBR9KNzvM&w=500&h=667&itg=1&q=images&ved=2ahUKEwjIvtKEicD-AhWs9nMBHWtHCKgQMygFegUIARDpAQ"
            style={styles.image}
            alt=""
          />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>Phone</div>
          <div style={{ color: "#777" }}>Rs 999</div>
          <div style={{ color: "#777" }}>Qty: 1</div>
          <div className="cart-item-actions">{/* Buttons */}</div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
