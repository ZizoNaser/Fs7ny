import React from 'react';
import Icon from 'react-svg';

const Notifications = (props) => {

    return (
        <div className='user-nav__icon-box' >
            <svg className='user-nav__icon'>
                <Icon id={props.icon} />
            </svg>
            <span className='user-nav__notification'>{props.children}</span>
        </div>
    );

}