import React, { Component } from 'react';
import Result from './result';
import '../../css/style.css';
import Photo from '../../img/hotel-1.jpg';
import axios from 'axios';
class Hotels extends Component {
    state = {
        hotels: [],
        loading: false,
    }

    componentDidMount() {
    // i need to include start,end dates and location
    // actually i think we should know location only
    
        this.setState({ loading: true })
        axios.get('')
            .then(response => {
                // this.setState({loading:false})
                this.setState({ hotels: response.data })
            })
    }

    render() {
        const hotels = this.state.hotels.map(hotel => {
            return <Result />
                // img={Photo}
                // name='Lorem Ipsm Dollar Sigma'
                // location='USA'
                // price='1000'
                // rate='2.7' />
        })
        return (
            <main className='results-view'>
               {hotels}
            </main>

        )
    }
}

export default Hotels;