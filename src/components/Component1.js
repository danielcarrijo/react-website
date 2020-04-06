import React from 'react';
import Imagem from '../components/Imagem.js';
import TypingText from '../components/TypingText.js'
export default function component1() {
    return (
        <div className="container-fluid" id="component1" style={div}>
            <Imagem />
            <div  className="caption_pic1 pb-5">
                <h1 className="title">WE ARE <b>LOREM TECHNOLOGY</b></h1>
                <h1 className="subtitle">WE HELP YOU TO</h1>
                <h1 className="texteffect">
                <TypingText />
                </h1>
            </div>
        </div>
    )
}



const div = {
    overflowY:'none',
    overflowX:'hidden'
}


