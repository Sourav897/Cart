import React from "react";
// import CartItem from "./CartItem.js";
import Cart from "./Cart.js";
import Navbar from "./Navbar.js";

class App extends React.Component {
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

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); //[{}] this will return an array in which the filter or deleted id is not present
    this.setState({
      products: items,
    });
  };

  handleIncreaseQuantity = (product) => {
    // console.log("Hey Please Inc the Quantity");
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].Qty += 1;
    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    // console.log("Hey Please Dec the Quantity");
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].Qty === 0) {
      return; // If Qty is already 0, return from the function
    }

    products[index].Qty -= 1;
    this.setState({
      products: products,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.Qty;
    });

    return count;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
