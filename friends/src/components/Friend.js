import React , { useEffect, useState } from "react";
import { Card, Button, CardTitle, CardText,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Input } from "reactstrap";

  import { axiosWithAuth } from "../utils/axiosWithAuth";

const   Friend=(props)=>

{
  const [modal, setModal] = useState(false);
  const [friends, setFriends] = useState([{ name: "", email: "", age: "" }]);
  const [forms, setForms] = useState({ name: `${props.friend.name}`, email:  `${props.friend.email}`, age:  `${props.friend.age}`});

  const handleChanges = e => {
    e.preventDefault();
    setForms({ ...forms, [e.target.name]: e.target.value });
  };
  const saveEdit = id => {
    console.log("id to delete",id)
    axiosWithAuth()
      .put(`/api/friends/${id}`, forms)
      .then(res => {
        console.log(res);
        setFriends(res.data)
      })
      .catch(err => console.log(err.response));
  };

  const toggle = () => setModal(!modal);
    return(
        <Col sm="6">
          {console.log(props)}
          <Card body>
            <CardTitle>Name: {props.friend.name}</CardTitle>
            <CardText>
              Email: {props.friend.email}
            </CardText>
            <CardText>
              age: {props.friend.age}
            </CardText>
            <Button onClick={toggle} >Edit</Button><br></br>
            <Button onClick={()=>props.deleteFriend(props.friend.id)}>Delete</Button>
          </Card>
          <Modal className="" isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add Me To Friend List</ModalHeader>
          <Form className="formStyle" onSubmit={saveEdit(props.friend.id)}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="nameLabel">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="nameLabel"
                    placeholder="John Doe"
                    value={forms.name}
                    onChange={handleChanges}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="emailLabel">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="emailLabel"
                    placeholder="john.doe@xyz.com"
                    value={forms.email}
                    onChange={handleChanges}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="ageLabel">Age</Label>
                  <Input
                    type="number"
                    name="age"
                    id="ageLabel"
                    placeholder="32"
                    value={forms.age}
                    onChange={handleChanges}
                  />
                </FormGroup>
              </Col>
            </Row>
            <ModalFooter>
              <Button color="primary" onClick={toggle} type='submit'>
                Save{" "}
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
        </Col>
        
        
    )
}
export default Friend;