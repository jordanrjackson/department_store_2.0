import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Departments from './components/Departments';
import Department from './components/Department';
import DepartmentForm from './components/DepartmentForm';
import ItemForm from './components/ItemForm';
import Items from './components/Items';
import About from './components/About';
import { Container, Header, Icon } from 'semantic-ui-react';

const App = () => (
  <Fragment>
    <Navbar />
    <Container style={{ paddingTop: "30 px"}}>
      <Header as='h1' icon textAlign="center">
        <Icon inverted color="green" name='money bill alternate' circular />
        Department Store 2.0
        <Header.Subheader>Items Available for Purchase</Header.Subheader>
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id/edit" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={Department} />
        <Route exact path="/departments/:department_id/items/new" component={ItemForm} />
        <Route exact path="/departments/:department_id/items/:id" component={Items} />
        <Route exact path="/departments/:department_id/items/:id/edit" component={ItemForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;