import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { List, Button, Container, Header, Icon, Divider, } from 'semantic-ui-react';

class Department extends React.Component {
  state = { department: [], items: [], }

  componentDidMount() {
    const {id } = this.props.match.params;
    axios.all([axios.get(`departments/${id}`),
    axios.get(`/departments/${id}/items`)])
      .then(axios.spread((department, items,) => {
        this.setState({ department: department.data, items: items.data});
      }))
  }

  handleDelete = () => {
    const { id } = this.props.match.params;
    axios.delete(`/departments/${id}`)
      .then( res => {
        this.props.history.push("/departments")
      })
  }

  renderItems = () => {
    const { department, items } = this.state;
    return this.state.items.map( i => (
      <List.Item>
        <Link to={`/departments/${department.id}/items/${i.id}`} >
          <List.Header as="a"><h3>{i.name}</h3></List.Header>
        </Link>
      </List.Item>
    ))
  }

  render() {
    const { department, items } = this.state;
    return(
      <Container>
        <Button.Group floated="right">
          <Link to={`/departments/${department.id}/edit`}><Button icon color="blue"><Icon name='edit' /></Button></Link>
          <Button icon color="red" onClick={this.handleDelete}><Icon name='trash' /></Button>
        </Button.Group>
        <Header as="h2">{this.state.department.name}</Header>
        <Divider />
        <Link to={`/departments/${department.id}/items/new`}><Button color="green" size="tiny">New Item</Button></Link>
        <List relaxed="very" style={{ paddingTop: "10px" }} verticalAlign="middle">
          { this.renderItems() }
        </List>
      </Container>
    )
  }
}

export default Department;