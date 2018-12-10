import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";

class Products extends React.Component {
  state = { products: [], };

  componentDidMount() {
    axios.get("/api/products")
      .then( res => {
        this.setState({ products: res.data, });
      })
      .catch( err => {
        console.log(err.response);
      })
  }

  renderProducts = () => {
    return this.state.products.map( p => (
      <Link to={`/products/${p.id}`}>
        <li>{ p.name }</li>
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/products/new">
          <button>New Product</button>
        </Link>
        <ul>
          { this.renderProducts() }
        </ul>
      </div>
    )
  }
}

export default Products;