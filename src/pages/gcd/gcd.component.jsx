import React from 'react'
import Navbar from '../../components/navbar/navbar.component.jsx'
import './gcd.styles.css'

class GCD extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 0,
            b: 0,
            gcd: 0
        };
    }

    gcd(a, b) {
        if(a%b === 0)
            return b;
        else return this.gcd(b, a%b);
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value, gcd: 0 });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {a, b} = this.state;
        this.setState({ gcd: this.gcd(a, b) });
    }

    render() {
        return (
            <div>
            <Navbar appName="Greatest Common Divisor (GCD)"/>
                <h1>GCD Calculator</h1>
                <p>Enter Numbers</p>
                <form onSubmit={this.handleSubmit}>
                    a: <input name="a" value={this.state.a} onChange={this.handleChange}/><br/>
                    b: <input name="b" value={this.state.b} onChange={this.handleChange}/><br/><br/>
                    <button>Submit</button>
                </form>
                <p>GCD: {this.state.gcd}</p>       
            </div>



        )
    }
}

export default GCD; 