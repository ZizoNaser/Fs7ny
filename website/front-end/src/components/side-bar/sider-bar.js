import React from 'react';
import Items from './Items';
import './../../css/style.css';

const SideBar = () => {
    return(
        <nav className = 'sidebar'>
           <Items/>
           <div className = 'legal'>
               &copy; 2017 by trillo. All rights reserved.
           </div>
        </nav>
    )
}

export default SideBar;