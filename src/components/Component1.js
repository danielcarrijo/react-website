import React from 'react';
import Imagem1 from '../Imagem1.jpg';
import TypingText from '../components/TypingText.js'
export default function component1() {
    return (
        <div className="container-fluid" style={div}>
            <img src={Imagem1} className="pic1" alt="Background"/>
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


