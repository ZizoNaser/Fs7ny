import React from 'react';
import Icon from 'react-use-svg';
import './../../css/style.css';
import {NavLink} from 'react-router-dom';

const Item = (props) => {
    return(
        <li className = 'side-nav__item'>
            <NavLink to = {props.link} exact= {props.exact}
            className = 'side-nav__link'
            activeStyle = {{
                backgroundColor: '#FF3366'
            }}> 
              <svg className = 'side-nav__icon'> 
                <Icon id = {props.icon}/>
              </svg>
              <span>{props.children}</span>
            </NavLink>
        </li>    
    );
}

export default Item;