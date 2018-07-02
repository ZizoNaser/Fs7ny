import React from 'react';
import './../css/style.css';

const Image = (props) => {
    return (
        <figure className = "gallery__item">
          <img src = {props.src} className = 'gallery__photo' alt = {props.alt}/>
        </figure>
    )
}

export default Image;