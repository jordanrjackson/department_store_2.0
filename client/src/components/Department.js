import React from 'react';
import axios from 'axios';
import Item from './Item';
import { Link } from 'react-router-dom';
import { Button, Container, Icon, Divider, Card } from 'semantic-ui-react';

class Department extends React.Component {
  state = { department: [], items: [], }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.all([axios.get(`/api/departments/${id}`),
    axios.get(`/api/departments/${id}/items`)])
      .then(axios.spread((department, items,) => {
        this.setState({ department: department.data, items: items.data});
      }))
  }

  handleDelete = () => {
    const remove = window.confirm("Are you sure you want to delete this department?")
    const { id } = this.props.match.params;
    if (remove)
      axios.delete(`/api/departments/${id}`)
        .then( res => this.props.history.push("/departments"))
  }

  renderItems = () => {
    const { items } = this.state;
    const dept_id = this.state.department.id
    return items.map( i => (
      <Item key={i.id} {...i} remove={this.removeItem} dept_id={dept_id} />
    ))
  }

  removeItem = (id) => {
    const remove = window.confirm("Are you sure you want to delete this item?")
    if (remove)
      axios.delete(`/api/departments/${this.props.match.params.id}/items/${id}`)
      .then( res => {
        const items = this.state.items.filter( i => {
          if (i.id !== id)
            return i;
        })
        this.setState({ items, })
      })
  }

  render() {
    const { department: { id, name, description}, } = this.state;
    return(
      <Container>
        <Button.Group floated="right">
          <Link to={`/departments/${id}/edit`}><Button icon color="blue"><Icon name='edit' />Edit</Button></Link>
          <Button icon color="red" onClick={this.handleDelete}><Icon name='trash' />Delete</Button>
        </Button.Group>
        <Divider />
        <Link to={`/departments/${id}/items/new`}><Button icon color="green" size="tiny"><Icon name="add" />New Item</Button></Link>
        <br />
        <br />
        <Card.Group itemsPerRow={4}>
          { this.renderItems() }
        </Card.Group>
      </Container>
    )
  }
}

export default Department;