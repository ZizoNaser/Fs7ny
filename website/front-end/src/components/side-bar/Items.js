import React from 'react';
import Item from './list-item';
import './../../css/style.css';
import {NavLink} from 'react-router-dom';


const Items = () => {
    return(
        <ul className = 'side-nav'>
           <Item link = '/' exact = {true} icon = 'icon-home' >Hotel</Item>
           <Item link = '/flight' exact = {false} icon = 'icon-aircraft-take-off'>Flight</Item>
           <Item link = '/car-rental' exact = {false} icon = 'icon-key'>Car rental</Item>
           <Item link = '/tours' exact = {false} icon = 'icon-map'>Tours</Item>
        </ul>
    );
}

export default Items;