import React from 'react';
import Icon from 'react-use-svg';

const Location = (props) => (
    <div className = 'overview__location'>
    <svg className = 'overview__icon-location'>
    <Icon id = 'icon-location-pin'/>
    </svg>
    <button className = 'btn-inline'>{props.location}</button>
    </div>
)

export default Location;