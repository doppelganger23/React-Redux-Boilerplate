import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions'

class UserList extends Component {
    createListItems() {
        console.log('UserList#createListItems called');
        return this.props.users.map(
            user => <li onClick={() => this.props.selectUser(user)} key={user.id}>{user.first} {user.last}</li>
        );
    }

    render() {
        console.log('UserList#render called');
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps called');
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    console.log('matchDispatchToProps called');
    return bindActionCreators({selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);