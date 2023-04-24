import React from "react";
import CartItem from "./CartItem.js";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Mobile Phone",
          price: 9999,
          Qty: 5,
          img: "",
          id: 1,
        },
        {
          title: "Watch",
          price: 999,
          Qty: 10,
          img: "",
          id: 2,
        },
        {
          title: "Laptop",
          price: 20000,
          Qty: 4,
          img: "",
          id: 3,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}
export default Cart;
