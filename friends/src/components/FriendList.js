import React from "react";
import {  Row } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from './Friend'
class FriendList extends React.Component {
  state = {
    friends: []
  };
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (<div>
      <h2>Friends List Card</h2>
      <Row>
        {this.state.friends.map(friend=>(
          <Friend key={friend.id} friend={friend}/>
        ))}
      </Row>
      </div>
    );
  }
}

export default FriendList;
