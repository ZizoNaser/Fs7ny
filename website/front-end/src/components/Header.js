import React from 'react';
import logo from './../img/logo.png'
import SearchBar from './../containers/search-bar';
import UserNav from '../containers/user-nav/User';
import './../css/style.css';

const Header = () => (
    <header className = 'header'>
       <img src = {logo} alt = 'trillo logo' className = 'logo'/>
       <SearchBar/>
       {/* <UserNav/> */}
    </header>

);

export default Header;