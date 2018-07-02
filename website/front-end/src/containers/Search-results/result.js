import React from 'react';
import Icon from 'react-use-svg';
import '../../css/style.css';

const Result = (props) => (
    <div className='result'>
        <img src={props.img} alt="" className="result__img" />
        <svg className="result__type">
            <Icon id="icon-home" />
        </svg>
        <h5 className="result__name">{props.name}</h5>
        <div className="result__location">
            <svg >
                <Icon id="icon-map-pin" />
            </svg>
            <p>{props.location}</p>
        </div>
        <div className="result__location">
            <svg >
                <Icon id="icon-map-pin" />
            </svg>
            <p>{props.location}</p>
        </div >
        <div className="result__price">
            <svg >
                <Icon id="icon-credit" />
            </svg>
            <p>{props.price}</p>
        </div >
        <div className="result__review">
            <svg >
                <Icon href="icon-star" />
            </svg>
            <p>{props.rate}</p>
        </div >
        <button className="result__btn" onClick = {props.clicked}>Review</button>
    </div>
)

export default Result;