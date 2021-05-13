import React from 'react'
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/apexjs">Apex-chart</NavLink>
            <NavLink to="/chartjs">Chart js</NavLink>
            <NavLink to="/animate">Animate/Hover Css</NavLink>
            <NavLink to="/useform">useForm/useeffect dependencies</NavLink>
        </div>
    )
}

export default Navbar
