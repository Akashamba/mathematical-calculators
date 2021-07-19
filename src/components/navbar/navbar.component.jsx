import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.styles.css'

export default function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <span className="main-title">{props.appName}</span>
                <Link to="/" className={props.appName === undefined ? 'main-title' : 'sec-title'}>
                    Mathematical Calculators
                </Link>
            </div>
        </div>
    )
}