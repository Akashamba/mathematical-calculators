import React from 'react'
import Navbar from '../../components/navbar/navbar.component.jsx'
// import calculateRoots from '../../utilities.js'
import './quadratic.styles.css'

export default function quadratic() {
    return (
        <div>
            <Navbar appName="Quadratic Equation Roots"/>
            <div className="content">
                <p className="quadratic-equation">
                    ax<sup>2</sup> + bx + c
                </p>
                <br/>
                <form style={{textAlign: "center"}}>
                    <div className="quadratic-inputs">
                        <input type="number" placeholder="Coefficient 'a'" id="coefficient-a" className="quadratic-input"/>
                        <input type="number" placeholder="Coefficient 'b'" id="coefficient-b" className="quadratic-input"/>
                        <input type="number" placeholder="Coefficient 'c'" id="coefficient-c" className="quadratic-input"/>
                    </div>
                    <br/>
                    <input className="button" type="submit" value="Calculate Roots"/>
                </form>
            </div>
        </div>
    )
}