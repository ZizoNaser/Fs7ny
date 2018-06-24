import React from 'react';
import logo from './../img/logo.png'
import SearchBar from './../containers/search-form';
import './../css/style.css';

const Header = () => (
    <header className = 'header'>
       <img src = {logo} alt = 'trillo logo' className = 'logo'/>
       <SearchBar/>

    </header>

);

export default Header;