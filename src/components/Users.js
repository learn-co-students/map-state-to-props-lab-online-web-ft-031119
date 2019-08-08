import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
  	let users = this.props.users.map((user, index) => {
  	return <li key={index}>{user.username}</li>
  	})
    return (
      <div>
      	<h1>Total {this.props.userCount} users</h1>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
	return {
		users: state.users,
		userCount: state.users.length
	}
}

export default connect(mapStateToProps)(Users);
