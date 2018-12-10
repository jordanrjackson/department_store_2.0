import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";

class Item extends React.Component {
  state = { item: {}, };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/items/${id}`)
      .then( res => {
        this.setState({ item: res.data, });
      })
  }

  handleDelete = () => {
    const { id, } = this.props.match.params;
    axios.delete(`/api/items/${id}`)
      .then( res => {
        this.props.history.push("/items");
      })
  }

  render() {
    const { id, name, description, price, department, } = this.state.item;

    return (
      <div>
        <h1>{ name }</h1>
        <h3>{ description }</h3>
        <h3>${ price }</h3>
        <h3>{ department }</h3>
        <br />
        <Link to={`/items/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default Product;