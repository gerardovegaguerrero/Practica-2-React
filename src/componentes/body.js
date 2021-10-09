import React, { Component } from 'react';
import './body.css';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class Body extends Component
{
    render()
    {
        
        return(
            <div className="App-body">
            {this.props.texto}
            <h1> </h1>
            <ol> {
               this.props.temas.map((p,index)=><li key={index}>{p}</li>)
            }</ol>
            <Button variant="primary" onClick={this.props.mensaje}>Dale Click</Button>
            </div>
            
         
        );
    }
}
export default Body;

Body.propType=
{
    texto:propTypes.string,
    numero:propTypes.number
    


}