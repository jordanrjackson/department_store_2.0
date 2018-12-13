import React from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";

class DepartmentForm extends React.Component {
  state = { name: "", description: "", };

  componentDidMount() {
    const { id, } = this.props.match.params;
    if(id)
      axios.get(`/api/departments/${id}`)
        .then( res => {
          const { name, description, } = res.data;
          this.setState({ name, description, });
        })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state };
    const { id } = this.props.match.params;
    if (id) {
      axios.put(`/api/departments/${id}`, department)
        .then( res => {
          this.props.history.push(`/departments/${id}`)
        })
    } else {
      axios.post("/api/departments", department)
        .then( res => {
          this.props.history.push("/departments")
        })
    }
  }

  render() {
    const { name, description, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid
          required
          name="name"
          placeholder="Name"
          label="Name"
          value={name}
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          required
          name="description"
          placeholder="Description"
          label="Description"
          value={description}
          onChange={this.handleChange}
        />
        <Form.Button content='Submit' color="green" />
      </Form>
    )
  }
}

export default DepartmentForm;