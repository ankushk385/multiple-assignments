import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import { useTranslation } from "react-i18next";
import "./css/hover.css"
import "./css/styles.css"
import '../../../node_modules/animate.css/animate.min.css'
const AnimateCss = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="title">
                <h1>{t('animate_page_headline')}</h1></div>
            <div className="animations-container">
            <Component1/>
            <Component2/>
            
          
        </div>
        </>
    )
}




export default AnimateCss
