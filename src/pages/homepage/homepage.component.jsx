import React from 'react'
import Navbar from '../../components/navbar/navbar.component.jsx'
import {Link} from 'react-router-dom'
import './homepage.styles.css'

export default function homepage() {
    return (
        <div>
            <Navbar/>
            <div className="content">
                Homepage
                <br/>
                <Link to="/quadratic-equation-root">Quadratic Equation Roots</Link><br/>
                <Link to="/gcd">GCD</Link>
            </div>
        </div>
    )
}    