import React, {Component} from 'react';
import Notifications from './notifications';

class User extends Component{
    state = {
        chat: 0,
        notifications: 0,
    }
    handleNewNotifications = (type) => {
        this.setState({
            chat: this.count.value,
            notifications: this.num.value,
        })
    }
    render(){
        return(
            <div> </div>
        )
    }  
}