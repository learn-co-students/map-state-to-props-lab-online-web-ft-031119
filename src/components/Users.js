import React, { Component } from 'react';
import { connect } from "react-redux";

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        Users:{this.props.userCount}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {userCount: state.users.length,
          users: state.users        
  }
}

export default connect(mapStateToProps)(Users)
