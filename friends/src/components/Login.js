import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="emailLabel">Email</Label>
            <Input type="email" name="email" id="emailLabel" placeholder="john.doe@xyz.com" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="passwordLabel">Password</Label>
            <Input type="password" name="password" id="passwordLabel" placeholder="********" />
          </FormGroup>
        </Col>
      </Row>
      <Button>Sign in</Button>
    </Form>
  );
}

export default Login;