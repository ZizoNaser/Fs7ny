import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SideBar from './components/side-bar/sider-bar';
import './css/style.css';
import {Route, Switch} from 'react-router-dom';
import Hotel from './containers/Hotel';
import Tours from './containers/Tours';
import HotelSearch from './containers/Hotel-Form';
import FlightSearch from './containers/Flight-Form';
import Login from './containers/Log-in';
import Signup from './containers/signUpForm';
import Hotels from './containers/Search-results/hotel-results';
// import Hotel from './containers/Hotel';

class App extends Component {
  render() {
    return (
      <div className='container' >
        <Header />
        <div className='content'>
          <SideBar />
          
          <Route path = '/' exact component = {Hotel}/>
          <Switch>
          <Route path = '/tours' component = {Tours}/>
          <Route path = '/hotel-search' component = {HotelSearch} />
          <Route path = '/flight-search' component = {FlightSearch} />
          <Route path = '/login' component = {Login} />
          <Route path = '/sign-up' component = {Signup} />
          <Route path = '/hotels' component = {Hotels}/>
          {/* <Route path = '/hotel' component = {Hotel} /> */}
         </Switch>
        </div>
      </div >



    );
  }
}

export default App;
