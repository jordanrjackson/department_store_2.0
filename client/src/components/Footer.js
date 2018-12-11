import React from 'react';
import { Container, Icon } from 'semantic-ui-react';

const Footer = () => (
  <Container textAlign="center">
    <br />
    <br />
    <Icon circular inverted color="black" size="large" name="dollar" />
    <Icon circular color="black" size="large" name="dollar" />
    <Icon circular inverted color="black" size="large" name="dollar" />
    <p>This is a footer.</p>
  </Container>
);

export default Footer;