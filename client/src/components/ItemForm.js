import React from "react";
import axios from "axios";

class ProductForm extends React.Component {
  state = { name: "", description: "", price: "", department: "", };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id)
      axios.get(`/api/products/${id}`)
        .then( res => {
          const { name, description, price, department, } = res.data;
          this.setState({ name, description, price, department, });
        })
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const product = { ...this.state };
    const { id } = this.props.match.params;
    if (id) {
      axios.put(`/api/products/${id}`, product )
        .then( res => {
          this.props.history.push(`/products/${id}`)
        })
    } else {
      axios.post("/api/products", product)
        .then( res => {
          this.props.history.push("/products")
        })
    }
  }

  render() {
    const { name, description, price, department, } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price"
          value={price}
          onChange={this.handleChange}
          required
        />
        <input
          name="department"
          placeholder="Department"
          value={department}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default ProductForm;