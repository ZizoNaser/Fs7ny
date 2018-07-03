import React, { Component } from 'react';
import Result from './result';
import '../../css/style.css';
import Photo from '../../img/hotel-1.jpg';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Hotel from '../Hotel';

class Hotels extends Component {
    state = {
        hotels: [],
        loading: false,
    }

    componentDidMount() {
    // i need to include start,end dates and location
    // actually i think we should know location only
    
        // this.setState({ loading: true })

       //TODO: add the api url with location as parameter
        axios.get('')
            .then(response => {
                // this.setState({loading:false})
                this.setState({ hotels: response.data })
            })
    }

    onClickHandler=()=>{
        this.props.history.replace(this.props.match.url+'/hotel');
    }

    render() {

        // const hotels = this.state.hotels.map(hotel => { 
        //     //TODO: add required props from the db (ex. price = hotel.roomPrice)
        //     //note that location is not saved in the DB!

        //     // return <Result 
        //     //     img={Photo}
        //     //     name='Lorem Ipsm Dollar Sigma'
        //     //     location='USA'
        //     //     price='1000'
        //     //     rate='2.7' 
        //     //     clicked = {this.onClickHandler}/>
        // })
        return (
            <main className='results-view'>
            <Result 
                img={Photo}
                name='Lorem Ipsm Dollar Sigma'
                location='USA'
                price='1000'
                rate='2.7' 
                clicked = {this.onClickHandler}/>
               
            </main>

        )
    }
}

export default Hotels;