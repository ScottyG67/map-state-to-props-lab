import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map(user=><li>{user.username}</li>)}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        <p>there are currently {this.props.users.length} users</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps =(state) => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
