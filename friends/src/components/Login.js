import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {axiosWithAuth} from '../utils/axiosWithAuth'
class  Login extends React.Component  {
  state= {
    credentials:{
      username:'',
      password:''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        // console.log("history",this.props.history)
        // this.props.history.push('/friendPage',this.state);
      })
      .catch(err => console.log(err.response));
  };
render(){
  return (
    <Form onSubmit={this.login}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="emailLabel">Username</Label>
            <Input type="text" name="username" id="emailLabel" placeholder="john.doe" value={this.state.credentials.username} onChange={this.handleChange} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="passwordLabel">Password</Label>
            <Input type="password" name="password" id="passwordLabel" placeholder="********"  value={this.state.credentials.password}
            onChange={this.handleChange}/>
          </FormGroup>
        </Col>
      </Row>
      <Button>Sign in</Button>
    </Form>
  );
}}

export default Login;