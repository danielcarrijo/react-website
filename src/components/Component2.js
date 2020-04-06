import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";


export class Component2 extends Component {
    render() {
        return (
            
                    <div className="bg-black" id="component2" >
                        <div className="container-fluid c2Style" style={div}>
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <Spring
                                from = { {opacity: 0}}
                                to = {{opacity: isVisible ? 1 : 0}}
                                config = {{delay: isVisible ? 0 : 60000, duration: 500}}

                            >
                                { props => (
                                    <div style={props}>
                                        <span className="mb-3"></span>
                                        <h1 className=" ml-2 col-12 my-5 titles"><b>COMPONENT 2</b></h1>
                                        <h6 className=" ml-2 col-lg-5 col-md-6 col-sm-8 col-xs-12 mb-5 justify">Anim id cupidatat eiusmod sunt amet consequat eiusmod. Adipisicing id esse eu incididunt enim incididunt aute tempor exercitation reprehenderit sint do.</h6>
                                        <button className="ml-4 p-2 col-sm-4 col-xs-4 col-md-2" style={button} >Read More</button>
                                    </div>
                                )}
                                </Spring>
                            )}
                        </VisibilitySensor>
                            
                            
                        </div>
                    </div>
            
            
        )
    }
}

export default Component2

const div = {
    overflowY:'none',
    overflowX:'none'
}

const button = {
    border: '2px white solid',
    background: 'none',
    color: 'white'
}