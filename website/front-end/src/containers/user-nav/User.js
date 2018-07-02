import React, { Component } from 'react';
import Notifications from './notifications';
import axios from 'axios';
import '../../css/style.css';

class User extends Component {
    state = {
        // messages: 0,
        // notifications: 0,
        userData: null
    }
    // handleNewNotifications = (type) => {
    //     this.setState({
    //         messages: this.count.value,
    //         notifications: this.num.value,
    //     })
    // }

    componentDidMount() {
        axios.get('') //will add user id too
            .then(response => {
                this.setState({ userData: response.data })
            })
    }

    render() {
        const userData = this.state.userData;
        return (
            <nav className='user-nav'>
                <Notifications icon='icon-bookmark'> {userData.notifications}</Notifications>
                <Notifications icon='icon-chat'> {userData.messages}</Notifications>
                <div className='user-nav__user'>
                    <img src={userData.userImage} alt="User photo" className='user-nav__user-photo' />
                    <span className='user-nav__user-name'>{userData.name}</span>
                </div>
            </nav>
        )
    }
}

export default User;