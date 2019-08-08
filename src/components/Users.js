import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        {this.props.users_count}
        <ul>
          {this.props.users.map(user=><li>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
   //debugger;
  return { users: state.users, users_count: state.users.length }
}

export default connect(mapStateToProps)(Users);
