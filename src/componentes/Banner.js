import React, { Component } from 'react';
import './banner.css';


class Banner extends Component
{
    render()
    {
        return(
            <div className="App-banner">
           {this.props.texto1}
            </div>
            
            
         
        );
    }
}
export default Banner;

Banner.defaultProps=
{
    texto1:"se te olvido algo men"
}