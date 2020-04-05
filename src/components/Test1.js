import { Parallax } from 'react-scroll-parallax';
import React from 'react'
const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <img src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" />
    </Parallax>
);
export default ParallaxImage