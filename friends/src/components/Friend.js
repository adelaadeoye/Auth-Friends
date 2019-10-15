import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";


const   Friend=(props)=>
{
    console.log("fr",props)
    return(
        <Col sm="6">
          <Card body>
            <CardTitle>Name: {props.friend.name}</CardTitle>
            <CardText>
              Email: {props.friend.email}
            </CardText>
            <CardText>
              age: {props.friend.age}
            </CardText>
            <Button>Delete</Button>
          </Card>
        </Col>

    )
}
export default Friend;