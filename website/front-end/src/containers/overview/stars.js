import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';
import '../../css/style.css';

class Star extends Component {
    state = {
        rating: 0,
    }

    starClickedHandler(newRate, oldRate, name) {
        this.setState({ rating: newRate })
    }


    render() {
        const rating = this.state
        return (
            <div className='overview__stars'>
                <StarRating
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.starClickedHandler.bind(this)} />
            </div>
        )
    }
}

export default StarRating;