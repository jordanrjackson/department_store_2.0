import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment, Icon } from 'semantic-ui-react';

class Item extends React.Component {
  state = { item: [], };

  componentDidMount() {
    const{ department_id, id } = this.props.match.params;
    axios.get(`/api/departments/${department_id}/items/${id}`)
      .then( res => {
        this.setState({ item: res.data, })
      })
  }

  handleDelete = () => {
    const { department_id, id } = this.props.match.params;
    axios.delete(`/api/departments/${department_id}/items/${id}`)
      .then( res => {
        this.props.history.push(`/api/departments/${department_id}`)
      })
  }

  render() {
    const { id, name, description, price, department_id } = this.state.item;
    return(
      <Container>
        <Segment.Group>
        <Segment clearing>
        <Header floated="right">
        <Button.Group>
        <Link to={`/departments/${department_id}/items/${id}/edit`}><Button color="blue">Edit</Button></Link>
        <Button color="red" onClick={this.handleDelete}>Delete</Button>
        </Button.Group>
        </Header>
        <Header as="h3" floated="left">{ name }</Header>
        </Segment>
        <Segment attached raised>
        <p style={{ fontWeight: "bolder", fontSize: "16px"}}>Price: ${price}</p>
        <p>{ description }</p>
        </Segment>
        </Segment.Group>
      </Container>
    )
  }
}

export default Item;