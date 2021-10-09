import React, { Component } from 'react';
import './header.css';
import Logo from '../logotec.svg';
class Header extends Component
{
    render()
    {
        return(
            <div className="App-header">
           {<img style={{height: '10vh', alignitems: 'center'}} src={Logo} className="Logo" alt="logo" />}
            </div>
            
        );
    }
}
export default Header;