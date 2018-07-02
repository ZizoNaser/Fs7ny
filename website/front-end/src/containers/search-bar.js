import React, {Component} from 'react';
import Icon from 'react-use-svg';
import './../css/style.css';

class Form extends Component{
    state = {
        query:'',
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }
    
    render(){
        return(
            <form className = 'search'>
              <input type = 'text' placeholder = 'Search' className = 'search__input'
                  onChange = {this.handleInputChange}
                  ref = {input => this.search = input}/>
              <button className = 'search__button'>
                  <svg className = 'search__icon'>
                   <Icon id = 'icon-magnifying-glass'/>
                  </svg>
              </button>
            </form>
        );
    }
}

export default Form;