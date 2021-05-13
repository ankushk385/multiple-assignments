import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'

import "./css/hover.css"
import "./css/styles.css"
import '../../../node_modules/animate.css/animate.min.css'
const AnimateCss = () => {
    return (
        <>
            <div className="title">
                <h1>Animate objects using<span className="animate__animated animate__zoomInDown"> Animate.css </span>and <span className="hvr-skew-forward">Hover.css</span> </h1></div>
            <div className="animations-container">
            <Component1/>
            <Component2/>
            
          
        </div>
        </>
    )
}




export default AnimateCss
