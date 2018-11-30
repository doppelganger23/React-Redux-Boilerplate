import React from 'react';
import UserList from '../containers/User-list';
import UserDetails from '../containers/User-details';
require('../../scss/style.scss');

const App = () => {
    console.log('App component called');
    return (
        <div>
            <h2>Username List:</h2>
            <UserList/>
            <hr/>
            <h2>User Details:</h2>
            <UserDetails/>
        </div>
    );
};

export default App;