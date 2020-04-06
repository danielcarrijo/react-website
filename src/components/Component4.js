import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Component4 extends Component {
    render() {
        return (
            <Link to="/contact">
                 <div className="container-fluid c4Style" id="component4">
                    <h1><center>Contact us</center></h1>  
                </div>
            </Link >
           
        )
    }
}

export default Component4
