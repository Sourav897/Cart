import React from "react";
// import CartItem from "./CartItem.js";
import Cart from "./Cart.js";
import Navbar from "./Navbar.js";
// import * as firebase from "firebase/firestore";

// import { collection, getDocs } from "firebase/firestore";
import { db } from "./index.js";
import { collection, addDoc } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    db.collection("products")
      .orderBy("price", "desc")
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }

  handleDeleteProduct = (id) => {
    const docRef = db.collection("products").doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("Deleted sucessfully");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    const docRef = db.collection("products").doc(products[index].id);
    docRef
      .update({
        Qty: products[index].Qty + 1,
      })
      .then(() => {
        console.log("Document updated sucessfully");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  handleDecreaseQuantity = (product) => {
    // console.log("Hey Please Dec the Quantity");
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].Qty === 0) {
      return; // If Qty is already 0, return from the function
    }

    // products[index].Qty -= 1;
    // this.setState({
    //   products: products,
    // });

    const docRef = db.collection("products").doc(products[index].id);
    docRef
      .update({
        Qty: products[index].Qty - 1,
      })
      .then(() => {
        console.log("Document updated sucessfully");
      })
      .catch((error) => {
        console.log("Error", error);
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

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      return (cartTotal = cartTotal + product.Qty * product.price);
    });

    return cartTotal;
  };

  addProduct = () => {
    const newProduct = {
      title: "Laptop",
      price: 44999,
      img: "https://img.etimg.com/photo/msid-93619818/apple-laptops.jpg",
      Qty: 1,
    };

    const productsRef = collection(db, "products");
    addDoc(productsRef, newProduct)
      .then((docRef) => {
        console.log("Product added with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding product: ", error);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct}>Add Product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && (
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50vh",
            }}
          >
            Loading Products ...
          </h3>
        )}
        {!loading && (
          <div style={{ padding: 10, fontSize: 25 }}>
            Total: {this.getCartTotal()}
          </div>
        )}
      </div>
    );
  }
}

export default App;
