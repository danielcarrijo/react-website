import React, { Component } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
export class Main extends Component {
    render() {
        return (
            <div>
                <Component1 />
                <Component2 />
                <Component3 />
                <Component4 />
            </div>
        )
    }
}

export default Main
