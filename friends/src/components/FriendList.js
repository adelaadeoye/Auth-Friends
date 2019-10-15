import React,{useEffect, useState} from "react";
import { Button, Row,Modal, ModalHeader, ModalBody, ModalFooter,Col, Form, FormGroup, Label, Input} from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from './Friend'



const FriendList =(props)=> {
  const [modal, setModal] = useState(false);
  const [friends, setFriends] = useState([{name:"", email:"",age:""}]);

useEffect(()=>{
  axiosWithAuth()
  .get("/api/friends")
  .then(res => {
    console.log(res.data);
    setFriends(res.data );
  })
  .catch(err => console.log(err.response));

},[])
  



const toggle = () => setModal(!modal);
      
  
    return (<div>
      <div>
      
      <Modal className="" isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Add Me To Friend List</ModalHeader>
        <Form className="formStyle" >
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="nameLabel">Name</Label>
            <Input type="text" name="name" id="nameLabel" placeholder="John Doe" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="emailLabel">Email</Label>
            <Input type="email" name="email" id="emailLabel" placeholder="john.doe@xyz.com" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="ageLabel">Age</Label>
            <Input type="number" name="age" id="ageLabel" placeholder="32" />
          </FormGroup>
        </Col>
      </Row>
      <ModalFooter>
          <Button color="primary" onClick={toggle}>Add </Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </Form>
        
      </Modal>
    </div>
      <h2>Friends List Card</h2>
      <Button color="danger" onClick={toggle}>Add Friend</Button>
      <Row>
        {friends.map(friend=>(
          <Friend key={friend.id} friend={friend}/>
        ))}
      </Row>
      </div>
    );
}

export default FriendList;
