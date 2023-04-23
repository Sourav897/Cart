import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Mobile Phone",
      price: 999,
      Qty: 1,
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    this.testing();
  }

  testing() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("done");
      }, 5000);
    });

    promise.then(() => {
      this.setState({ Qty: this.state.Qty + 10 });
      this.setState({ Qty: this.state.Qty + 10 });
      this.setState({ Qty: this.state.Qty + 10 });

      console.log("state", this.state);
    });
  }

  increaseQuantity = () => {
    // this.state.Qty += 1;
    // console.log("this", this.state);
    // setState form 1
    // this.setState({
    //   Qty: this.state.Qty + 1,
    // });

    // setState form 2 --- if previous state required used this
    this.setState((prevState) => {
      return {
        Qty: prevState.Qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    const { Qty } = this.state;

    if (Qty === 0) {
      return;
    }

    // setState form 2 --- if previous state required used this
    this.setState((prevState) => {
      return {
        Qty: prevState.Qty - 1,
      };
    });
  };

  render() {
    const { title, price, Qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="" />
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
              onClick={this.increaseQuantity}
            />
            <img
              src="https://img.icons8.com/ios/1x/minus.png"
              alt="decrease"
              className="action-icons"
              onClick={this.decreaseQuantity}
            />

            <img
              src="https://img.icons8.com/carbon-copy/1x/filled-trash.png"
              alt="delete"
              className="action-icons"
            />
          </div>
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
