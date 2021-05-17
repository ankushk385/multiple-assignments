import React from 'react'
import {NavLink} from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";

const languages = [
    {
        code : 'fr',
        name:'Français',
        country_code:'fr'
    },
    {
        code : 'en',
        name:'English',
        country_code:'en'
    }
]
const Navbar = () => {

    const {t} = useTranslation();

    return (
        <div className="navbar">
            <div><div class="dropdown">
    <button class="dropbtn">{t('change_language_tag')}
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <ul>
          {languages.map(({code,name,country_code})=>(
              <li key={country_code}>
                  <button className="list-button" onClick={()=>i18next.changeLanguage(code)}>
                      {name}
                  </button>
              </li>
          ))}
      </ul>
    </div>
  </div> </div>

  <div><NavLink to="/home">{t('home_tag')}</NavLink>
            <NavLink to="/apexjs">{t('apex_chart_tag')}</NavLink>
            <NavLink to="/chartjs">{t('chartjs_tag')}</NavLink>
            <NavLink to="/animate">{t('animate_hover_tag')}</NavLink>
            <NavLink to="/useform">{t('useform_tag')}</NavLink></div>
        </div>
    )
}

export default Navbar
