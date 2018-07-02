import React, { Component } from 'react';
import axios from 'axios';
import Img from './../components/galleryImage';
import Spinner from './../components/spinner/spinner';
import StarRating from './overview/stars';
import Location from './overview/location';
import Booking from './overview/booking';
import './../css/style.css';
import Book from './overview/booking';

class Hotel extends Component {
    state = {
        hotel: null,
    }

    componentDidMount() {
        axios.get('') //url + id
            .then(response => {
                this.setState({ hotel: response.data })
                // this.setState({loading: false})
            })
            .catch(error => {
                this.setState({ loading: false })
            })
        // console.log(this.props);
    }
    render() {

        let hotel = <Spinner />
        if (this.state.hotel) {
            // images = this.state.hotel.map(image => {
            //     return <Img src={image.url} />
            // })
            hotel = this.state.hotel;
        }
        // const images = hotel.hotelImages.map(image => {
        //     return <Img />
        // }) 

        return (
            <main className='hotel-view'>
                <div className="gallery">
                    {/* {images} */}
                </div>
                <div className='overview'>
                    <h1 className='overview__heading'> cairo{/*{hotel.name}*/} </h1>
                    <StarRating />
                    <Location location = 'cairo' /*{hotel.location}*//>
                    
                </div>
                <Booking availRooms = {0}/*hotel.availableRooms*/ />


            </main>
        );
    }
}
export default Hotel;