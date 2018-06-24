import React from 'react';
import Item from './list-item';
import './../../css/style.css';


const Items = () => {
    return(
        <ul className = 'side-nav'>
           <Item link = '/' icon = 'icon-home' >Hotel</Item>
           <Item link = '/flight' icon = 'icon-aircraft-take-off'>Flight</Item>
           <Item link = '/car-rental' icon = 'icon-key'>Car rental</Item>
           <Item link = '/tours' icon = 'icon-map'>Tours</Item>
        </ul>
    );
}

export default Items;