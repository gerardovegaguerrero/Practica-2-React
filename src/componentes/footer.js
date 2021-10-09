import React, { Component } from 'react';
import './footer.css';
import propTypes from 'prop-types';

class Footer extends Component
{
    render()
    {
        return(
            <div className="App-footer">
            {this.props.pie}
            </div>
            
            
         
        );
    }
}
export default Footer;

Footer.propType=
{
    texto:propTypes.string,
    numero:propTypes.number
}