import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { List, } from 'semantic-ui-react';

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, })
      })
      .catch( err =>{
        console.log(err.response);
      })
  }

  renderDepartments = () => {
    return this.state.departments.map( d => (
      <List.Item>
        <Link to={`/departments/${d.id}`}>
        <List.Header as="a"><h2>{d.name}</h2></List.Header>
        </Link>
        <List.Description>{d.description}</List.Description>
      </List.Item>
      
    ))
  }

  render() {
    return(
      <div>
      <List relaxed="very" style={{ paddingTop: "10px" }} divided verticalAlign='middle'>
        { this.renderDepartments() }
      </List>
      </div>
    )
  }
}

export default Departments;