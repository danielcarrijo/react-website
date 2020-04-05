import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";



export class Component3 extends Component {
    render() {
        return (
            <div className="bg-black">
                <div className="container-fluid c3Style" style={div}>
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
                                <h1 className=" ml-2 col-12 my-5 titles"><b>COMPONENT 3</b></h1>
                                <h6 className=" ml-2 col-lg-5 col-md-6 col-sm-8 col-xs-12 mb-5 justify">Velit tempor tempor id commodo ea sit qui. Culpa consectetur culpa sit incididunt consequat aliquip aliqua deserunt reprehenderit id aliquip et. Dolore quis voluptate consequat aliquip incididunt magna aliqua occaecat consequat ipsum labore ea. Reprehenderit sit laboris consectetur culpa.</h6>
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

export default Component3

const button = {
    border: '2px white solid',
    background: 'none',
    color: 'white'
}

const div = {
    overflowY:'none',
    overflowX:'none'
}