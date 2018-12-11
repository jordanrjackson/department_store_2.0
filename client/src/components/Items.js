import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";

class Items extends React.Component {
  state = { items: [], };

  componentDidMount() {
    axios.get("/items")
      .then( res => {
        this.setState({ items: res.data, });
      })
      .catch( err => {
        console.log(err.response);
      })
  }

  renderItems = () => {
    return this.state.items.map( p => (
      <Link to={`/items/${p.id}`}>
        <li>{ p.name }</li>
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/items/new">
          <button>New Item</button>
        </Link>
        <ul>
          { this.renderItems() }
        </ul>
      </div>
    )
  }
}

export default Items;