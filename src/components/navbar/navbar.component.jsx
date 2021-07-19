import React from 'react'
import './navbar.styles.css'

export default function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <span className="main-title">{props.appName}</span>
                <span className={props.appName === undefined ? 'main-title' : 'sec-title'}>
                    Mathematical Calculators
                </span>
            </div>
        </div>
    )
}