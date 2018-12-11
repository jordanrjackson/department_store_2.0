import React from "react";
import axios from "axios";
import { Form, } from 'semantic-ui-react';

class ItemForm extends React.Component {
  state = { name: "", description: "", price: "", department: "", };

  componentDidMount() {
    const { department_id, id, } = this.props.match.params;
    if (id)
      axios.get(`/departments/${department_id}/items/${id}`)
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
    const item = { ...this.state };
    const { department_id, id, } = this.props.match.params;
    if (id) {
      axios.put(`/departments/${department_id}/items/${id}`, item)
        .then( res => {
          this.props.history.push(`/departments/${department_id}/items/${id}`)
        })
    } else {
      axios.post(`/departments/${department_id}/items`, item)
        .then( res => {
          this.props.history.push(`/departments/${department_id}`)
        })
    }
  }

  render() {
    const { name, description, price, department, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid
          name="name"
          placeholder="Item Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <Form.Input
          fluid
          name="price"
          placeholder="Item Price"
          value={price}
          onChange={this.handleChange}
          required
        />
        <Form.Input
          fluid
          name="description"
          placeholder="Item Description"
          value={price}
          onChange={this.handleChange}
          required
        />

        <Form.Button content='Submit' color="green" />
      </Form>
    )
  }
}

export default ItemForm;