import Imagem from '../components/Imagem.js';
import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className="container-fluid" id="component1" style={div}>
                <Imagem />
                <div className="caption_pic1 pb-5">
                    <h1 className="title">LET'S BUILD<b> A WEBSITE</b> WITH US?</h1>
                </div>
                <div className="c5Style">
                    <div>
                        <h6><b>New Business </b></h6>
                        <span>XXXX-XXXX</span>
                        <span>comercial@xxxxxx.com</span>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact

const div = {
    overflowY:'none',
    overflowX:'hidden'
}



