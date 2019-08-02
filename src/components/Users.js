import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        Total Number of Users: {this.props.userCount}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
return {
  users: state.users,
  userCount: state.users.length
}
}

//add mapStateToProps here

export default connect(mapStateToProps) (Users)
