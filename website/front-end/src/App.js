import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SideBar from './components/side-bar/sider-bar';
import './css/style.css';
import {Route} from 'react-router-dom';
import Hotel from './containers/Hotel';
import Tours from './containers/Tours';
import HotelSearch from './components/hotel-search/Form';

class App extends Component {
  render() {
    return (
      <div className='container' >
        <Header />
        <div className='content'>
          <SideBar />
          <main className = 'hotel-search-view'>
          <Route path = '/' exact component = {Hotel}/>
          <Route path = '/tours' component = {Tours}/>
          <Route path = '/hotel-search' component = {HotelSearch} />
          </main>
        </div>
      </div >



    );
  }
}

export default App;
