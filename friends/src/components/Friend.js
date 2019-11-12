import React from "react";
import { Card, Button, CardTitle, CardText, Col } from "reactstrap";


const   Friend=(props)=>
{
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
            <Button onClick={()=>props.deleteFriend(props.friend.id)}>Delete</Button>
          </Card>
        </Col>

    )
}
export default Friend;